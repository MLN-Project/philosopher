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

  it("links source ledger previews to the exact image file page, not the redirect endpoint", () => {
    for (const philosopher of PHILOSOPHERS) {
      expect(philosopher.cutoutSourceUrl).toMatch(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);
      expect(philosopher.cutoutSourceUrl).not.toContain("Special:FilePath");

      if (philosopher.cutoutUrl.includes("Special:FilePath/")) {
        const fileName = philosopher.cutoutUrl.split("Special:FilePath/")[1];
        expect(decodeURI(philosopher.cutoutSourceUrl)).toBe(
          decodeURI(`https://commons.wikimedia.org/wiki/File:${fileName}`)
        );
      }
    }
  });

  it("opens embedded portrait pages from the credits ledger instead of Wikimedia image endpoints", () => {
    for (const philosopher of PHILOSOPHERS) {
      expect(philosopher.sourcePageUrl).toMatch(/^https:\/\/en\.wikipedia\.org\/wiki\//);
      expect(philosopher.sourcePageUrl).not.toContain("Special:FilePath");
      expect(philosopher.sourcePageUrl).not.toMatch(/\.(?:png|jpe?g|webp|gif|svg)(?:$|[?#])/i);
    }
  });
});
