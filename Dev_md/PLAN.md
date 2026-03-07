# Vibe Backend Study - 프로젝트 계획서

## 프로젝트 개요
바이브코딩에 필요한 백엔드 지식을 종합적으로 학습할 수 있는 교육 사이트

## 기술 스택
- **프론트엔드**: React 19 + Vite 7
- **라우팅**: React Router DOM v7
- **아이콘**: React Icons
- **스타일링**: CSS Variables + Custom CSS (html.dreamitbiz.com 디자인 시스템 기반)
- **폰트**: Noto Sans KR, JetBrains Mono
- **배포**: GitHub Pages (예정)

## 디자인 시스템
html.dreamitbiz.com 참고:
- 5가지 컬러 테마 (Blue/Red/Green/Purple/Orange)
- 다크/라이트 모드 지원
- Glassmorphism 네비게이션 바
- 카드 기반 UI
- 반응형 디자인 (1100px, 1024px, 768px, 480px 브레이크포인트)

## 학습 콘텐츠 구조

### 1. 홈 (Home)
- 히어로 섹션 (프로젝트 소개, 통계)
- 카테고리별 카드 그리드
- 학습 로드맵 시각화

### 2. 백엔드 기초 (Backend Basics)
- 서버란 무엇인가?
- API와 REST API 이해
- Node.js & Express 기초
- 환경변수와 보안
- JSON과 데이터 포맷
- HTTP 메서드와 상태 코드

### 3. GitHub 활용 (GitHub Guide)
- Git 기본 명령어
- GitHub 계정 설정
- Repository 생성과 관리
- Branch 전략
- Pull Request & Code Review
- GitHub Actions (CI/CD)
- GitHub Pages 배포

### 4. 데이터베이스 (Database Guide)
- 데이터베이스 개념
- SQL 기초
- Supabase 설정과 활용
  - 프로젝트 생성
  - 테이블 설계
  - Row Level Security (RLS)
  - Supabase Auth
  - Supabase Storage
  - Edge Functions
- PostgreSQL on Render.com

### 5. 배포 가이드 (Deployment)
- Render.com 활용
  - 웹 서비스 배포
  - 정적 사이트 배포
  - 환경변수 설정
  - 자동 배포 (GitHub 연동)
- Vercel / Netlify 비교
- 도메인 연결

### 6. Q&A
- 자주 묻는 질문
- 트러블슈팅 가이드

### 7. 교육과정 (Education)
- 입문: 바이브코딩 시작하기
- 초급: 백엔드 기초 다지기
- 중급: 풀스택 프로젝트
- 고급: 실전 서비스 운영

## 파일 구조
```
src/
├── main.jsx              # 앱 엔트리포인트
├── App.jsx               # 라우터 & 레이아웃
├── styles/
│   └── global.css        # 디자인 시스템 (CSS Variables)
├── context/
│   └── ThemeContext.jsx   # 테마/언어 상태 관리
├── components/
│   ├── Navbar.jsx        # 글라스모피즘 네비게이션
│   ├── Sidebar.jsx       # 사이드바 네비게이션
│   ├── Footer.jsx        # 푸터
│   ├── Hero.jsx          # 히어로 섹션
│   ├── Card.jsx          # 카드 컴포넌트
│   ├── CodeBlock.jsx     # 코드 하이라이트 블록
│   ├── SearchModal.jsx   # 검색 모달
│   └── MobileDrawer.jsx  # 모바일 메뉴
├── pages/
│   ├── Home.jsx          # 홈 페이지
│   ├── BackendBasics.jsx # 백엔드 기초
│   ├── GitHubGuide.jsx   # GitHub 활용
│   ├── DatabaseGuide.jsx # DB 가이드 (Supabase/Render)
│   ├── DeployGuide.jsx   # 배포 가이드
│   ├── QnA.jsx           # Q&A
│   └── Education.jsx     # 교육과정
└── data/
    └── learningData.js   # 학습 콘텐츠 데이터
```

## 개발 일정
- Phase 1: 프로젝트 기반 구축 (디자인 시스템, 컴포넌트, 라우팅)
- Phase 2: 학습 콘텐츠 제작 (각 섹션별 상세 내용)
- Phase 3: 인터랙티브 기능 (코드 예제, 검색, 필터)
- Phase 4: 배포 및 최적화
