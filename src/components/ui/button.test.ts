import { describe, expect, it } from "vitest";
import { buttonVariants } from "@/components/ui/button";

describe("buttonVariants", () => {
  it("applies the default hover style to button elements", () => {
    const className = buttonVariants({ variant: "default" });

    expect(className).toContain("hover:bg-primary/80");
    expect(className).not.toContain("[a]:hover:bg-primary/80");
  });
});
