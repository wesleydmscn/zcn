import { describe, it, expect } from "vitest";

import { z } from "../..";

describe("ZIP Code (CEP)", () => {
  it("validates valid ZIP codes", () => {
    expect(z.cep().parse("12345-678")).toBe("12345-678");
    expect(z.cep().parse("12345678")).toBe("12345678");
  });

  it("rejects invalid ZIP codes", () => {
    expect(() => z.cep().parse("1234-567")).toThrow();
    expect(() => z.cep().parse("1234567")).toThrow();
    expect(() => z.cep().parse("123456789")).toThrow();
    expect(() => z.cep().parse("12a45-678")).toThrow();
    expect(() => z.cep().parse("11111-111")).toThrow();
    expect(() => z.cep().parse("12345_678")).toThrow();
    expect(() => z.cep().parse("12-345678")).toThrow();
    expect(() => z.cep().parse("-123456")).toThrow();
    expect(() => z.cep().parse("12345-")).toThrow();
    expect(() => z.cep().parse("12345 -678")).toThrow();
    expect(() => z.cep().parse(" 12345678 ")).toThrow();
    expect(() => z.cep().parse("")).toThrow();
    expect(() => z.cep().parse(null as any)).toThrow();
    expect(() => z.cep().parse(undefined as any)).toThrow();
  });
});
