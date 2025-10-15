import { z } from "zod";

function isValidPhoneBR(value: string): boolean {
  const digits = value.replace(/\D/g, "");

  if (digits.length < 10 || digits.length > 11) return false;

  const ddd = parseInt(digits.slice(0, 2), 10);
  const number = digits.slice(2);

  if (ddd < 11 || ddd > 99) return false;
  if (number.length !== 8 && number.length !== 9) return false;
  if (number.length === 9 && number[0] !== "9") return false;

  return true;
}

export const telephone = z
  .string()
  .min(10, "Telefone deve ter pelo menos 10 caracteres")
  .max(15, "Telefone inválido")
  .refine(isValidPhoneBR, {
    message: "Telefone inválido",
  });
