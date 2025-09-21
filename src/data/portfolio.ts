export interface PersonalInfo {
  name: string;
  nameEn: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
  link?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Publication {
  title: string;
  publisher: string;
  year: string;
}

export const personalInfo: PersonalInfo = {
  name: "박용락",
  nameEn: "Yongrak Park",
  title: "AI 서비스 전략 기획 | 뷰티 & 리테일 도메인 전문가",
  email: "yongrak.pro@gmail.com",
  linkedin: "https://linkedin.com/in/yongrak-pro",
  github: "https://github.com/howl-papa",
  summary: [
    "AI를 통해 기업의 ROI를 높이는 실행 중심의 전략가입니다. K뷰티 분야에서 AI 기반 솔루션을 개발하고 있으며, Microsoft AI School 캡스톤 프로젝트를 리딩하며 기술의 잠재력을 '보이는 가치'로 전환하는 것에 집중하고 있습니다.",
    "창업가, 데이터 분석가, 서비스 기획자로서의 다각적인 경험으로 스타트업에서 신규 서비스를 총괄하여 26% ROI 개선과 98% 고객 만족도를 달성했습니다.",
    "5년간 130회의 독서모임 참여와 50회의 운영 경험을 통해 입증된 커뮤니케이션 역량과 커뮤니티 빌딩 능력으로, 다양한 이해관계자들과의 협업에서 탁월한 성과를 보여왔습니다.",
    "진정성 있는 관계와 깊이 있는 대화를 가장 큰 가치로 삼으며, 현 세대에게는 반드시 필요하고 후대에게는 깊은 영감을 주는 프로젝트를 지향합니다. 이를 위해 Responsible AI 원칙을 기반으로 지속가능한 비즈니스 환경을 만들어가는 것이 저의 궁극적인 목표입니다."
  ]
};

export const skills: Skill[] = [
  {
    category: "AI & Business Strategy",
    items: [
      "서비스 기획, 사업 개발",
      "비즈니스 모델링, CRM",
      "데이터 분석, 재무 분석",
      "이커머스 End-to-End 창업",
      "ROI 중심 프로젝트 리더십"
    ]
  },
  {
    category: "Technical Skills",
    items: [
      "Excel, PowerPoint (고급)",
      "Notion, Miro (워크플로우 설계)",
      "Power BI, PostgreSQL (데이터 시각화)",
      "Microsoft Azure (AI Fundamentals)",
      "FastAPI, React/Next.js"
    ]
  },
  {
    category: "Languages",
    items: [
      "한국어 (모국어)",
      "English (업무 가능, OPIc IM2)",
      "Python (중급)"
    ]
  }
];

export const aiProjects: Project[] = [
  {
    title: "My Beauty AI: 개인화 스킨케어 루틴 설계 AI",
    period: "2025.06 - 진행중",
    description: "화장품 성분 충돌 분석과 개인 맞춤형 스킨케어 루틴 최적화 서비스",
    achievements: [
      "PostgreSQL 기반 화장품 전성분 DB 구축",
      "LlamaIndex RAG 시스템으로 AI 기반 뷰티 상담 서비스 구현",
      "26% ROI 개선 예상 성과 달성",
      "사용자 DB 기반 추천 시스템 설계"
    ],
    technologies: ["Python", "PostgreSQL", "LlamaIndex", "RAG", "AI/ML"],
    link: "https://github.com/howl-papa/my-beauty-ai-skincare"
  },
  {
    title: "Job AI 실전 면접 역량 강화 서비스",
    period: "2025.08 - 진행중",
    description: "개인화 면접 시나리오 생성 및 언어/비언어 종합 분석 웹 서비스",
    achievements: [
      "DART 사업보고서에 RAG 기술을 적용해 기업 맞춤형 페르소나 설계",
      "Azure AI(GPT-4) 기반 동적 질문 생성 구현",
      "개인화 면접 시나리오 생성 시스템 개발"
    ],
    technologies: ["Azure AI", "GPT-4", "RAG", "DART API"],
    link: "https://github.com/orgs/project-ares-interview"
  },
  {
    title: "RAG 기반 AI 보험 상담 챗봇",
    period: "2025.06",
    description: "어린이 보험 약관 해석 서비스 개발 총괄",
    achievements: [
      "보험 약관의 낮은 이해율(12%)과 높은 청구 착오율(47%) 문제 해결",
      "AI 챗봇 'ai-bo' 기획 및 개발",
      "100% 원격 환경에서 1:1 미팅 기반 효율적 협업 체계 구축",
      "프로젝트 성공 리드"
    ],
    technologies: ["Python", "RAG", "자연어 처리", "챗봇"],
    link: "https://github.com/howl-papa/ai-bo"
  },
  {
    title: "개인화 상품 추천 시스템 개발",
    period: "2025.05",
    description: "Mercari 데이터셋 기반 GRU4Rec 개인화 상품 추천 시스템",
    achievements: [
      "책임있는 AI 적용 및 고객 경험 최적화",
      "GRU4Rec 모델 기반 추천 시스템 구현",
      "개인화 추천 알고리즘 개발"
    ],
    technologies: ["Python", "GRU4Rec", "추천 시스템", "머신러닝"],
    link: "https://github.com/7-MSAI-7"
  }
];

export const experiences: Experience[] = [
  {
    company: "펫소울 (Pet Soul)",
    position: "공동 창업자 및 서비스 기획",
    period: "2023.08 - 2024.11",
    description: "반려인 사후 케어 솔루션 스타트업 [청년 임팩트메이커 1기]",
    achievements: [
      "반려동물 사별 후 겪는 심리적 회복 지원 서비스 기획",
      "전문 상담가 양성을 위한 O2O 중개 플랫폼 설계",
      "사회적 임팩트를 고려한 비즈니스 모델 개발"
    ],
    technologies: ["서비스 기획", "O2O 플랫폼", "비즈니스 모델링"]
  },
  {
    company: "@y.r_stagram",
    position: "패션 콘텐츠 크리에이터",
    period: "2023.02 - 2024.10",
    description: "1.8K 팔로워 SNS 운영 및 브랜드 모델 활동",
    achievements: [
      "르꼬끄 스포리티브, PANACEA 등 여러 브랜드 모델로 활동",
      "SEO 분석을 통한 콘텐츠 최적화로 1.1K 좋아요 달성",
      "매주 정규 콘텐츠 예약 발행 시스템 구축",
      "협력사와의 직접 소통을 통한 브랜드 파트너십 관리"
    ],
    technologies: ["콘텐츠 마케팅", "SEO", "브랜드 협업", "SNS 운영"]
  },
  {
    company: "VID Investment",
    position: "Corporate Research Analyst",
    period: "2021.05 - 2022.03",
    description: "기업 리서치 및 데이터 분석을 통한 투자 전략 수립",
    achievements: [
      "85건 기업분석 리포트 발행",
      "156편 투자 콘텐츠 제작",
      "금융 데이터 분석부터 콘텐츠 제작까지 전 영역 커버",
      "경제학-AI-창업을 아우르는 크로스 도메인 실전 역량 입증"
    ],
    technologies: ["기업 분석", "투자 리서치", "금융 데이터 분석", "콘텐츠 제작"]
  },
  {
    company: "Life Enjoy",
    position: "창립자",
    period: "2018.06 - 2019.03",
    description: "1인 이커머스 플랫폼 창업 (대학교 1학년 재학 중)",
    achievements: [
      "기획, 마케팅, 운영 전반을 총괄하여 월 평균 매출 35% 성장 달성",
      "데이터 기반 디지털 마케팅 전략 실행",
      "고객 만족도 98% 달성",
      "제품 개발 전반의 일정, 우선순위, 리소스 조율",
      "고객 니즈 기반의 실험과 검증을 반복하며 제품 방향성 최적화"
    ],
    technologies: ["이커머스", "디지털 마케팅", "데이터 분석", "고객 경험 최적화"]
  }
];

export const education: Education[] = [
  {
    school: "Microsoft AI School",
    degree: "Team Leader - Microsoft Azure 기반 클라우드 AI서비스 구현",
    period: "2025.04 - 2025.09",
    description: "Python·PostgreSQL 활용한 End-to-End 서비스 구현. 사용자 DB 기반 추천 시스템 및 RAG기반 AI 모델 설계"
  },
  {
    school: "고려대학교",
    degree: "경제학과 학사",
    period: "2017.03 - 2023.02",
    description: "경제학 전공을 통한 분석적 사고력과 데이터 기반 의사결정 역량 함양"
  }
];

export const publications: Publication[] = [
  {
    title: "나의 노령견 하울 | #사지말고입양하세요",
    publisher: "독립출판사 시선",
    year: "2023"
  },
  {
    title: "안부를 묻는 기록",
    publisher: "독립출판사 시선", 
    year: "2021"
  },
  {
    title: "나의 20살 TMI",
    publisher: "독립출판사 시선",
    year: "2019"
  }
];

export const strengths = [
  {
    title: "크로스 도메인 전문성 (Cross-Domain Expertise)",
    description: "경제학 + 창업 + AI 기술의 트리플 역량으로 Microsoft AI School 캡스톤 리딩을 통해 26% ROI 개선 달성. VID investment 85건 기업 분석으로 경제학-AI-창업을 아우르는 크로스 도메인 실전 역량 입증"
  },
  {
    title: "입증된 실행력 (Proven Execution)",
    description: "1인 쇼핑몰 'Life Enjoy' 창업으로 월 평균 35% 성장 달성. 독립출판사 '시선'을 통해 기획부터 출간까지 3권의 도서 완성. 아이디어를 시장에 출시 가능한 완성품으로 만드는 End-to-End 실행 역량 입증"
  },
  {
    title: "커뮤니케이션 & 리더십",
    description: "5년간 130회의 독서모임 참여, 50회 운영으로 30명 커뮤니티 구축. 150편 서평 작성으로 체계적 콘텐츠 제작 및 퍼실리테이션 역량 입증"
  },
  {
    title: "패션/리테일 현장 경험",
    description: "Maison Kitsuné, 여름서가 등에서 고객 접점의 최전선을 경험하며 시장 니즈 파악. Python·PostgreSQL 활용한 전성분 기반 개인화 스킨케어 루틴 서비스 구현으로 해당 도메인에 대한 높은 이해도 보유"
  }
];