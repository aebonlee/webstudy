# 최종 개발일지 - Vibe Backend Study (2026-03-15)

> 작성일: 2026-03-15
> 배포 URL: https://webstudy.dreamitbiz.com/
> GitHub: https://github.com/aebonlee/webstudy

---

## 프로젝트 개요

바이브코딩에 필요한 백엔드 지식을 체계적으로 학습할 수 있는 React 기반 교육 플랫폼.
https://html.dreamitbiz.com/ 디자인을 참고하여 동일한 UX/UI 품질로 구축.

---

## 기술 스택

| 분류 | 기술 | 버전 |
|------|------|------|
| 프레임워크 | React | 19.2.0 |
| 빌드 도구 | Vite | 7.3.1 |
| 라우팅 | React Router DOM (HashRouter) | 7.13.1 |
| 아이콘 | React Icons (Feather Icons) | 5.6.0 |
| 스타일링 | CSS Variables + Custom CSS | - |
| OG 이미지 생성 | @napi-rs/canvas | 0.1.96 |
| 배포 | GitHub Pages (gh-pages 브랜치) | - |
| CI/CD | GitHub Actions (peaceiris/actions-gh-pages@v4) | - |
| 도메인 | webstudy.dreamitbiz.com (CNAME) | - |

---

## 프로젝트 구조

```
D:\webstudy\
├── index.html                    # 메인 HTML (OG 메타태그, 파비콘)
├── vite.config.js                # Vite 설정 (base: '/')
├── package.json                  # 의존성 관리
├── public/
│   ├── favicon.svg               # 사이트 파비콘 (VB Study)
│   ├── dreamit-logo.svg          # DreamIT Biz 로고
│   ├── og-image.png              # OG 미리보기 이미지 (1200x630 PNG)
│   ├── og-image.svg              # OG 이미지 원본 (SVG)
│   └── CNAME                     # 커스텀 도메인 설정
├── scripts/
│   └── generate-og-image.mjs     # OG 이미지 PNG 생성 스크립트
├── .github/workflows/
│   └── deploy.yml                # GitHub Actions 배포 워크플로우
├── Dev_md/
│   ├── PLAN.md                   # 프로젝트 계획서
│   ├── DEVLOG_2026-03-07.md      # 개발일지 (Phase 1~2)
│   ├── DEVLOG_FINAL_2026-03-07.md # 최종 개발일지 (03-07)
│   └── DEVLOG_FINAL_2026-03-15.md # 최종 개발일지 (본 문서)
└── src/
    ├── main.jsx                  # 엔트리포인트 (HashRouter)
    ├── App.jsx                   # 라우터, 레이아웃 (ScrollToTop)
    ├── context/
    │   └── ThemeContext.jsx       # 전역 상태 (테마/컬러/다크모드)
    ├── components/
    │   ├── Navbar.jsx            # 글라스모피즘 네비게이션
    │   ├── Footer.jsx            # 3컬럼 푸터 (로고, 링크, 연락처)
    │   ├── Hero.jsx              # 히어로 섹션
    │   ├── Card.jsx              # 학습 카테고리 카드
    │   ├── CodeBlock.jsx         # 코드 블록 (복사 기능)
    │   ├── SearchModal.jsx       # 검색 모달 (Ctrl+K)
    │   └── MobileDrawer.jsx      # 모바일 슬라이드 메뉴
    ├── pages/
    │   ├── Home.jsx              # 메인 (카테고리 + 로드맵)
    │   ├── BackendBasics.jsx     # 백엔드 기초 (6토픽)
    │   ├── GitHubGuide.jsx       # GitHub 활용 (7토픽)
    │   ├── DatabaseGuide.jsx     # 데이터베이스 (8토픽)
    │   ├── DeployGuide.jsx       # 배포 가이드 (5토픽)
    │   ├── QnA.jsx               # FAQ 아코디언 (8개)
    │   └── Education.jsx         # 교육과정 (4단계 + 문의)
    ├── data/
    │   └── learningData.js       # 학습 콘텐츠 데이터
    └── styles/
        └── global.css            # 전체 디자인 시스템
```

---

## 커밋 히스토리

| 커밋 | 내용 |
|------|------|
| `af476c8` | Initial commit |
| `feaf88c` | Create CNAME |
| `035f991` | feat: 바이브코딩 백엔드 학습 사이트 초기 구축 |
| `781a43f` | merge: 원격 저장소 병합 및 커스텀 도메인 설정 |
| `e59b95e` | fix: CNAME을 public 폴더에 추가하여 빌드 시 dist에 포함 |
| `b8791f0` | fix: gh-pages 브랜치 배포 방식으로 변경 |
| `0bbfe07` | feat: Footer 실데이터 반영 및 Family Site 드롭다운 추가 |
| `e37ba75` | feat: 교육과정 페이지에 교육 문의 연락처 박스 추가 |
| `edc19ec` | feat: 푸터에 DreamIT Biz 로고 추가 |
| `7eb7371` | style: 푸터 Quick Links를 2열 그리드로 변경 |
| `53b9de7` | feat: 파비콘을 Vite 기본에서 VB Study 로고로 변경 |
| `0f4e652` | style: DreamIT Biz 로고 자간 조정 및 띄어쓰기 명확화 |
| `b1e6a87` | fix: DreamIT Biz 로고 자간 겹침 해결 및 띄어쓰기 수정 |
| `8741d00` | fix: DreamIT Biz 로고를 SVG에서 텍스트 방식으로 변경 |

---

## Phase 3: OG 메타태그 개선 및 이미지 리뉴얼 (2026-03-15)

### 11. OG 메타태그 점검 및 수정

**문제점 발견:**
- `og:image`가 SVG 형식 → 카카오톡, Facebook, Twitter 등 주요 SNS에서 미지원
- `og:image:width`, `og:image:height` 누락 → 크롤러 렌더링 실패 가능
- SVG 내 `font-family: sans-serif`로 지정 → 한글 폰트 미임베딩으로 글자 깨짐

**수정 내역 (index.html):**
```html
<!-- 변경 전 -->
<meta property="og:image" content="https://webstudy.dreamitbiz.com/og-image.svg" />

<!-- 변경 후 -->
<meta property="og:image" content="https://webstudy.dreamitbiz.com/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

Twitter Card 이미지도 동일하게 `.svg` → `.png`로 변경.

### 12. OG 이미지 PNG 생성 시스템 구축

**스크립트:** `scripts/generate-og-image.mjs`
**사용 패키지:** `@napi-rs/canvas` (Node.js Canvas, Skia 기반)
**시스템 폰트:** 맑은 고딕 (C:/Windows/Fonts/malgun.ttf, malgunbd.ttf)

`node scripts/generate-og-image.mjs` 실행으로 `public/og-image.png` 자동 생성.

### 13. OG 이미지 디자인 리뉴얼

**1차 개선 — 컬러 팔레트 & 효과 매칭:**

| 항목 | 이전 (SVG) | 개선 후 |
|------|-----------|---------|
| 그라디언트 | 2색 단순 대각선 | 3색 (`#002E8A → #0046C8 → #4A8FE7`) 135deg |
| 장식 원 | 2~3개, 투명도 0.04~0.08 | 5개, 투명도 0.05~0.15 (사이트 hero 수준) |
| 배경 효과 | 없음 | 그리드 패턴 + 플로팅 도트 + 글로우 |
| 태그 표시 | `·` 연결 텍스트 | 개별 pill 버튼 스타일 |
| 구분선 | 단색 직선 | 양쪽 페이드아웃 그라디언트 |
| 하단 라인 | 없음 | 브랜드 그라디언트 악센트 라인 |

**2차 개선 — JavaScript/개발자 시각 효과 추가:**

| 효과 | 설명 |
|------|------|
| Constellation 네트워크 | 35개 노드 + 근접 노드 간 연결선 (200px 이내) |
| 노드 글로우 | 각 노드마다 radialGradient 발광 효과 |
| 코드 스니펫 (좌측) | `express()`, `db.query()`, `res.json()` 등 7줄 |
| 코드 스니펫 (우측) | `supabase`, `docker`, `JWT.verify()` 등 6줄 |
| 터미널 창 | macOS 스타일 (traffic lights + build/deploy 명령어) |
| 코드 브래킷 장식 | `{ }`, `</` 대형 모노스페이스 문자 |
| 타이틀 다층 글로우 | 3단 발광 레이어 + 중심 radialGradient |
| 구분선 다이아몬드 | 중앙 45도 회전 사각형 장식 |
| Pill 그라디언트 보더 | 블루 → 화이트 그라디언트 테두리 |
| 비네트 효과 | 가장자리 어둡게 → 중앙 밝게 |
| 상하단 엣지 라인 | 빛나는 악센트 라인 |

**기술 구현:**
- `seed` 기반 의사난수로 재현 가능한 노드 배치 (seed=42)
- `roundRect()` 헬퍼 함수로 터미널 창 둥근 모서리
- `globalAlpha` 레이어링으로 코드 스니펫 은은한 배경 효과

---

## OG 메타태그 최종 상태

```html
<!-- Open Graph -->
<meta property="og:url" content="https://webstudy.dreamitbiz.com/" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Vibe Backend Study - 바이브코딩 백엔드 학습" />
<meta property="og:description" content="바이브코딩에 필요한 백엔드 지식, GitHub 활용, Supabase, Render.com 등 종합 학습 사이트. 서버, API, 데이터베이스, 배포까지 한 번에!" />
<meta property="og:image" content="https://webstudy.dreamitbiz.com/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Vibe Backend Study" />
<meta property="og:locale" content="ko_KR" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Vibe Backend Study - 바이브코딩 백엔드 학습" />
<meta name="twitter:description" content="바이브코딩에 필요한 백엔드 지식, GitHub 활용, Supabase, Render.com 등 종합 학습 사이트" />
<meta name="twitter:image" content="https://webstudy.dreamitbiz.com/og-image.png" />
```

---

## 배포 설정

### GitHub Actions 워크플로우 (deploy.yml)
```yaml
- main 브랜치 push 시 자동 실행
- Node.js 20 + npm ci → npm run build
- peaceiris/actions-gh-pages@v4 → gh-pages 브랜치 배포
```

### GitHub Pages 설정
- Source: Deploy from a branch → gh-pages / root
- Custom Domain: webstudy.dreamitbiz.com
- CNAME 파일: public/CNAME에 포함 (빌드 시 dist에 자동 복사)

### SPA 라우팅
- HashRouter 사용 (GitHub Pages에서 SPA 새로고침 404 방지)

---

## 해결한 주요 이슈

1. **GitHub Pages 빈 페이지** → BrowserRouter를 HashRouter로 변경, vite base를 '/'로 수정
2. **gh-pages 배포 실패** → peaceiris/actions-gh-pages@v4로 전환, gh-pages 브랜치 방식 채택
3. **CNAME 유실** → public/CNAME에 배치하여 빌드 시 자동 포함
4. **sub-nav 탭 스크롤 불가** → flex-wrap: wrap으로 변경, 이모지 제거
5. **OG 이미지 미노출** → SVG에서 PNG로 전환, `og:image:width/height` 추가
6. **OG 이미지 한글 깨짐** → `@napi-rs/canvas` + 시스템 한글 폰트(맑은 고딕) 등록으로 해결
7. **DreamIT Biz 로고 자간 겹침** → SVG → 텍스트 방식으로 전환

---

## 기술 결정사항

| 항목 | html 사이트 | webstudy 사이트 | 이유 |
|------|------------|----------------|------|
| 프레임워크 | Vanilla JS | React 19 | 컴포넌트 재사용성, 상태관리 |
| 라우팅 | Hash-based SPA | React Router v7 (HashRouter) | GitHub Pages SPA 호환 |
| 스타일링 | Tailwind CDN + CSS | CSS Variables only | 빌드 최적화, 번들 크기 감소 |
| 상태관리 | 전역 객체 + render() | React Context API | React 패턴 준수 |
| 콘텐츠 | 인라인 데이터 | 분리된 데이터 파일 | 유지보수성 향상 |
| 배포 | 수동 | GitHub Actions 자동 | CI/CD 자동화 |
| OG 이미지 | 수동 SVG | Node.js 스크립트 자동 생성 (PNG) | SNS 호환성, 한글 폰트 보장 |
