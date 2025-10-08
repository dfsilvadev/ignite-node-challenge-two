import { describe, expect, it } from "vitest";

const sum = (a: number, b: number): number => a + b;

describe("Sum", () => {
  it("should add two positive number correctly", () => {
    expect(sum(1, 3)).toBe(4);
  });

  it("should receive '5, 5' and return 10", () => {
    expect(sum(5, 5)).toBe(10);
  });
});
