import { describe, it, expect } from "vitest";

import { z } from "../..";

describe("NODE_ENV", () => {
  it("accepts valid NODE_ENV values", () => {
    expect(z.nodeEnv().parse("production")).toBe("production");
    expect(z.nodeEnv().parse("development")).toBe("development");
    expect(z.nodeEnv().parse("test")).toBe("test");
    expect(z.nodeEnv().parse("staging")).toBe("staging");
  });

  it("rejects invalid NODE_ENV values", () => {
    expect(() => z.nodeEnv().parse("prod")).toThrow();
    expect(() => z.nodeEnv().parse("dev")).toThrow();
    expect(() => z.nodeEnv().parse("testing")).toThrow();
    expect(() => z.nodeEnv().parse("stage")).toThrow();
    expect(() => z.nodeEnv().parse("")).toThrow();
    expect(() => z.otp().parse(123456 as any)).toThrow();
    expect(() => z.otp().parse(null as any)).toThrow();
    expect(() => z.otp().parse(undefined as any)).toThrow();
  });
});
