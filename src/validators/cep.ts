import { z } from "zod";

function isValidCEP(value: string): boolean {
  const cep = value.replace(/\D/g, "");

  if (!/^\d{8}$/.test(cep)) return false;
  if (/^(\d)\1{7}$/.test(cep)) return false; // ex: 11111111, 00000000, 99999999

  const cepNum = parseInt(cep, 10);
  if (cepNum < 1000000 || cepNum > 98999999) return false;

  return true;
}

export const cep = (params?: $ZcnValidationParams) =>
  z
    .string()
    .regex(/^\d{5}-?\d{3}$/, params)
    .refine(isValidCEP, params);
