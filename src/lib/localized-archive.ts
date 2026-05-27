import type { Language } from "@/lib/i18n";
import {
  archiveDetails,
  archiveThreads,
  type ArchiveDetail,
  type ArchiveQuote,
  type ArchiveTimelineEvent,
  type ArchiveThread
} from "@/lib/philosopher-archive";
import type { PhilosopherId } from "@/lib/types";

type ArchiveDetailText = Omit<ArchiveDetail, "sources"> & {
  sources: { note: string }[];
};

const archiveDetailTextVi: Record<PhilosopherId, ArchiveDetailText> = {
  plato: {
    life: "khoảng 428-348 TCN",
    place: "Athens",
    history:
      "Plato viết sau Chiến tranh Peloponnesus, sự bất ổn của dân chủ Athens và cái chết của Socrates. Các đối thoại của ông biến khủng hoảng công dân thành câu hỏi về chân lý, giáo dục, công lý và trạng thái của linh hồn.",
    legacy:
      "Ông làm triết học trở nên có kiến trúc: đời sống thấy được thì bất ổn, nên người tư duy tìm các Mô thức, chuẩn mực và Thiện để tổ chức tri thức, ham muốn và đời sống công.",
    biography: [
      "Plato sinh trong một gia đình quý tộc Athens vào những năm cuối của Chiến tranh Peloponnesus. Sự sụp đổ của quyền lực Athens, thời cai trị ngắn của Ba Mươi Bạo Chúa và phiên xử Socrates khiến ông nghi ngờ chính trị không có kỷ luật triết học.",
      "Thay vì viết luận thuyết bằng giọng riêng, Plato dựng các đối thoại kịch tính. Socrates trở thành nhân vật trung tâm để thử những câu hỏi: công lý là gì, đức hạnh có thể dạy không, kiểu giáo dục nào tạo ra người cai trị đáng tin.",
      "Học viện biến dự án ấy thành một thiết chế. Tư tưởng Plato đi qua siêu hình học, đạo đức, tâm lý, toán học và chính trị, nhưng áp lực chung vẫn là quay linh hồn về điều ổn định, khả niệm và thiện hơn."
    ],
    ideas: ["Mô thức", "công lý", "giáo dục", "triết gia-cai trị"],
    primaryWork: "Cộng hòa",
    archiveNote: "Bản đồ bắt đầu với Plato vì ông buộc triết học hỏi điều gì nên cai trị vẻ ngoài.",
    timeline: [
      {
        year: "khoảng 428 TCN",
        title: "Sinh giữa khủng hoảng Athens",
        copy: "Plato lớn lên trong một thành bang bị chiến tranh, phe phái và thất bại đế quốc đánh dấu."
      },
      {
        year: "399 TCN",
        title: "Socrates bị xử tử",
        copy: "Cái chết của thầy ông trở thành vết thương phía sau sự nghi ngờ lâu dài với dư luận không tự xét."
      },
      {
        year: "khoảng 387 TCN",
        title: "Học viện bắt đầu",
        copy: "Plato lập một trường ở Athens nối toán học, biện chứng, lý thuyết chính trị và giáo dục đạo đức."
      },
      {
        year: "khoảng 380 TCN",
        title: "Cộng hòa thành hình",
        copy: "Đối thoại nối công lý trong linh hồn với công lý trong thành bang và phát triển hình ảnh triết gia-cai trị."
      },
      {
        year: "348 TCN",
        title: "Qua đời ở Athens",
        copy: "Trường phái và đối thoại của ông vẫn là điểm quay lại trung tâm của siêu hình học, đạo đức và chính trị."
      }
    ],
    quotes: [
      {
        text: "Sự khởi đầu là phần quan trọng nhất của công việc.",
        work: "Cộng hòa",
        note: "Giáo dục bắt đầu bằng định hình ham muốn trước khi lý luận có thể dẫn dắt."
      },
      {
        text: "Đời sống không được tự xét thì không đáng sống.",
        work: "Biện hộ",
        note: "Socrates của Plato trao cho triết học đòi hỏi công khai về tự vấn."
      },
      {
        text: "Công lý là làm đúng công việc của mình.",
        work: "Cộng hòa",
        note: "Một cách nén lại luận điểm rằng trật tự phụ thuộc vào các phần được sắp đặt đúng."
      }
    ],
    sources: [
      { note: "Dùng cho khung lịch sử, học thuyết chính, hình thức đối thoại và ảnh hưởng của Plato." },
      { note: "Dùng cho tác phẩm chính và nhãn trích dẫn ngắn." }
    ]
  },
  aristotle: {
    life: "384-322 TCN",
    place: "Stagira, Athens",
    history:
      "Aristotle học trong Học viện của Plato, dạy Alexander và xây một trường quanh quan sát, phân loại, logic và thực hành đạo đức. Ông kéo triết học gần hơn với sinh vật sống, nguyên nhân cụ thể và phán đoán thực hành.",
    legacy:
      "Công trình của ông tạo đối trọng thực tế cho kho lưu trữ: nhân cách được rèn, tri thức lớn lên qua phân biệt cẩn thận, và đời sống tốt phụ thuộc vào thói quen hợp với bản tính người.",
    biography: [
      "Aristotle đến từ Stagira ở miền bắc Hy Lạp và vào Học viện của Plato khi còn trẻ. Ông thừa hưởng sự nghiêm túc của Plato về chân lý, nhưng đẩy triết học về thế giới của sinh vật, thực hành công dân, tu từ, thi ca và các cách giải thích khác nhau.",
      "Sau khi rời Athens, Aristotle sống ở Tiểu Á và Lesbos, nơi các nghiên cứu sinh học làm sâu thêm thói quen phân loại của ông. Sau đó ông dạy Alexander xứ Macedon trước khi trở lại Athens lập Lyceum.",
      "Đạo đức học của ông bắt đầu từ mục đích thông thường của con người nhưng không để chúng mơ hồ. Hạnh phúc không phải tâm trạng; đó là hoạt động được định hình bởi đức hạnh, lý trí, tình bạn và đời sống chính trị."
    ],
    ideas: ["đức hạnh", "logic", "nguyên nhân", "lý trí thực hành"],
    primaryWork: "Đạo đức học Nicomachea",
    archiveNote: "Aristotle làm trang này vững lại bằng hành động có chừng mực thay vì chỉ hướng lên lý tưởng.",
    timeline: [
      { year: "384 TCN", title: "Sinh ở Stagira", copy: "Nền tảng gia đình nối ông với y học và đời sống cung đình trước khi vào triết học Athens." },
      { year: "367 TCN", title: "Học tại Học viện", copy: "Ông gia nhập trường của Plato và ở đó khoảng hai thập kỷ." },
      { year: "343 TCN", title: "Dạy Alexander", copy: "Sự bảo trợ Macedon đặt Aristotle gần nền chính trị sẽ biến đổi thế giới Hy Lạp." },
      { year: "335 TCN", title: "Lập Lyceum", copy: "Trường trở thành trung tâm cho logic, khảo cứu tự nhiên, đạo đức, chính trị và phân tích văn chương." },
      { year: "322 TCN", title: "Qua đời ở Chalcis", copy: "Các trước tác của ông trở thành khung dài hạn cho triết học trung đại, Hồi giáo, Do Thái và Kitô giáo." }
    ],
    quotes: [
      { text: "Hạnh phúc là hoạt động của linh hồn.", work: "Đạo đức học Nicomachea", note: "Đời sống tốt là điều được thực hành, không chỉ được sở hữu." },
      { text: "Đức hạnh là một trạng thái liên quan đến lựa chọn.", work: "Đạo đức học Nicomachea", note: "Nhân cách được đo bằng phán đoán trong điều kiện cụ thể." },
      { text: "Con người tự bản tính là động vật chính trị.", work: "Chính trị học", note: "Sự nở hoa của con người cần lời nói, luật, tình bạn và hình thức công dân." }
    ],
    sources: [
      { note: "Dùng cho đời sống, trường phái, logic, nguyên nhân, đạo đức và phạm vi triết học của Aristotle." },
      { note: "Dùng cho tác phẩm chính và vốn từ đạo đức." }
    ]
  },
  confucius: {
    life: "551-479 TCN",
    place: "nước Lỗ, Trung Hoa",
    history:
      "Khổng Tử sống giữa thời phân mảnh chính trị và xem việc sửa chữa xã hội như một dự án đạo đức. Lời dạy của ông xoay quanh học tập, lễ, nhân và sự hình thành chậm rãi của người đáng tin.",
    legacy:
      "Cái tôi trong tư tưởng ông không bao giờ cô lập. Nó được định hình qua gia đình, nghi lễ, ngôn ngữ, bổn phận công và kỷ luật trở nên đáng tin trong quan hệ với người khác.",
    biography: [
      "Khổng Tử sống ở nước Lỗ vào cuối thời Xuân Thu, khi trật tự chính trị và lễ nghi nhà Chu suy yếu. Tư tưởng của ông bắt đầu từ sự rối loạn ấy: khi vua tôi, cha con và bạn bè không còn biết cư xử với nhau, xã hội mất ngữ pháp đạo đức.",
      "Ông không tự trình bày như một nhà phát minh cô độc. Ông xem mình là người truyền lại và làm sống lại truyền thống cũ qua học tập, lễ, nhạc, kính trọng và nhân.",
      "Khổng Tử làm triết học trở nên xã hội mà không nông cạn. Một người trở nên quân tử không chỉ bằng cường độ nội tâm riêng, mà bằng việc đáng tin trong vai trò."
    ],
    ideas: ["nhân", "lễ", "học", "đạo đức vai trò"],
    primaryWork: "Luận Ngữ",
    archiveNote: "Khổng Tử trao cho bản đồ một ngữ pháp xã hội của chăm sóc, trật tự và thực hành.",
    timeline: [
      { year: "551 TCN", title: "Sinh ở Lỗ", copy: "Khổng Tử sinh trong một gia đình quý tộc nhỏ giữa thế giới nhà Chu phân rã." },
      { year: "khoảng 501 TCN", title: "Phục vụ công ở Lỗ", copy: "Truyền thống đặt ông vào vai trò hành chính, làm sắc nét quan tâm về lễ và chính trị đạo đức." },
      { year: "497 TCN", title: "Những năm du thuyết", copy: "Ông rời Lỗ để tìm người cai trị sẵn sàng khôi phục chính quyền nhân hậu và có kỷ luật." },
      { year: "484 TCN", title: "Trở lại dạy học", copy: "Về Lỗ, ông dành những năm cuối cho học trò, văn bản và truyền lại học lễ." },
      { year: "479 TCN", title: "Qua đời ở Lỗ", copy: "Môn đệ bảo tồn các cuộc trò chuyện sau này trở thành trung tâm của giáo dục Nho gia." }
    ],
    quotes: [
      { text: "Học rồi thực hành, chẳng phải là vui sao?", work: "Luận Ngữ", note: "Học chỉ thành thật khi được hiện thân lặp đi lặp lại." },
      { text: "Người quân tử không phải là đồ dùng.", work: "Luận Ngữ", note: "Người được tu dưỡng không chỉ là công cụ hẹp." },
      { text: "Điều mình không muốn thì đừng làm cho người.", work: "Luận Ngữ", note: "Tính hỗ tương là phép thử thực hành cho nhân." }
    ],
    sources: [
      { note: "Dùng cho bối cảnh lịch sử, chủ đề giảng dạy và vốn từ đạo đức Nho gia." },
      { note: "Dùng cho tác phẩm chính và nhãn trích dẫn." }
    ]
  },
  laozi: {
    life: "truyền thống đặt vào thế kỷ 6 TCN",
    place: "Trung Hoa cổ đại",
    history:
      "Lão Tử là nhân vật một phần huyền thoại gắn với Đạo Đức Kinh. Truyền thống này chống lại cai trị cưỡng ép, sự chắc chắn cứng nhắc và ham muốn kiểm soát điều có nhịp riêng.",
    legacy:
      "Sự hiện diện của ông đổi nhịp kho lưu trữ. Quyền lực có thể trở nên yên hơn, minh triết có thể giống tiết chế, và hành động có thể thành công bằng cách thuận theo thớ của thế giới.",
    biography: [
      "Lão Tử khó được đặt chắc trong lịch sử. Truyền thống sau này xem ông như người cùng thời lớn tuổi hơn Khổng Tử, còn nghiên cứu hiện đại thường thận trọng với cả nhân vật lẫn Đạo Đức Kinh.",
      "Sự bất định ấy phù hợp với phong cách triết học của văn bản. Đạo Đức Kinh kháng lại định nghĩa cứng và cảnh báo rằng tên gọi, kế hoạch và cai trị cưỡng bức có thể đi ngược mẫu hình sâu của sự vật.",
      "Lão Tử quan trọng trong bản đồ vì ông thách thức tâm trạng anh hùng của triết học. Minh triết có thể không giống làm chủ; nó có thể là biết khi nào dừng, nhường và để hành động nảy sinh từ chú ý."
    ],
    ideas: ["đạo", "vô vi", "giản dị", "quyền lực không cưỡng ép"],
    primaryWork: "Đạo Đức Kinh",
    archiveNote: "Lão Tử mở một lối nơi triết học làm ít hơn để thấy nhiều hơn.",
    timeline: [
      { year: "Thời huyền thoại", title: "Hiền nhân ở rìa lịch sử", copy: "Truyền thống đặt Lão Tử trong thế giới nhà Chu, nhưng con người lịch sử vẫn bất định." },
      { year: "Chiến Quốc", title: "Văn bản thành hình", copy: "Đạo Đức Kinh có lẽ phản ánh thời xung đột chính trị và cạnh tranh triết học." },
      { year: "Đầu Hán", title: "Kinh điển Đạo gia có thẩm quyền", copy: "Văn bản trở thành phần của đối thoại lớn về cai trị, vũ trụ luận và tu dưỡng." },
      { year: "Trung đại Trung Hoa", title: "Đạo giáo tôn giáo phát triển", copy: "Lão Tử được nâng cao trong các truyền thống nối nghi lễ, vũ trụ luận và thực hành trường sinh." },
      { year: "Tiếp nhận hiện đại", title: "Một văn bản toàn cầu về tiết chế", copy: "Đạo Đức Kinh trở thành một trong những kinh điển Trung Hoa được dịch nhiều nhất." }
    ],
    quotes: [
      { text: "Đạo có thể nói ra thì không phải Đạo thường hằng.", work: "Đạo Đức Kinh", note: "Dòng đầu cảnh báo thực tại vượt quá tên gọi cố định." },
      { text: "Hành trình ngàn dặm bắt đầu từ dưới bàn chân.", work: "Đạo Đức Kinh", note: "Thay đổi lớn bắt đầu như một bước nhỏ có thân thể." },
      { text: "Biết người là trí; biết mình là sáng.", work: "Đạo Đức Kinh", note: "Hướng vào trong không phải trốn chạy mà là sáng rõ." }
    ],
    sources: [
      { note: "Dùng cho vấn đề tác giả, chủ đề Đạo gia và sự thận trọng khi diễn giải." },
      { note: "Dùng cho tác phẩm chính và cách diễn đạt cổ điển của Đạo Đức Kinh." }
    ]
  },
  hegel: {
    life: "1770-1831",
    place: "Stuttgart, Berlin",
    history:
      "Hegel viết sau Cách mạng Pháp và sự trỗi dậy của xã hội dân sự hiện đại. Ông cố hiểu lịch sử như một vận động lý tính được định hình bởi mâu thuẫn, công nhận và thiết chế.",
    legacy:
      "Biện chứng của ông khiến xung đột không chỉ là tiếng ồn. Một lập trường phơi giới hạn của mình, gặp điều nó loại trừ và trở nên phong phú hơn dưới áp lực của mâu thuẫn.",
    biography: [
      "Hegel thuộc thế hệ sau Kant và Cách mạng Pháp. Ông học thần học và triết học ở Tubingen, làm gia sư rồi bước vào đại học Đức khi chủ nghĩa duy tâm đang nghĩ lại tự do, tri thức, tôn giáo và lịch sử.",
      "Hiện tượng học tinh thần xuất hiện khi quân đội Napoleon đang tái tạo châu Âu. Vở kịch của nó không chỉ là ý thức riêng mà là con đường qua các hình thái kinh nghiệm: cảm tính, tự ý thức, công nhận, đời sống đạo đức, văn hóa, tôn giáo và biết triết học.",
      "Hệ thống trưởng thành của Hegel nối logic, tự nhiên, tinh thần, pháp quyền, nghệ thuật, tôn giáo và triết học. Tham vọng ấy khiến ông vừa thành bậc thầy vừa thành mục tiêu bị tháo gỡ."
    ],
    ideas: ["biện chứng", "công nhận", "tinh thần", "phát triển lịch sử"],
    primaryWork: "Hiện tượng học tinh thần",
    archiveNote: "Hegel chuyển trang từ trật tự phi thời gian sang vận động.",
    timeline: [
      { year: "1770", title: "Sinh ở Stuttgart", copy: "Hegel lớn lên trong một văn hóa Tin Lành, quan liêu và cải cách Khai sáng." },
      { year: "1788-1793", title: "Những năm Tubingen", copy: "Ông học cùng Holderlin và Schelling, hấp thụ thần học, cổ điển và chính trị cách mạng." },
      { year: "1807", title: "Hiện tượng học tinh thần", copy: "Cuốn sách lớn đầu tiên trình bày ý thức như một con đường lịch sử qua xung đột và công nhận." },
      { year: "1818", title: "Bổ nhiệm ở Berlin", copy: "Hegel trở thành nhân vật thống trị trong triết học Đức tại Đại học Berlin." },
      { year: "1831", title: "Cái chết và di sản phân nhánh", copy: "Sau khi ông mất, các Hegelian chia thành những cách đọc cánh hữu, trung dung và cánh tả." }
    ],
    quotes: [
      { text: "Chân lý là cái toàn thể.", work: "Hiện tượng học tinh thần", note: "Một sự vật được hiểu qua phát triển của nó, không phải lát cắt cô lập." },
      { text: "Cái gì hợp lý thì hiện thực.", work: "Triết học pháp quyền", note: "Công thức nén của Hegel về lý tính hiện thân trong thiết chế." },
      { text: "Không có điều vĩ đại nào được hoàn thành mà không có đam mê.", work: "Bài giảng về triết học lịch sử", note: "Lịch sử là lý tính, nhưng không hề khô máu." }
    ],
    sources: [
      { note: "Dùng cho đời sống, chủ nghĩa duy tâm Đức, hệ thống và ảnh hưởng của Hegel." },
      { note: "Dùng cho tác phẩm chính và cách đọc nhập môn." }
    ]
  },
  feuerbach: {
    life: "1804-1872",
    place: "Landshut, Bruckberg",
    history:
      "Feuerbach kéo triết học từ thần học về lại con người có thân thể. Ông lập luận rằng nhiều hình ảnh thiêng liêng là năng lực và nhu cầu của con người được phóng chiếu ra ngoài.",
    legacy:
      "Ông chuẩn bị một bước ngoặt duy vật cho Marx: nếu thần học che giấu con người, triết học phải trả tình yêu, cảm giác và nhu cầu về lại đời sống con người.",
    biography: [
      "Feuerbach được đào tạo trong bóng Hegel nhưng quay chống lại sự trừu tượng của chủ nghĩa duy tâm. Ông muốn bắt đầu từ con người cảm giác, yêu, đói, phụ thuộc và tưởng tượng.",
      "Bản chất của Kitô giáo làm ông nổi tiếng vì đọc tôn giáo như sự phóng chiếu của bản chất người. Thiên Chúa, theo cách đọc ấy, là những phẩm chất của con người được đặt bên ngoài con người.",
      "Ảnh hưởng của Feuerbach vừa mạnh vừa giới hạn. Marx học từ ông cách đảo triết học về đời sống vật chất, nhưng phê phán ông vì còn quá chiêm ngắm và chưa đủ lịch sử-xã hội."
    ],
    ideas: ["phóng chiếu", "nhân bản", "thân thể", "phê phán tôn giáo"],
    primaryWork: "Bản chất của Kitô giáo",
    archiveNote: "Feuerbach đưa các bầu trời trừu tượng trở về nhu cầu con người.",
    timeline: [
      { year: "1804", title: "Sinh ở Landshut", copy: "Feuerbach sinh trong một gia đình có học thức và bước vào triết học qua thần học." },
      { year: "1820s", title: "Dưới ảnh hưởng Hegel", copy: "Ông học trong khí hậu Hegelian nhưng dần rời chủ nghĩa duy tâm." },
      { year: "1841", title: "Bản chất của Kitô giáo", copy: "Cuốn sách biến phê phán tôn giáo thành phân tích về năng lực con người." },
      { year: "1845", title: "Marx viết Luận cương", copy: "Marx vừa kế thừa vừa phê phán Feuerbach vì tính chiêm ngắm." },
      { year: "1872", title: "Qua đời", copy: "Ông để lại một cầu nối quan trọng giữa Hegel và chủ nghĩa duy vật Marx." }
    ],
    quotes: [
      { text: "Con người là cái họ ăn.", work: "Tuyên bố được gán", note: "Một khẩu hiệu nén của duy vật nhân bản." },
      { text: "Thần học là nhân học.", work: "Bản chất của Kitô giáo", note: "Tôn giáo được đọc như chân dung xa lạ hóa của con người." },
      { text: "Chân lý không ở trong tư duy riêng lẻ.", work: "Nguyên lý triết học tương lai", note: "Feuerbach đưa chân lý về cảm giác và quan hệ sống." }
    ],
    sources: [
      { note: "Dùng cho đời sống, phê phán tôn giáo và quan hệ với Hegel/Marx." },
      { note: "Dùng cho tác phẩm chính và khung duy vật nhân bản." }
    ]
  },
  marx: {
    life: "1818-1883",
    place: "Trier, Paris, London",
    history:
      "Marx biến triết học Đức, kinh tế chính trị Anh và chủ nghĩa xã hội Pháp thành phê phán lịch sử của chủ nghĩa tư bản. Ông đọc ý tưởng qua lao động, giai cấp, sản xuất và đấu tranh.",
    legacy:
      "Ông đặt câu hỏi bền nhất của bản đồ: tự do trừu tượng có nghĩa gì nếu đời sống vật chất vẫn tổ chức lệ thuộc, bóc lột và tha hóa?",
    biography: [
      "Marx sinh ở Trier, học luật và triết học, rồi bước vào báo chí cấp tiến. Việc kiểm duyệt và lưu vong đưa ông qua Paris, Brussels và cuối cùng London.",
      "Ở Paris, Marx gặp Engels và phát triển phê phán tha hóa, lao động và xã hội tư sản. Sau 1848, ông dành phần lớn đời mình cho nghiên cứu kinh tế chính trị trong điều kiện nghèo khó và tranh đấu chính trị.",
      "Tư tưởng Marx nối phân tích và thực hành. Ông không chỉ hỏi xã hội là gì, mà hỏi quan hệ nào sản xuất ra nó, ai chịu chi phí, và lực lượng nào có thể thay đổi nó."
    ],
    ideas: ["duy vật lịch sử", "tha hóa", "giai cấp", "tư bản"],
    primaryWork: "Tư bản, Quyển I",
    archiveNote: "Marx làm bản đồ hỏi ai đang sản xuất thế giới và ai bị nó sản xuất lại.",
    timeline: [
      { year: "1818", title: "Sinh ở Trier", copy: "Marx lớn lên trong vùng Rhineland chịu ảnh hưởng Pháp và Phổ." },
      { year: "1844", title: "Gặp Engels", copy: "Tình bạn và hợp tác bắt đầu trong bối cảnh lưu vong và chủ nghĩa xã hội châu Âu." },
      { year: "1848", title: "Tuyên ngôn Cộng sản", copy: "Marx và Engels công bố lời kêu gọi chính trị trong năm cách mạng." },
      { year: "1867", title: "Tư bản, Quyển I", copy: "Phê phán kinh tế chính trị đạt hình thức lớn đầu tiên." },
      { year: "1883", title: "Qua đời ở London", copy: "Di sản của ông tiếp tục định hình lý thuyết xã hội, phong trào chính trị và phê phán văn hóa." }
    ],
    quotes: [
      { text: "Các nhà triết học chỉ giải thích thế giới; vấn đề là cải tạo thế giới.", work: "Luận cương về Feuerbach", note: "Triết học phải chạm vào thực hành." },
      { text: "Đời sống không do ý thức quyết định, mà ý thức do đời sống quyết định.", work: "Hệ tư tưởng Đức", note: "Ý tưởng được đặt trong đời sống vật chất." },
      { text: "Vô sản toàn thế giới, đoàn kết lại!", work: "Tuyên ngôn Cộng sản", note: "Phân tích khép lại như lời gọi hành động tập thể." }
    ],
    sources: [
      { note: "Dùng cho phát triển triết học, duy vật, tha hóa và lý thuyết lịch sử của Marx." },
      { note: "Dùng cho tham chiếu Tuyên ngôn và bối cảnh trích dẫn." }
    ]
  },
  engels: {
    life: "1820-1895",
    place: "Barmen, Manchester, London",
    history:
      "Engels kết hợp quan sát công nghiệp, tổ chức chính trị và tổng hợp triết học. Thời gian ở Manchester cho ông cái nhìn trực tiếp về đời sống nhà máy và chi phí xã hội của tư bản công nghiệp.",
    legacy:
      "Ông mở rộng tầm nhìn hệ thống: tự nhiên, lao động, gia đình, sở hữu và lịch sử vận động cùng nhau. Cách viết của ông làm các ý tưởng Marxist dễ tiếp cận, có tổ chức và khả dụng chính trị hơn.",
    biography: [
      "Engels sinh trong gia đình sản xuất dệt và được đưa vào thương nghiệp, nhưng chính thế giới nhà máy ấy trở thành đối tượng phê phán của ông.",
      "Cuộc gặp Marx năm 1844 mở ra một trong những hợp tác quan trọng nhất của tư tưởng chính trị hiện đại. Engels cung cấp nghiên cứu, tài chính, tổ chức, báo chí và năng lực làm lý thuyết sắc gọn hơn.",
      "Sau khi Marx mất, Engels biên tập các quyển sau của Tư bản và trở thành người diễn giải lớn của chủ nghĩa Marx. Tác phẩm riêng của ông mở khung tới tự nhiên, khoa học, gia đình, sở hữu và nhà nước."
    ],
    ideas: ["duy vật biện chứng", "xã hội công nghiệp", "tự nhiên", "phân tích giai cấp"],
    primaryWork: "Chủ nghĩa xã hội: Không tưởng và khoa học",
    archiveNote: "Engels giữ bản đồ kết nối, thực tế và rộng về lịch sử.",
    timeline: [
      { year: "1820", title: "Sinh ở Barmen", copy: "Engels lớn lên trong gia đình công nghiệp Tin Lành gắn với sản xuất dệt." },
      { year: "1842", title: "Quan sát Manchester", copy: "Nhà máy và nghèo đô thị trở thành cơ sở vật chất cho phê phán tư bản công nghiệp." },
      { year: "1845", title: "Tình cảnh giai cấp lao động", copy: "Engels ghi lại thực tại xã hội của lao động công nghiệp Anh." },
      { year: "1848", title: "Tuyên ngôn với Marx", copy: "Ông đồng tác giả văn bản chính trị nổi tiếng nhất của năm cách mạng." },
      { year: "1895", title: "Qua đời ở London", copy: "Engels để lại cả tác phẩm riêng lẫn vai trò quyết định trong biên tập di sản Marx." }
    ],
    quotes: [
      { text: "Tự do là sự nhận thức được tất yếu.", work: "Chống Duhring", note: "Tự do không phải tưởng tượng; nó cần hiểu điều kiện thật." },
      { text: "Vận động là phương thức tồn tại của vật chất.", work: "Biện chứng của tự nhiên", note: "Tự nhiên được xem như quá trình thay vì vật chất đứng yên." },
      { text: "Nhà nước không bị bãi bỏ. Nó tiêu vong.", work: "Chống Duhring", note: "Công thức nổi tiếng về sự chuyển hóa lịch sử của quyền lực chính trị." }
    ],
    sources: [
      { note: "Dùng cho đời sống, thời kỳ Manchester, hợp tác với Marx và ảnh hưởng về sau." },
      { note: "Dùng cho tác phẩm chính và bối cảnh lý thuyết xã hội chủ nghĩa." }
    ]
  },
  lenin: {
    life: "1870-1924",
    place: "Simbirsk, Zurich, Petrograd",
    history:
      "Lenin hoạt động như nhà lý luận, nhà tổ chức và lãnh đạo cách mạng trong khủng hoảng Đế quốc Nga. Ông đọc triết học qua chiến lược, quyền lực, tổ chức đảng và sự cấp bách của hành động chính trị.",
    legacy:
      "Ông buộc lý thuyết phải trả lời cho can thiệp. Với Lenin, phân tích không trở thành thực hành có tổ chức thì vẫn chưa hoàn tất, nhất là khi nhà nước và quyền lực giai cấp đang đặt cược.",
    biography: [
      "Lenin sinh là Vladimir Ilyich Ulyanov ở Simbirsk. Việc anh trai bị xử tử năm 1887 là một phần nền cá nhân và chính trị của sự cấp tiến hóa, dù lý thuyết về sau của ông được định hình bởi học tập kỷ luật.",
      "Lưu đày, hoạt động bí mật và tranh luận trong chủ nghĩa Marx Nga dạy Lenin nghĩ về hình thức thực tế của chính trị. Làm gì? lập luận rằng tính tự phát không đủ để đánh bại một nhà nước có tổ chức.",
      "Năm 1917 Lenin chuyển từ lý thuyết sang giành quyền lực. Di sản của ông không thể tách khỏi Cách mạng Nga, nhà nước Bolshevik, nội chiến và lịch sử toàn cầu của chủ nghĩa cộng sản."
    ],
    ideas: ["thực tiễn", "tổ chức đảng", "chủ nghĩa đế quốc", "chiến lược cách mạng"],
    primaryWork: "Làm gì?",
    archiveNote: "Lenin là điểm nơi bản đồ trở thành tuyến đường.",
    timeline: [
      { year: "1870", title: "Sinh ở Simbirsk", copy: "Lenin lớn lên trong một gia đình có học ở Đế quốc Nga." },
      { year: "1887", title: "Anh trai bị xử tử", copy: "Việc Alexander Ulyanov bị xử tử đánh dấu chân trời chính trị đầu đời của Lenin." },
      { year: "1895-1900", title: "Bị bắt và lưu đày Siberia", copy: "Hoạt động tổ chức dẫn đến tù đày, nơi Lenin tiếp tục viết và học." },
      { year: "1902", title: "Làm gì?", copy: "Tập sách lập luận cho tổ chức, giáo dục chính trị và báo chí cách mạng." },
      { year: "1917-1924", title: "Cách mạng và cầm quyền", copy: "Lenin trở về Nga, dẫn Bolshevik giành quyền lực và mất sau nội chiến cùng bệnh tật." }
    ],
    quotes: [
      { text: "Không có lý luận cách mạng thì không thể có phong trào cách mạng.", work: "Làm gì?", note: "Lý thuyết quan trọng vì nó tổ chức hành động." },
      { text: "Phân tích cụ thể tình hình cụ thể.", work: "Chủ nghĩa Marx và khởi nghĩa", note: "Chiến lược bắt đầu từ điều kiện chính xác, không phải khẩu hiệu." },
      { text: "Chính trị bắt đầu ở nơi có hàng triệu người.", work: "Toàn tập", note: "Lenin nghĩ chính trị ở quy mô tổ chức quần chúng." }
    ],
    sources: [
      { note: "Dùng cho tiểu sử, hoạt động cách mạng và vai trò chính trị của Lenin." },
      { note: "Dùng cho tác phẩm chính và bối cảnh lý thuyết tổ chức." }
    ]
  },
  nietzsche: {
    life: "1844-1900",
    place: "Roecken, Basel, Turin",
    history:
      "Nietzsche viết chống sự an ủi đạo đức, chắc chắn bầy đàn và siêu hình học thừa kế. Phong cách cách ngôn của ông biến triết học thành áp lực, khiêu khích và tự xét.",
    legacy:
      "Ông hỏi ai được lợi từ một giá trị, nó bảo vệ kiểu đời sống nào, và một người có đủ can đảm để sáng tạo thay vì chỉ vâng lời hay không.",
    biography: [
      "Nietzsche được đào tạo như nhà ngữ văn cổ điển và được bổ nhiệm ở Basel khi còn rất trẻ. Cuốn đầu tiên đã đọc văn hóa Hy Lạp qua nghệ thuật, đau khổ và căng thẳng giữa hình thức Apollonian và lực Dionysian.",
      "Sức khỏe yếu buộc ông rời đời sống đại học, và triết học trưởng thành của ông thành hình trong di chuyển: núi Thụy Sĩ, thành phố Ý, sách ngắn, lời tựa, cách ngôn và các cuộc tấn công ngày càng sắc vào luân lý, tôn giáo, dân tộc chủ nghĩa và sự thoải mái triết học.",
      "Phương pháp của Nietzsche là phả hệ. Thay vì chỉ hỏi một giá trị có đúng không, ông hỏi kiểu đời sống nào cần nó, bản năng nào biểu hiện qua nó và nó phải trả giá gì."
    ],
    ideas: ["phả hệ", "ý chí quyền lực", "sáng tạo giá trị", "phê phán luân lý"],
    primaryWork: "Phả hệ luân lý",
    archiveNote: "Nietzsche làm kho lưu trữ sắc lên bằng nghi ngờ và tự vượt.",
    timeline: [
      { year: "1844", title: "Sinh ở Roecken", copy: "Nietzsche sinh trong một gia đình Tin Lành ở Phổ." },
      { year: "1869", title: "Giáo sư tại Basel", copy: "Ông trở thành giáo sư ngữ văn cổ điển trước khi hoàn tất tiến sĩ theo cách thông thường." },
      { year: "1872", title: "Sự ra đời của bi kịch", copy: "Cuốn sách giới thiệu mối quan tâm sớm về nghệ thuật, đau khổ và văn hóa Hy Lạp." },
      { year: "1883-1885", title: "Zarathustra đã nói như thế", copy: "Nietzsche phát triển hình ảnh tự vượt, hồi quy vĩnh cửu và sáng tạo giá trị." },
      { year: "1889-1900", title: "Sụp đổ và hậu vận", copy: "Sau suy sụp tinh thần ở Turin, ông sống bất lực trong khi danh tiếng tăng sau khi mất." }
    ],
    quotes: [
      { text: "Hãy trở thành chính bạn.", work: "Khoa học vui", note: "Cái tôi là một thành tựu, không phải vật sở hữu." },
      { text: "Thượng đế đã chết.", work: "Khoa học vui", note: "Sự sụp đổ của ý nghĩa thừa kế tạo ra hiểm nguy và trách nhiệm." },
      { text: "Điều không giết được ta làm ta mạnh hơn.", work: "Hoàng hôn của các thần tượng", note: "Một công thức cứng rắn để biến đau khổ thành sức mạnh." }
    ],
    sources: [
      { note: "Dùng cho đời sống, phê phán luân lý, phả hệ và các chủ đề diễn giải." },
      { note: "Dùng cho tác phẩm chính và bối cảnh phả hệ đạo đức." }
    ]
  },
  beauvoir: {
    life: "1908-1986",
    place: "Paris",
    history:
      "Beauvoir đưa tự do hiện sinh vào tiếp xúc với giới, lệ thuộc, tuổi già, tình yêu và ràng buộc xã hội. Bà cho thấy trở thành một cái tôi luôn xảy ra trong thế giới đã gán vai.",
    legacy:
      "Triết học của bà từ chối ý niệm tự do mỏng. Lựa chọn quan trọng, nhưng nó được sống qua thân thể, thiết chế, huyền thoại, lao động và áp lực lâu dài của việc bị biến thành Kẻ Khác.",
    biography: [
      "Simone de Beauvoir lớn lên trong một gia đình Công giáo tư sản ở Paris và từ chối cả đức tin tôn giáo lẫn con đường hôn nhân được mong đợi.",
      "Trong và sau Thế chiến II, trước tác của Beauvoir đi qua tiểu thuyết, đạo đức, hồi ký, du ký, báo chí chính trị và phân tích nữ quyền. Đạo đức học của sự mơ hồ trao cho tự do hiện sinh một vốn từ đạo đức.",
      "Sức mạnh của Beauvoir là tính cụ thể. Bà hỏi tự do được sống thế nào khi thân thể già đi, lao động bất bình đẳng, tình yêu thành lệ thuộc và huyền thoại tự nhiên hóa thống trị."
    ],
    ideas: ["nữ quyền hiện sinh", "mơ hồ", "tính khác", "tự do có hoàn cảnh"],
    primaryWork: "Giới tính thứ hai",
    archiveNote: "Beauvoir trao cho tự do một thân thể, một lịch sử và một chi phí xã hội.",
    timeline: [
      { year: "1908", title: "Sinh ở Paris", copy: "Beauvoir lớn lên trong gia đình được định hình bởi quy ước Công giáo và an ninh tư sản suy giảm." },
      { year: "1929", title: "Agrégation và Sartre", copy: "Bà đỗ kỳ thi triết học và hình thành quan hệ trí tuệ lâu dài với Sartre." },
      { year: "1943-1947", title: "Đạo đức hiện sinh phát triển", copy: "Tiểu thuyết và tiểu luận khảo sát tự do, bạo lực, mơ hồ và trách nhiệm dưới áp lực lịch sử." },
      { year: "1949", title: "Giới tính thứ hai", copy: "Cuốn sách biến đổi triết học nữ quyền bằng cách phân tích phụ nữ như được lịch sử tạo nên." },
      { year: "1986", title: "Qua đời ở Paris", copy: "Beauvoir để lại một khối tác phẩm định hình lại đạo đức, nữ quyền, tự truyện và hiện sinh." }
    ],
    quotes: [
      { text: "Người ta không sinh ra là phụ nữ, mà trở thành phụ nữ.", work: "Giới tính thứ hai", note: "Giới được phân tích như hình thành lịch sử, không phải số phận." },
      { text: "Muốn mình tự do cũng là muốn người khác tự do.", work: "Đạo đức học của sự mơ hồ", note: "Tự do chỉ thành đạo đức khi từ chối thống trị." },
      { text: "Tự do là nguồn từ đó mọi ý nghĩa nảy sinh.", work: "Đạo đức học của sự mơ hồ", note: "Ý nghĩa xuất hiện qua dự phóng con người có hoàn cảnh." }
    ],
    sources: [
      { note: "Dùng cho đời sống, đạo đức hiện sinh, nữ quyền và các tác phẩm lớn của Beauvoir." },
      { note: "Dùng cho bối cảnh và ý nghĩa của tác phẩm nữ quyền trung tâm." }
    ]
  },
  sartre: {
    life: "1905-1980",
    place: "Paris",
    history:
      "Sartre biến chủ nghĩa hiện sinh thành ngôn ngữ công khai sau Thế chiến II. Triết học của ông xoay quanh lựa chọn, tự lừa dối, trách nhiệm và gánh nặng tạo nghĩa khi không có bản chất cố định.",
    legacy:
      "Ông đưa kho lưu trữ trở lại cá nhân mà không cho cá nhân trốn trách nhiệm. Ngay cả từ chối cũng là lựa chọn, và căn tính là dự án được làm trong không gian mở.",
    biography: [
      "Jean-Paul Sartre được giáo dục trong các thiết chế tinh hoa của Pháp và trở thành giáo viên, tiểu thuyết gia, kịch tác gia, nhà phê bình và trí thức công chúng.",
      "Thế chiến II đổi nghĩa công khai của triết học ông. Sau quân ngũ, tù binh, chiếm đóng và các mạng lưới kháng chiến, hiện sinh của Sartre trở thành ngôn ngữ cho trách nhiệm trong thế giới không có kịch bản đạo đức bảo đảm.",
      "Hữu thể và hư vô phân tích tự lừa dối, cái nhìn của Người Khác, thân thể và tự do triệt để. Về sau, Sartre cố nối tự do hiện sinh với lịch sử Marxist và đấu tranh tập thể."
    ],
    ideas: ["hiện hữu", "tự lừa dối", "trách nhiệm", "tự do"],
    primaryWork: "Chủ nghĩa hiện sinh là một chủ nghĩa nhân bản",
    archiveNote: "Sartre khép tuyến đường bằng câu hỏi bạn đang làm gì với tự do của mình.",
    timeline: [
      { year: "1905", title: "Sinh ở Paris", copy: "Sartre bước vào một thế giới văn chương và học thuật mà sau này ông biến thành triết học công khai." },
      { year: "1929", title: "Gặp Beauvoir", copy: "Mối quan hệ trở thành một trong những liên hệ trí tuệ ảnh hưởng nhất thế kỷ hai mươi." },
      { year: "1938-1943", title: "Buồn nôn và Hữu thể và hư vô", copy: "Sartre đi từ tiểu thuyết hiện sinh đến một tài khoản triết học lớn về tự do và tự lừa dối." },
      { year: "1945-1946", title: "Hiện sinh ra công chúng", copy: "Ông đồng sáng lập Les Temps Modernes và thuyết trình bài sau này in thành Chủ nghĩa hiện sinh là một chủ nghĩa nhân bản." },
      { year: "1964-1980", title: "Từ chối và chính trị cuối đời", copy: "Sartre từ chối Nobel và tiếp tục dấn thân chính trị cho đến khi mất ở Paris." }
    ],
    quotes: [
      { text: "Hiện hữu có trước bản chất.", work: "Chủ nghĩa hiện sinh là một chủ nghĩa nhân bản", note: "Con người không sinh ra với kịch bản cố định." },
      { text: "Con người không là gì khác ngoài điều nó tự làm nên.", work: "Chủ nghĩa hiện sinh là một chủ nghĩa nhân bản", note: "Tự do không thể tách khỏi trách nhiệm." },
      { text: "Địa ngục là người khác.", work: "Kín cửa", note: "Cái nhìn của người khác có thể giam căn tính trong phán xét." }
    ],
    sources: [
      { note: "Dùng cho triết học Sartre, chủ đề hiện sinh và phát triển trí tuệ." },
      { note: "Dùng cho tác phẩm chính và bối cảnh trích dẫn hiện sinh." }
    ]
  }
};

const archiveThreadTextVi: ArchiveThread[] = [
  {
    title: "Trật tự và nhân cách",
    ids: ["plato", "aristotle", "confucius"],
    copy: "Những nhà tư tưởng này hỏi một đời sống được hình thành đúng bằng cách nào: qua lý tưởng, thói quen, giáo dục, lễ nghi và niềm tin công."
  },
  {
    title: "Vận động và đời sống vật chất",
    ids: ["hegel", "feuerbach", "marx", "engels", "lenin"],
    copy: "Đường này đi theo mâu thuẫn xuống thân thể, lao động, lịch sử, giai cấp và hành động có tổ chức."
  },
  {
    title: "Tự do dưới áp lực",
    ids: ["nietzsche", "beauvoir", "sartre", "laozi"],
    copy: "Ở đây tự do được thử bởi giá trị thừa kế, thế giới giới tính hóa, trách nhiệm và kỷ luật tiết chế."
  }
];

function localizeDetail(id: PhilosopherId, language: Language): ArchiveDetail {
  const detail = archiveDetails[id];
  if (language === "en") return detail;

  const text = archiveDetailTextVi[id];

  return {
    ...detail,
    ...text,
    timeline: text.timeline.map((event: ArchiveTimelineEvent) => ({ ...event })),
    quotes: text.quotes.map((quote: ArchiveQuote) => ({ ...quote })),
    sources: detail.sources.map((source, index) => ({
      ...source,
      note: text.sources[index]?.note ?? source.note
    }))
  };
}

export function getLocalizedArchiveDetails(language: Language): Record<PhilosopherId, ArchiveDetail> {
  return Object.fromEntries(
    Object.keys(archiveDetails).map((id) => [id, localizeDetail(id as PhilosopherId, language)])
  ) as Record<PhilosopherId, ArchiveDetail>;
}

export function getLocalizedArchiveThreads(language: Language): ArchiveThread[] {
  return language === "vi" ? archiveThreadTextVi : archiveThreads;
}
