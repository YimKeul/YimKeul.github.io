import {
  Find,
  FindDog,
  H,
  L,
  Lago,
  MH,
  ToD,
  WearScent,
  WhatAboutThis,
  Yigeyu,
  ChaCha,
  Imscent,
  PerfumeIntroduction,
  StellaMusic,
  Comi,
} from "../images";

const WebData = [
  {
    Img: FindDog,
    Title: "찾아줄개",
    SubTitle: "2023 중심대학 공동해커톤 출품작",
    Desc1: "유사도 검사를 통한 유기견 탐색 및 유기동물 입양 독려 서비스",
    Desc2: "React/Rust/OpenCV",
    IsDeploy: ["github"],
    link: ["https://github.com/team-2-finder"],
  },
  {
    Img: ChaCha,
    Title: "차차렌터카",
    SubTitle: "DataBase Term Project",
    Desc1: "충남대 렌터카 서비스",
    Desc2: "React/MySQL/Axios",
    IsDeploy: ["github"],
    link: ["https://github.com/Yimkeul/ChaChaRentCar"],
  },
  {
    Img: L,
    Title: "L사 기업 과제",
    SubTitle: "DataNetworks 연구실 학부연구생으로 기업 과제 참여",
    Desc1: "요구한 기술을 웹서비스로 사용 가능하게 구현",
    Desc2: "React/FastAPI",
    IsDeploy: ["none"],
    link: [""],
  },
  {
    Img: WhatAboutThis,
    Title: "이거어때",
    SubTitle: "2022기준 대학생 위한 노트북 추천",
    Desc1: "MBTI 유형검사 로직을 활용한 노트북 추천",
    Desc2: "React",
    IsDeploy: ["github", "web"],
    link: [
      "https://github.com/Yimkeul/WhatAboutThis",
      "https://whataboutthis.netlify.app/",
    ],
  },
  {
    Img: Lago,
    Title: "라고 할 때",
    SubTitle: "CNU Prob Junior 출품작",
    Desc1: "비트코인 API를 활용한 코인 실물 계산기",
    Desc2: "React/Spring",
    IsDeploy: ["github", "web"],
    link: [
      "https://github.com/lagohalttae",
      "https://github.com/lagohalttae/regret-FE/blob/develop/README.md",
    ],
  },
];

const MobileData = [
  {
    Img: Find,
    Title: "찾아주",
    SubTitle: "2022 CNU Design Sprint 수상작",
    Desc1: "최저가 양주 검색, 픽업 서비스",
    Desc2: "Flutter",
    IsDeploy: ["github"],
    link: [
      "https://github.com/DesignSprintFindSpirit/DesignSprint_FindSpirit/blob/main/README.md",
    ],
  },
  {
    Img: Yigeyu,
    Title: "이거유",
    SubTitle: "CNU Collathon 수상작",
    Desc1: "대전 지역 분실물 매칭 서비스",
    Desc2: "React-Native",
    IsDeploy: ["github"],
    link: ["https://github.com/2022CollathonTeam8/YiGeoYu"],
  },
  {
    Img: WearScent,
    Title: "WearScent",
    SubTitle: "사용자 패션 맞춤 향수 추천",
    Desc1: "Google Teachable Machine을 활용한 패션 분류",
    Desc2: "React-Native/Firebase/Google Teachable Machine",
    IsDeploy: ["github", "web"],
    link: [
      "https://github.com/YimKeul/2022WP_TermProject-",
      "https://wearscent.netlify.app/",
    ],
  },
  {
    Img: H,
    Title: "H사 MVP",
    SubTitle: "Now Platform인턴 외주작",
    Desc1: "요구사항 MVP 개발",
    Desc2: "React-Native",
    IsDeploy: ["none"],
    link: [""],
  },
  {
    Img: MH,
    Title: "모바일 휴가증",
    SubTitle: "뿜뿜 아이디어 경진대회 수상작",
    Desc1: "장병 모바일 휴가증",
    Desc2: "Andriod Studio",
    IsDeploy: ["none"],
    link: [""],
  },
];

const IosData = [
  {
    Img: StellaMusic,
    Title: "스텔라뮤직",
    SubTitle: '버튜버그룹 "스텔라이브" 뮤직 플레이어',
    Desc1: "AVQueuePlaer를 활용한 뮤직 플레이어, App Store 배포",
    Desc2: "SwiftUI/AVQueuePlayer/Combine/Supabase",
    IsDeploy: ["github", "apple"],
    link: [
      "https://github.com/Yimkeul/StellaMusic",
      "https://apps.apple.com/kr/app/%EC%8A%A4%ED%85%94%EB%9D%BC%EB%AE%A4%EC%A7%81/id6673917863",
    ],
  },
  {
    Img: Comi,
    Title: "코미 Comi",
    SubTitle: "Generative-AI를 활용한 연예인과 영어 회화 학습 어플리케이션",
    Desc1: "졸업 프로젝트",
    Desc2:
      "SwiftUI/AVKit (AVPlayer, AVQueuePlayer)/Supabase/Combine/GeminiAPI/Azura/AppStorage/Alamofire",
    IsDeploy: ["github"],
    link: ["https://github.com/2024-Graduation-Project-Comi/dev_iOS"],
  },
  {
    Img: PerfumeIntroduction,
    Title: "PerfumeIntroduction",
    SubTitle: "향수기초서",
    Desc1: "향수 기초 지식 안내서, 2024 Swift Student Challenge 출품작",
    Desc2: "SwiftUI",
    IsDeploy: ["github"],
    link: ["https://github.com/Yimkeul/PerfumeIntroduction"],
  },
  {
    Img: Imscent,
    Title: "IMSCENT 임센트",
    SubTitle: "사용자 패션 맞춤 향수 추천",
    Desc1: "Google Teachable Machine을 활용한 패션 분류, App Store 배포",
    Desc2: "SwiftUI/MoyaLibrary/Google Teachable Machine/Express.js",
    IsDeploy: ["github", "apple"],
    link: [
      "https://github.com/Yimkeul/IMSCENT_Dev",
      "https://apps.apple.com/kr/app/imscent-%EC%9E%84%EC%84%BC%ED%8A%B8/id6470936905",
    ],
  },
  {
    Img: ToD,
    Title: "투디",
    SubTitle: "지금부터 개발자까지",
    Desc1: "진로 유형 검사 서비스, 개발자 직군별 투두리스트 제공",
    Desc2: "SwiftUI",
    IsDeploy: ["github", "web"],
    link: [
      "https://github.com/orgs/CNUBasicProjectLab/repositories",
      "https://todacc.netlify.app/",
    ],
  },
];

export { IosData, MobileData, WebData };
