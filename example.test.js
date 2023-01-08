import { expect, it } from "vitest";

it("has a 10% flaky test rate", () => {
  expect(Math.random() >= 0.1).toBe(true);
});
