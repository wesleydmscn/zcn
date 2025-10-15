import { z } from "zod";

function isValidCEP(value: string): boolean {
  const cep = value.replace(/\D/g, "");

  if (!/^\d{8}$/.test(cep)) return false;
  if (/^(\d)\1{7}$/.test(cep)) return false; // ex: 11111111

  return true;
}

export const cep = z
  .string()
  .min(8, "CEP deve ter 8 dígitos")
  .max(9, "CEP inválido")
  .refine(isValidCEP, {
    message: "CEP inválido",
  });
