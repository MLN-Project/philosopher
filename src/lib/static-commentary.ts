import type { AiCommentary, PhilosopherId, QuizResult } from "@/lib/types";
import type { Language } from "@/lib/i18n";

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

const STATIC_COMMENTARY_BY_PHILOSOPHER_VI: Record<PhilosopherId, AiCommentary> = {
  marx: {
    summary:
      "Câu trả lời của bạn nghiêng về Marx: một trí óc xem bức bối riêng như dấu vết của điều kiện vật chất chung.",
    beliefProfile:
      "Bạn thường không tin những lời giải cô lập cá nhân khỏi lao động, giai cấp, lệ thuộc và thiết chế tổ chức đời sống hằng ngày. Khi điều gì có vẻ cá nhân, bản năng đầu tiên của bạn là hỏi quan hệ xã hội nào tạo ra nó, ai hưởng lợi và thay đổi thực tế nào sẽ làm tự do bớt trừu tượng.",
    strengths: [
      "Bạn nối trải nghiệm cá nhân với hệ thống lớn mà vẫn giữ được phần con người.",
      "Bạn giỏi hỏi ai được lợi khi một tình huống được trình bày như tự nhiên hoặc tất yếu.",
      "Bạn thích ý tưởng có thể được thử qua thực hành, đoàn kết và hậu quả vật chất."
    ],
    blindSpots: [
      "Bạn có thể thiếu kiên nhẫn với lời giải biểu tượng, tinh thần hoặc thân mật trước khi nghe điều chúng tiết lộ.",
      "Bạn có thể đọc cấu trúc mạnh đến mức sự mơ hồ cá nhân bị xem là phụ.",
      "Bạn có thể đánh giá thấp việc con người thay đổi chậm thế nào khi thói quen, sợ hãi và trung thành dính líu."
    ],
    recommendedReadings: [
      "Bản thảo kinh tế-triết học năm 1844",
      "Luận cương về Feuerbach",
      "Tư bản, Quyển I, nhất là các chương về bái vật hóa hàng hóa và ngày lao động"
    ],
    disclaimer: "Đây là diễn giải phản tư về câu trả lời, không phải chẩn đoán tâm lý, nhãn chính trị hay đánh giá học thuật."
  },
  engels: {
    summary:
      "Câu trả lời của bạn nghiêng về Engels: một người xây hệ thống muốn đọc ý tưởng, tự nhiên, sản xuất và xã hội cùng nhau.",
    beliefProfile:
      "Bạn bị hút về những lời giải nối nhiều tầng một lúc: đời sống vật chất, vận động lịch sử, thay đổi kỹ thuật và áp lực trong thiết chế xã hội. Bạn ít quan tâm tới tia sáng cô lập hơn là một mô thức có thể đứng vững qua nhiều lĩnh vực.",
    strengths: [
      "Bạn nhận ra mô thức rộng mà không vội biến chúng thành khẩu hiệu.",
      "Bạn có thể dịch lý thuyết thành bản đồ thực tế của lực, ràng buộc và khả năng.",
      "Bạn coi trọng hợp tác trí tuệ và công việc tích lũy hơn sự độc đáo cô độc."
    ],
    blindSpots: [
      "Bạn có thể tin vào sự mạch lạc của hệ thống trước khi kiểm tra một trường hợp sống cụ thể.",
      "Bạn dễ tự tin quá mức khi một mô thức có vẻ đẹp.",
      "Bạn có thể làm nhẹ bất định đạo đức khi hướng lịch sử trông rõ ràng."
    ],
    recommendedReadings: [
      "Chủ nghĩa xã hội: Không tưởng và khoa học",
      "Chống Duhring",
      "Nguồn gốc của gia đình, chế độ tư hữu và nhà nước"
    ],
    disclaimer: "Đây là diễn giải phản tư về câu trả lời, không phải chẩn đoán tâm lý, nhãn chính trị hay đánh giá học thuật."
  },
  lenin: {
    summary:
      "Câu trả lời của bạn nghiêng về Lenin: một chiến lược gia thực hành cho rằng phân tích phải trở thành can thiệp có tổ chức.",
    beliefProfile:
      "Bạn thường đánh giá một ý tưởng bằng việc nó làm rõ điều cần làm tiếp theo hay không. Bạn chú ý quyền lực, kỷ luật, thời điểm và khác biệt giữa có ý kiến đúng với xây được phương tiện để hành động.",
    strengths: [
      "Bạn có thể đi từ chẩn đoán tới chiến lược mà không lạc trong trừu tượng.",
      "Bạn nhận ra khi ý định tốt thiếu tổ chức, thời điểm hoặc đòn bẩy.",
      "Bạn sẵn sàng thử tuyên bố qua thực hành thay vì để chúng thành trang trí."
    ],
    blindSpots: [
      "Bạn có thể đề cao kỷ luật khi tình huống cũng cần lắng nghe, đa dạng hoặc hàn gắn.",
      "Bạn có thể nghi ngờ sự chần chừ ngay cả khi chần chừ có ích về đạo đức.",
      "Bạn có thể xem bất đồng là vô tổ chức trước khi hiểu nội dung của nó."
    ],
    recommendedReadings: ["Làm gì?", "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán", "Nhà nước và cách mạng"],
    disclaimer: "Đây là diễn giải phản tư về câu trả lời, không phải chẩn đoán tâm lý, nhãn chính trị hay đánh giá học thuật."
  },
  hegel: {
    summary:
      "Câu trả lời của bạn nghiêng về Hegel: một tư duy biện chứng mong chân lý hiện ra qua căng thẳng, lịch sử và phát triển.",
    beliefProfile:
      "Bạn có xu hướng xem xung đột không chỉ là vấn đề cần dọn đi. Một mâu thuẫn thường trông như dấu hiệu rằng một lối sống, niềm tin hoặc thiết chế đang bộc lộ giới hạn của chính nó. Bạn muốn toàn bộ vận động, không chỉ khoảnh khắc cô lập.",
    strengths: [
      "Bạn có thể ngồi với căng thẳng đủ lâu để thấy nó đang cố trở thành gì.",
      "Bạn kháng lại câu trả lời hoặc-cái-này-hoặc-cái-kia khi mâu thuẫn cần phát triển.",
      "Bạn hiểu căn tính như lịch sử, quan hệ và chưa hoàn tất."
    ],
    blindSpots: [
      "Bạn có thể làm một vấn đề trừu tượng hơn mức cần thiết.",
      "Bạn đôi khi nghe như đã hòa giải với xung đột khi người khác cần cứu trợ trực tiếp.",
      "Bạn có thể ưu tiên hình dáng của toàn thể hơn nỗi đau của một phần cụ thể."
    ],
    recommendedReadings: ["Hiện tượng học tinh thần", "Các nguyên lý của triết học pháp quyền", "Khoa học logic, các phần nhập môn ngắn"],
    disclaimer: "Đây là diễn giải phản tư về câu trả lời, không phải chẩn đoán tâm lý, nhãn chính trị hay đánh giá học thuật."
  },
  feuerbach: {
    summary:
      "Câu trả lời của bạn nghiêng về Feuerbach: một chủ nghĩa duy vật nhân bản đưa ý tưởng lớn trở lại nhu cầu có thân thể.",
    beliefProfile:
      "Bạn thường hỏi cơn đói, tình yêu, sợ hãi, lệ thuộc hay khao khát nào đang ẩn dưới một tuyên bố trừu tượng. Bạn nghi ngờ lý tưởng lơ lửng trên đời sống thường ngày, nhưng không lạnh lùng giản lược; duy vật của bạn thường dịu vì bắt đầu từ thân thể và nhu cầu.",
    strengths: [
      "Bạn có thể giải huyền thoại hóa tuyên bố lớn mà không mất lòng trắc ẩn.",
      "Bạn thấy chi phí thân thể và cảm xúc phía sau những ý tưởng được gọi là thuần khiết.",
      "Bạn giỏi đưa lý thuyết về thước đo con người."
    ],
    blindSpots: [
      "Bạn có thể giải thích niềm tin như phóng chiếu trước khi hỏi nó còn chứa chân lý nào.",
      "Bạn có thể làm nhẹ thiết chế và quyền lực khi tập trung vào nhu cầu chung của con người.",
      "Bạn có thể thích sự ấm và cụ thể hơn phân tích cấu trúc khó."
    ],
    recommendedReadings: ["Bản chất của Kitô giáo", "Nguyên lý triết học tương lai", "Bài giảng về bản chất tôn giáo"],
    disclaimer: "Đây là diễn giải phản tư về câu trả lời, không phải chẩn đoán tâm lý, nhãn chính trị hay đánh giá học thuật."
  },
  plato: {
    summary:
      "Câu trả lời của bạn nghiêng về Plato: một cuộc tìm kiếm trật tự, chân lý và đời sống được định hình bởi Thiện hơn là dư luận thoáng qua.",
    beliefProfile:
      "Bạn bị hút bởi ý nghĩ rằng vẻ ngoài không ổn định và phán đoán tốt cần hướng về điều cao hơn ham muốn, thời thượng hoặc tiện lợi. Bạn có lẽ muốn giáo dục, nhân cách và đời sống công được dẫn dắt bởi minh triết.",
    strengths: [
      "Bạn không nhầm lẫn sự phổ biến với chân lý.",
      "Bạn giữ được tầm nhìn dài về giáo dục, hình thành và trật tự đạo đức.",
      "Bạn nhạy với việc ham muốn cai trị tệ thế nào khi không được tự xét."
    ],
    blindSpots: [
      "Bạn có thể nghi ngờ kinh nghiệm thường ngày quá nhanh khi nó không có vẻ trật tự.",
      "Bạn có thể trở nên gia trưởng khi tin rằng minh triết phân bố không đều.",
      "Bạn có thể thích lý tưởng sạch hơn thỏa hiệp và ma sát của đời sống dân chủ."
    ],
    recommendedReadings: ["Cộng hòa", "Biện hộ", "Phaedrus"],
    disclaimer: "Đây là diễn giải phản tư về câu trả lời, không phải chẩn đoán tâm lý, nhãn chính trị hay đánh giá học thuật."
  },
  aristotle: {
    summary:
      "Câu trả lời của bạn nghiêng về Aristotle: trí tuệ thực hành tìm nhân cách, chừng mực và đời sống tốt trong hành động.",
    beliefProfile:
      "Bạn thường tin tình huống cụ thể hơn khẩu hiệu lớn. Với bạn, đời sống tốt không chỉ là lý thuyết mà là hình dạng được luyện qua phán đoán, thói quen, tình bạn và mục đích.",
    strengths: [
      "Bạn giỏi tìm trung đạo khả thi mà không biến nó thành thỏa hiệp nhạt.",
      "Bạn hiểu nhân cách được xây bằng hành động lặp lại.",
      "Bạn có thể kéo câu hỏi trừu tượng xuống trường hợp và trách nhiệm cụ thể."
    ],
    blindSpots: [
      "Bạn có thể chấp nhận vai trò xã hội thừa kế quá bình thản khi chúng đáng bị phê phán.",
      "Bạn có thể trở nên thận trọng khi tình huống cần đứt gãy hoặc từ chối.",
      "Bạn có thể làm nhẹ việc áp lực vật chất giới hạn thói quen mà con người có thể hình thành."
    ],
    recommendedReadings: ["Đạo đức học Nicomachea", "Chính trị học", "Thi pháp"],
    disclaimer: "Đây là diễn giải phản tư về câu trả lời, không phải chẩn đoán tâm lý, nhãn chính trị hay đánh giá học thuật."
  },
  nietzsche: {
    summary:
      "Câu trả lời của bạn nghiêng về Nietzsche: một khí chất phê phán nghi ngờ luân lý thừa kế và hỏi nó phục vụ kiểu đời sống nào.",
    beliefProfile:
      "Bạn nhanh chóng nhận ra khi giá trị trở thành ngụy trang cho sợ hãi, oán giận, phục tùng hoặc yếu đuối. Bạn muốn con người xét nguồn gốc của lòng trung thành và tạo hình thức sống mạnh hơn, thật hơn, ít phụ thuộc vào chấp thuận hơn.",
    strengths: [
      "Bạn có thể phơi bày đức hạnh giả và tự lừa dối dễ chịu.",
      "Bạn đẩy về sự trung thực trí tuệ ngay cả khi bất tiện về xã hội.",
      "Bạn nhạy với sinh lực, can đảm và nhiệm vụ sáng tạo của việc trở thành chính mình."
    ],
    blindSpots: [
      "Bạn có thể quá khắc nghiệt với lệ thuộc, chăm sóc hoặc tổn thương thường ngày.",
      "Bạn có thể nhầm lòng trắc ẩn với yếu đuối khi nó cũng có thể là sức mạnh.",
      "Bạn có thể phê phán giá trị thừa kế nhanh hơn xây lựa chọn thay thế sống được."
    ],
    recommendedReadings: ["Phả hệ luân lý", "Khoa học vui", "Zarathustra đã nói như thế"],
    disclaimer: "Đây là diễn giải phản tư về câu trả lời, không phải chẩn đoán tâm lý, nhãn chính trị hay đánh giá học thuật."
  },
  confucius: {
    summary:
      "Câu trả lời của bạn nghiêng về Khổng Tử: một đạo đức quan hệ xem nhân cách là điều được tu dưỡng cùng người khác.",
    beliefProfile:
      "Bạn thường nhìn cái tôi qua gia đình, giáo dục, lễ, tình bạn và niềm tin công dân. Tự do với bạn không chỉ là biểu đạt bản thân; nó cũng là khả năng trở nên đáng tin, nhân ái và đáp ứng trong hình thức sống chung.",
    strengths: [
      "Bạn hiểu niềm tin xã hội được xây bằng chăm sóc lặp lại, không chỉ tuyên bố giá trị.",
      "Bạn coi giáo dục, tôn trọng và nêu gương là nghiêm túc.",
      "Bạn thấy phẩm giá trong nghĩa vụ thường ngày mà người khác xem là tầm thường."
    ],
    blindSpots: [
      "Bạn có thể giữ hòa hợp lâu hơn mức công lý cho phép.",
      "Bạn có thể làm nhẹ việc vai trò trở nên áp bức khi thôi phục vụ nhân tính.",
      "Bạn có thể tin vào tu dưỡng đạo đức dần dần khi cần phê phán quyền lực sắc hơn."
    ],
    recommendedReadings: ["Luận Ngữ", "Mạnh Tử", "Đại Học"],
    disclaimer: "Đây là diễn giải phản tư về câu trả lời, không phải chẩn đoán tâm lý, nhãn chính trị hay đánh giá học thuật."
  },
  laozi: {
    summary:
      "Câu trả lời của bạn nghiêng về Lão Tử: một trí tuệ yên lặng tin vào tiết chế, hành động gián tiếp và nhịp của sự vật.",
    beliefProfile:
      "Bạn thường cảm thấy cưỡng ép tạo ra chính sự kháng cự mà nó tuyên bố sẽ giải quyết. Thay vì thống trị mọi tình huống, bạn tìm điểm nơi hành động nhẹ hơn, quyền lực bớt phô diễn và sáng rõ trở lại vì bản ngã thôi siết thế giới.",
    strengths: [
      "Bạn biết khi nào ít kiểm soát hơn có thể tạo kết quả khôn ngoan hơn.",
      "Bạn nhạy với sự quá mức, căng thẳng và bạo lực ẩn trong quản trị quá tay.",
      "Bạn tìm thấy tự do trong giản dị, kiên nhẫn và khả năng đáp ứng."
    ],
    blindSpots: [
      "Bạn có thể rút vào tiết chế khi ai đó cần đối đầu trực tiếp.",
      "Bạn có thể làm hòa với mơ hồ lâu hơn mức người bị hại chịu nổi.",
      "Bạn có thể không tin tổ chức ngay cả khi hành động tập thể là cần thiết."
    ],
    recommendedReadings: ["Đạo Đức Kinh", "Trang Tử", "Một nhập môn so sánh ngắn về Đạo gia và Nho gia"],
    disclaimer: "Đây là diễn giải phản tư về câu trả lời, không phải chẩn đoán tâm lý, nhãn chính trị hay đánh giá học thuật."
  },
  beauvoir: {
    summary:
      "Câu trả lời của bạn nghiêng về Beauvoir: một tự do có hoàn cảnh hỏi con người trở thành chính mình trong điều kiện bất bình đẳng như thế nào.",
    beliefProfile:
      "Bạn thường nhận ra khoảng cách giữa tự do trừu tượng và đời sống thực con người được phép sống. Bạn quan tâm tới lệ thuộc, giới, văn hóa, công nhận và cách con người được dạy chấp nhận giới hạn như căn tính.",
    strengths: [
      "Bạn nối sự trở thành cá nhân với hoàn cảnh xã hội rất rõ.",
      "Bạn nhận ra các hình thức lệ thuộc, vật hóa và giới hạn được học một cách tinh vi.",
      "Bạn giữ tự do gắn với trách nhiệm đối với người khác."
    ],
    blindSpots: [
      "Bạn có thể mang sức nặng của mơ hồ cẩn thận đến mức quyết định bị chậm.",
      "Bạn có thể đọc quan hệ cá nhân qua ràng buộc khi niềm vui và chơi đùa cũng hiện diện.",
      "Bạn có thể kỳ vọng quá nhiều sự sáng rõ ở những người mà hoàn cảnh chưa cho phép xây nó."
    ],
    recommendedReadings: ["Giới tính thứ hai", "Đạo đức học của sự mơ hồ", "Hồi ký của một cô gái ngoan"],
    disclaimer: "Đây là diễn giải phản tư về câu trả lời, không phải chẩn đoán tâm lý, nhãn chính trị hay đánh giá học thuật."
  },
  sartre: {
    summary:
      "Câu trả lời của bạn nghiêng về Sartre: một trách nhiệm triệt để xem căn tính là điều được làm nên qua lựa chọn.",
    beliefProfile:
      "Bạn bị hút bởi ý tưởng rằng con người không phải vật thể đã hoàn tất với bản chất cố định. Ngay dưới áp lực, bạn tìm khoảnh khắc tác giả: lựa chọn, từ chối, cam kết hoặc tự lừa dối cho thấy một người đang làm gì với chính mình.",
    strengths: [
      "Bạn từ chối những lời bào chữa biến con người thành vật thụ động.",
      "Bạn có thể gọi tên tự lừa dối khi ai đó nấp sau vai trò, nhãn hoặc kịch bản.",
      "Bạn coi trách nhiệm là thực hành sống, không phải đức hạnh trừu tượng."
    ],
    blindSpots: [
      "Bạn có thể nói quá về lựa chọn khi giới hạn vật chất rất nặng.",
      "Bạn có thể khắt khe với người cần an toàn trước khi có thể hành động tự do.",
      "Bạn có thể làm trách nhiệm trở nên cô độc trong khi nó cũng cần đoàn kết."
    ],
    recommendedReadings: ["Chủ nghĩa hiện sinh là một chủ nghĩa nhân bản", "Hữu thể và hư vô", "Kín cửa"],
    disclaimer: "Đây là diễn giải phản tư về câu trả lời, không phải chẩn đoán tâm lý, nhãn chính trị hay đánh giá học thuật."
  }
};

export function getStaticCommentary(result: Pick<QuizResult, "topMatches">, language: Language = "en"): AiCommentary {
  const source = language === "vi" ? STATIC_COMMENTARY_BY_PHILOSOPHER_VI : STATIC_COMMENTARY_BY_PHILOSOPHER;
  return source[result.topMatches[0].id];
}
