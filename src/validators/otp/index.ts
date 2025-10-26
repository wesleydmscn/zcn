import { z } from "zod";

type OTPParams = Partial<$ZcnValidationParams> & { min?: number; max?: number };

export const otp = (params?: OTPParams) => {
  let min = params?.min ?? 4;
  let max = params?.max ?? 8;

  if (min > max) [min, max] = [max, min];

  const regex = new RegExp(`^\\d{${min},${max}}$`);

  return z
    .string({ error: params?.error })
    .regex(regex, { error: params?.error });
};
