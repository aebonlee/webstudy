# 최종 개발일지 - Vibe Backend Study

> 작성일: 2026-03-07
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
│   ├── og-image.svg              # OG 미리보기 이미지
│   └── CNAME                     # 커스텀 도메인 설정
├── .github/workflows/
│   └── deploy.yml                # GitHub Actions 배포 워크플로우
├── Dev_md/
│   ├── PLAN.md                   # 프로젝트 계획서
│   ├── DEVLOG_2026-03-07.md      # 개발일지 (Phase 1~2)
│   └── DEVLOG_FINAL_2026-03-07.md # 최종 개발일지 (본 문서)
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

---

## Phase 1: 프로젝트 기반 구축

### 1. 프로젝트 초기화
- React 19 + Vite 7 프로젝트 생성
- react-router-dom v7, react-icons 패키지 설치
- 디렉토리 구조 설정 (components, pages, context, data, styles)

### 2. 디자인 시스템 구축 (global.css)
- html.dreamitbiz.com 디자인 참고, CSS Variables 기반 시스템
- **5가지 컬러 테마**: Blue(기본), Red, Green, Purple, Orange
- **다크모드/라이트모드**: 시간 기반 자동 전환 + 수동 토글
- **Glassmorphism Navbar**: backdrop-filter blur(12px)
- **반응형 브레이크포인트**: 1100px, 1024px, 768px, 480px
- **커스텀 스크롤바, 애니메이션**: fadeIn, slideUp, slideRight
- **폰트**: Noto Sans KR + JetBrains Mono (코드용)

### 3. 핵심 컴포넌트 (8개)

| 컴포넌트 | 파일 | 설명 |
|---------|------|------|
| ThemeContext | context/ThemeContext.jsx | 테마/컬러/다크모드/검색/모바일메뉴 상태관리, Ctrl+K 단축키, localStorage 저장 |
| Navbar | components/Navbar.jsx | 글라스모피즘 네비바, 5색 컬러피커, 테마전환, 햄버거 메뉴, 7개 메뉴 |
| Footer | components/Footer.jsx | DreamIT Biz 로고, 3컬럼 푸터, Family Site, Quick Links(2열), 연락처, 사업자 정보 |
| Hero | components/Hero.jsx | 그라디언트 배경 히어로 섹션, blur 데코, 통계 표시 |
| Card | components/Card.jsx | 학습 카테고리 카드 (hover lift 효과, badge, 링크) |
| CodeBlock | components/CodeBlock.jsx | 코드 표시 블록 (언어 표시, 클립보드 복사 버튼) |
| SearchModal | components/SearchModal.jsx | 검색 모달 (Ctrl+K, 실시간 필터, 26개 검색 항목) |
| MobileDrawer | components/MobileDrawer.jsx | 모바일 슬라이드 메뉴 (오른쪽에서 진입, 오버레이) |

### 4. 페이지 (7개)

| 페이지 | 경로 | 설명 |
|--------|------|------|
| Home | / | 히어로 + 6개 카테고리 카드 + 4단계 학습 로드맵 |
| BackendBasics | /backend | 백엔드 기초 6토픽 (탭 네비, 코드 예제) |
| GitHubGuide | /github | GitHub 활용 7토픽 (탭 네비, 코드 예제) |
| DatabaseGuide | /database | DB 가이드 8토픽 - Supabase/Render.com 포함 |
| DeployGuide | /deploy | 배포 가이드 5토픽 - Render.com 중심 |
| QnA | /qna | FAQ 아코디언 8개 Q&A |
| Education | /education | 4단계 교육과정 카드 (입문~고급) + 교육 문의 박스 |

### 5. 학습 콘텐츠 데이터 (learningData.js)

| 카테고리 | 항목 수 | 주요 내용 |
|---------|---------|----------|
| 검색 데이터 | 26개 | 전체 토픽 커버 |
| 백엔드 기초 | 6개 | 서버, API/REST, Node.js/Express, 환경변수, JSON, HTTP |
| GitHub 활용 | 7개 | Git 명령어, Repository, Branch, PR, Actions, Pages, .gitignore |
| 데이터베이스 | 8개 | DB 개념, SQL, Supabase(시작/테이블/RLS/Auth/Storage), Render.com PG |
| 배포 가이드 | 5개 | Render.com 웹/정적, 환경변수, 자동배포, 도메인 |
| FAQ | 8개 | 바이브코딩 백엔드 관련 자주 묻는 질문 |
| 교육과정 | 4개 | 입문/초급/중급/고급 커리큘럼 |

### 6. UI/UX 수정사항
- sub-nav(2차 메뉴) 탭: overflow 스크롤 → flex-wrap 줄바꿈으로 변경
- 탭에서 이모지 아이콘 제거 (공간 절약, 가독성 향상)

---

## Phase 2: 푸터 영역 완성 및 브랜딩

### 7. Footer 실데이터 반영
- **더미 데이터 → 실제 연락처 정보로 교체**
  - 이메일: aebon@dreamitbiz.com
  - 전화: 010-3700-0629
  - 카카오톡: aebon
  - 운영시간: 평일 09:00 ~ 18:00
- **Family Site 드롭다운 추가** (위로 펼쳐지는 팝업 방식)
  - Google Cloud - Vibe Coding
  - Wikipedia - Vibe Coding
  - IBM - Vibe Coding
- **Quick Links 2열 그리드** 배치 (6개 링크)
- **하단 사업자 정보**
  - © 2025 드림아이티비즈(DreamIT Biz). All rights reserved.
  - Designed by Ph.D Aebon Lee | 대표이사: 이애본
  - 사업자등록번호: 601-45-20154
  - 통신판매신고번호: 제2024-수원팔달-0584호
  - 출판사 신고번호: 제2026-000026호

### 8. DreamIT Biz 로고 추가
- SVG 텍스트 로고 생성 (Dream = 흰색, IT = 블루 그라디언트, Biz = 회색)
- Footer 브랜드 영역 상단에 배치

### 9. 교육 문의 박스 추가
- Education 페이지 하단에 교육 문의 연락처 섹션 추가
- 이메일, 전화, 카카오톡, 운영시간 아이콘과 함께 표시

### 10. 파비콘 변경
- Vite 기본 파비콘 → 사이트 브랜딩 파비콘 (VB Study, 블루 그라디언트)

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

## OG 메타태그 (소셜 미리보기)

```html
og:url      → https://webstudy.dreamitbiz.com/
og:title    → Vibe Backend Study - 바이브코딩 백엔드 학습
og:image    → https://webstudy.dreamitbiz.com/og-image.svg
og:locale   → ko_KR
twitter:card → summary_large_image
```

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

---

## 최종 빌드 결과

| 파일 | 크기 | Gzip |
|------|------|------|
| index.html | 2.09 kB | 0.83 kB |
| CSS | 24.09 kB | 4.97 kB |
| JS | 302.30 kB | 95.86 kB |

---

## 해결한 주요 이슈

1. **GitHub Pages 빈 페이지** → BrowserRouter를 HashRouter로 변경, vite base를 '/'로 수정
2. **gh-pages 배포 실패** → peaceiris/actions-gh-pages@v4로 전환, gh-pages 브랜치 방식 채택
3. **CNAME 유실** → public/CNAME에 배치하여 빌드 시 자동 포함
4. **sub-nav 탭 스크롤 불가** → flex-wrap: wrap으로 변경, 이모지 제거
5. **OG 이미지 미노출** → og-image.svg 생성, 카카오 디버거 호환 메타태그 추가
