import { z } from "zod";

function isValidCPF(value: string): boolean {
  const cpf = value.replace(/\D/g, "");

  if (cpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false; // (ex: 11111111111)

  const calcCheckDigit = (base: string, factor: number) => {
    let total = 0;
    for (const num of base) {
      total += parseInt(num, 10) * factor--;
    }
    const remainder = total % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const firstCheck = calcCheckDigit(cpf.slice(0, 9), 10);
  const secondCheck = calcCheckDigit(cpf.slice(0, 10), 11);

  return (
    firstCheck === parseInt(cpf[9]!, 10) &&
    secondCheck === parseInt(cpf[10]!, 10)
  );
}

export const cpf = z
  .string()
  .min(11, "CPF deve ter pelo menos 11 caracteres")
  .max(14, "CPF inválido")
  .refine(isValidCPF, {
    message: "CPF inválido",
  });
