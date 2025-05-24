
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model PokerEvent
 * 
 */
export type PokerEvent = $Result.DefaultSelection<Prisma.$PokerEventPayload>
/**
 * Model PlayerInEvent
 * 
 */
export type PlayerInEvent = $Result.DefaultSelection<Prisma.$PlayerInEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EventStatus: {
  ONGOING: 'ONGOING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus]


export const TenantPlan: {
  FREE: 'FREE',
  PROFESSIONAL: 'PROFESSIONAL',
  ENTERPRISE: 'ENTERPRISE'
};

export type TenantPlan = (typeof TenantPlan)[keyof typeof TenantPlan]


export const UserRole: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type EventStatus = $Enums.EventStatus

export const EventStatus: typeof $Enums.EventStatus

export type TenantPlan = $Enums.TenantPlan

export const TenantPlan: typeof $Enums.TenantPlan

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pokerEvent`: Exposes CRUD operations for the **PokerEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PokerEvents
    * const pokerEvents = await prisma.pokerEvent.findMany()
    * ```
    */
  get pokerEvent(): Prisma.PokerEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerInEvent`: Exposes CRUD operations for the **PlayerInEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerInEvents
    * const playerInEvents = await prisma.playerInEvent.findMany()
    * ```
    */
  get playerInEvent(): Prisma.PlayerInEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tenant: 'Tenant',
    User: 'User',
    Player: 'Player',
    PokerEvent: 'PokerEvent',
    PlayerInEvent: 'PlayerInEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenant" | "user" | "player" | "pokerEvent" | "playerInEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      PokerEvent: {
        payload: Prisma.$PokerEventPayload<ExtArgs>
        fields: Prisma.PokerEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokerEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokerEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokerEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokerEventPayload>
          }
          findFirst: {
            args: Prisma.PokerEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokerEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokerEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokerEventPayload>
          }
          findMany: {
            args: Prisma.PokerEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokerEventPayload>[]
          }
          create: {
            args: Prisma.PokerEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokerEventPayload>
          }
          createMany: {
            args: Prisma.PokerEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokerEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokerEventPayload>[]
          }
          delete: {
            args: Prisma.PokerEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokerEventPayload>
          }
          update: {
            args: Prisma.PokerEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokerEventPayload>
          }
          deleteMany: {
            args: Prisma.PokerEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokerEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokerEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokerEventPayload>[]
          }
          upsert: {
            args: Prisma.PokerEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokerEventPayload>
          }
          aggregate: {
            args: Prisma.PokerEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokerEvent>
          }
          groupBy: {
            args: Prisma.PokerEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokerEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokerEventCountArgs<ExtArgs>
            result: $Utils.Optional<PokerEventCountAggregateOutputType> | number
          }
        }
      }
      PlayerInEvent: {
        payload: Prisma.$PlayerInEventPayload<ExtArgs>
        fields: Prisma.PlayerInEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerInEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerInEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInEventPayload>
          }
          findFirst: {
            args: Prisma.PlayerInEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerInEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInEventPayload>
          }
          findMany: {
            args: Prisma.PlayerInEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInEventPayload>[]
          }
          create: {
            args: Prisma.PlayerInEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInEventPayload>
          }
          createMany: {
            args: Prisma.PlayerInEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerInEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInEventPayload>[]
          }
          delete: {
            args: Prisma.PlayerInEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInEventPayload>
          }
          update: {
            args: Prisma.PlayerInEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInEventPayload>
          }
          deleteMany: {
            args: Prisma.PlayerInEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerInEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerInEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInEventPayload>[]
          }
          upsert: {
            args: Prisma.PlayerInEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInEventPayload>
          }
          aggregate: {
            args: Prisma.PlayerInEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerInEvent>
          }
          groupBy: {
            args: Prisma.PlayerInEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerInEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerInEventCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerInEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tenant?: TenantOmit
    user?: UserOmit
    player?: PlayerOmit
    pokerEvent?: PokerEventOmit
    playerInEvent?: PlayerInEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    users: number
    players: number
    pokerEvents: number
    playerInEvents: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TenantCountOutputTypeCountUsersArgs
    players?: boolean | TenantCountOutputTypeCountPlayersArgs
    pokerEvents?: boolean | TenantCountOutputTypeCountPokerEventsArgs
    playerInEvents?: boolean | TenantCountOutputTypeCountPlayerInEventsArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountPokerEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokerEventWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountPlayerInEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerInEventWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    players: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | UserCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
  }


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    pokerEvents: number
    hostedEvents: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokerEvents?: boolean | PlayerCountOutputTypeCountPokerEventsArgs
    hostedEvents?: boolean | PlayerCountOutputTypeCountHostedEventsArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountPokerEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerInEventWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountHostedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokerEventWhereInput
  }


  /**
   * Count Type PokerEventCountOutputType
   */

  export type PokerEventCountOutputType = {
    players: number
  }

  export type PokerEventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | PokerEventCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes
  /**
   * PokerEventCountOutputType without action
   */
  export type PokerEventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokerEventCountOutputType
     */
    select?: PokerEventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PokerEventCountOutputType without action
   */
  export type PokerEventCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerInEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    subdomain: string | null
    customDomain: string | null
    plan: $Enums.TenantPlan | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    subdomain: string | null
    customDomain: string | null
    plan: $Enums.TenantPlan | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    subdomain: number
    customDomain: number
    plan: number
    settings: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    subdomain?: true
    customDomain?: true
    plan?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    subdomain?: true
    customDomain?: true
    plan?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    subdomain?: true
    customDomain?: true
    plan?: true
    settings?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    subdomain: string
    customDomain: string | null
    plan: $Enums.TenantPlan
    settings: JsonValue | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subdomain?: boolean
    customDomain?: boolean
    plan?: boolean
    settings?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Tenant$usersArgs<ExtArgs>
    players?: boolean | Tenant$playersArgs<ExtArgs>
    pokerEvents?: boolean | Tenant$pokerEventsArgs<ExtArgs>
    playerInEvents?: boolean | Tenant$playerInEventsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subdomain?: boolean
    customDomain?: boolean
    plan?: boolean
    settings?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subdomain?: boolean
    customDomain?: boolean
    plan?: boolean
    settings?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    subdomain?: boolean
    customDomain?: boolean
    plan?: boolean
    settings?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "subdomain" | "customDomain" | "plan" | "settings" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Tenant$usersArgs<ExtArgs>
    players?: boolean | Tenant$playersArgs<ExtArgs>
    pokerEvents?: boolean | Tenant$pokerEventsArgs<ExtArgs>
    playerInEvents?: boolean | Tenant$playerInEventsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      players: Prisma.$PlayerPayload<ExtArgs>[]
      pokerEvents: Prisma.$PokerEventPayload<ExtArgs>[]
      playerInEvents: Prisma.$PlayerInEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      subdomain: string
      customDomain: string | null
      plan: $Enums.TenantPlan
      settings: Prisma.JsonValue | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Tenant$usersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    players<T extends Tenant$playersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pokerEvents<T extends Tenant$pokerEventsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$pokerEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokerEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playerInEvents<T extends Tenant$playerInEventsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$playerInEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerInEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly subdomain: FieldRef<"Tenant", 'String'>
    readonly customDomain: FieldRef<"Tenant", 'String'>
    readonly plan: FieldRef<"Tenant", 'TenantPlan'>
    readonly settings: FieldRef<"Tenant", 'Json'>
    readonly isActive: FieldRef<"Tenant", 'Boolean'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.users
   */
  export type Tenant$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Tenant.players
   */
  export type Tenant$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    cursor?: PlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Tenant.pokerEvents
   */
  export type Tenant$pokerEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokerEvent
     */
    select?: PokerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokerEvent
     */
    omit?: PokerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokerEventInclude<ExtArgs> | null
    where?: PokerEventWhereInput
    orderBy?: PokerEventOrderByWithRelationInput | PokerEventOrderByWithRelationInput[]
    cursor?: PokerEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokerEventScalarFieldEnum | PokerEventScalarFieldEnum[]
  }

  /**
   * Tenant.playerInEvents
   */
  export type Tenant$playerInEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInEvent
     */
    select?: PlayerInEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInEvent
     */
    omit?: PlayerInEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInEventInclude<ExtArgs> | null
    where?: PlayerInEventWhereInput
    orderBy?: PlayerInEventOrderByWithRelationInput | PlayerInEventOrderByWithRelationInput[]
    cursor?: PlayerInEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerInEventScalarFieldEnum | PlayerInEventScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    tenantId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    tenantId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    passwordHash: number
    role: number
    tenantId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    role?: true
    tenantId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    role?: true
    tenantId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    role?: true
    tenantId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string | null
    passwordHash: string
    role: $Enums.UserRole
    tenantId: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    tenantId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    players?: boolean | User$playersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    tenantId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    tenantId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    tenantId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "passwordHash" | "role" | "tenantId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    players?: boolean | User$playersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      players: Prisma.$PlayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string | null
      passwordHash: string
      role: $Enums.UserRole
      tenantId: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    players<T extends User$playersArgs<ExtArgs> = {}>(args?: Subset<T, User$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly tenantId: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.players
   */
  export type User$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    cursor?: PlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerMinAggregateOutputType = {
    id: string | null
    name: string | null
    tenantId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    tenantId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    name: number
    tenantId: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlayerMinAggregateInputType = {
    id?: true
    name?: true
    tenantId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    name?: true
    tenantId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    name?: true
    tenantId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: string
    name: string
    tenantId: string
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: PlayerCountAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tenantId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    pokerEvents?: boolean | Player$pokerEventsArgs<ExtArgs>
    hostedEvents?: boolean | Player$hostedEventsArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tenantId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tenantId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    name?: boolean
    tenantId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tenantId" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    pokerEvents?: boolean | Player$pokerEventsArgs<ExtArgs>
    hostedEvents?: boolean | Player$hostedEventsArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      pokerEvents: Prisma.$PlayerInEventPayload<ExtArgs>[]
      hostedEvents: Prisma.$PokerEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      tenantId: string
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pokerEvents<T extends Player$pokerEventsArgs<ExtArgs> = {}>(args?: Subset<T, Player$pokerEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerInEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hostedEvents<T extends Player$hostedEventsArgs<ExtArgs> = {}>(args?: Subset<T, Player$hostedEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokerEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'String'>
    readonly name: FieldRef<"Player", 'String'>
    readonly tenantId: FieldRef<"Player", 'String'>
    readonly createdById: FieldRef<"Player", 'String'>
    readonly createdAt: FieldRef<"Player", 'DateTime'>
    readonly updatedAt: FieldRef<"Player", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player.pokerEvents
   */
  export type Player$pokerEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInEvent
     */
    select?: PlayerInEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInEvent
     */
    omit?: PlayerInEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInEventInclude<ExtArgs> | null
    where?: PlayerInEventWhereInput
    orderBy?: PlayerInEventOrderByWithRelationInput | PlayerInEventOrderByWithRelationInput[]
    cursor?: PlayerInEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerInEventScalarFieldEnum | PlayerInEventScalarFieldEnum[]
  }

  /**
   * Player.hostedEvents
   */
  export type Player$hostedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokerEvent
     */
    select?: PokerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokerEvent
     */
    omit?: PokerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokerEventInclude<ExtArgs> | null
    where?: PokerEventWhereInput
    orderBy?: PokerEventOrderByWithRelationInput | PokerEventOrderByWithRelationInput[]
    cursor?: PokerEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokerEventScalarFieldEnum | PokerEventScalarFieldEnum[]
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model PokerEvent
   */

  export type AggregatePokerEvent = {
    _count: PokerEventCountAggregateOutputType | null
    _min: PokerEventMinAggregateOutputType | null
    _max: PokerEventMaxAggregateOutputType | null
  }

  export type PokerEventMinAggregateOutputType = {
    id: string | null
    date: Date | null
    status: $Enums.EventStatus | null
    tenantId: string | null
    hostId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PokerEventMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    status: $Enums.EventStatus | null
    tenantId: string | null
    hostId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PokerEventCountAggregateOutputType = {
    id: number
    date: number
    status: number
    tenantId: number
    hostId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PokerEventMinAggregateInputType = {
    id?: true
    date?: true
    status?: true
    tenantId?: true
    hostId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PokerEventMaxAggregateInputType = {
    id?: true
    date?: true
    status?: true
    tenantId?: true
    hostId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PokerEventCountAggregateInputType = {
    id?: true
    date?: true
    status?: true
    tenantId?: true
    hostId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PokerEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokerEvent to aggregate.
     */
    where?: PokerEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokerEvents to fetch.
     */
    orderBy?: PokerEventOrderByWithRelationInput | PokerEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokerEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokerEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokerEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PokerEvents
    **/
    _count?: true | PokerEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokerEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokerEventMaxAggregateInputType
  }

  export type GetPokerEventAggregateType<T extends PokerEventAggregateArgs> = {
        [P in keyof T & keyof AggregatePokerEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokerEvent[P]>
      : GetScalarType<T[P], AggregatePokerEvent[P]>
  }




  export type PokerEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokerEventWhereInput
    orderBy?: PokerEventOrderByWithAggregationInput | PokerEventOrderByWithAggregationInput[]
    by: PokerEventScalarFieldEnum[] | PokerEventScalarFieldEnum
    having?: PokerEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokerEventCountAggregateInputType | true
    _min?: PokerEventMinAggregateInputType
    _max?: PokerEventMaxAggregateInputType
  }

  export type PokerEventGroupByOutputType = {
    id: string
    date: Date
    status: $Enums.EventStatus
    tenantId: string
    hostId: string
    createdAt: Date
    updatedAt: Date
    _count: PokerEventCountAggregateOutputType | null
    _min: PokerEventMinAggregateOutputType | null
    _max: PokerEventMaxAggregateOutputType | null
  }

  type GetPokerEventGroupByPayload<T extends PokerEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokerEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokerEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokerEventGroupByOutputType[P]>
            : GetScalarType<T[P], PokerEventGroupByOutputType[P]>
        }
      >
    >


  export type PokerEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    tenantId?: boolean
    hostId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    host?: boolean | PlayerDefaultArgs<ExtArgs>
    players?: boolean | PokerEvent$playersArgs<ExtArgs>
    _count?: boolean | PokerEventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokerEvent"]>

  export type PokerEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    tenantId?: boolean
    hostId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    host?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokerEvent"]>

  export type PokerEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    tenantId?: boolean
    hostId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    host?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokerEvent"]>

  export type PokerEventSelectScalar = {
    id?: boolean
    date?: boolean
    status?: boolean
    tenantId?: boolean
    hostId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PokerEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "status" | "tenantId" | "hostId" | "createdAt" | "updatedAt", ExtArgs["result"]["pokerEvent"]>
  export type PokerEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    host?: boolean | PlayerDefaultArgs<ExtArgs>
    players?: boolean | PokerEvent$playersArgs<ExtArgs>
    _count?: boolean | PokerEventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PokerEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    host?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type PokerEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    host?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $PokerEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PokerEvent"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      host: Prisma.$PlayerPayload<ExtArgs>
      players: Prisma.$PlayerInEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      status: $Enums.EventStatus
      tenantId: string
      hostId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pokerEvent"]>
    composites: {}
  }

  type PokerEventGetPayload<S extends boolean | null | undefined | PokerEventDefaultArgs> = $Result.GetResult<Prisma.$PokerEventPayload, S>

  type PokerEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokerEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokerEventCountAggregateInputType | true
    }

  export interface PokerEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PokerEvent'], meta: { name: 'PokerEvent' } }
    /**
     * Find zero or one PokerEvent that matches the filter.
     * @param {PokerEventFindUniqueArgs} args - Arguments to find a PokerEvent
     * @example
     * // Get one PokerEvent
     * const pokerEvent = await prisma.pokerEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokerEventFindUniqueArgs>(args: SelectSubset<T, PokerEventFindUniqueArgs<ExtArgs>>): Prisma__PokerEventClient<$Result.GetResult<Prisma.$PokerEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PokerEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokerEventFindUniqueOrThrowArgs} args - Arguments to find a PokerEvent
     * @example
     * // Get one PokerEvent
     * const pokerEvent = await prisma.pokerEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokerEventFindUniqueOrThrowArgs>(args: SelectSubset<T, PokerEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokerEventClient<$Result.GetResult<Prisma.$PokerEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokerEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokerEventFindFirstArgs} args - Arguments to find a PokerEvent
     * @example
     * // Get one PokerEvent
     * const pokerEvent = await prisma.pokerEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokerEventFindFirstArgs>(args?: SelectSubset<T, PokerEventFindFirstArgs<ExtArgs>>): Prisma__PokerEventClient<$Result.GetResult<Prisma.$PokerEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokerEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokerEventFindFirstOrThrowArgs} args - Arguments to find a PokerEvent
     * @example
     * // Get one PokerEvent
     * const pokerEvent = await prisma.pokerEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokerEventFindFirstOrThrowArgs>(args?: SelectSubset<T, PokerEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokerEventClient<$Result.GetResult<Prisma.$PokerEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PokerEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokerEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokerEvents
     * const pokerEvents = await prisma.pokerEvent.findMany()
     * 
     * // Get first 10 PokerEvents
     * const pokerEvents = await prisma.pokerEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokerEventWithIdOnly = await prisma.pokerEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokerEventFindManyArgs>(args?: SelectSubset<T, PokerEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokerEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PokerEvent.
     * @param {PokerEventCreateArgs} args - Arguments to create a PokerEvent.
     * @example
     * // Create one PokerEvent
     * const PokerEvent = await prisma.pokerEvent.create({
     *   data: {
     *     // ... data to create a PokerEvent
     *   }
     * })
     * 
     */
    create<T extends PokerEventCreateArgs>(args: SelectSubset<T, PokerEventCreateArgs<ExtArgs>>): Prisma__PokerEventClient<$Result.GetResult<Prisma.$PokerEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PokerEvents.
     * @param {PokerEventCreateManyArgs} args - Arguments to create many PokerEvents.
     * @example
     * // Create many PokerEvents
     * const pokerEvent = await prisma.pokerEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokerEventCreateManyArgs>(args?: SelectSubset<T, PokerEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PokerEvents and returns the data saved in the database.
     * @param {PokerEventCreateManyAndReturnArgs} args - Arguments to create many PokerEvents.
     * @example
     * // Create many PokerEvents
     * const pokerEvent = await prisma.pokerEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PokerEvents and only return the `id`
     * const pokerEventWithIdOnly = await prisma.pokerEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokerEventCreateManyAndReturnArgs>(args?: SelectSubset<T, PokerEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokerEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PokerEvent.
     * @param {PokerEventDeleteArgs} args - Arguments to delete one PokerEvent.
     * @example
     * // Delete one PokerEvent
     * const PokerEvent = await prisma.pokerEvent.delete({
     *   where: {
     *     // ... filter to delete one PokerEvent
     *   }
     * })
     * 
     */
    delete<T extends PokerEventDeleteArgs>(args: SelectSubset<T, PokerEventDeleteArgs<ExtArgs>>): Prisma__PokerEventClient<$Result.GetResult<Prisma.$PokerEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PokerEvent.
     * @param {PokerEventUpdateArgs} args - Arguments to update one PokerEvent.
     * @example
     * // Update one PokerEvent
     * const pokerEvent = await prisma.pokerEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokerEventUpdateArgs>(args: SelectSubset<T, PokerEventUpdateArgs<ExtArgs>>): Prisma__PokerEventClient<$Result.GetResult<Prisma.$PokerEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PokerEvents.
     * @param {PokerEventDeleteManyArgs} args - Arguments to filter PokerEvents to delete.
     * @example
     * // Delete a few PokerEvents
     * const { count } = await prisma.pokerEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokerEventDeleteManyArgs>(args?: SelectSubset<T, PokerEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokerEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokerEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokerEvents
     * const pokerEvent = await prisma.pokerEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokerEventUpdateManyArgs>(args: SelectSubset<T, PokerEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokerEvents and returns the data updated in the database.
     * @param {PokerEventUpdateManyAndReturnArgs} args - Arguments to update many PokerEvents.
     * @example
     * // Update many PokerEvents
     * const pokerEvent = await prisma.pokerEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PokerEvents and only return the `id`
     * const pokerEventWithIdOnly = await prisma.pokerEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokerEventUpdateManyAndReturnArgs>(args: SelectSubset<T, PokerEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokerEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PokerEvent.
     * @param {PokerEventUpsertArgs} args - Arguments to update or create a PokerEvent.
     * @example
     * // Update or create a PokerEvent
     * const pokerEvent = await prisma.pokerEvent.upsert({
     *   create: {
     *     // ... data to create a PokerEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokerEvent we want to update
     *   }
     * })
     */
    upsert<T extends PokerEventUpsertArgs>(args: SelectSubset<T, PokerEventUpsertArgs<ExtArgs>>): Prisma__PokerEventClient<$Result.GetResult<Prisma.$PokerEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PokerEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokerEventCountArgs} args - Arguments to filter PokerEvents to count.
     * @example
     * // Count the number of PokerEvents
     * const count = await prisma.pokerEvent.count({
     *   where: {
     *     // ... the filter for the PokerEvents we want to count
     *   }
     * })
    **/
    count<T extends PokerEventCountArgs>(
      args?: Subset<T, PokerEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokerEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PokerEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokerEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PokerEventAggregateArgs>(args: Subset<T, PokerEventAggregateArgs>): Prisma.PrismaPromise<GetPokerEventAggregateType<T>>

    /**
     * Group by PokerEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokerEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PokerEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokerEventGroupByArgs['orderBy'] }
        : { orderBy?: PokerEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PokerEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokerEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PokerEvent model
   */
  readonly fields: PokerEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PokerEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokerEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    host<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    players<T extends PokerEvent$playersArgs<ExtArgs> = {}>(args?: Subset<T, PokerEvent$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerInEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PokerEvent model
   */
  interface PokerEventFieldRefs {
    readonly id: FieldRef<"PokerEvent", 'String'>
    readonly date: FieldRef<"PokerEvent", 'DateTime'>
    readonly status: FieldRef<"PokerEvent", 'EventStatus'>
    readonly tenantId: FieldRef<"PokerEvent", 'String'>
    readonly hostId: FieldRef<"PokerEvent", 'String'>
    readonly createdAt: FieldRef<"PokerEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"PokerEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PokerEvent findUnique
   */
  export type PokerEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokerEvent
     */
    select?: PokerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokerEvent
     */
    omit?: PokerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokerEventInclude<ExtArgs> | null
    /**
     * Filter, which PokerEvent to fetch.
     */
    where: PokerEventWhereUniqueInput
  }

  /**
   * PokerEvent findUniqueOrThrow
   */
  export type PokerEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokerEvent
     */
    select?: PokerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokerEvent
     */
    omit?: PokerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokerEventInclude<ExtArgs> | null
    /**
     * Filter, which PokerEvent to fetch.
     */
    where: PokerEventWhereUniqueInput
  }

  /**
   * PokerEvent findFirst
   */
  export type PokerEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokerEvent
     */
    select?: PokerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokerEvent
     */
    omit?: PokerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokerEventInclude<ExtArgs> | null
    /**
     * Filter, which PokerEvent to fetch.
     */
    where?: PokerEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokerEvents to fetch.
     */
    orderBy?: PokerEventOrderByWithRelationInput | PokerEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokerEvents.
     */
    cursor?: PokerEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokerEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokerEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokerEvents.
     */
    distinct?: PokerEventScalarFieldEnum | PokerEventScalarFieldEnum[]
  }

  /**
   * PokerEvent findFirstOrThrow
   */
  export type PokerEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokerEvent
     */
    select?: PokerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokerEvent
     */
    omit?: PokerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokerEventInclude<ExtArgs> | null
    /**
     * Filter, which PokerEvent to fetch.
     */
    where?: PokerEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokerEvents to fetch.
     */
    orderBy?: PokerEventOrderByWithRelationInput | PokerEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokerEvents.
     */
    cursor?: PokerEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokerEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokerEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokerEvents.
     */
    distinct?: PokerEventScalarFieldEnum | PokerEventScalarFieldEnum[]
  }

  /**
   * PokerEvent findMany
   */
  export type PokerEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokerEvent
     */
    select?: PokerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokerEvent
     */
    omit?: PokerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokerEventInclude<ExtArgs> | null
    /**
     * Filter, which PokerEvents to fetch.
     */
    where?: PokerEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokerEvents to fetch.
     */
    orderBy?: PokerEventOrderByWithRelationInput | PokerEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PokerEvents.
     */
    cursor?: PokerEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokerEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokerEvents.
     */
    skip?: number
    distinct?: PokerEventScalarFieldEnum | PokerEventScalarFieldEnum[]
  }

  /**
   * PokerEvent create
   */
  export type PokerEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokerEvent
     */
    select?: PokerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokerEvent
     */
    omit?: PokerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokerEventInclude<ExtArgs> | null
    /**
     * The data needed to create a PokerEvent.
     */
    data: XOR<PokerEventCreateInput, PokerEventUncheckedCreateInput>
  }

  /**
   * PokerEvent createMany
   */
  export type PokerEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokerEvents.
     */
    data: PokerEventCreateManyInput | PokerEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokerEvent createManyAndReturn
   */
  export type PokerEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokerEvent
     */
    select?: PokerEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokerEvent
     */
    omit?: PokerEventOmit<ExtArgs> | null
    /**
     * The data used to create many PokerEvents.
     */
    data: PokerEventCreateManyInput | PokerEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokerEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PokerEvent update
   */
  export type PokerEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokerEvent
     */
    select?: PokerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokerEvent
     */
    omit?: PokerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokerEventInclude<ExtArgs> | null
    /**
     * The data needed to update a PokerEvent.
     */
    data: XOR<PokerEventUpdateInput, PokerEventUncheckedUpdateInput>
    /**
     * Choose, which PokerEvent to update.
     */
    where: PokerEventWhereUniqueInput
  }

  /**
   * PokerEvent updateMany
   */
  export type PokerEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PokerEvents.
     */
    data: XOR<PokerEventUpdateManyMutationInput, PokerEventUncheckedUpdateManyInput>
    /**
     * Filter which PokerEvents to update
     */
    where?: PokerEventWhereInput
    /**
     * Limit how many PokerEvents to update.
     */
    limit?: number
  }

  /**
   * PokerEvent updateManyAndReturn
   */
  export type PokerEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokerEvent
     */
    select?: PokerEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokerEvent
     */
    omit?: PokerEventOmit<ExtArgs> | null
    /**
     * The data used to update PokerEvents.
     */
    data: XOR<PokerEventUpdateManyMutationInput, PokerEventUncheckedUpdateManyInput>
    /**
     * Filter which PokerEvents to update
     */
    where?: PokerEventWhereInput
    /**
     * Limit how many PokerEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokerEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PokerEvent upsert
   */
  export type PokerEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokerEvent
     */
    select?: PokerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokerEvent
     */
    omit?: PokerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokerEventInclude<ExtArgs> | null
    /**
     * The filter to search for the PokerEvent to update in case it exists.
     */
    where: PokerEventWhereUniqueInput
    /**
     * In case the PokerEvent found by the `where` argument doesn't exist, create a new PokerEvent with this data.
     */
    create: XOR<PokerEventCreateInput, PokerEventUncheckedCreateInput>
    /**
     * In case the PokerEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokerEventUpdateInput, PokerEventUncheckedUpdateInput>
  }

  /**
   * PokerEvent delete
   */
  export type PokerEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokerEvent
     */
    select?: PokerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokerEvent
     */
    omit?: PokerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokerEventInclude<ExtArgs> | null
    /**
     * Filter which PokerEvent to delete.
     */
    where: PokerEventWhereUniqueInput
  }

  /**
   * PokerEvent deleteMany
   */
  export type PokerEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokerEvents to delete
     */
    where?: PokerEventWhereInput
    /**
     * Limit how many PokerEvents to delete.
     */
    limit?: number
  }

  /**
   * PokerEvent.players
   */
  export type PokerEvent$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInEvent
     */
    select?: PlayerInEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInEvent
     */
    omit?: PlayerInEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInEventInclude<ExtArgs> | null
    where?: PlayerInEventWhereInput
    orderBy?: PlayerInEventOrderByWithRelationInput | PlayerInEventOrderByWithRelationInput[]
    cursor?: PlayerInEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerInEventScalarFieldEnum | PlayerInEventScalarFieldEnum[]
  }

  /**
   * PokerEvent without action
   */
  export type PokerEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokerEvent
     */
    select?: PokerEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokerEvent
     */
    omit?: PokerEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokerEventInclude<ExtArgs> | null
  }


  /**
   * Model PlayerInEvent
   */

  export type AggregatePlayerInEvent = {
    _count: PlayerInEventCountAggregateOutputType | null
    _avg: PlayerInEventAvgAggregateOutputType | null
    _sum: PlayerInEventSumAggregateOutputType | null
    _min: PlayerInEventMinAggregateOutputType | null
    _max: PlayerInEventMaxAggregateOutputType | null
  }

  export type PlayerInEventAvgAggregateOutputType = {
    buyIns: number | null
    cashOutAmount: number | null
  }

  export type PlayerInEventSumAggregateOutputType = {
    buyIns: number | null
    cashOutAmount: number | null
  }

  export type PlayerInEventMinAggregateOutputType = {
    id: string | null
    buyIns: number | null
    cashOutAmount: number | null
    tenantId: string | null
    eventId: string | null
    playerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerInEventMaxAggregateOutputType = {
    id: string | null
    buyIns: number | null
    cashOutAmount: number | null
    tenantId: string | null
    eventId: string | null
    playerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerInEventCountAggregateOutputType = {
    id: number
    buyIns: number
    cashOutAmount: number
    tenantId: number
    eventId: number
    playerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlayerInEventAvgAggregateInputType = {
    buyIns?: true
    cashOutAmount?: true
  }

  export type PlayerInEventSumAggregateInputType = {
    buyIns?: true
    cashOutAmount?: true
  }

  export type PlayerInEventMinAggregateInputType = {
    id?: true
    buyIns?: true
    cashOutAmount?: true
    tenantId?: true
    eventId?: true
    playerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerInEventMaxAggregateInputType = {
    id?: true
    buyIns?: true
    cashOutAmount?: true
    tenantId?: true
    eventId?: true
    playerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerInEventCountAggregateInputType = {
    id?: true
    buyIns?: true
    cashOutAmount?: true
    tenantId?: true
    eventId?: true
    playerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayerInEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerInEvent to aggregate.
     */
    where?: PlayerInEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerInEvents to fetch.
     */
    orderBy?: PlayerInEventOrderByWithRelationInput | PlayerInEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerInEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerInEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerInEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerInEvents
    **/
    _count?: true | PlayerInEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerInEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerInEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerInEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerInEventMaxAggregateInputType
  }

  export type GetPlayerInEventAggregateType<T extends PlayerInEventAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerInEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerInEvent[P]>
      : GetScalarType<T[P], AggregatePlayerInEvent[P]>
  }




  export type PlayerInEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerInEventWhereInput
    orderBy?: PlayerInEventOrderByWithAggregationInput | PlayerInEventOrderByWithAggregationInput[]
    by: PlayerInEventScalarFieldEnum[] | PlayerInEventScalarFieldEnum
    having?: PlayerInEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerInEventCountAggregateInputType | true
    _avg?: PlayerInEventAvgAggregateInputType
    _sum?: PlayerInEventSumAggregateInputType
    _min?: PlayerInEventMinAggregateInputType
    _max?: PlayerInEventMaxAggregateInputType
  }

  export type PlayerInEventGroupByOutputType = {
    id: string
    buyIns: number
    cashOutAmount: number | null
    tenantId: string
    eventId: string
    playerId: string
    createdAt: Date
    updatedAt: Date
    _count: PlayerInEventCountAggregateOutputType | null
    _avg: PlayerInEventAvgAggregateOutputType | null
    _sum: PlayerInEventSumAggregateOutputType | null
    _min: PlayerInEventMinAggregateOutputType | null
    _max: PlayerInEventMaxAggregateOutputType | null
  }

  type GetPlayerInEventGroupByPayload<T extends PlayerInEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerInEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerInEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerInEventGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerInEventGroupByOutputType[P]>
        }
      >
    >


  export type PlayerInEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buyIns?: boolean
    cashOutAmount?: boolean
    tenantId?: boolean
    eventId?: boolean
    playerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    event?: boolean | PokerEventDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerInEvent"]>

  export type PlayerInEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buyIns?: boolean
    cashOutAmount?: boolean
    tenantId?: boolean
    eventId?: boolean
    playerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    event?: boolean | PokerEventDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerInEvent"]>

  export type PlayerInEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buyIns?: boolean
    cashOutAmount?: boolean
    tenantId?: boolean
    eventId?: boolean
    playerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    event?: boolean | PokerEventDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerInEvent"]>

  export type PlayerInEventSelectScalar = {
    id?: boolean
    buyIns?: boolean
    cashOutAmount?: boolean
    tenantId?: boolean
    eventId?: boolean
    playerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlayerInEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "buyIns" | "cashOutAmount" | "tenantId" | "eventId" | "playerId" | "createdAt" | "updatedAt", ExtArgs["result"]["playerInEvent"]>
  export type PlayerInEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    event?: boolean | PokerEventDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type PlayerInEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    event?: boolean | PokerEventDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type PlayerInEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    event?: boolean | PokerEventDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $PlayerInEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerInEvent"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      event: Prisma.$PokerEventPayload<ExtArgs>
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      buyIns: number
      cashOutAmount: number | null
      tenantId: string
      eventId: string
      playerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playerInEvent"]>
    composites: {}
  }

  type PlayerInEventGetPayload<S extends boolean | null | undefined | PlayerInEventDefaultArgs> = $Result.GetResult<Prisma.$PlayerInEventPayload, S>

  type PlayerInEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerInEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerInEventCountAggregateInputType | true
    }

  export interface PlayerInEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerInEvent'], meta: { name: 'PlayerInEvent' } }
    /**
     * Find zero or one PlayerInEvent that matches the filter.
     * @param {PlayerInEventFindUniqueArgs} args - Arguments to find a PlayerInEvent
     * @example
     * // Get one PlayerInEvent
     * const playerInEvent = await prisma.playerInEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerInEventFindUniqueArgs>(args: SelectSubset<T, PlayerInEventFindUniqueArgs<ExtArgs>>): Prisma__PlayerInEventClient<$Result.GetResult<Prisma.$PlayerInEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerInEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerInEventFindUniqueOrThrowArgs} args - Arguments to find a PlayerInEvent
     * @example
     * // Get one PlayerInEvent
     * const playerInEvent = await prisma.playerInEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerInEventFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerInEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerInEventClient<$Result.GetResult<Prisma.$PlayerInEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerInEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerInEventFindFirstArgs} args - Arguments to find a PlayerInEvent
     * @example
     * // Get one PlayerInEvent
     * const playerInEvent = await prisma.playerInEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerInEventFindFirstArgs>(args?: SelectSubset<T, PlayerInEventFindFirstArgs<ExtArgs>>): Prisma__PlayerInEventClient<$Result.GetResult<Prisma.$PlayerInEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerInEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerInEventFindFirstOrThrowArgs} args - Arguments to find a PlayerInEvent
     * @example
     * // Get one PlayerInEvent
     * const playerInEvent = await prisma.playerInEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerInEventFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerInEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerInEventClient<$Result.GetResult<Prisma.$PlayerInEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerInEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerInEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerInEvents
     * const playerInEvents = await prisma.playerInEvent.findMany()
     * 
     * // Get first 10 PlayerInEvents
     * const playerInEvents = await prisma.playerInEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerInEventWithIdOnly = await prisma.playerInEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerInEventFindManyArgs>(args?: SelectSubset<T, PlayerInEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerInEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerInEvent.
     * @param {PlayerInEventCreateArgs} args - Arguments to create a PlayerInEvent.
     * @example
     * // Create one PlayerInEvent
     * const PlayerInEvent = await prisma.playerInEvent.create({
     *   data: {
     *     // ... data to create a PlayerInEvent
     *   }
     * })
     * 
     */
    create<T extends PlayerInEventCreateArgs>(args: SelectSubset<T, PlayerInEventCreateArgs<ExtArgs>>): Prisma__PlayerInEventClient<$Result.GetResult<Prisma.$PlayerInEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerInEvents.
     * @param {PlayerInEventCreateManyArgs} args - Arguments to create many PlayerInEvents.
     * @example
     * // Create many PlayerInEvents
     * const playerInEvent = await prisma.playerInEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerInEventCreateManyArgs>(args?: SelectSubset<T, PlayerInEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerInEvents and returns the data saved in the database.
     * @param {PlayerInEventCreateManyAndReturnArgs} args - Arguments to create many PlayerInEvents.
     * @example
     * // Create many PlayerInEvents
     * const playerInEvent = await prisma.playerInEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerInEvents and only return the `id`
     * const playerInEventWithIdOnly = await prisma.playerInEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerInEventCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerInEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerInEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerInEvent.
     * @param {PlayerInEventDeleteArgs} args - Arguments to delete one PlayerInEvent.
     * @example
     * // Delete one PlayerInEvent
     * const PlayerInEvent = await prisma.playerInEvent.delete({
     *   where: {
     *     // ... filter to delete one PlayerInEvent
     *   }
     * })
     * 
     */
    delete<T extends PlayerInEventDeleteArgs>(args: SelectSubset<T, PlayerInEventDeleteArgs<ExtArgs>>): Prisma__PlayerInEventClient<$Result.GetResult<Prisma.$PlayerInEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerInEvent.
     * @param {PlayerInEventUpdateArgs} args - Arguments to update one PlayerInEvent.
     * @example
     * // Update one PlayerInEvent
     * const playerInEvent = await prisma.playerInEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerInEventUpdateArgs>(args: SelectSubset<T, PlayerInEventUpdateArgs<ExtArgs>>): Prisma__PlayerInEventClient<$Result.GetResult<Prisma.$PlayerInEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerInEvents.
     * @param {PlayerInEventDeleteManyArgs} args - Arguments to filter PlayerInEvents to delete.
     * @example
     * // Delete a few PlayerInEvents
     * const { count } = await prisma.playerInEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerInEventDeleteManyArgs>(args?: SelectSubset<T, PlayerInEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerInEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerInEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerInEvents
     * const playerInEvent = await prisma.playerInEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerInEventUpdateManyArgs>(args: SelectSubset<T, PlayerInEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerInEvents and returns the data updated in the database.
     * @param {PlayerInEventUpdateManyAndReturnArgs} args - Arguments to update many PlayerInEvents.
     * @example
     * // Update many PlayerInEvents
     * const playerInEvent = await prisma.playerInEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerInEvents and only return the `id`
     * const playerInEventWithIdOnly = await prisma.playerInEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerInEventUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerInEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerInEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerInEvent.
     * @param {PlayerInEventUpsertArgs} args - Arguments to update or create a PlayerInEvent.
     * @example
     * // Update or create a PlayerInEvent
     * const playerInEvent = await prisma.playerInEvent.upsert({
     *   create: {
     *     // ... data to create a PlayerInEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerInEvent we want to update
     *   }
     * })
     */
    upsert<T extends PlayerInEventUpsertArgs>(args: SelectSubset<T, PlayerInEventUpsertArgs<ExtArgs>>): Prisma__PlayerInEventClient<$Result.GetResult<Prisma.$PlayerInEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerInEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerInEventCountArgs} args - Arguments to filter PlayerInEvents to count.
     * @example
     * // Count the number of PlayerInEvents
     * const count = await prisma.playerInEvent.count({
     *   where: {
     *     // ... the filter for the PlayerInEvents we want to count
     *   }
     * })
    **/
    count<T extends PlayerInEventCountArgs>(
      args?: Subset<T, PlayerInEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerInEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerInEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerInEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerInEventAggregateArgs>(args: Subset<T, PlayerInEventAggregateArgs>): Prisma.PrismaPromise<GetPlayerInEventAggregateType<T>>

    /**
     * Group by PlayerInEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerInEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerInEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerInEventGroupByArgs['orderBy'] }
        : { orderBy?: PlayerInEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerInEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerInEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerInEvent model
   */
  readonly fields: PlayerInEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerInEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerInEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends PokerEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokerEventDefaultArgs<ExtArgs>>): Prisma__PokerEventClient<$Result.GetResult<Prisma.$PokerEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerInEvent model
   */
  interface PlayerInEventFieldRefs {
    readonly id: FieldRef<"PlayerInEvent", 'String'>
    readonly buyIns: FieldRef<"PlayerInEvent", 'Int'>
    readonly cashOutAmount: FieldRef<"PlayerInEvent", 'Int'>
    readonly tenantId: FieldRef<"PlayerInEvent", 'String'>
    readonly eventId: FieldRef<"PlayerInEvent", 'String'>
    readonly playerId: FieldRef<"PlayerInEvent", 'String'>
    readonly createdAt: FieldRef<"PlayerInEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"PlayerInEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlayerInEvent findUnique
   */
  export type PlayerInEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInEvent
     */
    select?: PlayerInEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInEvent
     */
    omit?: PlayerInEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInEventInclude<ExtArgs> | null
    /**
     * Filter, which PlayerInEvent to fetch.
     */
    where: PlayerInEventWhereUniqueInput
  }

  /**
   * PlayerInEvent findUniqueOrThrow
   */
  export type PlayerInEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInEvent
     */
    select?: PlayerInEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInEvent
     */
    omit?: PlayerInEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInEventInclude<ExtArgs> | null
    /**
     * Filter, which PlayerInEvent to fetch.
     */
    where: PlayerInEventWhereUniqueInput
  }

  /**
   * PlayerInEvent findFirst
   */
  export type PlayerInEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInEvent
     */
    select?: PlayerInEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInEvent
     */
    omit?: PlayerInEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInEventInclude<ExtArgs> | null
    /**
     * Filter, which PlayerInEvent to fetch.
     */
    where?: PlayerInEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerInEvents to fetch.
     */
    orderBy?: PlayerInEventOrderByWithRelationInput | PlayerInEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerInEvents.
     */
    cursor?: PlayerInEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerInEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerInEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerInEvents.
     */
    distinct?: PlayerInEventScalarFieldEnum | PlayerInEventScalarFieldEnum[]
  }

  /**
   * PlayerInEvent findFirstOrThrow
   */
  export type PlayerInEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInEvent
     */
    select?: PlayerInEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInEvent
     */
    omit?: PlayerInEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInEventInclude<ExtArgs> | null
    /**
     * Filter, which PlayerInEvent to fetch.
     */
    where?: PlayerInEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerInEvents to fetch.
     */
    orderBy?: PlayerInEventOrderByWithRelationInput | PlayerInEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerInEvents.
     */
    cursor?: PlayerInEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerInEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerInEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerInEvents.
     */
    distinct?: PlayerInEventScalarFieldEnum | PlayerInEventScalarFieldEnum[]
  }

  /**
   * PlayerInEvent findMany
   */
  export type PlayerInEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInEvent
     */
    select?: PlayerInEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInEvent
     */
    omit?: PlayerInEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInEventInclude<ExtArgs> | null
    /**
     * Filter, which PlayerInEvents to fetch.
     */
    where?: PlayerInEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerInEvents to fetch.
     */
    orderBy?: PlayerInEventOrderByWithRelationInput | PlayerInEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerInEvents.
     */
    cursor?: PlayerInEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerInEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerInEvents.
     */
    skip?: number
    distinct?: PlayerInEventScalarFieldEnum | PlayerInEventScalarFieldEnum[]
  }

  /**
   * PlayerInEvent create
   */
  export type PlayerInEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInEvent
     */
    select?: PlayerInEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInEvent
     */
    omit?: PlayerInEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInEventInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerInEvent.
     */
    data: XOR<PlayerInEventCreateInput, PlayerInEventUncheckedCreateInput>
  }

  /**
   * PlayerInEvent createMany
   */
  export type PlayerInEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerInEvents.
     */
    data: PlayerInEventCreateManyInput | PlayerInEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerInEvent createManyAndReturn
   */
  export type PlayerInEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInEvent
     */
    select?: PlayerInEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInEvent
     */
    omit?: PlayerInEventOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerInEvents.
     */
    data: PlayerInEventCreateManyInput | PlayerInEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerInEvent update
   */
  export type PlayerInEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInEvent
     */
    select?: PlayerInEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInEvent
     */
    omit?: PlayerInEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInEventInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerInEvent.
     */
    data: XOR<PlayerInEventUpdateInput, PlayerInEventUncheckedUpdateInput>
    /**
     * Choose, which PlayerInEvent to update.
     */
    where: PlayerInEventWhereUniqueInput
  }

  /**
   * PlayerInEvent updateMany
   */
  export type PlayerInEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerInEvents.
     */
    data: XOR<PlayerInEventUpdateManyMutationInput, PlayerInEventUncheckedUpdateManyInput>
    /**
     * Filter which PlayerInEvents to update
     */
    where?: PlayerInEventWhereInput
    /**
     * Limit how many PlayerInEvents to update.
     */
    limit?: number
  }

  /**
   * PlayerInEvent updateManyAndReturn
   */
  export type PlayerInEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInEvent
     */
    select?: PlayerInEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInEvent
     */
    omit?: PlayerInEventOmit<ExtArgs> | null
    /**
     * The data used to update PlayerInEvents.
     */
    data: XOR<PlayerInEventUpdateManyMutationInput, PlayerInEventUncheckedUpdateManyInput>
    /**
     * Filter which PlayerInEvents to update
     */
    where?: PlayerInEventWhereInput
    /**
     * Limit how many PlayerInEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerInEvent upsert
   */
  export type PlayerInEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInEvent
     */
    select?: PlayerInEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInEvent
     */
    omit?: PlayerInEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInEventInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerInEvent to update in case it exists.
     */
    where: PlayerInEventWhereUniqueInput
    /**
     * In case the PlayerInEvent found by the `where` argument doesn't exist, create a new PlayerInEvent with this data.
     */
    create: XOR<PlayerInEventCreateInput, PlayerInEventUncheckedCreateInput>
    /**
     * In case the PlayerInEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerInEventUpdateInput, PlayerInEventUncheckedUpdateInput>
  }

  /**
   * PlayerInEvent delete
   */
  export type PlayerInEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInEvent
     */
    select?: PlayerInEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInEvent
     */
    omit?: PlayerInEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInEventInclude<ExtArgs> | null
    /**
     * Filter which PlayerInEvent to delete.
     */
    where: PlayerInEventWhereUniqueInput
  }

  /**
   * PlayerInEvent deleteMany
   */
  export type PlayerInEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerInEvents to delete
     */
    where?: PlayerInEventWhereInput
    /**
     * Limit how many PlayerInEvents to delete.
     */
    limit?: number
  }

  /**
   * PlayerInEvent without action
   */
  export type PlayerInEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInEvent
     */
    select?: PlayerInEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInEvent
     */
    omit?: PlayerInEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subdomain: 'subdomain',
    customDomain: 'customDomain',
    plan: 'plan',
    settings: 'settings',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    tenantId: 'tenantId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tenantId: 'tenantId',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const PokerEventScalarFieldEnum: {
    id: 'id',
    date: 'date',
    status: 'status',
    tenantId: 'tenantId',
    hostId: 'hostId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PokerEventScalarFieldEnum = (typeof PokerEventScalarFieldEnum)[keyof typeof PokerEventScalarFieldEnum]


  export const PlayerInEventScalarFieldEnum: {
    id: 'id',
    buyIns: 'buyIns',
    cashOutAmount: 'cashOutAmount',
    tenantId: 'tenantId',
    eventId: 'eventId',
    playerId: 'playerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlayerInEventScalarFieldEnum = (typeof PlayerInEventScalarFieldEnum)[keyof typeof PlayerInEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TenantPlan'
   */
  export type EnumTenantPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TenantPlan'>
    


  /**
   * Reference to a field of type 'TenantPlan[]'
   */
  export type ListEnumTenantPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TenantPlan[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'EventStatus'
   */
  export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>
    


  /**
   * Reference to a field of type 'EventStatus[]'
   */
  export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    subdomain?: StringFilter<"Tenant"> | string
    customDomain?: StringNullableFilter<"Tenant"> | string | null
    plan?: EnumTenantPlanFilter<"Tenant"> | $Enums.TenantPlan
    settings?: JsonNullableFilter<"Tenant">
    isActive?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    users?: UserListRelationFilter
    players?: PlayerListRelationFilter
    pokerEvents?: PokerEventListRelationFilter
    playerInEvents?: PlayerInEventListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    customDomain?: SortOrderInput | SortOrder
    plan?: SortOrder
    settings?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    players?: PlayerOrderByRelationAggregateInput
    pokerEvents?: PokerEventOrderByRelationAggregateInput
    playerInEvents?: PlayerInEventOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subdomain?: string
    customDomain?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    plan?: EnumTenantPlanFilter<"Tenant"> | $Enums.TenantPlan
    settings?: JsonNullableFilter<"Tenant">
    isActive?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    users?: UserListRelationFilter
    players?: PlayerListRelationFilter
    pokerEvents?: PokerEventListRelationFilter
    playerInEvents?: PlayerInEventListRelationFilter
  }, "id" | "subdomain" | "customDomain">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    customDomain?: SortOrderInput | SortOrder
    plan?: SortOrder
    settings?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    subdomain?: StringWithAggregatesFilter<"Tenant"> | string
    customDomain?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    plan?: EnumTenantPlanWithAggregatesFilter<"Tenant"> | $Enums.TenantPlan
    settings?: JsonNullableWithAggregatesFilter<"Tenant">
    isActive?: BoolWithAggregatesFilter<"Tenant"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    tenantId?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    players?: PlayerListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    players?: PlayerOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username_tenantId?: UserUsernameTenantIdCompoundUniqueInput
    email_tenantId?: UserEmailTenantIdCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    tenantId?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    players?: PlayerListRelationFilter
  }, "id" | "username_tenantId" | "email_tenantId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    tenantId?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: StringFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    tenantId?: StringFilter<"Player"> | string
    createdById?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    pokerEvents?: PlayerInEventListRelationFilter
    hostedEvents?: PokerEventListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    pokerEvents?: PlayerInEventOrderByRelationAggregateInput
    hostedEvents?: PokerEventOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    name?: StringFilter<"Player"> | string
    tenantId?: StringFilter<"Player"> | string
    createdById?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    pokerEvents?: PlayerInEventListRelationFilter
    hostedEvents?: PokerEventListRelationFilter
  }, "id">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Player"> | string
    name?: StringWithAggregatesFilter<"Player"> | string
    tenantId?: StringWithAggregatesFilter<"Player"> | string
    createdById?: StringWithAggregatesFilter<"Player"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
  }

  export type PokerEventWhereInput = {
    AND?: PokerEventWhereInput | PokerEventWhereInput[]
    OR?: PokerEventWhereInput[]
    NOT?: PokerEventWhereInput | PokerEventWhereInput[]
    id?: StringFilter<"PokerEvent"> | string
    date?: DateTimeFilter<"PokerEvent"> | Date | string
    status?: EnumEventStatusFilter<"PokerEvent"> | $Enums.EventStatus
    tenantId?: StringFilter<"PokerEvent"> | string
    hostId?: StringFilter<"PokerEvent"> | string
    createdAt?: DateTimeFilter<"PokerEvent"> | Date | string
    updatedAt?: DateTimeFilter<"PokerEvent"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    host?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    players?: PlayerInEventListRelationFilter
  }

  export type PokerEventOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    host?: PlayerOrderByWithRelationInput
    players?: PlayerInEventOrderByRelationAggregateInput
  }

  export type PokerEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PokerEventWhereInput | PokerEventWhereInput[]
    OR?: PokerEventWhereInput[]
    NOT?: PokerEventWhereInput | PokerEventWhereInput[]
    date?: DateTimeFilter<"PokerEvent"> | Date | string
    status?: EnumEventStatusFilter<"PokerEvent"> | $Enums.EventStatus
    tenantId?: StringFilter<"PokerEvent"> | string
    hostId?: StringFilter<"PokerEvent"> | string
    createdAt?: DateTimeFilter<"PokerEvent"> | Date | string
    updatedAt?: DateTimeFilter<"PokerEvent"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    host?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    players?: PlayerInEventListRelationFilter
  }, "id">

  export type PokerEventOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PokerEventCountOrderByAggregateInput
    _max?: PokerEventMaxOrderByAggregateInput
    _min?: PokerEventMinOrderByAggregateInput
  }

  export type PokerEventScalarWhereWithAggregatesInput = {
    AND?: PokerEventScalarWhereWithAggregatesInput | PokerEventScalarWhereWithAggregatesInput[]
    OR?: PokerEventScalarWhereWithAggregatesInput[]
    NOT?: PokerEventScalarWhereWithAggregatesInput | PokerEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PokerEvent"> | string
    date?: DateTimeWithAggregatesFilter<"PokerEvent"> | Date | string
    status?: EnumEventStatusWithAggregatesFilter<"PokerEvent"> | $Enums.EventStatus
    tenantId?: StringWithAggregatesFilter<"PokerEvent"> | string
    hostId?: StringWithAggregatesFilter<"PokerEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PokerEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PokerEvent"> | Date | string
  }

  export type PlayerInEventWhereInput = {
    AND?: PlayerInEventWhereInput | PlayerInEventWhereInput[]
    OR?: PlayerInEventWhereInput[]
    NOT?: PlayerInEventWhereInput | PlayerInEventWhereInput[]
    id?: StringFilter<"PlayerInEvent"> | string
    buyIns?: IntFilter<"PlayerInEvent"> | number
    cashOutAmount?: IntNullableFilter<"PlayerInEvent"> | number | null
    tenantId?: StringFilter<"PlayerInEvent"> | string
    eventId?: StringFilter<"PlayerInEvent"> | string
    playerId?: StringFilter<"PlayerInEvent"> | string
    createdAt?: DateTimeFilter<"PlayerInEvent"> | Date | string
    updatedAt?: DateTimeFilter<"PlayerInEvent"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    event?: XOR<PokerEventScalarRelationFilter, PokerEventWhereInput>
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type PlayerInEventOrderByWithRelationInput = {
    id?: SortOrder
    buyIns?: SortOrder
    cashOutAmount?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    eventId?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    event?: PokerEventOrderByWithRelationInput
    player?: PlayerOrderByWithRelationInput
  }

  export type PlayerInEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId_playerId?: PlayerInEventEventIdPlayerIdCompoundUniqueInput
    AND?: PlayerInEventWhereInput | PlayerInEventWhereInput[]
    OR?: PlayerInEventWhereInput[]
    NOT?: PlayerInEventWhereInput | PlayerInEventWhereInput[]
    buyIns?: IntFilter<"PlayerInEvent"> | number
    cashOutAmount?: IntNullableFilter<"PlayerInEvent"> | number | null
    tenantId?: StringFilter<"PlayerInEvent"> | string
    eventId?: StringFilter<"PlayerInEvent"> | string
    playerId?: StringFilter<"PlayerInEvent"> | string
    createdAt?: DateTimeFilter<"PlayerInEvent"> | Date | string
    updatedAt?: DateTimeFilter<"PlayerInEvent"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    event?: XOR<PokerEventScalarRelationFilter, PokerEventWhereInput>
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id" | "eventId_playerId">

  export type PlayerInEventOrderByWithAggregationInput = {
    id?: SortOrder
    buyIns?: SortOrder
    cashOutAmount?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    eventId?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayerInEventCountOrderByAggregateInput
    _avg?: PlayerInEventAvgOrderByAggregateInput
    _max?: PlayerInEventMaxOrderByAggregateInput
    _min?: PlayerInEventMinOrderByAggregateInput
    _sum?: PlayerInEventSumOrderByAggregateInput
  }

  export type PlayerInEventScalarWhereWithAggregatesInput = {
    AND?: PlayerInEventScalarWhereWithAggregatesInput | PlayerInEventScalarWhereWithAggregatesInput[]
    OR?: PlayerInEventScalarWhereWithAggregatesInput[]
    NOT?: PlayerInEventScalarWhereWithAggregatesInput | PlayerInEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerInEvent"> | string
    buyIns?: IntWithAggregatesFilter<"PlayerInEvent"> | number
    cashOutAmount?: IntNullableWithAggregatesFilter<"PlayerInEvent"> | number | null
    tenantId?: StringWithAggregatesFilter<"PlayerInEvent"> | string
    eventId?: StringWithAggregatesFilter<"PlayerInEvent"> | string
    playerId?: StringWithAggregatesFilter<"PlayerInEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PlayerInEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlayerInEvent"> | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    subdomain: string
    customDomain?: string | null
    plan?: $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    players?: PlayerCreateNestedManyWithoutTenantInput
    pokerEvents?: PokerEventCreateNestedManyWithoutTenantInput
    playerInEvents?: PlayerInEventCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    subdomain: string
    customDomain?: string | null
    plan?: $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    players?: PlayerUncheckedCreateNestedManyWithoutTenantInput
    pokerEvents?: PokerEventUncheckedCreateNestedManyWithoutTenantInput
    playerInEvents?: PlayerInEventUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    players?: PlayerUpdateManyWithoutTenantNestedInput
    pokerEvents?: PokerEventUpdateManyWithoutTenantNestedInput
    playerInEvents?: PlayerInEventUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    players?: PlayerUncheckedUpdateManyWithoutTenantNestedInput
    pokerEvents?: PokerEventUncheckedUpdateManyWithoutTenantNestedInput
    playerInEvents?: PlayerInEventUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    subdomain: string
    customDomain?: string | null
    plan?: $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    players?: PlayerCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    tenantId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    players?: PlayerUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    tenantId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPlayersInput
    createdBy: UserCreateNestedOneWithoutPlayersInput
    pokerEvents?: PlayerInEventCreateNestedManyWithoutPlayerInput
    hostedEvents?: PokerEventCreateNestedManyWithoutHostInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: string
    name: string
    tenantId: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pokerEvents?: PlayerInEventUncheckedCreateNestedManyWithoutPlayerInput
    hostedEvents?: PokerEventUncheckedCreateNestedManyWithoutHostInput
  }

  export type PlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPlayersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutPlayersNestedInput
    pokerEvents?: PlayerInEventUpdateManyWithoutPlayerNestedInput
    hostedEvents?: PokerEventUpdateManyWithoutHostNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pokerEvents?: PlayerInEventUncheckedUpdateManyWithoutPlayerNestedInput
    hostedEvents?: PokerEventUncheckedUpdateManyWithoutHostNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: string
    name: string
    tenantId: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokerEventCreateInput = {
    id?: string
    date?: Date | string
    status?: $Enums.EventStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPokerEventsInput
    host: PlayerCreateNestedOneWithoutHostedEventsInput
    players?: PlayerInEventCreateNestedManyWithoutEventInput
  }

  export type PokerEventUncheckedCreateInput = {
    id?: string
    date?: Date | string
    status?: $Enums.EventStatus
    tenantId: string
    hostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerInEventUncheckedCreateNestedManyWithoutEventInput
  }

  export type PokerEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPokerEventsNestedInput
    host?: PlayerUpdateOneRequiredWithoutHostedEventsNestedInput
    players?: PlayerInEventUpdateManyWithoutEventNestedInput
  }

  export type PokerEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerInEventUncheckedUpdateManyWithoutEventNestedInput
  }

  export type PokerEventCreateManyInput = {
    id?: string
    date?: Date | string
    status?: $Enums.EventStatus
    tenantId: string
    hostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PokerEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokerEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerInEventCreateInput = {
    id?: string
    buyIns?: number
    cashOutAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPlayerInEventsInput
    event: PokerEventCreateNestedOneWithoutPlayersInput
    player: PlayerCreateNestedOneWithoutPokerEventsInput
  }

  export type PlayerInEventUncheckedCreateInput = {
    id?: string
    buyIns?: number
    cashOutAmount?: number | null
    tenantId: string
    eventId: string
    playerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerInEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyIns?: IntFieldUpdateOperationsInput | number
    cashOutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPlayerInEventsNestedInput
    event?: PokerEventUpdateOneRequiredWithoutPlayersNestedInput
    player?: PlayerUpdateOneRequiredWithoutPokerEventsNestedInput
  }

  export type PlayerInEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyIns?: IntFieldUpdateOperationsInput | number
    cashOutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    tenantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerInEventCreateManyInput = {
    id?: string
    buyIns?: number
    cashOutAmount?: number | null
    tenantId: string
    eventId: string
    playerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerInEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyIns?: IntFieldUpdateOperationsInput | number
    cashOutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerInEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyIns?: IntFieldUpdateOperationsInput | number
    cashOutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    tenantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumTenantPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantPlan | EnumTenantPlanFieldRefInput<$PrismaModel>
    in?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantPlanFilter<$PrismaModel> | $Enums.TenantPlan
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PlayerListRelationFilter = {
    every?: PlayerWhereInput
    some?: PlayerWhereInput
    none?: PlayerWhereInput
  }

  export type PokerEventListRelationFilter = {
    every?: PokerEventWhereInput
    some?: PokerEventWhereInput
    none?: PokerEventWhereInput
  }

  export type PlayerInEventListRelationFilter = {
    every?: PlayerInEventWhereInput
    some?: PlayerInEventWhereInput
    none?: PlayerInEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PokerEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerInEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    customDomain?: SortOrder
    plan?: SortOrder
    settings?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    customDomain?: SortOrder
    plan?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    customDomain?: SortOrder
    plan?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumTenantPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantPlan | EnumTenantPlanFieldRefInput<$PrismaModel>
    in?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantPlanWithAggregatesFilter<$PrismaModel> | $Enums.TenantPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTenantPlanFilter<$PrismaModel>
    _max?: NestedEnumTenantPlanFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type UserUsernameTenantIdCompoundUniqueInput = {
    username: string
    tenantId: string
  }

  export type UserEmailTenantIdCompoundUniqueInput = {
    email: string
    tenantId: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type PlayerScalarRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type PokerEventCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PokerEventMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PokerEventMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PokerEventScalarRelationFilter = {
    is?: PokerEventWhereInput
    isNot?: PokerEventWhereInput
  }

  export type PlayerInEventEventIdPlayerIdCompoundUniqueInput = {
    eventId: string
    playerId: string
  }

  export type PlayerInEventCountOrderByAggregateInput = {
    id?: SortOrder
    buyIns?: SortOrder
    cashOutAmount?: SortOrder
    tenantId?: SortOrder
    eventId?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerInEventAvgOrderByAggregateInput = {
    buyIns?: SortOrder
    cashOutAmount?: SortOrder
  }

  export type PlayerInEventMaxOrderByAggregateInput = {
    id?: SortOrder
    buyIns?: SortOrder
    cashOutAmount?: SortOrder
    tenantId?: SortOrder
    eventId?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerInEventMinOrderByAggregateInput = {
    id?: SortOrder
    buyIns?: SortOrder
    cashOutAmount?: SortOrder
    tenantId?: SortOrder
    eventId?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerInEventSumOrderByAggregateInput = {
    buyIns?: SortOrder
    cashOutAmount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PlayerCreateNestedManyWithoutTenantInput = {
    create?: XOR<PlayerCreateWithoutTenantInput, PlayerUncheckedCreateWithoutTenantInput> | PlayerCreateWithoutTenantInput[] | PlayerUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTenantInput | PlayerCreateOrConnectWithoutTenantInput[]
    createMany?: PlayerCreateManyTenantInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type PokerEventCreateNestedManyWithoutTenantInput = {
    create?: XOR<PokerEventCreateWithoutTenantInput, PokerEventUncheckedCreateWithoutTenantInput> | PokerEventCreateWithoutTenantInput[] | PokerEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PokerEventCreateOrConnectWithoutTenantInput | PokerEventCreateOrConnectWithoutTenantInput[]
    createMany?: PokerEventCreateManyTenantInputEnvelope
    connect?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
  }

  export type PlayerInEventCreateNestedManyWithoutTenantInput = {
    create?: XOR<PlayerInEventCreateWithoutTenantInput, PlayerInEventUncheckedCreateWithoutTenantInput> | PlayerInEventCreateWithoutTenantInput[] | PlayerInEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PlayerInEventCreateOrConnectWithoutTenantInput | PlayerInEventCreateOrConnectWithoutTenantInput[]
    createMany?: PlayerInEventCreateManyTenantInputEnvelope
    connect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PlayerUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PlayerCreateWithoutTenantInput, PlayerUncheckedCreateWithoutTenantInput> | PlayerCreateWithoutTenantInput[] | PlayerUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTenantInput | PlayerCreateOrConnectWithoutTenantInput[]
    createMany?: PlayerCreateManyTenantInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type PokerEventUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PokerEventCreateWithoutTenantInput, PokerEventUncheckedCreateWithoutTenantInput> | PokerEventCreateWithoutTenantInput[] | PokerEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PokerEventCreateOrConnectWithoutTenantInput | PokerEventCreateOrConnectWithoutTenantInput[]
    createMany?: PokerEventCreateManyTenantInputEnvelope
    connect?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
  }

  export type PlayerInEventUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PlayerInEventCreateWithoutTenantInput, PlayerInEventUncheckedCreateWithoutTenantInput> | PlayerInEventCreateWithoutTenantInput[] | PlayerInEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PlayerInEventCreateOrConnectWithoutTenantInput | PlayerInEventCreateOrConnectWithoutTenantInput[]
    createMany?: PlayerInEventCreateManyTenantInputEnvelope
    connect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumTenantPlanFieldUpdateOperationsInput = {
    set?: $Enums.TenantPlan
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PlayerUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PlayerCreateWithoutTenantInput, PlayerUncheckedCreateWithoutTenantInput> | PlayerCreateWithoutTenantInput[] | PlayerUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTenantInput | PlayerCreateOrConnectWithoutTenantInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTenantInput | PlayerUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PlayerCreateManyTenantInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTenantInput | PlayerUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTenantInput | PlayerUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type PokerEventUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PokerEventCreateWithoutTenantInput, PokerEventUncheckedCreateWithoutTenantInput> | PokerEventCreateWithoutTenantInput[] | PokerEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PokerEventCreateOrConnectWithoutTenantInput | PokerEventCreateOrConnectWithoutTenantInput[]
    upsert?: PokerEventUpsertWithWhereUniqueWithoutTenantInput | PokerEventUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PokerEventCreateManyTenantInputEnvelope
    set?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
    disconnect?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
    delete?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
    connect?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
    update?: PokerEventUpdateWithWhereUniqueWithoutTenantInput | PokerEventUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PokerEventUpdateManyWithWhereWithoutTenantInput | PokerEventUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PokerEventScalarWhereInput | PokerEventScalarWhereInput[]
  }

  export type PlayerInEventUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PlayerInEventCreateWithoutTenantInput, PlayerInEventUncheckedCreateWithoutTenantInput> | PlayerInEventCreateWithoutTenantInput[] | PlayerInEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PlayerInEventCreateOrConnectWithoutTenantInput | PlayerInEventCreateOrConnectWithoutTenantInput[]
    upsert?: PlayerInEventUpsertWithWhereUniqueWithoutTenantInput | PlayerInEventUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PlayerInEventCreateManyTenantInputEnvelope
    set?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    disconnect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    delete?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    connect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    update?: PlayerInEventUpdateWithWhereUniqueWithoutTenantInput | PlayerInEventUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PlayerInEventUpdateManyWithWhereWithoutTenantInput | PlayerInEventUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PlayerInEventScalarWhereInput | PlayerInEventScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PlayerUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PlayerCreateWithoutTenantInput, PlayerUncheckedCreateWithoutTenantInput> | PlayerCreateWithoutTenantInput[] | PlayerUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTenantInput | PlayerCreateOrConnectWithoutTenantInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTenantInput | PlayerUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PlayerCreateManyTenantInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTenantInput | PlayerUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTenantInput | PlayerUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type PokerEventUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PokerEventCreateWithoutTenantInput, PokerEventUncheckedCreateWithoutTenantInput> | PokerEventCreateWithoutTenantInput[] | PokerEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PokerEventCreateOrConnectWithoutTenantInput | PokerEventCreateOrConnectWithoutTenantInput[]
    upsert?: PokerEventUpsertWithWhereUniqueWithoutTenantInput | PokerEventUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PokerEventCreateManyTenantInputEnvelope
    set?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
    disconnect?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
    delete?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
    connect?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
    update?: PokerEventUpdateWithWhereUniqueWithoutTenantInput | PokerEventUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PokerEventUpdateManyWithWhereWithoutTenantInput | PokerEventUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PokerEventScalarWhereInput | PokerEventScalarWhereInput[]
  }

  export type PlayerInEventUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PlayerInEventCreateWithoutTenantInput, PlayerInEventUncheckedCreateWithoutTenantInput> | PlayerInEventCreateWithoutTenantInput[] | PlayerInEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PlayerInEventCreateOrConnectWithoutTenantInput | PlayerInEventCreateOrConnectWithoutTenantInput[]
    upsert?: PlayerInEventUpsertWithWhereUniqueWithoutTenantInput | PlayerInEventUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PlayerInEventCreateManyTenantInputEnvelope
    set?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    disconnect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    delete?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    connect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    update?: PlayerInEventUpdateWithWhereUniqueWithoutTenantInput | PlayerInEventUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PlayerInEventUpdateManyWithWhereWithoutTenantInput | PlayerInEventUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PlayerInEventScalarWhereInput | PlayerInEventScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutUsersInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    connect?: TenantWhereUniqueInput
  }

  export type PlayerCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PlayerCreateWithoutCreatedByInput, PlayerUncheckedCreateWithoutCreatedByInput> | PlayerCreateWithoutCreatedByInput[] | PlayerUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutCreatedByInput | PlayerCreateOrConnectWithoutCreatedByInput[]
    createMany?: PlayerCreateManyCreatedByInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type PlayerUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PlayerCreateWithoutCreatedByInput, PlayerUncheckedCreateWithoutCreatedByInput> | PlayerCreateWithoutCreatedByInput[] | PlayerUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutCreatedByInput | PlayerCreateOrConnectWithoutCreatedByInput[]
    createMany?: PlayerCreateManyCreatedByInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type TenantUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    upsert?: TenantUpsertWithoutUsersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUsersInput, TenantUpdateWithoutUsersInput>, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type PlayerUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PlayerCreateWithoutCreatedByInput, PlayerUncheckedCreateWithoutCreatedByInput> | PlayerCreateWithoutCreatedByInput[] | PlayerUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutCreatedByInput | PlayerCreateOrConnectWithoutCreatedByInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutCreatedByInput | PlayerUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PlayerCreateManyCreatedByInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutCreatedByInput | PlayerUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutCreatedByInput | PlayerUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type PlayerUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PlayerCreateWithoutCreatedByInput, PlayerUncheckedCreateWithoutCreatedByInput> | PlayerCreateWithoutCreatedByInput[] | PlayerUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutCreatedByInput | PlayerCreateOrConnectWithoutCreatedByInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutCreatedByInput | PlayerUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PlayerCreateManyCreatedByInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutCreatedByInput | PlayerUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutCreatedByInput | PlayerUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutPlayersInput = {
    create?: XOR<TenantCreateWithoutPlayersInput, TenantUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPlayersInput
    connect?: TenantWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPlayersInput = {
    create?: XOR<UserCreateWithoutPlayersInput, UserUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayersInput
    connect?: UserWhereUniqueInput
  }

  export type PlayerInEventCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerInEventCreateWithoutPlayerInput, PlayerInEventUncheckedCreateWithoutPlayerInput> | PlayerInEventCreateWithoutPlayerInput[] | PlayerInEventUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerInEventCreateOrConnectWithoutPlayerInput | PlayerInEventCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerInEventCreateManyPlayerInputEnvelope
    connect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
  }

  export type PokerEventCreateNestedManyWithoutHostInput = {
    create?: XOR<PokerEventCreateWithoutHostInput, PokerEventUncheckedCreateWithoutHostInput> | PokerEventCreateWithoutHostInput[] | PokerEventUncheckedCreateWithoutHostInput[]
    connectOrCreate?: PokerEventCreateOrConnectWithoutHostInput | PokerEventCreateOrConnectWithoutHostInput[]
    createMany?: PokerEventCreateManyHostInputEnvelope
    connect?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
  }

  export type PlayerInEventUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerInEventCreateWithoutPlayerInput, PlayerInEventUncheckedCreateWithoutPlayerInput> | PlayerInEventCreateWithoutPlayerInput[] | PlayerInEventUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerInEventCreateOrConnectWithoutPlayerInput | PlayerInEventCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerInEventCreateManyPlayerInputEnvelope
    connect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
  }

  export type PokerEventUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<PokerEventCreateWithoutHostInput, PokerEventUncheckedCreateWithoutHostInput> | PokerEventCreateWithoutHostInput[] | PokerEventUncheckedCreateWithoutHostInput[]
    connectOrCreate?: PokerEventCreateOrConnectWithoutHostInput | PokerEventCreateOrConnectWithoutHostInput[]
    createMany?: PokerEventCreateManyHostInputEnvelope
    connect?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<TenantCreateWithoutPlayersInput, TenantUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPlayersInput
    upsert?: TenantUpsertWithoutPlayersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutPlayersInput, TenantUpdateWithoutPlayersInput>, TenantUncheckedUpdateWithoutPlayersInput>
  }

  export type UserUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<UserCreateWithoutPlayersInput, UserUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayersInput
    upsert?: UserUpsertWithoutPlayersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayersInput, UserUpdateWithoutPlayersInput>, UserUncheckedUpdateWithoutPlayersInput>
  }

  export type PlayerInEventUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerInEventCreateWithoutPlayerInput, PlayerInEventUncheckedCreateWithoutPlayerInput> | PlayerInEventCreateWithoutPlayerInput[] | PlayerInEventUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerInEventCreateOrConnectWithoutPlayerInput | PlayerInEventCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerInEventUpsertWithWhereUniqueWithoutPlayerInput | PlayerInEventUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerInEventCreateManyPlayerInputEnvelope
    set?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    disconnect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    delete?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    connect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    update?: PlayerInEventUpdateWithWhereUniqueWithoutPlayerInput | PlayerInEventUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerInEventUpdateManyWithWhereWithoutPlayerInput | PlayerInEventUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerInEventScalarWhereInput | PlayerInEventScalarWhereInput[]
  }

  export type PokerEventUpdateManyWithoutHostNestedInput = {
    create?: XOR<PokerEventCreateWithoutHostInput, PokerEventUncheckedCreateWithoutHostInput> | PokerEventCreateWithoutHostInput[] | PokerEventUncheckedCreateWithoutHostInput[]
    connectOrCreate?: PokerEventCreateOrConnectWithoutHostInput | PokerEventCreateOrConnectWithoutHostInput[]
    upsert?: PokerEventUpsertWithWhereUniqueWithoutHostInput | PokerEventUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: PokerEventCreateManyHostInputEnvelope
    set?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
    disconnect?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
    delete?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
    connect?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
    update?: PokerEventUpdateWithWhereUniqueWithoutHostInput | PokerEventUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: PokerEventUpdateManyWithWhereWithoutHostInput | PokerEventUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: PokerEventScalarWhereInput | PokerEventScalarWhereInput[]
  }

  export type PlayerInEventUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerInEventCreateWithoutPlayerInput, PlayerInEventUncheckedCreateWithoutPlayerInput> | PlayerInEventCreateWithoutPlayerInput[] | PlayerInEventUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerInEventCreateOrConnectWithoutPlayerInput | PlayerInEventCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerInEventUpsertWithWhereUniqueWithoutPlayerInput | PlayerInEventUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerInEventCreateManyPlayerInputEnvelope
    set?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    disconnect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    delete?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    connect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    update?: PlayerInEventUpdateWithWhereUniqueWithoutPlayerInput | PlayerInEventUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerInEventUpdateManyWithWhereWithoutPlayerInput | PlayerInEventUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerInEventScalarWhereInput | PlayerInEventScalarWhereInput[]
  }

  export type PokerEventUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<PokerEventCreateWithoutHostInput, PokerEventUncheckedCreateWithoutHostInput> | PokerEventCreateWithoutHostInput[] | PokerEventUncheckedCreateWithoutHostInput[]
    connectOrCreate?: PokerEventCreateOrConnectWithoutHostInput | PokerEventCreateOrConnectWithoutHostInput[]
    upsert?: PokerEventUpsertWithWhereUniqueWithoutHostInput | PokerEventUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: PokerEventCreateManyHostInputEnvelope
    set?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
    disconnect?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
    delete?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
    connect?: PokerEventWhereUniqueInput | PokerEventWhereUniqueInput[]
    update?: PokerEventUpdateWithWhereUniqueWithoutHostInput | PokerEventUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: PokerEventUpdateManyWithWhereWithoutHostInput | PokerEventUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: PokerEventScalarWhereInput | PokerEventScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutPokerEventsInput = {
    create?: XOR<TenantCreateWithoutPokerEventsInput, TenantUncheckedCreateWithoutPokerEventsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPokerEventsInput
    connect?: TenantWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutHostedEventsInput = {
    create?: XOR<PlayerCreateWithoutHostedEventsInput, PlayerUncheckedCreateWithoutHostedEventsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutHostedEventsInput
    connect?: PlayerWhereUniqueInput
  }

  export type PlayerInEventCreateNestedManyWithoutEventInput = {
    create?: XOR<PlayerInEventCreateWithoutEventInput, PlayerInEventUncheckedCreateWithoutEventInput> | PlayerInEventCreateWithoutEventInput[] | PlayerInEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PlayerInEventCreateOrConnectWithoutEventInput | PlayerInEventCreateOrConnectWithoutEventInput[]
    createMany?: PlayerInEventCreateManyEventInputEnvelope
    connect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
  }

  export type PlayerInEventUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<PlayerInEventCreateWithoutEventInput, PlayerInEventUncheckedCreateWithoutEventInput> | PlayerInEventCreateWithoutEventInput[] | PlayerInEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PlayerInEventCreateOrConnectWithoutEventInput | PlayerInEventCreateOrConnectWithoutEventInput[]
    createMany?: PlayerInEventCreateManyEventInputEnvelope
    connect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
  }

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus
  }

  export type TenantUpdateOneRequiredWithoutPokerEventsNestedInput = {
    create?: XOR<TenantCreateWithoutPokerEventsInput, TenantUncheckedCreateWithoutPokerEventsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPokerEventsInput
    upsert?: TenantUpsertWithoutPokerEventsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutPokerEventsInput, TenantUpdateWithoutPokerEventsInput>, TenantUncheckedUpdateWithoutPokerEventsInput>
  }

  export type PlayerUpdateOneRequiredWithoutHostedEventsNestedInput = {
    create?: XOR<PlayerCreateWithoutHostedEventsInput, PlayerUncheckedCreateWithoutHostedEventsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutHostedEventsInput
    upsert?: PlayerUpsertWithoutHostedEventsInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutHostedEventsInput, PlayerUpdateWithoutHostedEventsInput>, PlayerUncheckedUpdateWithoutHostedEventsInput>
  }

  export type PlayerInEventUpdateManyWithoutEventNestedInput = {
    create?: XOR<PlayerInEventCreateWithoutEventInput, PlayerInEventUncheckedCreateWithoutEventInput> | PlayerInEventCreateWithoutEventInput[] | PlayerInEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PlayerInEventCreateOrConnectWithoutEventInput | PlayerInEventCreateOrConnectWithoutEventInput[]
    upsert?: PlayerInEventUpsertWithWhereUniqueWithoutEventInput | PlayerInEventUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: PlayerInEventCreateManyEventInputEnvelope
    set?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    disconnect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    delete?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    connect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    update?: PlayerInEventUpdateWithWhereUniqueWithoutEventInput | PlayerInEventUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PlayerInEventUpdateManyWithWhereWithoutEventInput | PlayerInEventUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PlayerInEventScalarWhereInput | PlayerInEventScalarWhereInput[]
  }

  export type PlayerInEventUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<PlayerInEventCreateWithoutEventInput, PlayerInEventUncheckedCreateWithoutEventInput> | PlayerInEventCreateWithoutEventInput[] | PlayerInEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PlayerInEventCreateOrConnectWithoutEventInput | PlayerInEventCreateOrConnectWithoutEventInput[]
    upsert?: PlayerInEventUpsertWithWhereUniqueWithoutEventInput | PlayerInEventUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: PlayerInEventCreateManyEventInputEnvelope
    set?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    disconnect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    delete?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    connect?: PlayerInEventWhereUniqueInput | PlayerInEventWhereUniqueInput[]
    update?: PlayerInEventUpdateWithWhereUniqueWithoutEventInput | PlayerInEventUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PlayerInEventUpdateManyWithWhereWithoutEventInput | PlayerInEventUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PlayerInEventScalarWhereInput | PlayerInEventScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutPlayerInEventsInput = {
    create?: XOR<TenantCreateWithoutPlayerInEventsInput, TenantUncheckedCreateWithoutPlayerInEventsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPlayerInEventsInput
    connect?: TenantWhereUniqueInput
  }

  export type PokerEventCreateNestedOneWithoutPlayersInput = {
    create?: XOR<PokerEventCreateWithoutPlayersInput, PokerEventUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: PokerEventCreateOrConnectWithoutPlayersInput
    connect?: PokerEventWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutPokerEventsInput = {
    create?: XOR<PlayerCreateWithoutPokerEventsInput, PlayerUncheckedCreateWithoutPokerEventsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutPokerEventsInput
    connect?: PlayerWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TenantUpdateOneRequiredWithoutPlayerInEventsNestedInput = {
    create?: XOR<TenantCreateWithoutPlayerInEventsInput, TenantUncheckedCreateWithoutPlayerInEventsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPlayerInEventsInput
    upsert?: TenantUpsertWithoutPlayerInEventsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutPlayerInEventsInput, TenantUpdateWithoutPlayerInEventsInput>, TenantUncheckedUpdateWithoutPlayerInEventsInput>
  }

  export type PokerEventUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<PokerEventCreateWithoutPlayersInput, PokerEventUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: PokerEventCreateOrConnectWithoutPlayersInput
    upsert?: PokerEventUpsertWithoutPlayersInput
    connect?: PokerEventWhereUniqueInput
    update?: XOR<XOR<PokerEventUpdateToOneWithWhereWithoutPlayersInput, PokerEventUpdateWithoutPlayersInput>, PokerEventUncheckedUpdateWithoutPlayersInput>
  }

  export type PlayerUpdateOneRequiredWithoutPokerEventsNestedInput = {
    create?: XOR<PlayerCreateWithoutPokerEventsInput, PlayerUncheckedCreateWithoutPokerEventsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutPokerEventsInput
    upsert?: PlayerUpsertWithoutPokerEventsInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutPokerEventsInput, PlayerUpdateWithoutPokerEventsInput>, PlayerUncheckedUpdateWithoutPokerEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTenantPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantPlan | EnumTenantPlanFieldRefInput<$PrismaModel>
    in?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantPlanFilter<$PrismaModel> | $Enums.TenantPlan
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTenantPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantPlan | EnumTenantPlanFieldRefInput<$PrismaModel>
    in?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantPlanWithAggregatesFilter<$PrismaModel> | $Enums.TenantPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTenantPlanFilter<$PrismaModel>
    _max?: NestedEnumTenantPlanFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserCreateWithoutTenantInput = {
    id?: string
    username: string
    email?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutTenantInput = {
    id?: string
    username: string
    email?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserCreateManyTenantInputEnvelope = {
    data: UserCreateManyTenantInput | UserCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type PlayerCreateWithoutTenantInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPlayersInput
    pokerEvents?: PlayerInEventCreateNestedManyWithoutPlayerInput
    hostedEvents?: PokerEventCreateNestedManyWithoutHostInput
  }

  export type PlayerUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pokerEvents?: PlayerInEventUncheckedCreateNestedManyWithoutPlayerInput
    hostedEvents?: PokerEventUncheckedCreateNestedManyWithoutHostInput
  }

  export type PlayerCreateOrConnectWithoutTenantInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutTenantInput, PlayerUncheckedCreateWithoutTenantInput>
  }

  export type PlayerCreateManyTenantInputEnvelope = {
    data: PlayerCreateManyTenantInput | PlayerCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type PokerEventCreateWithoutTenantInput = {
    id?: string
    date?: Date | string
    status?: $Enums.EventStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    host: PlayerCreateNestedOneWithoutHostedEventsInput
    players?: PlayerInEventCreateNestedManyWithoutEventInput
  }

  export type PokerEventUncheckedCreateWithoutTenantInput = {
    id?: string
    date?: Date | string
    status?: $Enums.EventStatus
    hostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerInEventUncheckedCreateNestedManyWithoutEventInput
  }

  export type PokerEventCreateOrConnectWithoutTenantInput = {
    where: PokerEventWhereUniqueInput
    create: XOR<PokerEventCreateWithoutTenantInput, PokerEventUncheckedCreateWithoutTenantInput>
  }

  export type PokerEventCreateManyTenantInputEnvelope = {
    data: PokerEventCreateManyTenantInput | PokerEventCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type PlayerInEventCreateWithoutTenantInput = {
    id?: string
    buyIns?: number
    cashOutAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event: PokerEventCreateNestedOneWithoutPlayersInput
    player: PlayerCreateNestedOneWithoutPokerEventsInput
  }

  export type PlayerInEventUncheckedCreateWithoutTenantInput = {
    id?: string
    buyIns?: number
    cashOutAmount?: number | null
    eventId: string
    playerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerInEventCreateOrConnectWithoutTenantInput = {
    where: PlayerInEventWhereUniqueInput
    create: XOR<PlayerInEventCreateWithoutTenantInput, PlayerInEventUncheckedCreateWithoutTenantInput>
  }

  export type PlayerInEventCreateManyTenantInputEnvelope = {
    data: PlayerInEventCreateManyTenantInput | PlayerInEventCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
  }

  export type UserUpdateManyWithWhereWithoutTenantInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTenantInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    tenantId?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type PlayerUpsertWithWhereUniqueWithoutTenantInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutTenantInput, PlayerUncheckedUpdateWithoutTenantInput>
    create: XOR<PlayerCreateWithoutTenantInput, PlayerUncheckedCreateWithoutTenantInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutTenantInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutTenantInput, PlayerUncheckedUpdateWithoutTenantInput>
  }

  export type PlayerUpdateManyWithWhereWithoutTenantInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutTenantInput>
  }

  export type PlayerScalarWhereInput = {
    AND?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    OR?: PlayerScalarWhereInput[]
    NOT?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    id?: StringFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    tenantId?: StringFilter<"Player"> | string
    createdById?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
  }

  export type PokerEventUpsertWithWhereUniqueWithoutTenantInput = {
    where: PokerEventWhereUniqueInput
    update: XOR<PokerEventUpdateWithoutTenantInput, PokerEventUncheckedUpdateWithoutTenantInput>
    create: XOR<PokerEventCreateWithoutTenantInput, PokerEventUncheckedCreateWithoutTenantInput>
  }

  export type PokerEventUpdateWithWhereUniqueWithoutTenantInput = {
    where: PokerEventWhereUniqueInput
    data: XOR<PokerEventUpdateWithoutTenantInput, PokerEventUncheckedUpdateWithoutTenantInput>
  }

  export type PokerEventUpdateManyWithWhereWithoutTenantInput = {
    where: PokerEventScalarWhereInput
    data: XOR<PokerEventUpdateManyMutationInput, PokerEventUncheckedUpdateManyWithoutTenantInput>
  }

  export type PokerEventScalarWhereInput = {
    AND?: PokerEventScalarWhereInput | PokerEventScalarWhereInput[]
    OR?: PokerEventScalarWhereInput[]
    NOT?: PokerEventScalarWhereInput | PokerEventScalarWhereInput[]
    id?: StringFilter<"PokerEvent"> | string
    date?: DateTimeFilter<"PokerEvent"> | Date | string
    status?: EnumEventStatusFilter<"PokerEvent"> | $Enums.EventStatus
    tenantId?: StringFilter<"PokerEvent"> | string
    hostId?: StringFilter<"PokerEvent"> | string
    createdAt?: DateTimeFilter<"PokerEvent"> | Date | string
    updatedAt?: DateTimeFilter<"PokerEvent"> | Date | string
  }

  export type PlayerInEventUpsertWithWhereUniqueWithoutTenantInput = {
    where: PlayerInEventWhereUniqueInput
    update: XOR<PlayerInEventUpdateWithoutTenantInput, PlayerInEventUncheckedUpdateWithoutTenantInput>
    create: XOR<PlayerInEventCreateWithoutTenantInput, PlayerInEventUncheckedCreateWithoutTenantInput>
  }

  export type PlayerInEventUpdateWithWhereUniqueWithoutTenantInput = {
    where: PlayerInEventWhereUniqueInput
    data: XOR<PlayerInEventUpdateWithoutTenantInput, PlayerInEventUncheckedUpdateWithoutTenantInput>
  }

  export type PlayerInEventUpdateManyWithWhereWithoutTenantInput = {
    where: PlayerInEventScalarWhereInput
    data: XOR<PlayerInEventUpdateManyMutationInput, PlayerInEventUncheckedUpdateManyWithoutTenantInput>
  }

  export type PlayerInEventScalarWhereInput = {
    AND?: PlayerInEventScalarWhereInput | PlayerInEventScalarWhereInput[]
    OR?: PlayerInEventScalarWhereInput[]
    NOT?: PlayerInEventScalarWhereInput | PlayerInEventScalarWhereInput[]
    id?: StringFilter<"PlayerInEvent"> | string
    buyIns?: IntFilter<"PlayerInEvent"> | number
    cashOutAmount?: IntNullableFilter<"PlayerInEvent"> | number | null
    tenantId?: StringFilter<"PlayerInEvent"> | string
    eventId?: StringFilter<"PlayerInEvent"> | string
    playerId?: StringFilter<"PlayerInEvent"> | string
    createdAt?: DateTimeFilter<"PlayerInEvent"> | Date | string
    updatedAt?: DateTimeFilter<"PlayerInEvent"> | Date | string
  }

  export type TenantCreateWithoutUsersInput = {
    id?: string
    name: string
    subdomain: string
    customDomain?: string | null
    plan?: $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerCreateNestedManyWithoutTenantInput
    pokerEvents?: PokerEventCreateNestedManyWithoutTenantInput
    playerInEvents?: PlayerInEventCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    subdomain: string
    customDomain?: string | null
    plan?: $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerUncheckedCreateNestedManyWithoutTenantInput
    pokerEvents?: PokerEventUncheckedCreateNestedManyWithoutTenantInput
    playerInEvents?: PlayerInEventUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUsersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
  }

  export type PlayerCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPlayersInput
    pokerEvents?: PlayerInEventCreateNestedManyWithoutPlayerInput
    hostedEvents?: PokerEventCreateNestedManyWithoutHostInput
  }

  export type PlayerUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pokerEvents?: PlayerInEventUncheckedCreateNestedManyWithoutPlayerInput
    hostedEvents?: PokerEventUncheckedCreateNestedManyWithoutHostInput
  }

  export type PlayerCreateOrConnectWithoutCreatedByInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutCreatedByInput, PlayerUncheckedCreateWithoutCreatedByInput>
  }

  export type PlayerCreateManyCreatedByInputEnvelope = {
    data: PlayerCreateManyCreatedByInput | PlayerCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutUsersInput = {
    update: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUsersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type TenantUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUpdateManyWithoutTenantNestedInput
    pokerEvents?: PokerEventUpdateManyWithoutTenantNestedInput
    playerInEvents?: PlayerInEventUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUncheckedUpdateManyWithoutTenantNestedInput
    pokerEvents?: PokerEventUncheckedUpdateManyWithoutTenantNestedInput
    playerInEvents?: PlayerInEventUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type PlayerUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutCreatedByInput, PlayerUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PlayerCreateWithoutCreatedByInput, PlayerUncheckedCreateWithoutCreatedByInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutCreatedByInput, PlayerUncheckedUpdateWithoutCreatedByInput>
  }

  export type PlayerUpdateManyWithWhereWithoutCreatedByInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TenantCreateWithoutPlayersInput = {
    id?: string
    name: string
    subdomain: string
    customDomain?: string | null
    plan?: $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    pokerEvents?: PokerEventCreateNestedManyWithoutTenantInput
    playerInEvents?: PlayerInEventCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutPlayersInput = {
    id?: string
    name: string
    subdomain: string
    customDomain?: string | null
    plan?: $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    pokerEvents?: PokerEventUncheckedCreateNestedManyWithoutTenantInput
    playerInEvents?: PlayerInEventUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutPlayersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPlayersInput, TenantUncheckedCreateWithoutPlayersInput>
  }

  export type UserCreateWithoutPlayersInput = {
    id?: string
    username: string
    email?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPlayersInput = {
    id?: string
    username: string
    email?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    tenantId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPlayersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayersInput, UserUncheckedCreateWithoutPlayersInput>
  }

  export type PlayerInEventCreateWithoutPlayerInput = {
    id?: string
    buyIns?: number
    cashOutAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPlayerInEventsInput
    event: PokerEventCreateNestedOneWithoutPlayersInput
  }

  export type PlayerInEventUncheckedCreateWithoutPlayerInput = {
    id?: string
    buyIns?: number
    cashOutAmount?: number | null
    tenantId: string
    eventId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerInEventCreateOrConnectWithoutPlayerInput = {
    where: PlayerInEventWhereUniqueInput
    create: XOR<PlayerInEventCreateWithoutPlayerInput, PlayerInEventUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerInEventCreateManyPlayerInputEnvelope = {
    data: PlayerInEventCreateManyPlayerInput | PlayerInEventCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type PokerEventCreateWithoutHostInput = {
    id?: string
    date?: Date | string
    status?: $Enums.EventStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPokerEventsInput
    players?: PlayerInEventCreateNestedManyWithoutEventInput
  }

  export type PokerEventUncheckedCreateWithoutHostInput = {
    id?: string
    date?: Date | string
    status?: $Enums.EventStatus
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerInEventUncheckedCreateNestedManyWithoutEventInput
  }

  export type PokerEventCreateOrConnectWithoutHostInput = {
    where: PokerEventWhereUniqueInput
    create: XOR<PokerEventCreateWithoutHostInput, PokerEventUncheckedCreateWithoutHostInput>
  }

  export type PokerEventCreateManyHostInputEnvelope = {
    data: PokerEventCreateManyHostInput | PokerEventCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutPlayersInput = {
    update: XOR<TenantUpdateWithoutPlayersInput, TenantUncheckedUpdateWithoutPlayersInput>
    create: XOR<TenantCreateWithoutPlayersInput, TenantUncheckedCreateWithoutPlayersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutPlayersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutPlayersInput, TenantUncheckedUpdateWithoutPlayersInput>
  }

  export type TenantUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    pokerEvents?: PokerEventUpdateManyWithoutTenantNestedInput
    playerInEvents?: PlayerInEventUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    pokerEvents?: PokerEventUncheckedUpdateManyWithoutTenantNestedInput
    playerInEvents?: PlayerInEventUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UserUpsertWithoutPlayersInput = {
    update: XOR<UserUpdateWithoutPlayersInput, UserUncheckedUpdateWithoutPlayersInput>
    create: XOR<UserCreateWithoutPlayersInput, UserUncheckedCreateWithoutPlayersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlayersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlayersInput, UserUncheckedUpdateWithoutPlayersInput>
  }

  export type UserUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerInEventUpsertWithWhereUniqueWithoutPlayerInput = {
    where: PlayerInEventWhereUniqueInput
    update: XOR<PlayerInEventUpdateWithoutPlayerInput, PlayerInEventUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayerInEventCreateWithoutPlayerInput, PlayerInEventUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerInEventUpdateWithWhereUniqueWithoutPlayerInput = {
    where: PlayerInEventWhereUniqueInput
    data: XOR<PlayerInEventUpdateWithoutPlayerInput, PlayerInEventUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerInEventUpdateManyWithWhereWithoutPlayerInput = {
    where: PlayerInEventScalarWhereInput
    data: XOR<PlayerInEventUpdateManyMutationInput, PlayerInEventUncheckedUpdateManyWithoutPlayerInput>
  }

  export type PokerEventUpsertWithWhereUniqueWithoutHostInput = {
    where: PokerEventWhereUniqueInput
    update: XOR<PokerEventUpdateWithoutHostInput, PokerEventUncheckedUpdateWithoutHostInput>
    create: XOR<PokerEventCreateWithoutHostInput, PokerEventUncheckedCreateWithoutHostInput>
  }

  export type PokerEventUpdateWithWhereUniqueWithoutHostInput = {
    where: PokerEventWhereUniqueInput
    data: XOR<PokerEventUpdateWithoutHostInput, PokerEventUncheckedUpdateWithoutHostInput>
  }

  export type PokerEventUpdateManyWithWhereWithoutHostInput = {
    where: PokerEventScalarWhereInput
    data: XOR<PokerEventUpdateManyMutationInput, PokerEventUncheckedUpdateManyWithoutHostInput>
  }

  export type TenantCreateWithoutPokerEventsInput = {
    id?: string
    name: string
    subdomain: string
    customDomain?: string | null
    plan?: $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    players?: PlayerCreateNestedManyWithoutTenantInput
    playerInEvents?: PlayerInEventCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutPokerEventsInput = {
    id?: string
    name: string
    subdomain: string
    customDomain?: string | null
    plan?: $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    players?: PlayerUncheckedCreateNestedManyWithoutTenantInput
    playerInEvents?: PlayerInEventUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutPokerEventsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPokerEventsInput, TenantUncheckedCreateWithoutPokerEventsInput>
  }

  export type PlayerCreateWithoutHostedEventsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPlayersInput
    createdBy: UserCreateNestedOneWithoutPlayersInput
    pokerEvents?: PlayerInEventCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutHostedEventsInput = {
    id?: string
    name: string
    tenantId: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pokerEvents?: PlayerInEventUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutHostedEventsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutHostedEventsInput, PlayerUncheckedCreateWithoutHostedEventsInput>
  }

  export type PlayerInEventCreateWithoutEventInput = {
    id?: string
    buyIns?: number
    cashOutAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPlayerInEventsInput
    player: PlayerCreateNestedOneWithoutPokerEventsInput
  }

  export type PlayerInEventUncheckedCreateWithoutEventInput = {
    id?: string
    buyIns?: number
    cashOutAmount?: number | null
    tenantId: string
    playerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerInEventCreateOrConnectWithoutEventInput = {
    where: PlayerInEventWhereUniqueInput
    create: XOR<PlayerInEventCreateWithoutEventInput, PlayerInEventUncheckedCreateWithoutEventInput>
  }

  export type PlayerInEventCreateManyEventInputEnvelope = {
    data: PlayerInEventCreateManyEventInput | PlayerInEventCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutPokerEventsInput = {
    update: XOR<TenantUpdateWithoutPokerEventsInput, TenantUncheckedUpdateWithoutPokerEventsInput>
    create: XOR<TenantCreateWithoutPokerEventsInput, TenantUncheckedCreateWithoutPokerEventsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutPokerEventsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutPokerEventsInput, TenantUncheckedUpdateWithoutPokerEventsInput>
  }

  export type TenantUpdateWithoutPokerEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    players?: PlayerUpdateManyWithoutTenantNestedInput
    playerInEvents?: PlayerInEventUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutPokerEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    players?: PlayerUncheckedUpdateManyWithoutTenantNestedInput
    playerInEvents?: PlayerInEventUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type PlayerUpsertWithoutHostedEventsInput = {
    update: XOR<PlayerUpdateWithoutHostedEventsInput, PlayerUncheckedUpdateWithoutHostedEventsInput>
    create: XOR<PlayerCreateWithoutHostedEventsInput, PlayerUncheckedCreateWithoutHostedEventsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutHostedEventsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutHostedEventsInput, PlayerUncheckedUpdateWithoutHostedEventsInput>
  }

  export type PlayerUpdateWithoutHostedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPlayersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutPlayersNestedInput
    pokerEvents?: PlayerInEventUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutHostedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pokerEvents?: PlayerInEventUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerInEventUpsertWithWhereUniqueWithoutEventInput = {
    where: PlayerInEventWhereUniqueInput
    update: XOR<PlayerInEventUpdateWithoutEventInput, PlayerInEventUncheckedUpdateWithoutEventInput>
    create: XOR<PlayerInEventCreateWithoutEventInput, PlayerInEventUncheckedCreateWithoutEventInput>
  }

  export type PlayerInEventUpdateWithWhereUniqueWithoutEventInput = {
    where: PlayerInEventWhereUniqueInput
    data: XOR<PlayerInEventUpdateWithoutEventInput, PlayerInEventUncheckedUpdateWithoutEventInput>
  }

  export type PlayerInEventUpdateManyWithWhereWithoutEventInput = {
    where: PlayerInEventScalarWhereInput
    data: XOR<PlayerInEventUpdateManyMutationInput, PlayerInEventUncheckedUpdateManyWithoutEventInput>
  }

  export type TenantCreateWithoutPlayerInEventsInput = {
    id?: string
    name: string
    subdomain: string
    customDomain?: string | null
    plan?: $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    players?: PlayerCreateNestedManyWithoutTenantInput
    pokerEvents?: PokerEventCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutPlayerInEventsInput = {
    id?: string
    name: string
    subdomain: string
    customDomain?: string | null
    plan?: $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    players?: PlayerUncheckedCreateNestedManyWithoutTenantInput
    pokerEvents?: PokerEventUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutPlayerInEventsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPlayerInEventsInput, TenantUncheckedCreateWithoutPlayerInEventsInput>
  }

  export type PokerEventCreateWithoutPlayersInput = {
    id?: string
    date?: Date | string
    status?: $Enums.EventStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPokerEventsInput
    host: PlayerCreateNestedOneWithoutHostedEventsInput
  }

  export type PokerEventUncheckedCreateWithoutPlayersInput = {
    id?: string
    date?: Date | string
    status?: $Enums.EventStatus
    tenantId: string
    hostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PokerEventCreateOrConnectWithoutPlayersInput = {
    where: PokerEventWhereUniqueInput
    create: XOR<PokerEventCreateWithoutPlayersInput, PokerEventUncheckedCreateWithoutPlayersInput>
  }

  export type PlayerCreateWithoutPokerEventsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPlayersInput
    createdBy: UserCreateNestedOneWithoutPlayersInput
    hostedEvents?: PokerEventCreateNestedManyWithoutHostInput
  }

  export type PlayerUncheckedCreateWithoutPokerEventsInput = {
    id?: string
    name: string
    tenantId: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedEvents?: PokerEventUncheckedCreateNestedManyWithoutHostInput
  }

  export type PlayerCreateOrConnectWithoutPokerEventsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutPokerEventsInput, PlayerUncheckedCreateWithoutPokerEventsInput>
  }

  export type TenantUpsertWithoutPlayerInEventsInput = {
    update: XOR<TenantUpdateWithoutPlayerInEventsInput, TenantUncheckedUpdateWithoutPlayerInEventsInput>
    create: XOR<TenantCreateWithoutPlayerInEventsInput, TenantUncheckedCreateWithoutPlayerInEventsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutPlayerInEventsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutPlayerInEventsInput, TenantUncheckedUpdateWithoutPlayerInEventsInput>
  }

  export type TenantUpdateWithoutPlayerInEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    players?: PlayerUpdateManyWithoutTenantNestedInput
    pokerEvents?: PokerEventUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutPlayerInEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    players?: PlayerUncheckedUpdateManyWithoutTenantNestedInput
    pokerEvents?: PokerEventUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type PokerEventUpsertWithoutPlayersInput = {
    update: XOR<PokerEventUpdateWithoutPlayersInput, PokerEventUncheckedUpdateWithoutPlayersInput>
    create: XOR<PokerEventCreateWithoutPlayersInput, PokerEventUncheckedCreateWithoutPlayersInput>
    where?: PokerEventWhereInput
  }

  export type PokerEventUpdateToOneWithWhereWithoutPlayersInput = {
    where?: PokerEventWhereInput
    data: XOR<PokerEventUpdateWithoutPlayersInput, PokerEventUncheckedUpdateWithoutPlayersInput>
  }

  export type PokerEventUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPokerEventsNestedInput
    host?: PlayerUpdateOneRequiredWithoutHostedEventsNestedInput
  }

  export type PokerEventUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUpsertWithoutPokerEventsInput = {
    update: XOR<PlayerUpdateWithoutPokerEventsInput, PlayerUncheckedUpdateWithoutPokerEventsInput>
    create: XOR<PlayerCreateWithoutPokerEventsInput, PlayerUncheckedCreateWithoutPokerEventsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutPokerEventsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutPokerEventsInput, PlayerUncheckedUpdateWithoutPokerEventsInput>
  }

  export type PlayerUpdateWithoutPokerEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPlayersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutPlayersNestedInput
    hostedEvents?: PokerEventUpdateManyWithoutHostNestedInput
  }

  export type PlayerUncheckedUpdateWithoutPokerEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedEvents?: PokerEventUncheckedUpdateManyWithoutHostNestedInput
  }

  export type UserCreateManyTenantInput = {
    id?: string
    username: string
    email?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerCreateManyTenantInput = {
    id?: string
    name: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PokerEventCreateManyTenantInput = {
    id?: string
    date?: Date | string
    status?: $Enums.EventStatus
    hostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerInEventCreateManyTenantInput = {
    id?: string
    buyIns?: number
    cashOutAmount?: number | null
    eventId: string
    playerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPlayersNestedInput
    pokerEvents?: PlayerInEventUpdateManyWithoutPlayerNestedInput
    hostedEvents?: PokerEventUpdateManyWithoutHostNestedInput
  }

  export type PlayerUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pokerEvents?: PlayerInEventUncheckedUpdateManyWithoutPlayerNestedInput
    hostedEvents?: PokerEventUncheckedUpdateManyWithoutHostNestedInput
  }

  export type PlayerUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokerEventUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: PlayerUpdateOneRequiredWithoutHostedEventsNestedInput
    players?: PlayerInEventUpdateManyWithoutEventNestedInput
  }

  export type PokerEventUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerInEventUncheckedUpdateManyWithoutEventNestedInput
  }

  export type PokerEventUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerInEventUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyIns?: IntFieldUpdateOperationsInput | number
    cashOutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: PokerEventUpdateOneRequiredWithoutPlayersNestedInput
    player?: PlayerUpdateOneRequiredWithoutPokerEventsNestedInput
  }

  export type PlayerInEventUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyIns?: IntFieldUpdateOperationsInput | number
    cashOutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    eventId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerInEventUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyIns?: IntFieldUpdateOperationsInput | number
    cashOutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    eventId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateManyCreatedByInput = {
    id?: string
    name: string
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPlayersNestedInput
    pokerEvents?: PlayerInEventUpdateManyWithoutPlayerNestedInput
    hostedEvents?: PokerEventUpdateManyWithoutHostNestedInput
  }

  export type PlayerUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pokerEvents?: PlayerInEventUncheckedUpdateManyWithoutPlayerNestedInput
    hostedEvents?: PokerEventUncheckedUpdateManyWithoutHostNestedInput
  }

  export type PlayerUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerInEventCreateManyPlayerInput = {
    id?: string
    buyIns?: number
    cashOutAmount?: number | null
    tenantId: string
    eventId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PokerEventCreateManyHostInput = {
    id?: string
    date?: Date | string
    status?: $Enums.EventStatus
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerInEventUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyIns?: IntFieldUpdateOperationsInput | number
    cashOutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPlayerInEventsNestedInput
    event?: PokerEventUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type PlayerInEventUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyIns?: IntFieldUpdateOperationsInput | number
    cashOutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    tenantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerInEventUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyIns?: IntFieldUpdateOperationsInput | number
    cashOutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    tenantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokerEventUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPokerEventsNestedInput
    players?: PlayerInEventUpdateManyWithoutEventNestedInput
  }

  export type PokerEventUncheckedUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerInEventUncheckedUpdateManyWithoutEventNestedInput
  }

  export type PokerEventUncheckedUpdateManyWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerInEventCreateManyEventInput = {
    id?: string
    buyIns?: number
    cashOutAmount?: number | null
    tenantId: string
    playerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerInEventUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyIns?: IntFieldUpdateOperationsInput | number
    cashOutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPlayerInEventsNestedInput
    player?: PlayerUpdateOneRequiredWithoutPokerEventsNestedInput
  }

  export type PlayerInEventUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyIns?: IntFieldUpdateOperationsInput | number
    cashOutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    tenantId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerInEventUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyIns?: IntFieldUpdateOperationsInput | number
    cashOutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    tenantId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}