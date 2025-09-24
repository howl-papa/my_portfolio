# 🌐 www.yongrak.pro 도메인 연결 가이드

## 📋 개요

이 가이드는 가비아에서 구매한 도메인 `www.yongrak.pro`를 Cloudflare Pages를 통해 GitHub의 `genspark_ai_developer` 브랜치와 연결하는 방법을 설명합니다.

## 🔧 준비 사항

### 필요한 계정
- ✅ **GitHub 계정**: `howl-papa/my_portfolio` 저장소 접근 권한
- ✅ **Cloudflare 계정**: 무료 플랜으로도 가능
- ✅ **가비아 계정**: `yongrak.pro` 도메인 관리 권한

### 필요한 정보
- **GitHub 저장소**: `howl-papa/my_portfolio`
- **배포 브랜치**: `genspark_ai_developer`
- **도메인**: `www.yongrak.pro`

## 🚀 단계별 설정 방법

### 1️⃣ Cloudflare Pages 프로젝트 생성

#### Cloudflare Dashboard에서:

1. **Pages 메뉴 접속**
   - [Cloudflare Dashboard](https://dash.cloudflare.com) 로그인
   - 좌측 메뉴에서 "Pages" 클릭

2. **새 프로젝트 생성**
   - "Create a project" 클릭
   - "Connect to Git" 선택

3. **GitHub 연결**
   - "GitHub" 선택
   - 권한 승인 후 저장소 선택: `howl-papa/my_portfolio`
   - "Begin setup" 클릭

4. **프로젝트 설정**
   ```
   Project name: yongrak-portfolio
   Production branch: genspark_ai_developer
   Framework preset: Next.js (Static HTML Export)
   Build command: npm run build
   Build output directory: out
   Root directory: / (루트)
   ```

5. **환경 변수 설정** (필요시)
   ```
   NODE_ENV = production
   ```

### 2️⃣ 도메인 연결 방법

#### 방법 A: Cloudflare 네임서버 사용 (권장 ⭐)

1. **가비아에서 네임서버 변경**
   - 가비아 관리콘솔 로그인
   - 도메인 관리 → `yongrak.pro` 선택
   - 네임서버 변경을 클릭
   - Cloudflare 네임서버로 변경:
     ```
     ns1.cloudflare.com
     ns2.cloudflare.com
     ```

2. **Cloudflare에서 DNS 설정**
   - Cloudflare Dashboard → DNS 탭
   - 다음 레코드 추가:
     ```
     Type: CNAME
     Name: www
     Target: yongrak-portfolio.pages.dev
     Proxy: 활성화 (주황색 구름)
     
     Type: A (또는 CNAME)
     Name: @ (apex)
     Target: yongrak-portfolio.pages.dev
     Proxy: 활성화
     ```

#### 방법 B: CNAME 레코드 사용

1. **가비아 DNS 관리에서**
   ```
   호스트명: www
   타입: CNAME  
   값: yongrak-portfolio.pages.dev
   TTL: 3600
   ```

2. **루트 도메인 리다이렉트** (선택사항)
   ```
   호스트명: @
   타입: URL 리다이렉트
   값: https://www.yongrak.pro
   ```

### 3️⃣ Cloudflare Pages에서 커스텀 도메인 추가

1. **프로젝트 설정**
   - Cloudflare Pages → `yongrak-portfolio` 프로젝트
   - "Custom domains" 탭 클릭

2. **도메인 추가**
   - "Set up a custom domain" 클릭
   - 도메인 입력: `www.yongrak.pro`
   - "Continue" 클릭

3. **DNS 확인**
   - Cloudflare가 자동으로 DNS 설정 확인
   - 완료되면 SSL 인증서 자동 발급

### 4️⃣ GitHub Actions 설정

#### GitHub 저장소에서 시크릿 설정:

1. **Settings → Secrets and variables → Actions**

2. **필수 시크릿 추가**
   ```
   CLOUDFLARE_API_TOKEN: [Cloudflare API 토큰]
   CLOUDFLARE_ACCOUNT_ID: [Cloudflare 계정 ID]
   ```

3. **API 토큰 생성 방법**
   - Cloudflare Dashboard → My Profile → API Tokens
   - "Create Token" → "Custom token"
   - 권한 설정:
     ```
     Zone:Zone:Read
     Zone:Page Rules:Edit  
     Account:Cloudflare Pages:Edit
     ```

## 🔍 설정 확인 방법

### DNS 전파 확인
```bash
# DNS 조회 확인
nslookup www.yongrak.pro

# 또는 온라인 도구 사용
# https://www.whatsmydns.net/
```

### SSL 인증서 확인
- 브라우저에서 `https://www.yongrak.pro` 접속
- 주소창의 자물쇠 아이콘으로 SSL 상태 확인

### 배포 상태 확인
- GitHub Actions 탭에서 배포 로그 확인
- Cloudflare Pages Dashboard에서 배포 히스토리 확인

## 📊 현재 프로젝트 설정

### 빌드 설정
```json
{
  "framework": "Next.js",
  "buildCommand": "npm run build", 
  "outputDirectory": "out",
  "nodeVersion": "18",
  "environmentVariables": {
    "NODE_ENV": "production"
  }
}
```

### 🚨 중요: wrangler.toml 파일 사용 금지
- **Cloudflare Pages는 wrangler.toml 파일을 사용하지 않습니다**
- 모든 라우팅과 헤더는 `public/_headers`와 `public/_redirects`로 처리
- Pages 프로젝트에서 wrangler.toml은 배포 오류를 발생시킵니다

### 배포된 파일들
- ✅ `public/CNAME` → www.yongrak.pro
- ✅ `public/_headers` → 보안 헤더 설정
- ✅ `public/_redirects` → URL 리다이렉트 규칙
- ✅ `next.config.js` → Static export 설정
- ✅ `.github/workflows/cloudflare-pages.yml` → 자동 배포

## 🚨 문제 해결

### 일반적인 문제들

1. **DNS 전파 지연**
   - 해결: 24-48시간 대기 (보통 몇 분 내 완료)
   - 확인: `nslookup` 또는 DNS 체크 도구 사용

2. **SSL 인증서 오류**
   - 해결: Cloudflare에서 SSL/TLS 설정을 "Full" 또는 "Full (strict)"으로 변경
   - 확인: 브라우저 개발자 도구에서 네트워크 탭 확인

3. **배포 실패**
   - 해결: GitHub Actions 로그 확인
   - 확인: `npm run build` 로컬에서 테스트

4. **도메인 연결 실패**
   - 해결: Cloudflare Pages에서 "Re-validate domain" 실행
   - 확인: DNS 레코드가 올바른지 점검

### 로그 확인 방법

**GitHub Actions 로그:**
- Repository → Actions 탭 → 최신 workflow 선택

**Cloudflare Pages 로그:**
- Pages Dashboard → yongrak-portfolio → Functions 탭

**브라우저 개발자 도구:**
- F12 → Network 탭 → 페이지 새로고침

## 🎯 성능 최적화

### Cloudflare 설정 최적화

1. **Speed 탭 설정**
   ```
   Auto Minify: HTML, CSS, JS 활성화
   Brotli: 활성화  
   Rocket Loader: 활성화
   ```

2. **Caching 탭 설정**
   ```
   Caching Level: Standard
   Browser Cache TTL: 4 hours
   ```

3. **Security 탭 설정**
   ```
   Security Level: Medium
   Bot Fight Mode: 활성화
   ```

## 📱 모니터링

### 실시간 모니터링 도구

1. **Cloudflare Analytics**
   - 방문자 통계
   - 성능 메트릭
   - 보안 이벤트

2. **GitHub Insights**
   - 저장소 트래픽
   - 배포 빈도

3. **Third-party Tools**
   - Google PageSpeed Insights
   - GTmetrix
   - Lighthouse CI

## 🔄 배포 워크플로우

### 자동 배포 프로세스

1. **코드 수정** → `genspark_ai_developer` 브랜치
2. **Push/PR** → GitHub Actions 트리거
3. **Build** → Next.js Static Export
4. **Deploy** → Cloudflare Pages
5. **Live** → www.yongrak.pro

### 수동 배포 (필요시)
```bash
# 로컬 빌드
npm run build

# Cloudflare CLI 사용 (wrangler)
npx wrangler pages deploy out --project-name=yongrak-portfolio
```

## 📞 지원 및 문의

### 공식 문서
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions](https://docs.github.com/en/actions)

### 추가 도움
- Cloudflare Community Forum
- GitHub Support
- Next.js Discord

---

**✨ 완료 체크리스트**

- [ ] Cloudflare Pages 프로젝트 생성
- [ ] GitHub 저장소 연결
- [ ] 도메인 DNS 설정 (가비아)
- [ ] Cloudflare 커스텀 도메인 추가  
- [ ] GitHub Actions 시크릿 설정
- [ ] SSL 인증서 확인
- [ ] 첫 배포 테스트
- [ ] 성능 및 보안 확인

**🎉 설정 완료 후 www.yongrak.pro로 접속하여 포트폴리오를 확인하세요!**