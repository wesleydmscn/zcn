import { describe, it, expect } from "vitest";

import { z } from "..";

describe("Username", () => {
  it("accepts valid usernames", () => {
    expect(z.username().parse("user123")).toBe("user123");
    expect(z.username().parse("john_doe")).toBe("john_doe");
    expect(z.username().parse("alice.smith")).toBe("alice.smith");
    expect(z.username().parse("a1b2c3")).toBe("a1b2c3");
  });

  it("rejects invalid usernames", () => {
    expect(() => z.username().parse("ab")).toThrow();
    expect(() => z.username().parse("a".repeat(21))).toThrow();
    expect(() => z.username().parse("1user")).toThrow();
    expect(() => z.username().parse("_user")).toThrow();
    expect(() => z.username().parse(".user")).toThrow();
    expect(() => z.username().parse("user_")).toThrow();
    expect(() => z.username().parse("user.")).toThrow();
    expect(() => z.username().parse("user__name")).toThrow();
    expect(() => z.username().parse("user..name")).toThrow();
    expect(() => z.username().parse("user name")).toThrow();
    expect(() => z.username().parse("user-name")).toThrow();
    expect(() => z.username().parse("user@name")).toThrow();
    expect(() => z.username().parse("")).toThrow();
    expect(() => z.username().parse(null as any)).toThrow();
    expect(() => z.username().parse(undefined as any)).toThrow();
  });
});
