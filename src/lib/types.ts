export const AXES = [
  "materialism",
  "dialectics",
  "individual_society",
  "authority_power",
  "ethics_action",
  "freedom_alienation"
] as const;

export type AxisId = (typeof AXES)[number];

export const PHILOSOPHER_IDS = [
  "marx",
  "engels",
  "lenin",
  "hegel",
  "feuerbach",
  "plato",
  "aristotle",
  "nietzsche",
  "confucius",
  "laozi",
  "beauvoir",
  "sartre"
] as const;

export type PhilosopherId = (typeof PHILOSOPHER_IDS)[number];

export type WeightedScore<T extends string> = Partial<Record<T, number>>;

export type QuizAnswer = {
  id: string;
  text: string;
  philosopherWeights: WeightedScore<PhilosopherId>;
  axisWeights: WeightedScore<AxisId>;
};

export type QuizQuestion = {
  id: string;
  axis: AxisId;
  prompt: string;
  context: string;
  answers: QuizAnswer[];
};

export type SubmittedAnswer = {
  questionId: string;
  answerId: string;
};

export type PhilosopherMatch = {
  id: PhilosopherId;
  name: string;
  percentage: number;
  score: number;
};

export type QuizResult = {
  sessionId: string;
  answers: SubmittedAnswer[];
  axisScores: Record<AxisId, number>;
  philosopherScores: Record<PhilosopherId, number>;
  topMatches: PhilosopherMatch[];
  strongestAxes: AxisId[];
  tensions: string[];
};

export type AiCommentary = {
  summary: string;
  beliefProfile: string;
  strengths: string[];
  blindSpots: string[];
  recommendedReadings: string[];
  disclaimer: string;
};
