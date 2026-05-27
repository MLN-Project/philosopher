import type { PhilosopherId } from "@/lib/types";

export type ArchiveQuote = {
  text: string;
  work: string;
  note: string;
};

export type ArchiveTimelineEvent = {
  year: string;
  title: string;
  copy: string;
};

export type ArchiveSource = {
  label: string;
  url: string;
  type: "Biography" | "Primary text" | "Research";
  note: string;
};

export type ArchiveDetail = {
  life: string;
  place: string;
  history: string;
  legacy: string;
  biography: string[];
  ideas: string[];
  primaryWork: string;
  archiveNote: string;
  timeline: ArchiveTimelineEvent[];
  quotes: ArchiveQuote[];
  sources: ArchiveSource[];
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
      "Plato wrote after the Peloponnesian War, the instability of Athenian democracy, and the execution of Socrates. His dialogues turn civic crisis into questions about truth, education, justice, and the condition of the soul.",
    legacy:
      "He made philosophy architectural: visible life is unstable, so the thinker searches for Forms, standards, and the Good that can organize knowledge, desire, and public life.",
    biography: [
      "Plato was born into an aristocratic Athenian family during the last years of the Peloponnesian War. The collapse of Athenian power, the short rule of the Thirty Tyrants, and the trial of Socrates taught him that politics without philosophical discipline could become either mob rule or oligarchic violence.",
      "Rather than writing treatises in his own voice, Plato built dramatic dialogues. Socrates becomes the central figure through whom questions are tested: What is justice? Can virtue be taught? What kind of education forms a trustworthy ruler? The method matters because truth is not delivered as a slogan; it has to be drawn out through argument.",
      "The Academy gave this project an institution. Plato's thought moves between metaphysics, ethics, psychology, mathematics, and politics, but the common pressure is the same: human beings live among appearances, yet they are responsible for turning the soul toward what is more stable, intelligible, and good."
    ],
    ideas: ["Forms", "justice", "education", "the philosopher-ruler"],
    primaryWork: "Republic",
    archiveNote: "The map begins with Plato because he makes philosophy ask what should rule appearances.",
    timeline: [
      {
        year: "c. 428 BCE",
        title: "Born into Athenian crisis",
        copy: "Plato grows up in a city marked by war, faction, and the aftermath of imperial defeat."
      },
      {
        year: "399 BCE",
        title: "Socrates is executed",
        copy: "The death of his teacher becomes the wound behind Plato's lifelong suspicion of unexamined public opinion."
      },
      {
        year: "c. 387 BCE",
        title: "The Academy begins",
        copy: "Plato founds a school in Athens that joins mathematics, dialectic, political theory, and ethical formation."
      },
      {
        year: "c. 380 BCE",
        title: "Republic takes shape",
        copy: "The dialogue connects justice in the soul with justice in the city and develops the image of the philosopher-ruler."
      },
      {
        year: "348 BCE",
        title: "Dies in Athens",
        copy: "His school and dialogues remain a central point of return for later metaphysics, ethics, and political philosophy."
      }
    ],
    quotes: [
      {
        text: "The beginning is the most important part of the work.",
        work: "Republic",
        note: "Education begins by shaping desire before argument can govern it."
      },
      {
        text: "The unexamined life is not worth living.",
        work: "Apology",
        note: "Plato's Socrates gives philosophy its public demand for self-scrutiny."
      },
      {
        text: "Justice is doing one's own work.",
        work: "Republic",
        note: "A compressed version of Plato's claim that order depends on rightly arranged parts."
      }
    ],
    sources: [
      {
        label: "Stanford Encyclopedia of Philosophy - Plato",
        url: "https://plato.stanford.edu/entries/plato/",
        type: "Research",
        note: "Used for historical framing, central doctrines, dialogue form, and Plato's influence."
      },
      {
        label: "Project Gutenberg - The Republic",
        url: "https://www.gutenberg.org/ebooks/1497",
        type: "Primary text",
        note: "Used for the main work reference and short quote labels."
      }
    ]
  },
  aristotle: {
    life: "384-322 BCE",
    place: "Stagira, Athens",
    history:
      "Aristotle studied in Plato's Academy, taught Alexander, and built a school around observation, classification, logic, and ethical practice. He moved philosophy closer to living things, concrete causes, and practical judgment.",
    legacy:
      "His work gives the archive its practical counterweight: character is trained, knowledge grows through careful distinctions, and a good life depends on habits fitted to human nature.",
    biography: [
      "Aristotle came from Stagira in northern Greece and entered Plato's Academy as a young man. He inherited Plato's seriousness about truth, but he pressed philosophy toward the world of living beings, civic practices, rhetoric, poetry, and the many ways things can be explained.",
      "After leaving Athens, Aristotle spent time in Asia Minor and Lesbos, where his biological inquiries deepened his habit of classification. He later tutored the young Alexander of Macedon before returning to Athens to establish the Lyceum, a school associated with walking lectures, research collections, and systematic study.",
      "His ethics begins from ordinary human aims but refuses to leave them vague. Happiness is not a mood; it is an activity shaped by virtue, reason, friendship, and political life. That makes Aristotle less utopian than Plato, but just as demanding: good judgment has to become a trained habit."
    ],
    ideas: ["virtue", "logic", "causes", "practical reason"],
    primaryWork: "Nicomachean Ethics",
    archiveNote: "Aristotle steadies the page with measured action rather than pure ascent.",
    timeline: [
      {
        year: "384 BCE",
        title: "Born in Stagira",
        copy: "Aristotle's family background connects him to medicine and court life before he enters Athenian philosophy."
      },
      {
        year: "367 BCE",
        title: "Studies at the Academy",
        copy: "He joins Plato's school and remains there for roughly two decades."
      },
      {
        year: "343 BCE",
        title: "Tutors Alexander",
        copy: "Macedonian patronage places Aristotle near the politics that will transform the Greek world."
      },
      {
        year: "335 BCE",
        title: "Founds the Lyceum",
        copy: "The school becomes a center for logic, natural inquiry, ethics, politics, and literary analysis."
      },
      {
        year: "322 BCE",
        title: "Dies in Chalcis",
        copy: "His writings become a long-term framework for medieval, Islamic, Jewish, and Christian philosophy."
      }
    ],
    quotes: [
      {
        text: "Happiness is an activity of soul.",
        work: "Nicomachean Ethics",
        note: "The good life is something practiced, not merely possessed."
      },
      {
        text: "Virtue is a state concerned with choice.",
        work: "Nicomachean Ethics",
        note: "Character is measured by judgment under concrete conditions."
      },
      {
        text: "Man is by nature a political animal.",
        work: "Politics",
        note: "Human flourishing needs speech, law, friendship, and civic form."
      }
    ],
    sources: [
      {
        label: "Stanford Encyclopedia of Philosophy - Aristotle",
        url: "https://plato.stanford.edu/entries/aristotle/",
        type: "Research",
        note: "Used for Aristotle's life, school, logic, causes, ethics, and philosophical range."
      },
      {
        label: "Project Gutenberg - The Nicomachean Ethics",
        url: "https://www.gutenberg.org/ebooks/8438",
        type: "Primary text",
        note: "Used for the main work reference and ethical vocabulary."
      }
    ]
  },
  confucius: {
    life: "551-479 BCE",
    place: "Lu, China",
    history:
      "Confucius lived during political fragmentation and treated social repair as an ethical project. His teaching centers on learning, ritual, humane conduct, and the slow formation of trustworthy people.",
    legacy:
      "The self in his thought is never isolated. It is shaped through family, ceremony, language, public duty, and the discipline of becoming reliable in relation to others.",
    biography: [
      "Confucius lived in the state of Lu during the late Spring and Autumn period, when older Zhou political and ritual orders were weakening. His thought begins from that disorder: if rulers, ministers, parents, children, and friends no longer know how to act toward one another, society loses its moral grammar.",
      "He did not present himself as a solitary inventor. He saw himself as transmitting and reanimating an older tradition through learning, ritual propriety, music, reverence, and humane conduct. The Analects preserves short exchanges in which ethical life is shown as practice, correction, and example.",
      "Confucius makes philosophy social without making it shallow. A person becomes noble not by private intensity alone, but by becoming trustworthy in roles. Ren, often translated as humaneness, is cultivated through li, the patterned forms that train feeling into public care."
    ],
    ideas: ["ren", "ritual", "learning", "role ethics"],
    primaryWork: "Analects",
    archiveNote: "Confucius gives the atlas a social grammar of care, order, and practice.",
    timeline: [
      {
        year: "551 BCE",
        title: "Born in Lu",
        copy: "Confucius is born into a minor aristocratic family in a politically fractured Zhou world."
      },
      {
        year: "c. 501 BCE",
        title: "Public service in Lu",
        copy: "Tradition places him in administrative roles, sharpening his concern with ritual order and moral government."
      },
      {
        year: "497 BCE",
        title: "Years of travel",
        copy: "He leaves Lu and seeks rulers willing to restore humane and disciplined government."
      },
      {
        year: "484 BCE",
        title: "Return to teaching",
        copy: "Back in Lu, he devotes his final years to students, texts, and the transmission of ritual learning."
      },
      {
        year: "479 BCE",
        title: "Dies in Lu",
        copy: "His disciples preserve conversations that later become central to Confucian education."
      }
    ],
    quotes: [
      {
        text: "Is it not a pleasure to learn and practice?",
        work: "Analects",
        note: "Learning becomes real only when repeatedly embodied."
      },
      {
        text: "The gentleman is not a vessel.",
        work: "Analects",
        note: "A cultivated person is more than a narrow instrument."
      },
      {
        text: "Do not impose on others what you do not want.",
        work: "Analects",
        note: "Reciprocity is a practical test for humane conduct."
      }
    ],
    sources: [
      {
        label: "Stanford Encyclopedia of Philosophy - Confucius",
        url: "https://plato.stanford.edu/entries/confucius/",
        type: "Research",
        note: "Used for historical context, teaching themes, and Confucian ethical vocabulary."
      },
      {
        label: "Project Gutenberg - The Analects of Confucius",
        url: "https://www.gutenberg.org/ebooks/3330",
        type: "Primary text",
        note: "Used for the main work reference and quote labels."
      }
    ]
  },
  laozi: {
    life: "traditionally 6th century BCE",
    place: "Ancient China",
    history:
      "Laozi is a partly legendary figure associated with the Dao De Jing. The tradition presses against forceful rule, rigid certainty, and the urge to control what has its own pattern.",
    legacy:
      "His presence changes the tempo of the archive. Power can become quieter, wisdom can look like restraint, and action can succeed by moving with the grain of the world.",
    biography: [
      "Laozi is difficult to place historically. Later tradition treats him as an older contemporary of Confucius, while modern scholarship usually handles the figure and the Dao De Jing with caution, as a layered text shaped over time rather than a simple record of one author's career.",
      "That uncertainty fits the philosophy's own style. The Dao De Jing resists hard definitions and warns that names, plans, and coercive rule can cut against the deeper pattern of things. Its political imagination favors simplicity, lowliness, restraint, and non-forcing action.",
      "Laozi matters in the atlas because he challenges the heroic mood of philosophy. Wisdom may not look like mastery. It may look like knowing when to stop, how to yield, and how to let action arise from attention rather than domination."
    ],
    ideas: ["dao", "wu wei", "simplicity", "non-coercive power"],
    primaryWork: "Dao De Jing",
    archiveNote: "Laozi opens a path where philosophy does less in order to see more.",
    timeline: [
      {
        year: "Legendary era",
        title: "A sage at the edge of history",
        copy: "Traditional accounts place Laozi in the Zhou world, but the historical person remains uncertain."
      },
      {
        year: "Warring States",
        title: "The text takes shape",
        copy: "The Dao De Jing likely reflects a period of political conflict and philosophical competition."
      },
      {
        year: "Early Han",
        title: "Daoist classics gain authority",
        copy: "The text becomes part of a larger conversation about rule, cosmology, and self-cultivation."
      },
      {
        year: "Medieval China",
        title: "Religious Daoism develops",
        copy: "Laozi is elevated within religious traditions that connect ritual, cosmology, and immortality practices."
      },
      {
        year: "Modern reception",
        title: "A global text of restraint",
        copy: "The Dao De Jing becomes one of the most translated Chinese classics, often read as philosophy, poetry, and political counsel."
      }
    ],
    quotes: [
      {
        text: "The Dao that can be spoken is not the constant Dao.",
        work: "Dao De Jing",
        note: "The first line warns that reality exceeds fixed names."
      },
      {
        text: "A journey of a thousand miles begins beneath one's feet.",
        work: "Dao De Jing",
        note: "Large change begins as a modest, embodied step."
      },
      {
        text: "Knowing others is wisdom; knowing yourself is enlightenment.",
        work: "Dao De Jing",
        note: "The inward turn is not escape but clarity."
      }
    ],
    sources: [
      {
        label: "Stanford Encyclopedia of Philosophy - Laozi",
        url: "https://plato.stanford.edu/archives/spr2013/entries/laozi/",
        type: "Research",
        note: "Used for authorship questions, Daoist themes, and interpretive caution."
      },
      {
        label: "Project Gutenberg - Tao Teh King",
        url: "https://www.gutenberg.org/ebooks/216",
        type: "Primary text",
        note: "Used for the main work reference and classic Dao De Jing phrasing."
      }
    ]
  },
  hegel: {
    life: "1770-1831",
    place: "Stuttgart, Berlin",
    history:
      "Hegel wrote in the wake of the French Revolution and the rise of modern civil society. He tried to understand history as a rational movement shaped by contradiction, recognition, and institutions.",
    legacy:
      "His dialectic makes conflict more than noise. A position exposes its limits, meets what it excludes, and becomes something richer through the pressure of its own contradictions.",
    biography: [
      "Hegel belongs to the generation after Kant and the French Revolution. He studied theology and philosophy in Tubingen, worked as a tutor, and entered the German university world as idealism was trying to rethink freedom, knowledge, religion, and history after Enlightenment critique.",
      "The Phenomenology of Spirit appears as Napoleon's armies are remaking Europe. Its drama is not just private consciousness but a path through shapes of experience: sense-certainty, self-consciousness, recognition, ethical life, culture, religion, and philosophical knowing.",
      "Hegel's mature system links logic, nature, spirit, law, art, religion, and philosophy. That ambition made him a target as much as a master. Later thinkers took him apart in different ways: conservatives emphasized order, Marxists inverted the dialectic toward material life, and existentialists inherited the problem of recognition and alienation."
    ],
    ideas: ["dialectic", "recognition", "spirit", "historical development"],
    primaryWork: "Phenomenology of Spirit",
    archiveNote: "Hegel turns the page from timeless order toward movement.",
    timeline: [
      {
        year: "1770",
        title: "Born in Stuttgart",
        copy: "Hegel grows up in a Protestant, bureaucratic culture shaped by Enlightenment reform."
      },
      {
        year: "1788-1793",
        title: "Tubingen years",
        copy: "He studies alongside Holderlin and Schelling, absorbing theology, classics, and revolutionary politics."
      },
      {
        year: "1807",
        title: "Phenomenology of Spirit",
        copy: "His first major book presents consciousness as a historical path through conflict and recognition."
      },
      {
        year: "1818",
        title: "Berlin appointment",
        copy: "Hegel becomes a dominant figure in German philosophy from the University of Berlin."
      },
      {
        year: "1831",
        title: "Death and divided inheritance",
        copy: "After his death, Hegelians split into right, center, and left readings of his system."
      }
    ],
    quotes: [
      {
        text: "The truth is the whole.",
        work: "Phenomenology of Spirit",
        note: "A thing is understood through its development, not by an isolated snapshot."
      },
      {
        text: "What is rational is actual.",
        work: "Philosophy of Right",
        note: "Hegel's compressed formula for reason embodied in institutions."
      },
      {
        text: "Nothing great has been accomplished without passion.",
        work: "Lectures on the Philosophy of History",
        note: "History is rational, but never bloodless."
      }
    ],
    sources: [
      {
        label: "Stanford Encyclopedia of Philosophy - Hegel",
        url: "https://plato.stanford.edu/entries/hegel/",
        type: "Research",
        note: "Used for Hegel's life, German idealism, system, and influence."
      },
      {
        label: "Marxists Internet Archive - Phenomenology of Spirit",
        url: "https://www.marxists.org/reference/archive/hegel/works/ph/phintro.htm",
        type: "Primary text",
        note: "Used for the main work reference and quote context."
      }
    ]
  },
  feuerbach: {
    life: "1804-1872",
    place: "Bavaria",
    history:
      "Feuerbach broke with speculative idealism by reading theology as a human projection. For him, sacred images reveal human needs, human powers, and human dependence in disguised form.",
    legacy:
      "He pulls the archive downward into embodiment. Abstraction has to answer to hunger, feeling, community, and the fact that thinking belongs to living human beings.",
    biography: [
      "Feuerbach began inside the orbit of Hegelian philosophy but turned against its speculative abstraction. His early academic prospects were damaged by unorthodox religious writing, yet that same break made him one of the decisive critics of theology in nineteenth-century German thought.",
      "The Essence of Christianity argues that religious consciousness projects human powers outward and then kneels before them as divine. God is not treated as a being beyond humanity, but as humanity's own essence imagined in alienated form.",
      "For Marx and Engels, Feuerbach opened a door and then stopped too soon. He brought philosophy back to human beings, sensuous life, and need, but he did not yet explain how those human beings are historically produced through labor, class, and social relations."
    ],
    ideas: ["humanism", "projection", "embodiment", "religion critique"],
    primaryWork: "The Essence of Christianity",
    archiveNote: "Feuerbach is a hinge between German idealism and materialist critique.",
    timeline: [
      {
        year: "1804",
        title: "Born in Bavaria",
        copy: "Feuerbach enters an intellectual world dominated by theology, German idealism, and university philosophy."
      },
      {
        year: "1820s",
        title: "Hegelian formation",
        copy: "He studies philosophy and becomes part of the wider Hegelian movement."
      },
      {
        year: "1830",
        title: "Academic rupture",
        copy: "Anonymously published religious criticism damages his hopes for a conventional university career."
      },
      {
        year: "1841",
        title: "The Essence of Christianity",
        copy: "Feuerbach makes religion a mirror of human powers, needs, and alienation."
      },
      {
        year: "1872",
        title: "Death near Nuremberg",
        copy: "His humanist materialism remains a key bridge from Hegel to Marx."
      }
    ],
    quotes: [
      {
        text: "Theology is anthropology.",
        work: "The Essence of Christianity",
        note: "Religious claims reveal human self-understanding in disguised form."
      },
      {
        text: "Man is what he eats.",
        work: "Principles of the Philosophy of the Future",
        note: "A deliberately earthy reminder that thought belongs to embodied life."
      },
      {
        text: "Religion is the dream of the human mind.",
        work: "The Essence of Christianity",
        note: "The sacred becomes a projection of human longing and power."
      }
    ],
    sources: [
      {
        label: "Encyclopaedia Britannica - Ludwig Feuerbach",
        url: "https://www.britannica.com/biography/Ludwig-Feuerbach",
        type: "Biography",
        note: "Used for Feuerbach's life, religion critique, humanism, and influence on Marx."
      },
      {
        label: "Project Gutenberg - The Essence of Christianity",
        url: "https://www.gutenberg.org/ebooks/47025",
        type: "Primary text",
        note: "Used for the main work reference and quote context."
      }
    ]
  },
  marx: {
    life: "1818-1883",
    place: "Trier, Paris, London",
    history:
      "Marx came out of German philosophy, radical journalism, and exile. His mature work studied capitalism as a historical system built from labor, property, class struggle, and crisis.",
    legacy:
      "He changes the question from what the world means to how it is produced. Ideas matter, but they live inside material relations that can be analyzed and transformed.",
    biography: [
      "Marx was born in Trier, trained in law and philosophy, and became a radical journalist in a Europe of censorship, industrial growth, and political unrest. Exile pushed him from Germany to Paris, Brussels, and eventually London, where poverty and research lived side by side.",
      "His collaboration with Engels joined German philosophy, French socialism, and British political economy. Early writings on alienation and Feuerbach gave way to historical materialism: human beings make history, but not under conditions of their own choosing.",
      "Capitalism, for Marx, is not just greed or bad behavior. It is a system of social relations organized through commodity exchange, wage labor, surplus value, crisis, and class struggle. That is why critique must move from moral complaint to analysis of production."
    ],
    ideas: ["historical materialism", "class", "alienation", "capital"],
    primaryWork: "Capital",
    archiveNote: "Marx is the pressure point where interpretation becomes social diagnosis.",
    timeline: [
      {
        year: "1818",
        title: "Born in Trier",
        copy: "Marx grows up in the Rhineland, where law, commerce, and Prussian politics intersect."
      },
      {
        year: "1844",
        title: "Paris and Engels",
        copy: "He meets Engels and deepens his critique of alienated labor, political economy, and Hegelian philosophy."
      },
      {
        year: "1848",
        title: "The Communist Manifesto",
        copy: "Marx and Engels give class struggle a dramatic historical language amid European revolutions."
      },
      {
        year: "1867",
        title: "Capital, Volume I",
        copy: "The analysis of commodity, value, surplus labor, and accumulation becomes his major mature work."
      },
      {
        year: "1883",
        title: "Dies in London",
        copy: "His unfinished project is edited, extended, contested, and globalized after his death."
      }
    ],
    quotes: [
      {
        text: "The point is to change it.",
        work: "Theses on Feuerbach",
        note: "Philosophy becomes unfinished if it never enters practice."
      },
      {
        text: "The history of all hitherto existing society is class struggles.",
        work: "The Communist Manifesto",
        note: "Social conflict is treated as historical structure, not surface disturbance."
      },
      {
        text: "Workers of the world, unite!",
        work: "The Communist Manifesto",
        note: "Analysis closes as a call to collective agency."
      }
    ],
    sources: [
      {
        label: "Stanford Encyclopedia of Philosophy - Karl Marx",
        url: "https://plato.stanford.edu/entries/marx/",
        type: "Research",
        note: "Used for Marx's philosophical development, materialism, alienation, and historical theory."
      },
      {
        label: "Marxists Internet Archive - Manifesto of the Communist Party",
        url: "https://www.marxists.org/archive/marx/works/1848/communist-manifesto/",
        type: "Primary text",
        note: "Used for the Manifesto reference and quote context."
      }
    ]
  },
  engels: {
    life: "1820-1895",
    place: "Barmen, Manchester, London",
    history:
      "Engels combined industrial observation, political organizing, and philosophical synthesis. His time in Manchester gave him a direct view of factory life and the social costs of industrial capitalism.",
    legacy:
      "He extends the archive's systems view: nature, labor, family, property, and history move together. His writing made Marxist ideas more accessible, organized, and politically usable.",
    biography: [
      "Engels was born into a textile-manufacturing family and sent into commercial work, yet the factory world he was meant to serve became the object of his critique. Manchester showed him industrial capitalism from the inside: crowded housing, precarious labor, and the class geography of the modern city.",
      "His 1844 meeting with Marx became one of the most consequential collaborations in modern political thought. Engels supplied research, money, organizational work, journalism, and a talent for turning dense theory into sharper public argument.",
      "After Marx's death, Engels edited later volumes of Capital and became a major interpreter of Marxism. His own writings widened the frame toward nature, science, family, property, and the state, though later readers continue to debate how closely his systematizing matched Marx's method."
    ],
    ideas: ["dialectical materialism", "industrial society", "nature", "class analysis"],
    primaryWork: "Socialism: Utopian and Scientific",
    archiveNote: "Engels keeps the map connected, practical, and historically wide.",
    timeline: [
      {
        year: "1820",
        title: "Born in Barmen",
        copy: "Engels grows up in a Protestant industrial family tied to textile production."
      },
      {
        year: "1842",
        title: "Manchester observation",
        copy: "Factory work and urban poverty become the material basis for his critique of industrial capitalism."
      },
      {
        year: "1845",
        title: "The Condition of the Working Class",
        copy: "Engels documents the social reality of English industrial labor."
      },
      {
        year: "1848",
        title: "Manifesto with Marx",
        copy: "He co-authors the most famous political text of the revolutionary year."
      },
      {
        year: "1895",
        title: "Dies in London",
        copy: "Engels leaves behind both original work and a decisive role in editing Marx's legacy."
      }
    ],
    quotes: [
      {
        text: "Freedom is the recognition of necessity.",
        work: "Anti-Duhring",
        note: "Freedom is not fantasy; it requires understanding real conditions."
      },
      {
        text: "Motion is the mode of existence of matter.",
        work: "Dialectics of Nature",
        note: "Nature itself is treated as process rather than static stuff."
      },
      {
        text: "The state is not abolished. It withers away.",
        work: "Anti-Duhring",
        note: "A famous formula for the historical transformation of political power."
      }
    ],
    sources: [
      {
        label: "Encyclopaedia Britannica - Friedrich Engels",
        url: "https://www.britannica.com/biography/Friedrich-Engels",
        type: "Biography",
        note: "Used for Engels's life, Manchester period, collaboration with Marx, and later influence."
      },
      {
        label: "Marxists Internet Archive - Socialism: Utopian and Scientific",
        url: "https://www.marxists.org/archive/marx/works/1880/soc-utop/index.htm",
        type: "Primary text",
        note: "Used for the main work reference and socialist theory context."
      }
    ]
  },
  lenin: {
    life: "1870-1924",
    place: "Simbirsk, Zurich, Petrograd",
    history:
      "Lenin worked as a theorist, organizer, and revolutionary leader in the Russian Empire's crisis. He read philosophy through strategy, power, party organization, and the urgency of political action.",
    legacy:
      "He makes theory answer to intervention. For Lenin, analysis that never becomes organized practice remains unfinished, especially when the state and class power are at stake.",
    biography: [
      "Lenin was born Vladimir Ilyich Ulyanov in Simbirsk. His brother's execution for revolutionary activity in 1887 became part of the personal and political background to Lenin's radicalization, though his later theory was shaped as much by disciplined study as by family tragedy.",
      "Exile, underground organizing, and disputes within Russian Marxism taught Lenin to think about the practical form of politics. What Is To Be Done? argues that spontaneity alone cannot defeat an organized state; revolutionary consciousness needs durable institutions, newspapers, discipline, and strategy.",
      "In 1917 Lenin moved from theory to seizure of power. His legacy is inseparable from the Russian Revolution, the Bolshevik state, civil war, and the global history of communism. On the page, he represents the moment when analysis becomes organization under extreme pressure."
    ],
    ideas: ["praxis", "party organization", "imperialism", "revolutionary strategy"],
    primaryWork: "What Is To Be Done?",
    archiveNote: "Lenin is the point where a map becomes a route.",
    timeline: [
      {
        year: "1870",
        title: "Born in Simbirsk",
        copy: "Lenin grows up in an educated family in the Russian Empire."
      },
      {
        year: "1887",
        title: "Brother executed",
        copy: "Alexander Ulyanov's execution marks Lenin's early political horizon."
      },
      {
        year: "1895-1900",
        title: "Arrest and Siberian exile",
        copy: "Lenin's organizing leads to imprisonment and exile, where he continues writing and study."
      },
      {
        year: "1902",
        title: "What Is To Be Done?",
        copy: "The pamphlet argues for organization, political education, and a revolutionary press."
      },
      {
        year: "1917-1924",
        title: "Revolution and rule",
        copy: "Lenin returns to Russia, leads the Bolsheviks to power, and dies after years of civil war and illness."
      }
    ],
    quotes: [
      {
        text: "Without revolutionary theory there can be no revolutionary movement.",
        work: "What Is To Be Done?",
        note: "Theory matters because it organizes action."
      },
      {
        text: "The concrete analysis of the concrete situation.",
        work: "Marxism and Insurrection",
        note: "Strategy begins from exact conditions, not slogans."
      },
      {
        text: "Politics begin where millions are.",
        work: "Collected Works",
        note: "Lenin thinks politics at the scale of mass organization."
      }
    ],
    sources: [
      {
        label: "Encyclopaedia Britannica - Vladimir Lenin",
        url: "https://www.britannica.com/biography/Vladimir-Lenin",
        type: "Biography",
        note: "Used for Lenin's biography, revolutionary activity, and political role."
      },
      {
        label: "Marxists Internet Archive - What Is To Be Done?",
        url: "https://www.marxists.org/archive/lenin/works/1901/witbd/",
        type: "Primary text",
        note: "Used for the main work reference and organizational theory context."
      }
    ]
  },
  nietzsche: {
    life: "1844-1900",
    place: "Roecken, Basel, Turin",
    history:
      "Nietzsche wrote against moral comfort, herd certainty, and inherited metaphysics. His aphoristic style turns philosophy into pressure, provocation, and self-examination.",
    legacy:
      "He asks who benefits from a value, what kind of life it protects, and whether a person has the courage to create rather than merely obey.",
    biography: [
      "Nietzsche was trained as a classical philologist and appointed to Basel unusually young. His first book, The Birth of Tragedy, already challenged academic expectations by reading Greek culture through art, suffering, and the tension between Apollonian form and Dionysian force.",
      "Ill health forced him out of university life, and his mature philosophy took shape in movement: Swiss mountains, Italian cities, short books, prefaces, aphorisms, and increasingly sharp attacks on morality, religion, nationalism, pity, and philosophical comfort.",
      "Nietzsche's method is genealogical. Instead of asking only whether a value is true, he asks what type of life needs it, what instincts it expresses, and what it costs. That makes him dangerous and useful: he exposes hidden weakness, but also asks whether stronger value creation is possible."
    ],
    ideas: ["genealogy", "will to power", "value creation", "critique of morality"],
    primaryWork: "On the Genealogy of Morality",
    archiveNote: "Nietzsche sharpens the archive with suspicion and self-overcoming.",
    timeline: [
      {
        year: "1844",
        title: "Born in Roecken",
        copy: "Nietzsche is born into a Lutheran family in Prussia."
      },
      {
        year: "1869",
        title: "Professor at Basel",
        copy: "He becomes a professor of classical philology before completing a doctorate in the usual way."
      },
      {
        year: "1872",
        title: "The Birth of Tragedy",
        copy: "The book introduces his early concern with art, suffering, and Greek culture."
      },
      {
        year: "1883-1885",
        title: "Thus Spoke Zarathustra",
        copy: "Nietzsche develops images of self-overcoming, eternal recurrence, and value creation."
      },
      {
        year: "1889-1900",
        title: "Collapse and aftermath",
        copy: "After a mental collapse in Turin, he lives incapacitated while his reputation grows after his death."
      }
    ],
    quotes: [
      {
        text: "Become who you are.",
        work: "The Gay Science",
        note: "Selfhood is an achievement, not a possession."
      },
      {
        text: "God is dead.",
        work: "The Gay Science",
        note: "The collapse of inherited meaning creates danger and responsibility."
      },
      {
        text: "What does not kill me makes me stronger.",
        work: "Twilight of the Idols",
        note: "A hard formula for turning suffering into power."
      }
    ],
    sources: [
      {
        label: "Stanford Encyclopedia of Philosophy - Nietzsche",
        url: "https://plato.stanford.edu/entries/nietzsche/",
        type: "Research",
        note: "Used for Nietzsche's life, critique of morality, genealogy, and interpretive themes."
      },
      {
        label: "Project Gutenberg - The Genealogy of Morals",
        url: "https://www.gutenberg.org/ebooks/52319",
        type: "Primary text",
        note: "Used for the main work reference and moral genealogy context."
      }
    ]
  },
  beauvoir: {
    life: "1908-1986",
    place: "Paris",
    history:
      "Beauvoir brought existential freedom into contact with gender, dependence, aging, love, and social constraint. She showed that becoming a self happens inside a world that assigns roles.",
    legacy:
      "Her philosophy refuses a thin idea of freedom. Choice matters, but it is lived through bodies, institutions, myths, labor, and the long pressure of being made into an Other.",
    biography: [
      "Simone de Beauvoir was raised in a bourgeois Catholic family in Paris and rejected both religious belief and the expected path of marriage. Her philosophical training, financial independence, and 1929 meeting with Sartre placed her at the center of French existentialism, but her work cannot be reduced to his.",
      "During and after the Second World War, Beauvoir's writing moved through fiction, ethics, memoir, travel, political journalism, and feminist analysis. The Ethics of Ambiguity gives existential freedom a moral vocabulary; The Second Sex turns that freedom toward the historical production of woman as Other.",
      "Beauvoir's force is concrete. She asks how freedom is lived when bodies age, when work is unequal, when love becomes dependency, when myths naturalize domination, and when social worlds teach people to accept smaller lives than they are capable of making."
    ],
    ideas: ["existential feminism", "ambiguity", "otherness", "situated freedom"],
    primaryWork: "The Second Sex",
    archiveNote: "Beauvoir gives freedom a body, a history, and a social cost.",
    timeline: [
      {
        year: "1908",
        title: "Born in Paris",
        copy: "Beauvoir grows up in a family shaped by Catholic convention and declining bourgeois security."
      },
      {
        year: "1929",
        title: "Agrégation and Sartre",
        copy: "She passes the philosophy agregation and forms the lifelong intellectual partnership with Sartre."
      },
      {
        year: "1943-1947",
        title: "Existential ethics develops",
        copy: "Novels and essays explore freedom, violence, ambiguity, and responsibility under historical pressure."
      },
      {
        year: "1949",
        title: "The Second Sex",
        copy: "The book transforms feminist philosophy by analyzing woman as historically made rather than naturally fixed."
      },
      {
        year: "1986",
        title: "Death in Paris",
        copy: "Beauvoir leaves a body of work that reshapes ethics, feminism, life writing, and existentialism."
      }
    ],
    quotes: [
      {
        text: "One is not born, but rather becomes, woman.",
        work: "The Second Sex",
        note: "Gender is analyzed as historical formation, not destiny."
      },
      {
        text: "To will oneself free is also to will others free.",
        work: "The Ethics of Ambiguity",
        note: "Freedom becomes ethical only when it refuses domination."
      },
      {
        text: "Freedom is the source from which all significations spring.",
        work: "The Ethics of Ambiguity",
        note: "Meaning appears through situated human projects."
      }
    ],
    sources: [
      {
        label: "Stanford Encyclopedia of Philosophy - Simone de Beauvoir",
        url: "https://plato.stanford.edu/entries/beauvoir/",
        type: "Research",
        note: "Used for Beauvoir's life, existential ethics, feminism, and major works."
      },
      {
        label: "Encyclopaedia Britannica - The Second Sex",
        url: "https://www.britannica.com/topic/The-Second-Sex",
        type: "Research",
        note: "Used for the context and significance of Beauvoir's central feminist work."
      }
    ]
  },
  sartre: {
    life: "1905-1980",
    place: "Paris",
    history:
      "Sartre made existentialism a public language after the Second World War. His philosophy centers on choice, bad faith, responsibility, and the burden of making meaning without fixed essence.",
    legacy:
      "He brings the archive back to the individual without letting the individual escape responsibility. Even refusal becomes a choice, and identity is a project made in the open.",
    biography: [
      "Jean-Paul Sartre was educated in elite French institutions and became a teacher, novelist, playwright, critic, and public intellectual. His early work joins phenomenology with a fierce account of consciousness as lack, projection, and freedom.",
      "The Second World War changed the public meaning of his philosophy. After military service, captivity, occupation, and resistance networks, Sartre's existentialism became a language for responsibility in a world without guaranteed moral scripts.",
      "Being and Nothingness analyzes bad faith, the look of the Other, embodiment, and radical freedom. Later, Sartre tried to connect existential freedom with Marxist history and collective struggle, refusing the idea that philosophy could remain private while the century burned."
    ],
    ideas: ["existence", "bad faith", "responsibility", "freedom"],
    primaryWork: "Existentialism Is a Humanism",
    archiveNote: "Sartre closes the route by asking what you are doing with your freedom.",
    timeline: [
      {
        year: "1905",
        title: "Born in Paris",
        copy: "Sartre enters a literary and academic world that he later turns into public philosophy."
      },
      {
        year: "1929",
        title: "Meets Beauvoir",
        copy: "The partnership becomes one of the most influential intellectual relationships of the twentieth century."
      },
      {
        year: "1938-1943",
        title: "Nausea and Being and Nothingness",
        copy: "Sartre moves from existential fiction to a major philosophical account of freedom and bad faith."
      },
      {
        year: "1945-1946",
        title: "Existentialism goes public",
        copy: "He co-founds Les Temps Modernes and delivers the lecture later published as Existentialism Is a Humanism."
      },
      {
        year: "1964-1980",
        title: "Refusal and late politics",
        copy: "Sartre declines the Nobel Prize and remains politically engaged until his death in Paris."
      }
    ],
    quotes: [
      {
        text: "Existence precedes essence.",
        work: "Existentialism Is a Humanism",
        note: "Human beings are not born with a fixed script."
      },
      {
        text: "Man is nothing else but what he makes of himself.",
        work: "Existentialism Is a Humanism",
        note: "Freedom is inseparable from responsibility."
      },
      {
        text: "Hell is other people.",
        work: "No Exit",
        note: "The gaze of others can trap identity in judgment."
      }
    ],
    sources: [
      {
        label: "Stanford Encyclopedia of Philosophy - Jean-Paul Sartre",
        url: "https://plato.stanford.edu/entries/sartre/",
        type: "Research",
        note: "Used for Sartre's philosophy, existential themes, and intellectual development."
      },
      {
        label: "Marxists Internet Archive - Existentialism Is a Humanism",
        url: "https://www.marxists.org/reference/archive/sartre/works/exist/sartre.htm",
        type: "Primary text",
        note: "Used for the main work reference and existentialist quote context."
      }
    ]
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
