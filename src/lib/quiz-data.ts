import type { QuizQuestion } from "@/lib/types";

export const QUESTIONS: QuizQuestion[] = [
  {
    id: "q01",
    axis: "materialism",
    prompt: "What shapes society more deeply: ideas or material conditions?",
    context: "The first syllabus tension: whether consciousness leads life, or life conditions consciousness.",
    answers: [
      {
        id: "a",
        text: "Ideas matter, but they grow from labor, property, class, and daily material life.",
        philosopherWeights: { marx: 4, engels: 3, lenin: 2 },
        axisWeights: { materialism: 4, individual_society: 2 }
      },
      {
        id: "b",
        text: "Ideas unfold historically; society is the visible drama of reason becoming aware of itself.",
        philosopherWeights: { hegel: 4, plato: 2 },
        axisWeights: { dialectics: 3, materialism: -1 }
      },
      {
        id: "c",
        text: "Begin with human bodies, senses, hunger, affection, and the needs people project into ideals.",
        philosopherWeights: { feuerbach: 4, aristotle: 1 },
        axisWeights: { materialism: 3, ethics_action: 1 }
      },
      {
        id: "d",
        text: "Social harmony depends on cultivated conduct, shared rites, and moral education across generations.",
        philosopherWeights: { confucius: 4, aristotle: 1 },
        axisWeights: { individual_society: 3, ethics_action: 2 }
      }
    ]
  },
  {
    id: "q02",
    axis: "materialism",
    prompt: "When your beliefs conflict with real evidence from practice, what should happen?",
    context: "Marxist-Leninist philosophy treats practice as a test of truth.",
    answers: [
      {
        id: "a",
        text: "Revise the theory. Practice is where an idea proves whether it has contact with the world.",
        philosopherWeights: { lenin: 4, marx: 3, engels: 2 },
        axisWeights: { materialism: 3, ethics_action: 2 }
      },
      {
        id: "b",
        text: "Ask whether the evidence is only an appearance of a deeper rational structure.",
        philosopherWeights: { plato: 3, hegel: 3 },
        axisWeights: { materialism: -1, dialectics: 2 }
      },
      {
        id: "c",
        text: "Check the concrete case carefully; wisdom lives in particulars, not slogans.",
        philosopherWeights: { aristotle: 4, confucius: 1 },
        axisWeights: { ethics_action: 3, materialism: 1 }
      },
      {
        id: "d",
        text: "Notice whether your belief was just a costume for fear, resentment, or borrowed morality.",
        philosopherWeights: { nietzsche: 4, sartre: 2 },
        axisWeights: { freedom_alienation: 3, authority_power: 2 }
      }
    ]
  },
  {
    id: "q03",
    axis: "materialism",
    prompt: "Is consciousness independent, or rooted in material life?",
    context: "The question echoes the basic problem of philosophy in your syllabus.",
    answers: [
      {
        id: "a",
        text: "Consciousness is real, but it is rooted in material and social life before it becomes theory.",
        philosopherWeights: { marx: 4, engels: 4 },
        axisWeights: { materialism: 4, individual_society: 2 }
      },
      {
        id: "b",
        text: "Consciousness points beyond the visible world toward forms, ideals, and rational order.",
        philosopherWeights: { plato: 4, hegel: 2 },
        axisWeights: { materialism: -2, dialectics: 1 }
      },
      {
        id: "c",
        text: "It is embodied: a human being senses, loves, fears, and imagines before abstracting.",
        philosopherWeights: { feuerbach: 4, beauvoir: 1 },
        axisWeights: { materialism: 3, freedom_alienation: 1 }
      },
      {
        id: "d",
        text: "Do not over-control it; awareness clears when the self stops forcing the world into concepts.",
        philosopherWeights: { laozi: 4, sartre: 1 },
        axisWeights: { freedom_alienation: 2, ethics_action: 1 }
      }
    ]
  },
  {
    id: "q04",
    axis: "materialism",
    prompt: "What is the best way to understand a person's character?",
    context: "This links the abstract human being to social relations and daily practice.",
    answers: [
      {
        id: "a",
        text: "Look at their labor, dependencies, social position, and the pressures that shape their choices.",
        philosopherWeights: { marx: 4, beauvoir: 2, engels: 1 },
        axisWeights: { materialism: 3, individual_society: 3 }
      },
      {
        id: "b",
        text: "Look at their habits: repeated action reveals the kind of person they are becoming.",
        philosopherWeights: { aristotle: 4, confucius: 2 },
        axisWeights: { ethics_action: 4 }
      },
      {
        id: "c",
        text: "Look at whether they flee freedom by pretending they had no choice.",
        philosopherWeights: { sartre: 4, beauvoir: 2 },
        axisWeights: { freedom_alienation: 4 }
      },
      {
        id: "d",
        text: "Look at whether they obey inherited values or have the strength to create their own.",
        philosopherWeights: { nietzsche: 4, laozi: 1 },
        axisWeights: { authority_power: 2, freedom_alienation: 3 }
      }
    ]
  },
  {
    id: "q05",
    axis: "materialism",
    prompt: "What should philosophy do when people suffer?",
    context: "The site treats philosophy as reflection connected to social life, not decorative trivia.",
    answers: [
      {
        id: "a",
        text: "Find the social roots of suffering, then help people organize conditions differently.",
        philosopherWeights: { marx: 4, lenin: 3, engels: 2 },
        axisWeights: { materialism: 3, ethics_action: 3, individual_society: 2 }
      },
      {
        id: "b",
        text: "Educate desire so the soul turns away from illusion and toward the Good.",
        philosopherWeights: { plato: 4, confucius: 1 },
        axisWeights: { ethics_action: 2, materialism: -1 }
      },
      {
        id: "c",
        text: "Help people own their freedom without denying the situation that constrains them.",
        philosopherWeights: { beauvoir: 4, sartre: 3 },
        axisWeights: { freedom_alienation: 4, individual_society: 1 }
      },
      {
        id: "d",
        text: "Teach proportion, friendship, and practical habits that make life more livable.",
        philosopherWeights: { aristotle: 4, confucius: 2 },
        axisWeights: { ethics_action: 4 }
      }
    ]
  },
  {
    id: "q06",
    axis: "dialectics",
    prompt: "Is contradiction a problem to remove or a source of development?",
    context: "A direct bridge into dialectics versus metaphysics.",
    answers: [
      {
        id: "a",
        text: "Contradiction is not noise; it is the pressure through which history and thought move.",
        philosopherWeights: { hegel: 4, marx: 3, engels: 3 },
        axisWeights: { dialectics: 4 }
      },
      {
        id: "b",
        text: "Contradiction inside society shows where material relations have become unstable.",
        philosopherWeights: { marx: 4, lenin: 3 },
        axisWeights: { dialectics: 4, authority_power: 2 }
      },
      {
        id: "c",
        text: "Avoid forcing conflict; the deepest transformations often happen by yielding at the right moment.",
        philosopherWeights: { laozi: 4, confucius: 1 },
        axisWeights: { dialectics: 2, ethics_action: 2 }
      },
      {
        id: "d",
        text: "Contradiction exposes old values as masks, and that is when stronger values can be born.",
        philosopherWeights: { nietzsche: 4, sartre: 1 },
        axisWeights: { dialectics: 2, freedom_alienation: 2 }
      }
    ]
  },
  {
    id: "q07",
    axis: "dialectics",
    prompt: "How does real change usually happen?",
    context: "This maps gradual development, rupture, reform, and revolution.",
    answers: [
      {
        id: "a",
        text: "Small tensions accumulate until a qualitative break becomes unavoidable.",
        philosopherWeights: { engels: 4, marx: 3, hegel: 2 },
        axisWeights: { dialectics: 4 }
      },
      {
        id: "b",
        text: "Change needs organization; anger without strategy becomes wasted motion.",
        philosopherWeights: { lenin: 4, marx: 2 },
        axisWeights: { ethics_action: 2, authority_power: 3 }
      },
      {
        id: "c",
        text: "Character changes by repeated practice, not dramatic declarations.",
        philosopherWeights: { aristotle: 4, confucius: 3 },
        axisWeights: { ethics_action: 4 }
      },
      {
        id: "d",
        text: "Change begins when a person refuses the role they were told to perform.",
        philosopherWeights: { beauvoir: 4, sartre: 3, nietzsche: 1 },
        axisWeights: { freedom_alienation: 4 }
      }
    ]
  },
  {
    id: "q08",
    axis: "dialectics",
    prompt: "When two views clash, what do you instinctively do?",
    context: "A practical version of dialectical thinking.",
    answers: [
      {
        id: "a",
        text: "Ask what historical forces made both views necessary, then look for the next stage.",
        philosopherWeights: { hegel: 4, engels: 2 },
        axisWeights: { dialectics: 4 }
      },
      {
        id: "b",
        text: "Ask whose interests each view protects and what material conditions gave it power.",
        philosopherWeights: { marx: 4, lenin: 3 },
        axisWeights: { dialectics: 3, authority_power: 3 }
      },
      {
        id: "c",
        text: "Ask which view best trains people toward humane conduct and social trust.",
        philosopherWeights: { confucius: 4, aristotle: 2 },
        axisWeights: { ethics_action: 3, individual_society: 2 }
      },
      {
        id: "d",
        text: "Ask whether both views are clinging too hard; sometimes the answer is to loosen the grip.",
        philosopherWeights: { laozi: 4 },
        axisWeights: { dialectics: 2, freedom_alienation: 2 }
      }
    ]
  },
  {
    id: "q09",
    axis: "dialectics",
    prompt: "Which statement feels most true about history?",
    context: "The question separates cyclical, idealist, materialist, and existential readings of history.",
    answers: [
      {
        id: "a",
        text: "History is moved by production, conflict, class relations, and the struggle to change them.",
        philosopherWeights: { marx: 4, engels: 3, lenin: 2 },
        axisWeights: { materialism: 3, dialectics: 3 }
      },
      {
        id: "b",
        text: "History is reason slowly learning what it is through contradiction.",
        philosopherWeights: { hegel: 4, plato: 1 },
        axisWeights: { dialectics: 4, materialism: -1 }
      },
      {
        id: "c",
        text: "History is a field where people are thrown into roles and must still choose.",
        philosopherWeights: { sartre: 4, beauvoir: 3 },
        axisWeights: { freedom_alienation: 4, individual_society: 1 }
      },
      {
        id: "d",
        text: "History decays when rites, responsibility, and education lose their moral center.",
        philosopherWeights: { confucius: 4, plato: 2 },
        axisWeights: { ethics_action: 3, individual_society: 2 }
      }
    ]
  },
  {
    id: "q10",
    axis: "dialectics",
    prompt: "What kind of explanation do you trust most?",
    context: "This tests whether the user prefers static categories or relations in motion.",
    answers: [
      {
        id: "a",
        text: "One that shows a thing in motion: where it came from, what conflicts shape it, where it may go.",
        philosopherWeights: { engels: 4, hegel: 3, marx: 2 },
        axisWeights: { dialectics: 4 }
      },
      {
        id: "b",
        text: "One that identifies the form, purpose, and practical function of the thing.",
        philosopherWeights: { aristotle: 4, plato: 1 },
        axisWeights: { ethics_action: 2 }
      },
      {
        id: "c",
        text: "One that unmasks the hidden will to power behind official reasons.",
        philosopherWeights: { nietzsche: 4, lenin: 1 },
        axisWeights: { authority_power: 4 }
      },
      {
        id: "d",
        text: "One that is simple enough to live by without turning the world into a prison of concepts.",
        philosopherWeights: { laozi: 4, feuerbach: 1 },
        axisWeights: { freedom_alienation: 2, ethics_action: 1 }
      }
    ]
  },
  {
    id: "q11",
    axis: "individual_society",
    prompt: "Can a person be fully free outside social relations?",
    context: "A key question from the philosophical theory of humans.",
    answers: [
      {
        id: "a",
        text: "No. The individual is formed through social relations, work, language, and history.",
        philosopherWeights: { marx: 4, engels: 2, beauvoir: 2 },
        axisWeights: { individual_society: 4, materialism: 2 }
      },
      {
        id: "b",
        text: "Freedom appears only when we accept responsibility for what we choose, even under pressure.",
        philosopherWeights: { sartre: 4, beauvoir: 2 },
        axisWeights: { freedom_alienation: 4 }
      },
      {
        id: "c",
        text: "A person becomes humane through family, ritual, study, and mutual obligation.",
        philosopherWeights: { confucius: 4, aristotle: 1 },
        axisWeights: { individual_society: 4, ethics_action: 2 }
      },
      {
        id: "d",
        text: "The highest person must sometimes stand apart from the herd to create new values.",
        philosopherWeights: { nietzsche: 4 },
        axisWeights: { freedom_alienation: 3, authority_power: 2, individual_society: -1 }
      }
    ]
  },
  {
    id: "q12",
    axis: "individual_society",
    prompt: "What matters more in history: great leaders or the masses?",
    context: "Historical materialism asks how people collectively make history.",
    answers: [
      {
        id: "a",
        text: "The masses make history, but organization and theory can focus their force.",
        philosopherWeights: { lenin: 4, marx: 3 },
        axisWeights: { individual_society: 4, authority_power: 2 }
      },
      {
        id: "b",
        text: "Social classes and material contradictions matter more than heroic biography.",
        philosopherWeights: { marx: 4, engels: 3 },
        axisWeights: { individual_society: 4, materialism: 3 }
      },
      {
        id: "c",
        text: "Exceptional individuals can rupture stale morality and show what humanity might become.",
        philosopherWeights: { nietzsche: 4, sartre: 1 },
        axisWeights: { freedom_alienation: 3, authority_power: 2 }
      },
      {
        id: "d",
        text: "Wise leadership matters when it models virtue and preserves social trust.",
        philosopherWeights: { confucius: 4, plato: 2, aristotle: 1 },
        axisWeights: { ethics_action: 3, authority_power: 1 }
      }
    ]
  },
  {
    id: "q13",
    axis: "individual_society",
    prompt: "How much should family or culture shape identity?",
    context: "A personality-friendly version of social consciousness and culture.",
    answers: [
      {
        id: "a",
        text: "They shape us deeply, and wisdom means honoring the relationships that made us.",
        philosopherWeights: { confucius: 4, aristotle: 1 },
        axisWeights: { individual_society: 4, ethics_action: 2 }
      },
      {
        id: "b",
        text: "They shape us, but they can also naturalize oppression and must be critically examined.",
        philosopherWeights: { beauvoir: 4, marx: 2 },
        axisWeights: { individual_society: 3, freedom_alienation: 3 }
      },
      {
        id: "c",
        text: "They are raw material. A person still has to choose what they become.",
        philosopherWeights: { sartre: 4, nietzsche: 2 },
        axisWeights: { freedom_alienation: 4 }
      },
      {
        id: "d",
        text: "Culture often hides class interests, so I ask who benefits from calling it natural.",
        philosopherWeights: { marx: 4, lenin: 2 },
        axisWeights: { authority_power: 3, materialism: 2 }
      }
    ]
  },
  {
    id: "q14",
    axis: "individual_society",
    prompt: "What creates alienation in modern life?",
    context: "Alienation is central to Marx and useful for a modern personality result.",
    answers: [
      {
        id: "a",
        text: "Work and social relations become alien when people lose control over what they produce and why.",
        philosopherWeights: { marx: 4, engels: 2 },
        axisWeights: { freedom_alienation: 4, materialism: 3 }
      },
      {
        id: "b",
        text: "Alienation appears when people perform roles that deny their freedom and situation.",
        philosopherWeights: { beauvoir: 4, sartre: 3 },
        axisWeights: { freedom_alienation: 4, individual_society: 2 }
      },
      {
        id: "c",
        text: "Alienation comes from chasing artificial desires and losing the simple way of things.",
        philosopherWeights: { laozi: 4, feuerbach: 1 },
        axisWeights: { freedom_alienation: 3, ethics_action: 1 }
      },
      {
        id: "d",
        text: "Alienation grows when education stops forming character and becomes only status.",
        philosopherWeights: { confucius: 3, aristotle: 3, plato: 1 },
        axisWeights: { ethics_action: 3, individual_society: 2 }
      }
    ]
  },
  {
    id: "q15",
    axis: "individual_society",
    prompt: "Should technology mainly serve efficiency, liberation, or control?",
    context: "A modern bridge from material conditions to political power.",
    answers: [
      {
        id: "a",
        text: "Liberation: it should reduce domination and give people more control over shared life.",
        philosopherWeights: { marx: 3, engels: 2, beauvoir: 2 },
        axisWeights: { materialism: 2, freedom_alienation: 3 }
      },
      {
        id: "b",
        text: "Organization: technology is useful when it strengthens collective strategy and discipline.",
        philosopherWeights: { lenin: 4, engels: 2 },
        axisWeights: { ethics_action: 2, authority_power: 3 }
      },
      {
        id: "c",
        text: "Measure: tools should support a flourishing life, not define the purpose of life.",
        philosopherWeights: { aristotle: 4, confucius: 2 },
        axisWeights: { ethics_action: 4 }
      },
      {
        id: "d",
        text: "Restraint: too much forcing turns tools into another way the ego tries to command the world.",
        philosopherWeights: { laozi: 4, nietzsche: 1 },
        axisWeights: { freedom_alienation: 2, authority_power: 1 }
      }
    ]
  },
  {
    id: "q16",
    axis: "authority_power",
    prompt: "Is the state neutral, or tied to deeper social interests?",
    context: "This is one of the clearest historical-materialist questions.",
    answers: [
      {
        id: "a",
        text: "It is not neutral; it expresses and manages deeper conflicts in social and class relations.",
        philosopherWeights: { marx: 4, engels: 3, lenin: 3 },
        axisWeights: { authority_power: 4, materialism: 3 }
      },
      {
        id: "b",
        text: "It should be guided by wisdom and education, otherwise appetite rules public life.",
        philosopherWeights: { plato: 4, confucius: 1 },
        axisWeights: { authority_power: 2, ethics_action: 2 }
      },
      {
        id: "c",
        text: "It is dangerous whenever people pretend obedience is the same thing as morality.",
        philosopherWeights: { nietzsche: 4, sartre: 2 },
        axisWeights: { authority_power: 4, freedom_alienation: 2 }
      },
      {
        id: "d",
        text: "The best government does not overreach; it creates conditions where people can live simply.",
        philosopherWeights: { laozi: 4 },
        axisWeights: { authority_power: 2, ethics_action: 1 }
      }
    ]
  },
  {
    id: "q17",
    axis: "authority_power",
    prompt: "When an authority says something is true, what is your first instinct?",
    context: "A classic personality-test question translated into philosophy.",
    answers: [
      {
        id: "a",
        text: "Ask what social interest, institution, or class position makes that truth convenient.",
        philosopherWeights: { marx: 4, lenin: 3, nietzsche: 1 },
        axisWeights: { authority_power: 4, materialism: 2 }
      },
      {
        id: "b",
        text: "Test whether it survives rational examination and fits the larger whole.",
        philosopherWeights: { hegel: 3, plato: 2, aristotle: 1 },
        axisWeights: { dialectics: 2, ethics_action: 1 }
      },
      {
        id: "c",
        text: "Ask whether the authority has cultivated virtue and deserves trust.",
        philosopherWeights: { confucius: 4, aristotle: 2 },
        axisWeights: { ethics_action: 3, authority_power: 1 }
      },
      {
        id: "d",
        text: "Suspect it. Authority often dresses fear and weakness in noble language.",
        philosopherWeights: { nietzsche: 4, sartre: 1 },
        axisWeights: { authority_power: 4 }
      }
    ]
  },
  {
    id: "q18",
    axis: "authority_power",
    prompt: "What should people do when society's rules feel wrong?",
    context: "This separates reform, revolution, withdrawal, and self-creation.",
    answers: [
      {
        id: "a",
        text: "Study the structure behind the rule, then organize with others to change it.",
        philosopherWeights: { lenin: 4, marx: 3 },
        axisWeights: { authority_power: 3, ethics_action: 3, individual_society: 2 }
      },
      {
        id: "b",
        text: "Ask whether the rule damages human flourishing in concrete life.",
        philosopherWeights: { aristotle: 3, feuerbach: 2, beauvoir: 1 },
        axisWeights: { ethics_action: 3, materialism: 1 }
      },
      {
        id: "c",
        text: "Disobey inwardly first: refuse to let the crowd name your values for you.",
        philosopherWeights: { nietzsche: 4, sartre: 2 },
        axisWeights: { freedom_alienation: 3, authority_power: 3 }
      },
      {
        id: "d",
        text: "Correct conduct through education and example before burning the whole house down.",
        philosopherWeights: { confucius: 4, plato: 1 },
        axisWeights: { ethics_action: 3, individual_society: 2 }
      }
    ]
  },
  {
    id: "q19",
    axis: "authority_power",
    prompt: "Is morality discovered, created, or inherited?",
    context: "This helps distinguish classical, Nietzschean, social, and Confucian profiles.",
    answers: [
      {
        id: "a",
        text: "It is historically shaped; moral language changes as social life changes.",
        philosopherWeights: { marx: 3, engels: 2, beauvoir: 2 },
        axisWeights: { materialism: 2, dialectics: 2 }
      },
      {
        id: "b",
        text: "It is discovered by orienting the soul toward truth and the Good.",
        philosopherWeights: { plato: 4, hegel: 1 },
        axisWeights: { ethics_action: 3, materialism: -1 }
      },
      {
        id: "c",
        text: "It is created by those strong enough to take responsibility for value.",
        philosopherWeights: { nietzsche: 4, sartre: 2 },
        axisWeights: { freedom_alienation: 3, authority_power: 2 }
      },
      {
        id: "d",
        text: "It is cultivated through inherited practices that make people humane.",
        philosopherWeights: { confucius: 4, aristotle: 2 },
        axisWeights: { ethics_action: 4, individual_society: 2 }
      }
    ]
  },
  {
    id: "q20",
    axis: "authority_power",
    prompt: "What is the most dangerous kind of power?",
    context: "Power can appear as class rule, false universals, custom, or self-deception.",
    answers: [
      {
        id: "a",
        text: "Power that hides inside economic necessity and makes domination look natural.",
        philosopherWeights: { marx: 4, engels: 3 },
        axisWeights: { authority_power: 4, materialism: 3 }
      },
      {
        id: "b",
        text: "Power that calls itself common sense so no one notices it is ideology.",
        philosopherWeights: { lenin: 3, marx: 2, nietzsche: 2 },
        axisWeights: { authority_power: 4, dialectics: 1 }
      },
      {
        id: "c",
        text: "Power that turns a person into the Other and then blames them for the role.",
        philosopherWeights: { beauvoir: 4, sartre: 2 },
        axisWeights: { authority_power: 3, freedom_alienation: 3 }
      },
      {
        id: "d",
        text: "Power that over-governs until people forget how to live with natural balance.",
        philosopherWeights: { laozi: 4, confucius: 1 },
        axisWeights: { authority_power: 3, freedom_alienation: 2 }
      }
    ]
  },
  {
    id: "q21",
    axis: "ethics_action",
    prompt: "What makes an action truly good?",
    context: "Ethics anchors the quiz so it does not become only ideology.",
    answers: [
      {
        id: "a",
        text: "It contributes to human emancipation by changing conditions, not just intentions.",
        philosopherWeights: { marx: 3, lenin: 3, beauvoir: 2 },
        axisWeights: { ethics_action: 4, freedom_alienation: 2 }
      },
      {
        id: "b",
        text: "It expresses virtue, proportion, and practical wisdom in a concrete situation.",
        philosopherWeights: { aristotle: 4, confucius: 1 },
        axisWeights: { ethics_action: 4 }
      },
      {
        id: "c",
        text: "It aligns the person and the city with a higher order of truth.",
        philosopherWeights: { plato: 4, hegel: 1 },
        axisWeights: { ethics_action: 3, materialism: -1 }
      },
      {
        id: "d",
        text: "It is owned without excuse; the person does not hide behind role, fate, or crowd.",
        philosopherWeights: { sartre: 4, nietzsche: 2 },
        axisWeights: { freedom_alienation: 4, ethics_action: 1 }
      }
    ]
  },
  {
    id: "q22",
    axis: "ethics_action",
    prompt: "Is intention more important than outcome?",
    context: "This tests virtue ethics, revolutionary practicality, and existential responsibility.",
    answers: [
      {
        id: "a",
        text: "Outcome matters because action must change real conditions, not only preserve a clean conscience.",
        philosopherWeights: { lenin: 4, marx: 3 },
        axisWeights: { ethics_action: 3, materialism: 2 }
      },
      {
        id: "b",
        text: "Character matters, but character is shown through wise action and consequences over time.",
        philosopherWeights: { aristotle: 4, confucius: 2 },
        axisWeights: { ethics_action: 4 }
      },
      {
        id: "c",
        text: "Neither excuses you. You are responsible for the meaning your action gives your life.",
        philosopherWeights: { sartre: 4, beauvoir: 2 },
        axisWeights: { freedom_alienation: 3, ethics_action: 2 }
      },
      {
        id: "d",
        text: "The question is already too forceful; act with less grasping and fewer claims of purity.",
        philosopherWeights: { laozi: 4 },
        axisWeights: { ethics_action: 2, freedom_alienation: 2 }
      }
    ]
  },
  {
    id: "q23",
    axis: "ethics_action",
    prompt: "When facing uncertainty, do you act quickly or reflect longer?",
    context: "Balances practice, theory, and temperament.",
    answers: [
      {
        id: "a",
        text: "Act after enough analysis to know the contradiction and the forces involved.",
        philosopherWeights: { lenin: 4, engels: 2 },
        axisWeights: { ethics_action: 3, dialectics: 2 }
      },
      {
        id: "b",
        text: "Reflect until the action fits the concrete circumstances with proportion.",
        philosopherWeights: { aristotle: 4 },
        axisWeights: { ethics_action: 3 }
      },
      {
        id: "c",
        text: "Act because refusing to choose is also a choice.",
        philosopherWeights: { sartre: 4, beauvoir: 1 },
        axisWeights: { freedom_alienation: 4, ethics_action: 1 }
      },
      {
        id: "d",
        text: "Wait for the shape of things; premature force often creates the problem it fears.",
        philosopherWeights: { laozi: 4, confucius: 1 },
        axisWeights: { ethics_action: 2, authority_power: -1 }
      }
    ]
  },
  {
    id: "q24",
    axis: "ethics_action",
    prompt: "Should practical usefulness outweigh philosophical purity?",
    context: "A test of practice versus abstraction.",
    answers: [
      {
        id: "a",
        text: "Yes, if usefulness means advancing real emancipation rather than polishing beautiful formulas.",
        philosopherWeights: { marx: 3, lenin: 4 },
        axisWeights: { ethics_action: 4, materialism: 2 }
      },
      {
        id: "b",
        text: "Usefulness needs virtue; practical success without character corrupts the goal.",
        philosopherWeights: { aristotle: 4, confucius: 2 },
        axisWeights: { ethics_action: 4 }
      },
      {
        id: "c",
        text: "Purity is often another idol. Ask what kind of life the idea makes possible.",
        philosopherWeights: { feuerbach: 3, nietzsche: 2, beauvoir: 1 },
        axisWeights: { materialism: 2, freedom_alienation: 2 }
      },
      {
        id: "d",
        text: "The pure idea matters because without truth, usefulness becomes manipulation.",
        philosopherWeights: { plato: 4, hegel: 2 },
        axisWeights: { ethics_action: 2, materialism: -1 }
      }
    ]
  },
  {
    id: "q25",
    axis: "ethics_action",
    prompt: "Is discipline mainly freedom or restraint?",
    context: "Good for Lenin, Aristotle, Confucius, and Laozi distinctions.",
    answers: [
      {
        id: "a",
        text: "Freedom, when it turns scattered feeling into organized power.",
        philosopherWeights: { lenin: 4, marx: 1 },
        axisWeights: { ethics_action: 3, authority_power: 2 }
      },
      {
        id: "b",
        text: "Freedom, when habits make excellence natural rather than accidental.",
        philosopherWeights: { aristotle: 4, confucius: 2 },
        axisWeights: { ethics_action: 4 }
      },
      {
        id: "c",
        text: "Restraint, if it comes from fear of choosing yourself.",
        philosopherWeights: { sartre: 3, nietzsche: 3, beauvoir: 1 },
        axisWeights: { freedom_alienation: 4 }
      },
      {
        id: "d",
        text: "Neither exactly. The best discipline is so light it feels like following the current.",
        philosopherWeights: { laozi: 4 },
        axisWeights: { ethics_action: 2, freedom_alienation: 2 }
      }
    ]
  },
  {
    id: "q26",
    axis: "freedom_alienation",
    prompt: "Do human beings have a fixed nature?",
    context: "A bridge from human essence to historical and existential becoming.",
    answers: [
      {
        id: "a",
        text: "Human nature transforms through labor, social relations, and historical conditions.",
        philosopherWeights: { marx: 4, engels: 2 },
        axisWeights: { materialism: 3, freedom_alienation: 3 }
      },
      {
        id: "b",
        text: "People have potentials that become real through virtue, habit, and purpose.",
        philosopherWeights: { aristotle: 4, confucius: 1 },
        axisWeights: { ethics_action: 3 }
      },
      {
        id: "c",
        text: "No fixed essence comes first; we become through choices made in a situation.",
        philosopherWeights: { sartre: 4, beauvoir: 3 },
        axisWeights: { freedom_alienation: 4 }
      },
      {
        id: "d",
        text: "The idea of a fixed nature often serves those who want people to remain obedient.",
        philosopherWeights: { nietzsche: 3, beauvoir: 3, marx: 1 },
        axisWeights: { authority_power: 3, freedom_alienation: 3 }
      }
    ]
  },
  {
    id: "q27",
    axis: "freedom_alienation",
    prompt: "What role should death play in how we live?",
    context: "A human question that lets the results feel personal.",
    answers: [
      {
        id: "a",
        text: "It should sharpen responsibility: this life is where freedom must become real.",
        philosopherWeights: { sartre: 4, beauvoir: 2 },
        axisWeights: { freedom_alienation: 4 }
      },
      {
        id: "b",
        text: "It should remind us to build a world where people can live humanly before they die.",
        philosopherWeights: { marx: 3, feuerbach: 2, engels: 1 },
        axisWeights: { materialism: 2, ethics_action: 2 }
      },
      {
        id: "c",
        text: "It should teach proportion; a finite life needs excellent habits and good friendships.",
        philosopherWeights: { aristotle: 4, confucius: 1 },
        axisWeights: { ethics_action: 3 }
      },
      {
        id: "d",
        text: "It should loosen fear, because clinging too tightly keeps us from the way of things.",
        philosopherWeights: { laozi: 4 },
        axisWeights: { freedom_alienation: 3 }
      }
    ]
  },
  {
    id: "q28",
    axis: "freedom_alienation",
    prompt: "Is authenticity worth social conflict?",
    context: "A personality-facing version of individual freedom and social belonging.",
    answers: [
      {
        id: "a",
        text: "Yes, if conflict exposes domination that polite agreement kept hidden.",
        philosopherWeights: { marx: 3, beauvoir: 3, lenin: 1 },
        axisWeights: { freedom_alienation: 3, authority_power: 2 }
      },
      {
        id: "b",
        text: "Yes, because bad faith is worse than discomfort.",
        philosopherWeights: { sartre: 4, beauvoir: 1 },
        axisWeights: { freedom_alienation: 4 }
      },
      {
        id: "c",
        text: "Yes, if it means breaking herd morality and creating stronger values.",
        philosopherWeights: { nietzsche: 4 },
        axisWeights: { freedom_alienation: 4, authority_power: 2 }
      },
      {
        id: "d",
        text: "Only with care. A humane person corrects without destroying every bond.",
        philosopherWeights: { confucius: 4, aristotle: 2 },
        axisWeights: { individual_society: 3, ethics_action: 2 }
      }
    ]
  },
  {
    id: "q29",
    axis: "freedom_alienation",
    prompt: "What does liberation mean to you?",
    context: "The final syllabus-aligned concept before the closing synthesis.",
    answers: [
      {
        id: "a",
        text: "Collectively transforming the material conditions that keep people dependent and alienated.",
        philosopherWeights: { marx: 4, engels: 2, lenin: 2 },
        axisWeights: { freedom_alienation: 4, materialism: 3, individual_society: 2 }
      },
      {
        id: "b",
        text: "Becoming the author of your life without denying the situation you inherit.",
        philosopherWeights: { beauvoir: 4, sartre: 3 },
        axisWeights: { freedom_alienation: 4, individual_society: 1 }
      },
      {
        id: "c",
        text: "Freeing desire from false idols and returning human powers to human beings.",
        philosopherWeights: { feuerbach: 4, marx: 1 },
        axisWeights: { materialism: 2, freedom_alienation: 3 }
      },
      {
        id: "d",
        text: "No longer forcing life into anxious ambition; moving with enough simplicity to breathe.",
        philosopherWeights: { laozi: 4 },
        axisWeights: { freedom_alienation: 4 }
      }
    ]
  },
  {
    id: "q30",
    axis: "freedom_alienation",
    prompt: "What is wisdom mainly: clarity, character, rebellion, or surrender?",
    context: "The closing question intentionally lets multiple traditions speak.",
    answers: [
      {
        id: "a",
        text: "Clarity about the real forces shaping life, joined to action that can change them.",
        philosopherWeights: { marx: 3, engels: 2, lenin: 3 },
        axisWeights: { materialism: 2, ethics_action: 3 }
      },
      {
        id: "b",
        text: "Character: a life trained toward excellence, trust, and practical judgment.",
        philosopherWeights: { aristotle: 4, confucius: 3 },
        axisWeights: { ethics_action: 4 }
      },
      {
        id: "c",
        text: "Rebellion against inherited meanings that shrink what a person can become.",
        philosopherWeights: { nietzsche: 4, sartre: 2, beauvoir: 2 },
        axisWeights: { freedom_alienation: 4, authority_power: 2 }
      },
      {
        id: "d",
        text: "Surrender, not as defeat, but as release from forcing the world to obey the ego.",
        philosopherWeights: { laozi: 4 },
        axisWeights: { freedom_alienation: 3, ethics_action: 1 }
      }
    ]
  }
];
