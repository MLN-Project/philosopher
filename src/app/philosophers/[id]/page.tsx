import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhilosopherProfile } from "@/components/philosopher-profile";
import { archiveDetails, archiveOrder } from "@/lib/philosopher-archive";
import { PHILOSOPHER_BY_ID } from "@/lib/philosophers";
import type { PhilosopherId } from "@/lib/types";

type PhilosopherPageParams = {
  id: string;
};

const isPhilosopherId = (id: string): id is PhilosopherId => id in PHILOSOPHER_BY_ID;

export function generateStaticParams() {
  return archiveOrder.map((id) => ({ id }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<PhilosopherPageParams>;
}): Promise<Metadata> {
  const { id } = await params;

  if (!isPhilosopherId(id)) {
    return {
      title: "Philosopher Not Found | Philosopher Atlas"
    };
  }

  const philosopher = PHILOSOPHER_BY_ID[id];
  const detail = archiveDetails[id];

  return {
    title: `${philosopher.name} | Philosopher Atlas`,
    description: `${detail.history} ${detail.legacy}`
  };
}

export default async function PhilosopherPage({
  params
}: {
  params: Promise<PhilosopherPageParams>;
}) {
  const { id } = await params;

  if (!isPhilosopherId(id)) {
    notFound();
  }

  return <PhilosopherProfile philosopherId={id} />;
}
