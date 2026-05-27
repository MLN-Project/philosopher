import type { Language } from "@/lib/i18n";
import { QUESTIONS } from "@/lib/quiz-data";
import type { AxisId, QuizQuestion } from "@/lib/types";

type QuestionText = {
  prompt: string;
  context: string;
  answers: Record<string, string>;
};

export const axisLabels = {
  en: {
    materialism: "Material life",
    dialectics: "Contradiction",
    individual_society: "Self and society",
    authority_power: "Power",
    ethics_action: "Action",
    freedom_alienation: "Freedom"
  },
  vi: {
    materialism: "Đời sống vật chất",
    dialectics: "Mâu thuẫn",
    individual_society: "Cá nhân và xã hội",
    authority_power: "Quyền lực",
    ethics_action: "Hành động",
    freedom_alienation: "Tự do"
  }
} as const satisfies Record<Language, Record<AxisId, string>>;

const questionTextVi: Record<string, QuestionText> = {
  q01: {
    prompt: "Điều gì định hình xã hội sâu hơn: ý tưởng hay điều kiện vật chất?",
    context: "Căng thẳng đầu tiên: ý thức dẫn dắt đời sống, hay đời sống quy định ý thức.",
    answers: {
      a: "Ý tưởng quan trọng, nhưng chúng lớn lên từ lao động, sở hữu, giai cấp và đời sống vật chất hằng ngày.",
      b: "Ý tưởng mở ra trong lịch sử; xã hội là vở kịch hữu hình của lý tính tự nhận biết mình.",
      c: "Bắt đầu từ thân thể, giác quan, đói khát, tình cảm và nhu cầu mà con người phóng chiếu thành lý tưởng.",
      d: "Hòa hợp xã hội phụ thuộc vào cách cư xử được tu dưỡng, lễ nghi chung và giáo dục đạo đức qua nhiều thế hệ."
    }
  },
  q02: {
    prompt: "Khi niềm tin của bạn mâu thuẫn với bằng chứng thực tiễn, điều gì nên xảy ra?",
    context: "Triết học Marxist-Leninist xem thực tiễn là phép thử của chân lý.",
    answers: {
      a: "Sửa lại lý thuyết. Thực tiễn là nơi một ý tưởng chứng minh nó có chạm được thế giới hay không.",
      b: "Hỏi xem bằng chứng có chỉ là biểu hiện của một cấu trúc lý tính sâu hơn không.",
      c: "Kiểm tra trường hợp cụ thể thật kỹ; sự khôn ngoan nằm trong chi tiết, không phải khẩu hiệu.",
      d: "Nhìn xem niềm tin ấy có chỉ là trang phục của sợ hãi, oán giận hay đạo đức vay mượn không."
    }
  },
  q03: {
    prompt: "Ý thức độc lập, hay bắt rễ trong đời sống vật chất?",
    context: "Câu hỏi này vang lại vấn đề cơ bản của triết học trong giáo trình.",
    answers: {
      a: "Ý thức là thật, nhưng nó bắt rễ trong đời sống vật chất và xã hội trước khi trở thành lý thuyết.",
      b: "Ý thức chỉ về phía bên kia thế giới thấy được: các hình thức, lý tưởng và trật tự lý tính.",
      c: "Nó có thân thể: con người cảm nhận, yêu, sợ và tưởng tượng trước khi trừu tượng hóa.",
      d: "Đừng kiểm soát nó quá mức; nhận thức trong hơn khi cái tôi thôi ép thế giới vào khái niệm."
    }
  },
  q04: {
    prompt: "Cách tốt nhất để hiểu tính cách của một người là gì?",
    context: "Câu này nối con người trừu tượng với quan hệ xã hội và thực hành hằng ngày.",
    answers: {
      a: "Nhìn vào lao động, lệ thuộc, vị trí xã hội và áp lực định hình lựa chọn của họ.",
      b: "Nhìn vào thói quen: hành động lặp lại cho thấy họ đang trở thành kiểu người nào.",
      c: "Nhìn xem họ có trốn tự do bằng cách giả vờ rằng mình không có lựa chọn hay không.",
      d: "Nhìn xem họ phục tùng giá trị thừa kế hay đủ mạnh để tạo giá trị của riêng mình."
    }
  },
  q05: {
    prompt: "Triết học nên làm gì khi con người đau khổ?",
    context: "Trang này xem triết học là suy tư gắn với đời sống xã hội, không phải kiến thức trang trí.",
    answers: {
      a: "Tìm gốc rễ xã hội của đau khổ, rồi giúp con người tổ chức điều kiện theo cách khác.",
      b: "Giáo dục ham muốn để linh hồn rời ảo tưởng và hướng về Thiện.",
      c: "Giúp con người sở hữu tự do của mình mà không phủ nhận hoàn cảnh đang ràng buộc họ.",
      d: "Dạy sự chừng mực, tình bạn và thói quen thực hành để đời sống dễ sống hơn."
    }
  },
  q06: {
    prompt: "Mâu thuẫn là vấn đề cần loại bỏ hay nguồn của phát triển?",
    context: "Một cây cầu trực tiếp vào biện chứng đối lập với siêu hình học.",
    answers: {
      a: "Mâu thuẫn không phải tiếng ồn; đó là áp lực làm lịch sử và tư tưởng vận động.",
      b: "Mâu thuẫn trong xã hội cho thấy quan hệ vật chất đã trở nên bất ổn.",
      c: "Tránh cưỡng ép xung đột; biến đổi sâu thường xảy ra khi biết nhường đúng lúc.",
      d: "Mâu thuẫn phơi bày giá trị cũ như mặt nạ, và từ đó giá trị mạnh hơn có thể ra đời."
    }
  },
  q07: {
    prompt: "Thay đổi thật sự thường xảy ra như thế nào?",
    context: "Câu này vẽ bản đồ phát triển dần, đứt gãy, cải cách và cách mạng.",
    answers: {
      a: "Những căng thẳng nhỏ tích tụ cho đến khi một bước nhảy chất trở nên không thể tránh.",
      b: "Thay đổi cần tổ chức; giận dữ không có chiến lược chỉ thành chuyển động lãng phí.",
      c: "Nhân cách đổi thay bằng thực hành lặp lại, không phải tuyên bố kịch tính.",
      d: "Thay đổi bắt đầu khi một người từ chối vai trò người khác bảo họ phải diễn."
    }
  },
  q08: {
    prompt: "Khi hai quan điểm va chạm, bạn thường làm gì trước?",
    context: "Một phiên bản thực tế của tư duy biện chứng.",
    answers: {
      a: "Hỏi lực lượng lịch sử nào khiến cả hai quan điểm trở nên cần thiết, rồi tìm giai đoạn kế tiếp.",
      b: "Hỏi mỗi quan điểm bảo vệ lợi ích của ai và điều kiện vật chất nào trao quyền cho nó.",
      c: "Hỏi quan điểm nào rèn con người hướng tới cách cư xử nhân đạo và niềm tin xã hội.",
      d: "Hỏi liệu cả hai có đang bám quá chặt không; đôi khi câu trả lời là nới tay."
    }
  },
  q09: {
    prompt: "Câu nào khiến bạn thấy đúng nhất về lịch sử?",
    context: "Câu này tách các cách đọc lịch sử theo chu kỳ, duy tâm, duy vật và hiện sinh.",
    answers: {
      a: "Lịch sử vận động bởi sản xuất, xung đột, quan hệ giai cấp và đấu tranh cải biến chúng.",
      b: "Lịch sử là lý tính dần học biết mình thông qua mâu thuẫn.",
      c: "Lịch sử là trường nơi con người bị ném vào vai trò nhưng vẫn phải lựa chọn.",
      d: "Lịch sử suy thoái khi lễ nghi, trách nhiệm và giáo dục mất trung tâm đạo đức."
    }
  },
  q10: {
    prompt: "Bạn tin kiểu giải thích nào nhất?",
    context: "Câu này thử xem bạn thích phạm trù tĩnh hay quan hệ đang vận động.",
    answers: {
      a: "Một lời giải cho thấy sự vật đang vận động: nó từ đâu đến, mâu thuẫn nào định hình nó, nó có thể đi đâu.",
      b: "Một lời giải nhận ra hình thức, mục đích và chức năng thực hành của sự vật.",
      c: "Một lời giải lột mặt ý chí quyền lực ẩn sau các lý do chính thức.",
      d: "Một lời giải đủ đơn giản để sống theo mà không biến thế giới thành nhà tù khái niệm."
    }
  },
  q11: {
    prompt: "Một người có thể hoàn toàn tự do bên ngoài quan hệ xã hội không?",
    context: "Một câu hỏi cốt lõi từ lý luận triết học về con người.",
    answers: {
      a: "Không. Cá nhân được hình thành qua quan hệ xã hội, lao động, ngôn ngữ và lịch sử.",
      b: "Tự do xuất hiện khi ta nhận trách nhiệm cho điều mình chọn, ngay cả dưới áp lực.",
      c: "Một người trở nên nhân ái qua gia đình, lễ nghi, học tập và nghĩa vụ lẫn nhau.",
      d: "Con người cao nhất đôi khi phải đứng ngoài đám đông để tạo giá trị mới."
    }
  },
  q12: {
    prompt: "Điều gì quan trọng hơn trong lịch sử: lãnh tụ lớn hay quần chúng?",
    context: "Chủ nghĩa duy vật lịch sử hỏi con người cùng nhau làm nên lịch sử như thế nào.",
    answers: {
      a: "Quần chúng làm nên lịch sử, nhưng tổ chức và lý luận có thể tập trung sức mạnh ấy.",
      b: "Giai cấp xã hội và mâu thuẫn vật chất quan trọng hơn tiểu sử anh hùng.",
      c: "Cá nhân xuất chúng có thể phá vỡ luân lý cũ và cho thấy nhân loại có thể trở thành gì.",
      d: "Lãnh đạo khôn ngoan quan trọng khi nó nêu gương đức hạnh và giữ niềm tin xã hội."
    }
  },
  q13: {
    prompt: "Gia đình hoặc văn hóa nên định hình căn tính đến mức nào?",
    context: "Một phiên bản gần gũi của ý thức xã hội và văn hóa.",
    answers: {
      a: "Chúng định hình ta sâu sắc, và khôn ngoan là tôn trọng những quan hệ đã làm nên ta.",
      b: "Chúng định hình ta, nhưng cũng có thể tự nhiên hóa áp bức nên cần được phê phán.",
      c: "Chúng là nguyên liệu thô. Một người vẫn phải chọn mình sẽ trở thành gì.",
      d: "Văn hóa thường che lợi ích giai cấp, nên tôi hỏi ai được lợi khi gọi nó là tự nhiên."
    }
  },
  q14: {
    prompt: "Điều gì tạo ra sự tha hóa trong đời sống hiện đại?",
    context: "Tha hóa là trung tâm ở Marx và hữu ích cho một kết quả tính cách hiện đại.",
    answers: {
      a: "Lao động và quan hệ xã hội trở nên xa lạ khi con người mất quyền kiểm soát điều họ tạo ra và lý do tạo ra nó.",
      b: "Tha hóa xuất hiện khi con người diễn những vai trò phủ nhận tự do và hoàn cảnh của họ.",
      c: "Tha hóa đến từ việc chạy theo ham muốn nhân tạo và đánh mất cách đơn giản của sự vật.",
      d: "Tha hóa lớn lên khi giáo dục thôi hình thành nhân cách và chỉ còn là địa vị."
    }
  },
  q15: {
    prompt: "Công nghệ chủ yếu nên phục vụ hiệu quả, giải phóng hay kiểm soát?",
    context: "Một cầu nối hiện đại từ điều kiện vật chất đến quyền lực chính trị.",
    answers: {
      a: "Giải phóng: nó nên giảm thống trị và trao cho con người nhiều quyền kiểm soát đời sống chung hơn.",
      b: "Tổ chức: công nghệ hữu ích khi nó củng cố chiến lược và kỷ luật tập thể.",
      c: "Chừng mực: công cụ nên nâng đỡ đời sống nở hoa, không định nghĩa mục đích đời sống.",
      d: "Tiết chế: cưỡng ép quá nhiều biến công cụ thành cách khác để bản ngã ra lệnh cho thế giới."
    }
  },
  q16: {
    prompt: "Nhà nước trung lập, hay gắn với lợi ích xã hội sâu hơn?",
    context: "Đây là một trong những câu hỏi duy vật lịch sử rõ nhất.",
    answers: {
      a: "Nó không trung lập; nó biểu hiện và quản lý các xung đột sâu trong quan hệ xã hội và giai cấp.",
      b: "Nó nên được dẫn dắt bởi minh triết và giáo dục, nếu không ham muốn sẽ cai trị đời sống công.",
      c: "Nó nguy hiểm khi con người giả vờ phục tùng cũng là đạo đức.",
      d: "Chính quyền tốt nhất không lấn quá xa; nó tạo điều kiện để con người sống giản dị."
    }
  },
  q17: {
    prompt: "Khi một quyền uy nói điều gì là đúng, bản năng đầu tiên của bạn là gì?",
    context: "Một câu hỏi trắc nghiệm tính cách cổ điển được dịch sang triết học.",
    answers: {
      a: "Hỏi lợi ích xã hội, thiết chế hay vị trí giai cấp nào khiến chân lý ấy trở nên tiện lợi.",
      b: "Thử xem nó có chịu được khảo sát lý tính và khớp với cái toàn thể lớn hơn không.",
      c: "Hỏi liệu quyền uy ấy đã tu dưỡng đức hạnh và đáng được tin hay chưa.",
      d: "Nghi ngờ nó. Quyền uy thường mặc cho sợ hãi và yếu đuối một thứ ngôn ngữ cao quý."
    }
  },
  q18: {
    prompt: "Con người nên làm gì khi luật lệ xã hội có vẻ sai?",
    context: "Câu này tách cải cách, cách mạng, rút lui và tự sáng tạo.",
    answers: {
      a: "Nghiên cứu cấu trúc phía sau luật lệ, rồi tổ chức cùng người khác để thay đổi nó.",
      b: "Hỏi liệu luật lệ ấy có làm hại sự nở hoa của con người trong đời sống cụ thể không.",
      c: "Bất tuân trong lòng trước: từ chối để đám đông đặt tên giá trị của mình.",
      d: "Sửa hành vi bằng giáo dục và nêu gương trước khi đốt cả ngôi nhà."
    }
  },
  q19: {
    prompt: "Đạo đức được khám phá, được tạo ra hay được thừa hưởng?",
    context: "Câu này giúp phân biệt hồ sơ cổ điển, Nietzsche, xã hội và Khổng giáo.",
    answers: {
      a: "Nó được lịch sử định hình; ngôn ngữ đạo đức đổi thay khi đời sống xã hội đổi thay.",
      b: "Nó được khám phá bằng cách hướng linh hồn về chân lý và Thiện.",
      c: "Nó được tạo bởi những ai đủ mạnh để nhận trách nhiệm về giá trị.",
      d: "Nó được tu dưỡng qua thực hành thừa hưởng làm con người trở nên nhân ái."
    }
  },
  q20: {
    prompt: "Kiểu quyền lực nguy hiểm nhất là gì?",
    context: "Quyền lực có thể hiện ra như thống trị giai cấp, phổ quát giả, tập tục hay tự lừa dối.",
    answers: {
      a: "Quyền lực ẩn trong tất yếu kinh tế và khiến thống trị trông như tự nhiên.",
      b: "Quyền lực tự gọi mình là lẽ thường để không ai nhận ra nó là ý thức hệ.",
      c: "Quyền lực biến một người thành Kẻ Khác rồi trách họ vì vai trò ấy.",
      d: "Quyền lực cai quản quá mức đến nỗi con người quên cách sống với cân bằng tự nhiên."
    }
  },
  q21: {
    prompt: "Điều gì làm một hành động thật sự tốt?",
    context: "Đạo đức neo bài trắc nghiệm để nó không chỉ thành ý thức hệ.",
    answers: {
      a: "Nó góp phần giải phóng con người bằng cách thay đổi điều kiện, không chỉ giữ ý định đẹp.",
      b: "Nó biểu hiện đức hạnh, chừng mực và khôn ngoan thực hành trong tình huống cụ thể.",
      c: "Nó làm người và thành bang hòa với một trật tự chân lý cao hơn.",
      d: "Nó được nhận lấy không viện cớ; người hành động không nấp sau vai trò, số phận hay đám đông."
    }
  },
  q22: {
    prompt: "Ý định có quan trọng hơn kết quả không?",
    context: "Câu này thử đạo đức đức hạnh, tính thực tế cách mạng và trách nhiệm hiện sinh.",
    answers: {
      a: "Kết quả quan trọng vì hành động phải thay đổi điều kiện thật, không chỉ giữ lương tâm sạch.",
      b: "Nhân cách quan trọng, nhưng nhân cách được thể hiện qua hành động khôn ngoan và hậu quả theo thời gian.",
      c: "Không cái nào miễn trách nhiệm cho bạn. Bạn chịu trách nhiệm về ý nghĩa mà hành động trao cho đời mình.",
      d: "Câu hỏi đã quá cưỡng ép; hãy hành động với ít bám víu và ít tuyên bố thanh sạch hơn."
    }
  },
  q23: {
    prompt: "Khi đối mặt bất định, bạn hành động nhanh hay suy ngẫm lâu hơn?",
    context: "Cân bằng giữa thực hành, lý thuyết và khí chất.",
    answers: {
      a: "Hành động sau khi phân tích đủ để biết mâu thuẫn và lực lượng liên quan.",
      b: "Suy ngẫm cho đến khi hành động khớp hoàn cảnh cụ thể với sự chừng mực.",
      c: "Hành động vì từ chối lựa chọn cũng là một lựa chọn.",
      d: "Chờ hình dạng của sự vật; cưỡng ép quá sớm thường tạo ra vấn đề mà nó sợ."
    }
  },
  q24: {
    prompt: "Tính hữu dụng thực tế có nên hơn sự thuần khiết triết học không?",
    context: "Một phép thử về thực hành và trừu tượng.",
    answers: {
      a: "Có, nếu hữu dụng nghĩa là thúc đẩy giải phóng thật chứ không đánh bóng công thức đẹp.",
      b: "Hữu dụng cần đức hạnh; thành công thực dụng không có nhân cách sẽ làm hỏng mục tiêu.",
      c: "Sự thuần khiết thường là một thần tượng khác. Hãy hỏi ý tưởng ấy làm kiểu đời sống nào trở nên có thể.",
      d: "Ý tưởng thuần khiết quan trọng vì không có chân lý, hữu dụng sẽ thành thao túng."
    }
  },
  q25: {
    prompt: "Kỷ luật chủ yếu là tự do hay kiềm chế?",
    context: "Hữu ích để phân biệt Lenin, Aristotle, Khổng Tử và Lão Tử.",
    answers: {
      a: "Là tự do, khi nó biến cảm xúc phân tán thành quyền lực có tổ chức.",
      b: "Là tự do, khi thói quen làm sự xuất sắc trở nên tự nhiên thay vì tình cờ.",
      c: "Là kiềm chế, nếu nó đến từ nỗi sợ chọn chính mình.",
      d: "Không hẳn cái nào. Kỷ luật tốt nhất nhẹ đến mức như đang đi theo dòng chảy."
    }
  },
  q26: {
    prompt: "Con người có một bản tính cố định không?",
    context: "Cầu nối từ bản chất người đến sự trở thành lịch sử và hiện sinh.",
    answers: {
      a: "Bản tính người biến đổi qua lao động, quan hệ xã hội và điều kiện lịch sử.",
      b: "Con người có tiềm năng trở thành thật qua đức hạnh, thói quen và mục đích.",
      c: "Không có bản chất cố định đi trước; ta trở thành qua lựa chọn trong hoàn cảnh.",
      d: "Ý tưởng về bản tính cố định thường phục vụ những ai muốn con người tiếp tục phục tùng."
    }
  },
  q27: {
    prompt: "Cái chết nên đóng vai trò gì trong cách ta sống?",
    context: "Một câu hỏi con người khiến kết quả cảm thấy cá nhân hơn.",
    answers: {
      a: "Nó nên làm trách nhiệm sắc hơn: đời này là nơi tự do phải trở thành thật.",
      b: "Nó nên nhắc ta xây một thế giới nơi con người có thể sống như người trước khi chết.",
      c: "Nó nên dạy sự chừng mực; đời hữu hạn cần thói quen tốt và tình bạn tốt.",
      d: "Nó nên nới lỏng sợ hãi, vì bám quá chặt khiến ta rời khỏi đạo của sự vật."
    }
  },
  q28: {
    prompt: "Sống thật có đáng để chịu xung đột xã hội không?",
    context: "Một phiên bản gần tính cách của tự do cá nhân và thuộc về xã hội.",
    answers: {
      a: "Có, nếu xung đột phơi bày thống trị mà sự đồng thuận lịch sự che giấu.",
      b: "Có, vì tự lừa dối còn tệ hơn khó chịu.",
      c: "Có, nếu điều đó nghĩa là phá luân lý bầy đàn và tạo giá trị mạnh hơn.",
      d: "Chỉ với sự cẩn trọng. Người nhân đạo sửa sai mà không phá hủy mọi liên kết."
    }
  },
  q29: {
    prompt: "Giải phóng có nghĩa gì với bạn?",
    context: "Khái niệm cuối cùng sát giáo trình trước phần tổng hợp.",
    answers: {
      a: "Cùng nhau biến đổi những điều kiện vật chất khiến con người lệ thuộc và tha hóa.",
      b: "Trở thành tác giả đời mình mà không phủ nhận hoàn cảnh mình thừa hưởng.",
      c: "Giải phóng ham muốn khỏi thần tượng giả và trả năng lực con người về cho con người.",
      d: "Không còn ép đời sống vào tham vọng lo âu; sống đủ giản dị để thở."
    }
  },
  q30: {
    prompt: "Minh triết chủ yếu là sáng rõ, nhân cách, nổi loạn hay buông?",
    context: "Câu cuối cố ý cho nhiều truyền thống cùng lên tiếng.",
    answers: {
      a: "Sáng rõ về những lực lượng thật đang định hình đời sống, đi cùng hành động có thể thay đổi chúng.",
      b: "Nhân cách: một đời được rèn về xuất sắc, niềm tin và phán đoán thực hành.",
      c: "Nổi loạn chống lại những ý nghĩa thừa kế làm nhỏ đi điều một người có thể trở thành.",
      d: "Buông, không phải thất bại, mà là giải thoát khỏi việc ép thế giới phục tùng bản ngã."
    }
  }
};

export function getLocalizedQuestions(language: Language): QuizQuestion[] {
  if (language === "en") return QUESTIONS;

  return QUESTIONS.map((question) => {
    const text = questionTextVi[question.id];
    return {
      ...question,
      prompt: text.prompt,
      context: text.context,
      answers: question.answers.map((answer) => ({
        ...answer,
        text: text.answers[answer.id] ?? answer.text
      }))
    };
  });
}
