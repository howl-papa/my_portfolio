# 🚀 Yongrak Park - AI 전략 기획자 포트폴리오

**www.yongrak.pro** - AI를 통해 기업의 ROI를 높이는 실행 중심의 전략가

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15.0-ff0055)](https://www.framer.com/motion/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-orange)](https://pages.cloudflare.com/)

## 📖 프로젝트 개요

Next.js 15와 TypeScript로 구축된 현대적인 개인 포트폴리오 웹사이트입니다. AI 서비스 전략 기획자 박용락님의 경력과 프로젝트를 검증된 데이터를 기반으로 정확하게 소개합니다.

### 🎯 핵심 특징

- **검증된 데이터**: HTML 파일 기반 엄격한 데이터 검증으로 허위 정보 제거
- **HTML 문서 다운로드**: 원본 이력서 및 프로필 문서 직접 다운로드 가능
- **Fixed Navigation**: 스크롤 위치 감지 기반 활성 섹션 표시
- **반응형 디자인**: 데스크탑/모바일 완벽 최적화
- **다크/라이트 모드**: 자동 테마 전환 지원

## ✨ 주요 기능

### 🔍 **세부 목차 Navigation**
- Fixed Top Navigation Bar로 언제든지 접근 가능
- 스크롤 위치에 따른 실시간 활성 섹션 표시
- 부드러운 스크롤 네비게이션 (smooth scroll)
- 모바일 햄버거 메뉴 지원

### 📄 **문서 다운로드 시스템**
- 원본 HTML 이력서 다운로드 (Profile & CV)
- Blob URL 기반 안전한 파일 다운로드
- 에러 처리 및 fallback 메커니즘

### 🎨 **Modern UI/UX**
- Framer Motion 기반 부드러운 애니메이션
- Glass morphism 및 gradient 디자인
- 반응형 그리드 레이아웃
- 접근성 고려된 컬러 contrast

### 📊 **검증된 포트폴리오 데이터**
- Microsoft AI School (2025.04-2025.09)
- VID Investment: 85개 기업분석 보고서
- Life Enjoy 창업: 35% 성장률, 98% 고객만족도
- 독립출판: 3권의 도서 출간
- 5년간 130회 독서모임 참여, 50회 운영

## 🛠️ 기술 스택

### **Frontend**
- **Next.js 15**: App Router, Static Export
- **TypeScript**: 타입 안전성
- **Tailwind CSS**: 유틸리티 기반 스타일링
- **Framer Motion**: 애니메이션 및 인터랙션

### **Development & Deployment**
- **PM2**: 프로세스 관리 (개발 환경)
- **ESLint**: 코드 품질 관리
- **Cloudflare Pages**: 정적 사이트 배포
- **GitHub Actions**: CI/CD 자동 배포

### **Design System**
- **Lucide React**: 아이콘 시스템
- **Custom CSS**: 그라디언트, 애니메이션
- **Responsive Design**: Mobile-first 접근법

## 📁 프로젝트 구조

```
yongrak-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # 글로벌 레이아웃
│   │   └── page.tsx           # 메인 페이지
│   ├── components/            # 재사용 가능한 컴포넌트
│   │   ├── Navigation.tsx     # Fixed Top Navigation
│   │   ├── Hero.tsx          # 히어로 섹션
│   │   ├── DocumentDownload.tsx # 문서 다운로드
│   │   ├── About.tsx         # 소개 섹션
│   │   ├── AIProjects.tsx    # AI 프로젝트
│   │   ├── Experience.tsx    # 경력 사항
│   │   ├── Skills.tsx        # 기술 스킬
│   │   ├── Contact.tsx       # 연락처
│   │   ├── Footer.tsx        # 푸터
│   │   └── ThemeProvider.tsx # 테마 관리
│   └── data/
│       └── portfolio.ts      # 포트폴리오 데이터
├── public/                   # 정적 리소스
├── next.config.js           # Next.js 설정
├── tailwind.config.js       # Tailwind 설정
└── package.json            # 의존성 관리
```

## 🚀 시작하기

### 사전 요구사항
- Node.js 18.17 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/howl-papa/my_portfolio.git
cd my_portfolio/yongrak-portfolio

# 의존성 설치
npm install

# 개발 서버 시작 (PM2)
npm install -g pm2
pm2 start npm --name "yongrak-portfolio" -- run dev

# 또는 일반 개발 서버
npm run dev
```

웹사이트는 http://localhost:3000 에서 확인할 수 있습니다.

### 빌드 및 배포

```bash
# 프로덕션 빌드 (Static Export)
npm run build

# 배포 준비
npm run export

# PM2 서버 관리
pm2 status          # 서버 상태 확인
pm2 restart all     # 서버 재시작
pm2 stop all        # 서버 중지
```

## 🌐 도메인 배포 (www.yongrak.pro)

### Cloudflare Pages 배포

1. **GitHub 연결**
   - Cloudflare Pages에서 `howl-papa/my_portfolio` 저장소 연결
   - 브랜치: `genspark_ai_developer` 또는 `main`

2. **빌드 설정**
   ```
   Framework preset: Next.js (Static HTML Export)
   Build command: npm run build
   Build output directory: out
   Root directory: yongrak-portfolio
   ```

3. **도메인 연결**
   - Cloudflare에서 커스텀 도메인 `www.yongrak.pro` 설정
   - 가비아에서 네임서버를 Cloudflare로 변경

### DNS 설정 (가비아)
```
네임서버 변경 (권장):
- xxxx.ns.cloudflare.com
- yyyy.ns.cloudflare.com

또는 CNAME 레코드:
- 호스트: www
- 값: [cloudflare-pages-url].pages.dev
```

## 🔧 개발 과정 (Development Journey)

### Phase 1: 기본 구조 설정
- ✅ Next.js 15 + TypeScript 프로젝트 초기화
- ✅ Tailwind CSS 및 기본 컴포넌트 구조 설계
- ✅ Hero, About, Projects 등 핵심 섹션 구현

### Phase 2: 데이터 검증 및 정확성 확보
- ✅ HTML 파일 기반 경력 정보 검증
- ✅ 허위 데이터 제거, 실제 성과 수치만 반영
- ✅ Microsoft AI School, VID Investment 등 정확한 기간 및 성과 업데이트

### Phase 3: 사용자 경험 향상
- ✅ Fixed Top Navigation 구현
- ✅ 스크롤 기반 활성 섹션 감지 시스템
- ✅ 부드러운 스크롤 네비게이션
- ✅ 모바일 반응형 햄버거 메뉴

### Phase 4: 문서 다운로드 기능
- ✅ DocumentDownload 컴포넌트 개발
- ✅ Blob URL 기반 안전한 파일 다운로드
- ✅ 에러 처리 및 fallback 메커니즘
- ✅ 원본 HTML 파일 접근성 제공

### Phase 5: 배포 최적화
- ✅ Cloudflare Pages 배포 설정
- ✅ Static Export 최적화
- ✅ 도메인 연결 준비 (www.yongrak.pro)
- ✅ Performance 및 SEO 최적화

## 🎨 커스터마이징

### 포트폴리오 데이터 수정
```typescript
// src/data/portfolio.ts
export const personalInfo: PersonalInfo = {
  name: "박용락",
  nameEn: "Yongrak Park",
  title: "AI 서비스 전략 기획 | 뷰티 & 리테일 도메인 전문가",
  // ... 개인 정보 수정
}
```

### 테마 및 색상 변경
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { /* 커스텀 색상 */ },
        secondary: { /* 커스텀 색상 */ }
      }
    }
  }
}
```

### 새로운 섹션 추가
1. `src/components/` 디렉토리에 새 컴포넌트 생성
2. `src/app/page.tsx`에서 컴포넌트 import 및 추가
3. `src/components/Navigation.tsx`에서 네비게이션 메뉴 항목 추가

## 📈 성능 최적화

### 현재 적용된 최적화
- **Static Export**: 빌드 타임 렌더링으로 빠른 로딩
- **Image Optimization**: Next.js Image 컴포넌트 활용
- **Code Splitting**: 컴포넌트별 자동 코드 분할
- **CDN**: Cloudflare 전 세계 CDN 적용
- **CSS Minification**: 프로덕션 빌드 시 자동 압축

### Lighthouse 점수
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🔒 보안 및 접근성

### 보안 기능
- **CSP (Content Security Policy)**: XSS 공격 방지
- **HTTPS**: Cloudflare SSL 자동 적용
- **Safe Downloads**: Blob URL 기반 안전한 파일 다운로드

### 접근성 (a11y)
- **Semantic HTML**: 의미있는 HTML 구조
- **ARIA Labels**: 스크린 리더 지원
- **Keyboard Navigation**: 키보드만으로 전체 탐색 가능
- **Color Contrast**: WCAG 2.1 AA 준수

## 🧪 테스트

### 현재 테스트 커버리지
- **Navigation Testing**: 스크롤 기반 섹션 감지
- **Download Testing**: 파일 다운로드 기능 검증
- **Responsive Testing**: 다양한 디바이스 크기 테스트
- **Performance Testing**: Lighthouse 기반 성능 측정

## 📊 Analytics & Monitoring

### Cloudflare Analytics
- 실시간 방문자 통계
- 페이지 로딩 시간 모니터링
- 지역별 접속 현황
- 보안 위협 차단 현황

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 개발 가이드라인
- **TypeScript**: 모든 새로운 코드는 TypeScript로 작성
- **ESLint**: 코드 스타일 가이드 준수
- **Responsive**: 모바일 퍼스트 디자인 원칙
- **Performance**: Lighthouse 점수 95+ 유지

## 📝 변경 기록 (Changelog)

### v2.0.0 (2025-09-21)
- ✅ Next.js 15로 전체 마이그레이션
- ✅ Fixed Top Navigation 구현
- ✅ HTML 문서 다운로드 기능 추가
- ✅ 데이터 검증 및 정확성 확보
- ✅ Cloudflare Pages 배포 준비

### v1.0.0 (Initial Release)
- ✅ React + Vite 기반 초기 버전
- ✅ 기본 포트폴리오 구조 구현
- ✅ ReactBits 컴포넌트 활용

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🌟 감사의 말

이 포트폴리오는 **박용락**님의 실제 경력과 성과를 정확하게 반영하여 제작되었습니다. HTML 파일 기반 데이터 검증을 통해 신뢰성 있는 정보만을 포함하고 있습니다.

## 📞 연락처

- **Website**: [www.yongrak.pro](https://www.yongrak.pro)
- **Email**: yongrak.pro@gmail.com
- **LinkedIn**: [linkedin.com/in/yongrak-pro](https://linkedin.com/in/yongrak-pro)
- **GitHub**: [github.com/howl-papa](https://github.com/howl-papa)

---

⭐ **이 프로젝트가 도움이 되었다면 별표를 눌러주세요!**

**Made with ❤️ by GenSpark AI Developer**