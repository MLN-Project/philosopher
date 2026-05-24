import { PHILOSOPHER_BY_ID } from "@/lib/philosophers";
import { QUESTIONS } from "@/lib/quiz-data";
import { AXES, PHILOSOPHER_IDS, type AxisId, type PhilosopherId, type QuizResult, type SubmittedAnswer } from "@/lib/types";

const questionById = new Map(QUESTIONS.map((question) => [question.id, question]));

export class QuizValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "QuizValidationError";
  }
}

export function createEmptyAxisScores(): Record<AxisId, number> {
  return Object.fromEntries(AXES.map((axis) => [axis, 0])) as Record<AxisId, number>;
}

export function createEmptyPhilosopherScores(): Record<PhilosopherId, number> {
  return Object.fromEntries(PHILOSOPHER_IDS.map((id) => [id, 0])) as Record<PhilosopherId, number>;
}

export function validateSubmittedAnswers(answers: SubmittedAnswer[]) {
  if (!Array.isArray(answers) || answers.length !== QUESTIONS.length) {
    throw new QuizValidationError(`Expected ${QUESTIONS.length} answers.`);
  }

  const seen = new Set<string>();

  for (const answer of answers) {
    if (!answer || typeof answer.questionId !== "string" || typeof answer.answerId !== "string") {
      throw new QuizValidationError("Every answer must include questionId and answerId.");
    }

    if (seen.has(answer.questionId)) {
      throw new QuizValidationError(`Duplicate answer for ${answer.questionId}.`);
    }

    seen.add(answer.questionId);

    const question = questionById.get(answer.questionId);
    if (!question) {
      throw new QuizValidationError(`Unknown question ${answer.questionId}.`);
    }

    if (!question.answers.some((candidate) => candidate.id === answer.answerId)) {
      throw new QuizValidationError(`Unknown answer ${answer.answerId} for ${answer.questionId}.`);
    }
  }

  for (const question of QUESTIONS) {
    if (!seen.has(question.id)) {
      throw new QuizValidationError(`Missing answer for ${question.id}.`);
    }
  }
}

export function scoreQuiz(answers: SubmittedAnswer[], sessionId = crypto.randomUUID()): QuizResult {
  validateSubmittedAnswers(answers);

  const axisScores = createEmptyAxisScores();
  const philosopherScores = createEmptyPhilosopherScores();

  for (const submitted of answers) {
    const question = questionById.get(submitted.questionId);
    const selected = question?.answers.find((answer) => answer.id === submitted.answerId);

    if (!question || !selected) {
      throw new QuizValidationError("Invalid answer set.");
    }

    for (const [axis, value] of Object.entries(selected.axisWeights)) {
      axisScores[axis as AxisId] += value ?? 0;
    }

    for (const [philosopher, value] of Object.entries(selected.philosopherWeights)) {
      philosopherScores[philosopher as PhilosopherId] += value ?? 0;
    }
  }

  const sorted = [...PHILOSOPHER_IDS]
    .map((id) => ({ id, score: philosopherScores[id] }))
    .sort((a, b) => b.score - a.score || PHILOSOPHER_IDS.indexOf(a.id) - PHILOSOPHER_IDS.indexOf(b.id));

  const topFour = sorted.slice(0, 4);
  const scoreTotal = topFour.reduce((total, match) => total + Math.max(match.score, 0), 0) || 1;
  const percentages = normalizePercentages(topFour.map((match) => Math.max(match.score, 0) / scoreTotal));

  const topMatches = topFour.map((match, index) => ({
    id: match.id,
    name: PHILOSOPHER_BY_ID[match.id].name,
    score: match.score,
    percentage: percentages[index]
  }));

  const strongestAxes = [...AXES]
    .sort((a, b) => axisScores[b] - axisScores[a] || AXES.indexOf(a) - AXES.indexOf(b))
    .slice(0, 3);

  return {
    sessionId,
    answers,
    axisScores,
    philosopherScores,
    topMatches,
    strongestAxes,
    tensions: buildTensions(axisScores)
  };
}

function normalizePercentages(values: number[]) {
  const raw = values.map((value) => value * 100);
  const floored = raw.map(Math.floor);
  let remainder = 100 - floored.reduce((total, value) => total + value, 0);

  const order = raw
    .map((value, index) => ({ index, fraction: value - Math.floor(value) }))
    .sort((a, b) => b.fraction - a.fraction || a.index - b.index);

  for (const item of order) {
    if (remainder <= 0) break;
    floored[item.index] += 1;
    remainder -= 1;
  }

  return floored;
}

function buildTensions(axisScores: Record<AxisId, number>) {
  const tensions: string[] = [];

  if (axisScores.materialism > 12 && axisScores.freedom_alienation > 12) {
    tensions.push("You combine structural analysis with a strong concern for lived freedom.");
  }

  if (axisScores.authority_power > 12 && axisScores.ethics_action > 12) {
    tensions.push("You distrust power, but still want disciplined action rather than pure refusal.");
  }

  if (axisScores.individual_society > 12 && axisScores.freedom_alienation > 12) {
    tensions.push("You see identity as socially formed, yet still demand personal authorship.");
  }

  if (axisScores.dialectics > 12 && axisScores.ethics_action > 12) {
    tensions.push("You are drawn to change in motion, but you also want it grounded in responsible conduct.");
  }

  return tensions.length > 0 ? tensions : ["Your answers form a relatively balanced profile without one dominant tension."];
}
