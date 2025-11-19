import { z } from "zod";

type OTPParams = Partial<$ZcnValidationParams> & {
  length?: number;
};

export const otp = (params?: OTPParams) => {
  const length = params?.length ?? 6;
  const regex = new RegExp(`^\\d{${length}}$`);

  return z
    .string({ error: params?.error })
    .regex(regex, { error: params?.error });
};
