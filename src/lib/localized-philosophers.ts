import type { Language } from "@/lib/i18n";
import { PHILOSOPHERS, PHILOSOPHER_BY_ID, type Philosopher } from "@/lib/philosophers";
import type { PhilosopherId } from "@/lib/types";

type PhilosopherText = Pick<
  Philosopher,
  "name" | "era" | "shortLabel" | "quote" | "quoteNote" | "description" | "reading"
>;

const philosopherTextVi: Record<PhilosopherId, PhilosopherText> = {
  marx: {
    name: "Karl Marx",
    era: "Chủ nghĩa duy vật lịch sử",
    shortLabel: "Đời sống vật chất đi trước lý tưởng trừu tượng",
    quote: "Các nhà triết học chỉ giải thích thế giới; vấn đề là cải tạo thế giới.",
    quoteNote: "Luận cương về Feuerbach",
    description:
      "Bạn đọc những vấn đề cá nhân qua cấu trúc xã hội, lao động, giai cấp và điều kiện lịch sử.",
    reading: "Bản thảo kinh tế-triết học năm 1844"
  },
  engels: {
    name: "Friedrich Engels",
    era: "Chủ nghĩa duy vật biện chứng",
    shortLabel: "Mô thức, sản xuất và vận động lịch sử",
    quote: "Tự do là sự nhận thức được tất yếu.",
    quoteNote: "Chống Duhring",
    description:
      "Bạn tìm hệ thống lớn phía sau sự kiện và thích lời giải nối tự nhiên, kinh tế và xã hội với nhau.",
    reading: "Chủ nghĩa xã hội: Không tưởng và khoa học"
  },
  lenin: {
    name: "Vladimir Lenin",
    era: "Thực tiễn và cách mạng",
    shortLabel: "Phân tích phải trở thành hành động có tổ chức",
    quote: "Không có lý luận cách mạng thì không thể có phong trào cách mạng.",
    quoteNote: "Làm gì?",
    description:
      "Bạn không tin vào sự thông suốt thụ động. Một ý tưởng đúng phải làm rõ chiến lược, kỷ luật và can thiệp.",
    reading: "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán"
  },
  hegel: {
    name: "G. W. F. Hegel",
    era: "Chủ nghĩa duy tâm biện chứng",
    shortLabel: "Mâu thuẫn như động cơ của tinh thần",
    quote: "Chân lý là cái toàn thể.",
    quoteNote: "Hiện tượng học tinh thần",
    description:
      "Bạn xem xung đột là phát triển, và thường nghĩ mỗi lập trường sẽ bộc lộ giới hạn của nó theo thời gian.",
    reading: "Hiện tượng học tinh thần"
  },
  feuerbach: {
    name: "Ludwig Feuerbach",
    era: "Chủ nghĩa duy vật nhân bản",
    shortLabel: "Nhu cầu con người phía dưới sự phóng chiếu thiêng liêng",
    quote: "Con người là cái họ ăn.",
    quoteNote: "Cách tóm lược thường gán cho chủ nghĩa duy vật của ông",
    description:
      "Bạn kéo các ý tưởng lớn về lại nhu cầu thường ngày, thân thể và cảm tình xã hội của con người.",
    reading: "Bản chất của Kitô giáo"
  },
  plato: {
    name: "Plato",
    era: "Chủ nghĩa duy tâm cổ điển",
    shortLabel: "Hướng linh hồn về Thiện",
    quote: "Sự khởi đầu là phần quan trọng nhất của công việc.",
    quoteNote: "Cộng hòa",
    description:
      "Bạn tìm những lý tưởng ổn định phía sau vẻ ngoài rối rắm và muốn xã hội được dẫn dắt bởi minh triết.",
    reading: "Cộng hòa"
  },
  aristotle: {
    name: "Aristotle",
    era: "Đức hạnh và lý trí thực hành",
    shortLabel: "Nhân cách được tạo thành qua hành động điều độ",
    quote: "Chúng ta là điều ta lặp đi lặp lại.",
    quoteNote: "Diễn ý quen thuộc từ Đạo đức học Nicomachea",
    description:
      "Bạn thích phán đoán cân bằng, tình huống cụ thể và những thói quen làm đời sống tốt trở nên bền.",
    reading: "Đạo đức học Nicomachea"
  },
  nietzsche: {
    name: "Friedrich Nietzsche",
    era: "Phê phán luân lý",
    shortLabel: "Tạo giá trị thay vì thừa hưởng chúng",
    quote: "Hãy trở thành chính bạn.",
    quoteNote: "Câu của Pindar mà Nietzsche nhiều lần gọi lại",
    description:
      "Bạn nghi ngờ sự phục tùng, luân lý thừa kế và những lời giải dễ chịu che chắn cho yếu đuối.",
    reading: "Phả hệ luân lý"
  },
  confucius: {
    name: "Khổng Tử",
    era: "Đạo đức quan hệ",
    shortLabel: "Nhân tính được tu dưỡng qua vai trò",
    quote: "Học rồi thường xuyên thực hành, chẳng phải là vui sao?",
    quoteNote: "Luận Ngữ",
    description:
      "Bạn hiểu cái tôi qua bổn phận, lễ nghi, giáo dục, gia đình và niềm tin xã hội.",
    reading: "Luận Ngữ"
  },
  laozi: {
    name: "Lão Tử",
    era: "Sự hài hòa Đạo gia",
    shortLabel: "Quyền lực hiệu quả nhất khi thôi cưỡng ép",
    quote: "Hành trình ngàn dặm bắt đầu từ dưới bàn chân.",
    quoteNote: "Đạo Đức Kinh",
    description:
      "Bạn thường tin vào hành động gián tiếp, tiết chế và sự hòa hợp với những tiến trình lớn hơn bản ngã.",
    reading: "Đạo Đức Kinh"
  },
  beauvoir: {
    name: "Simone de Beauvoir",
    era: "Nữ quyền hiện sinh",
    shortLabel: "Tự do trở thành thật qua đời sống cụ thể",
    quote: "Người ta không sinh ra là phụ nữ, mà trở thành phụ nữ.",
    quoteNote: "Giới tính thứ hai",
    description:
      "Bạn chú ý cách tự do bị định hình bởi giới, lệ thuộc, văn hóa và đòi hỏi trở thành chính mình.",
    reading: "Giới tính thứ hai"
  },
  sartre: {
    name: "Jean-Paul Sartre",
    era: "Tự do hiện sinh",
    shortLabel: "Lựa chọn bộc lộ trách nhiệm",
    quote: "Hiện hữu có trước bản chất.",
    quoteNote: "Chủ nghĩa hiện sinh là một chủ nghĩa nhân bản",
    description:
      "Bạn xem căn tính như một dự phóng được tạo bằng lựa chọn, không phải kịch bản cố định được trao sẵn.",
    reading: "Chủ nghĩa hiện sinh là một chủ nghĩa nhân bản"
  }
};

export function getLocalizedPhilosopher(id: PhilosopherId, language: Language): Philosopher {
  const philosopher = PHILOSOPHER_BY_ID[id];
  if (language === "en") return philosopher;

  return {
    ...philosopher,
    ...philosopherTextVi[id]
  };
}

export function getLocalizedPhilosophers(language: Language): Philosopher[] {
  return PHILOSOPHERS.map((philosopher) => getLocalizedPhilosopher(philosopher.id, language));
}

export function getLocalizedPhilosopherById(language: Language): Record<PhilosopherId, Philosopher> {
  return Object.fromEntries(
    PHILOSOPHERS.map((philosopher) => [philosopher.id, getLocalizedPhilosopher(philosopher.id, language)])
  ) as Record<PhilosopherId, Philosopher>;
}
