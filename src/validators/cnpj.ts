import { z } from "zod";

function isValidCNPJ(value: string): boolean {
  const regex = /^(\d{14}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/;
  if (!regex.test(value)) return false;

  const cnpj = value.replace(/\D/g, "");

  if (/^(\d)\1{13}$/.test(cnpj)) return false;

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

export const cnpj = (params?: $ZcnValidationParams) =>
  z.string().refine(isValidCNPJ, params);
