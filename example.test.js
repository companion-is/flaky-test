import { expect, it } from "vitest";

it("has a 25% flaky test rate", () => {
  expect(Math.random() > 0.25).toBe(true);
});
