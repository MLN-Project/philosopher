import { ResultClient } from "@/components/result-client";

export default async function ResultPage({
  params
}: {
  params: Promise<{ sessionId: string }>;
}) {
  const { sessionId } = await params;
  return <ResultClient sessionId={sessionId} />;
}
