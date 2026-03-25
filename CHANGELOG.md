# Changelog

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
