import type { PhilosopherId } from "@/lib/types";

export type ArchiveDetail = {
  life: string;
  place: string;
  history: string;
  legacy: string;
  ideas: string[];
  primaryWork: string;
  archiveNote: string;
};

export type ArchiveThread = {
  title: string;
  ids: PhilosopherId[];
  copy: string;
};

export const archiveOrder: PhilosopherId[] = [
  "plato",
  "aristotle",
  "confucius",
  "laozi",
  "hegel",
  "feuerbach",
  "marx",
  "engels",
  "lenin",
  "nietzsche",
  "beauvoir",
  "sartre"
];

export const featureIds: PhilosopherId[] = ["plato", "hegel", "marx", "beauvoir", "laozi"];

export const archiveDetails: Record<PhilosopherId, ArchiveDetail> = {
  plato: {
    life: "c. 428-348 BCE",
    place: "Athens",
    history:
      "Plato wrote after the crisis of the Peloponnesian War and the trial of Socrates. His dialogues turn political disorder into a question about education, truth, justice, and the condition of the soul.",
    legacy:
      "He made philosophy feel architectural: visible life is unstable, so the thinker has to search for forms, standards, and a Good that can organize both knowledge and public life.",
    ideas: ["Forms", "justice", "education", "the philosopher-ruler"],
    primaryWork: "Republic",
    archiveNote: "The map begins with Plato because he makes philosophy ask what should rule appearances."
  },
  aristotle: {
    life: "384-322 BCE",
    place: "Stagira, Athens",
    history:
      "Aristotle studied in Plato's Academy, taught Alexander, and built a school around observation, classification, logic, and ethical practice. He moved philosophy closer to living things and concrete purposes.",
    legacy:
      "His work gives the archive its practical counterweight: character is trained, knowledge grows through careful distinctions, and a good life depends on habits that fit human nature.",
    ideas: ["virtue", "logic", "causes", "practical reason"],
    primaryWork: "Nicomachean Ethics",
    archiveNote: "Aristotle steadies the page with measured action rather than pure ascent."
  },
  confucius: {
    life: "551-479 BCE",
    place: "Lu, China",
    history:
      "Confucius lived during political fragmentation and treated social repair as an ethical project. His teaching centers on learning, ritual, humane conduct, and the slow formation of trustworthy people.",
    legacy:
      "The self in his thought is never isolated. It is shaped through family, ceremony, language, public duty, and the discipline of becoming reliable in relation to others.",
    ideas: ["ren", "ritual", "learning", "role ethics"],
    primaryWork: "Analects",
    archiveNote: "Confucius gives the atlas a social grammar of care, order, and practice."
  },
  laozi: {
    life: "traditionally 6th century BCE",
    place: "Ancient China",
    history:
      "Laozi is a partly legendary figure associated with the Dao De Jing. The tradition presses against forceful rule, rigid certainty, and the urge to control what has its own pattern.",
    legacy:
      "His presence changes the tempo of the archive. Power can become quieter, wisdom can look like restraint, and action can succeed by moving with the grain of the world.",
    ideas: ["dao", "wu wei", "simplicity", "non-coercive power"],
    primaryWork: "Dao De Jing",
    archiveNote: "Laozi opens a path where philosophy does less in order to see more."
  },
  hegel: {
    life: "1770-1831",
    place: "Stuttgart, Berlin",
    history:
      "Hegel wrote in the wake of the French Revolution and the rise of modern civil society. He tried to understand history as a rational movement shaped by contradiction, recognition, and institutions.",
    legacy:
      "His dialectic makes conflict more than noise. A position exposes its limits, meets what it excludes, and becomes something richer through the pressure of its own contradictions.",
    ideas: ["dialectic", "recognition", "spirit", "historical development"],
    primaryWork: "Phenomenology of Spirit",
    archiveNote: "Hegel turns the page from timeless order toward movement."
  },
  feuerbach: {
    life: "1804-1872",
    place: "Bavaria",
    history:
      "Feuerbach broke with speculative idealism by reading theology as a human projection. For him, sacred images reveal human needs, human powers, and human dependence in disguised form.",
    legacy:
      "He pulls the archive downward into embodiment. Abstraction has to answer to hunger, feeling, community, and the fact that thinking belongs to living human beings.",
    ideas: ["humanism", "projection", "embodiment", "religion critique"],
    primaryWork: "The Essence of Christianity",
    archiveNote: "Feuerbach is a hinge between German idealism and materialist critique."
  },
  marx: {
    life: "1818-1883",
    place: "Trier, Paris, London",
    history:
      "Marx came out of German philosophy, radical journalism, and exile. His mature work studied capitalism as a historical system built from labor, property, class struggle, and crisis.",
    legacy:
      "He changes the question from what the world means to how it is produced. Ideas matter, but they live inside material relations that can be analyzed and transformed.",
    ideas: ["historical materialism", "class", "alienation", "capital"],
    primaryWork: "Capital",
    archiveNote: "Marx is the pressure point where interpretation becomes social diagnosis."
  },
  engels: {
    life: "1820-1895",
    place: "Barmen, Manchester, London",
    history:
      "Engels combined industrial observation, political organizing, and philosophical synthesis. His time in Manchester gave him a direct view of factory life and the social costs of industrial capitalism.",
    legacy:
      "He extends the archive's systems view: nature, labor, family, property, and history move together. His writing made Marxist ideas more accessible and organized.",
    ideas: ["dialectical materialism", "industrial society", "nature", "class analysis"],
    primaryWork: "Socialism: Utopian and Scientific",
    archiveNote: "Engels keeps the map connected, practical, and historically wide."
  },
  lenin: {
    life: "1870-1924",
    place: "Simbirsk, Zurich, Petrograd",
    history:
      "Lenin worked as a theorist, organizer, and revolutionary leader in the Russian Empire's crisis. He read philosophy through strategy, power, party organization, and the urgency of political action.",
    legacy:
      "He makes theory answer to intervention. For Lenin, analysis that never becomes organized practice remains unfinished, especially when the state and class power are at stake.",
    ideas: ["praxis", "party organization", "imperialism", "revolutionary strategy"],
    primaryWork: "What Is To Be Done?",
    archiveNote: "Lenin is the point where a map becomes a route."
  },
  nietzsche: {
    life: "1844-1900",
    place: "Roecken, Basel, Turin",
    history:
      "Nietzsche wrote against moral comfort, herd certainty, and inherited metaphysics. His aphoristic style turns philosophy into pressure, provocation, and self-examination.",
    legacy:
      "He asks who benefits from a value, what kind of life it protects, and whether a person has the courage to create rather than merely obey.",
    ideas: ["genealogy", "will to power", "value creation", "critique of morality"],
    primaryWork: "On the Genealogy of Morality",
    archiveNote: "Nietzsche sharpens the archive with suspicion and self-overcoming."
  },
  beauvoir: {
    life: "1908-1986",
    place: "Paris",
    history:
      "Beauvoir brought existential freedom into contact with gender, dependence, aging, love, and social constraint. She showed that becoming a self happens inside a world that assigns roles.",
    legacy:
      "Her philosophy refuses a thin idea of freedom. Choice matters, but it is lived through bodies, institutions, myths, labor, and the long pressure of being made into an Other.",
    ideas: ["existential feminism", "ambiguity", "otherness", "situated freedom"],
    primaryWork: "The Second Sex",
    archiveNote: "Beauvoir gives freedom a body, a history, and a social cost."
  },
  sartre: {
    life: "1905-1980",
    place: "Paris",
    history:
      "Sartre made existentialism a public language after the Second World War. His philosophy centers on choice, bad faith, responsibility, and the burden of making meaning without fixed essence.",
    legacy:
      "He brings the archive back to the individual without letting the individual escape responsibility. Even refusal becomes a choice, and identity is a project made in the open.",
    ideas: ["existence", "bad faith", "responsibility", "freedom"],
    primaryWork: "Existentialism Is a Humanism",
    archiveNote: "Sartre closes the route by asking what you are doing with your freedom."
  }
};

export const archiveThreads: ArchiveThread[] = [
  {
    title: "Order and character",
    ids: ["plato", "aristotle", "confucius"],
    copy: "These thinkers ask how a life becomes rightly formed: through ideals, habits, education, ritual, and public trust."
  },
  {
    title: "Movement and material life",
    ids: ["hegel", "feuerbach", "marx", "engels", "lenin"],
    copy: "This line follows contradiction down into bodies, labor, history, class, and organized action."
  },
  {
    title: "Freedom under pressure",
    ids: ["nietzsche", "beauvoir", "sartre", "laozi"],
    copy: "Here freedom is tested by inherited values, gendered worlds, responsibility, and the discipline of restraint."
  }
];
