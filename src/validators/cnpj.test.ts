import { describe, it, expect } from "vitest";

import { z } from "..";

describe("CNPJ", () => {
  it("accepts valid CNPJs", () => {
    expect(z.cnpj().parse("12.345.678/0001-95")).toBe("12.345.678/0001-95");
    expect(z.cnpj().parse("12345678000195")).toBe("12345678000195");
    expect(z.cnpj().parse("12.345.678/0001-95")).toBe("12.345.678/0001-95");
    expect(z.cnpj().parse("12345678000195")).toBe("12345678000195");
  });

  it("rejects invalid CNPJs", () => {
    expect(() => z.cnpj().parse("11.111.111/1111-11")).toThrow();
    expect(() => z.cnpj().parse("00000000000000")).toThrow();
    expect(() => z.cnpj().parse("12.345.678/0001-96")).toThrow();
    expect(() => z.cnpj().parse("12345678000196")).toThrow();
    expect(() => z.cnpj().parse("12.345.678/0001_95")).toThrow();
    expect(() => z.cnpj().parse("12-345-678/0001-95")).toThrow();
    expect(() => z.cnpj().parse(" 12.345.678/0001-95 ")).toThrow();
    expect(() => z.cnpj().parse("12345678 000195")).toThrow();
    expect(() => z.cnpj().parse("")).toThrow();
    expect(() => z.cnpj().parse(null as any)).toThrow();
    expect(() => z.cnpj().parse(undefined as any)).toThrow();
  });
});
