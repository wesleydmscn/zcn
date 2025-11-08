import { z } from "zod";

export const port = (params?: $ZcnValidationParams) => {
  return z
    .string(params)
    .regex(/^\d+$/, params)
    .refine((val) => {
      const num = Number(val);
      return num >= 0 && num <= 65535;
    }, params);
};

export const portNumber = (params?: $ZcnValidationParams) => {
  return z.coerce.number(params).int(params).min(0, params).max(65535, params);
};
