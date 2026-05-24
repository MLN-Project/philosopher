import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { AiCommentary, QuizResult } from "@/lib/types";

export type StoredQuizSession = QuizResult & {
  commentary?: AiCommentary;
  createdAt: string;
};

const memorySessions = new Map<string, StoredQuizSession>();
let supabase: SupabaseClient | null = null;

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRole) return null;
  supabase ??= createClient(url, serviceRole, {
    auth: {
      persistSession: false
    }
  });

  return supabase;
}

export async function persistQuizSession(result: QuizResult): Promise<StoredQuizSession> {
  const stored: StoredQuizSession = {
    ...result,
    createdAt: new Date().toISOString()
  };

  memorySessions.set(result.sessionId, stored);

  const client = getSupabase();
  if (!client) return stored;

  const { error } = await client.from("quiz_sessions").upsert({
    id: result.sessionId,
    answers_json: result.answers,
    axis_scores_json: result.axisScores,
    philosopher_scores_json: result.philosopherScores,
    top_matches_json: result.topMatches
  });

  if (error) {
    console.error("Supabase quiz_sessions upsert failed", error);
  }

  return stored;
}

export async function getQuizSession(sessionId: string): Promise<StoredQuizSession | null> {
  const memory = memorySessions.get(sessionId);
  if (memory) return memory;

  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client.from("quiz_sessions").select("*").eq("id", sessionId).maybeSingle();

  if (error || !data) {
    if (error) console.error("Supabase quiz_sessions read failed", error);
    return null;
  }

  const stored: StoredQuizSession = {
    sessionId: data.id,
    answers: data.answers_json,
    axisScores: data.axis_scores_json,
    philosopherScores: data.philosopher_scores_json,
    topMatches: data.top_matches_json,
    strongestAxes: Object.entries<number>(data.axis_scores_json)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([axis]) => axis) as StoredQuizSession["strongestAxes"],
    tensions: ["Loaded from Supabase. Regenerate commentary for full tension details."],
    createdAt: data.created_at
  };

  const commentary = await getCommentary(sessionId);
  if (commentary) stored.commentary = commentary;

  memorySessions.set(sessionId, stored);
  return stored;
}

export async function persistCommentary(sessionId: string, commentary: AiCommentary) {
  const memory = memorySessions.get(sessionId);
  if (memory) {
    memory.commentary = commentary;
    memorySessions.set(sessionId, memory);
  }

  const client = getSupabase();
  if (!client) return commentary;

  const { error } = await client.from("ai_commentaries").upsert({
    id: crypto.randomUUID(),
    session_id: sessionId,
    summary: commentary.summary,
    belief_profile: commentary.beliefProfile,
    tensions: commentary.blindSpots,
    recommendations: commentary.recommendedReadings
  });

  if (error) {
    console.error("Supabase ai_commentaries upsert failed", error);
  }

  return commentary;
}

async function getCommentary(sessionId: string): Promise<AiCommentary | null> {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from("ai_commentaries")
    .select("*")
    .eq("session_id", sessionId)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error || !data) return null;

  return {
    summary: data.summary,
    beliefProfile: data.belief_profile,
    strengths: ["This commentary was loaded from the saved result."],
    blindSpots: data.tensions ?? [],
    recommendedReadings: data.recommendations ?? [],
    disclaimer: "This is a reflective interpretation of quiz answers, not a diagnosis or academic evaluation."
  };
}
