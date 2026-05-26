import type { Metadata } from "next";
import { CreditsExperience } from "@/components/credits-experience";

export const metadata: Metadata = {
  title: "Credits | Philosopher Atlas",
  description: "Portrait sources, generated asset notes, and release attribution guidance for Philosopher Atlas."
};

export default function CreditsPage() {
  return <CreditsExperience />;
}
