export interface TimelineSlide {
  id: number;
  year: string;
  exactDate: string;
  period: 'french' | 'american';
  title: string;
  tagline: string;
  backgroundContext: string;
  keyEvents: string[];
  historicalMeaning: string;
  image: string;
  videoUrl?: string;
  quote?: {
    text: string;
    author: string;
  };
  stats?: Array<{ label: string; value: string }>;
}

export interface SlideQuizQuestion {
  id: number;
  relatedSlideId: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-3
  explanation: string;
  highlightFact: string;
}

export const timelineSlides: TimelineSlide[] = [
  {
    id: 1,
    year: '1945',
    exactDate: '02/09/1945',
    period: 'french',
    title: 'Tuyên Ngôn Độc Lập – Khai Sinh Nước Việt Nam Dân Chủ Cộng Hòa',
    tagline: 'Bước ngoặt lịch sử mở ra kỷ nguyên độc lập, tự do cho dân tộc Việt Nam',
    backgroundContext: 'Sau thắng lợi vĩ đại của Cách mạng Tháng Tám, chấm dứt hơn 80 năm đô hộ của thực dân Pháp và ách chiếm đóng của phát xít Nhật, chính quyền cách mạng non trẻ đứng trước muôn vàn khó khăn thử thách.',
    keyEvents: [
      'Đúng 14h ngày 2/9/1945, tại Quảng trường Ba Đình rực rỡ cờ hoa, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập.',
      'Khẳng định quyền tự do, bình đẳng và quyền mưu cầu hạnh phúc thiêng liêng của mọi dân tộc trên thế giới.',
      'Tuyên bố với thế giới: "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do, độc lập".'
    ],
    historicalMeaning: 'Khai sinh nhà nước công nông đầu tiên ở Đông Nam Á, đưa nhân dân Việt Nam từ thân phận nô lệ trở thành người làm chủ đất nước.',
    image: '/media/anh/1793932221999_5601981979445790988_g8682714676790492621_70c6c266429d0bc83d10f7caf95a9936.jpg',
    videoUrl: '/media/video/1793936565898_2964594915322034070_g8682714676790492621.mp4',
    quote: {
      text: 'Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy.',
      author: 'Chủ tịch Hồ Chí Minh – 2/9/1945'
    },
    stats: [
      { label: 'Thời gian', value: '2/9/1945' },
      { label: 'Địa điểm', value: 'Quảng trường Ba Đình' },
      { label: 'Sự kiện', value: 'Khai sinh VNDCCH' }
    ]
  },
  {
    id: 2,
    year: '1946',
    exactDate: '19/12/1946',
    period: 'french',
    title: 'Toàn Quốc Kháng Chiến – Giữ Vững Lời Thề Độc Lập',
    tagline: '60 ngày đêm quyết tử để Tổ quốc quyết sinh của quân dân Thủ đô Hà Nội',
    backgroundContext: 'Dã tâm xâm lược của thực dân Pháp không hề suy giảm. Pháp liên tục khiêu khích, chiếm đóng Hải Phòng, Lạng Sơn và gửi tối hậu thư đòi tước vũ khí của tự vệ Hà Nội ngày 18/12/1946.',
    keyEvents: [
      '20h03 ngày 19/12/1946: Nhà máy điện Yên Phụ tắt đèn, pháo đài Láng nổ súng phát lệnh toàn quốc kháng chiến.',
      'Chủ tịch Hồ Chí Minh phát đi "Lời kêu gọi Toàn quốc kháng chiến": Thà hy sinh tất cả chứ nhất định không chịu mất nước.',
      'Chiến sĩ Trung đoàn Thủ đô chiến đấu kiên cường 60 ngày đêm trong lòng Hà Nội, giam chân địch tạo điều kiện cho cơ quan đầu não rút lên chiến khu an toàn.'
    ],
    historicalMeaning: 'Thể hiện ý chí sắt đá của cả một dân tộc quyết không chịu làm nô lệ một lần nữa, mở đầu cuộc kháng chiến trường kỳ gian khổ nhưng tất thắng.',
    image: '/media/anh/1793932222043_5601981979445790988_g8682714676790492621_b0e27a947d55944c1c05fe526966462c.jpg',
    videoUrl: '/media/video/1793936565920_2964594915322034070_g8682714676790492621.mp4',
    quote: {
      text: 'Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ.',
      author: 'Lời kêu gọi Toàn quốc kháng chiến – 19/12/1946'
    },
    stats: [
      { label: 'Kháng chiến', value: '19/12/1946' },
      { label: 'Mục tiêu', value: 'Bảo vệ Thủ đô' },
      { label: 'Thời gian giam chân', value: '60 ngày đêm' }
    ]
  },
  {
    id: 3,
    year: '1947',
    exactDate: 'Thu – Đông 1947',
    period: 'french',
    title: 'Chiến Dịch Việt Bắc Thu – Đông 1947',
    tagline: 'Đập tan hoàn toàn chiến lược "Đánh nhanh, thắng nhanh" của thực dân Pháp',
    backgroundContext: 'Tháng 10/1947, Tướng Valluy huy động hơn 12.000 quân tinh nhuệ cùng hàng trăm máy bay, tàu chiến mở cuộc hành quân Léa tấn công hiểm hóc lên Việt Bắc nhằm tiêu diệt đầu não kháng chiến.',
    keyEvents: [
      'Pháp chia 3 gọng kìm: nhảy dù Bắc Kạn, hành quân đường bộ theo đường số 4, đường thủy ngược sông Lô.',
      'Bộ đội ta chủ động phục kích xuất sắc trên đường số 4 (đèo Bông Lau) và giáng đòn sấm sét trên dòng sông Lô lịch sử (Đoan Hùng).',
      'Sau hơn 2 tháng chiến đấu kiên cường, ta bẻ gãy hoàn toàn các gọng kìm, tiêu diệt hơn 6.000 quân địch.'
    ],
    historicalMeaning: 'Bảo vệ an toàn cơ quan đầu não kháng chiến, căn cứ địa Việt Bắc vững như bàn thạch; buộc Pháp từ bỏ mộng tưởng đánh nhanh thắng nhanh chuyển sang đánh lâu dài.',
    image: '/media/anh/1793932222068_5601981979445790988_g8682714676790492621_02bcc31cac7bf66e137935d5abdecd20.jpg',
    stats: [
      { label: 'Lực lượng địch', value: '12.000 quân' },
      { label: 'Trận then chốt', value: 'Sông Lô, Bông Lau' },
      { label: 'Kết quả', value: 'Pháp rút lui bại trận' }
    ]
  },
  {
    id: 4,
    year: '1950',
    exactDate: 'Thu – Đông 1950',
    period: 'french',
    title: 'Chiến Dịch Biên Giới 1950 – Khai Thông Thế Bao Vây',
    tagline: 'Chiến dịch tấn công quy mô lớn đầu tiên, giành quyền chủ động chiến lược trên chiến trường chính Bắc Bộ',
    backgroundContext: 'Pháp lập Kế hoạch Rơve khóa chặt biên giới Việt – Trung bằng hệ thống đồn bốt trên đường số 4, cô lập Việt Bắc với quốc tế, đồng thời lập hành lang Đông – Tây siết chặt vùng tự do.',
    keyEvents: [
      'Sáng 16/9/1950, ta nổ súng mở màn tấn công cứ điểm Đông Khê – yết hầu then chốt trên đường số 4.',
      'Áp dụng chiến thuật "Đánh điểm, diệt viện", dụ viện binh Pháp rơi vào trận địa phục kích tiêu diệt gọn.',
      'Giải phóng hoàn toàn dải biên giới dài 750 km từ Cao Bằng đến Đình Lập, khai thông con đường huyết mạch nối liền với các nước XHCN.'
    ],
    historicalMeaning: 'Đánh dấu bước nhảy vọt về nghệ thuật quân sự: Ta chuyển từ thế phòng ngự, cầm cự sang thế chủ động phản công chiến lược.',
    image: '/media/anh/1793932222088_5601981979445790988_g8682714676790492621_44260a5399d0b7a91b172f2d8fabf12f.jpg',
    stats: [
      { label: 'Trận then chốt', value: 'Đông Khê' },
      { label: 'Dải biên giới', value: '750 km giải phóng' },
      { label: 'Chuyển biến', value: 'Giành quyền chủ động' }
    ]
  },
  {
    id: 5,
    year: '1954',
    exactDate: '13/03 – 07/05/1954',
    period: 'french',
    title: 'Điện Biên Phủ & Hiệp Định Genève – Lừng Lẫy Năm Châu',
    tagline: 'Trận quyết chiến chiến lược vĩ đại đập tan pháo đài bất khả xâm phạm của thực dân Pháp',
    backgroundContext: 'Tướng Navarre xây dựng Điện Biên Phủ thành "con nhím khổng lồ" với 49 cứ điểm kiên cố, 16.200 quân tinh nhuệ, trang bị pháo binh và sân bay hiện đại với niềm tin ta không thể công phá.',
    keyEvents: [
      'Đại tướng Võ Nguyên Giáp đưa ra quyết định khó khăn nhất lịch sử: Chuyển phương châm từ "Đánh nhanh thắng nhanh" sang "Đánh chắc tiến chắc".',
      'Sau 55 ngày đêm "khoét núi, ngủ hầm, mưa dầm, cơm vắt", chiều 7/5/1954, lá cờ Quyết chiến Quyết thắng tung bay trên nóc hầm De Castries.',
      'Ngày 21/7/1954: Hiệp định Genève được ký kết, Pháp buộc phải công nhận độc lập, chủ quyền, toàn vẹn lãnh thổ của Việt Nam và rút quân.'
    ],
    historicalMeaning: 'Chấm dứt hoàn toàn ách thống trị của thực dân Pháp tại Đông Dương, mở đầu sự sụp đổ của chủ nghĩa thực dân cũ trên toàn thế giới.',
    image: '/media/anh/1793932222106_5601981979445790988_g8682714676790492621_8fb472010b5396ae41be7c9b85e35a97.jpg',
    videoUrl: '/media/video/1793936565942_2964594915322034070_g8682714676790492621.mp4',
    quote: {
      text: 'Chín năm làm một Điện Biên / Nên vành hoa đỏ, nên thiên sử vàng.',
      author: 'Nhà thơ Tố Hữu'
    },
    stats: [
      { label: 'Thời gian', value: '55 ngày đêm' },
      { label: 'Quân Pháp bị diệt/bắt', value: '16.200 lính' },
      { label: 'Thắng lợi', value: 'Hiệp định Genève 1954' }
    ]
  },
  {
    id: 6,
    year: '1960',
    exactDate: '1959 – 1960',
    period: 'american',
    title: 'Phong Trào Đồng Khởi Bến Tre – Ngọn Lửa Quật Khởi Miền Nam',
    tagline: 'Chuyển cách mạng miền Nam từ thế giữ gìn lực lượng sang thế tiến công mạnh mẽ',
    backgroundContext: 'Mỹ nhảy vào miền Nam dựng lên chính quyền độc tài Ngô Đình Diệm, lê máy chém khắp nơi thi hành Luật 10/59 tàn sát hàng ngàn cán bộ, đảng viên và đồng bào yêu nước.',
    keyEvents: [
      'Nghị quyết Hội nghị Trung ương 15 mở đường cho nhân dân miền Nam sử dụng bạo lực cách mạng kết hợp đấu tranh chính trị.',
      'Ngày 17/1/1960, dưới sự lãnh đạo của Nữ tướng Nguyễn Thị Định, nhân dân huyện Mỏ Cày (Bến Tre) đồng loạt nổi dậy với gậy gộc, mỏ tre, súng ngựa trời.',
      'Ngọn lửa Đồng Khởi lan như vũ bão khắp Nam Bộ, Trung Bộ và Tây Nguyên, phá tan từng mảng lớn chính quyền địch ở cơ sở.',
      'Ngày 20/12/1960: Mặt trận Dân tộc Giải phóng miền Nam Việt Nam ra đời.'
    ],
    historicalMeaning: 'Đập tan ảo vọng bình định của Mỹ-Diệm, đánh dấu bước nhảy vọt đưa cách mạng miền Nam bước vào thời kỳ tiến công mới.',
    image: '/media/anh/1793932222122_5601981979445790988_g8682714676790492621_2a244d3a3c15d133f3f69ea5dcf2bbe7.jpg',
    stats: [
      { label: 'Khởi đầu', value: '17/1/1960 tại Bến Tre' },
      { label: 'Đội quân tóc dài', value: 'Nữ tướng Nguyễn Thị Định' },
      { label: 'Thành lập', value: 'Mặt trận GPMN (20/12/1960)' }
    ]
  },
  {
    id: 7,
    year: '1961-1968',
    exactDate: '1961 – 1968',
    period: 'american',
    title: 'Đánh Bại Chiến Tranh Đặc Biệt & Chiến Tranh Cục Bộ Của Mỹ',
    tagline: 'Chiến thắng Ấp Bắc, Vạn Tường và con đường huyền thoại Trường Sơn rực lửa',
    backgroundContext: 'Thất bại sau Đồng Khởi, Mỹ liên tục thí nghiệm các chiến lược tàn bạo: "Chiến tranh đặc biệt" (1961-1965) dùng quân ngụy với cố vấn Mỹ, tiếp đó là "Chiến tranh cục bộ" (1965-1968) đổ bộ hơn nửa triệu lính viễn chinh Mỹ trực tiếp tham chiến.',
    keyEvents: [
      'Chiến thắng Ấp Bắc (1/1963): Đập tan chiến thuật trực thăng vận và thiết xa vận của Mỹ.',
      'Chiến thắng Vạn Tường (Quảng Ngãi, 8/1965): Trận đầu thắng Mỹ, chứng minh ta hoàn toàn có thể đánh bại lính thủy quân lục chiến Mỹ thiện chiến.',
      'Đoàn kết 2 miền: Miền Bắc bắn rơi hàng ngàn máy bay Mỹ; Đường Hồ Chí Minh trên bộ và trên biển không ngừng tiếp tế máu lửa cho tiền tuyến lớn.'
    ],
    historicalMeaning: 'Khẳng định sức mạnh bất khả chiến bại của chiến tranh nhân dân, bẻ gãy ý chí áp đặt sức mạnh hỏa lực tối tân của đế quốc Mỹ.',
    image: '/media/anh/1793932222139_5601981979445790988_g8682714676790492621_56ff0d14bd5ee82ef2a7cb42ea53f393.jpg',
    videoUrl: '/media/video/1793936565981_2964594915322034070_g8682714676790492621.mp4',
    stats: [
      { label: 'Quân Mỹ tham chiến', value: 'Hơn 540.000 lính' },
      { label: 'Trận đầu thắng Mỹ', value: 'Vạn Tường (8/1965)' },
      { label: 'Tuyến chi viện', value: 'Đường mòn Hồ Chí Minh' }
    ]
  },
  {
    id: 8,
    year: '1968',
    exactDate: 'Đêm 30/1 rạng sáng 31/1/1968',
    period: 'american',
    title: 'Tổng Tiến Công & Nổi Dậy Tết Mậu Thân 1968',
    tagline: 'Đòn sấm sét bất ngờ giáng thẳng vào các sào huyệt đầu não địch, làm rung chuyển Lầu Năm Góc',
    backgroundContext: 'Nhằm tạo bước ngoặt quyết định cho chiến tranh, Bộ Chính trị chọn dịp Tết Mậu Thân – thời điểm địch sơ hở nhất – để giáng một đòn bất ngờ và đồng loạt vào hệ thống đô thị miền Nam.',
    keyEvents: [
      'Đêm Giao thừa Tết Mậu Thân, quân ta đồng loạt nổ súng tại hơn 40 thành phố, thị xã toàn miền Nam.',
      'Đặc công và biệt động Sài Gòn đánh thẳng vào các trung tâm đầu não: Tòa Đại sứ Mỹ, Dinh Độc Lập, Bộ Tổng tham mưu quân đội Sài Gòn.',
      'Tại Huế, quân dân ta làm chủ cố đô suốt 25 ngày đêm, cắm cờ cách mạng trên đỉnh Kỳ Đài.'
    ],
    historicalMeaning: 'Phá sản hoàn toàn chiến lược Chiến tranh cục bộ, làm lung lay ý chí xâm lược của chính giới Mỹ, buộc Tổng thống Johnson phải ngừng ném bom miền Bắc và chấp nhận đàm phán tại Paris.',
    image: '/media/anh/1793932222155_5601981979445790988_g8682714676790492621_232cfbe32437805aef524185084fcddd.jpg',
    videoUrl: '/media/video/1793936566006_2964594915322034070_g8682714676790492621.mp4',
    stats: [
      { label: 'Quy mô', value: '40+ thành phố, thị xã' },
      { label: 'Mục tiêu tiêu biểu', value: 'Đại sứ quán Mỹ tại Sài Gòn' },
      { label: 'Ý nghĩa', value: 'Bước ngoặt cuộc chiến' }
    ]
  },
  {
    id: 9,
    year: '1972-1973',
    exactDate: '12/1972 & 27/01/1973',
    period: 'american',
    title: 'Điện Biên Phủ Trên Không & Hiệp Định Paris 1973',
    tagline: 'Đập tan "pháo đài bay" B-52 trên bầu trời Hà Nội, hoàn thành mục tiêu "Đánh cho Mỹ cút"',
    backgroundContext: 'Tháng 12/1972, nhằm gây sức ép buộc ta nhượng bộ tại bàn đàm phán Paris, Tổng thống Nixon mở chiến dịch Linebacker II dùng hàng trăm "siêu pháo đài bay" B-52 ném bom hủy diệt Hà Nội, Hải Phòng suốt 12 ngày đêm.',
    keyEvents: [
      'Quân dân Thủ đô với tên lửa SAM-2, máy bay MiG-21 bắn rơi 81 máy bay Mỹ, trong đó có 34 pháo đài bay B-52, lập nên kỳ tích "Điện Biên Phủ trên không".',
      'Thất bại nặng nề buộc Mỹ phải ký kết Hiệp định Paris ngày 27/1/1973.',
      'Hiệp định Paris buộc toàn bộ quân đội Mỹ và đồng minh phải cuốn cờ rút khỏi Việt Nam sau gần 2 thập kỷ can thiệp trực tiếp.'
    ],
    historicalMeaning: 'Thực hiện thắng lợi trọn vẹn lời dạy của Bác Hồ kính yêu: "Đánh cho Mỹ cút", tạo ra thời cơ chiến lược ngàn năm có một để tiến tới giải phóng hoàn toàn miền Nam.',
    image: '/media/anh/1793932222171_5601981979445790988_g8682714676790492621_4e93ccf1c5c13c0b278efb85bb880feb.jpg',
    videoUrl: '/media/video/1793936566047_2964594915322034070_g8682714676790492621.mp4',
    stats: [
      { label: 'Chiến dịch', value: '12 ngày đêm Hà Nội' },
      { label: 'Máy bay B-52 rơi', value: '34 pháo đài bay' },
      { label: 'Ký kết', value: 'Hiệp định Paris (27/1/1973)' }
    ]
  },
  {
    id: 10,
    year: '1975',
    exactDate: '30/04/1975',
    period: 'american',
    title: 'Chiến Dịch Hồ Chí Minh – Đại Thắng Mùa Xuân 1975',
    tagline: 'Non sông thu về một mối, hoàn thành tâm nguyện thống nhất đất nước của Chủ tịch Hồ Chí Minh',
    backgroundContext: 'Sau đòn sấm sét giải phóng Tây Nguyên (tháng 3/1975), tiếp theo là Huế và Đà Nẵng, Bộ Chính trị ra quyết định lịch sử: Giải phóng Sài Gòn trước mùa mưa trong chiến dịch mang tên Bác Hồ kính yêu.',
    keyEvents: [
      '17h ngày 26/4/1975: Chiến dịch Hồ Chí Minh lịch sử bắt đầu với 5 cánh quân thần tốc dũng mãnh siết chặt vòng vây.',
      '10h45 ngày 30/4/1975: Xe tăng mang số hiệu 843 và 390 của Lữ đoàn 203 húc đổ cánh cổng Dinh Độc Lập.',
      'Đúng 11h30: Cờ Mặt trận Dân tộc Giải phóng tung bay trên nóc Dinh Độc Lập; Tổng thống Dương Văn Minh tuyên bố đầu hàng vô điều kiện.'
    ],
    historicalMeaning: 'Kết thúc oanh liệt 30 năm chiến tranh giải phóng dân tộc (1945–1975), quét sạch bóng quân xâm lược, thu non sông về một mối, mở ra kỷ nguyên độc lập, thống nhất và đi lên CNXH.',
    image: '/media/anh/1793932222187_5601981979445790988_g8682714676790492621_9fa38103129b31efd32bf1a2a8317cea.jpg',
    videoUrl: '/media/video/1793936566208_2964594915322034070_g8682714676790492621.mp4',
    quote: {
      text: 'Nước Việt Nam là một, dân tộc Việt Nam là một. Sông có thể cạn, núi có thể mòn, song chân lý ấy không bao giờ thay đổi.',
      author: 'Chủ tịch Hồ Chí Minh'
    },
    stats: [
      { label: 'Cánh quân tiến công', value: '5 cánh quân thần tốc' },
      { label: 'Xe tăng húc đổ cổng', value: 'Xe tăng 390 & 843' },
      { label: 'Thời khắc lịch sử', value: '11h30 ngày 30/4/1975' }
    ]
  }
];

export const slideQuizQuestions: SlideQuizQuestion[] = [
  {
    id: 1,
    relatedSlideId: 1,
    question: 'Chủ tịch Hồ Chí Minh đọc bản "Tuyên ngôn Độc lập" khai sinh nước Việt Nam Dân chủ Cộng hòa vào ngày tháng năm nào?',
    options: [
      '19/08/1945',
      '02/09/1945',
      '23/09/1945',
      '19/12/1946'
    ],
    correctAnswer: 1,
    explanation: 'Ngày 02/09/1945, tại Quảng trường Ba Đình (Hà Nội), Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập, tuyên bố với toàn thể quốc dân và thế giới sự ra đời của nước Việt Nam Dân chủ Cộng hòa.',
    highlightFact: 'Ngày 2/9/1945 là ngày Quốc khánh của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.'
  },
  {
    id: 2,
    relatedSlideId: 2,
    question: 'Quân dân Thủ đô Hà Nội đã chiến đấu giam chân quân Pháp trong bao nhiêu ngày đêm để bảo vệ cơ quan đầu não rút lên chiến khu an toàn?',
    options: [
      '30 ngày đêm',
      '45 ngày đêm',
      '60 ngày đêm',
      '90 ngày đêm'
    ],
    correctAnswer: 2,
    explanation: 'Trong 60 ngày đêm (19/12/1946 – 17/02/1947), Trung đoàn Thủ đô cùng tự vệ và nhân dân Hà Nội đã chiến đấu ngoan cường, giam chân địch trong thành phố để Trung ương Đảng và Chính phủ rút lên Việt Bắc an toàn.',
    highlightFact: 'Khẩu hiệu lịch sử: "Quyết tử để Tổ quốc quyết sinh".'
  },
  {
    id: 3,
    relatedSlideId: 3,
    question: 'Chiến thắng Việt Bắc Thu – Đông 1947 đã đập tan chiến lược nào của thực dân Pháp?',
    options: [
      'Chiến lược "Chiến tranh cục bộ"',
      'Chiến lược "Đánh nhanh, thắng nhanh"',
      'Chiến lược "Ấp chiến lược"',
      'Kế hoạch Navarre'
    ],
    correctAnswer: 1,
    explanation: 'Chiến thắng Việt Bắc Thu – Đông 1947 đã bẻ gãy hoàn toàn cuộc hành quân Léa của Pháp, đập tan mộng tưởng "đánh nhanh, thắng nhanh", buộc Pháp phải chuyển sang đánh lâu dài.',
    highlightFact: 'Các trận đánh oanh liệt diễn ra trên dòng sông Lô và đèo Bông Lau (đường số 4).'
  },
  {
    id: 4,
    relatedSlideId: 4,
    question: 'Trong Chiến dịch Biên giới Thu – Đông 1950, cứ điểm yết hầu nào trên đường số 4 được quân ta mở màn tiêu diệt?',
    options: [
      'Đông Khê',
      'Thất Khê',
      'Bắc Kạn',
      'Na Sầm'
    ],
    correctAnswer: 0,
    explanation: 'Sáng 16/9/1950, quân ta mở màn nổ súng tấn công cứ điểm Đông Khê – yết hầu cô lập của địch trên đường số 4. Thắng lợi ở Đông Khê mở toang cánh cửa để ta tiêu diệt các cánh quân viện binh của Pháp.',
    highlightFact: 'Chiến thuật tiêu biểu: "Đánh điểm, diệt viện".'
  },
  {
    id: 5,
    relatedSlideId: 5,
    question: 'Trước trận Điện Biên Phủ, Đại tướng Võ Nguyên Giáp đã quyết định chuyển phương châm tác chiến như thế nào?',
    options: [
      'Từ "Đánh chắc tiến chắc" sang "Đánh nhanh thắng nhanh"',
      'Từ "Phòng ngự chặt chẽ" sang "Tấn công tổng lực"',
      'Từ "Đánh nhanh thắng nhanh" sang "Đánh chắc tiến chắc"',
      'Từ "Du kích tiêu hao" sang "Chiến tranh trận địa"'
    ],
    correctAnswer: 2,
    explanation: 'Đại tướng Võ Nguyên Giáp đã có quyết định sáng suốt và khó khăn nhất trong cuộc đời cầm quân: Kéo pháo ra và chuyển từ "Đánh nhanh thắng nhanh" sang "Đánh chắc tiến chắc", đảm bảo nguyên tắc chắc thắng mới đánh.',
    highlightFact: 'Chiến thắng ngày 7/5/1954 buộc Pháp phải ký Hiệp định Genève chấm dứt chiến tranh.'
  },
  {
    id: 6,
    relatedSlideId: 6,
    question: 'Phong trào Đồng Khởi (1959–1960) bùng nổ mạnh mẽ đầu tiên tại huyện nào của tỉnh Bến Tre?',
    options: [
      'Huyện Ba Tri',
      'Huyện Giồng Trôm',
      'Huyện Mỏ Cày',
      'Huyện Châu Thành'
    ],
    correctAnswer: 2,
    explanation: 'Ngày 17/1/1960, dưới sự chỉ đạo của Tỉnh ủy Bến Tre và đồng chí Nguyễn Thị Định, nhân dân huyện Mỏ Cày đã đồng loạt nổi dậy, mở màn cho cao trào Đồng Khởi khắp miền Nam.',
    highlightFact: 'Gắn liền với hình ảnh "Đội quân tóc dài" huyền thoại của phụ nữ Bến Tre.'
  },
  {
    id: 7,
    relatedSlideId: 7,
    question: 'Trận đánh nào vào tháng 8/1965 tại Quảng Ngãi được coi là "Trận đầu thắng Mỹ" của quân và dân ta?',
    options: [
      'Trận Ấp Bắc',
      'Trận Vạn Tường',
      'Trận Bình Giã',
      'Trận Đồng Xoài'
    ],
    correctAnswer: 1,
    explanation: 'Trận Vạn Tường (Quảng Ngãi) diễn ra ngày 18/8/1965 là trận chạm trán quân sự lớn đầu tiên giữa bộ đội chủ lực ta với lính thủy quân lục chiến Mỹ. Ta giành thắng lợi giòn giã, chứng minh khả năng đánh thắng Mỹ.',
    highlightFact: 'Đã mở ra phong trào: "Tìm Mỹ mà đánh, lùng ngụy mà diệt" trên toàn miền Nam.'
  },
  {
    id: 8,
    relatedSlideId: 8,
    question: 'Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân 1968 bắt đầu vào thời điểm nào?',
    options: [
      'Đêm 23 tháng Chạp',
      'Đêm Giao thừa (30/1 rạng sáng 31/1/1968)',
      'Mùng 3 Tết',
      'Rằm tháng Giêng 1968'
    ],
    correctAnswer: 1,
    explanation: 'Đêm Giao thừa Tết Mậu Thân (30/1 rạng ngày 31/1/1968), quân ta bất ngờ đồng loạt tấn công vào hơn 40 đô thị miền Nam, đánh trúng các cơ quan đầu não như Tòa Đại sứ Mỹ, Dinh Độc Lập.',
    highlightFact: 'Khiến chính giới Mỹ bàng hoàng và buộc Tổng thống Lyndon B. Johnson tuyên bố không tái tranh cử.'
  },
  {
    id: 9,
    relatedSlideId: 9,
    question: 'Kỳ tích 12 ngày đêm bắn rơi hàng loạt pháo đài bay B-52 trên bầu trời Hà Nội (12/1972) được mệnh danh là gì?',
    options: [
      'Chiến thắng Sông Lô',
      'Điện Biên Phủ trên không',
      'Pháo đài Thăng Long',
      'Lũy thép Hà Nội'
    ],
    correctAnswer: 1,
    explanation: 'Trận chiến 12 ngày đêm cuối tháng 12/1972 chống lại chiến dịch ném bom rải thảm Linebacker II của Mỹ được mệnh danh là trận "Điện Biên Phủ trên không", buộc Mỹ phải ký kết Hiệp định Paris ngày 27/1/1973.',
    highlightFact: 'Mỹ phải rút toàn bộ quân đội và đồng minh khỏi Việt Nam, thực hiện mục tiêu "Đánh cho Mỹ cút".'
  },
  {
    id: 10,
    relatedSlideId: 10,
    question: 'Chiếc xe tăng nào đã dẫn đầu húc đổ cổng chính của Dinh Độc Lập vào trưa ngày 30/04/1975 lịch sử?',
    options: [
      'Xe tăng mang số hiệu 390',
      'Xe tăng mang số hiệu 843',
      'Xe tăng mang số hiệu 999',
      'Xe tăng mang số hiệu 555'
    ],
    correctAnswer: 0,
    explanation: 'Xe tăng mang số hiệu 390 do Trung úy Vũ Đăng Toàn chỉ huy đã húc tung cánh cổng chính Dinh Độc Lập lúc 10h45 ngày 30/4/1975, mở đường cho quân giải phóng tiến vào cắm cờ và buộc Dương Văn Minh đầu hàng.',
    highlightFact: 'Xe tăng 390 và xe tăng 843 hiện đều được công nhận là Bảo vật Quốc gia của Việt Nam.'
  }
];
