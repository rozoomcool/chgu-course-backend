
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
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Chapter
 * 
 */
export type Chapter = $Result.DefaultSelection<Prisma.$ChapterPayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model LessonAttachment
 * 
 */
export type LessonAttachment = $Result.DefaultSelection<Prisma.$LessonAttachmentPayload>
/**
 * Model Test
 * 
 */
export type Test = $Result.DefaultSelection<Prisma.$TestPayload>
/**
 * Model TestStage
 * 
 */
export type TestStage = $Result.DefaultSelection<Prisma.$TestStagePayload>
/**
 * Model Option
 * 
 */
export type Option = $Result.DefaultSelection<Prisma.$OptionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LessonAttachmentType: {
  VIDEO: 'VIDEO',
  IMAGE: 'IMAGE',
  ARCHIVE: 'ARCHIVE',
  LINK: 'LINK'
};

export type LessonAttachmentType = (typeof LessonAttachmentType)[keyof typeof LessonAttachmentType]


export const Role: {
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TestStageType: {
  MANUAL: 'MANUAL',
  OPTIONAL: 'OPTIONAL'
};

export type TestStageType = (typeof TestStageType)[keyof typeof TestStageType]

}

export type LessonAttachmentType = $Enums.LessonAttachmentType

export const LessonAttachmentType: typeof $Enums.LessonAttachmentType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TestStageType = $Enums.TestStageType

export const TestStageType: typeof $Enums.TestStageType

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapter`: Exposes CRUD operations for the **Chapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapter.findMany()
    * ```
    */
  get chapter(): Prisma.ChapterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lessonAttachment`: Exposes CRUD operations for the **LessonAttachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonAttachments
    * const lessonAttachments = await prisma.lessonAttachment.findMany()
    * ```
    */
  get lessonAttachment(): Prisma.LessonAttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testStage`: Exposes CRUD operations for the **TestStage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestStages
    * const testStages = await prisma.testStage.findMany()
    * ```
    */
  get testStage(): Prisma.TestStageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.option`: Exposes CRUD operations for the **Option** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Options
    * const options = await prisma.option.findMany()
    * ```
    */
  get option(): Prisma.OptionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Profile: 'Profile',
    Course: 'Course',
    Chapter: 'Chapter',
    Lesson: 'Lesson',
    LessonAttachment: 'LessonAttachment',
    Test: 'Test',
    TestStage: 'TestStage',
    Option: 'Option'
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
      modelProps: "user" | "profile" | "course" | "chapter" | "lesson" | "lessonAttachment" | "test" | "testStage" | "option"
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
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Chapter: {
        payload: Prisma.$ChapterPayload<ExtArgs>
        fields: Prisma.ChapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChapterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChapterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findFirst: {
            args: Prisma.ChapterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChapterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findMany: {
            args: Prisma.ChapterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          create: {
            args: Prisma.ChapterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          createMany: {
            args: Prisma.ChapterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChapterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          delete: {
            args: Prisma.ChapterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          update: {
            args: Prisma.ChapterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          deleteMany: {
            args: Prisma.ChapterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChapterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChapterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          upsert: {
            args: Prisma.ChapterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          aggregate: {
            args: Prisma.ChapterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapter>
          }
          groupBy: {
            args: Prisma.ChapterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChapterCountArgs<ExtArgs>
            result: $Utils.Optional<ChapterCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      LessonAttachment: {
        payload: Prisma.$LessonAttachmentPayload<ExtArgs>
        fields: Prisma.LessonAttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonAttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonAttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttachmentPayload>
          }
          findFirst: {
            args: Prisma.LessonAttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonAttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttachmentPayload>
          }
          findMany: {
            args: Prisma.LessonAttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttachmentPayload>[]
          }
          create: {
            args: Prisma.LessonAttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttachmentPayload>
          }
          createMany: {
            args: Prisma.LessonAttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonAttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttachmentPayload>[]
          }
          delete: {
            args: Prisma.LessonAttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttachmentPayload>
          }
          update: {
            args: Prisma.LessonAttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttachmentPayload>
          }
          deleteMany: {
            args: Prisma.LessonAttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonAttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonAttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttachmentPayload>[]
          }
          upsert: {
            args: Prisma.LessonAttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttachmentPayload>
          }
          aggregate: {
            args: Prisma.LessonAttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessonAttachment>
          }
          groupBy: {
            args: Prisma.LessonAttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonAttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonAttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<LessonAttachmentCountAggregateOutputType> | number
          }
        }
      }
      Test: {
        payload: Prisma.$TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          createMany: {
            args: Prisma.TestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      TestStage: {
        payload: Prisma.$TestStagePayload<ExtArgs>
        fields: Prisma.TestStageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestStageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestStagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestStageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestStagePayload>
          }
          findFirst: {
            args: Prisma.TestStageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestStagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestStageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestStagePayload>
          }
          findMany: {
            args: Prisma.TestStageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestStagePayload>[]
          }
          create: {
            args: Prisma.TestStageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestStagePayload>
          }
          createMany: {
            args: Prisma.TestStageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestStageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestStagePayload>[]
          }
          delete: {
            args: Prisma.TestStageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestStagePayload>
          }
          update: {
            args: Prisma.TestStageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestStagePayload>
          }
          deleteMany: {
            args: Prisma.TestStageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestStageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestStageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestStagePayload>[]
          }
          upsert: {
            args: Prisma.TestStageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestStagePayload>
          }
          aggregate: {
            args: Prisma.TestStageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestStage>
          }
          groupBy: {
            args: Prisma.TestStageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestStageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestStageCountArgs<ExtArgs>
            result: $Utils.Optional<TestStageCountAggregateOutputType> | number
          }
        }
      }
      Option: {
        payload: Prisma.$OptionPayload<ExtArgs>
        fields: Prisma.OptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findFirst: {
            args: Prisma.OptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findMany: {
            args: Prisma.OptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          create: {
            args: Prisma.OptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          createMany: {
            args: Prisma.OptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          delete: {
            args: Prisma.OptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          update: {
            args: Prisma.OptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          deleteMany: {
            args: Prisma.OptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          upsert: {
            args: Prisma.OptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          aggregate: {
            args: Prisma.OptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOption>
          }
          groupBy: {
            args: Prisma.OptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionCountArgs<ExtArgs>
            result: $Utils.Optional<OptionCountAggregateOutputType> | number
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
    user?: UserOmit
    profile?: ProfileOmit
    course?: CourseOmit
    chapter?: ChapterOmit
    lesson?: LessonOmit
    lessonAttachment?: LessonAttachmentOmit
    test?: TestOmit
    testStage?: TestStageOmit
    option?: OptionOmit
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
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    chapters: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | CourseCountOutputTypeCountChaptersArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
  }


  /**
   * Count Type ChapterCountOutputType
   */

  export type ChapterCountOutputType = {
    lessons: number
  }

  export type ChapterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | ChapterCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterCountOutputType
     */
    select?: ChapterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }


  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    attachments: number
  }

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | LessonCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonAttachmentWhereInput
  }


  /**
   * Count Type TestCountOutputType
   */

  export type TestCountOutputType = {
    testStages: number
  }

  export type TestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testStages?: boolean | TestCountOutputTypeCountTestStagesArgs
  }

  // Custom InputTypes
  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCountOutputType
     */
    select?: TestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountTestStagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestStageWhereInput
  }


  /**
   * Count Type TestStageCountOutputType
   */

  export type TestStageCountOutputType = {
    options: number
  }

  export type TestStageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | TestStageCountOutputTypeCountOptionsArgs
  }

  // Custom InputTypes
  /**
   * TestStageCountOutputType without action
   */
  export type TestStageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestStageCountOutputType
     */
    select?: TestStageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestStageCountOutputType without action
   */
  export type TestStageCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    role?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.Role
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
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
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
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    birthday: Date | null
    avatarUrl: string | null
    userId: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    birthday: Date | null
    avatarUrl: string | null
    userId: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    fullname: number
    birthday: number
    avatarUrl: number
    userId: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    fullname?: true
    birthday?: true
    avatarUrl?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    fullname?: true
    birthday?: true
    avatarUrl?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    fullname?: true
    birthday?: true
    avatarUrl?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    fullname: string | null
    birthday: Date | null
    avatarUrl: string | null
    userId: number
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    birthday?: boolean
    avatarUrl?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    birthday?: boolean
    avatarUrl?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    birthday?: boolean
    avatarUrl?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    fullname?: boolean
    birthday?: boolean
    avatarUrl?: boolean
    userId?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "birthday" | "avatarUrl" | "userId", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string | null
      birthday: Date | null
      avatarUrl: string | null
      userId: number
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly fullname: FieldRef<"Profile", 'String'>
    readonly birthday: FieldRef<"Profile", 'DateTime'>
    readonly avatarUrl: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    imageUrl: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    imageUrl: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageUrl: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    title: string
    description: string
    imageUrl: string | null
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    chapters?: boolean | Course$chaptersArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "imageUrl", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | Course$chaptersArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      chapters: Prisma.$ChapterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      imageUrl: string | null
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapters<T extends Course$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, Course$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly imageUrl: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.chapters
   */
  export type Course$chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    cursor?: ChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Chapter
   */

  export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  export type ChapterAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type ChapterSumAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type ChapterMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    courseId: number | null
  }

  export type ChapterMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    courseId: number | null
  }

  export type ChapterCountAggregateOutputType = {
    id: number
    title: number
    description: number
    courseId: number
    _all: number
  }


  export type ChapterAvgAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type ChapterSumAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type ChapterMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    courseId?: true
  }

  export type ChapterMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    courseId?: true
  }

  export type ChapterCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    courseId?: true
    _all?: true
  }

  export type ChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapter to aggregate.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapters
    **/
    _count?: true | ChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChapterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChapterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType
  }

  export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapter[P]>
      : GetScalarType<T[P], AggregateChapter[P]>
  }




  export type ChapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithAggregationInput | ChapterOrderByWithAggregationInput[]
    by: ChapterScalarFieldEnum[] | ChapterScalarFieldEnum
    having?: ChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterCountAggregateInputType | true
    _avg?: ChapterAvgAggregateInputType
    _sum?: ChapterSumAggregateInputType
    _min?: ChapterMinAggregateInputType
    _max?: ChapterMaxAggregateInputType
  }

  export type ChapterGroupByOutputType = {
    id: number
    title: string
    description: string | null
    courseId: number
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterGroupByOutputType[P]>
        }
      >
    >


  export type ChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    lessons?: boolean | Chapter$lessonsArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    courseId?: boolean
  }

  export type ChapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "courseId", ExtArgs["result"]["chapter"]>
  export type ChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    lessons?: boolean | Chapter$lessonsArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChapterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type ChapterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $ChapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chapter"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      lessons: Prisma.$LessonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      courseId: number
    }, ExtArgs["result"]["chapter"]>
    composites: {}
  }

  type ChapterGetPayload<S extends boolean | null | undefined | ChapterDefaultArgs> = $Result.GetResult<Prisma.$ChapterPayload, S>

  type ChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapterCountAggregateInputType | true
    }

  export interface ChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chapter'], meta: { name: 'Chapter' } }
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {ChapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterFindUniqueArgs>(args: SelectSubset<T, ChapterFindUniqueArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterFindUniqueOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterFindUniqueOrThrowArgs>(args: SelectSubset<T, ChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterFindFirstArgs>(args?: SelectSubset<T, ChapterFindFirstArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterFindFirstOrThrowArgs>(args?: SelectSubset<T, ChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChapterFindManyArgs>(args?: SelectSubset<T, ChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapter.
     * @param {ChapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     * 
     */
    create<T extends ChapterCreateArgs>(args: SelectSubset<T, ChapterCreateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapters.
     * @param {ChapterCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChapterCreateManyArgs>(args?: SelectSubset<T, ChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chapters and returns the data saved in the database.
     * @param {ChapterCreateManyAndReturnArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChapterCreateManyAndReturnArgs>(args?: SelectSubset<T, ChapterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chapter.
     * @param {ChapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     * 
     */
    delete<T extends ChapterDeleteArgs>(args: SelectSubset<T, ChapterDeleteArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapter.
     * @param {ChapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChapterUpdateArgs>(args: SelectSubset<T, ChapterUpdateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapters.
     * @param {ChapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChapterDeleteManyArgs>(args?: SelectSubset<T, ChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChapterUpdateManyArgs>(args: SelectSubset<T, ChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters and returns the data updated in the database.
     * @param {ChapterUpdateManyAndReturnArgs} args - Arguments to update many Chapters.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChapterUpdateManyAndReturnArgs>(args: SelectSubset<T, ChapterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chapter.
     * @param {ChapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
     */
    upsert<T extends ChapterUpsertArgs>(args: SelectSubset<T, ChapterUpsertArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChapterCountArgs>(
      args?: Subset<T, ChapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChapterAggregateArgs>(args: Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>

    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterGroupByArgs} args - Group by arguments.
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
      T extends ChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterGroupByArgs['orderBy'] }
        : { orderBy?: ChapterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chapter model
   */
  readonly fields: ChapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lessons<T extends Chapter$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chapter model
   */
  interface ChapterFieldRefs {
    readonly id: FieldRef<"Chapter", 'Int'>
    readonly title: FieldRef<"Chapter", 'String'>
    readonly description: FieldRef<"Chapter", 'String'>
    readonly courseId: FieldRef<"Chapter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Chapter findUnique
   */
  export type ChapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findUniqueOrThrow
   */
  export type ChapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findFirst
   */
  export type ChapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findFirstOrThrow
   */
  export type ChapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findMany
   */
  export type ChapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter create
   */
  export type ChapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to create a Chapter.
     */
    data: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
  }

  /**
   * Chapter createMany
   */
  export type ChapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chapter createManyAndReturn
   */
  export type ChapterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapter update
   */
  export type ChapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to update a Chapter.
     */
    data: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
    /**
     * Choose, which Chapter to update.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter updateMany
   */
  export type ChapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
  }

  /**
   * Chapter updateManyAndReturn
   */
  export type ChapterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapter upsert
   */
  export type ChapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The filter to search for the Chapter to update in case it exists.
     */
    where: ChapterWhereUniqueInput
    /**
     * In case the Chapter found by the `where` argument doesn't exist, create a new Chapter with this data.
     */
    create: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
    /**
     * In case the Chapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
  }

  /**
   * Chapter delete
   */
  export type ChapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter which Chapter to delete.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter deleteMany
   */
  export type ChapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to delete.
     */
    limit?: number
  }

  /**
   * Chapter.lessons
   */
  export type Chapter$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Chapter without action
   */
  export type ChapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    id: number | null
    chapterId: number | null
  }

  export type LessonSumAggregateOutputType = {
    id: number | null
    chapterId: number | null
  }

  export type LessonMinAggregateOutputType = {
    id: number | null
    title: string | null
    lecture: string | null
    chapterId: number | null
  }

  export type LessonMaxAggregateOutputType = {
    id: number | null
    title: string | null
    lecture: string | null
    chapterId: number | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    title: number
    lecture: number
    chapterId: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    id?: true
    chapterId?: true
  }

  export type LessonSumAggregateInputType = {
    id?: true
    chapterId?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    title?: true
    lecture?: true
    chapterId?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    title?: true
    lecture?: true
    chapterId?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    title?: true
    lecture?: true
    chapterId?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: number
    title: string
    lecture: string | null
    chapterId: number
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    lecture?: boolean
    chapterId?: boolean
    test?: boolean | Lesson$testArgs<ExtArgs>
    attachments?: boolean | Lesson$attachmentsArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    lecture?: boolean
    chapterId?: boolean
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    lecture?: boolean
    chapterId?: boolean
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectScalar = {
    id?: boolean
    title?: boolean
    lecture?: boolean
    chapterId?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "lecture" | "chapterId", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | Lesson$testArgs<ExtArgs>
    attachments?: boolean | Lesson$attachmentsArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }
  export type LessonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      test: Prisma.$TestPayload<ExtArgs> | null
      attachments: Prisma.$LessonAttachmentPayload<ExtArgs>[]
      chapter: Prisma.$ChapterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      lecture: string | null
      chapterId: number
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {LessonUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.updateManyAndReturn({
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
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
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
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    test<T extends Lesson$testArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$testArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    attachments<T extends Lesson$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chapter<T extends ChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterDefaultArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Lesson model
   */
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'Int'>
    readonly title: FieldRef<"Lesson", 'String'>
    readonly lecture: FieldRef<"Lesson", 'String'>
    readonly chapterId: FieldRef<"Lesson", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lesson createManyAndReturn
   */
  export type LessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson updateManyAndReturn
   */
  export type LessonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson.test
   */
  export type Lesson$testArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
  }

  /**
   * Lesson.attachments
   */
  export type Lesson$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttachment
     */
    select?: LessonAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttachment
     */
    omit?: LessonAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttachmentInclude<ExtArgs> | null
    where?: LessonAttachmentWhereInput
    orderBy?: LessonAttachmentOrderByWithRelationInput | LessonAttachmentOrderByWithRelationInput[]
    cursor?: LessonAttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonAttachmentScalarFieldEnum | LessonAttachmentScalarFieldEnum[]
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model LessonAttachment
   */

  export type AggregateLessonAttachment = {
    _count: LessonAttachmentCountAggregateOutputType | null
    _avg: LessonAttachmentAvgAggregateOutputType | null
    _sum: LessonAttachmentSumAggregateOutputType | null
    _min: LessonAttachmentMinAggregateOutputType | null
    _max: LessonAttachmentMaxAggregateOutputType | null
  }

  export type LessonAttachmentAvgAggregateOutputType = {
    id: number | null
    lessonId: number | null
  }

  export type LessonAttachmentSumAggregateOutputType = {
    id: number | null
    lessonId: number | null
  }

  export type LessonAttachmentMinAggregateOutputType = {
    id: number | null
    url: string | null
    attachmentType: $Enums.LessonAttachmentType | null
    lessonId: number | null
  }

  export type LessonAttachmentMaxAggregateOutputType = {
    id: number | null
    url: string | null
    attachmentType: $Enums.LessonAttachmentType | null
    lessonId: number | null
  }

  export type LessonAttachmentCountAggregateOutputType = {
    id: number
    url: number
    attachmentType: number
    lessonId: number
    _all: number
  }


  export type LessonAttachmentAvgAggregateInputType = {
    id?: true
    lessonId?: true
  }

  export type LessonAttachmentSumAggregateInputType = {
    id?: true
    lessonId?: true
  }

  export type LessonAttachmentMinAggregateInputType = {
    id?: true
    url?: true
    attachmentType?: true
    lessonId?: true
  }

  export type LessonAttachmentMaxAggregateInputType = {
    id?: true
    url?: true
    attachmentType?: true
    lessonId?: true
  }

  export type LessonAttachmentCountAggregateInputType = {
    id?: true
    url?: true
    attachmentType?: true
    lessonId?: true
    _all?: true
  }

  export type LessonAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonAttachment to aggregate.
     */
    where?: LessonAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonAttachments to fetch.
     */
    orderBy?: LessonAttachmentOrderByWithRelationInput | LessonAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonAttachments
    **/
    _count?: true | LessonAttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonAttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonAttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonAttachmentMaxAggregateInputType
  }

  export type GetLessonAttachmentAggregateType<T extends LessonAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonAttachment[P]>
      : GetScalarType<T[P], AggregateLessonAttachment[P]>
  }




  export type LessonAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonAttachmentWhereInput
    orderBy?: LessonAttachmentOrderByWithAggregationInput | LessonAttachmentOrderByWithAggregationInput[]
    by: LessonAttachmentScalarFieldEnum[] | LessonAttachmentScalarFieldEnum
    having?: LessonAttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonAttachmentCountAggregateInputType | true
    _avg?: LessonAttachmentAvgAggregateInputType
    _sum?: LessonAttachmentSumAggregateInputType
    _min?: LessonAttachmentMinAggregateInputType
    _max?: LessonAttachmentMaxAggregateInputType
  }

  export type LessonAttachmentGroupByOutputType = {
    id: number
    url: string
    attachmentType: $Enums.LessonAttachmentType
    lessonId: number
    _count: LessonAttachmentCountAggregateOutputType | null
    _avg: LessonAttachmentAvgAggregateOutputType | null
    _sum: LessonAttachmentSumAggregateOutputType | null
    _min: LessonAttachmentMinAggregateOutputType | null
    _max: LessonAttachmentMaxAggregateOutputType | null
  }

  type GetLessonAttachmentGroupByPayload<T extends LessonAttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonAttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonAttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonAttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], LessonAttachmentGroupByOutputType[P]>
        }
      >
    >


  export type LessonAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    attachmentType?: boolean
    lessonId?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonAttachment"]>

  export type LessonAttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    attachmentType?: boolean
    lessonId?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonAttachment"]>

  export type LessonAttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    attachmentType?: boolean
    lessonId?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonAttachment"]>

  export type LessonAttachmentSelectScalar = {
    id?: boolean
    url?: boolean
    attachmentType?: boolean
    lessonId?: boolean
  }

  export type LessonAttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "attachmentType" | "lessonId", ExtArgs["result"]["lessonAttachment"]>
  export type LessonAttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type LessonAttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type LessonAttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $LessonAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonAttachment"
    objects: {
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      attachmentType: $Enums.LessonAttachmentType
      lessonId: number
    }, ExtArgs["result"]["lessonAttachment"]>
    composites: {}
  }

  type LessonAttachmentGetPayload<S extends boolean | null | undefined | LessonAttachmentDefaultArgs> = $Result.GetResult<Prisma.$LessonAttachmentPayload, S>

  type LessonAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonAttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonAttachmentCountAggregateInputType | true
    }

  export interface LessonAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonAttachment'], meta: { name: 'LessonAttachment' } }
    /**
     * Find zero or one LessonAttachment that matches the filter.
     * @param {LessonAttachmentFindUniqueArgs} args - Arguments to find a LessonAttachment
     * @example
     * // Get one LessonAttachment
     * const lessonAttachment = await prisma.lessonAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonAttachmentFindUniqueArgs>(args: SelectSubset<T, LessonAttachmentFindUniqueArgs<ExtArgs>>): Prisma__LessonAttachmentClient<$Result.GetResult<Prisma.$LessonAttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LessonAttachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonAttachmentFindUniqueOrThrowArgs} args - Arguments to find a LessonAttachment
     * @example
     * // Get one LessonAttachment
     * const lessonAttachment = await prisma.lessonAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonAttachmentClient<$Result.GetResult<Prisma.$LessonAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAttachmentFindFirstArgs} args - Arguments to find a LessonAttachment
     * @example
     * // Get one LessonAttachment
     * const lessonAttachment = await prisma.lessonAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonAttachmentFindFirstArgs>(args?: SelectSubset<T, LessonAttachmentFindFirstArgs<ExtArgs>>): Prisma__LessonAttachmentClient<$Result.GetResult<Prisma.$LessonAttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAttachmentFindFirstOrThrowArgs} args - Arguments to find a LessonAttachment
     * @example
     * // Get one LessonAttachment
     * const lessonAttachment = await prisma.lessonAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonAttachmentClient<$Result.GetResult<Prisma.$LessonAttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LessonAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonAttachments
     * const lessonAttachments = await prisma.lessonAttachment.findMany()
     * 
     * // Get first 10 LessonAttachments
     * const lessonAttachments = await prisma.lessonAttachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonAttachmentWithIdOnly = await prisma.lessonAttachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonAttachmentFindManyArgs>(args?: SelectSubset<T, LessonAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LessonAttachment.
     * @param {LessonAttachmentCreateArgs} args - Arguments to create a LessonAttachment.
     * @example
     * // Create one LessonAttachment
     * const LessonAttachment = await prisma.lessonAttachment.create({
     *   data: {
     *     // ... data to create a LessonAttachment
     *   }
     * })
     * 
     */
    create<T extends LessonAttachmentCreateArgs>(args: SelectSubset<T, LessonAttachmentCreateArgs<ExtArgs>>): Prisma__LessonAttachmentClient<$Result.GetResult<Prisma.$LessonAttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LessonAttachments.
     * @param {LessonAttachmentCreateManyArgs} args - Arguments to create many LessonAttachments.
     * @example
     * // Create many LessonAttachments
     * const lessonAttachment = await prisma.lessonAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonAttachmentCreateManyArgs>(args?: SelectSubset<T, LessonAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonAttachments and returns the data saved in the database.
     * @param {LessonAttachmentCreateManyAndReturnArgs} args - Arguments to create many LessonAttachments.
     * @example
     * // Create many LessonAttachments
     * const lessonAttachment = await prisma.lessonAttachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonAttachments and only return the `id`
     * const lessonAttachmentWithIdOnly = await prisma.lessonAttachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonAttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonAttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LessonAttachment.
     * @param {LessonAttachmentDeleteArgs} args - Arguments to delete one LessonAttachment.
     * @example
     * // Delete one LessonAttachment
     * const LessonAttachment = await prisma.lessonAttachment.delete({
     *   where: {
     *     // ... filter to delete one LessonAttachment
     *   }
     * })
     * 
     */
    delete<T extends LessonAttachmentDeleteArgs>(args: SelectSubset<T, LessonAttachmentDeleteArgs<ExtArgs>>): Prisma__LessonAttachmentClient<$Result.GetResult<Prisma.$LessonAttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LessonAttachment.
     * @param {LessonAttachmentUpdateArgs} args - Arguments to update one LessonAttachment.
     * @example
     * // Update one LessonAttachment
     * const lessonAttachment = await prisma.lessonAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonAttachmentUpdateArgs>(args: SelectSubset<T, LessonAttachmentUpdateArgs<ExtArgs>>): Prisma__LessonAttachmentClient<$Result.GetResult<Prisma.$LessonAttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LessonAttachments.
     * @param {LessonAttachmentDeleteManyArgs} args - Arguments to filter LessonAttachments to delete.
     * @example
     * // Delete a few LessonAttachments
     * const { count } = await prisma.lessonAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonAttachmentDeleteManyArgs>(args?: SelectSubset<T, LessonAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonAttachments
     * const lessonAttachment = await prisma.lessonAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonAttachmentUpdateManyArgs>(args: SelectSubset<T, LessonAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonAttachments and returns the data updated in the database.
     * @param {LessonAttachmentUpdateManyAndReturnArgs} args - Arguments to update many LessonAttachments.
     * @example
     * // Update many LessonAttachments
     * const lessonAttachment = await prisma.lessonAttachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LessonAttachments and only return the `id`
     * const lessonAttachmentWithIdOnly = await prisma.lessonAttachment.updateManyAndReturn({
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
    updateManyAndReturn<T extends LessonAttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonAttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonAttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LessonAttachment.
     * @param {LessonAttachmentUpsertArgs} args - Arguments to update or create a LessonAttachment.
     * @example
     * // Update or create a LessonAttachment
     * const lessonAttachment = await prisma.lessonAttachment.upsert({
     *   create: {
     *     // ... data to create a LessonAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonAttachment we want to update
     *   }
     * })
     */
    upsert<T extends LessonAttachmentUpsertArgs>(args: SelectSubset<T, LessonAttachmentUpsertArgs<ExtArgs>>): Prisma__LessonAttachmentClient<$Result.GetResult<Prisma.$LessonAttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LessonAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAttachmentCountArgs} args - Arguments to filter LessonAttachments to count.
     * @example
     * // Count the number of LessonAttachments
     * const count = await prisma.lessonAttachment.count({
     *   where: {
     *     // ... the filter for the LessonAttachments we want to count
     *   }
     * })
    **/
    count<T extends LessonAttachmentCountArgs>(
      args?: Subset<T, LessonAttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonAttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonAttachmentAggregateArgs>(args: Subset<T, LessonAttachmentAggregateArgs>): Prisma.PrismaPromise<GetLessonAttachmentAggregateType<T>>

    /**
     * Group by LessonAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAttachmentGroupByArgs} args - Group by arguments.
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
      T extends LessonAttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: LessonAttachmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonAttachment model
   */
  readonly fields: LessonAttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonAttachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LessonAttachment model
   */
  interface LessonAttachmentFieldRefs {
    readonly id: FieldRef<"LessonAttachment", 'Int'>
    readonly url: FieldRef<"LessonAttachment", 'String'>
    readonly attachmentType: FieldRef<"LessonAttachment", 'LessonAttachmentType'>
    readonly lessonId: FieldRef<"LessonAttachment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LessonAttachment findUnique
   */
  export type LessonAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttachment
     */
    select?: LessonAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttachment
     */
    omit?: LessonAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which LessonAttachment to fetch.
     */
    where: LessonAttachmentWhereUniqueInput
  }

  /**
   * LessonAttachment findUniqueOrThrow
   */
  export type LessonAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttachment
     */
    select?: LessonAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttachment
     */
    omit?: LessonAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which LessonAttachment to fetch.
     */
    where: LessonAttachmentWhereUniqueInput
  }

  /**
   * LessonAttachment findFirst
   */
  export type LessonAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttachment
     */
    select?: LessonAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttachment
     */
    omit?: LessonAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which LessonAttachment to fetch.
     */
    where?: LessonAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonAttachments to fetch.
     */
    orderBy?: LessonAttachmentOrderByWithRelationInput | LessonAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonAttachments.
     */
    cursor?: LessonAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonAttachments.
     */
    distinct?: LessonAttachmentScalarFieldEnum | LessonAttachmentScalarFieldEnum[]
  }

  /**
   * LessonAttachment findFirstOrThrow
   */
  export type LessonAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttachment
     */
    select?: LessonAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttachment
     */
    omit?: LessonAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which LessonAttachment to fetch.
     */
    where?: LessonAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonAttachments to fetch.
     */
    orderBy?: LessonAttachmentOrderByWithRelationInput | LessonAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonAttachments.
     */
    cursor?: LessonAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonAttachments.
     */
    distinct?: LessonAttachmentScalarFieldEnum | LessonAttachmentScalarFieldEnum[]
  }

  /**
   * LessonAttachment findMany
   */
  export type LessonAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttachment
     */
    select?: LessonAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttachment
     */
    omit?: LessonAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which LessonAttachments to fetch.
     */
    where?: LessonAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonAttachments to fetch.
     */
    orderBy?: LessonAttachmentOrderByWithRelationInput | LessonAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonAttachments.
     */
    cursor?: LessonAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonAttachments.
     */
    skip?: number
    distinct?: LessonAttachmentScalarFieldEnum | LessonAttachmentScalarFieldEnum[]
  }

  /**
   * LessonAttachment create
   */
  export type LessonAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttachment
     */
    select?: LessonAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttachment
     */
    omit?: LessonAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonAttachment.
     */
    data: XOR<LessonAttachmentCreateInput, LessonAttachmentUncheckedCreateInput>
  }

  /**
   * LessonAttachment createMany
   */
  export type LessonAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonAttachments.
     */
    data: LessonAttachmentCreateManyInput | LessonAttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LessonAttachment createManyAndReturn
   */
  export type LessonAttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttachment
     */
    select?: LessonAttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttachment
     */
    omit?: LessonAttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many LessonAttachments.
     */
    data: LessonAttachmentCreateManyInput | LessonAttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonAttachment update
   */
  export type LessonAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttachment
     */
    select?: LessonAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttachment
     */
    omit?: LessonAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonAttachment.
     */
    data: XOR<LessonAttachmentUpdateInput, LessonAttachmentUncheckedUpdateInput>
    /**
     * Choose, which LessonAttachment to update.
     */
    where: LessonAttachmentWhereUniqueInput
  }

  /**
   * LessonAttachment updateMany
   */
  export type LessonAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonAttachments.
     */
    data: XOR<LessonAttachmentUpdateManyMutationInput, LessonAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which LessonAttachments to update
     */
    where?: LessonAttachmentWhereInput
    /**
     * Limit how many LessonAttachments to update.
     */
    limit?: number
  }

  /**
   * LessonAttachment updateManyAndReturn
   */
  export type LessonAttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttachment
     */
    select?: LessonAttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttachment
     */
    omit?: LessonAttachmentOmit<ExtArgs> | null
    /**
     * The data used to update LessonAttachments.
     */
    data: XOR<LessonAttachmentUpdateManyMutationInput, LessonAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which LessonAttachments to update
     */
    where?: LessonAttachmentWhereInput
    /**
     * Limit how many LessonAttachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonAttachment upsert
   */
  export type LessonAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttachment
     */
    select?: LessonAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttachment
     */
    omit?: LessonAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonAttachment to update in case it exists.
     */
    where: LessonAttachmentWhereUniqueInput
    /**
     * In case the LessonAttachment found by the `where` argument doesn't exist, create a new LessonAttachment with this data.
     */
    create: XOR<LessonAttachmentCreateInput, LessonAttachmentUncheckedCreateInput>
    /**
     * In case the LessonAttachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonAttachmentUpdateInput, LessonAttachmentUncheckedUpdateInput>
  }

  /**
   * LessonAttachment delete
   */
  export type LessonAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttachment
     */
    select?: LessonAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttachment
     */
    omit?: LessonAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttachmentInclude<ExtArgs> | null
    /**
     * Filter which LessonAttachment to delete.
     */
    where: LessonAttachmentWhereUniqueInput
  }

  /**
   * LessonAttachment deleteMany
   */
  export type LessonAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonAttachments to delete
     */
    where?: LessonAttachmentWhereInput
    /**
     * Limit how many LessonAttachments to delete.
     */
    limit?: number
  }

  /**
   * LessonAttachment without action
   */
  export type LessonAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttachment
     */
    select?: LessonAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttachment
     */
    omit?: LessonAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttachmentInclude<ExtArgs> | null
  }


  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    id: number | null
    lessonId: number | null
  }

  export type TestSumAggregateOutputType = {
    id: number | null
    lessonId: number | null
  }

  export type TestMinAggregateOutputType = {
    id: number | null
    lessonId: number | null
  }

  export type TestMaxAggregateOutputType = {
    id: number | null
    lessonId: number | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    lessonId: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    id?: true
    lessonId?: true
  }

  export type TestSumAggregateInputType = {
    id?: true
    lessonId?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    lessonId?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    lessonId?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    lessonId?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    id: number
    lessonId: number | null
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    lesson?: boolean | Test$lessonArgs<ExtArgs>
    testStages?: boolean | Test$testStagesArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    lesson?: boolean | Test$lessonArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    lesson?: boolean | Test$lessonArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectScalar = {
    id?: boolean
    lessonId?: boolean
  }

  export type TestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lessonId", ExtArgs["result"]["test"]>
  export type TestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | Test$lessonArgs<ExtArgs>
    testStages?: boolean | Test$testStagesArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | Test$lessonArgs<ExtArgs>
  }
  export type TestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | Test$lessonArgs<ExtArgs>
  }

  export type $TestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test"
    objects: {
      lesson: Prisma.$LessonPayload<ExtArgs> | null
      testStages: Prisma.$TestStagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lessonId: number | null
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = $Result.GetResult<Prisma.$TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestFindUniqueArgs>(args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(args: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestFindFirstArgs>(args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestFindManyArgs>(args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends TestCreateArgs>(args: SelectSubset<T, TestCreateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tests.
     * @param {TestCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCreateManyArgs>(args?: SelectSubset<T, TestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tests and returns the data saved in the database.
     * @param {TestCreateManyAndReturnArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends TestDeleteArgs>(args: SelectSubset<T, TestDeleteArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestUpdateArgs>(args: SelectSubset<T, TestUpdateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDeleteManyArgs>(args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestUpdateManyArgs>(args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests and returns the data updated in the database.
     * @param {TestUpdateManyAndReturnArgs} args - Arguments to update many Tests.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.updateManyAndReturn({
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
    updateManyAndReturn<T extends TestUpdateManyAndReturnArgs>(args: SelectSubset<T, TestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends TestUpsertArgs>(args: SelectSubset<T, TestUpsertArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
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
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lesson<T extends Test$lessonArgs<ExtArgs> = {}>(args?: Subset<T, Test$lessonArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    testStages<T extends Test$testStagesArgs<ExtArgs> = {}>(args?: Subset<T, Test$testStagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestStagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Test model
   */
  interface TestFieldRefs {
    readonly id: FieldRef<"Test", 'Int'>
    readonly lessonId: FieldRef<"Test", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data?: XOR<TestCreateInput, TestUncheckedCreateInput>
  }

  /**
   * Test createMany
   */
  export type TestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test createManyAndReturn
   */
  export type TestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test updateManyAndReturn
   */
  export type TestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }

  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to delete.
     */
    limit?: number
  }

  /**
   * Test.lesson
   */
  export type Test$lessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
  }

  /**
   * Test.testStages
   */
  export type Test$testStagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestStage
     */
    select?: TestStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestStage
     */
    omit?: TestStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestStageInclude<ExtArgs> | null
    where?: TestStageWhereInput
    orderBy?: TestStageOrderByWithRelationInput | TestStageOrderByWithRelationInput[]
    cursor?: TestStageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestStageScalarFieldEnum | TestStageScalarFieldEnum[]
  }

  /**
   * Test without action
   */
  export type TestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
  }


  /**
   * Model TestStage
   */

  export type AggregateTestStage = {
    _count: TestStageCountAggregateOutputType | null
    _avg: TestStageAvgAggregateOutputType | null
    _sum: TestStageSumAggregateOutputType | null
    _min: TestStageMinAggregateOutputType | null
    _max: TestStageMaxAggregateOutputType | null
  }

  export type TestStageAvgAggregateOutputType = {
    id: number | null
    testId: number | null
    answerId: number | null
  }

  export type TestStageSumAggregateOutputType = {
    id: number | null
    testId: number | null
    answerId: number | null
  }

  export type TestStageMinAggregateOutputType = {
    id: number | null
    testId: number | null
    type: $Enums.TestStageType | null
    answerId: number | null
    question: string | null
  }

  export type TestStageMaxAggregateOutputType = {
    id: number | null
    testId: number | null
    type: $Enums.TestStageType | null
    answerId: number | null
    question: string | null
  }

  export type TestStageCountAggregateOutputType = {
    id: number
    testId: number
    type: number
    answerId: number
    question: number
    _all: number
  }


  export type TestStageAvgAggregateInputType = {
    id?: true
    testId?: true
    answerId?: true
  }

  export type TestStageSumAggregateInputType = {
    id?: true
    testId?: true
    answerId?: true
  }

  export type TestStageMinAggregateInputType = {
    id?: true
    testId?: true
    type?: true
    answerId?: true
    question?: true
  }

  export type TestStageMaxAggregateInputType = {
    id?: true
    testId?: true
    type?: true
    answerId?: true
    question?: true
  }

  export type TestStageCountAggregateInputType = {
    id?: true
    testId?: true
    type?: true
    answerId?: true
    question?: true
    _all?: true
  }

  export type TestStageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestStage to aggregate.
     */
    where?: TestStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestStages to fetch.
     */
    orderBy?: TestStageOrderByWithRelationInput | TestStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestStages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestStages
    **/
    _count?: true | TestStageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestStageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestStageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestStageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestStageMaxAggregateInputType
  }

  export type GetTestStageAggregateType<T extends TestStageAggregateArgs> = {
        [P in keyof T & keyof AggregateTestStage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestStage[P]>
      : GetScalarType<T[P], AggregateTestStage[P]>
  }




  export type TestStageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestStageWhereInput
    orderBy?: TestStageOrderByWithAggregationInput | TestStageOrderByWithAggregationInput[]
    by: TestStageScalarFieldEnum[] | TestStageScalarFieldEnum
    having?: TestStageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestStageCountAggregateInputType | true
    _avg?: TestStageAvgAggregateInputType
    _sum?: TestStageSumAggregateInputType
    _min?: TestStageMinAggregateInputType
    _max?: TestStageMaxAggregateInputType
  }

  export type TestStageGroupByOutputType = {
    id: number
    testId: number
    type: $Enums.TestStageType
    answerId: number
    question: string
    _count: TestStageCountAggregateOutputType | null
    _avg: TestStageAvgAggregateOutputType | null
    _sum: TestStageSumAggregateOutputType | null
    _min: TestStageMinAggregateOutputType | null
    _max: TestStageMaxAggregateOutputType | null
  }

  type GetTestStageGroupByPayload<T extends TestStageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestStageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestStageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestStageGroupByOutputType[P]>
            : GetScalarType<T[P], TestStageGroupByOutputType[P]>
        }
      >
    >


  export type TestStageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    type?: boolean
    answerId?: boolean
    question?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
    options?: boolean | TestStage$optionsArgs<ExtArgs>
    answer?: boolean | OptionDefaultArgs<ExtArgs>
    _count?: boolean | TestStageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testStage"]>

  export type TestStageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    type?: boolean
    answerId?: boolean
    question?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
    answer?: boolean | OptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testStage"]>

  export type TestStageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    type?: boolean
    answerId?: boolean
    question?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
    answer?: boolean | OptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testStage"]>

  export type TestStageSelectScalar = {
    id?: boolean
    testId?: boolean
    type?: boolean
    answerId?: boolean
    question?: boolean
  }

  export type TestStageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "testId" | "type" | "answerId" | "question", ExtArgs["result"]["testStage"]>
  export type TestStageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
    options?: boolean | TestStage$optionsArgs<ExtArgs>
    answer?: boolean | OptionDefaultArgs<ExtArgs>
    _count?: boolean | TestStageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestStageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
    answer?: boolean | OptionDefaultArgs<ExtArgs>
  }
  export type TestStageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
    answer?: boolean | OptionDefaultArgs<ExtArgs>
  }

  export type $TestStagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestStage"
    objects: {
      test: Prisma.$TestPayload<ExtArgs>
      options: Prisma.$OptionPayload<ExtArgs>[]
      answer: Prisma.$OptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      testId: number
      type: $Enums.TestStageType
      answerId: number
      question: string
    }, ExtArgs["result"]["testStage"]>
    composites: {}
  }

  type TestStageGetPayload<S extends boolean | null | undefined | TestStageDefaultArgs> = $Result.GetResult<Prisma.$TestStagePayload, S>

  type TestStageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestStageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestStageCountAggregateInputType | true
    }

  export interface TestStageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestStage'], meta: { name: 'TestStage' } }
    /**
     * Find zero or one TestStage that matches the filter.
     * @param {TestStageFindUniqueArgs} args - Arguments to find a TestStage
     * @example
     * // Get one TestStage
     * const testStage = await prisma.testStage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestStageFindUniqueArgs>(args: SelectSubset<T, TestStageFindUniqueArgs<ExtArgs>>): Prisma__TestStageClient<$Result.GetResult<Prisma.$TestStagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestStage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestStageFindUniqueOrThrowArgs} args - Arguments to find a TestStage
     * @example
     * // Get one TestStage
     * const testStage = await prisma.testStage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestStageFindUniqueOrThrowArgs>(args: SelectSubset<T, TestStageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestStageClient<$Result.GetResult<Prisma.$TestStagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestStage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestStageFindFirstArgs} args - Arguments to find a TestStage
     * @example
     * // Get one TestStage
     * const testStage = await prisma.testStage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestStageFindFirstArgs>(args?: SelectSubset<T, TestStageFindFirstArgs<ExtArgs>>): Prisma__TestStageClient<$Result.GetResult<Prisma.$TestStagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestStage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestStageFindFirstOrThrowArgs} args - Arguments to find a TestStage
     * @example
     * // Get one TestStage
     * const testStage = await prisma.testStage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestStageFindFirstOrThrowArgs>(args?: SelectSubset<T, TestStageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestStageClient<$Result.GetResult<Prisma.$TestStagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestStages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestStageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestStages
     * const testStages = await prisma.testStage.findMany()
     * 
     * // Get first 10 TestStages
     * const testStages = await prisma.testStage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testStageWithIdOnly = await prisma.testStage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestStageFindManyArgs>(args?: SelectSubset<T, TestStageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestStagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestStage.
     * @param {TestStageCreateArgs} args - Arguments to create a TestStage.
     * @example
     * // Create one TestStage
     * const TestStage = await prisma.testStage.create({
     *   data: {
     *     // ... data to create a TestStage
     *   }
     * })
     * 
     */
    create<T extends TestStageCreateArgs>(args: SelectSubset<T, TestStageCreateArgs<ExtArgs>>): Prisma__TestStageClient<$Result.GetResult<Prisma.$TestStagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestStages.
     * @param {TestStageCreateManyArgs} args - Arguments to create many TestStages.
     * @example
     * // Create many TestStages
     * const testStage = await prisma.testStage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestStageCreateManyArgs>(args?: SelectSubset<T, TestStageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestStages and returns the data saved in the database.
     * @param {TestStageCreateManyAndReturnArgs} args - Arguments to create many TestStages.
     * @example
     * // Create many TestStages
     * const testStage = await prisma.testStage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestStages and only return the `id`
     * const testStageWithIdOnly = await prisma.testStage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestStageCreateManyAndReturnArgs>(args?: SelectSubset<T, TestStageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestStagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestStage.
     * @param {TestStageDeleteArgs} args - Arguments to delete one TestStage.
     * @example
     * // Delete one TestStage
     * const TestStage = await prisma.testStage.delete({
     *   where: {
     *     // ... filter to delete one TestStage
     *   }
     * })
     * 
     */
    delete<T extends TestStageDeleteArgs>(args: SelectSubset<T, TestStageDeleteArgs<ExtArgs>>): Prisma__TestStageClient<$Result.GetResult<Prisma.$TestStagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestStage.
     * @param {TestStageUpdateArgs} args - Arguments to update one TestStage.
     * @example
     * // Update one TestStage
     * const testStage = await prisma.testStage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestStageUpdateArgs>(args: SelectSubset<T, TestStageUpdateArgs<ExtArgs>>): Prisma__TestStageClient<$Result.GetResult<Prisma.$TestStagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestStages.
     * @param {TestStageDeleteManyArgs} args - Arguments to filter TestStages to delete.
     * @example
     * // Delete a few TestStages
     * const { count } = await prisma.testStage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestStageDeleteManyArgs>(args?: SelectSubset<T, TestStageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestStages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestStageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestStages
     * const testStage = await prisma.testStage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestStageUpdateManyArgs>(args: SelectSubset<T, TestStageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestStages and returns the data updated in the database.
     * @param {TestStageUpdateManyAndReturnArgs} args - Arguments to update many TestStages.
     * @example
     * // Update many TestStages
     * const testStage = await prisma.testStage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestStages and only return the `id`
     * const testStageWithIdOnly = await prisma.testStage.updateManyAndReturn({
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
    updateManyAndReturn<T extends TestStageUpdateManyAndReturnArgs>(args: SelectSubset<T, TestStageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestStagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestStage.
     * @param {TestStageUpsertArgs} args - Arguments to update or create a TestStage.
     * @example
     * // Update or create a TestStage
     * const testStage = await prisma.testStage.upsert({
     *   create: {
     *     // ... data to create a TestStage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestStage we want to update
     *   }
     * })
     */
    upsert<T extends TestStageUpsertArgs>(args: SelectSubset<T, TestStageUpsertArgs<ExtArgs>>): Prisma__TestStageClient<$Result.GetResult<Prisma.$TestStagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestStages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestStageCountArgs} args - Arguments to filter TestStages to count.
     * @example
     * // Count the number of TestStages
     * const count = await prisma.testStage.count({
     *   where: {
     *     // ... the filter for the TestStages we want to count
     *   }
     * })
    **/
    count<T extends TestStageCountArgs>(
      args?: Subset<T, TestStageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestStageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestStage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestStageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestStageAggregateArgs>(args: Subset<T, TestStageAggregateArgs>): Prisma.PrismaPromise<GetTestStageAggregateType<T>>

    /**
     * Group by TestStage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestStageGroupByArgs} args - Group by arguments.
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
      T extends TestStageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestStageGroupByArgs['orderBy'] }
        : { orderBy?: TestStageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestStageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestStageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestStage model
   */
  readonly fields: TestStageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestStage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestStageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    test<T extends TestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestDefaultArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends TestStage$optionsArgs<ExtArgs> = {}>(args?: Subset<T, TestStage$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answer<T extends OptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OptionDefaultArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TestStage model
   */
  interface TestStageFieldRefs {
    readonly id: FieldRef<"TestStage", 'Int'>
    readonly testId: FieldRef<"TestStage", 'Int'>
    readonly type: FieldRef<"TestStage", 'TestStageType'>
    readonly answerId: FieldRef<"TestStage", 'Int'>
    readonly question: FieldRef<"TestStage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TestStage findUnique
   */
  export type TestStageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestStage
     */
    select?: TestStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestStage
     */
    omit?: TestStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestStageInclude<ExtArgs> | null
    /**
     * Filter, which TestStage to fetch.
     */
    where: TestStageWhereUniqueInput
  }

  /**
   * TestStage findUniqueOrThrow
   */
  export type TestStageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestStage
     */
    select?: TestStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestStage
     */
    omit?: TestStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestStageInclude<ExtArgs> | null
    /**
     * Filter, which TestStage to fetch.
     */
    where: TestStageWhereUniqueInput
  }

  /**
   * TestStage findFirst
   */
  export type TestStageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestStage
     */
    select?: TestStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestStage
     */
    omit?: TestStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestStageInclude<ExtArgs> | null
    /**
     * Filter, which TestStage to fetch.
     */
    where?: TestStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestStages to fetch.
     */
    orderBy?: TestStageOrderByWithRelationInput | TestStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestStages.
     */
    cursor?: TestStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestStages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestStages.
     */
    distinct?: TestStageScalarFieldEnum | TestStageScalarFieldEnum[]
  }

  /**
   * TestStage findFirstOrThrow
   */
  export type TestStageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestStage
     */
    select?: TestStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestStage
     */
    omit?: TestStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestStageInclude<ExtArgs> | null
    /**
     * Filter, which TestStage to fetch.
     */
    where?: TestStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestStages to fetch.
     */
    orderBy?: TestStageOrderByWithRelationInput | TestStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestStages.
     */
    cursor?: TestStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestStages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestStages.
     */
    distinct?: TestStageScalarFieldEnum | TestStageScalarFieldEnum[]
  }

  /**
   * TestStage findMany
   */
  export type TestStageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestStage
     */
    select?: TestStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestStage
     */
    omit?: TestStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestStageInclude<ExtArgs> | null
    /**
     * Filter, which TestStages to fetch.
     */
    where?: TestStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestStages to fetch.
     */
    orderBy?: TestStageOrderByWithRelationInput | TestStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestStages.
     */
    cursor?: TestStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestStages.
     */
    skip?: number
    distinct?: TestStageScalarFieldEnum | TestStageScalarFieldEnum[]
  }

  /**
   * TestStage create
   */
  export type TestStageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestStage
     */
    select?: TestStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestStage
     */
    omit?: TestStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestStageInclude<ExtArgs> | null
    /**
     * The data needed to create a TestStage.
     */
    data: XOR<TestStageCreateInput, TestStageUncheckedCreateInput>
  }

  /**
   * TestStage createMany
   */
  export type TestStageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestStages.
     */
    data: TestStageCreateManyInput | TestStageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestStage createManyAndReturn
   */
  export type TestStageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestStage
     */
    select?: TestStageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestStage
     */
    omit?: TestStageOmit<ExtArgs> | null
    /**
     * The data used to create many TestStages.
     */
    data: TestStageCreateManyInput | TestStageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestStageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestStage update
   */
  export type TestStageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestStage
     */
    select?: TestStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestStage
     */
    omit?: TestStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestStageInclude<ExtArgs> | null
    /**
     * The data needed to update a TestStage.
     */
    data: XOR<TestStageUpdateInput, TestStageUncheckedUpdateInput>
    /**
     * Choose, which TestStage to update.
     */
    where: TestStageWhereUniqueInput
  }

  /**
   * TestStage updateMany
   */
  export type TestStageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestStages.
     */
    data: XOR<TestStageUpdateManyMutationInput, TestStageUncheckedUpdateManyInput>
    /**
     * Filter which TestStages to update
     */
    where?: TestStageWhereInput
    /**
     * Limit how many TestStages to update.
     */
    limit?: number
  }

  /**
   * TestStage updateManyAndReturn
   */
  export type TestStageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestStage
     */
    select?: TestStageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestStage
     */
    omit?: TestStageOmit<ExtArgs> | null
    /**
     * The data used to update TestStages.
     */
    data: XOR<TestStageUpdateManyMutationInput, TestStageUncheckedUpdateManyInput>
    /**
     * Filter which TestStages to update
     */
    where?: TestStageWhereInput
    /**
     * Limit how many TestStages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestStageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestStage upsert
   */
  export type TestStageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestStage
     */
    select?: TestStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestStage
     */
    omit?: TestStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestStageInclude<ExtArgs> | null
    /**
     * The filter to search for the TestStage to update in case it exists.
     */
    where: TestStageWhereUniqueInput
    /**
     * In case the TestStage found by the `where` argument doesn't exist, create a new TestStage with this data.
     */
    create: XOR<TestStageCreateInput, TestStageUncheckedCreateInput>
    /**
     * In case the TestStage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestStageUpdateInput, TestStageUncheckedUpdateInput>
  }

  /**
   * TestStage delete
   */
  export type TestStageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestStage
     */
    select?: TestStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestStage
     */
    omit?: TestStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestStageInclude<ExtArgs> | null
    /**
     * Filter which TestStage to delete.
     */
    where: TestStageWhereUniqueInput
  }

  /**
   * TestStage deleteMany
   */
  export type TestStageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestStages to delete
     */
    where?: TestStageWhereInput
    /**
     * Limit how many TestStages to delete.
     */
    limit?: number
  }

  /**
   * TestStage.options
   */
  export type TestStage$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    cursor?: OptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * TestStage without action
   */
  export type TestStageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestStage
     */
    select?: TestStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestStage
     */
    omit?: TestStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestStageInclude<ExtArgs> | null
  }


  /**
   * Model Option
   */

  export type AggregateOption = {
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  export type OptionAvgAggregateOutputType = {
    id: number | null
    testStageId: number | null
  }

  export type OptionSumAggregateOutputType = {
    id: number | null
    testStageId: number | null
  }

  export type OptionMinAggregateOutputType = {
    id: number | null
    option: string | null
    testStageId: number | null
  }

  export type OptionMaxAggregateOutputType = {
    id: number | null
    option: string | null
    testStageId: number | null
  }

  export type OptionCountAggregateOutputType = {
    id: number
    option: number
    testStageId: number
    _all: number
  }


  export type OptionAvgAggregateInputType = {
    id?: true
    testStageId?: true
  }

  export type OptionSumAggregateInputType = {
    id?: true
    testStageId?: true
  }

  export type OptionMinAggregateInputType = {
    id?: true
    option?: true
    testStageId?: true
  }

  export type OptionMaxAggregateInputType = {
    id?: true
    option?: true
    testStageId?: true
  }

  export type OptionCountAggregateInputType = {
    id?: true
    option?: true
    testStageId?: true
    _all?: true
  }

  export type OptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Option to aggregate.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Options
    **/
    _count?: true | OptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionMaxAggregateInputType
  }

  export type GetOptionAggregateType<T extends OptionAggregateArgs> = {
        [P in keyof T & keyof AggregateOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOption[P]>
      : GetScalarType<T[P], AggregateOption[P]>
  }




  export type OptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithAggregationInput | OptionOrderByWithAggregationInput[]
    by: OptionScalarFieldEnum[] | OptionScalarFieldEnum
    having?: OptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionCountAggregateInputType | true
    _avg?: OptionAvgAggregateInputType
    _sum?: OptionSumAggregateInputType
    _min?: OptionMinAggregateInputType
    _max?: OptionMaxAggregateInputType
  }

  export type OptionGroupByOutputType = {
    id: number
    option: string
    testStageId: number
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  type GetOptionGroupByPayload<T extends OptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionGroupByOutputType[P]>
            : GetScalarType<T[P], OptionGroupByOutputType[P]>
        }
      >
    >


  export type OptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    option?: boolean
    testStageId?: boolean
    testStage?: boolean | TestStageDefaultArgs<ExtArgs>
    answerFor?: boolean | Option$answerForArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    option?: boolean
    testStageId?: boolean
    testStage?: boolean | TestStageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    option?: boolean
    testStageId?: boolean
    testStage?: boolean | TestStageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectScalar = {
    id?: boolean
    option?: boolean
    testStageId?: boolean
  }

  export type OptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "option" | "testStageId", ExtArgs["result"]["option"]>
  export type OptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testStage?: boolean | TestStageDefaultArgs<ExtArgs>
    answerFor?: boolean | Option$answerForArgs<ExtArgs>
  }
  export type OptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testStage?: boolean | TestStageDefaultArgs<ExtArgs>
  }
  export type OptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testStage?: boolean | TestStageDefaultArgs<ExtArgs>
  }

  export type $OptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Option"
    objects: {
      testStage: Prisma.$TestStagePayload<ExtArgs>
      answerFor: Prisma.$TestStagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      option: string
      testStageId: number
    }, ExtArgs["result"]["option"]>
    composites: {}
  }

  type OptionGetPayload<S extends boolean | null | undefined | OptionDefaultArgs> = $Result.GetResult<Prisma.$OptionPayload, S>

  type OptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptionCountAggregateInputType | true
    }

  export interface OptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Option'], meta: { name: 'Option' } }
    /**
     * Find zero or one Option that matches the filter.
     * @param {OptionFindUniqueArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionFindUniqueArgs>(args: SelectSubset<T, OptionFindUniqueArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Option that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptionFindUniqueOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionFindUniqueOrThrowArgs>(args: SelectSubset<T, OptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionFindFirstArgs>(args?: SelectSubset<T, OptionFindFirstArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionFindFirstOrThrowArgs>(args?: SelectSubset<T, OptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Options
     * const options = await prisma.option.findMany()
     * 
     * // Get first 10 Options
     * const options = await prisma.option.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionWithIdOnly = await prisma.option.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptionFindManyArgs>(args?: SelectSubset<T, OptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Option.
     * @param {OptionCreateArgs} args - Arguments to create a Option.
     * @example
     * // Create one Option
     * const Option = await prisma.option.create({
     *   data: {
     *     // ... data to create a Option
     *   }
     * })
     * 
     */
    create<T extends OptionCreateArgs>(args: SelectSubset<T, OptionCreateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Options.
     * @param {OptionCreateManyArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptionCreateManyArgs>(args?: SelectSubset<T, OptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Options and returns the data saved in the database.
     * @param {OptionCreateManyAndReturnArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Options and only return the `id`
     * const optionWithIdOnly = await prisma.option.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptionCreateManyAndReturnArgs>(args?: SelectSubset<T, OptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Option.
     * @param {OptionDeleteArgs} args - Arguments to delete one Option.
     * @example
     * // Delete one Option
     * const Option = await prisma.option.delete({
     *   where: {
     *     // ... filter to delete one Option
     *   }
     * })
     * 
     */
    delete<T extends OptionDeleteArgs>(args: SelectSubset<T, OptionDeleteArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Option.
     * @param {OptionUpdateArgs} args - Arguments to update one Option.
     * @example
     * // Update one Option
     * const option = await prisma.option.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptionUpdateArgs>(args: SelectSubset<T, OptionUpdateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Options.
     * @param {OptionDeleteManyArgs} args - Arguments to filter Options to delete.
     * @example
     * // Delete a few Options
     * const { count } = await prisma.option.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptionDeleteManyArgs>(args?: SelectSubset<T, OptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptionUpdateManyArgs>(args: SelectSubset<T, OptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options and returns the data updated in the database.
     * @param {OptionUpdateManyAndReturnArgs} args - Arguments to update many Options.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Options and only return the `id`
     * const optionWithIdOnly = await prisma.option.updateManyAndReturn({
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
    updateManyAndReturn<T extends OptionUpdateManyAndReturnArgs>(args: SelectSubset<T, OptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Option.
     * @param {OptionUpsertArgs} args - Arguments to update or create a Option.
     * @example
     * // Update or create a Option
     * const option = await prisma.option.upsert({
     *   create: {
     *     // ... data to create a Option
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Option we want to update
     *   }
     * })
     */
    upsert<T extends OptionUpsertArgs>(args: SelectSubset<T, OptionUpsertArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCountArgs} args - Arguments to filter Options to count.
     * @example
     * // Count the number of Options
     * const count = await prisma.option.count({
     *   where: {
     *     // ... the filter for the Options we want to count
     *   }
     * })
    **/
    count<T extends OptionCountArgs>(
      args?: Subset<T, OptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptionAggregateArgs>(args: Subset<T, OptionAggregateArgs>): Prisma.PrismaPromise<GetOptionAggregateType<T>>

    /**
     * Group by Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionGroupByArgs} args - Group by arguments.
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
      T extends OptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionGroupByArgs['orderBy'] }
        : { orderBy?: OptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Option model
   */
  readonly fields: OptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Option.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testStage<T extends TestStageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestStageDefaultArgs<ExtArgs>>): Prisma__TestStageClient<$Result.GetResult<Prisma.$TestStagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answerFor<T extends Option$answerForArgs<ExtArgs> = {}>(args?: Subset<T, Option$answerForArgs<ExtArgs>>): Prisma__TestStageClient<$Result.GetResult<Prisma.$TestStagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Option model
   */
  interface OptionFieldRefs {
    readonly id: FieldRef<"Option", 'Int'>
    readonly option: FieldRef<"Option", 'String'>
    readonly testStageId: FieldRef<"Option", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Option findUnique
   */
  export type OptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findUniqueOrThrow
   */
  export type OptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findFirst
   */
  export type OptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findFirstOrThrow
   */
  export type OptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findMany
   */
  export type OptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option create
   */
  export type OptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Option.
     */
    data: XOR<OptionCreateInput, OptionUncheckedCreateInput>
  }

  /**
   * Option createMany
   */
  export type OptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Option createManyAndReturn
   */
  export type OptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Option update
   */
  export type OptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Option.
     */
    data: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
    /**
     * Choose, which Option to update.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option updateMany
   */
  export type OptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
  }

  /**
   * Option updateManyAndReturn
   */
  export type OptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Option upsert
   */
  export type OptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Option to update in case it exists.
     */
    where: OptionWhereUniqueInput
    /**
     * In case the Option found by the `where` argument doesn't exist, create a new Option with this data.
     */
    create: XOR<OptionCreateInput, OptionUncheckedCreateInput>
    /**
     * In case the Option was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
  }

  /**
   * Option delete
   */
  export type OptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter which Option to delete.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option deleteMany
   */
  export type OptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Options to delete
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to delete.
     */
    limit?: number
  }

  /**
   * Option.answerFor
   */
  export type Option$answerForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestStage
     */
    select?: TestStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestStage
     */
    omit?: TestStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestStageInclude<ExtArgs> | null
    where?: TestStageWhereInput
  }

  /**
   * Option without action
   */
  export type OptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
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
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    birthday: 'birthday',
    avatarUrl: 'avatarUrl',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const ChapterScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    courseId: 'courseId'
  };

  export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    title: 'title',
    lecture: 'lecture',
    chapterId: 'chapterId'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const LessonAttachmentScalarFieldEnum: {
    id: 'id',
    url: 'url',
    attachmentType: 'attachmentType',
    lessonId: 'lessonId'
  };

  export type LessonAttachmentScalarFieldEnum = (typeof LessonAttachmentScalarFieldEnum)[keyof typeof LessonAttachmentScalarFieldEnum]


  export const TestScalarFieldEnum: {
    id: 'id',
    lessonId: 'lessonId'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const TestStageScalarFieldEnum: {
    id: 'id',
    testId: 'testId',
    type: 'type',
    answerId: 'answerId',
    question: 'question'
  };

  export type TestStageScalarFieldEnum = (typeof TestStageScalarFieldEnum)[keyof typeof TestStageScalarFieldEnum]


  export const OptionScalarFieldEnum: {
    id: 'id',
    option: 'option',
    testStageId: 'testStageId'
  };

  export type OptionScalarFieldEnum = (typeof OptionScalarFieldEnum)[keyof typeof OptionScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'LessonAttachmentType'
   */
  export type EnumLessonAttachmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LessonAttachmentType'>
    


  /**
   * Reference to a field of type 'LessonAttachmentType[]'
   */
  export type ListEnumLessonAttachmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LessonAttachmentType[]'>
    


  /**
   * Reference to a field of type 'TestStageType'
   */
  export type EnumTestStageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestStageType'>
    


  /**
   * Reference to a field of type 'TestStageType[]'
   */
  export type ListEnumTestStageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestStageType[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    fullname?: StringNullableFilter<"Profile"> | string | null
    birthday?: DateTimeNullableFilter<"Profile"> | Date | string | null
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    userId?: IntFilter<"Profile"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    fullname?: StringNullableFilter<"Profile"> | string | null
    birthday?: DateTimeNullableFilter<"Profile"> | Date | string | null
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    fullname?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    birthday?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    userId?: IntWithAggregatesFilter<"Profile"> | number
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    imageUrl?: StringNullableFilter<"Course"> | string | null
    chapters?: ChapterListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    chapters?: ChapterOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    imageUrl?: StringNullableFilter<"Course"> | string | null
    chapters?: ChapterListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Course"> | string | null
  }

  export type ChapterWhereInput = {
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    id?: IntFilter<"Chapter"> | number
    title?: StringFilter<"Chapter"> | string
    description?: StringNullableFilter<"Chapter"> | string | null
    courseId?: IntFilter<"Chapter"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    lessons?: LessonListRelationFilter
  }

  export type ChapterOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
    lessons?: LessonOrderByRelationAggregateInput
  }

  export type ChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    title?: StringFilter<"Chapter"> | string
    description?: StringNullableFilter<"Chapter"> | string | null
    courseId?: IntFilter<"Chapter"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    lessons?: LessonListRelationFilter
  }, "id">

  export type ChapterOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    courseId?: SortOrder
    _count?: ChapterCountOrderByAggregateInput
    _avg?: ChapterAvgOrderByAggregateInput
    _max?: ChapterMaxOrderByAggregateInput
    _min?: ChapterMinOrderByAggregateInput
    _sum?: ChapterSumOrderByAggregateInput
  }

  export type ChapterScalarWhereWithAggregatesInput = {
    AND?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    OR?: ChapterScalarWhereWithAggregatesInput[]
    NOT?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chapter"> | number
    title?: StringWithAggregatesFilter<"Chapter"> | string
    description?: StringNullableWithAggregatesFilter<"Chapter"> | string | null
    courseId?: IntWithAggregatesFilter<"Chapter"> | number
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: IntFilter<"Lesson"> | number
    title?: StringFilter<"Lesson"> | string
    lecture?: StringNullableFilter<"Lesson"> | string | null
    chapterId?: IntFilter<"Lesson"> | number
    test?: XOR<TestNullableScalarRelationFilter, TestWhereInput> | null
    attachments?: LessonAttachmentListRelationFilter
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    lecture?: SortOrderInput | SortOrder
    chapterId?: SortOrder
    test?: TestOrderByWithRelationInput
    attachments?: LessonAttachmentOrderByRelationAggregateInput
    chapter?: ChapterOrderByWithRelationInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    title?: StringFilter<"Lesson"> | string
    lecture?: StringNullableFilter<"Lesson"> | string | null
    chapterId?: IntFilter<"Lesson"> | number
    test?: XOR<TestNullableScalarRelationFilter, TestWhereInput> | null
    attachments?: LessonAttachmentListRelationFilter
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    lecture?: SortOrderInput | SortOrder
    chapterId?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lesson"> | number
    title?: StringWithAggregatesFilter<"Lesson"> | string
    lecture?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    chapterId?: IntWithAggregatesFilter<"Lesson"> | number
  }

  export type LessonAttachmentWhereInput = {
    AND?: LessonAttachmentWhereInput | LessonAttachmentWhereInput[]
    OR?: LessonAttachmentWhereInput[]
    NOT?: LessonAttachmentWhereInput | LessonAttachmentWhereInput[]
    id?: IntFilter<"LessonAttachment"> | number
    url?: StringFilter<"LessonAttachment"> | string
    attachmentType?: EnumLessonAttachmentTypeFilter<"LessonAttachment"> | $Enums.LessonAttachmentType
    lessonId?: IntFilter<"LessonAttachment"> | number
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }

  export type LessonAttachmentOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    attachmentType?: SortOrder
    lessonId?: SortOrder
    lesson?: LessonOrderByWithRelationInput
  }

  export type LessonAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    lessonId?: number
    AND?: LessonAttachmentWhereInput | LessonAttachmentWhereInput[]
    OR?: LessonAttachmentWhereInput[]
    NOT?: LessonAttachmentWhereInput | LessonAttachmentWhereInput[]
    url?: StringFilter<"LessonAttachment"> | string
    attachmentType?: EnumLessonAttachmentTypeFilter<"LessonAttachment"> | $Enums.LessonAttachmentType
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }, "id" | "lessonId">

  export type LessonAttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    attachmentType?: SortOrder
    lessonId?: SortOrder
    _count?: LessonAttachmentCountOrderByAggregateInput
    _avg?: LessonAttachmentAvgOrderByAggregateInput
    _max?: LessonAttachmentMaxOrderByAggregateInput
    _min?: LessonAttachmentMinOrderByAggregateInput
    _sum?: LessonAttachmentSumOrderByAggregateInput
  }

  export type LessonAttachmentScalarWhereWithAggregatesInput = {
    AND?: LessonAttachmentScalarWhereWithAggregatesInput | LessonAttachmentScalarWhereWithAggregatesInput[]
    OR?: LessonAttachmentScalarWhereWithAggregatesInput[]
    NOT?: LessonAttachmentScalarWhereWithAggregatesInput | LessonAttachmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LessonAttachment"> | number
    url?: StringWithAggregatesFilter<"LessonAttachment"> | string
    attachmentType?: EnumLessonAttachmentTypeWithAggregatesFilter<"LessonAttachment"> | $Enums.LessonAttachmentType
    lessonId?: IntWithAggregatesFilter<"LessonAttachment"> | number
  }

  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    id?: IntFilter<"Test"> | number
    lessonId?: IntNullableFilter<"Test"> | number | null
    lesson?: XOR<LessonNullableScalarRelationFilter, LessonWhereInput> | null
    testStages?: TestStageListRelationFilter
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    lessonId?: SortOrderInput | SortOrder
    lesson?: LessonOrderByWithRelationInput
    testStages?: TestStageOrderByRelationAggregateInput
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    lessonId?: number
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    lesson?: XOR<LessonNullableScalarRelationFilter, LessonWhereInput> | null
    testStages?: TestStageListRelationFilter
  }, "id" | "lessonId">

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    lessonId?: SortOrderInput | SortOrder
    _count?: TestCountOrderByAggregateInput
    _avg?: TestAvgOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
    _sum?: TestSumOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Test"> | number
    lessonId?: IntNullableWithAggregatesFilter<"Test"> | number | null
  }

  export type TestStageWhereInput = {
    AND?: TestStageWhereInput | TestStageWhereInput[]
    OR?: TestStageWhereInput[]
    NOT?: TestStageWhereInput | TestStageWhereInput[]
    id?: IntFilter<"TestStage"> | number
    testId?: IntFilter<"TestStage"> | number
    type?: EnumTestStageTypeFilter<"TestStage"> | $Enums.TestStageType
    answerId?: IntFilter<"TestStage"> | number
    question?: StringFilter<"TestStage"> | string
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
    options?: OptionListRelationFilter
    answer?: XOR<OptionScalarRelationFilter, OptionWhereInput>
  }

  export type TestStageOrderByWithRelationInput = {
    id?: SortOrder
    testId?: SortOrder
    type?: SortOrder
    answerId?: SortOrder
    question?: SortOrder
    test?: TestOrderByWithRelationInput
    options?: OptionOrderByRelationAggregateInput
    answer?: OptionOrderByWithRelationInput
  }

  export type TestStageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    answerId?: number
    AND?: TestStageWhereInput | TestStageWhereInput[]
    OR?: TestStageWhereInput[]
    NOT?: TestStageWhereInput | TestStageWhereInput[]
    testId?: IntFilter<"TestStage"> | number
    type?: EnumTestStageTypeFilter<"TestStage"> | $Enums.TestStageType
    question?: StringFilter<"TestStage"> | string
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
    options?: OptionListRelationFilter
    answer?: XOR<OptionScalarRelationFilter, OptionWhereInput>
  }, "id" | "answerId">

  export type TestStageOrderByWithAggregationInput = {
    id?: SortOrder
    testId?: SortOrder
    type?: SortOrder
    answerId?: SortOrder
    question?: SortOrder
    _count?: TestStageCountOrderByAggregateInput
    _avg?: TestStageAvgOrderByAggregateInput
    _max?: TestStageMaxOrderByAggregateInput
    _min?: TestStageMinOrderByAggregateInput
    _sum?: TestStageSumOrderByAggregateInput
  }

  export type TestStageScalarWhereWithAggregatesInput = {
    AND?: TestStageScalarWhereWithAggregatesInput | TestStageScalarWhereWithAggregatesInput[]
    OR?: TestStageScalarWhereWithAggregatesInput[]
    NOT?: TestStageScalarWhereWithAggregatesInput | TestStageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TestStage"> | number
    testId?: IntWithAggregatesFilter<"TestStage"> | number
    type?: EnumTestStageTypeWithAggregatesFilter<"TestStage"> | $Enums.TestStageType
    answerId?: IntWithAggregatesFilter<"TestStage"> | number
    question?: StringWithAggregatesFilter<"TestStage"> | string
  }

  export type OptionWhereInput = {
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    id?: IntFilter<"Option"> | number
    option?: StringFilter<"Option"> | string
    testStageId?: IntFilter<"Option"> | number
    testStage?: XOR<TestStageScalarRelationFilter, TestStageWhereInput>
    answerFor?: XOR<TestStageNullableScalarRelationFilter, TestStageWhereInput> | null
  }

  export type OptionOrderByWithRelationInput = {
    id?: SortOrder
    option?: SortOrder
    testStageId?: SortOrder
    testStage?: TestStageOrderByWithRelationInput
    answerFor?: TestStageOrderByWithRelationInput
  }

  export type OptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    option?: StringFilter<"Option"> | string
    testStageId?: IntFilter<"Option"> | number
    testStage?: XOR<TestStageScalarRelationFilter, TestStageWhereInput>
    answerFor?: XOR<TestStageNullableScalarRelationFilter, TestStageWhereInput> | null
  }, "id">

  export type OptionOrderByWithAggregationInput = {
    id?: SortOrder
    option?: SortOrder
    testStageId?: SortOrder
    _count?: OptionCountOrderByAggregateInput
    _avg?: OptionAvgOrderByAggregateInput
    _max?: OptionMaxOrderByAggregateInput
    _min?: OptionMinOrderByAggregateInput
    _sum?: OptionSumOrderByAggregateInput
  }

  export type OptionScalarWhereWithAggregatesInput = {
    AND?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    OR?: OptionScalarWhereWithAggregatesInput[]
    NOT?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Option"> | number
    option?: StringWithAggregatesFilter<"Option"> | string
    testStageId?: IntWithAggregatesFilter<"Option"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    role: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ProfileCreateInput = {
    fullname?: string | null
    birthday?: Date | string | null
    avatarUrl?: string | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    fullname?: string | null
    birthday?: Date | string | null
    avatarUrl?: string | null
    userId: number
  }

  export type ProfileUpdateInput = {
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileCreateManyInput = {
    id?: number
    fullname?: string | null
    birthday?: Date | string | null
    avatarUrl?: string | null
    userId: number
  }

  export type ProfileUpdateManyMutationInput = {
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseCreateInput = {
    title: string
    description: string
    imageUrl?: string | null
    chapters?: ChapterCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    imageUrl?: string | null
    chapters?: ChapterUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChapterUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChapterUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    title: string
    description: string
    imageUrl?: string | null
  }

  export type CourseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChapterCreateInput = {
    title: string
    description?: string | null
    course: CourseCreateNestedOneWithoutChaptersInput
    lessons?: LessonCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    courseId: number
    lessons?: LessonUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    course?: CourseUpdateOneRequiredWithoutChaptersNestedInput
    lessons?: LessonUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: IntFieldUpdateOperationsInput | number
    lessons?: LessonUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    courseId: number
  }

  export type ChapterUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChapterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type LessonCreateInput = {
    title: string
    lecture?: string | null
    test?: TestCreateNestedOneWithoutLessonInput
    attachments?: LessonAttachmentCreateNestedManyWithoutLessonInput
    chapter: ChapterCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateInput = {
    id?: number
    title: string
    lecture?: string | null
    chapterId: number
    test?: TestUncheckedCreateNestedOneWithoutLessonInput
    attachments?: LessonAttachmentUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    lecture?: NullableStringFieldUpdateOperationsInput | string | null
    test?: TestUpdateOneWithoutLessonNestedInput
    attachments?: LessonAttachmentUpdateManyWithoutLessonNestedInput
    chapter?: ChapterUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    lecture?: NullableStringFieldUpdateOperationsInput | string | null
    chapterId?: IntFieldUpdateOperationsInput | number
    test?: TestUncheckedUpdateOneWithoutLessonNestedInput
    attachments?: LessonAttachmentUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonCreateManyInput = {
    id?: number
    title: string
    lecture?: string | null
    chapterId: number
  }

  export type LessonUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    lecture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    lecture?: NullableStringFieldUpdateOperationsInput | string | null
    chapterId?: IntFieldUpdateOperationsInput | number
  }

  export type LessonAttachmentCreateInput = {
    url: string
    attachmentType: $Enums.LessonAttachmentType
    lesson: LessonCreateNestedOneWithoutAttachmentsInput
  }

  export type LessonAttachmentUncheckedCreateInput = {
    id?: number
    url: string
    attachmentType: $Enums.LessonAttachmentType
    lessonId: number
  }

  export type LessonAttachmentUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumLessonAttachmentTypeFieldUpdateOperationsInput | $Enums.LessonAttachmentType
    lesson?: LessonUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type LessonAttachmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumLessonAttachmentTypeFieldUpdateOperationsInput | $Enums.LessonAttachmentType
    lessonId?: IntFieldUpdateOperationsInput | number
  }

  export type LessonAttachmentCreateManyInput = {
    id?: number
    url: string
    attachmentType: $Enums.LessonAttachmentType
    lessonId: number
  }

  export type LessonAttachmentUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumLessonAttachmentTypeFieldUpdateOperationsInput | $Enums.LessonAttachmentType
  }

  export type LessonAttachmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumLessonAttachmentTypeFieldUpdateOperationsInput | $Enums.LessonAttachmentType
    lessonId?: IntFieldUpdateOperationsInput | number
  }

  export type TestCreateInput = {
    lesson?: LessonCreateNestedOneWithoutTestInput
    testStages?: TestStageCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateInput = {
    id?: number
    lessonId?: number | null
    testStages?: TestStageUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestUpdateInput = {
    lesson?: LessonUpdateOneWithoutTestNestedInput
    testStages?: TestStageUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: NullableIntFieldUpdateOperationsInput | number | null
    testStages?: TestStageUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestCreateManyInput = {
    id?: number
    lessonId?: number | null
  }

  export type TestUpdateManyMutationInput = {

  }

  export type TestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TestStageCreateInput = {
    type?: $Enums.TestStageType
    question: string
    test: TestCreateNestedOneWithoutTestStagesInput
    options?: OptionCreateNestedManyWithoutTestStageInput
    answer: OptionCreateNestedOneWithoutAnswerForInput
  }

  export type TestStageUncheckedCreateInput = {
    id?: number
    testId: number
    type?: $Enums.TestStageType
    answerId: number
    question: string
    options?: OptionUncheckedCreateNestedManyWithoutTestStageInput
  }

  export type TestStageUpdateInput = {
    type?: EnumTestStageTypeFieldUpdateOperationsInput | $Enums.TestStageType
    question?: StringFieldUpdateOperationsInput | string
    test?: TestUpdateOneRequiredWithoutTestStagesNestedInput
    options?: OptionUpdateManyWithoutTestStageNestedInput
    answer?: OptionUpdateOneRequiredWithoutAnswerForNestedInput
  }

  export type TestStageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
    type?: EnumTestStageTypeFieldUpdateOperationsInput | $Enums.TestStageType
    answerId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: OptionUncheckedUpdateManyWithoutTestStageNestedInput
  }

  export type TestStageCreateManyInput = {
    id?: number
    testId: number
    type?: $Enums.TestStageType
    answerId: number
    question: string
  }

  export type TestStageUpdateManyMutationInput = {
    type?: EnumTestStageTypeFieldUpdateOperationsInput | $Enums.TestStageType
    question?: StringFieldUpdateOperationsInput | string
  }

  export type TestStageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
    type?: EnumTestStageTypeFieldUpdateOperationsInput | $Enums.TestStageType
    answerId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
  }

  export type OptionCreateInput = {
    option: string
    testStage: TestStageCreateNestedOneWithoutOptionsInput
    answerFor?: TestStageCreateNestedOneWithoutAnswerInput
  }

  export type OptionUncheckedCreateInput = {
    id?: number
    option: string
    testStageId: number
    answerFor?: TestStageUncheckedCreateNestedOneWithoutAnswerInput
  }

  export type OptionUpdateInput = {
    option?: StringFieldUpdateOperationsInput | string
    testStage?: TestStageUpdateOneRequiredWithoutOptionsNestedInput
    answerFor?: TestStageUpdateOneWithoutAnswerNestedInput
  }

  export type OptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    option?: StringFieldUpdateOperationsInput | string
    testStageId?: IntFieldUpdateOperationsInput | number
    answerFor?: TestStageUncheckedUpdateOneWithoutAnswerNestedInput
  }

  export type OptionCreateManyInput = {
    id?: number
    option: string
    testStageId: number
  }

  export type OptionUpdateManyMutationInput = {
    option?: StringFieldUpdateOperationsInput | string
  }

  export type OptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    option?: StringFieldUpdateOperationsInput | string
    testStageId?: IntFieldUpdateOperationsInput | number
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    birthday?: SortOrder
    avatarUrl?: SortOrder
    userId?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    birthday?: SortOrder
    avatarUrl?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    birthday?: SortOrder
    avatarUrl?: SortOrder
    userId?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ChapterListRelationFilter = {
    every?: ChapterWhereInput
    some?: ChapterWhereInput
    none?: ChapterWhereInput
  }

  export type ChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChapterCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    courseId?: SortOrder
  }

  export type ChapterAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type ChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    courseId?: SortOrder
  }

  export type ChapterMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    courseId?: SortOrder
  }

  export type ChapterSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type TestNullableScalarRelationFilter = {
    is?: TestWhereInput | null
    isNot?: TestWhereInput | null
  }

  export type LessonAttachmentListRelationFilter = {
    every?: LessonAttachmentWhereInput
    some?: LessonAttachmentWhereInput
    none?: LessonAttachmentWhereInput
  }

  export type ChapterScalarRelationFilter = {
    is?: ChapterWhereInput
    isNot?: ChapterWhereInput
  }

  export type LessonAttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    lecture?: SortOrder
    chapterId?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    id?: SortOrder
    chapterId?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    lecture?: SortOrder
    chapterId?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    lecture?: SortOrder
    chapterId?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    id?: SortOrder
    chapterId?: SortOrder
  }

  export type EnumLessonAttachmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LessonAttachmentType | EnumLessonAttachmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LessonAttachmentType[] | ListEnumLessonAttachmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LessonAttachmentType[] | ListEnumLessonAttachmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLessonAttachmentTypeFilter<$PrismaModel> | $Enums.LessonAttachmentType
  }

  export type LessonScalarRelationFilter = {
    is?: LessonWhereInput
    isNot?: LessonWhereInput
  }

  export type LessonAttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    attachmentType?: SortOrder
    lessonId?: SortOrder
  }

  export type LessonAttachmentAvgOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
  }

  export type LessonAttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    attachmentType?: SortOrder
    lessonId?: SortOrder
  }

  export type LessonAttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    attachmentType?: SortOrder
    lessonId?: SortOrder
  }

  export type LessonAttachmentSumOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
  }

  export type EnumLessonAttachmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LessonAttachmentType | EnumLessonAttachmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LessonAttachmentType[] | ListEnumLessonAttachmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LessonAttachmentType[] | ListEnumLessonAttachmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLessonAttachmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.LessonAttachmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLessonAttachmentTypeFilter<$PrismaModel>
    _max?: NestedEnumLessonAttachmentTypeFilter<$PrismaModel>
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

  export type LessonNullableScalarRelationFilter = {
    is?: LessonWhereInput | null
    isNot?: LessonWhereInput | null
  }

  export type TestStageListRelationFilter = {
    every?: TestStageWhereInput
    some?: TestStageWhereInput
    none?: TestStageWhereInput
  }

  export type TestStageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
  }

  export type TestAvgOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
  }

  export type TestSumOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
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

  export type EnumTestStageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TestStageType | EnumTestStageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TestStageType[] | ListEnumTestStageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestStageType[] | ListEnumTestStageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTestStageTypeFilter<$PrismaModel> | $Enums.TestStageType
  }

  export type TestScalarRelationFilter = {
    is?: TestWhereInput
    isNot?: TestWhereInput
  }

  export type OptionListRelationFilter = {
    every?: OptionWhereInput
    some?: OptionWhereInput
    none?: OptionWhereInput
  }

  export type OptionScalarRelationFilter = {
    is?: OptionWhereInput
    isNot?: OptionWhereInput
  }

  export type OptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestStageCountOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    type?: SortOrder
    answerId?: SortOrder
    question?: SortOrder
  }

  export type TestStageAvgOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    answerId?: SortOrder
  }

  export type TestStageMaxOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    type?: SortOrder
    answerId?: SortOrder
    question?: SortOrder
  }

  export type TestStageMinOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    type?: SortOrder
    answerId?: SortOrder
    question?: SortOrder
  }

  export type TestStageSumOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    answerId?: SortOrder
  }

  export type EnumTestStageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestStageType | EnumTestStageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TestStageType[] | ListEnumTestStageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestStageType[] | ListEnumTestStageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTestStageTypeWithAggregatesFilter<$PrismaModel> | $Enums.TestStageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTestStageTypeFilter<$PrismaModel>
    _max?: NestedEnumTestStageTypeFilter<$PrismaModel>
  }

  export type TestStageScalarRelationFilter = {
    is?: TestStageWhereInput
    isNot?: TestStageWhereInput
  }

  export type TestStageNullableScalarRelationFilter = {
    is?: TestStageWhereInput | null
    isNot?: TestStageWhereInput | null
  }

  export type OptionCountOrderByAggregateInput = {
    id?: SortOrder
    option?: SortOrder
    testStageId?: SortOrder
  }

  export type OptionAvgOrderByAggregateInput = {
    id?: SortOrder
    testStageId?: SortOrder
  }

  export type OptionMaxOrderByAggregateInput = {
    id?: SortOrder
    option?: SortOrder
    testStageId?: SortOrder
  }

  export type OptionMinOrderByAggregateInput = {
    id?: SortOrder
    option?: SortOrder
    testStageId?: SortOrder
  }

  export type OptionSumOrderByAggregateInput = {
    id?: SortOrder
    testStageId?: SortOrder
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type ChapterCreateNestedManyWithoutCourseInput = {
    create?: XOR<ChapterCreateWithoutCourseInput, ChapterUncheckedCreateWithoutCourseInput> | ChapterCreateWithoutCourseInput[] | ChapterUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutCourseInput | ChapterCreateOrConnectWithoutCourseInput[]
    createMany?: ChapterCreateManyCourseInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type ChapterUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ChapterCreateWithoutCourseInput, ChapterUncheckedCreateWithoutCourseInput> | ChapterCreateWithoutCourseInput[] | ChapterUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutCourseInput | ChapterCreateOrConnectWithoutCourseInput[]
    createMany?: ChapterCreateManyCourseInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type ChapterUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ChapterCreateWithoutCourseInput, ChapterUncheckedCreateWithoutCourseInput> | ChapterCreateWithoutCourseInput[] | ChapterUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutCourseInput | ChapterCreateOrConnectWithoutCourseInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutCourseInput | ChapterUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ChapterCreateManyCourseInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutCourseInput | ChapterUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutCourseInput | ChapterUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type ChapterUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ChapterCreateWithoutCourseInput, ChapterUncheckedCreateWithoutCourseInput> | ChapterCreateWithoutCourseInput[] | ChapterUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutCourseInput | ChapterCreateOrConnectWithoutCourseInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutCourseInput | ChapterUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ChapterCreateManyCourseInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutCourseInput | ChapterUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutCourseInput | ChapterUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutChaptersInput = {
    create?: XOR<CourseCreateWithoutChaptersInput, CourseUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutChaptersInput
    connect?: CourseWhereUniqueInput
  }

  export type LessonCreateNestedManyWithoutChapterInput = {
    create?: XOR<LessonCreateWithoutChapterInput, LessonUncheckedCreateWithoutChapterInput> | LessonCreateWithoutChapterInput[] | LessonUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutChapterInput | LessonCreateOrConnectWithoutChapterInput[]
    createMany?: LessonCreateManyChapterInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<LessonCreateWithoutChapterInput, LessonUncheckedCreateWithoutChapterInput> | LessonCreateWithoutChapterInput[] | LessonUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutChapterInput | LessonCreateOrConnectWithoutChapterInput[]
    createMany?: LessonCreateManyChapterInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: XOR<CourseCreateWithoutChaptersInput, CourseUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutChaptersInput
    upsert?: CourseUpsertWithoutChaptersInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutChaptersInput, CourseUpdateWithoutChaptersInput>, CourseUncheckedUpdateWithoutChaptersInput>
  }

  export type LessonUpdateManyWithoutChapterNestedInput = {
    create?: XOR<LessonCreateWithoutChapterInput, LessonUncheckedCreateWithoutChapterInput> | LessonCreateWithoutChapterInput[] | LessonUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutChapterInput | LessonCreateOrConnectWithoutChapterInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutChapterInput | LessonUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: LessonCreateManyChapterInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutChapterInput | LessonUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutChapterInput | LessonUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<LessonCreateWithoutChapterInput, LessonUncheckedCreateWithoutChapterInput> | LessonCreateWithoutChapterInput[] | LessonUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutChapterInput | LessonCreateOrConnectWithoutChapterInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutChapterInput | LessonUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: LessonCreateManyChapterInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutChapterInput | LessonUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutChapterInput | LessonUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type TestCreateNestedOneWithoutLessonInput = {
    create?: XOR<TestCreateWithoutLessonInput, TestUncheckedCreateWithoutLessonInput>
    connectOrCreate?: TestCreateOrConnectWithoutLessonInput
    connect?: TestWhereUniqueInput
  }

  export type LessonAttachmentCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonAttachmentCreateWithoutLessonInput, LessonAttachmentUncheckedCreateWithoutLessonInput> | LessonAttachmentCreateWithoutLessonInput[] | LessonAttachmentUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonAttachmentCreateOrConnectWithoutLessonInput | LessonAttachmentCreateOrConnectWithoutLessonInput[]
    createMany?: LessonAttachmentCreateManyLessonInputEnvelope
    connect?: LessonAttachmentWhereUniqueInput | LessonAttachmentWhereUniqueInput[]
  }

  export type ChapterCreateNestedOneWithoutLessonsInput = {
    create?: XOR<ChapterCreateWithoutLessonsInput, ChapterUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutLessonsInput
    connect?: ChapterWhereUniqueInput
  }

  export type TestUncheckedCreateNestedOneWithoutLessonInput = {
    create?: XOR<TestCreateWithoutLessonInput, TestUncheckedCreateWithoutLessonInput>
    connectOrCreate?: TestCreateOrConnectWithoutLessonInput
    connect?: TestWhereUniqueInput
  }

  export type LessonAttachmentUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonAttachmentCreateWithoutLessonInput, LessonAttachmentUncheckedCreateWithoutLessonInput> | LessonAttachmentCreateWithoutLessonInput[] | LessonAttachmentUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonAttachmentCreateOrConnectWithoutLessonInput | LessonAttachmentCreateOrConnectWithoutLessonInput[]
    createMany?: LessonAttachmentCreateManyLessonInputEnvelope
    connect?: LessonAttachmentWhereUniqueInput | LessonAttachmentWhereUniqueInput[]
  }

  export type TestUpdateOneWithoutLessonNestedInput = {
    create?: XOR<TestCreateWithoutLessonInput, TestUncheckedCreateWithoutLessonInput>
    connectOrCreate?: TestCreateOrConnectWithoutLessonInput
    upsert?: TestUpsertWithoutLessonInput
    disconnect?: TestWhereInput | boolean
    delete?: TestWhereInput | boolean
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutLessonInput, TestUpdateWithoutLessonInput>, TestUncheckedUpdateWithoutLessonInput>
  }

  export type LessonAttachmentUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonAttachmentCreateWithoutLessonInput, LessonAttachmentUncheckedCreateWithoutLessonInput> | LessonAttachmentCreateWithoutLessonInput[] | LessonAttachmentUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonAttachmentCreateOrConnectWithoutLessonInput | LessonAttachmentCreateOrConnectWithoutLessonInput[]
    upsert?: LessonAttachmentUpsertWithWhereUniqueWithoutLessonInput | LessonAttachmentUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonAttachmentCreateManyLessonInputEnvelope
    set?: LessonAttachmentWhereUniqueInput | LessonAttachmentWhereUniqueInput[]
    disconnect?: LessonAttachmentWhereUniqueInput | LessonAttachmentWhereUniqueInput[]
    delete?: LessonAttachmentWhereUniqueInput | LessonAttachmentWhereUniqueInput[]
    connect?: LessonAttachmentWhereUniqueInput | LessonAttachmentWhereUniqueInput[]
    update?: LessonAttachmentUpdateWithWhereUniqueWithoutLessonInput | LessonAttachmentUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonAttachmentUpdateManyWithWhereWithoutLessonInput | LessonAttachmentUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonAttachmentScalarWhereInput | LessonAttachmentScalarWhereInput[]
  }

  export type ChapterUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<ChapterCreateWithoutLessonsInput, ChapterUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutLessonsInput
    upsert?: ChapterUpsertWithoutLessonsInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutLessonsInput, ChapterUpdateWithoutLessonsInput>, ChapterUncheckedUpdateWithoutLessonsInput>
  }

  export type TestUncheckedUpdateOneWithoutLessonNestedInput = {
    create?: XOR<TestCreateWithoutLessonInput, TestUncheckedCreateWithoutLessonInput>
    connectOrCreate?: TestCreateOrConnectWithoutLessonInput
    upsert?: TestUpsertWithoutLessonInput
    disconnect?: TestWhereInput | boolean
    delete?: TestWhereInput | boolean
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutLessonInput, TestUpdateWithoutLessonInput>, TestUncheckedUpdateWithoutLessonInput>
  }

  export type LessonAttachmentUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonAttachmentCreateWithoutLessonInput, LessonAttachmentUncheckedCreateWithoutLessonInput> | LessonAttachmentCreateWithoutLessonInput[] | LessonAttachmentUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonAttachmentCreateOrConnectWithoutLessonInput | LessonAttachmentCreateOrConnectWithoutLessonInput[]
    upsert?: LessonAttachmentUpsertWithWhereUniqueWithoutLessonInput | LessonAttachmentUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonAttachmentCreateManyLessonInputEnvelope
    set?: LessonAttachmentWhereUniqueInput | LessonAttachmentWhereUniqueInput[]
    disconnect?: LessonAttachmentWhereUniqueInput | LessonAttachmentWhereUniqueInput[]
    delete?: LessonAttachmentWhereUniqueInput | LessonAttachmentWhereUniqueInput[]
    connect?: LessonAttachmentWhereUniqueInput | LessonAttachmentWhereUniqueInput[]
    update?: LessonAttachmentUpdateWithWhereUniqueWithoutLessonInput | LessonAttachmentUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonAttachmentUpdateManyWithWhereWithoutLessonInput | LessonAttachmentUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonAttachmentScalarWhereInput | LessonAttachmentScalarWhereInput[]
  }

  export type LessonCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<LessonCreateWithoutAttachmentsInput, LessonUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutAttachmentsInput
    connect?: LessonWhereUniqueInput
  }

  export type EnumLessonAttachmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.LessonAttachmentType
  }

  export type LessonUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<LessonCreateWithoutAttachmentsInput, LessonUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutAttachmentsInput
    upsert?: LessonUpsertWithoutAttachmentsInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutAttachmentsInput, LessonUpdateWithoutAttachmentsInput>, LessonUncheckedUpdateWithoutAttachmentsInput>
  }

  export type LessonCreateNestedOneWithoutTestInput = {
    create?: XOR<LessonCreateWithoutTestInput, LessonUncheckedCreateWithoutTestInput>
    connectOrCreate?: LessonCreateOrConnectWithoutTestInput
    connect?: LessonWhereUniqueInput
  }

  export type TestStageCreateNestedManyWithoutTestInput = {
    create?: XOR<TestStageCreateWithoutTestInput, TestStageUncheckedCreateWithoutTestInput> | TestStageCreateWithoutTestInput[] | TestStageUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TestStageCreateOrConnectWithoutTestInput | TestStageCreateOrConnectWithoutTestInput[]
    createMany?: TestStageCreateManyTestInputEnvelope
    connect?: TestStageWhereUniqueInput | TestStageWhereUniqueInput[]
  }

  export type TestStageUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<TestStageCreateWithoutTestInput, TestStageUncheckedCreateWithoutTestInput> | TestStageCreateWithoutTestInput[] | TestStageUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TestStageCreateOrConnectWithoutTestInput | TestStageCreateOrConnectWithoutTestInput[]
    createMany?: TestStageCreateManyTestInputEnvelope
    connect?: TestStageWhereUniqueInput | TestStageWhereUniqueInput[]
  }

  export type LessonUpdateOneWithoutTestNestedInput = {
    create?: XOR<LessonCreateWithoutTestInput, LessonUncheckedCreateWithoutTestInput>
    connectOrCreate?: LessonCreateOrConnectWithoutTestInput
    upsert?: LessonUpsertWithoutTestInput
    disconnect?: LessonWhereInput | boolean
    delete?: LessonWhereInput | boolean
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutTestInput, LessonUpdateWithoutTestInput>, LessonUncheckedUpdateWithoutTestInput>
  }

  export type TestStageUpdateManyWithoutTestNestedInput = {
    create?: XOR<TestStageCreateWithoutTestInput, TestStageUncheckedCreateWithoutTestInput> | TestStageCreateWithoutTestInput[] | TestStageUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TestStageCreateOrConnectWithoutTestInput | TestStageCreateOrConnectWithoutTestInput[]
    upsert?: TestStageUpsertWithWhereUniqueWithoutTestInput | TestStageUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: TestStageCreateManyTestInputEnvelope
    set?: TestStageWhereUniqueInput | TestStageWhereUniqueInput[]
    disconnect?: TestStageWhereUniqueInput | TestStageWhereUniqueInput[]
    delete?: TestStageWhereUniqueInput | TestStageWhereUniqueInput[]
    connect?: TestStageWhereUniqueInput | TestStageWhereUniqueInput[]
    update?: TestStageUpdateWithWhereUniqueWithoutTestInput | TestStageUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: TestStageUpdateManyWithWhereWithoutTestInput | TestStageUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: TestStageScalarWhereInput | TestStageScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TestStageUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<TestStageCreateWithoutTestInput, TestStageUncheckedCreateWithoutTestInput> | TestStageCreateWithoutTestInput[] | TestStageUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TestStageCreateOrConnectWithoutTestInput | TestStageCreateOrConnectWithoutTestInput[]
    upsert?: TestStageUpsertWithWhereUniqueWithoutTestInput | TestStageUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: TestStageCreateManyTestInputEnvelope
    set?: TestStageWhereUniqueInput | TestStageWhereUniqueInput[]
    disconnect?: TestStageWhereUniqueInput | TestStageWhereUniqueInput[]
    delete?: TestStageWhereUniqueInput | TestStageWhereUniqueInput[]
    connect?: TestStageWhereUniqueInput | TestStageWhereUniqueInput[]
    update?: TestStageUpdateWithWhereUniqueWithoutTestInput | TestStageUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: TestStageUpdateManyWithWhereWithoutTestInput | TestStageUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: TestStageScalarWhereInput | TestStageScalarWhereInput[]
  }

  export type TestCreateNestedOneWithoutTestStagesInput = {
    create?: XOR<TestCreateWithoutTestStagesInput, TestUncheckedCreateWithoutTestStagesInput>
    connectOrCreate?: TestCreateOrConnectWithoutTestStagesInput
    connect?: TestWhereUniqueInput
  }

  export type OptionCreateNestedManyWithoutTestStageInput = {
    create?: XOR<OptionCreateWithoutTestStageInput, OptionUncheckedCreateWithoutTestStageInput> | OptionCreateWithoutTestStageInput[] | OptionUncheckedCreateWithoutTestStageInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutTestStageInput | OptionCreateOrConnectWithoutTestStageInput[]
    createMany?: OptionCreateManyTestStageInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type OptionCreateNestedOneWithoutAnswerForInput = {
    create?: XOR<OptionCreateWithoutAnswerForInput, OptionUncheckedCreateWithoutAnswerForInput>
    connectOrCreate?: OptionCreateOrConnectWithoutAnswerForInput
    connect?: OptionWhereUniqueInput
  }

  export type OptionUncheckedCreateNestedManyWithoutTestStageInput = {
    create?: XOR<OptionCreateWithoutTestStageInput, OptionUncheckedCreateWithoutTestStageInput> | OptionCreateWithoutTestStageInput[] | OptionUncheckedCreateWithoutTestStageInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutTestStageInput | OptionCreateOrConnectWithoutTestStageInput[]
    createMany?: OptionCreateManyTestStageInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type EnumTestStageTypeFieldUpdateOperationsInput = {
    set?: $Enums.TestStageType
  }

  export type TestUpdateOneRequiredWithoutTestStagesNestedInput = {
    create?: XOR<TestCreateWithoutTestStagesInput, TestUncheckedCreateWithoutTestStagesInput>
    connectOrCreate?: TestCreateOrConnectWithoutTestStagesInput
    upsert?: TestUpsertWithoutTestStagesInput
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutTestStagesInput, TestUpdateWithoutTestStagesInput>, TestUncheckedUpdateWithoutTestStagesInput>
  }

  export type OptionUpdateManyWithoutTestStageNestedInput = {
    create?: XOR<OptionCreateWithoutTestStageInput, OptionUncheckedCreateWithoutTestStageInput> | OptionCreateWithoutTestStageInput[] | OptionUncheckedCreateWithoutTestStageInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutTestStageInput | OptionCreateOrConnectWithoutTestStageInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutTestStageInput | OptionUpsertWithWhereUniqueWithoutTestStageInput[]
    createMany?: OptionCreateManyTestStageInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutTestStageInput | OptionUpdateWithWhereUniqueWithoutTestStageInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutTestStageInput | OptionUpdateManyWithWhereWithoutTestStageInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type OptionUpdateOneRequiredWithoutAnswerForNestedInput = {
    create?: XOR<OptionCreateWithoutAnswerForInput, OptionUncheckedCreateWithoutAnswerForInput>
    connectOrCreate?: OptionCreateOrConnectWithoutAnswerForInput
    upsert?: OptionUpsertWithoutAnswerForInput
    connect?: OptionWhereUniqueInput
    update?: XOR<XOR<OptionUpdateToOneWithWhereWithoutAnswerForInput, OptionUpdateWithoutAnswerForInput>, OptionUncheckedUpdateWithoutAnswerForInput>
  }

  export type OptionUncheckedUpdateManyWithoutTestStageNestedInput = {
    create?: XOR<OptionCreateWithoutTestStageInput, OptionUncheckedCreateWithoutTestStageInput> | OptionCreateWithoutTestStageInput[] | OptionUncheckedCreateWithoutTestStageInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutTestStageInput | OptionCreateOrConnectWithoutTestStageInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutTestStageInput | OptionUpsertWithWhereUniqueWithoutTestStageInput[]
    createMany?: OptionCreateManyTestStageInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutTestStageInput | OptionUpdateWithWhereUniqueWithoutTestStageInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutTestStageInput | OptionUpdateManyWithWhereWithoutTestStageInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type TestStageCreateNestedOneWithoutOptionsInput = {
    create?: XOR<TestStageCreateWithoutOptionsInput, TestStageUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: TestStageCreateOrConnectWithoutOptionsInput
    connect?: TestStageWhereUniqueInput
  }

  export type TestStageCreateNestedOneWithoutAnswerInput = {
    create?: XOR<TestStageCreateWithoutAnswerInput, TestStageUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: TestStageCreateOrConnectWithoutAnswerInput
    connect?: TestStageWhereUniqueInput
  }

  export type TestStageUncheckedCreateNestedOneWithoutAnswerInput = {
    create?: XOR<TestStageCreateWithoutAnswerInput, TestStageUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: TestStageCreateOrConnectWithoutAnswerInput
    connect?: TestStageWhereUniqueInput
  }

  export type TestStageUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<TestStageCreateWithoutOptionsInput, TestStageUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: TestStageCreateOrConnectWithoutOptionsInput
    upsert?: TestStageUpsertWithoutOptionsInput
    connect?: TestStageWhereUniqueInput
    update?: XOR<XOR<TestStageUpdateToOneWithWhereWithoutOptionsInput, TestStageUpdateWithoutOptionsInput>, TestStageUncheckedUpdateWithoutOptionsInput>
  }

  export type TestStageUpdateOneWithoutAnswerNestedInput = {
    create?: XOR<TestStageCreateWithoutAnswerInput, TestStageUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: TestStageCreateOrConnectWithoutAnswerInput
    upsert?: TestStageUpsertWithoutAnswerInput
    disconnect?: TestStageWhereInput | boolean
    delete?: TestStageWhereInput | boolean
    connect?: TestStageWhereUniqueInput
    update?: XOR<XOR<TestStageUpdateToOneWithWhereWithoutAnswerInput, TestStageUpdateWithoutAnswerInput>, TestStageUncheckedUpdateWithoutAnswerInput>
  }

  export type TestStageUncheckedUpdateOneWithoutAnswerNestedInput = {
    create?: XOR<TestStageCreateWithoutAnswerInput, TestStageUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: TestStageCreateOrConnectWithoutAnswerInput
    upsert?: TestStageUpsertWithoutAnswerInput
    disconnect?: TestStageWhereInput | boolean
    delete?: TestStageWhereInput | boolean
    connect?: TestStageWhereUniqueInput
    update?: XOR<XOR<TestStageUpdateToOneWithWhereWithoutAnswerInput, TestStageUpdateWithoutAnswerInput>, TestStageUncheckedUpdateWithoutAnswerInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumLessonAttachmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LessonAttachmentType | EnumLessonAttachmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LessonAttachmentType[] | ListEnumLessonAttachmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LessonAttachmentType[] | ListEnumLessonAttachmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLessonAttachmentTypeFilter<$PrismaModel> | $Enums.LessonAttachmentType
  }

  export type NestedEnumLessonAttachmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LessonAttachmentType | EnumLessonAttachmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LessonAttachmentType[] | ListEnumLessonAttachmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LessonAttachmentType[] | ListEnumLessonAttachmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLessonAttachmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.LessonAttachmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLessonAttachmentTypeFilter<$PrismaModel>
    _max?: NestedEnumLessonAttachmentTypeFilter<$PrismaModel>
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

  export type NestedEnumTestStageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TestStageType | EnumTestStageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TestStageType[] | ListEnumTestStageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestStageType[] | ListEnumTestStageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTestStageTypeFilter<$PrismaModel> | $Enums.TestStageType
  }

  export type NestedEnumTestStageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestStageType | EnumTestStageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TestStageType[] | ListEnumTestStageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestStageType[] | ListEnumTestStageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTestStageTypeWithAggregatesFilter<$PrismaModel> | $Enums.TestStageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTestStageTypeFilter<$PrismaModel>
    _max?: NestedEnumTestStageTypeFilter<$PrismaModel>
  }

  export type ProfileCreateWithoutUserInput = {
    fullname?: string | null
    birthday?: Date | string | null
    avatarUrl?: string | null
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    fullname?: string | null
    birthday?: Date | string | null
    avatarUrl?: string | null
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutProfileInput = {
    email: string
    password: string
    role: $Enums.Role
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ChapterCreateWithoutCourseInput = {
    title: string
    description?: string | null
    lessons?: LessonCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutCourseInput = {
    id?: number
    title: string
    description?: string | null
    lessons?: LessonUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutCourseInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutCourseInput, ChapterUncheckedCreateWithoutCourseInput>
  }

  export type ChapterCreateManyCourseInputEnvelope = {
    data: ChapterCreateManyCourseInput | ChapterCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type ChapterUpsertWithWhereUniqueWithoutCourseInput = {
    where: ChapterWhereUniqueInput
    update: XOR<ChapterUpdateWithoutCourseInput, ChapterUncheckedUpdateWithoutCourseInput>
    create: XOR<ChapterCreateWithoutCourseInput, ChapterUncheckedCreateWithoutCourseInput>
  }

  export type ChapterUpdateWithWhereUniqueWithoutCourseInput = {
    where: ChapterWhereUniqueInput
    data: XOR<ChapterUpdateWithoutCourseInput, ChapterUncheckedUpdateWithoutCourseInput>
  }

  export type ChapterUpdateManyWithWhereWithoutCourseInput = {
    where: ChapterScalarWhereInput
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyWithoutCourseInput>
  }

  export type ChapterScalarWhereInput = {
    AND?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    OR?: ChapterScalarWhereInput[]
    NOT?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    id?: IntFilter<"Chapter"> | number
    title?: StringFilter<"Chapter"> | string
    description?: StringNullableFilter<"Chapter"> | string | null
    courseId?: IntFilter<"Chapter"> | number
  }

  export type CourseCreateWithoutChaptersInput = {
    title: string
    description: string
    imageUrl?: string | null
  }

  export type CourseUncheckedCreateWithoutChaptersInput = {
    id?: number
    title: string
    description: string
    imageUrl?: string | null
  }

  export type CourseCreateOrConnectWithoutChaptersInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutChaptersInput, CourseUncheckedCreateWithoutChaptersInput>
  }

  export type LessonCreateWithoutChapterInput = {
    title: string
    lecture?: string | null
    test?: TestCreateNestedOneWithoutLessonInput
    attachments?: LessonAttachmentCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutChapterInput = {
    id?: number
    title: string
    lecture?: string | null
    test?: TestUncheckedCreateNestedOneWithoutLessonInput
    attachments?: LessonAttachmentUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutChapterInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutChapterInput, LessonUncheckedCreateWithoutChapterInput>
  }

  export type LessonCreateManyChapterInputEnvelope = {
    data: LessonCreateManyChapterInput | LessonCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutChaptersInput = {
    update: XOR<CourseUpdateWithoutChaptersInput, CourseUncheckedUpdateWithoutChaptersInput>
    create: XOR<CourseCreateWithoutChaptersInput, CourseUncheckedCreateWithoutChaptersInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutChaptersInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutChaptersInput, CourseUncheckedUpdateWithoutChaptersInput>
  }

  export type CourseUpdateWithoutChaptersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUncheckedUpdateWithoutChaptersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LessonUpsertWithWhereUniqueWithoutChapterInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutChapterInput, LessonUncheckedUpdateWithoutChapterInput>
    create: XOR<LessonCreateWithoutChapterInput, LessonUncheckedCreateWithoutChapterInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutChapterInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutChapterInput, LessonUncheckedUpdateWithoutChapterInput>
  }

  export type LessonUpdateManyWithWhereWithoutChapterInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutChapterInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: IntFilter<"Lesson"> | number
    title?: StringFilter<"Lesson"> | string
    lecture?: StringNullableFilter<"Lesson"> | string | null
    chapterId?: IntFilter<"Lesson"> | number
  }

  export type TestCreateWithoutLessonInput = {
    testStages?: TestStageCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutLessonInput = {
    id?: number
    testStages?: TestStageUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutLessonInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutLessonInput, TestUncheckedCreateWithoutLessonInput>
  }

  export type LessonAttachmentCreateWithoutLessonInput = {
    url: string
    attachmentType: $Enums.LessonAttachmentType
  }

  export type LessonAttachmentUncheckedCreateWithoutLessonInput = {
    id?: number
    url: string
    attachmentType: $Enums.LessonAttachmentType
  }

  export type LessonAttachmentCreateOrConnectWithoutLessonInput = {
    where: LessonAttachmentWhereUniqueInput
    create: XOR<LessonAttachmentCreateWithoutLessonInput, LessonAttachmentUncheckedCreateWithoutLessonInput>
  }

  export type LessonAttachmentCreateManyLessonInputEnvelope = {
    data: LessonAttachmentCreateManyLessonInput | LessonAttachmentCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type ChapterCreateWithoutLessonsInput = {
    title: string
    description?: string | null
    course: CourseCreateNestedOneWithoutChaptersInput
  }

  export type ChapterUncheckedCreateWithoutLessonsInput = {
    id?: number
    title: string
    description?: string | null
    courseId: number
  }

  export type ChapterCreateOrConnectWithoutLessonsInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutLessonsInput, ChapterUncheckedCreateWithoutLessonsInput>
  }

  export type TestUpsertWithoutLessonInput = {
    update: XOR<TestUpdateWithoutLessonInput, TestUncheckedUpdateWithoutLessonInput>
    create: XOR<TestCreateWithoutLessonInput, TestUncheckedCreateWithoutLessonInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutLessonInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutLessonInput, TestUncheckedUpdateWithoutLessonInput>
  }

  export type TestUpdateWithoutLessonInput = {
    testStages?: TestStageUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    testStages?: TestStageUncheckedUpdateManyWithoutTestNestedInput
  }

  export type LessonAttachmentUpsertWithWhereUniqueWithoutLessonInput = {
    where: LessonAttachmentWhereUniqueInput
    update: XOR<LessonAttachmentUpdateWithoutLessonInput, LessonAttachmentUncheckedUpdateWithoutLessonInput>
    create: XOR<LessonAttachmentCreateWithoutLessonInput, LessonAttachmentUncheckedCreateWithoutLessonInput>
  }

  export type LessonAttachmentUpdateWithWhereUniqueWithoutLessonInput = {
    where: LessonAttachmentWhereUniqueInput
    data: XOR<LessonAttachmentUpdateWithoutLessonInput, LessonAttachmentUncheckedUpdateWithoutLessonInput>
  }

  export type LessonAttachmentUpdateManyWithWhereWithoutLessonInput = {
    where: LessonAttachmentScalarWhereInput
    data: XOR<LessonAttachmentUpdateManyMutationInput, LessonAttachmentUncheckedUpdateManyWithoutLessonInput>
  }

  export type LessonAttachmentScalarWhereInput = {
    AND?: LessonAttachmentScalarWhereInput | LessonAttachmentScalarWhereInput[]
    OR?: LessonAttachmentScalarWhereInput[]
    NOT?: LessonAttachmentScalarWhereInput | LessonAttachmentScalarWhereInput[]
    id?: IntFilter<"LessonAttachment"> | number
    url?: StringFilter<"LessonAttachment"> | string
    attachmentType?: EnumLessonAttachmentTypeFilter<"LessonAttachment"> | $Enums.LessonAttachmentType
    lessonId?: IntFilter<"LessonAttachment"> | number
  }

  export type ChapterUpsertWithoutLessonsInput = {
    update: XOR<ChapterUpdateWithoutLessonsInput, ChapterUncheckedUpdateWithoutLessonsInput>
    create: XOR<ChapterCreateWithoutLessonsInput, ChapterUncheckedCreateWithoutLessonsInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutLessonsInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutLessonsInput, ChapterUncheckedUpdateWithoutLessonsInput>
  }

  export type ChapterUpdateWithoutLessonsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    course?: CourseUpdateOneRequiredWithoutChaptersNestedInput
  }

  export type ChapterUncheckedUpdateWithoutLessonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type LessonCreateWithoutAttachmentsInput = {
    title: string
    lecture?: string | null
    test?: TestCreateNestedOneWithoutLessonInput
    chapter: ChapterCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateWithoutAttachmentsInput = {
    id?: number
    title: string
    lecture?: string | null
    chapterId: number
    test?: TestUncheckedCreateNestedOneWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutAttachmentsInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutAttachmentsInput, LessonUncheckedCreateWithoutAttachmentsInput>
  }

  export type LessonUpsertWithoutAttachmentsInput = {
    update: XOR<LessonUpdateWithoutAttachmentsInput, LessonUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<LessonCreateWithoutAttachmentsInput, LessonUncheckedCreateWithoutAttachmentsInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutAttachmentsInput, LessonUncheckedUpdateWithoutAttachmentsInput>
  }

  export type LessonUpdateWithoutAttachmentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    lecture?: NullableStringFieldUpdateOperationsInput | string | null
    test?: TestUpdateOneWithoutLessonNestedInput
    chapter?: ChapterUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateWithoutAttachmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    lecture?: NullableStringFieldUpdateOperationsInput | string | null
    chapterId?: IntFieldUpdateOperationsInput | number
    test?: TestUncheckedUpdateOneWithoutLessonNestedInput
  }

  export type LessonCreateWithoutTestInput = {
    title: string
    lecture?: string | null
    attachments?: LessonAttachmentCreateNestedManyWithoutLessonInput
    chapter: ChapterCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateWithoutTestInput = {
    id?: number
    title: string
    lecture?: string | null
    chapterId: number
    attachments?: LessonAttachmentUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutTestInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutTestInput, LessonUncheckedCreateWithoutTestInput>
  }

  export type TestStageCreateWithoutTestInput = {
    type?: $Enums.TestStageType
    question: string
    options?: OptionCreateNestedManyWithoutTestStageInput
    answer: OptionCreateNestedOneWithoutAnswerForInput
  }

  export type TestStageUncheckedCreateWithoutTestInput = {
    id?: number
    type?: $Enums.TestStageType
    answerId: number
    question: string
    options?: OptionUncheckedCreateNestedManyWithoutTestStageInput
  }

  export type TestStageCreateOrConnectWithoutTestInput = {
    where: TestStageWhereUniqueInput
    create: XOR<TestStageCreateWithoutTestInput, TestStageUncheckedCreateWithoutTestInput>
  }

  export type TestStageCreateManyTestInputEnvelope = {
    data: TestStageCreateManyTestInput | TestStageCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type LessonUpsertWithoutTestInput = {
    update: XOR<LessonUpdateWithoutTestInput, LessonUncheckedUpdateWithoutTestInput>
    create: XOR<LessonCreateWithoutTestInput, LessonUncheckedCreateWithoutTestInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutTestInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutTestInput, LessonUncheckedUpdateWithoutTestInput>
  }

  export type LessonUpdateWithoutTestInput = {
    title?: StringFieldUpdateOperationsInput | string
    lecture?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: LessonAttachmentUpdateManyWithoutLessonNestedInput
    chapter?: ChapterUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateWithoutTestInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    lecture?: NullableStringFieldUpdateOperationsInput | string | null
    chapterId?: IntFieldUpdateOperationsInput | number
    attachments?: LessonAttachmentUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type TestStageUpsertWithWhereUniqueWithoutTestInput = {
    where: TestStageWhereUniqueInput
    update: XOR<TestStageUpdateWithoutTestInput, TestStageUncheckedUpdateWithoutTestInput>
    create: XOR<TestStageCreateWithoutTestInput, TestStageUncheckedCreateWithoutTestInput>
  }

  export type TestStageUpdateWithWhereUniqueWithoutTestInput = {
    where: TestStageWhereUniqueInput
    data: XOR<TestStageUpdateWithoutTestInput, TestStageUncheckedUpdateWithoutTestInput>
  }

  export type TestStageUpdateManyWithWhereWithoutTestInput = {
    where: TestStageScalarWhereInput
    data: XOR<TestStageUpdateManyMutationInput, TestStageUncheckedUpdateManyWithoutTestInput>
  }

  export type TestStageScalarWhereInput = {
    AND?: TestStageScalarWhereInput | TestStageScalarWhereInput[]
    OR?: TestStageScalarWhereInput[]
    NOT?: TestStageScalarWhereInput | TestStageScalarWhereInput[]
    id?: IntFilter<"TestStage"> | number
    testId?: IntFilter<"TestStage"> | number
    type?: EnumTestStageTypeFilter<"TestStage"> | $Enums.TestStageType
    answerId?: IntFilter<"TestStage"> | number
    question?: StringFilter<"TestStage"> | string
  }

  export type TestCreateWithoutTestStagesInput = {
    lesson?: LessonCreateNestedOneWithoutTestInput
  }

  export type TestUncheckedCreateWithoutTestStagesInput = {
    id?: number
    lessonId?: number | null
  }

  export type TestCreateOrConnectWithoutTestStagesInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutTestStagesInput, TestUncheckedCreateWithoutTestStagesInput>
  }

  export type OptionCreateWithoutTestStageInput = {
    option: string
    answerFor?: TestStageCreateNestedOneWithoutAnswerInput
  }

  export type OptionUncheckedCreateWithoutTestStageInput = {
    id?: number
    option: string
    answerFor?: TestStageUncheckedCreateNestedOneWithoutAnswerInput
  }

  export type OptionCreateOrConnectWithoutTestStageInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutTestStageInput, OptionUncheckedCreateWithoutTestStageInput>
  }

  export type OptionCreateManyTestStageInputEnvelope = {
    data: OptionCreateManyTestStageInput | OptionCreateManyTestStageInput[]
    skipDuplicates?: boolean
  }

  export type OptionCreateWithoutAnswerForInput = {
    option: string
    testStage: TestStageCreateNestedOneWithoutOptionsInput
  }

  export type OptionUncheckedCreateWithoutAnswerForInput = {
    id?: number
    option: string
    testStageId: number
  }

  export type OptionCreateOrConnectWithoutAnswerForInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutAnswerForInput, OptionUncheckedCreateWithoutAnswerForInput>
  }

  export type TestUpsertWithoutTestStagesInput = {
    update: XOR<TestUpdateWithoutTestStagesInput, TestUncheckedUpdateWithoutTestStagesInput>
    create: XOR<TestCreateWithoutTestStagesInput, TestUncheckedCreateWithoutTestStagesInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutTestStagesInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutTestStagesInput, TestUncheckedUpdateWithoutTestStagesInput>
  }

  export type TestUpdateWithoutTestStagesInput = {
    lesson?: LessonUpdateOneWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutTestStagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OptionUpsertWithWhereUniqueWithoutTestStageInput = {
    where: OptionWhereUniqueInput
    update: XOR<OptionUpdateWithoutTestStageInput, OptionUncheckedUpdateWithoutTestStageInput>
    create: XOR<OptionCreateWithoutTestStageInput, OptionUncheckedCreateWithoutTestStageInput>
  }

  export type OptionUpdateWithWhereUniqueWithoutTestStageInput = {
    where: OptionWhereUniqueInput
    data: XOR<OptionUpdateWithoutTestStageInput, OptionUncheckedUpdateWithoutTestStageInput>
  }

  export type OptionUpdateManyWithWhereWithoutTestStageInput = {
    where: OptionScalarWhereInput
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyWithoutTestStageInput>
  }

  export type OptionScalarWhereInput = {
    AND?: OptionScalarWhereInput | OptionScalarWhereInput[]
    OR?: OptionScalarWhereInput[]
    NOT?: OptionScalarWhereInput | OptionScalarWhereInput[]
    id?: IntFilter<"Option"> | number
    option?: StringFilter<"Option"> | string
    testStageId?: IntFilter<"Option"> | number
  }

  export type OptionUpsertWithoutAnswerForInput = {
    update: XOR<OptionUpdateWithoutAnswerForInput, OptionUncheckedUpdateWithoutAnswerForInput>
    create: XOR<OptionCreateWithoutAnswerForInput, OptionUncheckedCreateWithoutAnswerForInput>
    where?: OptionWhereInput
  }

  export type OptionUpdateToOneWithWhereWithoutAnswerForInput = {
    where?: OptionWhereInput
    data: XOR<OptionUpdateWithoutAnswerForInput, OptionUncheckedUpdateWithoutAnswerForInput>
  }

  export type OptionUpdateWithoutAnswerForInput = {
    option?: StringFieldUpdateOperationsInput | string
    testStage?: TestStageUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type OptionUncheckedUpdateWithoutAnswerForInput = {
    id?: IntFieldUpdateOperationsInput | number
    option?: StringFieldUpdateOperationsInput | string
    testStageId?: IntFieldUpdateOperationsInput | number
  }

  export type TestStageCreateWithoutOptionsInput = {
    type?: $Enums.TestStageType
    question: string
    test: TestCreateNestedOneWithoutTestStagesInput
    answer: OptionCreateNestedOneWithoutAnswerForInput
  }

  export type TestStageUncheckedCreateWithoutOptionsInput = {
    id?: number
    testId: number
    type?: $Enums.TestStageType
    answerId: number
    question: string
  }

  export type TestStageCreateOrConnectWithoutOptionsInput = {
    where: TestStageWhereUniqueInput
    create: XOR<TestStageCreateWithoutOptionsInput, TestStageUncheckedCreateWithoutOptionsInput>
  }

  export type TestStageCreateWithoutAnswerInput = {
    type?: $Enums.TestStageType
    question: string
    test: TestCreateNestedOneWithoutTestStagesInput
    options?: OptionCreateNestedManyWithoutTestStageInput
  }

  export type TestStageUncheckedCreateWithoutAnswerInput = {
    id?: number
    testId: number
    type?: $Enums.TestStageType
    question: string
    options?: OptionUncheckedCreateNestedManyWithoutTestStageInput
  }

  export type TestStageCreateOrConnectWithoutAnswerInput = {
    where: TestStageWhereUniqueInput
    create: XOR<TestStageCreateWithoutAnswerInput, TestStageUncheckedCreateWithoutAnswerInput>
  }

  export type TestStageUpsertWithoutOptionsInput = {
    update: XOR<TestStageUpdateWithoutOptionsInput, TestStageUncheckedUpdateWithoutOptionsInput>
    create: XOR<TestStageCreateWithoutOptionsInput, TestStageUncheckedCreateWithoutOptionsInput>
    where?: TestStageWhereInput
  }

  export type TestStageUpdateToOneWithWhereWithoutOptionsInput = {
    where?: TestStageWhereInput
    data: XOR<TestStageUpdateWithoutOptionsInput, TestStageUncheckedUpdateWithoutOptionsInput>
  }

  export type TestStageUpdateWithoutOptionsInput = {
    type?: EnumTestStageTypeFieldUpdateOperationsInput | $Enums.TestStageType
    question?: StringFieldUpdateOperationsInput | string
    test?: TestUpdateOneRequiredWithoutTestStagesNestedInput
    answer?: OptionUpdateOneRequiredWithoutAnswerForNestedInput
  }

  export type TestStageUncheckedUpdateWithoutOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
    type?: EnumTestStageTypeFieldUpdateOperationsInput | $Enums.TestStageType
    answerId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
  }

  export type TestStageUpsertWithoutAnswerInput = {
    update: XOR<TestStageUpdateWithoutAnswerInput, TestStageUncheckedUpdateWithoutAnswerInput>
    create: XOR<TestStageCreateWithoutAnswerInput, TestStageUncheckedCreateWithoutAnswerInput>
    where?: TestStageWhereInput
  }

  export type TestStageUpdateToOneWithWhereWithoutAnswerInput = {
    where?: TestStageWhereInput
    data: XOR<TestStageUpdateWithoutAnswerInput, TestStageUncheckedUpdateWithoutAnswerInput>
  }

  export type TestStageUpdateWithoutAnswerInput = {
    type?: EnumTestStageTypeFieldUpdateOperationsInput | $Enums.TestStageType
    question?: StringFieldUpdateOperationsInput | string
    test?: TestUpdateOneRequiredWithoutTestStagesNestedInput
    options?: OptionUpdateManyWithoutTestStageNestedInput
  }

  export type TestStageUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
    type?: EnumTestStageTypeFieldUpdateOperationsInput | $Enums.TestStageType
    question?: StringFieldUpdateOperationsInput | string
    options?: OptionUncheckedUpdateManyWithoutTestStageNestedInput
  }

  export type ChapterCreateManyCourseInput = {
    id?: number
    title: string
    description?: string | null
  }

  export type ChapterUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lessons?: LessonUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lessons?: LessonUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LessonCreateManyChapterInput = {
    id?: number
    title: string
    lecture?: string | null
  }

  export type LessonUpdateWithoutChapterInput = {
    title?: StringFieldUpdateOperationsInput | string
    lecture?: NullableStringFieldUpdateOperationsInput | string | null
    test?: TestUpdateOneWithoutLessonNestedInput
    attachments?: LessonAttachmentUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutChapterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    lecture?: NullableStringFieldUpdateOperationsInput | string | null
    test?: TestUncheckedUpdateOneWithoutLessonNestedInput
    attachments?: LessonAttachmentUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutChapterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    lecture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LessonAttachmentCreateManyLessonInput = {
    id?: number
    url: string
    attachmentType: $Enums.LessonAttachmentType
  }

  export type LessonAttachmentUpdateWithoutLessonInput = {
    url?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumLessonAttachmentTypeFieldUpdateOperationsInput | $Enums.LessonAttachmentType
  }

  export type LessonAttachmentUncheckedUpdateWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumLessonAttachmentTypeFieldUpdateOperationsInput | $Enums.LessonAttachmentType
  }

  export type LessonAttachmentUncheckedUpdateManyWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    attachmentType?: EnumLessonAttachmentTypeFieldUpdateOperationsInput | $Enums.LessonAttachmentType
  }

  export type TestStageCreateManyTestInput = {
    id?: number
    type?: $Enums.TestStageType
    answerId: number
    question: string
  }

  export type TestStageUpdateWithoutTestInput = {
    type?: EnumTestStageTypeFieldUpdateOperationsInput | $Enums.TestStageType
    question?: StringFieldUpdateOperationsInput | string
    options?: OptionUpdateManyWithoutTestStageNestedInput
    answer?: OptionUpdateOneRequiredWithoutAnswerForNestedInput
  }

  export type TestStageUncheckedUpdateWithoutTestInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTestStageTypeFieldUpdateOperationsInput | $Enums.TestStageType
    answerId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: OptionUncheckedUpdateManyWithoutTestStageNestedInput
  }

  export type TestStageUncheckedUpdateManyWithoutTestInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTestStageTypeFieldUpdateOperationsInput | $Enums.TestStageType
    answerId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
  }

  export type OptionCreateManyTestStageInput = {
    id?: number
    option: string
  }

  export type OptionUpdateWithoutTestStageInput = {
    option?: StringFieldUpdateOperationsInput | string
    answerFor?: TestStageUpdateOneWithoutAnswerNestedInput
  }

  export type OptionUncheckedUpdateWithoutTestStageInput = {
    id?: IntFieldUpdateOperationsInput | number
    option?: StringFieldUpdateOperationsInput | string
    answerFor?: TestStageUncheckedUpdateOneWithoutAnswerNestedInput
  }

  export type OptionUncheckedUpdateManyWithoutTestStageInput = {
    id?: IntFieldUpdateOperationsInput | number
    option?: StringFieldUpdateOperationsInput | string
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