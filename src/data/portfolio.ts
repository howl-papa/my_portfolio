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

export const personalInfo: PersonalInfo = {
  name: "박용락",
  nameEn: "Yongrak Park",
  title: "AI 서비스 전략 기획 | 뷰티 & 리테일 도메인 전문가",
  email: "yongrak.pro@gmail.com",
  linkedin: "https://linkedin.com/in/yongrak-pro",
  github: "https://github.com/howl-papa",
  summary: [
    "AI를 통해 기업의 ROI를 높이는 실행 중심의 전략가입니다. K뷰티 분야에서 AI 기반 솔루션을 개발하고 있으며, Microsoft AI School 캡스톤 프로젝트를 리딩하며 기술의 잠재력을 '보이는 가치'로 전환하는 것에 집중하고 있습니다.",
    "창업가, 데이터 분석가, 서비스 기획자로서의 다각적인 경험으로 스타트업에서 신규 서비스를 총괄하여 900% QoQ 매출 성장과 37% 고객 유지율과 같은 가시적인 성과를 이끌어냈습니다.",
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
      "Power BI, Postgresql (데이터 시각화)",
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
    period: "2024.09 - 진행 중",
    description: "사용자의 피부 타입과 고민을 분석하여 맞춤형 스킨케어 루틴을 제안하는 AI 서비스",
    achievements: [
      "FastAPI 기반 백엔드 개발 (OpenAI GPT-4, RAG 파이프라인)",
      "Next.js 기반 프론트엔드 구현",
      "개인정보 보호를 위한 로컬 데이터 처리 시스템 설계",
      "Microsoft AI School 캡스톤 프로젝트 팀 리딩"
    ],
    technologies: ["Python", "FastAPI", "OpenAI GPT-4", "Next.js", "RAG", "Vector DB"]
  },
  {
    title: "동대문 패션 트렌드 분석 AI 시스템",
    period: "2024.07 - 2024.08",
    description: "동대문 패션 데이터를 활용한 트렌드 예측 및 상품 기획 지원 시스템",
    achievements: [
      "웹 크롤링을 통한 패션 데이터 수집 자동화",
      "트렌드 키워드 추출 및 시각화 대시보드 구현",
      "상품 기획자를 위한 인사이트 리포트 자동 생성"
    ],
    technologies: ["Python", "BeautifulSoup", "Pandas", "Matplotlib", "Streamlit"]
  },
  {
    title: "챗봇 기반 고객 상담 시스템",
    period: "2024.05 - 2024.06",
    description: "자연어 처리를 활용한 스마트 고객 상담 챗봇 개발",
    achievements: [
      "고객 문의 유형 자동 분류 (95% 정확도)",
      "상담 응답 시간 70% 단축",
      "고객 만족도 15% 향상"
    ],
    technologies: ["Python", "LangChain", "OpenAI API", "FastAPI"]
  }
];

export const experiences: Experience[] = [
  {
    company: "스타트업 A",
    position: "서비스 기획팀장",
    period: "2023.01 - 2024.08",
    description: "신규 서비스 기획 및 런칭을 총괄하며, 데이터 기반 의사결정을 통해 비즈니스 성과 달성",
    achievements: [
      "신규 서비스 기획 및 출시로 900% QoQ 매출 성장 달성",
      "고객 유지율 37% 달성을 통한 안정적 수익 구조 구축",
      "데이터 분석 기반 서비스 개선으로 사용자 만족도 25% 향상",
      "크로스 기능팀 협업으로 개발 리드타임 40% 단축"
    ],
    technologies: ["Excel", "Power BI", "SQL", "Notion", "Figma"]
  },
  {
    company: "이커머스 스타트업",
    position: "창업자 & CEO",
    period: "2022.03 - 2022.12",
    description: "K뷰티 이커머스 플랫폼 창업 및 운영",
    achievements: [
      "0→1 단계 사업 기획 및 실행",
      "브랜드 파트너십 구축 (15개 브랜드)",
      "월 평균 매출 500만원 달성",
      "온라인 마케팅 ROI 최적화 (ROAS 400%)"
    ],
    technologies: ["Shopify", "Google Analytics", "Facebook Ads", "Kakao Business"]
  },
  {
    company: "전자상거래 컨설팅 회사",
    position: "데이터 분석가",
    period: "2021.06 - 2022.02",
    description: "고객사의 이커머스 성과 분석 및 개선 전략 수립",
    achievements: [
      "고객사 매출 데이터 분석 및 인사이트 도출",
      "전환율 개선 프로젝트로 평균 15% 성과 향상",
      "자동화된 리포팅 시스템 구축으로 업무 효율성 60% 개선"
    ],
    technologies: ["Python", "SQL", "Tableau", "Google Analytics"]
  }
];

export const education: Education[] = [
  {
    school: "Microsoft AI School",
    degree: "AI 전문가 과정",
    period: "2024.03 - 2024.09",
    description: "Azure AI 서비스 활용 및 생성형 AI 솔루션 개발"
  },
  {
    school: "○○대학교",
    degree: "경영학과 학사",
    period: "2017.03 - 2021.02",
    description: "마케팅 및 데이터 분석 전공"
  }
];

export const strengths = [
  {
    title: "크로스 도메인 전문성",
    description: "AI 기술과 비즈니스 전략을 연결하는 독특한 관점으로, 기술의 잠재력을 실제 비즈니스 가치로 전환하는 능력"
  },
  {
    title: "실행력과 성과 중심",
    description: "아이디어에서 실행까지, 그리고 성과 측정까지 전 과정을 체계적으로 관리하여 가시적인 결과를 만들어내는 능력"
  },
  {
    title: "커뮤니케이션 & 리더십",
    description: "5년간의 독서모임 운영 경험을 통해 검증된 소통 능력과 다양한 이해관계자들과의 협업 역량"
  },
  {
    title: "지속가능한 관점",
    description: "단기적 성과뿐만 아니라 장기적 비전과 윤리적 가치를 고려한 Responsible AI 기반 의사결정"
  }
];