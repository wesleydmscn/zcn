import { describe, it, expect } from "vitest";

import { cnpj } from "./cnpj";

describe("CNPJ", () => {
  it("valida CNPJs válidos", () => {
    expect(cnpj.parse("12.345.678/0001-95")).toBe("12.345.678/0001-95");
    expect(cnpj.parse("12345678000195")).toBe("12345678000195");
  });

  it("rejeita CNPJs inválidos", () => {
    expect(() => cnpj.parse("11.111.111/1111-11")).toThrow();
    expect(() => cnpj.parse("12345678000196")).toThrow();
  });
});
