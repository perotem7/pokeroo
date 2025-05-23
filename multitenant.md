# Pokeroo Multitenancy Implementation Guide

## Current Architecture Analysis

**Technology Stack:**

- Next.js 15.3.0 with App Router
- NextAuth.js 5.0 for authentication (credentials provider)
- Prisma 6.6.0 with PostgreSQL
- TypeScript
- Tailwind CSS

**Current Database Schema:**

```prisma
User (users)
├── id: String (UUID, Primary Key)
├── username: String (Unique)
├── passwordHash: String
├── createdAt: DateTime
├── updatedAt: DateTime
└── players: Player[] (One-to-Many)

Player (players)
├── id: String (UUID, Primary Key)
├── name: String
├── createdById: String (Foreign Key to User)
├── createdAt: DateTime
├── updatedAt: DateTime
├── createdBy: User (Many-to-One)
├── pokerEvents: PlayerInEvent[] (One-to-Many)
└── hostedEvents: PokerEvent[] (One-to-Many)

PokerEvent (poker_events)
├── id: String (UUID, Primary Key)
├── date: DateTime
├── status: EventStatus (ONGOING, COMPLETED, CANCELLED)
├── hostId: String (Foreign Key to Player)
├── createdAt: DateTime
├── updatedAt: DateTime
├── host: Player (Many-to-One)
└── players: PlayerInEvent[] (One-to-Many)

PlayerInEvent (player_in_event)
├── id: String (UUID, Primary Key)
├── buyIns: Int (Default: 0)
├── cashOutAmount: Int? (Optional)
├── eventId: String (Foreign Key to PokerEvent)
├── playerId: String (Foreign Key to Player)
├── createdAt: DateTime
├── updatedAt: DateTime
├── event: PokerEvent (Many-to-One)
└── player: Player (Many-to-One)
```

**Current Data Isolation:**
✅ **Already Implemented (Single-Tenant per User):**

- Users can only see/manage their own players (via `createdById`)
- Users can only create events with their own players as hosts
- Users can only see events hosted by their players
- All API routes verify ownership through session user ID

## Multitenancy Implementation Strategy

### 1. Multitenancy Model Selection

**Recommended Approach: Row-Level Security (Database-Level)**

- Add `tenantId` to all tenant-scoped tables
- Implement database-level row-level security policies
- Maintain separate schemas for tenant isolation
- Benefits: Strong data isolation, scalable, cost-effective

**Alternative Approaches:**

- **Schema-per-tenant**: Separate database schemas for each tenant
- **Database-per-tenant**: Separate databases for each tenant (for enterprise customers)

### 2. Database Schema Changes

#### Step 1: Add Tenant Model

```prisma
model Tenant {
  id          String   @id @default(uuid())
  name        String
  subdomain   String   @unique // e.g., 'acme' for acme.pokeroo.com
  customDomain String?  @unique // e.g., 'poker.acme.com'
  plan        TenantPlan @default(FREE)
  settings    Json?    // Tenant-specific configuration
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  // Relationships
  users       User[]

  @@map("tenants")
}

enum TenantPlan {
  FREE
  PROFESSIONAL
  ENTERPRISE
}
```

#### Step 2: Add TenantId to User Model

```prisma
model User {
  id           String   @id @default(uuid())
  username     String   // Remove @unique - username unique per tenant
  email        String?  // Add email for better user management
  passwordHash String
  role         UserRole @default(MEMBER)
  tenantId     String   @map("tenant_id")
  isActive     Boolean  @default(true)
  createdAt    DateTime @default(now()) @map("created_at")
  updatedAt    DateTime @updatedAt @map("updated_at")

  // Relationships
  tenant       Tenant   @relation(fields: [tenantId], references: [id], onDelete: Cascade)
  players      Player[] // A user can create multiple players

  @@unique([username, tenantId]) // Username unique per tenant
  @@unique([email, tenantId])    // Email unique per tenant (if used)
  @@index([tenantId])
  @@map("users")
}

enum UserRole {
  OWNER    // Tenant owner/admin
  ADMIN    // Tenant admin
  MEMBER   // Regular user
}
```

#### Step 3: Add TenantId to All Tenant-Scoped Models

```prisma
model Player {
  id        String   @id @default(uuid())
  name      String
  tenantId  String   @map("tenant_id")
  createdById String @map("created_by_id")
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  // Relationships
  tenant       Tenant          @relation(fields: [tenantId], references: [id], onDelete: Cascade)
  createdBy    User            @relation(fields: [createdById], references: [id])
  pokerEvents  PlayerInEvent[] // Events this player participated in
  hostedEvents PokerEvent[]    // Events this player hosted

  @@index([tenantId])
  @@index([tenantId, createdById])
  @@map("players")
}

model PokerEvent {
  id        String      @id @default(uuid())
  date      DateTime    @default(now())
  status    EventStatus @default(ONGOING)
  tenantId  String      @map("tenant_id")
  hostId    String      @map("host_id")
  createdAt DateTime    @default(now()) @map("created_at")
  updatedAt DateTime    @updatedAt @map("updated_at")

  // Relationships
  tenant   Tenant           @relation(fields: [tenantId], references: [id], onDelete: Cascade)
  host     Player           @relation(fields: [hostId], references: [id])
  players  PlayerInEvent[]  // Players participating in this event

  @@index([tenantId])
  @@index([tenantId, hostId])
  @@map("poker_events")
}

model PlayerInEvent {
  id            String   @id @default(uuid())
  buyIns        Int      @default(0)
  cashOutAmount Int?     @map("cash_out_amount")
  tenantId      String   @map("tenant_id")
  eventId       String   @map("event_id")
  playerId      String   @map("player_id")
  createdAt     DateTime @default(now()) @map("created_at")
  updatedAt     DateTime @updatedAt @map("updated_at")

  // Relationships
  tenant   Tenant     @relation(fields: [tenantId], references: [id], onDelete: Cascade)
  event    PokerEvent @relation(fields: [eventId], references: [id], onDelete: Cascade)
  player   Player     @relation(fields: [playerId], references: [id], onDelete: Cascade)

  @@unique([eventId, playerId]) // Ensure a player can only be added once per event
  @@index([tenantId])
  @@index([tenantId, eventId])
  @@index([tenantId, playerId])
  @@map("player_in_event")
}
```

### 3. Authentication & Session Changes

#### Step 1: Update NextAuth Configuration

```typescript
// src/lib/auth.config.ts
async authorize(credentials) {
  // ... existing validation ...

  const user = await prisma.user.findFirst({
    where: {
      username: username,
      tenant: {
        isActive: true // Only allow login to active tenants
      }
    },
    include: {
      tenant: {
        select: {
          id: true,
          name: true,
          subdomain: true,
          plan: true,
          isActive: true
        }
      }
    }
  });

  if (!user || !user.tenant?.isActive) {
    return null;
  }

  // ... password validation ...

  return {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
    tenantId: user.tenantId,
    tenant: user.tenant
  };
}

// Update session callback
async session({ session, token }) {
  if (token?.id && session.user) {
    session.user.id = token.id as string;
    session.user.username = token.username as string;
    session.user.email = token.email as string;
    session.user.role = token.role as string;
    session.user.tenantId = token.tenantId as string;
    session.user.tenant = token.tenant as any;
  }
  return session;
}
```

#### Step 2: Update TypeScript Types

```typescript
// src/types/next-auth.d.ts
declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      username?: string | null;
      email?: string | null;
      role?: string | null;
      tenantId?: string | null;
      tenant?: {
        id: string;
        name: string;
        subdomain: string;
        plan: string;
        isActive: boolean;
      } | null;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    username?: string | null;
    email?: string | null;
    role?: string | null;
    tenantId?: string | null;
    tenant?: any;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id?: string;
    username?: string | null;
    email?: string | null;
    role?: string | null;
    tenantId?: string | null;
    tenant?: any;
  }
}
```

### 4. Subdomain/Domain Routing

#### Step 1: Create Middleware for Tenant Resolution

```typescript
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";

  // Extract subdomain
  const subdomain = hostname.split(".")[0];

  // Skip middleware for localhost and main domain
  if (hostname.includes("localhost") || subdomain === "www" || !subdomain) {
    return NextResponse.next();
  }

  try {
    // Look up tenant by subdomain
    const tenant = await prisma.tenant.findUnique({
      where: { subdomain },
      select: { id: true, isActive: true },
    });

    if (!tenant || !tenant.isActive) {
      // Redirect to main site or show 404
      return NextResponse.redirect(
        new URL("https://www.pokeroo.com/not-found", request.url)
      );
    }

    // Add tenant ID to headers for use in API routes
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-tenant-id", tenant.id);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.redirect(
      new URL("https://www.pokeroo.com/error", request.url)
    );
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/health (health checks)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api/health|_next/static|_next/image|favicon.ico).*)",
  ],
};
```

#### Step 2: Create Tenant Context Helper

```typescript
// src/lib/tenant.ts
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getCurrentTenant() {
  const session = await auth();

  if (session?.user?.tenantId) {
    return {
      id: session.user.tenantId,
      ...session.user.tenant,
    };
  }

  // Fallback to header-based tenant (for public pages)
  const headersList = headers();
  const tenantId = headersList.get("x-tenant-id");

  if (tenantId) {
    const tenant = await prisma.tenant.findUnique({
      where: { id: tenantId },
      select: {
        id: true,
        name: true,
        subdomain: true,
        plan: true,
        isActive: true,
      },
    });
    return tenant;
  }

  return null;
}

export async function requireTenant() {
  const tenant = await getCurrentTenant();
  if (!tenant || !tenant.isActive) {
    throw new Error("Tenant not found or inactive");
  }
  return tenant;
}
```

### 5. Database Query Updates

#### Step 1: Create Tenant-Aware Prisma Client

```typescript
// src/lib/prisma-tenant.ts
import { PrismaClient } from "@/generated/prisma";
import { getCurrentTenant } from "@/lib/tenant";

export async function getTenantPrisma() {
  const tenant = await getCurrentTenant();

  if (!tenant) {
    throw new Error("No tenant context available");
  }

  // Create Prisma client with tenant-aware queries
  const prisma = new PrismaClient();

  // Add middleware to automatically filter by tenantId
  prisma.$use(async (params, next) => {
    // Models that should be tenant-scoped
    const tenantScopedModels = ["player", "pokerEvent", "playerInEvent"];

    if (tenantScopedModels.includes(params.model?.toLowerCase() || "")) {
      if (
        params.action === "findMany" ||
        params.action === "findFirst" ||
        params.action === "findUnique"
      ) {
        params.args.where = {
          ...params.args.where,
          tenantId: tenant.id,
        };
      } else if (params.action === "create") {
        params.args.data = {
          ...params.args.data,
          tenantId: tenant.id,
        };
      } else if (params.action === "createMany") {
        if (Array.isArray(params.args.data)) {
          params.args.data = params.args.data.map((item: any) => ({
            ...item,
            tenantId: tenant.id,
          }));
        }
      } else if (
        params.action === "update" ||
        params.action === "updateMany" ||
        params.action === "delete" ||
        params.action === "deleteMany"
      ) {
        params.args.where = {
          ...params.args.where,
          tenantId: tenant.id,
        };
      }
    }

    return next(params);
  });

  return { prisma, tenant };
}
```

#### Step 2: Update All API Routes

```typescript
// Example: src/app/api/players/route.ts
import { getTenantPrisma } from "@/lib/prisma-tenant";
import { auth } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { prisma } = await getTenantPrisma();

    const players = await prisma.player.findMany({
      where: {
        createdById: session.user.id,
        // tenantId automatically added by middleware
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(players);
  } catch (error) {
    console.error("Error fetching players:", error);
    return NextResponse.json(
      { error: "Failed to fetch players" },
      { status: 500 }
    );
  }
}
```

### 6. Signup Flow Changes

#### Step 1: Create Tenant Registration Page

```typescript
// src/app/signup/page.tsx
export default function SignupPage() {
  const [formData, setFormData] = useState({
    // Tenant information
    tenantName: "",
    subdomain: "",

    // User information
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to the new tenant subdomain
        window.location.href = `https://${data.subdomain}.pokeroo.com/login`;
      } else {
        setError(data.error || "Sign-up failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred during sign-up. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Tenant fields */}
      <input
        placeholder="Organization Name"
        value={formData.tenantName}
        onChange={(e) =>
          setFormData({ ...formData, tenantName: e.target.value })
        }
        required
      />
      <input
        placeholder="Subdomain"
        value={formData.subdomain}
        onChange={(e) =>
          setFormData({ ...formData, subdomain: e.target.value })
        }
        required
      />

      {/* User fields */}
      <input
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
        required
      />

      <button type="submit">Create Organization</button>
    </form>
  );
}
```

#### Step 2: Update Signup API Route

```typescript
// src/app/api/auth/signup/route.ts
export async function POST(request: Request) {
  try {
    const { tenantName, subdomain, username, email, password } =
      await request.json();

    // Validation
    if (!tenantName || !subdomain || !username || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if subdomain is available
    const existingTenant = await prisma.tenant.findUnique({
      where: { subdomain },
    });

    if (existingTenant) {
      return NextResponse.json(
        { error: "Subdomain already exists" },
        { status: 409 }
      );
    }

    // Create tenant and user in transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create tenant
      const tenant = await tx.tenant.create({
        data: {
          name: tenantName,
          subdomain: subdomain.toLowerCase(),
          plan: "FREE",
          isActive: true,
        },
      });

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);

      // Create user as tenant owner
      const user = await tx.user.create({
        data: {
          username,
          email,
          passwordHash,
          role: "OWNER",
          tenantId: tenant.id,
          isActive: true,
        },
      });

      return { tenant, user };
    });

    return NextResponse.json(
      {
        message: "Organization created successfully",
        subdomain: result.tenant.subdomain,
        tenantId: result.tenant.id,
        userId: result.user.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
```

### 7. Login Flow Changes

#### Step 1: Update Login Page for Tenant Context

```typescript
// src/app/login/page.tsx
export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { data: tenant } = useCurrentTenant(); // Custom hook to get tenant from context

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      username: credentials.username,
      password: credentials.password,
      tenantId: tenant?.id, // Pass tenant context
    });

    if (result?.ok) {
      router.push("/events");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Sign in to {tenant?.name || "Pokeroo"}</h1>
      <form onSubmit={handleSubmit}>{/* Login form fields */}</form>
    </div>
  );
}
```

### 8. Migration Strategy

#### Step 1: Create Migration Scripts

```sql
-- Migration: Add tenants table
CREATE TABLE "tenants" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subdomain" TEXT NOT NULL,
    "custom_domain" TEXT,
    "plan" "TenantPlan" NOT NULL DEFAULT 'FREE',
    "settings" JSONB,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "tenants_pkey" PRIMARY KEY ("id")
);

-- Migration: Add tenant_id to existing tables
ALTER TABLE "users" ADD COLUMN "tenant_id" TEXT;
ALTER TABLE "users" ADD COLUMN "email" TEXT;
ALTER TABLE "users" ADD COLUMN "role" "UserRole" NOT NULL DEFAULT 'MEMBER';
ALTER TABLE "users" ADD COLUMN "is_active" BOOLEAN NOT NULL DEFAULT true;

ALTER TABLE "players" ADD COLUMN "tenant_id" TEXT;
ALTER TABLE "poker_events" ADD COLUMN "tenant_id" TEXT;
ALTER TABLE "player_in_event" ADD COLUMN "tenant_id" TEXT;

-- Create default tenant for existing data
INSERT INTO "tenants" ("id", "name", "subdomain", "plan", "is_active")
VALUES ('default-tenant-id', 'Default Organization', 'default', 'FREE', true);

-- Update existing records to belong to default tenant
UPDATE "users" SET "tenant_id" = 'default-tenant-id', "role" = 'OWNER';
UPDATE "players" SET "tenant_id" = 'default-tenant-id';
UPDATE "poker_events" SET "tenant_id" = 'default-tenant-id';
UPDATE "player_in_event" SET "tenant_id" = 'default-tenant-id';

-- Add constraints after data migration
ALTER TABLE "users" ALTER COLUMN "tenant_id" SET NOT NULL;
ALTER TABLE "players" ALTER COLUMN "tenant_id" SET NOT NULL;
ALTER TABLE "poker_events" ALTER COLUMN "tenant_id" SET NOT NULL;
ALTER TABLE "player_in_event" ALTER COLUMN "tenant_id" SET NOT NULL;

-- Add foreign key constraints
ALTER TABLE "users" ADD CONSTRAINT "users_tenant_id_fkey"
    FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE;
-- (Add similar constraints for other tables)

-- Update unique constraints
DROP INDEX "users_username_key";
CREATE UNIQUE INDEX "users_username_tenant_id_key" ON "users"("username", "tenant_id");
```

### 9. Testing Strategy

#### Step 1: Create Test Utilities

```typescript
// src/lib/test-utils.ts
export async function createTestTenant(name: string, subdomain: string) {
  return prisma.tenant.create({
    data: {
      name,
      subdomain,
      plan: "FREE",
      isActive: true,
    },
  });
}

export async function createTestUser(tenantId: string, username: string) {
  const passwordHash = await bcrypt.hash("password123", 10);
  return prisma.user.create({
    data: {
      username,
      email: `${username}@example.com`,
      passwordHash,
      role: "MEMBER",
      tenantId,
      isActive: true,
    },
  });
}
```

#### Step 2: Write Tenant Isolation Tests

```typescript
// tests/tenant-isolation.test.ts
describe("Tenant Isolation", () => {
  it("should not allow access to other tenant data", async () => {
    const tenant1 = await createTestTenant("Tenant 1", "tenant1");
    const tenant2 = await createTestTenant("Tenant 2", "tenant2");

    const user1 = await createTestUser(tenant1.id, "user1");
    const user2 = await createTestUser(tenant2.id, "user2");

    // Test that user1 cannot see user2's data
    // Add specific test cases
  });
});
```

### 10. Deployment Considerations

#### Step 1: Environment Variables

```env
# Add to .env
NEXTAUTH_URL=https://app.pokeroo.com
MAIN_DOMAIN=pokeroo.com
TENANT_DOMAIN_PATTERN=*.pokeroo.com

# Database connection with proper pooling
DATABASE_URL="postgresql://..."
DATABASE_POOL_SIZE=10
```

#### Step 2: DNS Configuration

- Set up wildcard DNS: `*.pokeroo.com` → your server
- Configure SSL certificates for wildcard domain
- Set up CDN routing for static assets

### 11. Security Considerations

1. **Row-Level Security**: Implement database-level RLS policies
2. **Input Validation**: Validate subdomain format and availability
3. **Rate Limiting**: Implement tenant-specific rate limiting
4. **Data Encryption**: Encrypt sensitive tenant data
5. **Audit Logging**: Log all tenant-scoped operations
6. **Backup Strategy**: Implement tenant-aware backup and restore

### 12. Performance Optimization

1. **Database Indexing**: Add proper indexes on tenantId columns
2. **Connection Pooling**: Use tenant-aware connection pooling
3. **Caching**: Implement tenant-scoped caching
4. **CDN**: Use tenant-aware CDN configuration
5. **Monitoring**: Set up tenant-specific monitoring and alerts

---

## Implementation Checklist

### Phase 1: Core Infrastructure

- [ ] Add Tenant model to Prisma schema
- [ ] Create migration scripts
- [ ] Update User model with tenantId
- [ ] Add tenant resolution middleware
- [ ] Create tenant context utilities

### Phase 2: Authentication Updates

- [ ] Update NextAuth configuration
- [ ] Modify login/signup flows
- [ ] Update TypeScript types
- [ ] Create tenant-aware session management

### Phase 3: Database Layer

- [ ] Add tenantId to all models
- [ ] Create tenant-aware Prisma client
- [ ] Update all API routes
- [ ] Implement row-level security

### Phase 4: Frontend Changes

- [ ] Update signup page for tenant creation
- [ ] Modify login page for tenant context
- [ ] Add tenant switching (if needed)
- [ ] Update navigation and branding

### Phase 5: Testing & Security

- [ ] Write tenant isolation tests
- [ ] Implement security policies
- [ ] Add audit logging
- [ ] Performance testing

### Phase 6: Deployment

- [ ] Set up DNS and SSL
- [ ] Configure monitoring
- [ ] Deploy with zero downtime
- [ ] Data migration for existing users

---

This guide provides a comprehensive roadmap for implementing multitenancy in your Pokeroo application. Start with Phase 1 and work through each phase systematically to ensure a smooth transition to a multitenant architecture.
