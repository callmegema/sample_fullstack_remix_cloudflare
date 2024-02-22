import { describe, it } from 'vitest'

describe("check", () => {
  it("show env without error", () => {
    console.log(`env: ${process.env.NODE_ENV}`);
  });
});
