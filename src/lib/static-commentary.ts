import type { AiCommentary, PhilosopherId, QuizResult } from "@/lib/types";

export const STATIC_COMMENTARY_BY_PHILOSOPHER: Record<PhilosopherId, AiCommentary> = {
  marx: {
    summary:
      "Your answers point toward Marx: a mind that treats private frustration as a clue to shared material conditions.",
    beliefProfile:
      "You tend to distrust explanations that isolate the individual from labor, class, dependence, and the institutions that organize daily life. When something feels personal, your first instinct is to ask what social relation produced it, who benefits from it, and what practical change would make freedom less abstract.",
    strengths: [
      "You can connect personal experience to larger systems without losing the human stakes.",
      "You are good at asking who benefits when a situation is presented as natural or inevitable.",
      "You prefer ideas that can be tested through practice, solidarity, and material consequences."
    ],
    blindSpots: [
      "You may become impatient with symbolic, spiritual, or intimate explanations before hearing what they reveal.",
      "You can read structure so strongly that individual ambiguity feels secondary.",
      "You may underestimate how slowly people change when their habits, fears, and loyalties are involved."
    ],
    recommendedReadings: [
      "Economic and Philosophic Manuscripts of 1844",
      "Theses on Feuerbach",
      "Capital, Volume I, especially the chapters on commodity fetishism and the working day"
    ],
    disclaimer:
      "This is a reflective interpretation of quiz answers, not a psychological diagnosis, political label, or academic evaluation."
  },
  engels: {
    summary:
      "Your answers point toward Engels: a system-builder who wants ideas, nature, production, and society to be read together.",
    beliefProfile:
      "You are drawn to explanations that connect many layers at once: material life, historical movement, technical change, and the pressures inside social institutions. You are less interested in isolated insight than in a pattern that can hold up across disciplines and show how one condition changes another.",
    strengths: [
      "You notice broad patterns without immediately flattening them into slogans.",
      "You can translate theory into a practical map of forces, constraints, and likely outcomes.",
      "You value intellectual partnership and cumulative work over purely solitary originality."
    ],
    blindSpots: [
      "You may trust the coherence of a system before checking the texture of a single lived case.",
      "You can become overly confident when a pattern seems elegant.",
      "You may underplay moral uncertainty when historical direction feels clear."
    ],
    recommendedReadings: [
      "Socialism: Utopian and Scientific",
      "Anti-Duhring",
      "The Origin of the Family, Private Property and the State"
    ],
    disclaimer:
      "This is a reflective interpretation of quiz answers, not a psychological diagnosis, political label, or academic evaluation."
  },
  lenin: {
    summary:
      "Your answers point toward Lenin: a practical strategist who thinks analysis should become organized intervention.",
    beliefProfile:
      "You tend to judge an idea by whether it clarifies what must be done next. You are alert to power, discipline, timing, and the difference between having a correct opinion and building the means to act on it. Passive insight probably feels incomplete to you.",
    strengths: [
      "You can move from diagnosis to strategy without getting lost in abstraction.",
      "You notice when good intentions lack organization, timing, or leverage.",
      "You are willing to test claims against practice rather than letting them remain decorative."
    ],
    blindSpots: [
      "You may overvalue discipline when a situation also needs listening, plurality, or repair.",
      "You can become suspicious of hesitation even when hesitation is ethically useful.",
      "You may treat disagreement as disorganization before understanding its substance."
    ],
    recommendedReadings: [
      "What Is To Be Done?",
      "Materialism and Empirio-criticism",
      "State and Revolution"
    ],
    disclaimer:
      "This is a reflective interpretation of quiz answers, not a psychological diagnosis, political label, or academic evaluation."
  },
  hegel: {
    summary:
      "Your answers point toward Hegel: a dialectical thinker who expects truth to emerge through tension, history, and development.",
    beliefProfile:
      "You are inclined to see conflict as more than a problem to remove. A contradiction often looks to you like a sign that a form of life, a belief, or an institution is revealing its own limits. You want the whole movement, not only the isolated moment.",
    strengths: [
      "You can sit with tension long enough to see what it is trying to become.",
      "You resist shallow either-or answers when a contradiction needs development.",
      "You understand identity as historical, relational, and unfinished."
    ],
    blindSpots: [
      "You may make a problem more abstract than it needs to be.",
      "You can sound reconciled to conflict when someone else needs direct relief.",
      "You may privilege the shape of the whole over the pain of a particular part."
    ],
    recommendedReadings: [
      "Phenomenology of Spirit",
      "Elements of the Philosophy of Right",
      "The Science of Logic, beginning with the shorter introductory sections"
    ],
    disclaimer:
      "This is a reflective interpretation of quiz answers, not a psychological diagnosis, political label, or academic evaluation."
  },
  feuerbach: {
    summary:
      "Your answers point toward Feuerbach: a humanist materialism that brings grand ideas back to embodied need.",
    beliefProfile:
      "You tend to ask what human hunger, love, fear, dependence, or longing is hiding underneath an abstract claim. You are suspicious of ideals that float above ordinary life, but you are not coldly reductive; your materialism is often tender because it begins with the body and its needs.",
    strengths: [
      "You can demystify big claims without losing compassion for the people who need them.",
      "You notice the bodily and emotional costs behind supposedly pure ideas.",
      "You are good at returning theory to human scale."
    ],
    blindSpots: [
      "You may explain belief through projection before asking what truth it might still contain.",
      "You can underplay institutions and power when focusing on shared human need.",
      "You may prefer warmth and concreteness to difficult structural analysis."
    ],
    recommendedReadings: [
      "The Essence of Christianity",
      "Principles of the Philosophy of the Future",
      "Lectures on the Essence of Religion"
    ],
    disclaimer:
      "This is a reflective interpretation of quiz answers, not a psychological diagnosis, political label, or academic evaluation."
  },
  plato: {
    summary:
      "Your answers point toward Plato: a search for order, truth, and a life shaped by the Good rather than passing opinion.",
    beliefProfile:
      "You are drawn to the thought that appearances are unstable and that good judgment requires orientation toward something higher than appetite, fashion, or convenience. You probably want education, character, and public life to be guided by wisdom rather than impulse.",
    strengths: [
      "You refuse to confuse popularity with truth.",
      "You can hold a long view of formation, education, and moral order.",
      "You are sensitive to how badly desire can govern when it is left unexamined."
    ],
    blindSpots: [
      "You may distrust ordinary experience too quickly when it does not look orderly.",
      "You can become paternalistic when you believe wisdom is unevenly distributed.",
      "You may prefer clean ideals to the compromise and friction of democratic life."
    ],
    recommendedReadings: ["Republic", "Apology", "Phaedrus"],
    disclaimer:
      "This is a reflective interpretation of quiz answers, not a psychological diagnosis, political label, or academic evaluation."
  },
  aristotle: {
    summary:
      "Your answers point toward Aristotle: a practical intelligence that looks for character, proportion, and the good life in action.",
    beliefProfile:
      "You tend to trust concrete situations more than sweeping slogans. For you, a good life is not only a theory but a practiced shape of judgment, habit, friendship, and purpose. You want ideals to survive contact with ordinary decisions.",
    strengths: [
      "You are good at finding the workable middle without reducing it to bland compromise.",
      "You understand that character is built through repeated action.",
      "You can bring abstract questions down to concrete cases and responsibilities."
    ],
    blindSpots: [
      "You may accept inherited social roles too calmly when they deserve critique.",
      "You can become cautious when a situation demands rupture or refusal.",
      "You may underplay how material pressure limits the habits people can realistically form."
    ],
    recommendedReadings: ["Nicomachean Ethics", "Politics", "Poetics"],
    disclaimer:
      "This is a reflective interpretation of quiz answers, not a psychological diagnosis, political label, or academic evaluation."
  },
  nietzsche: {
    summary:
      "Your answers point toward Nietzsche: a critical temperament that suspects inherited morality and asks what kind of life it serves.",
    beliefProfile:
      "You are quick to notice when values become disguises for fear, resentment, conformity, or weakness. You want people to examine the origin of their loyalties and to create forms of life that are stronger, more honest, and less dependent on approval.",
    strengths: [
      "You can expose false virtue and comfortable self-deception.",
      "You push toward intellectual honesty even when it is socially inconvenient.",
      "You are sensitive to vitality, courage, and the creative task of becoming oneself."
    ],
    blindSpots: [
      "You may be too harsh toward dependence, care, or ordinary vulnerability.",
      "You can mistake compassion for weakness when it may be a form of strength.",
      "You may critique inherited values faster than you build livable alternatives."
    ],
    recommendedReadings: ["On the Genealogy of Morality", "The Gay Science", "Thus Spoke Zarathustra"],
    disclaimer:
      "This is a reflective interpretation of quiz answers, not a psychological diagnosis, political label, or academic evaluation."
  },
  confucius: {
    summary:
      "Your answers point toward Confucius: a relational ethic that treats character as something cultivated with others.",
    beliefProfile:
      "You tend to see the self through family, education, ritual, friendship, and civic trust. Freedom, for you, is not just self-expression; it is also the ability to become reliable, humane, and responsive inside shared forms of life.",
    strengths: [
      "You understand that social trust is built through repeated care, not only declared values.",
      "You take education, respect, and example seriously.",
      "You can see dignity in ordinary obligations that others dismiss as routine."
    ],
    blindSpots: [
      "You may preserve harmony longer than justice allows.",
      "You can underplay how roles become oppressive when they stop serving humanity.",
      "You may trust gradual moral cultivation when a sharper critique of power is needed."
    ],
    recommendedReadings: ["Analects", "Mencius", "The Great Learning"],
    disclaimer:
      "This is a reflective interpretation of quiz answers, not a psychological diagnosis, political label, or academic evaluation."
  },
  laozi: {
    summary:
      "Your answers point toward Laozi: a quiet intelligence that trusts restraint, indirect action, and the rhythm of things.",
    beliefProfile:
      "You often sense that force creates the resistance it claims to solve. Instead of trying to dominate every situation, you look for the point where action becomes lighter, power becomes less theatrical, and clarity returns because the ego stops gripping the world.",
    strengths: [
      "You know when less control can produce a wiser outcome.",
      "You are sensitive to excess, strain, and the violence hidden inside over-management.",
      "You can find freedom in simplicity, patience, and responsiveness."
    ],
    blindSpots: [
      "You may retreat into restraint when someone needs direct confrontation.",
      "You can make peace with ambiguity longer than a harmed person can afford.",
      "You may distrust organization even when collective action is necessary."
    ],
    recommendedReadings: ["Dao De Jing", "Zhuangzi", "A short comparative introduction to Daoism and Confucianism"],
    disclaimer:
      "This is a reflective interpretation of quiz answers, not a psychological diagnosis, political label, or academic evaluation."
  },
  beauvoir: {
    summary:
      "Your answers point toward Beauvoir: a situated freedom that asks how people become themselves inside unequal conditions.",
    beliefProfile:
      "You tend to notice the gap between abstract freedom and the actual lives people are allowed to live. You are interested in dependence, gender, culture, recognition, and the ways people are taught to accept limits as identity. Freedom must become concrete or it remains only a slogan.",
    strengths: [
      "You connect personal becoming to social situation with unusual clarity.",
      "You notice subtle forms of dependence, objectification, and learned limitation.",
      "You keep freedom tied to responsibility toward other people."
    ],
    blindSpots: [
      "You may carry the weight of ambiguity so carefully that decision feels delayed.",
      "You can overread personal relations through constraint when joy and play are also present.",
      "You may expect more lucidity from people than their situation has allowed them to build."
    ],
    recommendedReadings: ["The Second Sex", "The Ethics of Ambiguity", "Memoirs of a Dutiful Daughter"],
    disclaimer:
      "This is a reflective interpretation of quiz answers, not a psychological diagnosis, political label, or academic evaluation."
  },
  sartre: {
    summary:
      "Your answers point toward Sartre: a radical responsibility that treats identity as something made through choice.",
    beliefProfile:
      "You are drawn to the idea that people are not finished objects with fixed essence. Even under pressure, you look for the moment of authorship: the choice, refusal, commitment, or self-deception that reveals what a person is making of themselves.",
    strengths: [
      "You refuse excuses that turn a person into a passive thing.",
      "You can name bad faith when someone hides behind a role, label, or script.",
      "You take responsibility seriously as a living practice, not an abstract virtue."
    ],
    blindSpots: [
      "You may overstate choice when material limits are severe.",
      "You can be hard on people who need safety before they can act freely.",
      "You may make responsibility feel lonely when it also needs solidarity."
    ],
    recommendedReadings: ["Existentialism Is a Humanism", "Being and Nothingness", "No Exit"],
    disclaimer:
      "This is a reflective interpretation of quiz answers, not a psychological diagnosis, political label, or academic evaluation."
  }
};

export function getStaticCommentary(result: Pick<QuizResult, "topMatches">): AiCommentary {
  return STATIC_COMMENTARY_BY_PHILOSOPHER[result.topMatches[0].id];
}
