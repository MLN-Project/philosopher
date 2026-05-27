import type { Language } from "@/lib/i18n";

export const landingChapters = {
  en: [
    {
      title: "What is philosophy?",
      answer:
        "A disciplined way of asking what is real, what can be known, and what kind of life deserves your loyalty.",
      note: "The quiz begins with the habit behind every answer: how you decide what deserves to be called true.",
      signal: "Truth, value, method",
      mark: "I"
    },
    {
      title: "Matter and consciousness",
      answer:
        "The old divide between thought and world: whether ideas command history, or material life gives ideas their shape.",
      note: "This is where worldview becomes a map: spirit, nature, labor, memory, and the conditions that shape thought.",
      signal: "Worldview, labor, perception",
      mark: "II"
    },
    {
      title: "Contradiction and development",
      answer:
        "A world in motion cannot be understood by still categories. Tension is often the pressure by which things become otherwise.",
      note: "Here the test listens for whether you see conflict as error, tragedy, discipline, or the engine of change.",
      signal: "Movement, negation, change",
      mark: "III"
    },
    {
      title: "Society, class, and the state",
      answer:
        "No self floats alone. Work, power, institutions, and shared history write themselves into private life.",
      note: "Your answers start to reveal how you read authority: as order, alienation, duty, violence, or collective form.",
      signal: "Power, history, collective life",
      mark: "IV"
    },
    {
      title: "Human beings and liberation",
      answer:
        "The final question is personal: what kind of freedom do your answers keep trying to defend?",
      note: "By the end, the result is less a label than a portrait of the freedom you keep returning to.",
      signal: "Freedom, responsibility, becoming",
      mark: "V"
    }
  ],
  vi: [
    {
      title: "Triết học là gì?",
      answer:
        "Một cách hỏi có kỷ luật về cái gì là thật, điều gì có thể biết, và kiểu đời sống nào đáng để bạn trung thành.",
      note: "Bài trắc nghiệm bắt đầu từ thói quen nằm sau mọi câu trả lời: bạn quyết định điều gì xứng đáng được gọi là đúng.",
      signal: "Chân lý, giá trị, phương pháp",
      mark: "I"
    },
    {
      title: "Vật chất và ý thức",
      answer:
        "Lằn ranh cũ giữa tư tưởng và thế giới: ý niệm dẫn dắt lịch sử, hay đời sống vật chất định hình ý niệm.",
      note: "Ở đây thế giới quan trở thành bản đồ: tinh thần, tự nhiên, lao động, ký ức và những điều kiện định hình tư duy.",
      signal: "Thế giới quan, lao động, tri giác",
      mark: "II"
    },
    {
      title: "Mâu thuẫn và phát triển",
      answer:
        "Một thế giới vận động không thể được hiểu bằng các phạm trù đứng yên. Căng thẳng thường là áp lực khiến sự vật trở thành khác đi.",
      note: "Phần này lắng nghe xem bạn nhìn xung đột như sai lầm, bi kịch, kỷ luật hay động cơ của thay đổi.",
      signal: "Vận động, phủ định, biến đổi",
      mark: "III"
    },
    {
      title: "Xã hội, giai cấp và nhà nước",
      answer:
        "Không có cái tôi nào trôi nổi một mình. Lao động, quyền lực, thiết chế và lịch sử chung đều khắc vào đời sống riêng.",
      note: "Câu trả lời bắt đầu cho thấy bạn đọc quyền uy như trật tự, tha hóa, bổn phận, bạo lực hay hình thức tập thể.",
      signal: "Quyền lực, lịch sử, đời sống chung",
      mark: "IV"
    },
    {
      title: "Con người và giải phóng",
      answer:
        "Câu hỏi cuối cùng trở nên cá nhân: kiểu tự do nào mà câu trả lời của bạn luôn cố bảo vệ?",
      note: "Đến cuối cùng, kết quả không chỉ là nhãn tên mà là chân dung của thứ tự do bạn cứ quay về.",
      signal: "Tự do, trách nhiệm, trở thành",
      mark: "V"
    }
  ]
} as const;

export const appCopy = {
  en: {
    nav: {
      brand: "Philosopher Atlas",
      philosophers: "Philosophers",
      quiz: "Quiz",
      credits: "Credits",
      sources: "Sources"
    },
    landing: {
      navAria: "Main navigation",
      heroScribe: "A cinematic personality test through ancient questions and material history.",
      heroTitle: "Which philosopher is hidden in your way of seeing the world?",
      heroText:
        "Walk through a parchment map of ideas, contradiction, society, power, and freedom. At the end, your answers are scored against twelve thinkers from Plato to Marx, Lenin, Beauvoir, Laozi, and Sartre.",
      revealPath: "Reveal the path",
      pathAria: "Connected philosopher timeline",
      pathKicker: "Follow the line",
      pathTitle: "A path of thinkers across the map",
      pathText:
        "As you scroll, the route moves from ancient ideals and virtue, through dialectics and materialism, toward freedom, critique, and existence.",
      storyAria: "Philosophy story chapters",
      chapterLabel: "Chapter",
      finalKicker: "The atlas resolves",
      finalTitle: "Find the thinker your answers have been tracing.",
      finalText:
        "Open a scored result with your closest philosopher, neighboring influences, selected quotes, and a short reflection on the pattern behind your choices.",
      takeTest: "Take the Test",
      resultSummaryAria: "Result summary",
      questions: "questions",
      hiddenAxes: "hidden axes",
      thinkers: "thinkers",
      explore: "Explore"
    },
    quiz: {
      return: "Return to landing",
      previousQuestion: "Previous question",
      chooseOne: "Choose one answer before moving forward.",
      answerAll: "Answer all {count} questions before opening the result.",
      scoreError: "The archive failed to score your result. Check the server and try again.",
      reading: "Reading the archive...",
      reveal: "Reveal my philosopher"
    },
    result: {
      loading: "Opening the archive...",
      ready: "Static commentary ready.",
      missing: "This result could not be found. Retake the quiz to create a new session.",
      loadError: "The archive could not load this result.",
      retake: "Retake the test",
      return: "Return to landing",
      newResult: "New result",
      signature: "Your philosophical signature",
      detailsAria: "Result details",
      topCluster: "Top cluster",
      recorded: "Recorded",
      hiddenAxes: "Hidden axes",
      dimensions: "Dimensions",
      dimensionIntro:
        "Your radar compares the six philosophical pressures in the quiz. High points are your strongest habits; lower points are quieter muscles that shape the edges of the match.",
      extremesAria: "Dimension strengths and weaknesses",
      strength: "Strength",
      quietEdge: "Quieter edge",
      dimensionPercentages: "Dimension percentages",
      radarFigure: "Radar chart of philosophical dimensions",
      radarImage: "Philosophical dimension radar",
      constellation: "Constellation",
      nearbyThinkers: "Nearby thinkers",
      nearbyMatch: "{name} is a {percentage}% nearby match",
      readingRoom: "Reading room",
      quotesTitle: "Quotes from your result constellation",
      interpretation: "Interpretation",
      commentary: "Reflective commentary",
      commentaryDetails: "Reflective commentary details",
      strengths: "Strengths",
      blindSpots: "Blind spots",
      readNext: "Read next"
    },
    archive: {
      navAria: "Philosopher archive navigation",
      heroAria: "Philosopher archive introduction",
      heroKicker: "Philosopher archive",
      heroTitle: "The thinkers inside the parchment.",
      heroText:
        "A closer room for the twelve figures on the map: their histories, core ideas, quotes, recommended works, and the threads that connect them.",
      rosterAria: "Philosopher roster",
      roster: "Roster",
      selectThinker: "Select a thinker",
      rosterText: "Each portrait opens a dedicated page, from ancient virtue to dialectics and existential freedom.",
      ledgerAria: "Philosopher histories and quotes",
      coreIdeas: "core ideas",
      quoteReading: "quote and reading",
      startWith: "Start with",
      threadsAria: "Philosophical threads",
      threads: "Threads",
      mapConnects: "How the map connects",
      mapConnectsText: "The page is not a museum shelf. It is a route through recurring problems.",
      finalAria: "Return to the quiz",
      finalKicker: "Return to the test",
      finalTitle: "Now let the archive read you back.",
      finalText: "Take the quiz and compare your result with the thinkers you just traced.",
      summaryAria: "Archive summary"
    },
    profile: {
      navigation: "{name} navigation",
      profileAria: "{name} profile",
      readHistory: "Read history",
      fullIndex: "Full index",
      quoteAria: "{name} quote",
      historyAria: "{name} history",
      history: "History",
      historyTitle: "The pressure behind the thought",
      timelineAria: "{name} timeline",
      timeline: "Timeline",
      timelineTitle: "A life in pressure points",
      ideasAria: "{name} ideas and reading",
      coreIdeas: "Core ideas",
      startWith: "Start with",
      quotesAria: "{name} additional quotes",
      quotes: "Quotes",
      quotesTitle: "Three lines to keep open",
      threadsAria: "{name} philosophical threads",
      threads: "Threads",
      threadsTitle: "Where this thinker sits on the map",
      sourcesAria: "{name} research sources",
      sources: "Sources",
      sourcesTitle: "Where this page was checked",
      neighborsAria: "Neighboring philosophers"
    },
    credits: {
      navAria: "Credits navigation",
      overviewAria: "Credits overview",
      assetLedger: "Asset ledger",
      title: "Credits",
      intro:
        "A transparent source room for the portraits, generated atlas textures, and release notes behind Philosopher Atlas.",
      viewSource: "View the source",
      summaryAria: "Asset summary",
      policyAria: "Asset policy notes",
      notesKicker: "Notes before release",
      notesTitle: "Sources stay visible so the atlas can stay honest.",
      portraitSourcesAria: "Philosopher portrait source ledger",
      portraitSources: "Portrait sources",
      visibleTrail: "Every thinker keeps a visible trail.",
      sourceIntro:
        "These links open the exact Wikimedia Commons file pages for the preview images, not direct image endpoints that can trigger robot-policy errors.",
      sourcePage: "Source page",
      researchAria: "Philosopher profile research source ledger",
      profileResearch: "Profile research",
      historiesCite: "The histories cite their rooms.",
      researchIntro:
        "These references were used for the expanded philosopher pages: biography, timeline, major works, and short quote context.",
      researchFallback: "Research",
      openSource: "Open source",
      finalAria: "Credits closing note",
      finalKicker: "Keep the archive clean",
      finalTitle: "Replace anything uncertain before release.",
      finalText:
        "If a final image cannot be attributed clearly, swap it for a safer public-domain, commissioned, or generated alternative before shipping.",
      backToMap: "Back to the Map"
    },
    sourceTypes: {
      Biography: "Biography",
      "Primary text": "Primary text",
      Research: "Research"
    }
  },
  vi: {
    nav: {
      brand: "Bản Đồ Triết Gia",
      philosophers: "Triết gia",
      quiz: "Trắc nghiệm",
      credits: "Nguồn",
      sources: "Tư liệu"
    },
    landing: {
      navAria: "Điều hướng chính",
      heroScribe: "Một bài trắc nghiệm tính cách mang chất điện ảnh, đi qua những câu hỏi cổ điển và lịch sử vật chất.",
      heroTitle: "Triết gia nào đang ẩn trong cách bạn nhìn thế giới?",
      heroText:
        "Đi qua bản đồ giấy da của ý niệm, mâu thuẫn, xã hội, quyền lực và tự do. Cuối cùng, câu trả lời của bạn được đối chiếu với mười hai nhà tư tưởng từ Plato đến Marx, Lenin, Beauvoir, Lão Tử và Sartre.",
      revealPath: "Hiện lộ trình",
      pathAria: "Dòng thời gian các triết gia được kết nối",
      pathKicker: "Đi theo tuyến đường",
      pathTitle: "Một lộ trình tư tưởng trên bản đồ",
      pathText:
        "Khi bạn kéo trang, tuyến đường đi từ lý tưởng và đức hạnh cổ đại, qua biện chứng và duy vật, đến tự do, phê phán và hiện sinh.",
      storyAria: "Các chương câu chuyện triết học",
      chapterLabel: "Chương",
      finalKicker: "Bản đồ khép lại",
      finalTitle: "Tìm nhà tư tưởng mà câu trả lời của bạn đã lần theo.",
      finalText:
        "Mở phần kết quả với triết gia gần bạn nhất, những ảnh hưởng lân cận, các câu trích chọn lọc và một đoạn phản tư về khuôn mẫu đằng sau lựa chọn của bạn.",
      takeTest: "Làm trắc nghiệm",
      resultSummaryAria: "Tóm tắt kết quả",
      questions: "câu hỏi",
      hiddenAxes: "trục ẩn",
      thinkers: "nhà tư tưởng",
      explore: "Khám phá"
    },
    quiz: {
      return: "Về trang mở đầu",
      previousQuestion: "Câu hỏi trước",
      chooseOne: "Hãy chọn một câu trả lời trước khi đi tiếp.",
      answerAll: "Hãy trả lời đủ {count} câu hỏi trước khi mở kết quả.",
      scoreError: "Hệ thống chưa chấm được kết quả. Hãy kiểm tra máy chủ và thử lại.",
      reading: "Đang đọc câu trả lời...",
      reveal: "Hiện triết gia của tôi"
    },
    result: {
      loading: "Đang mở hồ sơ kết quả...",
      ready: "Phần bình luận đã sẵn sàng.",
      missing: "Không tìm thấy kết quả này. Hãy làm lại trắc nghiệm để tạo phiên mới.",
      loadError: "Không tải được kết quả này.",
      retake: "Làm lại trắc nghiệm",
      return: "Về trang mở đầu",
      newResult: "Kết quả mới",
      signature: "Dấu ấn triết học của bạn",
      detailsAria: "Chi tiết kết quả",
      topCluster: "Cụm gần nhất",
      recorded: "Ghi lúc",
      hiddenAxes: "Các trục ẩn",
      dimensions: "Chiều kích",
      dimensionIntro:
        "Biểu đồ radar so sánh sáu áp lực triết học trong bài trắc nghiệm. Điểm cao là thói quen nổi bật nhất; điểm thấp là những xu hướng trầm hơn định hình phần rìa của kết quả.",
      extremesAria: "Điểm mạnh và rìa yếu của các chiều kích",
      strength: "Điểm mạnh",
      quietEdge: "Góc trầm hơn",
      dimensionPercentages: "Tỷ lệ các chiều kích",
      radarFigure: "Biểu đồ radar các chiều kích triết học",
      radarImage: "Radar chiều kích triết học",
      constellation: "Cụm liên hệ",
      nearbyThinkers: "Nhà tư tưởng lân cận",
      nearbyMatch: "{name} là kết quả gần {percentage}%",
      readingRoom: "Phòng đọc",
      quotesTitle: "Trích dẫn từ cụm kết quả của bạn",
      interpretation: "Diễn giải",
      commentary: "Bình luận phản tư",
      commentaryDetails: "Chi tiết bình luận phản tư",
      strengths: "Điểm mạnh",
      blindSpots: "Điểm mù",
      readNext: "Đọc tiếp"
    },
    archive: {
      navAria: "Điều hướng kho triết gia",
      heroAria: "Giới thiệu kho triết gia",
      heroKicker: "Kho triết gia",
      heroTitle: "Những nhà tư tưởng bên trong tấm giấy da.",
      heroText:
        "Một căn phòng gần hơn cho mười hai gương mặt trên bản đồ: lịch sử, ý niệm cốt lõi, trích dẫn, tác phẩm gợi ý và những tuyến liên hệ nối họ với nhau.",
      rosterAria: "Danh sách triết gia",
      roster: "Danh sách",
      selectThinker: "Chọn một nhà tư tưởng",
      rosterText: "Mỗi chân dung mở một trang riêng, từ đức hạnh cổ đại đến biện chứng và tự do hiện sinh.",
      ledgerAria: "Lịch sử và trích dẫn của triết gia",
      coreIdeas: "Ý niệm cốt lõi",
      quoteReading: "trích dẫn và gợi ý đọc",
      startWith: "Bắt đầu với",
      threadsAria: "Các tuyến liên hệ triết học",
      threads: "Tuyến liên hệ",
      mapConnects: "Bản đồ kết nối như thế nào",
      mapConnectsText: "Trang này không phải kệ bảo tàng. Nó là một lộ trình qua những vấn đề lặp lại.",
      finalAria: "Trở lại trắc nghiệm",
      finalKicker: "Quay lại bài test",
      finalTitle: "Giờ hãy để kho lưu trữ soi lại chính bạn.",
      finalText: "Làm trắc nghiệm và so kết quả của bạn với những nhà tư tưởng bạn vừa lần theo.",
      summaryAria: "Tóm tắt kho"
    },
    profile: {
      navigation: "Điều hướng {name}",
      profileAria: "Hồ sơ {name}",
      readHistory: "Đọc lịch sử",
      fullIndex: "Toàn bộ danh mục",
      quoteAria: "Trích dẫn {name}",
      historyAria: "Lịch sử {name}",
      history: "Lịch sử",
      historyTitle: "Áp lực phía sau tư tưởng",
      timelineAria: "Dòng thời gian {name}",
      timeline: "Dòng thời gian",
      timelineTitle: "Một đời trong các điểm áp lực",
      ideasAria: "Ý niệm và gợi ý đọc về {name}",
      coreIdeas: "Ý niệm cốt lõi",
      startWith: "Bắt đầu với",
      quotesAria: "Trích dẫn bổ sung của {name}",
      quotes: "Trích dẫn",
      quotesTitle: "Ba dòng đáng giữ lại",
      threadsAria: "Tuyến liên hệ triết học của {name}",
      threads: "Tuyến liên hệ",
      threadsTitle: "Nhà tư tưởng này nằm ở đâu trên bản đồ",
      sourcesAria: "Nguồn nghiên cứu về {name}",
      sources: "Nguồn",
      sourcesTitle: "Trang này được kiểm chứng ở đâu",
      neighborsAria: "Các triết gia lân cận"
    },
    credits: {
      navAria: "Điều hướng trang nguồn",
      overviewAria: "Tổng quan nguồn",
      assetLedger: "Sổ nguồn tư liệu",
      title: "Nguồn",
      intro:
        "Một trang ghi nguồn minh bạch cho chân dung, chất liệu bản đồ tạo bằng AI và ghi chú phát hành của Bản Đồ Triết Gia.",
      viewSource: "Xem nguồn",
      summaryAria: "Tóm tắt tư liệu",
      policyAria: "Ghi chú chính sách tư liệu",
      notesKicker: "Ghi chú trước khi phát hành",
      notesTitle: "Giữ nguồn rõ ràng để bản đồ đáng tin hơn.",
      portraitSourcesAria: "Sổ nguồn chân dung triết gia",
      portraitSources: "Nguồn chân dung",
      visibleTrail: "Mỗi chân dung đều có đường dẫn kiểm chứng.",
      sourceIntro:
        "Các liên kết này mở trang tiểu sử có ảnh chân dung được nhúng, tránh các đường dẫn ảnh trực tiếp có thể kích hoạt lỗi robot-policy của Wikimedia.",
      sourcePage: "Mở trang tiểu sử",
      researchAria: "Sổ nguồn nghiên cứu hồ sơ triết gia",
      profileResearch: "Nghiên cứu hồ sơ",
      historiesCite: "Phần lịch sử luôn gắn với nguồn đã dùng.",
      researchIntro:
        "Những tham chiếu này được dùng cho các trang triết gia mở rộng: tiểu sử, dòng thời gian, tác phẩm chính và bối cảnh trích dẫn ngắn.",
      researchFallback: "Nghiên cứu",
      openSource: "Mở nguồn",
      finalAria: "Ghi chú kết trang nguồn",
      finalKicker: "Giữ hồ sơ rõ ràng",
      finalTitle: "Thay mọi tư liệu chưa chắc nguồn trước khi phát hành.",
      finalText:
        "Nếu một hình ảnh cuối cùng không thể ghi nguồn rõ ràng, hãy đổi sang lựa chọn thuộc miền công cộng, đặt làm riêng hoặc tạo bằng AI an toàn hơn trước khi xuất bản.",
      backToMap: "Về bản đồ"
    },
    sourceTypes: {
      Biography: "Tiểu sử",
      "Primary text": "Văn bản gốc",
      Research: "Nghiên cứu"
    }
  }
} as const;

export function getAppCopy(language: Language) {
  return appCopy[language];
}

export function getLandingChapters(language: Language) {
  return landingChapters[language];
}

export function formatTemplate(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ""));
}
