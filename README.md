# 개인 포트폴리오 사이트

React와 TypeScript로 구축된 개인 포트폴리오 웹사이트입니다.

## ✨ 주요 기능

- **ReactBits 컴포넌트 사용**: Card Navigation, Fluid Glass, Dome Gallery
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **3D 갤러리**: 취미 활동을 보여주는 인터랙티브 갤러리
- **Modern UI**: Glass morphism과 부드러운 애니메이션

## 🛠️ 기술 스택

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + ReactBits Components
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Animations**: CSS3 Transitions + Framer Motion

## 📱 페이지 구성

### About Me
- 가치관 & 스토리
- 개인 정보 및 성장 여정

### My Works
- **AI 프로젝트**: 머신러닝, NLP 등 AI 관련 프로젝트
- **창업 (스타트업 실전)**: CTO, Co-founder로서의 경험
- **투자 활동**: AI/ML, Fintech 분야 투자 포트폴리오

### Library
- **독립출판사 시선**: 창작 및 출판 활동
- **봉사활동**: 코딩 교육, 멘토링 등 사회공헌
- **취미부자**: 다양한 취미 활동 (3D 갤러리로 구현)

## 🚀 시작하기

### 설치

```bash
# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
# 개발 서버 시작
npm run dev
```

### 빌드

```bash
# 프로덕션 빌드
npm run build
```

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── reactbits/          # ReactBits 컴포넌트들
│   │   ├── CardNav.tsx
│   │   ├── FluidGlass.tsx
│   │   └── DomeGallery.tsx
│   └── layout/
├── pages/                  # 페이지 컴포넌트들
│   ├── AboutMe.tsx
│   ├── MyWorks.tsx
│   ├── Library.tsx
│   └── HobbiesGallery.tsx
├── App.tsx                 # 메인 앱 + 라우팅
└── main.tsx
```

## 🎨 커스터마이징

### 콘텐츠 수정
- 각 페이지 컴포넌트에서 개인 정보 및 프로젝트 정보를 수정하세요
- `src/pages/HobbiesGallery.tsx`에서 취미 이미지 URL을 실제 이미지로 교체하세요

### 스타일 변경
- `tailwind.config.js`에서 색상 테마를 변경할 수 있습니다
- 각 컴포넌트의 CSS 파일에서 세부 스타일을 조정하세요

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 🤝 기여하기

1. 이 저장소를 Fork하세요
2. 새로운 기능 브랜치를 생성하세요 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/AmazingFeature`)
5. Pull Request를 열어주세요

---

⭐ 이 프로젝트가 도움이 되었다면 별표를 눌러주세요!
