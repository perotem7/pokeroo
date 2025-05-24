/*
  Warnings:

  - You are about to drop the column `passwordHash` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username,tenant_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email,tenant_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tenant_id` to the `player_in_event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenant_id` to the `players` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenant_id` to the `poker_events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password_hash` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenant_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TenantPlan" AS ENUM ('FREE', 'PROFESSIONAL', 'ENTERPRISE');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('OWNER', 'ADMIN', 'MEMBER');

-- CreateTable (create tenants table first)
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

-- CreateIndex
CREATE UNIQUE INDEX "tenants_subdomain_key" ON "tenants"("subdomain");
CREATE UNIQUE INDEX "tenants_custom_domain_key" ON "tenants"("custom_domain");

-- Insert default tenant for existing data
INSERT INTO "tenants" ("id", "name", "subdomain", "plan", "is_active", "created_at", "updated_at")
VALUES ('default-tenant-id', 'Default Organization', 'default', 'FREE', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Add nullable tenant_id columns first
ALTER TABLE "player_in_event" ADD COLUMN "tenant_id" TEXT;
ALTER TABLE "players" ADD COLUMN "tenant_id" TEXT;
ALTER TABLE "poker_events" ADD COLUMN "tenant_id" TEXT;

-- AlterTable users: Add new columns as nullable first, and rename passwordHash
ALTER TABLE "users" 
    ADD COLUMN "email" TEXT,
    ADD COLUMN "is_active" BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN "password_hash" TEXT,
    ADD COLUMN "role" "UserRole" NOT NULL DEFAULT 'MEMBER',
    ADD COLUMN "tenant_id" TEXT;

-- Copy data from passwordHash to password_hash
UPDATE "users" SET "password_hash" = "passwordHash";

-- Update existing records to belong to default tenant and set appropriate roles
UPDATE "users" SET 
    "tenant_id" = 'default-tenant-id', 
    "role" = 'OWNER',
    "is_active" = true;

UPDATE "players" SET "tenant_id" = 'default-tenant-id';
UPDATE "poker_events" SET "tenant_id" = 'default-tenant-id';
UPDATE "player_in_event" SET "tenant_id" = 'default-tenant-id';

-- Now make tenant_id columns NOT NULL
ALTER TABLE "users" ALTER COLUMN "tenant_id" SET NOT NULL;
ALTER TABLE "users" ALTER COLUMN "password_hash" SET NOT NULL;
ALTER TABLE "players" ALTER COLUMN "tenant_id" SET NOT NULL;
ALTER TABLE "poker_events" ALTER COLUMN "tenant_id" SET NOT NULL;
ALTER TABLE "player_in_event" ALTER COLUMN "tenant_id" SET NOT NULL;

-- Drop old passwordHash column and old indexes
DROP INDEX IF EXISTS "player_in_event_event_id_idx";
DROP INDEX IF EXISTS "player_in_event_player_id_idx";
DROP INDEX IF EXISTS "players_created_by_id_idx";
DROP INDEX IF EXISTS "poker_events_host_id_idx";
DROP INDEX IF EXISTS "users_username_key";

ALTER TABLE "users" DROP COLUMN "passwordHash";

-- Create new indexes
CREATE INDEX "player_in_event_tenant_id_idx" ON "player_in_event"("tenant_id");
CREATE INDEX "player_in_event_tenant_id_event_id_idx" ON "player_in_event"("tenant_id", "event_id");
CREATE INDEX "player_in_event_tenant_id_player_id_idx" ON "player_in_event"("tenant_id", "player_id");
CREATE INDEX "players_tenant_id_idx" ON "players"("tenant_id");
CREATE INDEX "players_tenant_id_created_by_id_idx" ON "players"("tenant_id", "created_by_id");
CREATE INDEX "poker_events_tenant_id_idx" ON "poker_events"("tenant_id");
CREATE INDEX "poker_events_tenant_id_host_id_idx" ON "poker_events"("tenant_id", "host_id");
CREATE INDEX "users_tenant_id_idx" ON "users"("tenant_id");

-- Create new unique constraints
CREATE UNIQUE INDEX "users_username_tenant_id_key" ON "users"("username", "tenant_id");
CREATE UNIQUE INDEX "users_email_tenant_id_key" ON "users"("email", "tenant_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "players" ADD CONSTRAINT "players_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "poker_events" ADD CONSTRAINT "poker_events_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "player_in_event" ADD CONSTRAINT "player_in_event_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
