import { describe, it, expect } from "vitest";

import { z } from "../..";

describe("PORT", () => {
  it("accepts valid port numbers", () => {
    expect(z.coerce.port().parse(0)).toBe(0);
    expect(z.coerce.port().parse(80)).toBe(80);
    expect(z.coerce.port().parse(443)).toBe(443);
    expect(z.port().parse("3000")).toBe("3000");
    expect(z.port().parse("65535")).toBe("65535");
  });

  it("rejects invalid port numbers", () => {
    expect(() => z.coerce.port().parse(-1)).toThrow();
    expect(() => z.coerce.port().parse(65536)).toThrow();
    expect(() => z.port().parse("-1")).toThrow();
    expect(() => z.port().parse("65536")).toThrow();
    expect(() => z.port().parse("abc")).toThrow();
    expect(() => z.port().parse("")).toThrow();
    expect(() => z.port().parse(null as any)).toThrow();
    expect(() => z.port().parse(undefined as any)).toThrow();
    expect(() => z.coerce.port().parse(NaN)).toThrow();
    expect(() => z.coerce.port().parse(Infinity)).toThrow();
  });
});
