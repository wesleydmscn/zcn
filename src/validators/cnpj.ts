import { z } from "zod";

function isValidCNPJ(value: string): boolean {
  const cnpj = value.replace(/\D/g, "");

  if (cnpj.length !== 14) return false;
  if (/^(\d)\1{13}$/.test(cnpj)) return false; // ex: 11111111111111

  const calcCheckDigit = (base: string, factors: number[]): number => {
    let total = 0;
    for (let i = 0; i < base.length; i++) {
      total += parseInt(base[i]!, 10) * factors[i]!;
    }
    const remainder = total % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const firstFactors = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const secondFactors = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  const firstCheck = calcCheckDigit(cnpj.slice(0, 12), firstFactors);
  const secondCheck = calcCheckDigit(
    cnpj.slice(0, 12) + firstCheck,
    secondFactors
  );

  return (
    firstCheck === parseInt(cnpj[12]!, 10) &&
    secondCheck === parseInt(cnpj[13]!, 10)
  );
}

export const cnpj = z
  .string()
  .min(14, "CNPJ deve ter pelo menos 14 caracteres")
  .max(18, "CNPJ inválido")
  .refine(isValidCNPJ, {
    message: "CNPJ inválido",
  });
