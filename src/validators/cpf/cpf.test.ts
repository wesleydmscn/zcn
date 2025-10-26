import { describe, it, expect } from "vitest";

import { z } from "../..";

describe("CPF", () => {
  it("accepts valid CPFs", () => {
    expect(z.cpf().parse("935.411.347-80")).toBe("935.411.347-80");
    expect(z.cpf().parse("93541134780")).toBe("93541134780");
    expect(z.cpf().parse("714.602.380-01")).toBe("714.602.380-01");
    expect(z.cpf().parse("71460238001")).toBe("71460238001");
  });

  it("rejects invalid CPFs", () => {
    expect(() => z.cpf().parse("111.111.111-11")).toThrow();
    expect(() => z.cpf().parse("00000000000")).toThrow();
    expect(() => z.cpf().parse("935.411.347-81")).toThrow();
    expect(() => z.cpf().parse("286.603.500-04")).toThrow();
    expect(() => z.cpf().parse("935.411.347_80")).toThrow();
    expect(() => z.cpf().parse("935-411-347-80")).toThrow();
    expect(() => z.cpf().parse(" 935.411.347-80 ")).toThrow();
    expect(() => z.cpf().parse("9354113 4780")).toThrow();
    expect(() => z.cpf().parse("")).toThrow();
    expect(() => z.cpf().parse(null as any)).toThrow();
    expect(() => z.cpf().parse(undefined as any)).toThrow();
  });
});
