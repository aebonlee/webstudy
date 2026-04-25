# Changelog

## [2026-04-25] ProfileCompleteModal, PaymentNudgePopup AuthContext 연동

### 수정 내용

#### 1. ProfileCompleteModal AuthContext 연동
- 기존 `src/components/ProfileCompleteModal.tsx` 파일이 미연동 상태였음
- AuthContext에 import 및 프로필 로딩 로직 추가
- `needsProfileCompletion` 조건: 로그인 + 프로필 존재 + 이름 미입력 시 모달 표시

#### 2. PaymentNudgePopup AuthContext 연동
- 기존 `src/components/PaymentNudgePopup.tsx` 파일이 미연동 상태였음
- AuthContext에 import 및 JSX 렌더 추가
- 프로필 입력 완료 후에만 결제 팝업 표시 (`!needsProfileCompletion` 조건)
- siteSlug: `"webstudy"` 설정

#### 3. AuthContext 프로필 로딩 로직 추가
- `_userProfile` 상태 + `_loadUserProfile` 함수 추가
- `refreshProfile` 콜백으로 모달 완료 후 프로필 갱신
- `useEffect`로 로그인 시 자동 프로필 로딩

### 수정 파일
| 파일 | 변경 |
|------|------|
| `src/context/AuthContext.tsx` | ProfileCompleteModal/PaymentNudgePopup import, 프로필 로딩 로직, JSX 렌더 추가 |

### 빌드 확인
- `npm run build` 성공
- GitHub Pages 배포 완료 (commit: `a4c36f8`)

---

## [2026-03-26] Lazy Loading, ErrorBoundary, BrowserRouter 전환

### 수정 내용

#### 1. Lazy Loading 적용
- 8개 페이지 컴포넌트에 `React.lazy()` + `Suspense` 적용
- 초기 번들 크기 감소: 페이지별 별도 chunk 생성
- Loading fallback 컴포넌트 추가 (스피너 + "Loading..." 메시지)

#### 2. ErrorBoundary 추가
- `main.jsx`에 ErrorBoundary 클래스 컴포넌트 추가
- 런타임 에러 시 에러 메시지 + Reload 버튼 표시
- 앱 전체 크래시 방지

#### 3. HashRouter → BrowserRouter 전환
- SEO 개선을 위해 `/#/path` → `/path` 전환
- GitHub Pages SPA 지원을 위한 `public/404.html` 리다이렉트 추가
- `index.html`에 경로 복원 스크립트 추가

#### 4. CI/CD Node.js 업그레이드
- deploy.yml: `node-version: '20'` → `'22'`

### 수정 파일
| 파일 | 변경 |
|------|------|
| `src/App.jsx` | lazy imports, Suspense, LoadingFallback |
| `src/main.jsx` | HashRouter→BrowserRouter, ErrorBoundary 추가 |
| `public/404.html` | 신규 — GitHub Pages SPA 리다이렉트 |
| `index.html` | SPA 경로 복원 스크립트 추가 |
| `src/styles/global.css` | `@keyframes spin` 추가 |
| `.github/workflows/deploy.yml` | Node.js 20→22 |
