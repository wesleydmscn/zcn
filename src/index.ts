import * as zod from "zod";
import * as validators from "./validators";

const z = Object.assign({}, zod, validators) as typeof zod & typeof validators;

namespace z {
  export type infer<T extends zod.ZodTypeAny> = zod.infer<T>;
  export type ZodTypeAny = zod.ZodTypeAny;
  export type ZodObject<T extends zod.ZodRawShape> = zod.ZodObject<T>;
  export type ZodString = zod.ZodString;
  export type ZodNumber = zod.ZodNumber;
  export type ZodBoolean = zod.ZodBoolean;
  export type ZodArray<T extends zod.ZodTypeAny> = zod.ZodArray<T>;
  export type ZodLiteral<T extends zod.core.util.Literal> = zod.ZodLiteral<T>;
  export type ZodUnion<T extends [zod.ZodTypeAny, ...zod.ZodTypeAny[]]> = zod.ZodUnion<T>;
  export type ZodIntersection<T extends zod.ZodTypeAny, U extends zod.ZodTypeAny> = zod.ZodIntersection<T, U>;
  export type ZodOptional<T extends zod.ZodTypeAny> = zod.ZodOptional<T>;
  export type ZodNullable<T extends zod.ZodTypeAny> = zod.ZodNullable<T>;
}

export { z }
