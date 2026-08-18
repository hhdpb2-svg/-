import { Product, Masterclass, Review, FaqItem } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'romantic-symphony',
    category: 'anniversary',
    badge: 'Grand Size / Anniversary',
    name: '로맨틱 심포니',
    subtitle: '풍성한 볼륨감의 시그니처 다발',
    priceSmall: 45000,
    priceMedium: 69000,
    priceGrand: 99000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv30cp7okfhYKHSQAx_UooBd_Wi9B2FfwpJZu3Xkq0jco-p87eYCV456e2VUeLe-aBhz1QcHQyLOFIQ2g2XBx1r8JH8hAlYdeYIaWX7cy2ymjE4f6QX38xD0R7JLWzcXkfeLX2Zh9MHXFLreGM-PQKhdidaH25Gyi9pMPAAesptYhBv1VCiOLFgiMHGbevPL9Zmxc_isfxLx3rjnrjmX0baYJpPs79pcDzQD_2rTkedOPU-koVTYCvlQ',
    description: '깊이 있는 딥 레드와 소프트 핑크 로즈의 조화로 웅장하면서도 매혹적인 분위기를 연출하는 온화의 대표 시그니처 부케입니다.',
    flowers: ['피아제 로즈', '헤라 장미', '카네이션', '유칼립투스', '스프레이 카네이션'],
    careTips: ['줄기 끝을 사선으로 1cm 잘라 신선한 물에 꽂아주세요.', '직사광선과 에어컨/히터 바람을 피해주세요.', '매일 시원한 물로 교체해주시면 오래 유지됩니다.']
  },
  {
    id: 'pure-white',
    category: 'propose',
    badge: 'Medium / Propose',
    name: '퓨어 화이트',
    subtitle: '순백의 튤립이 전하는 진심',
    priceSmall: 39000,
    priceMedium: 59000,
    priceGrand: 89000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPCXdGmGjuqKKNE2UmrSZGIq0TsEuVCgIBGwvdbwYGbNTnKtCgTdfxneQYZPZGhYJ7TVHDMdl6U-Ky5Pbpgckc-F5mQcWmUV2_GL3XRyY0_H3lCeQw16qPUOdg0ZPg-TQXNl1YK2mwS8tTOft9B4hvUz_HJDY_UuAJvKqsU2sg8FLPtOm5leuCuVYmY5rztXGAXwTh9gZG-haUScqjyWkwWeulifJLUgeE8q4VyroKghGs2VQdlIY27w',
    description: '티없이 맑은 화이트 튤립과 싱그러운 그린 소재가 만나 가장 순수한 고백과 약속의 순간을 밝혀줍니다.',
    flowers: ['네덜란드 수입 화이트 튤립', '스위트피', '화이트 아미초', '레몬트리'],
    careTips: ['튤립은 빛과 온도에 민감하므로 서늘한 곳에 보관하세요.', '물이 너무 많지 않게 얕은 물(3~5cm)에 꽂아주세요.']
  },
  {
    id: 'pastel-breeze',
    category: 'seasonal',
    badge: 'Large / Seasonal',
    name: '파스텔 브리즈',
    subtitle: '부드러운 색감의 프리미엄 장미',
    priceSmall: 42000,
    priceMedium: 65000,
    priceGrand: 92000,
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLvSo_t8xXIKuK-vMWY0k2BTYm7fdWwl1sCul6DTDzYCwbxgeVDIIDu4UNjwgPDKAjOoZMIYBo-KrmfIShDmtzjMJNeJyljFB7_e5mk1dCTNnpdLbjrDH-u7_eYe5m1FXXBtkKGo6jnsiFz8N_skgtImF4xuDM28sl9UfZ2AlWuUU4u8IapjEOnJZ2vL0w_CRyr3kv2bM2hAfOnQxizEBxv1wwuIvItlk07-e0lcA6OxZZGAJBDDlWEvwbo',
    description: '은은한 살구빛과 연보라, 파스텔 톤의 꽃들이 조화롭게 어우러져 따스한 봄바람 같은 포근함을 선사합니다.',
    flowers: ['버터플라이 라넌큘러스', '올포러브 장미', '델피늄', '리시안셔스', '스토크'],
    careTips: ['물속 줄기잎을 제거하여 물의 부패를 방지해주세요.', '화병 세척 시 락스 한 방울을 헹궈 청결을 유지하세요.']
  },
  {
    id: 'eternal-love',
    category: 'propose',
    badge: 'Grand / Propose',
    name: '이터널 러브',
    subtitle: '프로포즈를 위한 압도적 스케일',
    priceSmall: 55000,
    priceMedium: 89000,
    priceGrand: 135000,
    imageUrl: 'https://images.unsplash.com/photo-1523693916903-027d144a2b7d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: '촛불의 로맨틱한 불빛 아래 영원한 사랑을 맹세하는 가장 숭고한 순간을 위해 아낌없이 디자인된 특대형 부케입니다.',
    flowers: ['콜롬비아 수입 장미 50송이', '하노이 라넌큘러스', '은엽수', '더글라스'],
    careTips: ['무게감이 있으므로 바닥이 넓은 묵직한 화병에 담아주세요.', '꽃잎에 직접 분무는 피해주세요.']
  },
  {
    id: 'warm-tangerine',
    category: 'anniversary',
    badge: 'Small / Anniversary',
    name: '웜 탠저린',
    subtitle: '따뜻한 감사의 마음을 담아',
    priceSmall: 39000,
    priceMedium: 59000,
    priceGrand: 85000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKWV8Ct_xk-N3DQI0sOKin6QZWC6fh62hfTk166e9bC6sNdGH2Tc4c8ead7P9rQlElA2AJY6ogSvXyCtMU67UYOQoNxf2YA6QtW0ADAGrsLOZZAAGUMB1h2vQAHaeqwf22hR20lbriaHOwVQg5W4mqusKkyE2sb2OS42PQ13yZr_rDkRiEGyyS-LpzfRcUsaca_O6eumAEGECoNUdTJued-zxNkkSug7AGmKF2HEGNhBl5-rIOCDrpwg',
    description: '생기 넘치는 오렌지와 옐로우 색감의 꽃들로 일상에 싱그러운 에너지를 불어넣는 따스한 큐레이션입니다.',
    flowers: ['메리골드', '오렌지 라넌큘러스', '거베라', '천일홍', '유칼립투스'],
    careTips: ['햇빛이 잘 드는 실내 창가 근처에 두면 더욱 아름답게 피어납니다.', '2~3일마다 물을 갈아주세요.']
  }
];

export const MASTERCLASSES: Masterclass[] = [
  {
    id: 'hand-tied-basic',
    level: 'Beginner',
    title: '핸드타이드 베이직',
    subtitle: '꽃다발의 기본기를 익히고 스파이럴 기법을 배우는 입문 클래스',
    duration: '120 mins',
    price: 80000,
    iconName: 'local_florist',
    description: '꽃을 처음 접하시는 분들을 위한 클래스입니다. 스파이럴(Spiral) 기법으로 풍성하고 자연스러운 꽃다발 형태를 잡는 노하우와 감각적인 포장법을 실습합니다.',
    curriculum: [
      '계절 꽃의 특징 및 컨디셔닝(줄기 다듬기) 방법',
      '스파이럴 핸드타이드 구조의 원리와 실습',
      '온화 시그니처 감성 패키징 및 리본 연출법',
      '사진 촬영 팁 및 완성 작품 포토 타임'
    ],
    included: ['최고급 계절 생화 소재 일체', '원예 가위 및 도구 대여', '웰컴 티 & 디저트', '포장 패키지 및 쇼핑백']
  },
  {
    id: 'centerpiece-vase',
    level: 'Intermediate',
    title: '센터피스 & 화병 꽂이',
    subtitle: '공간을 우아하게 채우는 테이블 센터피스 디자인',
    duration: '150 mins',
    price: 120000,
    iconName: 'yard',
    description: '플로럴 폼 또는 침봉을 활용해 테이블 위 공간을 하나의 정원처럼 연출하는 센터피스 클래스입니다. 비대칭과 선의 흐름을 살리는 고급 프렌치 스타일을 전수합니다.',
    curriculum: [
      '공간에 따른 화기 선정과 식물 배치 밸런스 이론',
      '친환경 플로럴 베이스 세팅 및 고정 기법',
      '자연스러운 높낮이와 그루핑(Grouping) 기법',
      '홈 인테리어 홈스타일링 가이드'
    ],
    included: ['디자이너 세라믹 화병 증정', '프리미엄 수입 생화 소재', '플로리스트 전문 도구 대여', '티 세트 제공']
  },
  {
    id: 'wedding-propose',
    level: 'Special',
    title: '웨딩 & 프로포즈',
    subtitle: '부케와 부토니에, 특별한 날을 위한 하이엔드 스타일링',
    duration: '180 mins',
    price: 180000,
    iconName: 'redeem',
    description: '생애 가장 빛나는 순간을 스스로 완성해보는 스페셜 클래스입니다. 웨딩 드레스 라인과 체형에 맞춘 맞춤형 부케 제작과 신랑 부토니에 제작을 진행합니다.',
    curriculum: [
      '웨딩 콘셉트 무드보드 구성 및 꽃 컬러 셀렉션',
      '오트쿠튀르 부케 제작 테크닉 (라운드/내추럴 드롭)',
      '신랑 부토니에(Boutonniere) 세밀 와이어링 기법',
      '웨딩 당일 생화 신선도 유지 관리 팁'
    ],
    included: ['수입 특수 장미 및 레어 플라워', '실크 리본 & 전용 부케 박스', '1:1 프라이빗 밀착 지도', '스튜디오 기념 촬영본 제공']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: '김*현 고객님',
    initials: 'KIM',
    item: '이터널 러브 (Grand)',
    rating: 5,
    content: '"프로포즈를 위해 상담을 받았는데, 제 이야기를 들으시고 꽃의 의미부터 색감까지 세밀하게 추천해주셨어요. 덕분에 완벽한 하루를 보냈습니다. 정말 감사합니다."'
  },
  {
    id: 'rev-2',
    author: '이*아 고객님',
    initials: 'LEE',
    item: '센터피스 클래스',
    rating: 5,
    content: '"원데이 클래스를 들었는데, 꽃을 다루는 방법부터 공간을 꾸미는 팁까지 너무 친절하게 알려주셔서 힐링되는 시간이었어요. 스튜디오 분위기도 너무 예쁩니다."'
  },
  {
    id: 'rev-3',
    author: '박*진 고객님',
    initials: 'PARK',
    item: '웜 탠저린 (Medium)',
    rating: 5,
    content: '"부모님 결혼기념일 선물로 주문했어요. 평소에 보던 촌스러운 꽃바구니가 아니라, 정말 고급스럽고 우아한 색감이어서 부모님이 너무 좋아하셨습니다."'
  },
  {
    id: 'rev-4',
    author: '정*우 고객님',
    initials: 'JUNG',
    item: '파스텔 브리즈 (Large)',
    rating: 5,
    content: '"기념일마다 꽃을 사는데, 온화의 꽃은 꽃잎 하나하나 신선도가 다르고 포장 감성까지 완벽합니다. 아내가 꽃 받고 너무 행복해했어요."'
  },
  {
    id: 'rev-5',
    author: '최*민 고객님',
    initials: 'CHOI',
    item: '핸드타이드 베이직 클래스',
    rating: 5,
    content: '"똥손이라 걱정했는데 강사님께서 기초 스파이럴 기법부터 차근차근 알려주셔서 멋진 꽃다발을 완성할 수 있었어요! 친구들에게 자랑 많이 했습니다."'
  },
  {
    id: 'rev-6',
    author: '한*영 고객님',
    initials: 'HAN',
    item: '퓨어 화이트 (Medium)',
    rating: 5,
    content: '"배송 서비스로 받았는데 꽃 상처 하나 없이 신선하게 잘 도착했습니다. 동봉해주신 캘리그라피 카드 글씨도 너무 품격있었습니다."'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '당일 예약 및 픽업이 가능한가요?',
    answer: '최상의 퀄리티를 위해 최소 2-3일 전 예약을 권장드립니다. 당일 주문의 경우 스튜디오에 준비된 꽃의 컨디션에 따라 가능 여부가 달라지므로 카카오톡 채널로 별도 문의 부탁드립니다.'
  },
  {
    id: 'faq-2',
    question: '원하는 특정 꽃이나 색상으로 커스텀이 되나요?',
    answer: '네, 고객님의 취향에 맞춘 커스텀 오더가 가능합니다. 특정 꽃을 원하실 경우 시장 상황에 따라 수급이 필요하므로 최소 5일 전 예약해주시면 최대한 반영하여 디자인해 드립니다.'
  },
  {
    id: 'faq-3',
    question: '꽃 배달(퀵 서비스)이 가능한 지역은 어디인가요?',
    answer: '서울 전 지역 및 경기 일부 지역에 한해 차량 퀵 서비스를 통해 안전하게 배송해 드립니다. 거리에 따라 배송비가 차등 부과되며, 파손 위험으로 오토바이 퀵은 진행하지 않습니다.'
  },
  {
    id: 'faq-4',
    question: '원데이 클래스 수강 인원은 어떻게 되나요?',
    answer: '더욱 세심한 티칭을 위해 1:1 프라이빗 클래스 혹은 최대 4인의 소수 정예 그룹 클래스로만 운영됩니다. 프라이빗 클래스는 원하는 시간과 커리큘럼 조정이 가능합니다.'
  }
];
