# Philosopher Personality

An interactive Next.js personality quiz inspired by MBTI-style matching and the MLN111 Philosophy of Marxism-Leninism syllabus. The app combines a cinematic parchment-map landing page, a 30-question quiz, deterministic philosopher scoring, Supabase persistence, and OpenAI-generated reflective commentary.

## Environment

Create `.env.local` for provider-backed features:

```bash
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4.1-mini
```

Without these variables, local development still works with in-memory result storage and deterministic fallback commentary.

## Supabase Tables

```sql
create table if not exists quiz_sessions (
  id uuid primary key,
  created_at timestamptz not null default now(),
  answers_json jsonb not null,
  axis_scores_json jsonb not null,
  philosopher_scores_json jsonb not null,
  top_matches_json jsonb not null
);

create table if not exists ai_commentaries (
  id uuid primary key,
  session_id uuid references quiz_sessions(id) on delete cascade,
  summary text not null,
  belief_profile text not null,
  tensions jsonb not null,
  recommendations jsonb not null,
  created_at timestamptz not null default now()
);
```

Enable RLS before exposing either table through Supabase's Data API. The app uses the server-only service role key from route handlers, not from the browser.
