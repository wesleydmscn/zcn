import { describe, it, expect } from "vitest";

import { cpf } from "./cpf";

describe("CPF", () => {
  it("valida CPFs válidos", () => {
    expect(cpf.parse("935.411.347-80")).toBe("935.411.347-80");
    expect(cpf.parse("93541134780")).toBe("93541134780");
  });

  it("rejeita CPFs inválidos", () => {
    expect(() => cpf.parse("123.456.789-00")).toThrow();
    expect(() => cpf.parse("11111111111")).toThrow();
    expect(() => cpf.parse("935.411.347-81")).toThrow();
  });
});
