import type { Metadata } from "next";
import { PhilosophersArchive } from "@/components/philosophers-archive";

export const metadata: Metadata = {
  title: "Philosopher Archive | Philosopher Atlas",
  description: "Histories, quotes, and routes through the philosophers featured in the atlas."
};

export default function PhilosophersPage() {
  return <PhilosophersArchive />;
}
