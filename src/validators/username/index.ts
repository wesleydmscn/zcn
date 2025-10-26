import { z } from "zod";

const USERNAME_REGEX = /^(?!.*[_.]{2})[a-zA-Z][a-zA-Z0-9._]{1,18}[a-zA-Z0-9]$/;

export const username = (params?: $ZcnValidationParams) =>
  z.string(params).min(3, params).max(20, params).regex(USERNAME_REGEX, params);
