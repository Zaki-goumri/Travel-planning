
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model Destination
 * 
 */
export type Destination = $Result.DefaultSelection<Prisma.$DestinationPayload>
/**
 * Model OffersActivity
 * 
 */
export type OffersActivity = $Result.DefaultSelection<Prisma.$OffersActivityPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs>;

  /**
   * `prisma.destination`: Exposes CRUD operations for the **Destination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinations
    * const destinations = await prisma.destination.findMany()
    * ```
    */
  get destination(): Prisma.DestinationDelegate<ExtArgs>;

  /**
   * `prisma.offersActivity`: Exposes CRUD operations for the **OffersActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OffersActivities
    * const offersActivities = await prisma.offersActivity.findMany()
    * ```
    */
  get offersActivity(): Prisma.OffersActivityDelegate<ExtArgs>;
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
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Trip: 'Trip',
    Destination: 'Destination',
    OffersActivity: 'OffersActivity'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "trip" | "destination" | "offersActivity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      Destination: {
        payload: Prisma.$DestinationPayload<ExtArgs>
        fields: Prisma.DestinationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findFirst: {
            args: Prisma.DestinationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findMany: {
            args: Prisma.DestinationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          create: {
            args: Prisma.DestinationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          createMany: {
            args: Prisma.DestinationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DestinationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          delete: {
            args: Prisma.DestinationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          update: {
            args: Prisma.DestinationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          deleteMany: {
            args: Prisma.DestinationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DestinationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          aggregate: {
            args: Prisma.DestinationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestination>
          }
          groupBy: {
            args: Prisma.DestinationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationCountAggregateOutputType> | number
          }
        }
      }
      OffersActivity: {
        payload: Prisma.$OffersActivityPayload<ExtArgs>
        fields: Prisma.OffersActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OffersActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffersActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OffersActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffersActivityPayload>
          }
          findFirst: {
            args: Prisma.OffersActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffersActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OffersActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffersActivityPayload>
          }
          findMany: {
            args: Prisma.OffersActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffersActivityPayload>[]
          }
          create: {
            args: Prisma.OffersActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffersActivityPayload>
          }
          createMany: {
            args: Prisma.OffersActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OffersActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffersActivityPayload>[]
          }
          delete: {
            args: Prisma.OffersActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffersActivityPayload>
          }
          update: {
            args: Prisma.OffersActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffersActivityPayload>
          }
          deleteMany: {
            args: Prisma.OffersActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OffersActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OffersActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffersActivityPayload>
          }
          aggregate: {
            args: Prisma.OffersActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffersActivity>
          }
          groupBy: {
            args: Prisma.OffersActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<OffersActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.OffersActivityCountArgs<ExtArgs>
            result: $Utils.Optional<OffersActivityCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    trip: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | UserCountOutputTypeCountTripArgs
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
  export type UserCountOutputTypeCountTripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    userID: number
    destination: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userID?: boolean | TripCountOutputTypeCountUserIDArgs
    destination?: boolean | TripCountOutputTypeCountDestinationArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountUserIDArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountDestinationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
  }


  /**
   * Count Type DestinationCountOutputType
   */

  export type DestinationCountOutputType = {
    tripID: number
    offers: number
  }

  export type DestinationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripID?: boolean | DestinationCountOutputTypeCountTripIDArgs
    offers?: boolean | DestinationCountOutputTypeCountOffersArgs
  }

  // Custom InputTypes
  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCountOutputType
     */
    select?: DestinationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountTripIDArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OffersActivityWhereInput
  }


  /**
   * Count Type OffersActivityCountOutputType
   */

  export type OffersActivityCountOutputType = {
    destinationID: number
  }

  export type OffersActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinationID?: boolean | OffersActivityCountOutputTypeCountDestinationIDArgs
  }

  // Custom InputTypes
  /**
   * OffersActivityCountOutputType without action
   */
  export type OffersActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffersActivityCountOutputType
     */
    select?: OffersActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OffersActivityCountOutputType without action
   */
  export type OffersActivityCountOutputTypeCountDestinationIDArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
  }


  /**
   * Models
   */

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
    email: string | null
    password: string | null
    name: string | null
    provider: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    provider: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    provider: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    provider?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    provider?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    provider?: true
    role?: true
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
    email: string
    password: string | null
    name: string
    provider: string | null
    role: string
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
    email?: boolean
    password?: boolean
    name?: boolean
    provider?: boolean
    role?: boolean
    trip?: boolean | User$tripArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    provider?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    provider?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | User$tripArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string | null
      name: string
      provider: string | null
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends User$tripArgs<ExtArgs> = {}>(args?: Subset<T, User$tripArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
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
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
  }

  /**
   * User.trip
   */
  export type User$tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripMinAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type TripMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    _all: number
  }


  export type TripMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: string
    name: string
    startDate: Date
    endDate: Date
    _count: TripCountAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    userID?: boolean | Trip$userIDArgs<ExtArgs>
    destination?: boolean | Trip$destinationArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userID?: boolean | Trip$userIDArgs<ExtArgs>
    destination?: boolean | Trip$destinationArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      userID: Prisma.$UserPayload<ExtArgs>[]
      destination: Prisma.$DestinationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startDate: Date
      endDate: Date
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips and returns the data saved in the database.
     * @param {TripCreateManyAndReturnArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripCreateManyAndReturnArgs>(args?: SelectSubset<T, TripCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
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
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userID<T extends Trip$userIDArgs<ExtArgs> = {}>(args?: Subset<T, Trip$userIDArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    destination<T extends Trip$destinationArgs<ExtArgs> = {}>(args?: Subset<T, Trip$destinationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Trip model
   */ 
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'String'>
    readonly name: FieldRef<"Trip", 'String'>
    readonly startDate: FieldRef<"Trip", 'DateTime'>
    readonly endDate: FieldRef<"Trip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip createManyAndReturn
   */
  export type TripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
  }

  /**
   * Trip.userID
   */
  export type Trip$userIDArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
   * Trip.destination
   */
  export type Trip$destinationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    cursor?: DestinationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model Destination
   */

  export type AggregateDestination = {
    _count: DestinationCountAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  export type DestinationMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DestinationMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DestinationCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DestinationMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DestinationMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DestinationCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DestinationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destination to aggregate.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Destinations
    **/
    _count?: true | DestinationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationMaxAggregateInputType
  }

  export type GetDestinationAggregateType<T extends DestinationAggregateArgs> = {
        [P in keyof T & keyof AggregateDestination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestination[P]>
      : GetScalarType<T[P], AggregateDestination[P]>
  }




  export type DestinationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithAggregationInput | DestinationOrderByWithAggregationInput[]
    by: DestinationScalarFieldEnum[] | DestinationScalarFieldEnum
    having?: DestinationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationCountAggregateInputType | true
    _min?: DestinationMinAggregateInputType
    _max?: DestinationMaxAggregateInputType
  }

  export type DestinationGroupByOutputType = {
    id: string
    name: string
    _count: DestinationCountAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  type GetDestinationGroupByPayload<T extends DestinationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationGroupByOutputType[P]>
        }
      >
    >


  export type DestinationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tripID?: boolean | Destination$tripIDArgs<ExtArgs>
    offers?: boolean | Destination$offersArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DestinationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripID?: boolean | Destination$tripIDArgs<ExtArgs>
    offers?: boolean | Destination$offersArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DestinationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DestinationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Destination"
    objects: {
      tripID: Prisma.$TripPayload<ExtArgs>[]
      offers: Prisma.$OffersActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["destination"]>
    composites: {}
  }

  type DestinationGetPayload<S extends boolean | null | undefined | DestinationDefaultArgs> = $Result.GetResult<Prisma.$DestinationPayload, S>

  type DestinationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DestinationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DestinationCountAggregateInputType | true
    }

  export interface DestinationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Destination'], meta: { name: 'Destination' } }
    /**
     * Find zero or one Destination that matches the filter.
     * @param {DestinationFindUniqueArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationFindUniqueArgs>(args: SelectSubset<T, DestinationFindUniqueArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Destination that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DestinationFindUniqueOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Destination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationFindFirstArgs>(args?: SelectSubset<T, DestinationFindFirstArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Destination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinations
     * const destinations = await prisma.destination.findMany()
     * 
     * // Get first 10 Destinations
     * const destinations = await prisma.destination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationWithIdOnly = await prisma.destination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DestinationFindManyArgs>(args?: SelectSubset<T, DestinationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Destination.
     * @param {DestinationCreateArgs} args - Arguments to create a Destination.
     * @example
     * // Create one Destination
     * const Destination = await prisma.destination.create({
     *   data: {
     *     // ... data to create a Destination
     *   }
     * })
     * 
     */
    create<T extends DestinationCreateArgs>(args: SelectSubset<T, DestinationCreateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Destinations.
     * @param {DestinationCreateManyArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationCreateManyArgs>(args?: SelectSubset<T, DestinationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Destinations and returns the data saved in the database.
     * @param {DestinationCreateManyAndReturnArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Destinations and only return the `id`
     * const destinationWithIdOnly = await prisma.destination.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DestinationCreateManyAndReturnArgs>(args?: SelectSubset<T, DestinationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Destination.
     * @param {DestinationDeleteArgs} args - Arguments to delete one Destination.
     * @example
     * // Delete one Destination
     * const Destination = await prisma.destination.delete({
     *   where: {
     *     // ... filter to delete one Destination
     *   }
     * })
     * 
     */
    delete<T extends DestinationDeleteArgs>(args: SelectSubset<T, DestinationDeleteArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Destination.
     * @param {DestinationUpdateArgs} args - Arguments to update one Destination.
     * @example
     * // Update one Destination
     * const destination = await prisma.destination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationUpdateArgs>(args: SelectSubset<T, DestinationUpdateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Destinations.
     * @param {DestinationDeleteManyArgs} args - Arguments to filter Destinations to delete.
     * @example
     * // Delete a few Destinations
     * const { count } = await prisma.destination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationDeleteManyArgs>(args?: SelectSubset<T, DestinationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationUpdateManyArgs>(args: SelectSubset<T, DestinationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Destination.
     * @param {DestinationUpsertArgs} args - Arguments to update or create a Destination.
     * @example
     * // Update or create a Destination
     * const destination = await prisma.destination.upsert({
     *   create: {
     *     // ... data to create a Destination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destination we want to update
     *   }
     * })
     */
    upsert<T extends DestinationUpsertArgs>(args: SelectSubset<T, DestinationUpsertArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCountArgs} args - Arguments to filter Destinations to count.
     * @example
     * // Count the number of Destinations
     * const count = await prisma.destination.count({
     *   where: {
     *     // ... the filter for the Destinations we want to count
     *   }
     * })
    **/
    count<T extends DestinationCountArgs>(
      args?: Subset<T, DestinationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DestinationAggregateArgs>(args: Subset<T, DestinationAggregateArgs>): Prisma.PrismaPromise<GetDestinationAggregateType<T>>

    /**
     * Group by Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationGroupByArgs} args - Group by arguments.
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
      T extends DestinationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationGroupByArgs['orderBy'] }
        : { orderBy?: DestinationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DestinationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Destination model
   */
  readonly fields: DestinationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Destination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tripID<T extends Destination$tripIDArgs<ExtArgs> = {}>(args?: Subset<T, Destination$tripIDArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany"> | Null>
    offers<T extends Destination$offersArgs<ExtArgs> = {}>(args?: Subset<T, Destination$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OffersActivityPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Destination model
   */ 
  interface DestinationFieldRefs {
    readonly id: FieldRef<"Destination", 'String'>
    readonly name: FieldRef<"Destination", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Destination findUnique
   */
  export type DestinationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findUniqueOrThrow
   */
  export type DestinationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findFirst
   */
  export type DestinationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findFirstOrThrow
   */
  export type DestinationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findMany
   */
  export type DestinationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destinations to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination create
   */
  export type DestinationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to create a Destination.
     */
    data: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
  }

  /**
   * Destination createMany
   */
  export type DestinationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Destination createManyAndReturn
   */
  export type DestinationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Destination update
   */
  export type DestinationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to update a Destination.
     */
    data: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
    /**
     * Choose, which Destination to update.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination updateMany
   */
  export type DestinationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
  }

  /**
   * Destination upsert
   */
  export type DestinationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The filter to search for the Destination to update in case it exists.
     */
    where: DestinationWhereUniqueInput
    /**
     * In case the Destination found by the `where` argument doesn't exist, create a new Destination with this data.
     */
    create: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
    /**
     * In case the Destination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
  }

  /**
   * Destination delete
   */
  export type DestinationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter which Destination to delete.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination deleteMany
   */
  export type DestinationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destinations to delete
     */
    where?: DestinationWhereInput
  }

  /**
   * Destination.tripID
   */
  export type Destination$tripIDArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Destination.offers
   */
  export type Destination$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffersActivity
     */
    select?: OffersActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffersActivityInclude<ExtArgs> | null
    where?: OffersActivityWhereInput
    orderBy?: OffersActivityOrderByWithRelationInput | OffersActivityOrderByWithRelationInput[]
    cursor?: OffersActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OffersActivityScalarFieldEnum | OffersActivityScalarFieldEnum[]
  }

  /**
   * Destination without action
   */
  export type DestinationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
  }


  /**
   * Model OffersActivity
   */

  export type AggregateOffersActivity = {
    _count: OffersActivityCountAggregateOutputType | null
    _avg: OffersActivityAvgAggregateOutputType | null
    _sum: OffersActivitySumAggregateOutputType | null
    _min: OffersActivityMinAggregateOutputType | null
    _max: OffersActivityMaxAggregateOutputType | null
  }

  export type OffersActivityAvgAggregateOutputType = {
    price: number | null
  }

  export type OffersActivitySumAggregateOutputType = {
    price: number | null
  }

  export type OffersActivityMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
  }

  export type OffersActivityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
  }

  export type OffersActivityCountAggregateOutputType = {
    id: number
    name: number
    price: number
    _all: number
  }


  export type OffersActivityAvgAggregateInputType = {
    price?: true
  }

  export type OffersActivitySumAggregateInputType = {
    price?: true
  }

  export type OffersActivityMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
  }

  export type OffersActivityMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
  }

  export type OffersActivityCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    _all?: true
  }

  export type OffersActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OffersActivity to aggregate.
     */
    where?: OffersActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OffersActivities to fetch.
     */
    orderBy?: OffersActivityOrderByWithRelationInput | OffersActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OffersActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OffersActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OffersActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OffersActivities
    **/
    _count?: true | OffersActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OffersActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OffersActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OffersActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OffersActivityMaxAggregateInputType
  }

  export type GetOffersActivityAggregateType<T extends OffersActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateOffersActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffersActivity[P]>
      : GetScalarType<T[P], AggregateOffersActivity[P]>
  }




  export type OffersActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OffersActivityWhereInput
    orderBy?: OffersActivityOrderByWithAggregationInput | OffersActivityOrderByWithAggregationInput[]
    by: OffersActivityScalarFieldEnum[] | OffersActivityScalarFieldEnum
    having?: OffersActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OffersActivityCountAggregateInputType | true
    _avg?: OffersActivityAvgAggregateInputType
    _sum?: OffersActivitySumAggregateInputType
    _min?: OffersActivityMinAggregateInputType
    _max?: OffersActivityMaxAggregateInputType
  }

  export type OffersActivityGroupByOutputType = {
    id: string
    name: string
    price: number
    _count: OffersActivityCountAggregateOutputType | null
    _avg: OffersActivityAvgAggregateOutputType | null
    _sum: OffersActivitySumAggregateOutputType | null
    _min: OffersActivityMinAggregateOutputType | null
    _max: OffersActivityMaxAggregateOutputType | null
  }

  type GetOffersActivityGroupByPayload<T extends OffersActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OffersActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OffersActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OffersActivityGroupByOutputType[P]>
            : GetScalarType<T[P], OffersActivityGroupByOutputType[P]>
        }
      >
    >


  export type OffersActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    destinationID?: boolean | OffersActivity$destinationIDArgs<ExtArgs>
    _count?: boolean | OffersActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offersActivity"]>

  export type OffersActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
  }, ExtArgs["result"]["offersActivity"]>

  export type OffersActivitySelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
  }

  export type OffersActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinationID?: boolean | OffersActivity$destinationIDArgs<ExtArgs>
    _count?: boolean | OffersActivityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OffersActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OffersActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OffersActivity"
    objects: {
      destinationID: Prisma.$DestinationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
    }, ExtArgs["result"]["offersActivity"]>
    composites: {}
  }

  type OffersActivityGetPayload<S extends boolean | null | undefined | OffersActivityDefaultArgs> = $Result.GetResult<Prisma.$OffersActivityPayload, S>

  type OffersActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OffersActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OffersActivityCountAggregateInputType | true
    }

  export interface OffersActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OffersActivity'], meta: { name: 'OffersActivity' } }
    /**
     * Find zero or one OffersActivity that matches the filter.
     * @param {OffersActivityFindUniqueArgs} args - Arguments to find a OffersActivity
     * @example
     * // Get one OffersActivity
     * const offersActivity = await prisma.offersActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OffersActivityFindUniqueArgs>(args: SelectSubset<T, OffersActivityFindUniqueArgs<ExtArgs>>): Prisma__OffersActivityClient<$Result.GetResult<Prisma.$OffersActivityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OffersActivity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OffersActivityFindUniqueOrThrowArgs} args - Arguments to find a OffersActivity
     * @example
     * // Get one OffersActivity
     * const offersActivity = await prisma.offersActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OffersActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, OffersActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OffersActivityClient<$Result.GetResult<Prisma.$OffersActivityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OffersActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffersActivityFindFirstArgs} args - Arguments to find a OffersActivity
     * @example
     * // Get one OffersActivity
     * const offersActivity = await prisma.offersActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OffersActivityFindFirstArgs>(args?: SelectSubset<T, OffersActivityFindFirstArgs<ExtArgs>>): Prisma__OffersActivityClient<$Result.GetResult<Prisma.$OffersActivityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OffersActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffersActivityFindFirstOrThrowArgs} args - Arguments to find a OffersActivity
     * @example
     * // Get one OffersActivity
     * const offersActivity = await prisma.offersActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OffersActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, OffersActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__OffersActivityClient<$Result.GetResult<Prisma.$OffersActivityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OffersActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffersActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OffersActivities
     * const offersActivities = await prisma.offersActivity.findMany()
     * 
     * // Get first 10 OffersActivities
     * const offersActivities = await prisma.offersActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offersActivityWithIdOnly = await prisma.offersActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OffersActivityFindManyArgs>(args?: SelectSubset<T, OffersActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OffersActivityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OffersActivity.
     * @param {OffersActivityCreateArgs} args - Arguments to create a OffersActivity.
     * @example
     * // Create one OffersActivity
     * const OffersActivity = await prisma.offersActivity.create({
     *   data: {
     *     // ... data to create a OffersActivity
     *   }
     * })
     * 
     */
    create<T extends OffersActivityCreateArgs>(args: SelectSubset<T, OffersActivityCreateArgs<ExtArgs>>): Prisma__OffersActivityClient<$Result.GetResult<Prisma.$OffersActivityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OffersActivities.
     * @param {OffersActivityCreateManyArgs} args - Arguments to create many OffersActivities.
     * @example
     * // Create many OffersActivities
     * const offersActivity = await prisma.offersActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OffersActivityCreateManyArgs>(args?: SelectSubset<T, OffersActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OffersActivities and returns the data saved in the database.
     * @param {OffersActivityCreateManyAndReturnArgs} args - Arguments to create many OffersActivities.
     * @example
     * // Create many OffersActivities
     * const offersActivity = await prisma.offersActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OffersActivities and only return the `id`
     * const offersActivityWithIdOnly = await prisma.offersActivity.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OffersActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, OffersActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OffersActivityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OffersActivity.
     * @param {OffersActivityDeleteArgs} args - Arguments to delete one OffersActivity.
     * @example
     * // Delete one OffersActivity
     * const OffersActivity = await prisma.offersActivity.delete({
     *   where: {
     *     // ... filter to delete one OffersActivity
     *   }
     * })
     * 
     */
    delete<T extends OffersActivityDeleteArgs>(args: SelectSubset<T, OffersActivityDeleteArgs<ExtArgs>>): Prisma__OffersActivityClient<$Result.GetResult<Prisma.$OffersActivityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OffersActivity.
     * @param {OffersActivityUpdateArgs} args - Arguments to update one OffersActivity.
     * @example
     * // Update one OffersActivity
     * const offersActivity = await prisma.offersActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OffersActivityUpdateArgs>(args: SelectSubset<T, OffersActivityUpdateArgs<ExtArgs>>): Prisma__OffersActivityClient<$Result.GetResult<Prisma.$OffersActivityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OffersActivities.
     * @param {OffersActivityDeleteManyArgs} args - Arguments to filter OffersActivities to delete.
     * @example
     * // Delete a few OffersActivities
     * const { count } = await prisma.offersActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OffersActivityDeleteManyArgs>(args?: SelectSubset<T, OffersActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OffersActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffersActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OffersActivities
     * const offersActivity = await prisma.offersActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OffersActivityUpdateManyArgs>(args: SelectSubset<T, OffersActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OffersActivity.
     * @param {OffersActivityUpsertArgs} args - Arguments to update or create a OffersActivity.
     * @example
     * // Update or create a OffersActivity
     * const offersActivity = await prisma.offersActivity.upsert({
     *   create: {
     *     // ... data to create a OffersActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OffersActivity we want to update
     *   }
     * })
     */
    upsert<T extends OffersActivityUpsertArgs>(args: SelectSubset<T, OffersActivityUpsertArgs<ExtArgs>>): Prisma__OffersActivityClient<$Result.GetResult<Prisma.$OffersActivityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OffersActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffersActivityCountArgs} args - Arguments to filter OffersActivities to count.
     * @example
     * // Count the number of OffersActivities
     * const count = await prisma.offersActivity.count({
     *   where: {
     *     // ... the filter for the OffersActivities we want to count
     *   }
     * })
    **/
    count<T extends OffersActivityCountArgs>(
      args?: Subset<T, OffersActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OffersActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OffersActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffersActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OffersActivityAggregateArgs>(args: Subset<T, OffersActivityAggregateArgs>): Prisma.PrismaPromise<GetOffersActivityAggregateType<T>>

    /**
     * Group by OffersActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffersActivityGroupByArgs} args - Group by arguments.
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
      T extends OffersActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OffersActivityGroupByArgs['orderBy'] }
        : { orderBy?: OffersActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OffersActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOffersActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OffersActivity model
   */
  readonly fields: OffersActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OffersActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OffersActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destinationID<T extends OffersActivity$destinationIDArgs<ExtArgs> = {}>(args?: Subset<T, OffersActivity$destinationIDArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the OffersActivity model
   */ 
  interface OffersActivityFieldRefs {
    readonly id: FieldRef<"OffersActivity", 'String'>
    readonly name: FieldRef<"OffersActivity", 'String'>
    readonly price: FieldRef<"OffersActivity", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * OffersActivity findUnique
   */
  export type OffersActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffersActivity
     */
    select?: OffersActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffersActivityInclude<ExtArgs> | null
    /**
     * Filter, which OffersActivity to fetch.
     */
    where: OffersActivityWhereUniqueInput
  }

  /**
   * OffersActivity findUniqueOrThrow
   */
  export type OffersActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffersActivity
     */
    select?: OffersActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffersActivityInclude<ExtArgs> | null
    /**
     * Filter, which OffersActivity to fetch.
     */
    where: OffersActivityWhereUniqueInput
  }

  /**
   * OffersActivity findFirst
   */
  export type OffersActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffersActivity
     */
    select?: OffersActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffersActivityInclude<ExtArgs> | null
    /**
     * Filter, which OffersActivity to fetch.
     */
    where?: OffersActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OffersActivities to fetch.
     */
    orderBy?: OffersActivityOrderByWithRelationInput | OffersActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OffersActivities.
     */
    cursor?: OffersActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OffersActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OffersActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OffersActivities.
     */
    distinct?: OffersActivityScalarFieldEnum | OffersActivityScalarFieldEnum[]
  }

  /**
   * OffersActivity findFirstOrThrow
   */
  export type OffersActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffersActivity
     */
    select?: OffersActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffersActivityInclude<ExtArgs> | null
    /**
     * Filter, which OffersActivity to fetch.
     */
    where?: OffersActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OffersActivities to fetch.
     */
    orderBy?: OffersActivityOrderByWithRelationInput | OffersActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OffersActivities.
     */
    cursor?: OffersActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OffersActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OffersActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OffersActivities.
     */
    distinct?: OffersActivityScalarFieldEnum | OffersActivityScalarFieldEnum[]
  }

  /**
   * OffersActivity findMany
   */
  export type OffersActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffersActivity
     */
    select?: OffersActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffersActivityInclude<ExtArgs> | null
    /**
     * Filter, which OffersActivities to fetch.
     */
    where?: OffersActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OffersActivities to fetch.
     */
    orderBy?: OffersActivityOrderByWithRelationInput | OffersActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OffersActivities.
     */
    cursor?: OffersActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OffersActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OffersActivities.
     */
    skip?: number
    distinct?: OffersActivityScalarFieldEnum | OffersActivityScalarFieldEnum[]
  }

  /**
   * OffersActivity create
   */
  export type OffersActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffersActivity
     */
    select?: OffersActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffersActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a OffersActivity.
     */
    data: XOR<OffersActivityCreateInput, OffersActivityUncheckedCreateInput>
  }

  /**
   * OffersActivity createMany
   */
  export type OffersActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OffersActivities.
     */
    data: OffersActivityCreateManyInput | OffersActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OffersActivity createManyAndReturn
   */
  export type OffersActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffersActivity
     */
    select?: OffersActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OffersActivities.
     */
    data: OffersActivityCreateManyInput | OffersActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OffersActivity update
   */
  export type OffersActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffersActivity
     */
    select?: OffersActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffersActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a OffersActivity.
     */
    data: XOR<OffersActivityUpdateInput, OffersActivityUncheckedUpdateInput>
    /**
     * Choose, which OffersActivity to update.
     */
    where: OffersActivityWhereUniqueInput
  }

  /**
   * OffersActivity updateMany
   */
  export type OffersActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OffersActivities.
     */
    data: XOR<OffersActivityUpdateManyMutationInput, OffersActivityUncheckedUpdateManyInput>
    /**
     * Filter which OffersActivities to update
     */
    where?: OffersActivityWhereInput
  }

  /**
   * OffersActivity upsert
   */
  export type OffersActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffersActivity
     */
    select?: OffersActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffersActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the OffersActivity to update in case it exists.
     */
    where: OffersActivityWhereUniqueInput
    /**
     * In case the OffersActivity found by the `where` argument doesn't exist, create a new OffersActivity with this data.
     */
    create: XOR<OffersActivityCreateInput, OffersActivityUncheckedCreateInput>
    /**
     * In case the OffersActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OffersActivityUpdateInput, OffersActivityUncheckedUpdateInput>
  }

  /**
   * OffersActivity delete
   */
  export type OffersActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffersActivity
     */
    select?: OffersActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffersActivityInclude<ExtArgs> | null
    /**
     * Filter which OffersActivity to delete.
     */
    where: OffersActivityWhereUniqueInput
  }

  /**
   * OffersActivity deleteMany
   */
  export type OffersActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OffersActivities to delete
     */
    where?: OffersActivityWhereInput
  }

  /**
   * OffersActivity.destinationID
   */
  export type OffersActivity$destinationIDArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    cursor?: DestinationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * OffersActivity without action
   */
  export type OffersActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffersActivity
     */
    select?: OffersActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffersActivityInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    provider: 'provider',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const DestinationScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DestinationScalarFieldEnum = (typeof DestinationScalarFieldEnum)[keyof typeof DestinationScalarFieldEnum]


  export const OffersActivityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price'
  };

  export type OffersActivityScalarFieldEnum = (typeof OffersActivityScalarFieldEnum)[keyof typeof OffersActivityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    provider?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    trip?: TripListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrder
    provider?: SortOrderInput | SortOrder
    role?: SortOrder
    trip?: TripOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    provider?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    trip?: TripListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrder
    provider?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    provider?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: StringFilter<"Trip"> | string
    name?: StringFilter<"Trip"> | string
    startDate?: DateTimeFilter<"Trip"> | Date | string
    endDate?: DateTimeFilter<"Trip"> | Date | string
    userID?: UserListRelationFilter
    destination?: DestinationListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userID?: UserOrderByRelationAggregateInput
    destination?: DestinationOrderByRelationAggregateInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    name?: StringFilter<"Trip"> | string
    startDate?: DateTimeFilter<"Trip"> | Date | string
    endDate?: DateTimeFilter<"Trip"> | Date | string
    userID?: UserListRelationFilter
    destination?: DestinationListRelationFilter
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trip"> | string
    name?: StringWithAggregatesFilter<"Trip"> | string
    startDate?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
  }

  export type DestinationWhereInput = {
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    id?: StringFilter<"Destination"> | string
    name?: StringFilter<"Destination"> | string
    tripID?: TripListRelationFilter
    offers?: OffersActivityListRelationFilter
  }

  export type DestinationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tripID?: TripOrderByRelationAggregateInput
    offers?: OffersActivityOrderByRelationAggregateInput
  }

  export type DestinationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    name?: StringFilter<"Destination"> | string
    tripID?: TripListRelationFilter
    offers?: OffersActivityListRelationFilter
  }, "id">

  export type DestinationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DestinationCountOrderByAggregateInput
    _max?: DestinationMaxOrderByAggregateInput
    _min?: DestinationMinOrderByAggregateInput
  }

  export type DestinationScalarWhereWithAggregatesInput = {
    AND?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    OR?: DestinationScalarWhereWithAggregatesInput[]
    NOT?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Destination"> | string
    name?: StringWithAggregatesFilter<"Destination"> | string
  }

  export type OffersActivityWhereInput = {
    AND?: OffersActivityWhereInput | OffersActivityWhereInput[]
    OR?: OffersActivityWhereInput[]
    NOT?: OffersActivityWhereInput | OffersActivityWhereInput[]
    id?: StringFilter<"OffersActivity"> | string
    name?: StringFilter<"OffersActivity"> | string
    price?: FloatFilter<"OffersActivity"> | number
    destinationID?: DestinationListRelationFilter
  }

  export type OffersActivityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    destinationID?: DestinationOrderByRelationAggregateInput
  }

  export type OffersActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OffersActivityWhereInput | OffersActivityWhereInput[]
    OR?: OffersActivityWhereInput[]
    NOT?: OffersActivityWhereInput | OffersActivityWhereInput[]
    name?: StringFilter<"OffersActivity"> | string
    price?: FloatFilter<"OffersActivity"> | number
    destinationID?: DestinationListRelationFilter
  }, "id">

  export type OffersActivityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    _count?: OffersActivityCountOrderByAggregateInput
    _avg?: OffersActivityAvgOrderByAggregateInput
    _max?: OffersActivityMaxOrderByAggregateInput
    _min?: OffersActivityMinOrderByAggregateInput
    _sum?: OffersActivitySumOrderByAggregateInput
  }

  export type OffersActivityScalarWhereWithAggregatesInput = {
    AND?: OffersActivityScalarWhereWithAggregatesInput | OffersActivityScalarWhereWithAggregatesInput[]
    OR?: OffersActivityScalarWhereWithAggregatesInput[]
    NOT?: OffersActivityScalarWhereWithAggregatesInput | OffersActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OffersActivity"> | string
    name?: StringWithAggregatesFilter<"OffersActivity"> | string
    price?: FloatWithAggregatesFilter<"OffersActivity"> | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    provider?: string | null
    role?: string
    trip?: TripCreateNestedManyWithoutUserIDInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    provider?: string | null
    role?: string
    trip?: TripUncheckedCreateNestedManyWithoutUserIDInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    trip?: TripUpdateManyWithoutUserIDNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    trip?: TripUncheckedUpdateManyWithoutUserIDNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    provider?: string | null
    role?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type TripCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    userID?: UserCreateNestedManyWithoutTripInput
    destination?: DestinationCreateNestedManyWithoutTripIDInput
  }

  export type TripUncheckedCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    userID?: UserUncheckedCreateNestedManyWithoutTripInput
    destination?: DestinationUncheckedCreateNestedManyWithoutTripIDInput
  }

  export type TripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userID?: UserUpdateManyWithoutTripNestedInput
    destination?: DestinationUpdateManyWithoutTripIDNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userID?: UserUncheckedUpdateManyWithoutTripNestedInput
    destination?: DestinationUncheckedUpdateManyWithoutTripIDNestedInput
  }

  export type TripCreateManyInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
  }

  export type TripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationCreateInput = {
    id?: string
    name: string
    tripID?: TripCreateNestedManyWithoutDestinationInput
    offers?: OffersActivityCreateNestedManyWithoutDestinationIDInput
  }

  export type DestinationUncheckedCreateInput = {
    id?: string
    name: string
    tripID?: TripUncheckedCreateNestedManyWithoutDestinationInput
    offers?: OffersActivityUncheckedCreateNestedManyWithoutDestinationIDInput
  }

  export type DestinationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tripID?: TripUpdateManyWithoutDestinationNestedInput
    offers?: OffersActivityUpdateManyWithoutDestinationIDNestedInput
  }

  export type DestinationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tripID?: TripUncheckedUpdateManyWithoutDestinationNestedInput
    offers?: OffersActivityUncheckedUpdateManyWithoutDestinationIDNestedInput
  }

  export type DestinationCreateManyInput = {
    id?: string
    name: string
  }

  export type DestinationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OffersActivityCreateInput = {
    id?: string
    name: string
    price: number
    destinationID?: DestinationCreateNestedManyWithoutOffersInput
  }

  export type OffersActivityUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    destinationID?: DestinationUncheckedCreateNestedManyWithoutOffersInput
  }

  export type OffersActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    destinationID?: DestinationUpdateManyWithoutOffersNestedInput
  }

  export type OffersActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    destinationID?: DestinationUncheckedUpdateManyWithoutOffersNestedInput
  }

  export type OffersActivityCreateManyInput = {
    id?: string
    name: string
    price: number
  }

  export type OffersActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OffersActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
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

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    role?: SortOrder
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

  export type DestinationListRelationFilter = {
    every?: DestinationWhereInput
    some?: DestinationWhereInput
    none?: DestinationWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
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

  export type OffersActivityListRelationFilter = {
    every?: OffersActivityWhereInput
    some?: OffersActivityWhereInput
    none?: OffersActivityWhereInput
  }

  export type OffersActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DestinationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DestinationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OffersActivityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type OffersActivityAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type OffersActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type OffersActivityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type OffersActivitySumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TripCreateNestedManyWithoutUserIDInput = {
    create?: XOR<TripCreateWithoutUserIDInput, TripUncheckedCreateWithoutUserIDInput> | TripCreateWithoutUserIDInput[] | TripUncheckedCreateWithoutUserIDInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserIDInput | TripCreateOrConnectWithoutUserIDInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutUserIDInput = {
    create?: XOR<TripCreateWithoutUserIDInput, TripUncheckedCreateWithoutUserIDInput> | TripCreateWithoutUserIDInput[] | TripUncheckedCreateWithoutUserIDInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserIDInput | TripCreateOrConnectWithoutUserIDInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TripUpdateManyWithoutUserIDNestedInput = {
    create?: XOR<TripCreateWithoutUserIDInput, TripUncheckedCreateWithoutUserIDInput> | TripCreateWithoutUserIDInput[] | TripUncheckedCreateWithoutUserIDInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserIDInput | TripCreateOrConnectWithoutUserIDInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutUserIDInput | TripUpsertWithWhereUniqueWithoutUserIDInput[]
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutUserIDInput | TripUpdateWithWhereUniqueWithoutUserIDInput[]
    updateMany?: TripUpdateManyWithWhereWithoutUserIDInput | TripUpdateManyWithWhereWithoutUserIDInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutUserIDNestedInput = {
    create?: XOR<TripCreateWithoutUserIDInput, TripUncheckedCreateWithoutUserIDInput> | TripCreateWithoutUserIDInput[] | TripUncheckedCreateWithoutUserIDInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserIDInput | TripCreateOrConnectWithoutUserIDInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutUserIDInput | TripUpsertWithWhereUniqueWithoutUserIDInput[]
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutUserIDInput | TripUpdateWithWhereUniqueWithoutUserIDInput[]
    updateMany?: TripUpdateManyWithWhereWithoutUserIDInput | TripUpdateManyWithWhereWithoutUserIDInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutTripInput = {
    create?: XOR<UserCreateWithoutTripInput, UserUncheckedCreateWithoutTripInput> | UserCreateWithoutTripInput[] | UserUncheckedCreateWithoutTripInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTripInput | UserCreateOrConnectWithoutTripInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DestinationCreateNestedManyWithoutTripIDInput = {
    create?: XOR<DestinationCreateWithoutTripIDInput, DestinationUncheckedCreateWithoutTripIDInput> | DestinationCreateWithoutTripIDInput[] | DestinationUncheckedCreateWithoutTripIDInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutTripIDInput | DestinationCreateOrConnectWithoutTripIDInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<UserCreateWithoutTripInput, UserUncheckedCreateWithoutTripInput> | UserCreateWithoutTripInput[] | UserUncheckedCreateWithoutTripInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTripInput | UserCreateOrConnectWithoutTripInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DestinationUncheckedCreateNestedManyWithoutTripIDInput = {
    create?: XOR<DestinationCreateWithoutTripIDInput, DestinationUncheckedCreateWithoutTripIDInput> | DestinationCreateWithoutTripIDInput[] | DestinationUncheckedCreateWithoutTripIDInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutTripIDInput | DestinationCreateOrConnectWithoutTripIDInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutTripNestedInput = {
    create?: XOR<UserCreateWithoutTripInput, UserUncheckedCreateWithoutTripInput> | UserCreateWithoutTripInput[] | UserUncheckedCreateWithoutTripInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTripInput | UserCreateOrConnectWithoutTripInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTripInput | UserUpsertWithWhereUniqueWithoutTripInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTripInput | UserUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTripInput | UserUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DestinationUpdateManyWithoutTripIDNestedInput = {
    create?: XOR<DestinationCreateWithoutTripIDInput, DestinationUncheckedCreateWithoutTripIDInput> | DestinationCreateWithoutTripIDInput[] | DestinationUncheckedCreateWithoutTripIDInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutTripIDInput | DestinationCreateOrConnectWithoutTripIDInput[]
    upsert?: DestinationUpsertWithWhereUniqueWithoutTripIDInput | DestinationUpsertWithWhereUniqueWithoutTripIDInput[]
    set?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    disconnect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    delete?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    update?: DestinationUpdateWithWhereUniqueWithoutTripIDInput | DestinationUpdateWithWhereUniqueWithoutTripIDInput[]
    updateMany?: DestinationUpdateManyWithWhereWithoutTripIDInput | DestinationUpdateManyWithWhereWithoutTripIDInput[]
    deleteMany?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<UserCreateWithoutTripInput, UserUncheckedCreateWithoutTripInput> | UserCreateWithoutTripInput[] | UserUncheckedCreateWithoutTripInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTripInput | UserCreateOrConnectWithoutTripInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTripInput | UserUpsertWithWhereUniqueWithoutTripInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTripInput | UserUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTripInput | UserUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DestinationUncheckedUpdateManyWithoutTripIDNestedInput = {
    create?: XOR<DestinationCreateWithoutTripIDInput, DestinationUncheckedCreateWithoutTripIDInput> | DestinationCreateWithoutTripIDInput[] | DestinationUncheckedCreateWithoutTripIDInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutTripIDInput | DestinationCreateOrConnectWithoutTripIDInput[]
    upsert?: DestinationUpsertWithWhereUniqueWithoutTripIDInput | DestinationUpsertWithWhereUniqueWithoutTripIDInput[]
    set?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    disconnect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    delete?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    update?: DestinationUpdateWithWhereUniqueWithoutTripIDInput | DestinationUpdateWithWhereUniqueWithoutTripIDInput[]
    updateMany?: DestinationUpdateManyWithWhereWithoutTripIDInput | DestinationUpdateManyWithWhereWithoutTripIDInput[]
    deleteMany?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
  }

  export type TripCreateNestedManyWithoutDestinationInput = {
    create?: XOR<TripCreateWithoutDestinationInput, TripUncheckedCreateWithoutDestinationInput> | TripCreateWithoutDestinationInput[] | TripUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDestinationInput | TripCreateOrConnectWithoutDestinationInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type OffersActivityCreateNestedManyWithoutDestinationIDInput = {
    create?: XOR<OffersActivityCreateWithoutDestinationIDInput, OffersActivityUncheckedCreateWithoutDestinationIDInput> | OffersActivityCreateWithoutDestinationIDInput[] | OffersActivityUncheckedCreateWithoutDestinationIDInput[]
    connectOrCreate?: OffersActivityCreateOrConnectWithoutDestinationIDInput | OffersActivityCreateOrConnectWithoutDestinationIDInput[]
    connect?: OffersActivityWhereUniqueInput | OffersActivityWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<TripCreateWithoutDestinationInput, TripUncheckedCreateWithoutDestinationInput> | TripCreateWithoutDestinationInput[] | TripUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDestinationInput | TripCreateOrConnectWithoutDestinationInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type OffersActivityUncheckedCreateNestedManyWithoutDestinationIDInput = {
    create?: XOR<OffersActivityCreateWithoutDestinationIDInput, OffersActivityUncheckedCreateWithoutDestinationIDInput> | OffersActivityCreateWithoutDestinationIDInput[] | OffersActivityUncheckedCreateWithoutDestinationIDInput[]
    connectOrCreate?: OffersActivityCreateOrConnectWithoutDestinationIDInput | OffersActivityCreateOrConnectWithoutDestinationIDInput[]
    connect?: OffersActivityWhereUniqueInput | OffersActivityWhereUniqueInput[]
  }

  export type TripUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<TripCreateWithoutDestinationInput, TripUncheckedCreateWithoutDestinationInput> | TripCreateWithoutDestinationInput[] | TripUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDestinationInput | TripCreateOrConnectWithoutDestinationInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutDestinationInput | TripUpsertWithWhereUniqueWithoutDestinationInput[]
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutDestinationInput | TripUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: TripUpdateManyWithWhereWithoutDestinationInput | TripUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type OffersActivityUpdateManyWithoutDestinationIDNestedInput = {
    create?: XOR<OffersActivityCreateWithoutDestinationIDInput, OffersActivityUncheckedCreateWithoutDestinationIDInput> | OffersActivityCreateWithoutDestinationIDInput[] | OffersActivityUncheckedCreateWithoutDestinationIDInput[]
    connectOrCreate?: OffersActivityCreateOrConnectWithoutDestinationIDInput | OffersActivityCreateOrConnectWithoutDestinationIDInput[]
    upsert?: OffersActivityUpsertWithWhereUniqueWithoutDestinationIDInput | OffersActivityUpsertWithWhereUniqueWithoutDestinationIDInput[]
    set?: OffersActivityWhereUniqueInput | OffersActivityWhereUniqueInput[]
    disconnect?: OffersActivityWhereUniqueInput | OffersActivityWhereUniqueInput[]
    delete?: OffersActivityWhereUniqueInput | OffersActivityWhereUniqueInput[]
    connect?: OffersActivityWhereUniqueInput | OffersActivityWhereUniqueInput[]
    update?: OffersActivityUpdateWithWhereUniqueWithoutDestinationIDInput | OffersActivityUpdateWithWhereUniqueWithoutDestinationIDInput[]
    updateMany?: OffersActivityUpdateManyWithWhereWithoutDestinationIDInput | OffersActivityUpdateManyWithWhereWithoutDestinationIDInput[]
    deleteMany?: OffersActivityScalarWhereInput | OffersActivityScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<TripCreateWithoutDestinationInput, TripUncheckedCreateWithoutDestinationInput> | TripCreateWithoutDestinationInput[] | TripUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDestinationInput | TripCreateOrConnectWithoutDestinationInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutDestinationInput | TripUpsertWithWhereUniqueWithoutDestinationInput[]
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutDestinationInput | TripUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: TripUpdateManyWithWhereWithoutDestinationInput | TripUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type OffersActivityUncheckedUpdateManyWithoutDestinationIDNestedInput = {
    create?: XOR<OffersActivityCreateWithoutDestinationIDInput, OffersActivityUncheckedCreateWithoutDestinationIDInput> | OffersActivityCreateWithoutDestinationIDInput[] | OffersActivityUncheckedCreateWithoutDestinationIDInput[]
    connectOrCreate?: OffersActivityCreateOrConnectWithoutDestinationIDInput | OffersActivityCreateOrConnectWithoutDestinationIDInput[]
    upsert?: OffersActivityUpsertWithWhereUniqueWithoutDestinationIDInput | OffersActivityUpsertWithWhereUniqueWithoutDestinationIDInput[]
    set?: OffersActivityWhereUniqueInput | OffersActivityWhereUniqueInput[]
    disconnect?: OffersActivityWhereUniqueInput | OffersActivityWhereUniqueInput[]
    delete?: OffersActivityWhereUniqueInput | OffersActivityWhereUniqueInput[]
    connect?: OffersActivityWhereUniqueInput | OffersActivityWhereUniqueInput[]
    update?: OffersActivityUpdateWithWhereUniqueWithoutDestinationIDInput | OffersActivityUpdateWithWhereUniqueWithoutDestinationIDInput[]
    updateMany?: OffersActivityUpdateManyWithWhereWithoutDestinationIDInput | OffersActivityUpdateManyWithWhereWithoutDestinationIDInput[]
    deleteMany?: OffersActivityScalarWhereInput | OffersActivityScalarWhereInput[]
  }

  export type DestinationCreateNestedManyWithoutOffersInput = {
    create?: XOR<DestinationCreateWithoutOffersInput, DestinationUncheckedCreateWithoutOffersInput> | DestinationCreateWithoutOffersInput[] | DestinationUncheckedCreateWithoutOffersInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutOffersInput | DestinationCreateOrConnectWithoutOffersInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
  }

  export type DestinationUncheckedCreateNestedManyWithoutOffersInput = {
    create?: XOR<DestinationCreateWithoutOffersInput, DestinationUncheckedCreateWithoutOffersInput> | DestinationCreateWithoutOffersInput[] | DestinationUncheckedCreateWithoutOffersInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutOffersInput | DestinationCreateOrConnectWithoutOffersInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DestinationUpdateManyWithoutOffersNestedInput = {
    create?: XOR<DestinationCreateWithoutOffersInput, DestinationUncheckedCreateWithoutOffersInput> | DestinationCreateWithoutOffersInput[] | DestinationUncheckedCreateWithoutOffersInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutOffersInput | DestinationCreateOrConnectWithoutOffersInput[]
    upsert?: DestinationUpsertWithWhereUniqueWithoutOffersInput | DestinationUpsertWithWhereUniqueWithoutOffersInput[]
    set?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    disconnect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    delete?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    update?: DestinationUpdateWithWhereUniqueWithoutOffersInput | DestinationUpdateWithWhereUniqueWithoutOffersInput[]
    updateMany?: DestinationUpdateManyWithWhereWithoutOffersInput | DestinationUpdateManyWithWhereWithoutOffersInput[]
    deleteMany?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
  }

  export type DestinationUncheckedUpdateManyWithoutOffersNestedInput = {
    create?: XOR<DestinationCreateWithoutOffersInput, DestinationUncheckedCreateWithoutOffersInput> | DestinationCreateWithoutOffersInput[] | DestinationUncheckedCreateWithoutOffersInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutOffersInput | DestinationCreateOrConnectWithoutOffersInput[]
    upsert?: DestinationUpsertWithWhereUniqueWithoutOffersInput | DestinationUpsertWithWhereUniqueWithoutOffersInput[]
    set?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    disconnect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    delete?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    update?: DestinationUpdateWithWhereUniqueWithoutOffersInput | DestinationUpdateWithWhereUniqueWithoutOffersInput[]
    updateMany?: DestinationUpdateManyWithWhereWithoutOffersInput | DestinationUpdateManyWithWhereWithoutOffersInput[]
    deleteMany?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TripCreateWithoutUserIDInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    destination?: DestinationCreateNestedManyWithoutTripIDInput
  }

  export type TripUncheckedCreateWithoutUserIDInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    destination?: DestinationUncheckedCreateNestedManyWithoutTripIDInput
  }

  export type TripCreateOrConnectWithoutUserIDInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutUserIDInput, TripUncheckedCreateWithoutUserIDInput>
  }

  export type TripUpsertWithWhereUniqueWithoutUserIDInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutUserIDInput, TripUncheckedUpdateWithoutUserIDInput>
    create: XOR<TripCreateWithoutUserIDInput, TripUncheckedCreateWithoutUserIDInput>
  }

  export type TripUpdateWithWhereUniqueWithoutUserIDInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutUserIDInput, TripUncheckedUpdateWithoutUserIDInput>
  }

  export type TripUpdateManyWithWhereWithoutUserIDInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutUserIDInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: StringFilter<"Trip"> | string
    name?: StringFilter<"Trip"> | string
    startDate?: DateTimeFilter<"Trip"> | Date | string
    endDate?: DateTimeFilter<"Trip"> | Date | string
  }

  export type UserCreateWithoutTripInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    provider?: string | null
    role?: string
  }

  export type UserUncheckedCreateWithoutTripInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    provider?: string | null
    role?: string
  }

  export type UserCreateOrConnectWithoutTripInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripInput, UserUncheckedCreateWithoutTripInput>
  }

  export type DestinationCreateWithoutTripIDInput = {
    id?: string
    name: string
    offers?: OffersActivityCreateNestedManyWithoutDestinationIDInput
  }

  export type DestinationUncheckedCreateWithoutTripIDInput = {
    id?: string
    name: string
    offers?: OffersActivityUncheckedCreateNestedManyWithoutDestinationIDInput
  }

  export type DestinationCreateOrConnectWithoutTripIDInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutTripIDInput, DestinationUncheckedCreateWithoutTripIDInput>
  }

  export type UserUpsertWithWhereUniqueWithoutTripInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTripInput, UserUncheckedUpdateWithoutTripInput>
    create: XOR<UserCreateWithoutTripInput, UserUncheckedCreateWithoutTripInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTripInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTripInput, UserUncheckedUpdateWithoutTripInput>
  }

  export type UserUpdateManyWithWhereWithoutTripInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTripInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    provider?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
  }

  export type DestinationUpsertWithWhereUniqueWithoutTripIDInput = {
    where: DestinationWhereUniqueInput
    update: XOR<DestinationUpdateWithoutTripIDInput, DestinationUncheckedUpdateWithoutTripIDInput>
    create: XOR<DestinationCreateWithoutTripIDInput, DestinationUncheckedCreateWithoutTripIDInput>
  }

  export type DestinationUpdateWithWhereUniqueWithoutTripIDInput = {
    where: DestinationWhereUniqueInput
    data: XOR<DestinationUpdateWithoutTripIDInput, DestinationUncheckedUpdateWithoutTripIDInput>
  }

  export type DestinationUpdateManyWithWhereWithoutTripIDInput = {
    where: DestinationScalarWhereInput
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyWithoutTripIDInput>
  }

  export type DestinationScalarWhereInput = {
    AND?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
    OR?: DestinationScalarWhereInput[]
    NOT?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
    id?: StringFilter<"Destination"> | string
    name?: StringFilter<"Destination"> | string
  }

  export type TripCreateWithoutDestinationInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    userID?: UserCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutDestinationInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    userID?: UserUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutDestinationInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutDestinationInput, TripUncheckedCreateWithoutDestinationInput>
  }

  export type OffersActivityCreateWithoutDestinationIDInput = {
    id?: string
    name: string
    price: number
  }

  export type OffersActivityUncheckedCreateWithoutDestinationIDInput = {
    id?: string
    name: string
    price: number
  }

  export type OffersActivityCreateOrConnectWithoutDestinationIDInput = {
    where: OffersActivityWhereUniqueInput
    create: XOR<OffersActivityCreateWithoutDestinationIDInput, OffersActivityUncheckedCreateWithoutDestinationIDInput>
  }

  export type TripUpsertWithWhereUniqueWithoutDestinationInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutDestinationInput, TripUncheckedUpdateWithoutDestinationInput>
    create: XOR<TripCreateWithoutDestinationInput, TripUncheckedCreateWithoutDestinationInput>
  }

  export type TripUpdateWithWhereUniqueWithoutDestinationInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutDestinationInput, TripUncheckedUpdateWithoutDestinationInput>
  }

  export type TripUpdateManyWithWhereWithoutDestinationInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutDestinationInput>
  }

  export type OffersActivityUpsertWithWhereUniqueWithoutDestinationIDInput = {
    where: OffersActivityWhereUniqueInput
    update: XOR<OffersActivityUpdateWithoutDestinationIDInput, OffersActivityUncheckedUpdateWithoutDestinationIDInput>
    create: XOR<OffersActivityCreateWithoutDestinationIDInput, OffersActivityUncheckedCreateWithoutDestinationIDInput>
  }

  export type OffersActivityUpdateWithWhereUniqueWithoutDestinationIDInput = {
    where: OffersActivityWhereUniqueInput
    data: XOR<OffersActivityUpdateWithoutDestinationIDInput, OffersActivityUncheckedUpdateWithoutDestinationIDInput>
  }

  export type OffersActivityUpdateManyWithWhereWithoutDestinationIDInput = {
    where: OffersActivityScalarWhereInput
    data: XOR<OffersActivityUpdateManyMutationInput, OffersActivityUncheckedUpdateManyWithoutDestinationIDInput>
  }

  export type OffersActivityScalarWhereInput = {
    AND?: OffersActivityScalarWhereInput | OffersActivityScalarWhereInput[]
    OR?: OffersActivityScalarWhereInput[]
    NOT?: OffersActivityScalarWhereInput | OffersActivityScalarWhereInput[]
    id?: StringFilter<"OffersActivity"> | string
    name?: StringFilter<"OffersActivity"> | string
    price?: FloatFilter<"OffersActivity"> | number
  }

  export type DestinationCreateWithoutOffersInput = {
    id?: string
    name: string
    tripID?: TripCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutOffersInput = {
    id?: string
    name: string
    tripID?: TripUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutOffersInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutOffersInput, DestinationUncheckedCreateWithoutOffersInput>
  }

  export type DestinationUpsertWithWhereUniqueWithoutOffersInput = {
    where: DestinationWhereUniqueInput
    update: XOR<DestinationUpdateWithoutOffersInput, DestinationUncheckedUpdateWithoutOffersInput>
    create: XOR<DestinationCreateWithoutOffersInput, DestinationUncheckedCreateWithoutOffersInput>
  }

  export type DestinationUpdateWithWhereUniqueWithoutOffersInput = {
    where: DestinationWhereUniqueInput
    data: XOR<DestinationUpdateWithoutOffersInput, DestinationUncheckedUpdateWithoutOffersInput>
  }

  export type DestinationUpdateManyWithWhereWithoutOffersInput = {
    where: DestinationScalarWhereInput
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyWithoutOffersInput>
  }

  export type TripUpdateWithoutUserIDInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: DestinationUpdateManyWithoutTripIDNestedInput
  }

  export type TripUncheckedUpdateWithoutUserIDInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: DestinationUncheckedUpdateManyWithoutTripIDNestedInput
  }

  export type TripUncheckedUpdateManyWithoutUserIDInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationUpdateWithoutTripIDInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    offers?: OffersActivityUpdateManyWithoutDestinationIDNestedInput
  }

  export type DestinationUncheckedUpdateWithoutTripIDInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    offers?: OffersActivityUncheckedUpdateManyWithoutDestinationIDNestedInput
  }

  export type DestinationUncheckedUpdateManyWithoutTripIDInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TripUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userID?: UserUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userID?: UserUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OffersActivityUpdateWithoutDestinationIDInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OffersActivityUncheckedUpdateWithoutDestinationIDInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OffersActivityUncheckedUpdateManyWithoutDestinationIDInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type DestinationUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tripID?: TripUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tripID?: TripUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateManyWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
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