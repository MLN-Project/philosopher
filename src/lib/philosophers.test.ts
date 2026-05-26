import { describe, expect, it } from "vitest";
import { PHILOSOPHERS } from "@/lib/philosophers";

describe("philosopher source links", () => {
  it("uses Wikimedia file pages instead of direct image endpoints", () => {
    expect(PHILOSOPHERS).toHaveLength(12);

    for (const philosopher of PHILOSOPHERS) {
      expect(philosopher.sourceUrl).toMatch(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);
      expect(philosopher.sourceUrl).not.toContain("Special:FilePath");
    }
  });
});
