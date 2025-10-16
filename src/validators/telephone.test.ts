import { describe, it, expect } from "vitest";

import { z } from "..";

describe("Telephone (BR)", () => {
  it("accepts valid phone numbers", () => {
    expect(z.telephone().parse("(11) 91234-5678")).toBe("(11) 91234-5678");
    expect(z.telephone().parse("11912345678")).toBe("11912345678");
    expect(z.telephone().parse("(21) 1234-5678")).toBe("(21) 1234-5678");
    expect(z.telephone().parse("2112345678")).toBe("2112345678");
    expect(z.telephone().parse("(99) 98765-4321")).toBe("(99) 98765-4321");
    expect(z.telephone().parse("99987654321")).toBe("99987654321");
  });

  it("rejects invalid phone numbers", () => {
    expect(() => z.telephone().parse("12345")).toThrow();
    expect(() => z.telephone().parse("(99) 81234-5678")).toThrow();
    expect(() => z.telephone().parse("(00) 91234-5678")).toThrow();
    expect(() => z.telephone().parse("0912345678")).toThrow();
    expect(() => z.telephone().parse("(21) 123-45678")).toThrow();
    expect(() => z.telephone().parse("1191234567a")).toThrow();
    expect(() => z.telephone().parse(" 11912345678 ")).toThrow();
    expect(() => z.telephone().parse(null as any)).toThrow();
    expect(() => z.telephone().parse(undefined as any)).toThrow();
  });
});
