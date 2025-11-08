import { z } from "zod";

export const nodeEnv = (params?: $ZcnValidationParams) => {
  return z.enum(["production", "development", "test", "staging"], params);
};
