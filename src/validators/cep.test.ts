import { describe, it, expect } from "vitest";
import { cep } from "./cep";

describe("CEP", () => {
  it("valida CEPs válidos", () => {
    expect(cep.parse("12345-678")).toBe("12345-678");
    expect(cep.parse("12345678")).toBe("12345678");
  });

  it("rejeita CEPs inválidos", () => {
    expect(() => cep.parse("1234-567")).toThrow();
    expect(() => cep.parse("123456789")).toThrow();
    expect(() => cep.parse("12a45-678")).toThrow();
    expect(() => cep.parse("11111-111")).toThrow();
  });
});
