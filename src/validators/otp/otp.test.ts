import { describe, it, expect } from "vitest";

import { z } from "../..";

describe("OTP", () => {
  it("accepts valid OTP codes", () => {
    expect(z.otp().parse("1234")).toBe("1234");
    expect(z.otp().parse("987654")).toBe("987654");
    expect(z.otp().parse("12345678")).toBe("12345678");
    expect(z.otp({ max: 10 }).parse("1234567890")).toBe("1234567890");
    expect(z.otp({ min: 6 }).parse("654321")).toBe("654321");
  });

  it("rejects invalid OTP codes", () => {
    expect(() => z.otp().parse("123")).toThrow();
    expect(() => z.otp().parse("123456789")).toThrow();
    expect(() => z.otp().parse("12a4")).toThrow();
    expect(() => z.otp().parse("12-34")).toThrow();
    expect(() => z.otp().parse(" 1234 ")).toThrow();
    expect(() => z.otp().parse(123456 as any)).toThrow();
    expect(() => z.otp().parse(null as any)).toThrow();
    expect(() => z.otp().parse(undefined as any)).toThrow();
  });
});
