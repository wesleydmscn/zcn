import { describe, it, expect } from "vitest";

import { telephone } from "./telephone";

describe("Telefone", () => {
  it("valida telefones válidos", () => {
    expect(telephone.parse("(11) 91234-5678")).toBe("(11) 91234-5678");
    expect(telephone.parse("11912345678")).toBe("11912345678");
    expect(telephone.parse("(21) 1234-5678")).toBe("(21) 1234-5678");
  });

  it("rejeita telefones inválidos", () => {
    expect(() => telephone.parse("12345")).toThrow();
    expect(() => telephone.parse("(99) 81234-5678")).toThrow();
    expect(() => telephone.parse("(00) 91234-5678")).toThrow();
  });
});
