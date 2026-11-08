export interface MuseumExhibit {
  id: string;
  order: number;
  period: 'french' | 'american';
  periodLabel: string;
  date: string;
  year: number;
  title: string;
  tagline: string;
  shortDesc: string;
  background: string;
  development: string[];
  resultAndMeaning: string;
  image: string;
  imageCaption: string;
  imageCredit: string;
  videoUrl?: string;
  videoTitle?: string;
  quote?: {
    text: string;
    author: string;
  };
  stats?: Array<{ label: string; value: string }>;
  source: string;
  isHighlight?: boolean;
}

export interface MuseumQuizItem {
  id: number;
  question: string;
  options: [string, string, string, string];
  correctAnswer: number; // 0, 1, 2, 3
  explanation: string;
  period: 'french' | 'american';
  relatedExhibitOrder: number;
  highlightFact: string;
}

export interface MuseumMediaItem {
  id: string;
  type: 'photo' | 'video';
  title: string;
  caption: string;
  url: string;
  category: 'battlefield' | 'figure' | 'campaign' | 'documentary' | 'victory1975';
  categoryLabel: string;
  period: 'french' | 'american';
  year: string;
  source: string;
}

// ==========================================
// 19 MỐC LỊCH SỬ TRIỂN LÃM CHUẨN XÁC (1945 - 1975)
// ==========================================
export const museumExhibits: MuseumExhibit[] = [
  // --- CHUYÊN ĐỀ 1: KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP (1945–1954) ---
  {
    id: 'exhibit-01',
    order: 1,
    period: 'french',
    periodLabel: 'Kháng chiến chống Pháp (1945–1954)',
    date: '02/09/1945',
    year: 1945,
    title: 'Tuyên ngôn Độc lập – Khai sinh nước Việt Nam Dân chủ Cộng hòa',
    tagline: 'Bước ngoặt lịch sử mở ra kỷ nguyên độc lập, tự do cho dân tộc Việt Nam',
    shortDesc: 'Đúng 14 giờ ngày 2/9/1945, tại Quảng trường Ba Đình lịch sử, Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa trước quốc dân đồng bào và toàn thế giới.',
    background: 'Sau thắng lợi vĩ đại của Cách mạng Tháng Tám năm 1945, nhân dân ta đã lật đổ hơn 80 năm ách đô hộ của thực dân Pháp và gần 5 năm chiếm đóng của phát xít Nhật. Trước nguy cơ quân Đồng minh tiến vào giải giáp quân Nhật và dã tâm quay trở lại của thực dân Pháp, việc tuyên bố độc lập là mệnh lệnh cấp bách nhằm khẳng định chủ quyền quốc gia.',
    development: [
      'Đúng 14h ngày 2/9/1945, hơn 50 vạn nhân dân Hà Nội và các vùng lân cận rực rỡ cờ hoa tập hợp tại Quảng trường Ba Đình.',
      'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, trích dẫn Tuyên ngôn Độc lập Hoa Kỳ (1776) và Tuyên ngôn Nhân quyền Pháp (1789) để khẳng định quyền tự do, bình đẳng thiêng liêng của mọi dân tộc.',
      'Trịnh trọng tuyên bố: "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do, độc lập. Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy".'
    ],
    resultAndMeaning: 'Khai sinh ra nhà nước dân chủ nhân dân đầu tiên tại Đông Nam Á, đưa nhân dân Việt Nam từ thân phận người nô lệ trở thành người làm chủ đất nước, mở ra kỷ nguyên mới: kỷ nguyên Độc lập – Tự do.',
    image: '/media/anh/1793932221999_5601981979445790988_g8682714676790492621_70c6c266429d0bc83d10f7caf95a9936.jpg',
    imageCaption: 'Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình ngày 2/9/1945',
    imageCredit: 'Bảo tàng Lịch sử Quốc gia Việt Nam',
    videoUrl: '/media/video/1793936565898_2964594915322034070_g8682714676790492621.mp4',
    videoTitle: 'Phim tư liệu: Ngày Tuyên ngôn Độc lập 2/9/1945',
    quote: {
      text: 'Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy.',
      author: 'Chủ tịch Hồ Chí Minh – Bản Tuyên ngôn Độc lập'
    },
    stats: [
      { label: 'Thời gian', value: '14h00 – 02/09/1945' },
      { label: 'Địa điểm', value: 'Quảng trường Ba Đình' },
      { label: 'Sự kiện', value: 'Khai sinh VNDCCH' }
    ],
    source: 'Bảo tàng Lịch sử Quốc gia Việt Nam; SGK Lịch sử lớp 12, Bộ GD&ĐT',
    isHighlight: false
  },
  {
    id: 'exhibit-02',
    order: 2,
    period: 'french',
    periodLabel: 'Kháng chiến chống Pháp (1945–1954)',
    date: '19/12/1946',
    year: 1946,
    title: 'Toàn quốc kháng chiến – Lời thề quyết tử để Tổ quốc quyết sinh',
    tagline: 'Toàn thể dân tộc Việt Nam đứng lên kháng chiến bảo vệ nền độc lập vừa giành được',
    shortDesc: 'Đêm 19/12/1946, phát súng hiệu từ pháo đài Láng nổ vang, mở đầu cuộc kháng chiến toàn quốc. Chủ tịch Hồ Chí Minh ra Lời kêu gọi Toàn quốc kháng chiến với ý chí sắt đá: "Thà hy sinh tất cả, chứ nhất định không chịu mất nước".',
    background: 'Dù Chính phủ ta đã kiên trì nhân nhượng ký Hiệp định Sơ bộ (6/3/1946) và Tạm ước (14/9/1946) để cứu vãn hòa bình, thực dân Pháp vẫn rắp tâm xâm lược một lần nữa. Chúng liên tiếp gây hấn tại Hải Phòng, Lạng Sơn và ngày 18/12/1946 gửi tối hậu thư đòi tước vũ khí của tự vệ Thủ đô Hà Nội.',
    development: [
      '20h03 ngày 19/12/1946: Nhà máy điện Yên Phụ tắt đèn, pháo đài Láng bắn phát súng lệnh mở màn toàn quốc kháng chiến.',
      'Sáng 20/12/1946: Đài Tiếng nói Việt Nam phát đi "Lời kêu gọi Toàn quốc kháng chiến" của Chủ tịch Hồ Chí Minh: "Hỡi đồng bào toàn quốc! Chúng ta muốn hòa bình, chúng ta phải nhân nhượng. Nhưng chúng ta càng nhân nhượng, thực dân Pháp càng lấn tới...".',
      'Chiến sĩ Trung đoàn Thủ đô cùng tự vệ và nhân dân Hà Nội chiến đấu dũng cảm suốt 60 ngày đêm trong từng căn nhà, góc phố, giam chân địch trong thành phố.'
    ],
    resultAndMeaning: 'Bảo vệ tuyệt đối an toàn cơ quan đầu não Trung ương Đảng, Chính phủ và lực lượng kháng chiến rút lên căn cứ địa Việt Bắc; làm tiêu tan âm mưu đánh úp cơ quan đầu não của giặc Pháp.',
    image: '/media/anh/1793932222043_5601981979445790988_g8682714676790492621_b0e27a947d55944c1c05fe526966462c.jpg',
    imageCaption: 'Chiến sĩ Trung đoàn Thủ đô ôm bom ba càng quyết tử bảo vệ từng góc phố Hà Nội mùa đông 1946',
    imageCredit: 'Bảo tàng Lịch sử Quân sự Việt Nam',
    videoUrl: '/media/video/1793936565920_2964594915322034070_g8682714676790492621.mp4',
    videoTitle: 'Phim tư liệu: 60 ngày đêm quyết tử để Tổ quốc quyết sinh',
    quote: {
      text: 'Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ.',
      author: 'Lời kêu gọi Toàn quốc kháng chiến – 19/12/1946'
    },
    stats: [
      { label: 'Thời gian', value: 'Đêm 19/12/1946' },
      { label: 'Địa bàn mở màn', value: 'Thủ đô Hà Nội' },
      { label: 'Giam chân địch', value: '60 ngày đêm kiên cường' }
    ],
    source: 'Văn kiện Đảng Toàn tập; Bảo tàng Lịch sử Quân sự Việt Nam',
    isHighlight: false
  },
  {
    id: 'exhibit-03',
    order: 3,
    period: 'french',
    periodLabel: 'Kháng chiến chống Pháp (1945–1954)',
    date: 'Thu – Đông 1947',
    year: 1947,
    title: 'Chiến dịch Việt Bắc Thu – Đông 1947 – Mồ chôn giặc Pháp',
    tagline: 'Bẻ gãy hoàn toàn cuộc hành quân Léa, đập tan mộng tưởng "Đánh nhanh, thắng nhanh"',
    shortDesc: 'Chiến dịch phản công Việt Bắc Thu – Đông 1947 là chiến dịch phòng ngự – phản công quy mô lớn đầu tiên của quân và dân ta, đánh bại cuộc tiến công quy mô hơn 12.000 quân tinh nhuệ Pháp lên chiến khu Việt Bắc.',
    background: 'Tháng 10/1947, thực dân Pháp mở cuộc hành quân mang tên Léa với hơn 12.000 quân tinh nhuệ, hàng trăm máy bay và tàu chiến, hình thành thế gọng kìm ôm lấy căn cứ địa Việt Bắc nhằm chụp bắt cơ quan đầu não kháng chiến và tiêu diệt bộ đội chủ lực của ta.',
    development: [
      'Pháp chia 3 mũi tiến công: nhảy dù đánh úp Bắc Kạn; hành quân đường bộ theo Đường số 4 từ Lạng Sơn lên Cao Bằng; hành quân đường thủy theo sông Hồng và sông Lô.',
      'Bộ đội ta chủ động giăng bẫy phục kích hiểm hóc trên đường số 4 (trận đèo Bông Lau vang dội), bắn chìm nhiều tàu chiến giặc trên dòng sông Lô (trận Đoan Hùng, Khe Lau).',
      'Sau hơn 2 tháng chiến đấu anh dũng (07/10 – 19/12/1947), ta bẻ gãy hoàn toàn các gọng kìm bao vây, tiêu diệt hơn 6.000 tên địch, bắn rơi 16 máy bay và đánh chìm 11 tàu chiến.'
    ],
    resultAndMeaning: 'Bảo vệ vững chắc cơ quan đầu não kháng chiến và căn cứ địa Việt Bắc; giáng đòn quyết định làm phá sản chiến lược "đánh nhanh, thắng nhanh", buộc thực dân Pháp phải chuyển sang đánh lâu dài.',
    image: '/media/anh/1793932222068_5601981979445790988_g8682714676790492621_02bcc31cac7bf66e137935d5abdecd20.jpg',
    imageCaption: 'Bộ đội ta phục kích và đánh tan các cánh quân xâm lược Pháp tại chiến trường Việt Bắc Thu – Đông 1947',
    imageCredit: 'Bảo tàng Lịch sử Quốc gia Việt Nam',
    stats: [
      { label: 'Lực lượng Pháp', value: 'Hơn 12.000 quân' },
      { label: 'Trận then chốt', value: 'Sông Lô & Đèo Bông Lau' },
      { label: 'Kết quả', value: 'Bẻ gãy 3 gọng kìm' }
    ],
    source: 'Lịch sử Quân đội Nhân dân Việt Nam; SGK Lịch sử lớp 12',
    isHighlight: false
  },
  {
    id: 'exhibit-04',
    order: 4,
    period: 'french',
    periodLabel: 'Kháng chiến chống Pháp (1945–1954)',
    date: 'Thu – Đông 1950',
    year: 1950,
    title: 'Chiến dịch Biên giới Thu – Đông 1950 – Khai thông thế bao vây',
    tagline: 'Chiến dịch tiến công quy mô lớn đầu tiên, giành quyền chủ động chiến lược trên chiến trường chính Bắc Bộ',
    shortDesc: 'Chiến dịch Biên giới là chiến dịch tiến công quy mô lớn đầu tiên của quân đội ta do đích thân Chủ tịch Hồ Chí Minh ra mặt trận chỉ đạo, phá tan Kế hoạch Rơve của Pháp và khai thông con đường liên lạc với quốc tế.',
    background: 'Năm 1949, thực dân Pháp vạch ra Kế hoạch Rơve (Revers), thiết lập hệ thống phòng ngự dày đặc trên Đường số 4 khóa chặt biên giới Việt – Trung, đồng thời thiết lập hành lang Đông – Tây siết chặt vùng tự do Việt Bắc, âm mưu cô lập hoàn toàn cuộc kháng chiến của ta.',
    development: [
      'Sáng 16/9/1950, quân ta nổ súng công kiên cứ điểm Đông Khê – yết hầu then chốt trên Đường số 4, hạ đồn sau 54 giờ chiến đấu.',
      'Áp dụng chiến thuật kinh điển "Đánh điểm, diệt viện", bộ đội ta phục kích tiêu diệt cánh quân Lơ Pa-giơ (Le Page) và cánh quân Sác-tông (Charton) trên rừng núi Cao – Lạng.',
      'Ngày 22/10/1950: Quân Pháp hoảng loạn tháo chạy khỏi toàn bộ tuyến biên giới, chiến dịch toàn thắng.'
    ],
    resultAndMeaning: 'Khai thông dải biên giới dài 750 km từ Cao Bằng đến Đình Lập với 35 vạn dân; nối liền hậu phương Việt Nam với các nước xã hội chủ nghĩa; giành thế chủ động chiến lược trên chiến trường chính Bắc Bộ.',
    image: '/media/anh/1793932222088_5601981979445790988_g8682714676790492621_44260a5399d0b7a91b172f2d8fabf12f.jpg',
    imageCaption: 'Chủ tịch Hồ Chí Minh quan sát trận địa tại mặt trận Đông Khê trong Chiến dịch Biên giới 1950',
    imageCredit: 'Nhiếp ảnh gia Vũ Năng An / Tư liệu TTXVN',
    quote: {
      text: 'Chống gậy lên non xem trận địa / Vạn trùng núi đón ngọn thu phong / Cương quyết tiêu diệt quân xâm lược / Kháng chiến ắt thành công.',
      author: 'Chủ tịch Hồ Chí Minh – Mặt trận Biên giới 1950'
    },
    stats: [
      { label: 'Trận then chốt', value: 'Cứ điểm Đông Khê' },
      { label: 'Giải phóng', value: '750 km đường biên giới' },
      { label: 'Ý nghĩa', value: 'Giành thế chủ động chiến lược' }
    ],
    source: 'Bảo tàng Lịch sử Quân sự Việt Nam; Báo Nhân Dân',
    isHighlight: false
  },
  {
    id: 'exhibit-05',
    order: 5,
    period: 'french',
    periodLabel: 'Kháng chiến chống Pháp (1945–1954)',
    date: 'Đông – Xuân 1953–1954',
    year: 1953,
    title: 'Chiến cuộc Đông – Xuân 1953–1954 – Đảo lộn kế hoạch Navarre',
    tagline: 'Nghệ thuật quân sự tài tình: Buộc khối cơ động chiến lược của địch phải phân tán và xé lẻ',
    shortDesc: 'Với phương châm "Tích cực, chủ động, cơ động, linh hoạt", quân ta mở hàng loạt đòn tiến công vào những hướng địch sơ hở nhưng có vị trí chiến lược, xé nhỏ khối quân cơ động của Tướng Navarre, tạo tiền đề trực tiếp cho chiến dịch Điện Biên Phủ.',
    background: 'Tháng 5/1953, với viện trợ tài chính khổng lồ của đế quốc Mỹ, chính phủ Pháp cử Đại tướng Henri Navarre sang làm Tổng chỉ huy quân viễn chinh Pháp, triển khai "Kế hoạch Navarre" đầy tham vọng nhằm xoay chuyển cục diện chiến tranh trong vòng 18 tháng.',
    development: [
      'Tháng 9/1953, Bộ Chính trị họp tại Tỉn Keo (Định Hóa, Thái Nguyên) dưới sự chủ trì của Chủ tịch Hồ Chí Minh, quyết định phương châm tác chiến: Đánh vào những hướng địch sơ hở mà tương đối yếu nhưng có tầm quan trọng chiến lược.',
      'Quân ta mở 5 hướng tiến công lớn: Lai Châu, Trung Lào, Hạ Lào, Tây Nguyên (giải phóng thị xã Kon Tum), và Thượng Lào.',
      'Kế hoạch tập trung 84 tiểu đoàn cơ động của Navarre ở đồng bằng Bắc Bộ bị phá vỡ hoàn toàn, địch bị xé vụn thành 5 nơi đóng quân phân tán: Đồng bằng Bắc Bộ, Điện Biên Phủ, Seno, Pleiku, Luang Prabang.'
    ],
    resultAndMeaning: 'Kế hoạch Navarre bước đầu bị phá sản hoàn toàn; quân Pháp bị động chôn chân tại thung lũng Mường Thanh, biến Điện Biên Phủ thành điểm quyết chiến chiến lược ngoài dự kiến ban đầu.',
    image: '/media/anh/1793932222203_5601981979445790988_g8682714676790492621_7d0afb681d0ae8d21240b1d0cf705f65.jpg',
    imageCaption: 'Chủ tịch Hồ Chí Minh cùng Bộ Chính trị họp bàn kế hoạch tác chiến Đông – Xuân 1953–1954 tại Tỉn Keo',
    imageCredit: 'Bảo tàng Lịch sử Quốc gia Việt Nam',
    stats: [
      { label: 'Kế hoạch đối phương', value: 'Navarre (18 tháng)' },
      { label: 'Số hướng tiến công', value: '5 hướng chiến lược' },
      { label: 'Kết quả phân tán', value: 'Địch bị xé vụn thành 5 nơi' }
    ],
    source: 'Văn kiện Đảng Toàn tập; Đại tướng Võ Nguyên Giáp, "Điện Biên Phủ"',
    isHighlight: false
  },
  {
    id: 'exhibit-06',
    order: 6,
    period: 'french',
    periodLabel: 'Kháng chiến chống Pháp (1945–1954)',
    date: '13/03/1954 – 07/05/1954',
    year: 1954,
    title: 'Chiến dịch Điện Biên Phủ – Lừng lẫy năm châu, chấn động địa cầu',
    tagline: '55 ngày đêm khoét núi ngủ hầm, đập tan pháo đài bất khả xâm phạm của thực dân Pháp',
    shortDesc: 'Chiến dịch Điện Biên Phủ là trận quyết chiến chiến lược vĩ đại nhất trong lịch sử chống ngoại xâm thế kỷ 20 của dân tộc ta, xóa sổ hoàn toàn tập đoàn cứ điểm kiên cố nhất Đông Dương của quân viễn chinh Pháp.',
    background: 'Tướng Navarre và các cố vấn quân sự Mỹ xây dựng Điện Biên Phủ thành một tập đoàn cứ điểm hùng mạnh nhất Đông Dương với 49 cứ điểm kiên cố chia làm 3 phân khu, 16.200 lính tinh nhuệ, hai sân bay cùng pháo binh hạng nặng, tự tin tuyên bố đây là "chiếc cối xay thịt" bất khả xâm phạm.',
    development: [
      'Đại tướng Võ Nguyên Giáp đưa ra quyết định khó khăn nhất trong cuộc đời cầm quân: Chuyển phương châm từ "Đánh nhanh, thắng nhanh" sang "Đánh chắc, tiến chắc", hoãn nổ súng và kéo pháo ra để chuẩn bị vững chắc.',
      'Đợt 1 (13/3 – 17/3/1954): Quân ta tiêu diệt cứ điểm Him Lam và Độc Lập, bức hàng cứ điểm Bản Kéo, mở toang cửa ngõ phía Bắc vào lòng chảo Mường Thanh.',
      'Đợt 2 (30/3 – 26/4/1954): Ta vây lấn, đánh chiếm các cao điểm phía Đông (đồi A1, C1, C2, D1, E1), xiết chặt vòng vây bóp nghẹt sân bay Mường Thanh.',
      'Đợt 3 (01/5 – 07/5/1954): Tổng công kích dứt điểm các cao điểm còn lại. Chiều 7/5, khối bộc phá nghìn cân tại đồi A1 phát nổ; 17h30 ngày 7/5/1954, cờ Quyết chiến Quyết thắng tung bay trên nóc hầm Tướng De Castries.'
    ],
    resultAndMeaning: 'Tiêu diệt và bắt sống toàn bộ 16.200 quân địch tại Điện Biên Phủ. Giáng đòn quyết định đập tan ý chí xâm lược của thực dân Pháp, đưa đến việc ký kết Hiệp định Genève chấm dứt chiến tranh, giải phóng hoàn toàn miền Bắc.',
    image: '/media/anh/1793932222106_5601981979445790988_g8682714676790492621_8fb472010b5396ae41be7c9b85e35a97.jpg',
    imageCaption: 'Lá cờ Quyết chiến Quyết thắng tung bay kiêu hãnh trên nóc hầm tướng De Castries chiều ngày 7/5/1954',
    imageCredit: 'Nhiếp ảnh gia Triệu Đại / Bảo tàng Chiến thắng Lịch sử Điện Biên Phủ',
    videoUrl: '/media/video/1793936565942_2964594915322034070_g8682714676790492621.mp4',
    videoTitle: 'Tư liệu lịch sử: Chiến thắng Điện Biên Phủ 7/5/1954',
    quote: {
      text: 'Chín năm làm một Điện Biên / Nên vành hoa đỏ, nên thiên sử vàng.',
      author: 'Nhà thơ Tố Hữu'
    },
    stats: [
      { label: 'Thời gian chiến đấu', value: '55 ngày đêm liên tục' },
      { label: 'Quân Pháp bị diệt/bắt', value: '16.200 lính tinh nhuệ' },
      { label: 'Tướng chỉ huy bị bắt', value: 'Tướng De Castries' },
      { label: 'Thắng lợi', value: 'Ký Hiệp định Genève' }
    ],
    source: 'Bảo tàng Chiến thắng Lịch sử Điện Biên Phủ; Văn kiện Quân ủy Trung ương',
    isHighlight: true
  },
  {
    id: 'exhibit-07',
    order: 7,
    period: 'french',
    periodLabel: 'Kháng chiến chống Pháp (1945–1954)',
    date: '21/07/1954',
    year: 1954,
    title: 'Ngày 21/07/1954 – Ký kết Hiệp định Genève về Đông Dương',
    tagline: 'Pháp và các nước lớn công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam',
    shortDesc: 'Sau chiến thắng Điện Biên Phủ chấn động, ngày 21/7/1954, Hiệp định Genève được ký kết, buộc chính phủ Pháp phải công nhận nền độc lập, chủ quyền của ba nước Đông Dương và cam kết rút toàn bộ quân đội về nước.',
    background: 'Hội nghị Genève khai mạc ngày 8/5/1954 (ngay sau ngày Điện Biên Phủ thất thủ). Phái đoàn Việt Nam Dân chủ Cộng hòa do Phó Thủ tướng kiêm Bộ trưởng Ngoại giao Phạm Văn Đồng dẫn đầu bước vào đàm phán trên tư thế của bên chiến thắng kiên quyết bảo vệ lợi ích thiêng liêng của dân tộc.',
    development: [
      'Các nước tham dự hội nghị cam kết tôn trọng độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam, Lào và Campuchia.',
      'Ngừng bắn trên toàn cõi Đông Dương; quân đội thực dân Pháp phải rút khỏi miền Bắc Việt Nam.',
      'Sông Bến Hải (vĩ tuyến 17) tại Quảng Trị được chọn làm giới tuyến quân sự tạm thời; sau 2 năm (tháng 7/1956) sẽ tổ chức tổng tuyển cử tự do trong cả nước để thống nhất non sông.'
    ],
    resultAndMeaning: 'Kết thúc thắng lợi vẻ vang 9 năm trường kỳ kháng chiến chống thực dân Pháp xâm lược (1945–1954), giải phóng hoàn toàn miền Bắc để tiến lên xây dựng CNXH, tạo căn cứ địa vững chắc cho sự nghiệp giải phóng miền Nam.',
    image: '/media/anh/1793932222219_5601981979445790988_g8682714676790492621_654c8632152b9531b61e785fb12797a3.jpg',
    imageCaption: 'Toàn cảnh Lễ ký kết Hiệp định Genève về lập lại hòa bình ở Đông Dương ngày 21/7/1954',
    imageCredit: 'Bảo tàng Lịch sử Quốc gia Việt Nam',
    videoUrl: '/media/video/1793936565959_2964594915322034070_g8682714676790492621.mp4',
    videoTitle: 'Phim tư liệu: Ký kết Hiệp định Genève 1954',
    stats: [
      { label: 'Thời gian ký', value: '21/07/1954' },
      { label: 'Trưởng phái đoàn VN', value: 'Đ/c Phạm Văn Đồng' },
      { label: 'Ý nghĩa quốc tế', value: 'Chấm dứt chủ nghĩa thực dân cũ' }
    ],
    source: 'Bộ Ngoại giao Việt Nam; SGK Lịch sử 12',
    isHighlight: false
  },

  // --- CHUYÊN ĐỀ 2: KHÁNG CHIẾN CHỐNG MỸ (1954–1975) ---
  {
    id: 'exhibit-08',
    order: 8,
    period: 'american',
    periodLabel: 'Kháng chiến chống Mỹ (1954–1975)',
    date: '1954 – 1959',
    year: 1954,
    title: 'Tình hình Việt Nam sau Hiệp định Genève năm 1954',
    tagline: 'Đất nước tạm thời bị chia cắt hai miền – Thực hiện đồng thời hai chiến lược cách mạng',
    shortDesc: 'Sau năm 1954, đế quốc Mỹ nhảy vào hất cẳng Pháp, dựng lên chính quyền tay sai Ngô Đình Diệm, từ chối hiệp thương tổng tuyển cử, biến miền Nam thành thuộc địa kiểu mới và căn cứ quân sự của Mỹ.',
    background: 'Theo Hiệp định Genève, giới tuyến quân sự ở vĩ tuyến 17 chỉ mang tính chất tạm thời chờ cuộc tổng tuyển cử tháng 7/1956. Nhưng với dã tâm ngăn chặn chủ nghĩa cộng sản, Mỹ ồ ạt đổ tiền của, vũ khí và cố vấn vào miền Nam, ngang nhiên phá bỏ Hiệp định Genève.',
    development: [
      'Mỹ dựng lên chính quyền độc tài gia đình trị Ngô Đình Diệm, tổ chức trưng cầu dân ý gian lận, tuyên bố từ chối tổng tuyển cử tự do thống nhất đất nước.',
      'Chính quyền Diệm ban hành Luật 10/59 khét tiếng "đặt cộng sản ra ngoài vòng pháp luật", lê máy chém khắp miền Nam, tàn sát dã man hàng vạn đảng viên và quần chúng yêu nước.',
      'Miền Bắc hoàn toàn giải phóng, bắt tay vào công cuộc khôi phục kinh tế, cải tạo xã hội chủ nghĩa, chuẩn bị đóng vai trò hậu phương lớn cho tiền tuyến lớn miền Nam.'
    ],
    resultAndMeaning: 'Đảng ta xác định nhiệm vụ cách mạng: Miền Bắc tiến hành cách mạng XHCN, miền Nam tiếp tục cách mạng dân tộc dân chủ nhân dân nhằm mục tiêu chung là độc lập, hòa bình và thống nhất non sông.',
    image: '/media/anh/1793932222235_5601981979445790988_g8682714676790492621_9389089ea87212a255fe583234e7f90c.jpg',
    imageCaption: 'Cầu Hiền Lương bắc qua sông Bến Hải (Vĩ tuyến 17) – biểu tượng nỗi đau chia cắt và khát vọng thống nhất non sông',
    imageCredit: 'Bảo tàng Chứng tích Chiến tranh',
    stats: [
      { label: 'Giới tuyến tạm thời', value: 'Vĩ tuyến 17 (Bến Hải)' },
      { label: 'Mỹ viện trợ Diệm', value: 'Hàng tỷ USD và vũ khí' },
      { label: 'Chính sách đàn áp', value: 'Luật 10/59 lê máy chém' }
    ],
    source: 'Bảo tàng Chứng tích Chiến tranh; Lịch sử Việt Nam hiện đại',
    isHighlight: false
  },
  {
    id: 'exhibit-09',
    order: 9,
    period: 'american',
    periodLabel: 'Kháng chiến chống Mỹ (1954–1975)',
    date: '1959 – 1960',
    year: 1959,
    title: 'Phong trào Đồng Khởi (1959–1960) – Bến Tre quật khởi',
    tagline: 'Chuyển cách mạng miền Nam từ thế giữ gìn lực lượng sang thế tiến công mạnh mẽ',
    shortDesc: 'Từ Nghị quyết 15 của Trung ương Đảng, ngọn lửa Đồng Khởi bùng phát dữ dội từ Mỏ Cày (Bến Tre) với "Đội quân tóc dài" huyền thoại, lan rộng khắp miền Nam, phá tan từng mảng lớn hệ thống kìm kẹp của địch.',
    background: 'Dưới chính sách khủng bố tàn bạo của Mỹ – Diệm, máu của đồng bào và chiến sĩ miền Nam đổ rải rác khắp nơi. Tháng 1/1959, Hội nghị Trung ương 15 mở đường cho nhân dân miền Nam sử dụng bạo lực cách mạng kết hợp đấu tranh chính trị với đấu tranh vũ trang.',
    development: [
      'Ngày 17/1/1960, dưới sự lãnh đạo kiên cường của Tỉnh ủy Bến Tre và đồng chí Nguyễn Thị Định, nhân dân huyện Mỏ Cày đồng loạt nổi dậy với gậy gộc, giáo mác, súng ngựa trời.',
      'Phong trào nhanh chóng lan tỏa ra toàn tỉnh Bến Tre và khắp các tỉnh Nam Bộ, Trung Bộ và Tây Nguyên, giải phóng hàng ngàn thôn xã.',
      'Ngày 20/12/1960: Mặt trận Dân tộc Giải phóng miền Nam Việt Nam (MTGPMN) chính thức được thành lập tại Tây Ninh.'
    ],
    resultAndMeaning: 'Đập tan ảo vọng bình định của Mỹ – Diệm, giáng đòn chí mạng vào chính sách thực dân mới của Mỹ, đánh dấu bước nhảy vọt đưa cách mạng miền Nam bước sang thời kỳ tiến công chiến lược.',
    image: '/media/anh/1793932222122_5601981979445790988_g8682714676790492621_2a244d3a3c15d133f3f69ea5dcf2bbe7.jpg',
    imageCaption: 'Nhân dân Bến Tre cùng Đội quân tóc dài của bà Nguyễn Thị Định quật khởi vùng lên trong phong trào Đồng Khởi',
    imageCredit: 'Bảo tàng Phụ nữ Nam Bộ / Bảo tàng Bến Tre',
    quote: {
      text: 'Anh dũng Đồng Khởi, đập tan kìm kẹp, mở đường cho miền Nam tiến lên phía trước.',
      author: 'Lời ca cách mạng miền Nam'
    },
    stats: [
      { label: 'Nơi phát động', value: 'Mỏ Cày, Bến Tre (17/1/1960)' },
      { label: 'Lực lượng biểu tượng', value: 'Đội quân tóc dài' },
      { label: 'Thành lập MTGPMN', value: '20/12/1960' }
    ],
    source: 'Lịch sử Đảng bộ tỉnh Bến Tre; SGK Lịch sử lớp 12',
    isHighlight: false
  },
  {
    id: 'exhibit-10',
    order: 10,
    period: 'american',
    periodLabel: 'Kháng chiến chống Mỹ (1954–1975)',
    date: '1961 – 1965',
    year: 1961,
    title: 'Đánh bại chiến lược "Chiến tranh đặc biệt" (1961–1965)',
    tagline: 'Chiến thắng Ấp Bắc bẻ gãy chiến thuật trực thăng vận và thiết xa vận của Mỹ',
    shortDesc: 'Mỹ áp dụng chiến lược "Chiến tranh đặc biệt" dùng quân đội tay sai Sài Gòn dưới sự chỉ huy của cố vấn Mỹ, quốc sách "ấp chiến lược" và vũ khí hiện đại. Quân và dân ta kiên cường đánh bại chiến lược này trên mọi mặt trận.',
    background: 'Sau thất bại của phong trào Đồng Khởi, Tổng thống Mỹ Kennedy đề ra chiến lược toàn cầu "Phản ứng linh hoạt", thí nghiệm chiến lược "Chiến tranh đặc biệt" (1961–1965) tại miền Nam Việt Nam với công thức: Quân đội Sài Gòn + Cố vấn, vũ khí, phương tiện Mỹ.',
    development: [
      'Mỹ và chính quyền Sài Gòn triển khai kế hoạch Staley – Taylor và Johnson – McNamara, coi việc lập "Ấp chiến lược" là xương sống của cuộc chiến tranh.',
      'Ngày 02/01/1963: Chiến thắng Ấp Bắc (Mỹ Tho) vang dội – lần đầu tiên bộ đội ta bẻ gãy hoàn toàn chiến thuật "trực thăng vận" và "thiết xa vận" của quân Mỹ – ngụy.',
      'Phong trào phá ấp chiến lược dâng cao như thác lũ; các trận thắng giòn giã ở Bình Giã (12/1964), An Lão, Ba Gia, Đồng Xoài (1965) xóa sổ hàng loạt trung đoàn chủ lực đối phương.'
    ],
    resultAndMeaning: 'Chiến lược "Chiến tranh đặc biệt" hoàn toàn bị phá sản; chính quyền tay sai Ngô Đình Diệm bị Mỹ lật đổ và ám sát tháng 11/1963 trong cơn khủng hoảng tuyệt vọng.',
    image: '/media/anh/1793932222250_5601981979445790988_g8682714676790492621_1b877d82f3026599067a2647cc17c870.jpg',
    imageCaption: 'Chiến sĩ Quân giải phóng tại trận địa Ấp Bắc (Mỹ Tho) bắn rơi trực thăng hiện đại của Mỹ ngày 2/1/1963',
    imageCredit: 'Bảo tàng Chứng tích Chiến tranh',
    stats: [
      { label: 'Trận đòn quyết định', value: 'Chiến thắng Ấp Bắc (1963)' },
      { label: 'Ấp chiến lược bị phá', value: 'Hơn 2/3 tổng số ấp' },
      { label: 'Kết quả', value: 'Chiến tranh đặc biệt phá sản' }
    ],
    source: 'Bảo tàng Lịch sử Quân sự Việt Nam; Lầu Năm Góc – Hồ sơ mật',
    isHighlight: false
  },
  {
    id: 'exhibit-11',
    order: 11,
    period: 'american',
    periodLabel: 'Kháng chiến chống Mỹ (1954–1975)',
    date: '1965 – 1968',
    year: 1965,
    title: 'Đánh bại chiến lược "Chiến tranh cục bộ" (1965–1968)',
    tagline: 'Chiến thắng Vạn Tường: Tìm Mỹ mà đánh, lùng ngụy mà diệt',
    shortDesc: 'Đứng trước nguy cơ sụp đổ của quân đội Sài Gòn, Mỹ ồ ạt đổ hơn nửa triệu quân viễn chinh Mỹ và quân các nước đồng minh trực tiếp tham chiến tại miền Nam, đồng thời mở cuộc chiến tranh phá hoại miền Bắc bằng không quân.',
    background: 'Chiến tranh cục bộ (1965–1968) là hình thức chiến tranh xâm lược tàn bạo nhất của Mỹ với hỏa lực máy bay B-52, chất độc da cam và các cuộc hành quân "Tìm và diệt", "Bình định" quy mô lớn vào vùng giải phóng.',
    development: [
      'Ngày 18/8/1965: Trận Vạn Tường (Quảng Ngãi) – trận chạm trán quân sự đầu tiên giữa quân giải phóng và lực lượng lính thủy quân lục chiến tinh nhuệ Mỹ. Ta diệt hơn 900 lính Mỹ, chứng minh ta hoàn toàn có thể đánh thắng Mỹ.',
      'Quân và dân miền Nam liên tiếp bẻ gãy 2 cuộc phản công chiến lược mùa khô (1965–1966 và 1966–1967), đỉnh cao là chiến dịch Junction City với 45.000 quân Mỹ.',
      'Miền Bắc kiên cường bắn rơi hàng nghìn máy bay tối tân của không quân Mỹ, giữ vững tuyến đường huyết mạch Trường Sơn nối liền tiền tuyến.'
    ],
    resultAndMeaning: 'Bẻ gãy ý chí áp đặt sức mạnh hỏa lực quân sự của đế quốc Mỹ; dấy lên phong trào thi đua "Dũng sĩ diệt Mỹ" sôi sục trên toàn chiến trường miền Nam.',
    image: '/media/anh/1793932222266_5601981979445790988_g8682714676790492621_9719964ae12608e7dcd42e7f3821958a.jpg',
    imageCaption: 'Bộ đội ta phục kích và đánh bại lính thủy quân lục chiến Mỹ tại mặt trận Vạn Tường (Quảng Ngãi) tháng 8/1965',
    imageCredit: 'TTXVN / Tư liệu Bảo tàng Quân khu 5',
    videoUrl: '/media/video/1793936565981_2964594915322034070_g8682714676790492621.mp4',
    videoTitle: 'Phim tư liệu: Tuyến lửa Trường Sơn và thế trận đánh Mỹ',
    stats: [
      { label: 'Quân Mỹ tham chiến', value: 'Hơn 540.000 lính' },
      { label: 'Trận đầu thắng Mỹ', value: 'Vạn Tường (18/8/1965)' },
      { label: 'Hành quân lớn nhất bị bẻ', value: 'Junction City (1967)' }
    ],
    source: 'Bảo tàng Lịch sử Quân sự Việt Nam; SGK Lịch sử lớp 12',
    isHighlight: false
  },
  {
    id: 'exhibit-12',
    order: 12,
    period: 'american',
    periodLabel: 'Kháng chiến chống Mỹ (1954–1975)',
    date: 'Tết Mậu Thân 1968',
    year: 1968,
    title: 'Tổng tiến công và nổi dậy Tết Mậu Thân 1968 – Rung chuyển Lầu Năm Góc',
    tagline: 'Đòn sấm sét bất ngờ giáng thẳng vào các cơ quan đầu não đối phương tại các đô thị miền Nam',
    shortDesc: 'Đúng đêm Giao thừa Tết Mậu Thân 1968, quân và dân ta bất ngờ mở cuộc tổng tiến công và nổi dậy đồng loạt tại hơn 40 thành phố, thị xã toàn miền Nam, đánh thẳng vào các sào huyệt hiểm yếu nhất của địch.',
    background: 'Nhằm tạo bước ngoặt quyết định cho cục diện chiến tranh, Trung ương Đảng và Bộ Chính trị quyết định chọn thời điểm địch sơ hở nhất trong dịp Tết Mậu Thân để giáng đòn quyết định vào tận sào huyệt thành thị.',
    development: [
      'Đêm 30 rạng sáng 31/01/1968: Tiếng súng đồng loạt vang lên tại hầu khắp các đô thị miền Nam.',
      'Đặc công và biệt động Sài Gòn đánh thẳng vào các mục tiêu đầu não: Tòa Đại sứ Mỹ, Dinh Độc Lập, Đài Phát thanh, Bộ Tổng tham mưu quân đội Sài Gòn.',
      'Tại Huế, quân và dân ta kiên cường chiếm giữ và làm chủ cố đô suốt 25 ngày đêm, cắm cờ cách mạng trên đỉnh Kỳ Đài Huế, gây chấn động dư luận Mỹ và thế giới.'
    ],
    resultAndMeaning: 'Làm lung lay tận gốc ý chí xâm lược của giới cầm quyền Mỹ; buộc Tổng thống Lyndon B. Johnson phải tuyên bố ngừng ném bom miền Bắc từ vĩ tuyến 20 trở ra, không tái tranh cử và chấp nhận ngồi vào bàn đàm phán tại Hội nghị Paris.',
    image: '/media/anh/1793932222155_5601981979445790988_g8682714676790492621_232cfbe32437805aef524185084fcddd.jpg',
    imageCaption: 'Biệt động và quân giải phóng chiến đấu kiên cường tại nội đô Sài Gòn trong cuộc Tổng tiến công Tết Mậu Thân 1968',
    imageCredit: 'Bảo tàng Chứng tích Chiến tranh',
    videoUrl: '/media/video/1793936566006_2964594915322034070_g8682714676790492621.mp4',
    videoTitle: 'Phim tư liệu: Tổng tiến công và nổi dậy Tết Mậu Thân 1968',
    stats: [
      { label: 'Quy mô tiến công', value: '40+ thành phố, thị xã' },
      { label: 'Mục tiêu tiêu biểu', value: 'Đại sứ quán Mỹ tại Sài Gòn' },
      { label: 'Bước ngoặt cuộc chiến', value: 'Mỹ buộc phải đàm phán Paris' }
    ],
    source: 'Bảo tàng Chứng tích Chiến tranh; Văn kiện Đảng Toàn tập',
    isHighlight: false
  },
  {
    id: 'exhibit-13',
    order: 13,
    period: 'american',
    periodLabel: 'Kháng chiến chống Mỹ (1954–1975)',
    date: '1969 – 1973',
    year: 1969,
    title: 'Đánh bại chiến lược "Việt Nam hóa chiến tranh" (1969–1973)',
    tagline: 'Âm mưu dùng người Việt đánh người Việt, thay màu da trên xác chết của Nixon bị phá sản',
    shortDesc: 'Sau thất bại Mậu Thân, Tổng thống Mỹ Nixon thi hành học thuyết "Việt Nam hóa chiến tranh" và "Đông Dương hóa chiến tranh", rút dần lính Mỹ nhưng tăng cường tối đa vũ khí cho quân đội Sài Gòn và mở rộng chiến tranh sang Campuchia, Lào.',
    background: 'Để xoa dịu làn sóng phản chiến đang dâng trào dữ dội trong nước Mỹ và quốc tế, Nixon chủ trương dùng xương máu lính ngụy thay cho lính Mỹ, đồng thời dùng không quân và hải quân Mỹ yểm trợ hỏa lực tối đa.',
    development: [
      'Quân ta phối hợp với nhân dân Campuchia đập tan cuộc hành quân Chenla II của địch, giải phóng nhiều vùng rộng lớn.',
      'Chiến thắng Đường 9 – Nam Lào (đầu năm 1971): Ta tiêu diệt hoàn toàn cuộc hành quân Lam Sơn 719 – đòn thử nghiệm then chốt của Việt Nam hóa chiến tranh.',
      'Tuyến chi viện chiến lược mang tên Bác (Đường mòn Hồ Chí Minh trên bộ và trên biển) không ngừng lớn mạnh, vận chuyển hàng triệu tấn vũ khí chi viện cho miền Nam.'
    ],
    resultAndMeaning: 'Đánh dấu sự sụp đổ về mặt quân sự của chiến lược Việt Nam hóa chiến tranh, chứng minh quân đội Sài Gòn không thể đứng vững trên chiến trường nếu không có sự yểm trợ trực tiếp của quân Mỹ.',
    image: '/media/anh/1793932222282_5601981979445790988_g8682714676790492621_61c1472a0801b5f81524a93ee5283a16.jpg',
    imageCaption: 'Bộ đội ta cùng pháo binh làm chủ Đường 9 – Nam Lào, đập tan cuộc hành quân Lam Sơn 719 năm 1971',
    imageCredit: 'TTXVN / Tư liệu Binh đoàn 12',
    stats: [
      { label: 'Học thuyết của Mỹ', value: 'Nixon – Việt Nam hóa' },
      { label: 'Chiến thắng then chốt', value: 'Đường 9 – Nam Lào (1971)' },
      { label: 'Tuyến đường huyết mạch', value: 'Đường Hồ Chí Minh huyền thoại' }
    ],
    source: 'Bảo tàng Lịch sử Quân sự Việt Nam; SGK Lịch sử lớp 12',
    isHighlight: false
  },
  {
    id: 'exhibit-14',
    order: 14,
    period: 'american',
    periodLabel: 'Kháng chiến chống Mỹ (1954–1975)',
    date: '1972',
    year: 1972,
    title: 'Tiến công chiến lược 1972 & "Điện Biên Phủ trên không"',
    tagline: '12 ngày đêm quật ngã siêu pháo đài bay B-52 trên bầu trời Hà Nội – Hải Phòng',
    shortDesc: 'Năm 1972 chứng kiến hai kỳ tích quân sự vĩ đại: Cuộc tiến công chiến lược giải phóng Quảng Trị và bản anh hùng ca 12 ngày đêm "Điện Biên Phủ trên không" bắn rơi 34 pháo đài bay B-52 của không quân Mỹ.',
    background: 'Nhằm cứu vãn sự thất bại của chiến lược Việt Nam hóa và tạo thế mạnh trên bàn đàm phán Paris, Nixon ra lệnh phong tỏa cảng biển miền Bắc và mở chiến dịch ném bom rải thảm tàn bạo mang tên Linebacker II vào Hà Nội và Hải Phòng cuối tháng 12/1972.',
    development: [
      'Xuân – Hè 1972: Ta mở cuộc tiến công chiến lược trên 3 hướng (Trị Thiên, Tây Nguyên, Đông Nam Bộ), giải phóng hoàn toàn tỉnh Quảng Trị.',
      'Từ ngày 18 đến 29/12/1972: Không quân và lực lượng tên lửa phòng không SAM-2 ta đánh trả anh dũng suốt 12 ngày đêm trên bầu trời Hà Nội.',
      'Ta bắn rơi 81 máy bay Mỹ, trong đó có 34 siêu pháo đài bay B-52 và 5 chiếc F-111, bắt sống hàng chục phi công giặc lái Mỹ.'
    ],
    resultAndMeaning: 'Chiến thắng "Điện Biên Phủ trên không" giáng đòn chí mạng đập tan ảo tưởng ép ta nhượng bộ bằng bom đạn, buộc Tổng thống Nixon phải ký Hiệp định Paris rút toàn bộ quân Mỹ về nước.',
    image: '/media/anh/1793932222171_5601981979445790988_g8682714676790492621_4e93ccf1c5c13c0b278efb85bb880feb.jpg',
    imageCaption: 'Xác máy bay siêu pháo đài bay B-52 bị bắn rơi tại hồ Hữu Tiệp (Ngọc Hà, Hà Nội) tháng 12/1972',
    imageCredit: 'Bảo tàng Chiến thắng B-52 Hà Nội',
    videoUrl: '/media/video/1793936566047_2964594915322034070_g8682714676790492621.mp4',
    videoTitle: 'Phim tư liệu: 12 ngày đêm Điện Biên Phủ trên không 1972',
    quote: {
      text: 'Hà Nội có thể bị tàn phá, một số nhà máy có thể bị phá hủy, nhưng nhân dân Việt Nam quyết không sợ!',
      author: 'Lời kêu gọi của Chủ tịch Hồ Chí Minh'
    },
    stats: [
      { label: 'Thời gian tập kích', value: '12 ngày đêm (18–29/12/1972)' },
      { label: 'Máy bay B-52 bị bắn rơi', value: '34 pháo đài bay' },
      { label: 'Kết quả trực tiếp', value: 'Buộc Mỹ ký Hiệp định Paris' }
    ],
    source: 'Bảo tàng Chiến thắng B-52; Bộ Tư lệnh Quân chủng Phòng không – Không quân',
    isHighlight: false
  },
  {
    id: 'exhibit-15',
    order: 15,
    period: 'american',
    periodLabel: 'Kháng chiến chống Mỹ (1954–1975)',
    date: '27/01/1973',
    year: 1973,
    title: 'Ngày 27/01/1973 – Ký kết Hiệp định Paris về Việt Nam',
    tagline: 'Hoàn thành trọn vẹn mục tiêu "Đánh cho Mỹ cút" của Chủ tịch Hồ Chí Minh kính yêu',
    shortDesc: 'Ngày 27/01/1973, sau gần 5 năm đàm phán kiên cường, Hiệp định Paris được ký kết tại Pháp. Mỹ buộc phải cam kết tôn trọng độc lập, chủ quyền của Việt Nam và rút toàn bộ quân đội viễn chinh khỏi miền Nam.',
    background: 'Sau thất bại thảm hại của chiến dịch ném bom B-52 cuối năm 1972 tại Hà Nội, chính phủ Mỹ nhận thấy không còn lối thoát nào khác ngoài việc ký kết một thỏa thuận chấm dứt can thiệp quân sự trực tiếp vào Việt Nam.',
    development: [
      'Đại diện 4 bên: Việt Nam Dân chủ Cộng hòa, Mặt trận Dân tộc Giải phóng miền Nam (Chính phủ CMLT), Hoa Kỳ và Chính quyền Sài Gòn chính thức ký kết Hiệp định Paris tại Trung tâm Hội nghị Quốc tế Kléber.',
      'Hoa Kỳ và các nước cam kết tôn trọng độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của nước Việt Nam.',
      'Hoa Kỳ cam kết rút hết quân viễn chinh và quân đồng minh, phá hủy các căn cứ quân sự, cam kết không tiếp tục dính líu quân sự vào miền Nam Việt Nam.'
    ],
    resultAndMeaning: 'Thực hiện thắng lợi trọn vẹn lời căn dặn thiêng liêng của Bác Hồ kính yêu: "Đánh cho Mỹ cút", làm thay đổi căn bản tương quan so sánh lực lượng trên chiến trường, tạo thời cơ lịch sử để tiến lên "Đánh cho ngụy nhào".',
    image: '/media/anh/1793932222313_5601981979445790988_g8682714676790492621_d44e2fd4bddd59f3690c738a81f4583f.jpg',
    imageCaption: 'Bộ trưởng Ngoại giao Nguyễn Thị Bình cùng đại diện các bên ký kết Hiệp định Paris ngày 27/1/1973',
    imageCredit: 'TTXVN / Tư liệu Lưu trữ Quốc gia',
    quote: {
      text: 'Năm qua thắng lợi vẻ vang / Năm nay tiền tuyến chắc càng thắng to / Vì độc lập, vì tự do / Đánh cho Mỹ cút, đánh cho ngụy nhào!',
      author: 'Chủ tịch Hồ Chí Minh – Thơ chúc Tết Kỷ Dậu 1969'
    },
    stats: [
      { label: 'Thời gian ký kết', value: '27/01/1973 tại Paris' },
      { label: 'Thời gian đàm phán', value: '4 năm 8 tháng 14 ngày' },
      { label: 'Thời hạn Mỹ rút quân', value: 'Trong vòng 60 ngày' }
    ],
    source: 'Bộ Ngoại giao Việt Nam; Hiệp định Paris về Việt Nam 1973',
    isHighlight: false
  },
  {
    id: 'exhibit-16',
    order: 16,
    period: 'american',
    periodLabel: 'Kháng chiến chống Mỹ (1954–1975)',
    date: 'Tháng 3/1975',
    year: 1975,
    title: 'Chiến dịch Tây Nguyên – Đòn điểm huyệt mở màn Đại thắng',
    tagline: 'Đòn sấm sét Buôn Ma Thuột khiến quân địch tháo chạy hỗn loạn, vỡ toang toàn bộ chiến lược',
    shortDesc: 'Đầu tháng 3/1975, quân ta mở đòn tiến công điểm huyệt chiến lược vào Buôn Ma Thuột, giải phóng Tây Nguyên chỉ trong thời gian ngắn, làm sụp đổ toàn bộ thế phòng ngự chiến lược của địch.',
    background: 'Đầu năm 1975, Bộ Chính trị nhận định thời cơ giải phóng hoàn toàn miền Nam đã chín muồi. Tây Nguyên là địa bàn chiến lược hiểm yếu, địch chốt giữ lực lượng nhưng phán đoán sai hướng tấn công chính của ta.',
    development: [
      'Ta dùng đòn nghi binh xuất sắc ở Pleiku và Kon Tum, bất ngờ nổ súng đánh thẳng vào Buôn Ma Thuột sáng 10/3/1975.',
      'Chỉ trong 32 giờ chiến đấu anh dũng, quân ta đã làm chủ hoàn toàn thị xã Buôn Ma Thuột, tiêu diệt Sở chỉ huy Sư đoàn 23 của địch.',
      'Nguyễn Văn Thiệu hoảng loạn ra lệnh rút lui toàn bộ khỏi Tây Nguyên; cuộc rút lui biến thành tháo chạy tán loạn trên Đường số 7 và bị ta truy kích tiêu diệt gọn.'
    ],
    resultAndMeaning: 'Chiến dịch Tây Nguyên thắng lợi vang dội đã chuyển cuộc chiến tranh từ thế tiến công chiến lược từng phần sang cuộc Tổng tiến công chiến lược trên toàn chiến trường miền Nam.',
    image: '/media/anh/1793932222329_5601981979445790988_g8682714676790492621_e4fc4a42b5d93ea4f112e653da50bb83.jpg',
    imageCaption: 'Xe tăng và bộ đội Quân giải phóng tiến vào giải phóng thị xã Buôn Ma Thuột tháng 3/1975',
    imageCredit: 'TTXVN / Tư liệu Quân đoàn 3',
    videoUrl: '/media/video/1793936566062_2964594915322034070_g8682714676790492621.mp4',
    videoTitle: 'Phim tư liệu: Trận then chốt Buôn Ma Thuột mở màn 1975',
    stats: [
      { label: 'Trận điểm huyệt', value: 'Buôn Ma Thuột (10/3/1975)' },
      { label: 'Thời gian giải phóng', value: 'Chỉ trong 32 giờ' },
      { label: 'Ý nghĩa bước ngoặt', value: 'Địch tan vỡ thế phòng ngự' }
    ],
    source: 'Đại thắng mùa Xuân 1975, NXB Quân đội Nhân dân',
    isHighlight: false
  },
  {
    id: 'exhibit-17',
    order: 17,
    period: 'american',
    periodLabel: 'Kháng chiến chống Mỹ (1954–1975)',
    date: 'Tháng 3/1975',
    year: 1975,
    title: 'Giải phóng Huế và Đà Nẵng – Cú sụp đổ dây chuyền của quân ngụy',
    tagline: 'Cắt đứt toàn bộ chiến tuyến miền Trung, loại khỏi vòng chiến hơn 10 vạn quân địch',
    shortDesc: 'Tận dụng thời cơ Tây Nguyên đại thắng, quân ta mở Chiến dịch Trị – Thiên – Huế và Đà Nẵng, đập tan căn cứ liên hợp quân sự khổng lồ của địch tại miền Trung chỉ trong ít ngày.',
    background: 'Sau thảm họa Tây Nguyên, địch co cụm về cố thủ ở ven biển miền Trung nhằm giữ vững vùng đồng bằng duyên hải, nhưng tinh thần binh lính đã hoàn toàn hoang mang dao động cùng cực.',
    development: [
      'Ngày 26/3/1975: Cố đô Huế hoàn toàn được giải phóng. Lá cờ vinh quang của Mặt trận Dân tộc Giải phóng tung bay trên đỉnh Kỳ Đài Huế trong niềm hân hoan vô bờ của nhân dân.',
      'Sáng 29/3/1975: Các cánh quân ta từ nhiều hướng tiến công dũng mãnh vào Đà Nẵng – căn cứ quân sự lớn thứ hai miền Nam.',
      'Đến chiều cùng ngày 29/3, thành phố Đà Nẵng được giải phóng hoàn toàn; tướng Ngô Quang Trưởng cùng bộ máy chỉ huy Quân đoàn 1 tháo chạy ra biển.'
    ],
    resultAndMeaning: 'Xóa sổ hoàn toàn Quân đoàn 1 của địch, giải phóng dải đất miền Trung trù phú, tạo điều kiện thuận lợi tột bậc để toàn bộ lực lượng ta dồn sức vào trận quyết chiến cuối cùng tại Sài Gòn.',
    image: '/media/anh/1793932222345_5601981979445790988_g8682714676790492621_9be579f122b8d1b0aa6339e2ac7075b6.jpg',
    imageCaption: 'Quân giải phóng tiến vào tiếp quản căn cứ quân sự và Tòa thị chính Đà Nẵng ngày 29/3/1975',
    imageCredit: 'TTXVN / Tư liệu Bảo tàng Quân khu 5',
    videoUrl: '/media/video/1793936566077_2964594915322034070_g8682714676790492621.mp4',
    videoTitle: 'Phim tư liệu: Giải phóng Huế và Đà Nẵng tháng 3/1975',
    stats: [
      { label: 'Giải phóng Huế', value: '26/03/1975' },
      { label: 'Giải phóng Đà Nẵng', value: '29/03/1975' },
      { label: 'Địch bị tiêu diệt/tan rã', value: 'Hơn 100.000 quân' }
    ],
    source: 'Bảo tàng Lịch sử Quân sự Việt Nam; Báo Quân đội Nhân dân',
    isHighlight: false
  },
  {
    id: 'exhibit-18',
    order: 18,
    period: 'american',
    periodLabel: 'Kháng chiến chống Mỹ (1954–1975)',
    date: '26/04 – 30/04/1975',
    year: 1975,
    title: 'Chiến dịch Hồ Chí Minh – Năm cánh quân thần tốc tiến về Sài Gòn',
    tagline: 'Thần tốc, thần tốc hơn nữa; táo bạo, táo bạo hơn nữa; giải phóng miền Nam trước mùa mưa',
    shortDesc: 'Chiến dịch Hồ Chí Minh là chiến dịch quân sự lớn nhất trong lịch sử dân tộc. Năm cánh quân hùng dũng với xe tăng, pháo binh tiến công thần tốc từ 5 hướng, đập tan tuyến phòng thủ Xuân Lộc, tiến thẳng vào sào huyệt cuối cùng của chính quyền Sài Gòn.',
    background: 'Ngày 14/4/1975, Bộ Chính trị quyết định đặt tên cho chiến dịch giải phóng Sài Gòn – Gia Định là "Chiến dịch Hồ Chí Minh". Đại tướng Võ Nguyên Giáp phát đi bức điện lịch sử: "Thần tốc, thần tốc hơn nữa; táo bạo, táo bạo hơn nữa; tranh thủ từng giờ, từng phút xốc tới mặt trận giải phóng miền Nam...".',
    development: [
      '17 giờ ngày 26/4/1975: Tiếng pháo lệnh nổ vang, 5 cánh quân khổng lồ đồng loạt xuất kích: Hướng Bắc, Hướng Tây Bắc, Hướng Đông, Hướng Đông Nam và Hướng Tây Nam.',
      'Ta chọc thủng "cánh cửa thép" Xuân Lộc, đập tan tuyến phòng thủ ngoài từ Biên Hòa, Củ Chi, Tân An.',
      'Sáng 30/4/1975: Các mũi thọc sâu cơ giới ào ạt vượt cầu Sài Gòn, cầu Thị Nghè, đánh chiếm 5 mục tiêu trọng yếu: Dinh Độc Lập, Bộ Tổng tham mưu, Biệt khu Thủ đô, Tổng nha Cảnh sát và sân bay Tân Sơn Nhất.'
    ],
    resultAndMeaning: 'Đập tan hoàn toàn bộ máy chính quyền tay sai và quân đội đối phương, mở đường cho giờ phút vinh quang thống nhất đất nước trưa ngày 30/4/1975.',
    image: '/media/anh/1793932222361_5601981979445790988_g8682714676790492621_09c40ccafacca750e51a36b8808351a9.jpg',
    imageCaption: 'Các cánh quân xe tăng và bộ binh thần tốc băng qua các tuyến đường tiến về giải phóng Sài Gòn',
    imageCredit: 'TTXVN / Tư liệu Bộ Quốc phòng',
    videoUrl: '/media/video/1793936566099_2964594915322034070_g8682714676790492621.mp4',
    videoTitle: 'Phim tư liệu: 5 cánh quân thần tốc trong Chiến dịch Hồ Chí Minh',
    quote: {
      text: 'Thần tốc, thần tốc hơn nữa; táo bạo, táo bạo hơn nữa; tranh thủ từng giờ, từng phút xốc tới mặt trận giải phóng miền Nam. Quyết chiến và toàn thắng!',
      author: 'Đại tướng Võ Nguyên Giáp – Bức điện khẩn ngày 7/4/1975'
    },
    stats: [
      { label: 'Quy mô tiến công', value: '5 cánh quân thần tốc' },
      { label: 'Thời gian chiến dịch', value: '26/4 – 30/4/1975' },
      { label: 'Mục tiêu tối thượng', value: 'Giải phóng Sài Gòn trọn vẹn' }
    ],
    source: 'Đại thắng mùa Xuân 1975; Văn kiện Bộ Chính trị',
    isHighlight: false
  },
  {
    id: 'exhibit-19',
    order: 19,
    period: 'american',
    periodLabel: 'Kháng chiến chống Mỹ (1954–1975)',
    date: '30/04/1975',
    year: 1975,
    title: 'Ngày 30/04/1975 – Đại thắng Mùa Xuân, Non sông thu về một mối',
    tagline: 'Xe tăng 390 húc tung cổng Dinh Độc Lập – Kết thúc vẻ vang 30 năm kháng chiến trường kỳ',
    shortDesc: 'Đúng 10 giờ 45 phút ngày 30/4/1975, xe tăng số hiệu 390 húc đổ cổng chính Dinh Độc Lập. 11 giờ 30 phút, lá cờ đỏ sao vàng tung bay trên nóc Dinh Độc Lập, đánh dấu cuộc kháng chiến chống Mỹ cứu nước toàn thắng, non sông Việt Nam hoàn toàn liền một dải.',
    background: 'Sau 30 năm kiên cường hy sinh gian khổ kể từ ngày Quốc khánh 2/9/1945, toàn thể dân tộc Việt Nam dồn tất cả ý chí, niềm tin và sức mạnh vào ngày quyết thắng cuối cùng nhằm thực hiện trọn vẹn di nguyện thiêng liêng của Chủ tịch Hồ Chí Minh: "Đất nước ta nhất định sẽ thống nhất. Đồng bào Nam Bắc nhất định sẽ sum họp một nhà".',
    development: [
      '10h45 ngày 30/4/1975: Chiếc xe tăng T-59 mang số hiệu 390 do Trung úy Vũ Đăng Toàn chỉ huy húc tung cánh cổng chính Dinh Độc Lập, theo sát phía sau là xe tăng 843 của Đại đội trưởng Bùi Quang Thận.',
      'Đại đội trưởng Bùi Quang Thận cầm lá cờ giải phóng chạy lên nóc Dinh Độc Lập hạ cờ ngụy, kéo lá cờ Mặt trận Dân tộc Giải phóng miền Nam lên phấp phới tung bay đúng 11h30.',
      'Trung đoàn phó Phạm Xuân Thệ cùng các chiến sĩ áp giải Tổng thống Dương Văn Minh sang Đài Phát thanh Sài Gòn đọc lời tuyên bố đầu hàng không điều kiện; miền Nam hoàn toàn giải phóng.'
    ],
    resultAndMeaning: 'Kết thúc vẻ vang 30 năm kháng chiến chống thực dân và đế quốc (1945–1975); quét sạch bóng quân xâm lược trên dải đất hình chữ S; chấm dứt hoàn toàn ách thống trị kéo dài hơn một thế kỷ của chủ nghĩa thực dân; mở ra kỷ nguyên mới: Kỷ nguyên độc lập, thống nhất và cả nước đi lên Chủ nghĩa Xã hội.',
    image: '/media/anh/1793932222187_5601981979445790988_g8682714676790492621_9fa38103129b31efd32bf1a2a8317cea.jpg',
    imageCaption: 'Xe tăng 390 của Lữ đoàn 203 húc tung cánh cổng chính Dinh Độc Lập trưa ngày 30/4/1975 lịch sử',
    imageCredit: 'Nhà báo Pháp Francoise Demulder / Bảo tàng Chứng tích Chiến tranh',
    videoUrl: '/media/video/1793936566208_2964594915322034070_g8682714676790492621.mp4',
    videoTitle: 'Phim tư liệu lịch sử: Giờ phút thống nhất non sông 30/4/1975',
    quote: {
      text: 'Nước Việt Nam là một, dân tộc Việt Nam là một. Sông có thể cạn, núi có thể mòn, song chân lý ấy không bao giờ thay đổi!',
      author: 'Chủ tịch Hồ Chí Minh'
    },
    stats: [
      { label: 'Xe tăng húc đổ cổng chính', value: 'Xe tăng mang số hiệu 390' },
      { label: 'Thời khắc cắm cờ', value: '11h30 ngày 30/04/1975' },
      { label: 'Tổng thống đầu hàng', value: 'Dương Văn Minh' },
      { label: 'Ý nghĩa vĩ đại', value: 'Non sông hoàn toàn thống nhất' }
    ],
    source: 'Bảo tàng Chứng tích Chiến tranh; Lịch sử Quân đội Nhân dân Việt Nam',
    isHighlight: true
  }
];

// ==========================================
// 10 CÂU HỎI TRẮC NGHIỆM CHUẨN XÁC
// (5 câu Chống Pháp + 5 câu Chống Mỹ)
// ==========================================
export const museumQuiz10: MuseumQuizItem[] = [
  // --- 5 CÂU KHÁNG CHIẾN CHỐNG PHÁP ---
  {
    id: 1,
    question: 'Chủ tịch Hồ Chí Minh đọc bản "Tuyên ngôn Độc lập" khai sinh nước Việt Nam Dân chủ Cộng hòa vào ngày tháng năm nào?',
    options: [
      '19/08/1945',
      '02/09/1945',
      '23/09/1945',
      '19/12/1946'
    ],
    correctAnswer: 1,
    explanation: 'Ngày 02/09/1945, tại Quảng trường Ba Đình (Hà Nội), Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, tuyên bố với toàn thể thế giới sự ra đời của nước Việt Nam Dân chủ Cộng hòa.',
    period: 'french',
    relatedExhibitOrder: 1,
    highlightFact: 'Ngày 2/9/1945 là ngày Quốc khánh của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.'
  },
  {
    id: 2,
    question: 'Trong Lời kêu gọi Toàn quốc kháng chiến (19/12/1946), câu khẩu hiệu bất hủ nào đã trở thành ý chí sắt đá của quân dân Thủ đô?',
    options: [
      'Đánh cho Mỹ cút, đánh cho ngụy nhào',
      'Không có gì quý hơn độc lập tự do',
      'Quyết tử để Tổ quốc quyết sinh',
      'Thần tốc, thần tốc hơn nữa'
    ],
    correctAnswer: 2,
    explanation: 'Trung đoàn Thủ đô cùng tự vệ và nhân dân Hà Nội đã chiến đấu dũng cảm trong 60 ngày đêm giam chân địch với tinh thần "Quyết tử để Tổ quốc quyết sinh", bảo vệ an toàn Trung ương rút lên Việt Bắc.',
    period: 'french',
    relatedExhibitOrder: 2,
    highlightFact: 'Khẩu hiệu do Chủ tịch Hồ Chí Minh gửi thư khen ngợi các chiến sĩ Thủ đô.'
  },
  {
    id: 3,
    question: 'Thắng lợi nào trong Thu – Đông 1947 đã bẻ gãy cuộc hành quân Léa và đập tan chiến lược "Đánh nhanh, thắng nhanh" của thực dân Pháp?',
    options: [
      'Chiến dịch Biên giới',
      'Chiến dịch Việt Bắc Thu – Đông 1947',
      'Chiến dịch Hòa Bình',
      'Chiến dịch Tây Bắc'
    ],
    correctAnswer: 1,
    explanation: 'Chiến dịch Việt Bắc Thu – Đông 1947 là chiến dịch phản công đầu tiên của ta, bảo vệ vững chắc căn cứ địa cách mạng, buộc thực dân Pháp phải chuyển sang đánh lâu dài.',
    period: 'french',
    relatedExhibitOrder: 3,
    highlightFact: 'Gắn liền với các chiến công lẫy lừng trên dòng sông Lô và đèo Bông Lau.'
  },
  {
    id: 4,
    question: 'Trong Chiến dịch Biên giới Thu – Đông 1950, quân ta mở màn đánh chiếm cứ điểm yết hầu nào trên Đường số 4 theo chiến thuật "Đánh điểm, diệt viện"?',
    options: [
      'Cứ điểm Đông Khê',
      'Cứ điểm Thất Khê',
      'Thị xã Cao Bằng',
      'Cứ điểm Bản Kéo'
    ],
    correctAnswer: 0,
    explanation: 'Sáng 16/9/1950, bộ đội ta nổ súng tấn công cứ điểm Đông Khê – yết hầu then chốt của Pháp trên Đường số 4, mở toang dải biên giới 750 km nối liền với các nước XHCN.',
    period: 'french',
    relatedExhibitOrder: 4,
    highlightFact: 'Chiến dịch đầu tiên ta giành được thế chủ động chiến lược trên chiến trường chính Bắc Bộ.'
  },
  {
    id: 5,
    question: 'Trước ngày mở màn chiến dịch Điện Biên Phủ, Đại tướng Võ Nguyên Giáp đã đưa ra quyết định lịch sử thay đổi phương châm tác chiến như thế nào?',
    options: [
      'Chuyển từ "Đánh nhanh, thắng nhanh" sang "Đánh chắc, tiến chắc"',
      'Chuyển từ "Đánh du kích" sang "Tổng công kích"',
      'Chuyển từ "Phòng ngự chiều sâu" sang "Đánh úp hỏa tốc"',
      'Chuyển từ "Đánh chắc, tiến chắc" sang "Đánh nhanh, thắng nhanh"'
    ],
    correctAnswer: 0,
    explanation: 'Đại tướng Võ Nguyên Giáp đã quyết định chuyển phương châm tác chiến sang "Đánh chắc, tiến chắc", hoãn nổ súng và kéo pháo ra, đảm bảo chắc thắng mới đánh, làm nên thắng lợi vĩ đại chiều 7/5/1954.',
    period: 'french',
    relatedExhibitOrder: 6,
    highlightFact: 'Đây được coi là quyết định khó khăn và sáng suốt nhất trong cuộc đời cầm quân của Đại tướng.'
  },

  // --- 5 CÂU KHÁNG CHIẾN CHỐNG MỸ ---
  {
    id: 6,
    question: 'Phong trào Đồng Khởi (1959–1960) với "Đội quân tóc dài" huyền thoại bùng nổ mạnh mẽ đầu tiên tại địa phương nào?',
    options: [
      'Huyện Củ Chi (Sài Gòn)',
      'Huyện Mỏ Cày (Bến Tre)',
      'Huyện Giồng Trôm (Tiền Giang)',
      'Huyện Vĩnh Thạnh (Bình Định)'
    ],
    correctAnswer: 1,
    explanation: 'Ngày 17/1/1960, dưới sự lãnh đạo của bà Nguyễn Thị Định và Tỉnh ủy Bến Tre, nhân dân Mỏ Cày đồng loạt nổi dậy, mở đầu cho phong trào Đồng Khởi khắp miền Nam.',
    period: 'american',
    relatedExhibitOrder: 9,
    highlightFact: 'Phong trào đưa đến sự ra đời của Mặt trận Dân tộc Giải phóng miền Nam ngày 20/12/1960.'
  },
  {
    id: 7,
    question: 'Trận đánh nào vào tháng 8/1965 tại Quảng Ngãi được coi là "Trận đầu thắng Mỹ", chứng minh quân ta hoàn toàn có thể đánh bại lính thủy quân lục chiến Mỹ?',
    options: [
      'Trận Ấp Bắc',
      'Trận Vạn Tường',
      'Trận Núi Thành',
      'Trận Bình Giã'
    ],
    correctAnswer: 1,
    explanation: 'Trận Vạn Tường (18/8/1965) tại Quảng Ngãi là trận chạm trán quân sự đầu tiên của quân giải phóng với lính Mỹ. Thắng lợi giòn giã đã mở ra phong trào "Tìm Mỹ mà đánh, lùng ngụy mà diệt".',
    period: 'american',
    relatedExhibitOrder: 11,
    highlightFact: 'Quân giải phóng đã tiêu diệt và làm bị thương hơn 900 lính Mỹ.'
  },
  {
    id: 8,
    question: 'Đòn sấm sét bất ngờ đánh thẳng vào Tòa Đại sứ Mỹ và các cơ quan đầu não đối phương diễn ra trong sự kiện lịch sử nào?',
    options: [
      'Chiến dịch Nguyễn Huệ 1972',
      'Tổng tiến công và nổi dậy Tết Mậu Thân 1968',
      'Chiến dịch Đường 9 – Khe Sanh 1968',
      'Chiến dịch Tây Nguyên 1975'
    ],
    correctAnswer: 1,
    explanation: 'Đúng đêm Giao thừa Tết Mậu Thân 1968, quân và dân ta bất ngờ tiến công hơn 40 đô thị miền Nam, đánh trúng Tòa Đại sứ Mỹ, làm lung lay ý chí xâm lược của chính giới Mỹ.',
    period: 'american',
    relatedExhibitOrder: 12,
    highlightFact: 'Sự kiện buộc Tổng thống Lyndon Johnson phải ngừng ném bom miền Bắc và chấp nhận đàm phán Paris.'
  },
  {
    id: 9,
    question: 'Kỳ tích quân dân Thủ đô bắn rơi 34 pháo đài bay B-52 trong 12 ngày đêm cuối tháng 12/1972 buộc Mỹ ký Hiệp định Paris được mệnh danh là gì?',
    options: [
      'Hà Nội 12 ngày bão lửa',
      'Điện Biên Phủ trên không',
      'Lũy thép sông Hồng',
      'Pháo đài Ba Đình'
    ],
    correctAnswer: 1,
    explanation: 'Trận chiến 12 ngày đêm cuối tháng 12/1972 được mệnh danh là trận "Điện Biên Phủ trên không", đánh bại hoàn toàn cuộc tập kích chiến lược Linebacker II của Mỹ.',
    period: 'american',
    relatedExhibitOrder: 14,
    highlightFact: 'Buộc Mỹ phải ký Hiệp định Paris ngày 27/1/1973, rút toàn bộ lính Mỹ về nước.'
  },
  {
    id: 10,
    question: 'Chiếc xe tăng nào của quân giải phóng đã húc tung cánh cổng chính Dinh Độc Lập trưa ngày 30/04/1975 lịch sử?',
    options: [
      'Xe tăng mang số hiệu 390',
      'Xe tăng mang số hiệu 843',
      'Xe tăng mang số hiệu 999',
      'Xe tăng mang số hiệu 555'
    ],
    correctAnswer: 0,
    explanation: 'Xe tăng mang số hiệu 390 do Trung úy Vũ Đăng Toàn chỉ huy đã húc tung cánh cổng chính Dinh Độc Lập lúc 10h45 ngày 30/4/1975. Chiếc 390 và chiếc 843 hiện đều là Bảo vật Quốc gia của Việt Nam.',
    period: 'american',
    relatedExhibitOrder: 19,
    highlightFact: 'Đúng 11h30 ngày 30/4/1975, cờ Mặt trận Giải phóng tung bay trên nóc Dinh Độc Lập.'
  }
];

// ==========================================
// THƯ VIỆN ĐA PHƯƠNG TIỆN TRIỂN LÃM TƯ LIỆU
// ==========================================
export const museumMediaItems: MuseumMediaItem[] = [
  {
    id: 'media-v01',
    type: 'video',
    title: 'Phim tư liệu: Ngày Tuyên ngôn Độc lập 2/9/1945',
    caption: 'Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình lịch sử, khai sinh nước Việt Nam Dân chủ Cộng hòa.',
    url: '/media/video/1793936565898_2964594915322034070_g8682714676790492621.mp4',
    category: 'documentary',
    categoryLabel: 'Phim tư liệu',
    period: 'french',
    year: '1945',
    source: 'Hãng phim Tài liệu & Khoa học Trung ương / Viện Phim Việt Nam'
  },
  {
    id: 'media-v02',
    type: 'video',
    title: 'Phim tư liệu: Toàn quốc kháng chiến & Chiến khu Việt Bắc',
    caption: 'Khí thế quật cường của quân và dân Thủ đô 60 ngày đêm quyết tử và các trận đánh lớn bẻ gãy cuộc hành quân Léa trên sông Lô.',
    url: '/media/video/1793936565920_2964594915322034070_g8682714676790492621.mp4',
    category: 'campaign',
    categoryLabel: 'Chiến dịch',
    period: 'french',
    year: '1946–1947',
    source: 'Điện ảnh Quân đội Nhân dân'
  },
  {
    id: 'media-v03',
    type: 'video',
    title: 'Chiến thắng Điện Biên Phủ 1954 lừng lẫy năm châu',
    caption: 'Thước phim lịch sử ghi lại cảnh kéo pháo vào trận địa, đào hào bao vây và lá cờ Quyết chiến Quyết thắng tung bay trên nóc hầm De Castries.',
    url: '/media/video/1793936565942_2964594915322034070_g8682714676790492621.mp4',
    category: 'documentary',
    categoryLabel: 'Phim tư liệu',
    period: 'french',
    year: '1954',
    source: 'Bảo tàng Chiến thắng Lịch sử Điện Biên Phủ'
  },
  {
    id: 'media-v04',
    type: 'video',
    title: 'Tuyến lửa Trường Sơn & Thế trận đánh Mỹ',
    caption: 'Đoàn xe vận tải quân sự thần tốc vượt mưa bom bão đạn trên con đường huyền thoại Trường Sơn chi viện tiền tuyến lớn miền Nam.',
    url: '/media/video/1793936565981_2964594915322034070_g8682714676790492621.mp4',
    category: 'battlefield',
    categoryLabel: 'Chiến trường',
    period: 'american',
    year: '1965–1968',
    source: 'Bảo tàng Đường Hồ Chí Minh'
  },
  {
    id: 'media-v05',
    type: 'video',
    title: 'Tổng tiến công và nổi dậy Tết Mậu Thân 1968',
    caption: 'Các đợt tiến công sấm sét của lực lượng biệt động Sài Gòn và quân giải phóng vào các trung tâm đầu não đối phương.',
    url: '/media/video/1793936566006_2964594915322034070_g8682714676790492621.mp4',
    category: 'battlefield',
    categoryLabel: 'Chiến trường',
    period: 'american',
    year: '1968',
    source: 'Bảo tàng Chứng tích Chiến tranh'
  },
  {
    id: 'media-v06',
    type: 'video',
    title: 'Điện Biên Phủ trên không 1972 & Hiệp định Paris 1973',
    caption: 'Lực lượng tên lửa phòng không Hà Nội đánh trả siêu pháo đài bay B-52 và quang cảnh lễ ký kết Hiệp định Paris lịch sử.',
    url: '/media/video/1793936566047_2964594915322034070_g8682714676790492621.mp4',
    category: 'documentary',
    categoryLabel: 'Phim tư liệu',
    period: 'american',
    year: '1972–1973',
    source: 'Bảo tàng Phòng không – Không quân'
  },
  {
    id: 'media-v07',
    type: 'video',
    title: 'Đại thắng Mùa Xuân 30/04/1975 – Non sông liền một dải',
    caption: 'Xe tăng 390 húc tung cổng Dinh Độc Lập trưa ngày 30/4/1975, niềm vui vỡ òa của hàng triệu nhân dân ngày non sông thu về một mối.',
    url: '/media/video/1793936566208_2964594915322034070_g8682714676790492621.mp4',
    category: 'victory1975',
    categoryLabel: 'Ngày 30/04/1975',
    period: 'american',
    year: '1975',
    source: 'Hãng phim Tài liệu & Khoa học Trung ương'
  },
  // Photos
  {
    id: 'media-p01',
    type: 'photo',
    title: 'Quảng trường Ba Đình rực rỡ cờ hoa ngày 2/9/1945',
    caption: 'Hơn 50 vạn nhân dân tập hợp lắng nghe bản Tuyên ngôn Độc lập của nước Việt Nam mới.',
    url: '/media/anh/1793932221999_5601981979445790988_g8682714676790492621_70c6c266429d0bc83d10f7caf95a9936.jpg',
    category: 'figure',
    categoryLabel: 'Nhân vật lịch sử',
    period: 'french',
    year: '1945',
    source: 'Bảo tàng Lịch sử Quốc gia Việt Nam'
  },
  {
    id: 'media-p02',
    type: 'photo',
    title: 'Chiến sĩ tự vệ Thủ đô ôm bom ba càng quyết tử',
    caption: 'Biểu tượng tinh thần "Quyết tử để Tổ quốc quyết sinh" của Trung đoàn Thủ đô mùa đông 1946.',
    url: '/media/anh/1793932222043_5601981979445790988_g8682714676790492621_b0e27a947d55944c1c05fe526966462c.jpg',
    category: 'battlefield',
    categoryLabel: 'Chiến trường',
    period: 'french',
    year: '1946',
    source: 'Bảo tàng Lịch sử Quân sự Việt Nam'
  },
  {
    id: 'media-p03',
    type: 'photo',
    title: 'Bác Hồ quan sát mặt trận Đông Khê trong Chiến dịch Biên giới 1950',
    caption: 'Chủ tịch Hồ Chí Minh trực tiếp ra đài quan sát chỉ đạo chiến dịch tiến công quy mô lớn đầu tiên của quân ta.',
    url: '/media/anh/1793932222088_5601981979445790988_g8682714676790492621_44260a5399d0b7a91b172f2d8fabf12f.jpg',
    category: 'figure',
    categoryLabel: 'Nhân vật lịch sử',
    period: 'french',
    year: '1950',
    source: 'Nhiếp ảnh gia Vũ Năng An / TTXVN'
  },
  {
    id: 'media-p04',
    type: 'photo',
    title: 'Cờ Quyết chiến Quyết thắng trên nóc hầm De Castries chiều 7/5/1954',
    caption: 'Giờ phút huy hoàng kết thúc thắng lợi Chiến dịch Điện Biên Phủ lừng lẫy năm châu.',
    url: '/media/anh/1793932222106_5601981979445790988_g8682714676790492621_8fb472010b5396ae41be7c9b85e35a97.jpg',
    category: 'campaign',
    categoryLabel: 'Chiến dịch',
    period: 'french',
    year: '1954',
    source: 'Bảo tàng Chiến thắng Điện Biên Phủ'
  },
  {
    id: 'media-p05',
    type: 'photo',
    title: 'Nữ tướng Nguyễn Thị Định và Đội quân tóc dài Bến Tre',
    caption: 'Lực lượng phụ nữ anh hùng lãnh đạo phong trào Đồng Khởi nổi dậy phá ách kìm kẹp của địch năm 1960.',
    url: '/media/anh/1793932222122_5601981979445790988_g8682714676790492621_2a244d3a3c15d133f3f69ea5dcf2bbe7.jpg',
    category: 'figure',
    categoryLabel: 'Nhân vật lịch sử',
    period: 'american',
    year: '1960',
    source: 'Bảo tàng Phụ nữ Nam Bộ'
  },
  {
    id: 'media-p06',
    type: 'photo',
    title: 'Đoàn xe vận tải quân sự trên tuyến lửa Trường Sơn',
    caption: 'Đoàn xe 559 vượt đạn bom rải thảm, mở thông con đường huyết mạch nối liền hậu phương với tiền tuyến lớn.',
    url: '/media/anh/1793932222139_5601981979445790988_g8682714676790492621_56ff0d14bd5ee82ef2a7cb42ea53f393.jpg',
    category: 'battlefield',
    categoryLabel: 'Chiến trường',
    period: 'american',
    year: '1968',
    source: 'Bảo tàng Đường Hồ Chí Minh'
  },
  {
    id: 'media-p07',
    type: 'photo',
    title: 'Lễ ký kết Hiệp định Paris ngày 27/01/1973',
    caption: 'Bộ trưởng Ngoại giao Nguyễn Thị Bình đặt bút ký kết hiệp định chấm dứt chiến tranh, buộc quân Mỹ rút lui.',
    url: '/media/anh/1793932222313_5601981979445790988_g8682714676790492621_d44e2fd4bddd59f3690c738a81f4583f.jpg',
    category: 'campaign',
    categoryLabel: 'Chiến dịch',
    period: 'american',
    year: '1973',
    source: 'Bộ Ngoại giao Việt Nam'
  },
  {
    id: 'media-p08',
    type: 'photo',
    title: 'Xe tăng 390 húc tung cổng chính Dinh Độc Lập trưa 30/4/1975',
    caption: 'Khoảnh khắc lịch sử đánh dấu thắng lợi hoàn toàn của Chiến dịch Hồ Chí Minh và non sông thống nhất.',
    url: '/media/anh/1793932222187_5601981979445790988_g8682714676790492621_9fa38103129b31efd32bf1a2a8317cea.jpg',
    category: 'victory1975',
    categoryLabel: 'Ngày 30/04/1975',
    period: 'american',
    year: '1975',
    source: 'Bảo tàng Chứng tích Chiến tranh'
  },
  {
    id: 'media-p09',
    type: 'photo',
    title: 'Cờ Mặt trận Dân tộc Giải phóng tung bay trên Dinh Độc Lập lúc 11h30',
    caption: 'Đại đội trưởng Bùi Quang Thận phất cao lá cờ cách mạng báo hiệu chiến dịch toàn thắng.',
    url: '/media/anh/1793932222377_5601981979445790988_g8682714676790492621_9206472f4d2b062780e2fc6b99f277c3.jpg',
    category: 'victory1975',
    categoryLabel: 'Ngày 30/04/1975',
    period: 'american',
    year: '1975',
    source: 'TTXVN'
  }
];
