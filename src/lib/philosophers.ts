import type { PhilosopherId } from "@/lib/types";

export type Philosopher = {
  id: PhilosopherId;
  name: string;
  era: string;
  shortLabel: string;
  color: string;
  portraitUrl: string;
  cutoutUrl: string;
  cutoutSourceUrl: string;
  sourceUrl: string;
  quote: string;
  quoteNote: string;
  description: string;
  reading: string;
};

export const PHILOSOPHERS: Philosopher[] = [
  {
    id: "marx",
    name: "Karl Marx",
    era: "Historical materialism",
    shortLabel: "Material life before abstract ideals",
    color: "#8f241d",
    portraitUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Karl_Marx.jpg",
    cutoutUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Karl_Marx.png",
    cutoutSourceUrl: "https://commons.wikimedia.org/wiki/File:Karl_Marx.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Karl_Marx.jpg",
    quote: "The philosophers have only interpreted the world; the point is to change it.",
    quoteNote: "Theses on Feuerbach",
    description:
      "You read personal problems through social structure, labor, class, and historical conditions.",
    reading: "Economic and Philosophic Manuscripts of 1844"
  },
  {
    id: "engels",
    name: "Friedrich Engels",
    era: "Dialectical materialism",
    shortLabel: "Pattern, production, and historical movement",
    color: "#9c4a22",
    portraitUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Friedrich_Engels_portrait_(cropped).jpg",
    cutoutUrl: "/images/sources/engels-source.jpg",
    cutoutSourceUrl: "https://commons.wikimedia.org/wiki/File:Friedrich_Engels_portrait_(cropped).jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Friedrich_Engels_portrait_(cropped).jpg",
    quote: "Freedom is the recognition of necessity.",
    quoteNote: "Anti-Duhring",
    description:
      "You look for the larger system behind events and prefer explanations that connect nature, economy, and society.",
    reading: "Socialism: Utopian and Scientific"
  },
  {
    id: "lenin",
    name: "Vladimir Lenin",
    era: "Practice and revolution",
    shortLabel: "Analysis must become organized action",
    color: "#a62f1f",
    portraitUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Vladimir_Lenin.jpg",
    cutoutUrl: "/images/sources/lenin-source.jpg",
    cutoutSourceUrl: "https://commons.wikimedia.org/wiki/File:Vladimir_Lenin.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vladimir_Lenin.jpg",
    quote: "Without revolutionary theory there can be no revolutionary movement.",
    quoteNote: "What Is To Be Done?",
    description:
      "You distrust passive insight. A true idea should clarify strategy, discipline, and intervention.",
    reading: "Materialism and Empirio-criticism"
  },
  {
    id: "hegel",
    name: "G. W. F. Hegel",
    era: "Dialectical idealism",
    shortLabel: "Contradiction as the engine of spirit",
    color: "#73552a",
    portraitUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Hegel_portrait_by_Schlesinger_1831.jpg",
    cutoutUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/G.W.F._Hegel_(by_Sichling,_after_Sebbers).jpg",
    cutoutSourceUrl: "https://commons.wikimedia.org/wiki/File:G.W.F._Hegel_(by_Sichling,_after_Sebbers).jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hegel_portrait_by_Schlesinger_1831.jpg",
    quote: "The truth is the whole.",
    quoteNote: "Phenomenology of Spirit",
    description:
      "You see conflict as development, and you tend to think every position reveals its limits over time.",
    reading: "Phenomenology of Spirit"
  },
  {
    id: "feuerbach",
    name: "Ludwig Feuerbach",
    era: "Humanist materialism",
    shortLabel: "Human need beneath sacred projection",
    color: "#986735",
    portraitUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Feuerbach_Ludwig.jpg",
    cutoutUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Feuerbach_Ludwig_retouched.jpg",
    cutoutSourceUrl: "https://commons.wikimedia.org/wiki/File:Feuerbach_Ludwig_retouched.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Feuerbach_Ludwig.jpg",
    quote: "Man is what he eats.",
    quoteNote: "Attributed summary of his materialism",
    description:
      "You return grand ideas to ordinary human need, embodiment, and social feeling.",
    reading: "The Essence of Christianity"
  },
  {
    id: "plato",
    name: "Plato",
    era: "Classical idealism",
    shortLabel: "Order the soul toward the Good",
    color: "#546b63",
    portraitUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Naples-_National_Museum,_Plato,_bronze_bust_(Herculaneum,_1759),_No._5274_(SM_stf1507).png",
    cutoutUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Plato_(transparent).png",
    cutoutSourceUrl: "https://commons.wikimedia.org/wiki/File:Plato_(transparent).png",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Naples-_National_Museum,_Plato,_bronze_bust_(Herculaneum,_1759),_No._5274_(SM_stf1507).png",
    quote: "The beginning is the most important part of the work.",
    quoteNote: "Republic",
    description:
      "You seek stable ideals behind confusing appearances and want society guided by wisdom.",
    reading: "Republic"
  },
  {
    id: "aristotle",
    name: "Aristotle",
    era: "Virtue and practical reason",
    shortLabel: "Character formed through measured action",
    color: "#7f6b32",
    portraitUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Aristotle_bust.jpg",
    cutoutUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Aristotle_(transparent).png",
    cutoutSourceUrl: "https://commons.wikimedia.org/wiki/File:Aristotle_(transparent).png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aristotle_bust.jpg",
    quote: "We are what we repeatedly do.",
    quoteNote: "Common paraphrase of Nicomachean Ethics",
    description:
      "You prefer balanced judgment, concrete situations, and habits that make a good life durable.",
    reading: "Nicomachean Ethics"
  },
  {
    id: "nietzsche",
    name: "Friedrich Nietzsche",
    era: "Critique of morality",
    shortLabel: "Create values instead of inheriting them",
    color: "#684039",
    portraitUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Nietzsche1882.jpg",
    cutoutUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Friedrich_Nietzsche_(transparent).png",
    cutoutSourceUrl: "https://commons.wikimedia.org/wiki/File:Friedrich_Nietzsche_(transparent).png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nietzsche1882.jpg",
    quote: "Become who you are.",
    quoteNote: "Pindar line Nietzsche repeatedly invokes",
    description:
      "You suspect conformity, inherited morals, and comfortable explanations that protect weakness.",
    reading: "On the Genealogy of Morality"
  },
  {
    id: "confucius",
    name: "Confucius",
    era: "Relational ethics",
    shortLabel: "Humanity is cultivated through roles",
    color: "#7b4f28",
    portraitUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/孔子燕居像.png",
    cutoutUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ma_Yuan-Confucius.png",
    cutoutSourceUrl: "https://commons.wikimedia.org/wiki/File:Ma_Yuan-Confucius.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E5%AD%94%E5%AD%90%E7%87%95%E5%B1%85%E5%83%8F.png",
    quote: "To study and at due times practice what one has studied, is this not a pleasure?",
    quoteNote: "Analects",
    description:
      "You understand the self through duty, ritual, education, family, and social trust.",
    reading: "Analects"
  },
  {
    id: "laozi",
    name: "Laozi",
    era: "Daoist harmony",
    shortLabel: "Power works best when it stops forcing",
    color: "#5f6f42",
    portraitUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Lao_Tzu.png",
    cutoutUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Lao_Tzu.png",
    cutoutSourceUrl: "https://commons.wikimedia.org/wiki/File:Lao_Tzu.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lao_Tzu.png",
    quote: "A journey of a thousand miles begins beneath one's feet.",
    quoteNote: "Dao De Jing",
    description:
      "You often trust indirect action, restraint, and harmony with processes larger than the ego.",
    reading: "Dao De Jing"
  },
  {
    id: "beauvoir",
    name: "Simone de Beauvoir",
    era: "Existential feminism",
    shortLabel: "Freedom becomes real through situated lives",
    color: "#6a3e4d",
    portraitUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Simone_de_Beauvoir_1967_(cropped).jpg",
    cutoutUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Simone_de_Beauvoir2.png",
    cutoutSourceUrl: "https://commons.wikimedia.org/wiki/File:Simone_de_Beauvoir2.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Simone_de_Beauvoir_1967_(cropped).jpg",
    quote: "One is not born, but rather becomes, woman.",
    quoteNote: "The Second Sex",
    description:
      "You notice how freedom is shaped by gender, dependence, culture, and the demand to become oneself.",
    reading: "The Second Sex"
  },
  {
    id: "sartre",
    name: "Jean-Paul Sartre",
    era: "Existential freedom",
    shortLabel: "Choice reveals responsibility",
    color: "#4b4b3c",
    portraitUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Jean_Paul_Sartre_1965_(cropped).jpg",
    cutoutUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Jean_Paul_Sartre_1965_(cropped).jpg",
    cutoutSourceUrl: "https://commons.wikimedia.org/wiki/File:Jean_Paul_Sartre_1965_(cropped).jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Jean_Paul_Sartre_1965_(cropped).jpg",
    quote: "Existence precedes essence.",
    quoteNote: "Existentialism Is a Humanism",
    description:
      "You treat identity as a project made through choices, not a fixed script handed down in advance.",
    reading: "Existentialism Is a Humanism"
  }
];

export const PHILOSOPHER_BY_ID = Object.fromEntries(
  PHILOSOPHERS.map((philosopher) => [philosopher.id, philosopher])
) as Record<PhilosopherId, Philosopher>;
