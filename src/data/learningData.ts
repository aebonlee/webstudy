// ============================================================
// Vibe Backend Study - 학습 콘텐츠 데이터
// ============================================================

// ===== 타입 정의 =====
export interface SearchItem {
  title: string;
  category: string;
  path: string;
  icon: string;
}

export interface ContentSection {
  subtitle?: string;
  text?: string;
  items?: string[];
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  description: string;
  content: ContentSection[];
  code: string;
  codeLang: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface EducationCourse {
  id: string;
  level: string;
  title: string;
  description: string;
  topics: string[];
}

// ===== 1. 검색 데이터 =====
export const searchData: SearchItem[] = [
  { title: '서버란 무엇인가', category: '백엔드 기초', path: '/backend', icon: '🖥️' },
  { title: 'API와 REST API', category: '백엔드 기초', path: '/backend', icon: '🔌' },
  { title: 'Node.js & Express', category: '백엔드 기초', path: '/backend', icon: '📦' },
  { title: '환경변수와 보안', category: '백엔드 기초', path: '/backend', icon: '🔒' },
  { title: 'JSON 데이터', category: '백엔드 기초', path: '/backend', icon: '📋' },
  { title: 'HTTP 메서드와 상태코드', category: '백엔드 기초', path: '/backend', icon: '📡' },
  { title: 'Git 기본 명령어', category: 'GitHub 활용', path: '/github', icon: '⌨️' },
  { title: 'Repository 관리', category: 'GitHub 활용', path: '/github', icon: '📁' },
  { title: 'Branch 전략', category: 'GitHub 활용', path: '/github', icon: '🌿' },
  { title: 'Pull Request', category: 'GitHub 활용', path: '/github', icon: '🔀' },
  { title: 'GitHub Actions', category: 'GitHub 활용', path: '/github', icon: '⚙️' },
  { title: 'GitHub Pages', category: 'GitHub 활용', path: '/github', icon: '🌐' },
  { title: '.gitignore 활용', category: 'GitHub 활용', path: '/github', icon: '🚫' },
  { title: '데이터베이스 개념', category: '데이터베이스', path: '/database', icon: '💾' },
  { title: 'SQL 기초', category: '데이터베이스', path: '/database', icon: '📊' },
  { title: 'Supabase 시작하기', category: '데이터베이스', path: '/database', icon: '⚡' },
  { title: 'Supabase 테이블 설계', category: '데이터베이스', path: '/database', icon: '📐' },
  { title: 'Row Level Security', category: '데이터베이스', path: '/database', icon: '🛡️' },
  { title: 'Supabase Auth', category: '데이터베이스', path: '/database', icon: '🔑' },
  { title: 'Supabase Storage', category: '데이터베이스', path: '/database', icon: '📦' },
  { title: 'Render.com PostgreSQL', category: '데이터베이스', path: '/database', icon: '🐘' },
  { title: 'Render.com 웹서비스 배포', category: '배포 가이드', path: '/deploy', icon: '🚀' },
  { title: 'Render.com 정적 사이트', category: '배포 가이드', path: '/deploy', icon: '📄' },
  { title: '환경변수 설정', category: '배포 가이드', path: '/deploy', icon: '🔧' },
  { title: 'GitHub 연동 자동 배포', category: '배포 가이드', path: '/deploy', icon: '🔄' },
  { title: '도메인 연결', category: '배포 가이드', path: '/deploy', icon: '🌍' },
];

// ===== 2. 백엔드 기초 토픽 =====
export const backendTopics: Topic[] = [
  {
    id: 'server',
    title: '서버란 무엇인가',
    icon: '🖥️',
    description: '서버는 클라이언트의 요청을 받아 처리하고 응답을 돌려주는 컴퓨터 또는 프로그램입니다. 바이브코딩에서 백엔드를 이해하려면 서버의 개념부터 확실히 알아야 합니다.',
    content: [
      { subtitle: '서버와 클라이언트', text: '웹에서 서버(Server)는 데이터를 제공하는 쪽, 클라이언트(Client)는 데이터를 요청하는 쪽입니다. 브라우저가 대표적인 클라이언트이며, 우리가 만드는 백엔드 애플리케이션이 서버 역할을 합니다.' },
      { subtitle: '서버가 하는 일', items: ['클라이언트의 HTTP 요청을 받아 처리', '데이터베이스에서 데이터를 조회/저장', '비즈니스 로직 처리 (계산, 검증 등)', '인증/인가 처리 (로그인, 권한 확인)', '응답 데이터를 JSON 형태로 반환'] },
      { subtitle: '바이브코딩에서 서버의 역할', text: 'AI가 프론트엔드 코드를 생성해주더라도, 데이터를 저장하고 관리하려면 서버가 필요합니다. Supabase 같은 BaaS(Backend as a Service)를 활용하면 서버를 직접 구축하지 않아도 됩니다.' },
    ],
    code: `// Node.js로 간단한 서버 만들기
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: '안녕하세요! 서버가 응답합니다.',
    timestamp: new Date().toISOString()
  }));
});

server.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});`,
    codeLang: 'javascript',
  },
  {
    id: 'api',
    title: 'API와 REST API',
    icon: '🔌',
    description: 'API(Application Programming Interface)는 서로 다른 소프트웨어가 통신할 수 있게 해주는 인터페이스입니다. REST API는 웹에서 가장 널리 사용되는 API 설계 방식입니다.',
    content: [
      { subtitle: 'API란?', text: 'API는 프로그램 간의 약속된 통신 규칙입니다. 식당에서 메뉴판이 API와 비슷합니다. 손님(클라이언트)은 메뉴판(API)을 보고 주문하고, 주방(서버)은 요리를 만들어 응답합니다.' },
      { subtitle: 'REST API의 핵심 원칙', items: ['자원(Resource) 중심 설계: URL로 자원을 표현', 'HTTP 메서드로 행위를 표현: GET, POST, PUT, DELETE', '무상태(Stateless): 각 요청은 독립적', 'JSON 형식으로 데이터 교환'] },
      { subtitle: 'REST API URL 설계 예시', items: ['GET /api/users → 사용자 목록 조회', 'GET /api/users/1 → 1번 사용자 조회', 'POST /api/users → 새 사용자 생성', 'PUT /api/users/1 → 1번 사용자 수정', 'DELETE /api/users/1 → 1번 사용자 삭제'] },
    ],
    code: `// Express.js REST API 예시
const express = require('express');
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: '김철수', email: 'kim@example.com' },
  { id: 2, name: '이영희', email: 'lee@example.com' },
];

// GET - 사용자 목록 조회
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET - 특정 사용자 조회
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: '사용자를 찾을 수 없습니다' });
  res.json(user);
});

// POST - 새 사용자 생성
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(3000, () => console.log('API 서버 실행 중'));`,
    codeLang: 'javascript',
  },
  {
    id: 'nodejs',
    title: 'Node.js & Express',
    icon: '📦',
    description: 'Node.js는 브라우저 밖에서 JavaScript를 실행할 수 있게 해주는 런타임이며, Express는 Node.js 위에서 웹 서버를 쉽게 만들 수 있게 도와주는 프레임워크입니다.',
    content: [
      { subtitle: 'Node.js란?', text: 'Node.js는 Chrome V8 엔진 기반의 JavaScript 런타임입니다. 프론트엔드에서 사용하는 JavaScript로 백엔드도 개발할 수 있어, 바이브코딩에서 풀스택 개발이 가능합니다.' },
      { subtitle: 'Express.js의 장점', items: ['간결하고 직관적인 API', '미들웨어를 통한 유연한 기능 확장', '풍부한 생태계와 커뮤니티', '빠른 프로토타이핑에 최적화'] },
      { subtitle: '프로젝트 시작하기', items: ['1. npm init -y 로 프로젝트 초기화', '2. npm install express 로 Express 설치', '3. index.js 파일 작성', '4. node index.js 로 서버 실행'] },
    ],
    code: `// Express 프로젝트 기본 구조
const express = require('express');
const app = express();

// 미들웨어 설정
app.use(express.json());  // JSON 요청 파싱
app.use(express.static('public'));  // 정적 파일 서빙

// 라우팅
app.get('/', (req, res) => {
  res.json({ message: 'API 서버에 오신 것을 환영합니다!' });
});

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '서버 내부 오류가 발생했습니다.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`서버가 \${PORT}번 포트에서 실행 중입니다.\`);
});`,
    codeLang: 'javascript',
  },
  {
    id: 'env',
    title: '환경변수와 보안',
    icon: '🔒',
    description: '환경변수는 API 키, 데이터베이스 접속 정보 등 민감한 정보를 코드에 직접 쓰지 않고 관리하는 방법입니다. 보안의 첫걸음입니다.',
    content: [
      { subtitle: '환경변수가 필요한 이유', text: 'API 키, 데이터베이스 비밀번호 등을 코드에 직접 작성하면, GitHub에 올렸을 때 전 세계에 노출됩니다. 환경변수를 사용하면 이런 민감한 정보를 안전하게 관리할 수 있습니다.' },
      { subtitle: '.env 파일 사용법', items: ['프로젝트 루트에 .env 파일 생성', 'KEY=VALUE 형식으로 값 저장', 'dotenv 패키지로 로드', '.gitignore에 .env 반드시 추가!'] },
      { subtitle: '보안 체크리스트', items: ['.env 파일은 절대 GitHub에 올리지 않기', 'API 키는 환경변수로 관리', 'CORS 설정으로 허용된 도메인만 접근', 'HTTPS 사용 (배포 시 자동 적용)', '사용자 입력은 항상 검증 (SQL Injection 방지)'] },
    ],
    code: `// .env 파일 예시
DATABASE_URL=postgresql://user:password@host:5432/dbname
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
PORT=3000

// .env 파일 사용하기 (Node.js)
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const port = process.env.PORT || 3000;

console.log('Supabase URL:', supabaseUrl);
// 비밀번호나 키는 절대 로그에 출력하지 마세요!`,
    codeLang: 'javascript',
  },
  {
    id: 'json',
    title: 'JSON 데이터',
    icon: '📋',
    description: 'JSON(JavaScript Object Notation)은 데이터를 저장하고 전송하는 경량 텍스트 형식입니다. 웹 API에서 가장 많이 사용되는 데이터 교환 포맷입니다.',
    content: [
      { subtitle: 'JSON이란?', text: 'JSON은 사람이 읽기 쉽고, 기계가 파싱하기 쉬운 텍스트 기반 데이터 형식입니다. JavaScript 객체와 비슷한 구조를 가지고 있어 웹 개발에서 표준으로 사용됩니다.' },
      { subtitle: 'JSON의 데이터 타입', items: ['문자열: "hello"', '숫자: 42, 3.14', '불리언: true, false', '배열: [1, 2, 3]', '객체: {"key": "value"}', 'null: null'] },
      { subtitle: 'JSON 활용 시 주의사항', items: ['키는 반드시 쌍따옴표("")로 감싸야 합니다', '후행 쉼표(trailing comma)는 허용되지 않습니다', '주석을 사용할 수 없습니다', 'undefined는 JSON에 없습니다'] },
    ],
    code: `// JSON 데이터 예시
{
  "user": {
    "id": 1,
    "name": "김철수",
    "email": "kim@example.com",
    "age": 28,
    "isActive": true,
    "skills": ["JavaScript", "React", "Node.js"],
    "address": {
      "city": "서울",
      "district": "강남구"
    }
  }
}

// JavaScript에서 JSON 다루기
const jsonString = '{"name":"김철수","age":28}';

// JSON 문자열 → JavaScript 객체
const obj = JSON.parse(jsonString);
console.log(obj.name);  // "김철수"

// JavaScript 객체 → JSON 문자열
const newJson = JSON.stringify(obj, null, 2);
console.log(newJson);`,
    codeLang: 'json',
  },
  {
    id: 'http',
    title: 'HTTP 메서드와 상태코드',
    icon: '📡',
    description: 'HTTP 메서드는 서버에게 어떤 작업을 수행할지 알려주는 동사이고, 상태코드는 서버가 요청 처리 결과를 알려주는 숫자입니다.',
    content: [
      { subtitle: '주요 HTTP 메서드', items: ['GET: 데이터 조회 (읽기 전용)', 'POST: 새 데이터 생성', 'PUT: 데이터 전체 수정', 'PATCH: 데이터 일부 수정', 'DELETE: 데이터 삭제'] },
      { subtitle: '주요 상태코드', items: ['200 OK: 요청 성공', '201 Created: 새 리소스 생성 성공', '400 Bad Request: 잘못된 요청', '401 Unauthorized: 인증 필요', '403 Forbidden: 접근 권한 없음', '404 Not Found: 리소스를 찾을 수 없음', '500 Internal Server Error: 서버 내부 오류'] },
      { subtitle: '상태코드 범주', items: ['1xx: 정보 응답', '2xx: 성공', '3xx: 리다이렉션', '4xx: 클라이언트 오류', '5xx: 서버 오류'] },
    ],
    code: `// fetch API로 HTTP 요청 보내기

// GET 요청 - 데이터 조회
const response = await fetch('/api/users');
const users = await response.json();
// response.status → 200

// POST 요청 - 데이터 생성
const newUser = await fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: '김철수',
    email: 'kim@example.com'
  })
});
// response.status → 201

// DELETE 요청 - 데이터 삭제
await fetch('/api/users/1', { method: 'DELETE' });
// response.status → 200 또는 204`,
    codeLang: 'javascript',
  },
];

// ===== 3. GitHub 활용 토픽 =====
export const githubTopics: Topic[] = [
  {
    id: 'git-basics',
    title: 'Git 기본 명령어',
    icon: '⌨️',
    description: 'Git은 코드의 변경 이력을 추적하는 버전 관리 시스템입니다. 바이브코딩에서 AI가 생성한 코드를 안전하게 관리하려면 Git이 필수입니다.',
    content: [
      { subtitle: 'Git 시작하기', text: 'Git은 코드의 "스냅샷"을 저장합니다. 언제든 이전 상태로 돌아갈 수 있어, AI가 생성한 코드가 문제가 있을 때 원래 상태로 복구할 수 있습니다.' },
      { subtitle: '필수 명령어', items: ['git init: 새 저장소 초기화', 'git add .: 변경된 파일을 스테이징', 'git commit -m "메시지": 변경 이력 저장', 'git status: 현재 상태 확인', 'git log: 커밋 이력 확인', 'git diff: 변경 사항 비교'] },
      { subtitle: '커밋 메시지 작성법', items: ['feat: 새로운 기능 추가', 'fix: 버그 수정', 'docs: 문서 수정', 'style: 코드 포맷팅', 'refactor: 리팩토링'] },
    ],
    code: `# Git 기본 워크플로우

# 1. 저장소 초기화
git init

# 2. 파일 상태 확인
git status

# 3. 변경된 파일 스테이징
git add .
# 또는 특정 파일만
git add index.html style.css

# 4. 커밋 (변경 이력 저장)
git commit -m "feat: 로그인 페이지 구현"

# 5. 커밋 이력 확인
git log --oneline

# 6. 원격 저장소 연결 및 푸시
git remote add origin https://github.com/username/repo.git
git push -u origin main`,
    codeLang: 'bash',
  },
  {
    id: 'github-repo',
    title: 'Repository 관리',
    icon: '📁',
    description: 'GitHub Repository(저장소)는 프로젝트 코드를 저장하고 관리하는 공간입니다. 효과적인 저장소 관리는 협업과 코드 유지보수의 핵심입니다.',
    content: [
      { subtitle: 'Repository 생성', text: 'GitHub.com에서 New Repository를 클릭하거나, 로컬에서 git init 후 원격 저장소를 연결할 수 있습니다.' },
      { subtitle: 'Repository 구성 요소', items: ['README.md: 프로젝트 소개 및 사용법', '.gitignore: 추적하지 않을 파일 설정', 'LICENSE: 라이선스 정보', 'package.json: 프로젝트 의존성 관리', 'src/: 소스코드 디렉토리'] },
      { subtitle: 'clone과 fork의 차이', items: ['clone: 원격 저장소를 로컬에 복사', 'fork: 다른 사람의 저장소를 내 계정으로 복사', 'fork 후 clone하여 작업하고 PR(Pull Request)을 보내는 것이 일반적인 협업 방식'] },
    ],
    code: `# Repository 관련 명령어

# 원격 저장소 복제 (clone)
git clone https://github.com/username/repo.git

# 원격 저장소 목록 확인
git remote -v

# 원격 저장소 추가
git remote add origin https://github.com/username/repo.git

# 원격 저장소에서 변경사항 가져오기
git pull origin main

# 로컬 변경사항을 원격에 올리기
git push origin main`,
    codeLang: 'bash',
  },
  {
    id: 'branch',
    title: 'Branch 전략',
    icon: '🌿',
    description: 'Branch(브랜치)는 독립적인 작업 공간입니다. 기능별로 브랜치를 만들어 작업하면 안정적인 코드 관리가 가능합니다.',
    content: [
      { subtitle: 'Branch란?', text: '브랜치는 기존 코드에 영향을 주지 않고 새로운 기능을 개발할 수 있는 독립적인 작업 공간입니다. main 브랜치는 항상 안정적인 상태를 유지해야 합니다.' },
      { subtitle: 'Branch 전략', items: ['main: 배포 가능한 안정 버전', 'develop: 개발 중인 기능 통합', 'feature/*: 개별 기능 개발 (예: feature/login)', 'fix/*: 버그 수정 (예: fix/header-bug)', 'release/*: 배포 준비'] },
      { subtitle: 'Branch 사용 팁', items: ['하나의 브랜치에서는 하나의 기능만 작업', '작업이 끝나면 Pull Request로 병합', '병합 후 사용하지 않는 브랜치는 삭제'] },
    ],
    code: `# Branch 관련 명령어

# 브랜치 목록 확인
git branch

# 새 브랜치 생성
git branch feature/login

# 브랜치 이동
git checkout feature/login
# 또는 (Git 2.23+)
git switch feature/login

# 브랜치 생성 + 이동 동시에
git checkout -b feature/login

# 브랜치 병합 (main에서 실행)
git checkout main
git merge feature/login

# 브랜치 삭제
git branch -d feature/login`,
    codeLang: 'bash',
  },
  {
    id: 'pr',
    title: 'Pull Request',
    icon: '🔀',
    description: 'Pull Request(PR)는 내가 작업한 코드를 팀에게 검토 요청하는 과정입니다. 코드 리뷰를 통해 코드 품질을 높일 수 있습니다.',
    content: [
      { subtitle: 'PR 워크플로우', items: ['1. feature 브랜치에서 작업 완료', '2. 변경사항을 커밋하고 push', '3. GitHub에서 Pull Request 생성', '4. 팀원이 코드 리뷰', '5. 수정 사항 반영 후 승인', '6. main 브랜치에 병합(merge)'] },
      { subtitle: 'PR 작성 팁', items: ['명확한 제목 작성 (예: "로그인 기능 구현")', '변경 사항을 상세하게 설명', '관련 이슈 번호 연결 (#123)', '스크린샷이나 GIF 첨부 (UI 변경 시)', '작은 단위로 자주 PR 생성'] },
    ],
    code: `# PR 관련 Git 워크플로우

# 1. feature 브랜치 생성 및 작업
git checkout -b feature/user-profile

# 2. 작업 후 커밋
git add .
git commit -m "feat: 사용자 프로필 페이지 구현"

# 3. 원격에 push
git push origin feature/user-profile

# 4. GitHub에서 PR 생성
# → GitHub 웹사이트에서 "New Pull Request" 클릭
# → base: main ← compare: feature/user-profile
# → 제목과 설명 작성 후 "Create Pull Request"

# 5. 리뷰 반영 후 추가 커밋
git add .
git commit -m "fix: 리뷰 반영 - 프로필 이미지 크기 조정"
git push origin feature/user-profile`,
    codeLang: 'bash',
  },
  {
    id: 'actions',
    title: 'GitHub Actions',
    icon: '⚙️',
    description: 'GitHub Actions는 CI/CD(지속적 통합/배포)를 자동화하는 도구입니다. 코드를 push하면 자동으로 테스트, 빌드, 배포가 실행됩니다.',
    content: [
      { subtitle: 'GitHub Actions란?', text: 'GitHub Actions는 이벤트(push, PR 등)가 발생하면 자동으로 워크플로우를 실행합니다. 테스트 자동화, 빌드, 배포 등을 코드로 정의할 수 있습니다.' },
      { subtitle: '주요 개념', items: ['Workflow: 자동화할 작업 전체 정의 (.yml 파일)', 'Job: 워크플로우 내의 작업 단위', 'Step: Job 내의 개별 실행 단계', 'Action: 재사용 가능한 작업 모듈', 'Trigger: 워크플로우를 실행하는 이벤트'] },
    ],
    code: `# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`,
    codeLang: 'yaml',
  },
  {
    id: 'pages',
    title: 'GitHub Pages',
    icon: '🌐',
    description: 'GitHub Pages는 GitHub 저장소에서 직접 정적 웹사이트를 무료로 호스팅할 수 있는 서비스입니다. 포트폴리오나 문서 사이트에 적합합니다.',
    content: [
      { subtitle: 'GitHub Pages 설정', items: ['1. Repository의 Settings → Pages 이동', '2. Source에서 Deploy from a branch 선택', '3. Branch를 main (또는 gh-pages) 선택', '4. Save 클릭 후 몇 분 기다리기', '5. https://username.github.io/repo-name 으로 접속'] },
      { subtitle: 'React 프로젝트 배포', text: 'React 프로젝트는 빌드 결과물(dist/)을 gh-pages 브랜치에 배포해야 합니다. GitHub Actions를 활용하면 자동으로 처리할 수 있습니다.' },
      { subtitle: '주의사항', items: ['정적 사이트만 호스팅 가능 (서버 코드 실행 불가)', '프라이빗 레포는 Pro 플랜 필요', 'SPA의 경우 404.html 설정 필요', '커스텀 도메인 연결 가능'] },
    ],
    code: `# React 프로젝트 GitHub Pages 배포

# 1. vite.config.js에 base 설정
# export default defineConfig({
#   base: '/repo-name/',
#   plugins: [react()],
# })

# 2. package.json에 배포 스크립트 추가
# "scripts": {
#   "deploy": "npm run build && gh-pages -d dist"
# }

# 3. gh-pages 패키지 설치
npm install --save-dev gh-pages

# 4. 빌드 및 배포
npm run deploy`,
    codeLang: 'bash',
  },
  {
    id: 'gitignore',
    title: '.gitignore 활용',
    icon: '🚫',
    description: '.gitignore 파일은 Git이 추적하지 않을 파일이나 폴더를 지정합니다. 민감한 정보나 불필요한 파일이 저장소에 올라가는 것을 방지합니다.',
    content: [
      { subtitle: '반드시 제외해야 할 파일', items: ['.env (환경변수, API 키)', 'node_modules/ (npm 패키지)', 'dist/ 또는 build/ (빌드 결과물)', '.DS_Store (macOS 시스템 파일)', '*.log (로그 파일)'] },
      { subtitle: '.gitignore 문법', items: ['# 주석', '*.log → 모든 .log 파일 무시', 'node_modules/ → 폴더 전체 무시', '!important.log → 예외 (추적 유지)', 'build/ → build 폴더 무시'] },
    ],
    code: `# .gitignore 예시 (Node.js 프로젝트)

# 의존성
node_modules/

# 빌드 결과물
dist/
build/

# 환경변수 (매우 중요!)
.env
.env.local
.env.production

# 로그 파일
*.log
npm-debug.log*

# OS 시스템 파일
.DS_Store
Thumbs.db

# IDE 설정
.vscode/
.idea/

# 테스트 커버리지
coverage/`,
    codeLang: 'bash',
  },
];

// ===== 4. 데이터베이스 토픽 =====
export const databaseTopics: Topic[] = [
  {
    id: 'db-concept',
    title: '데이터베이스 개념',
    icon: '💾',
    description: '데이터베이스는 데이터를 체계적으로 저장하고 관리하는 시스템입니다. 웹 서비스에서 사용자 정보, 게시글 등 모든 데이터를 안전하게 보관합니다.',
    content: [
      { subtitle: '왜 데이터베이스가 필요한가?', text: '변수나 파일에 데이터를 저장하면 서버가 재시작될 때 사라집니다. 데이터베이스를 사용하면 데이터를 영구적으로 저장하고, 빠르게 검색하고, 동시에 여러 사용자가 접근할 수 있습니다.' },
      { subtitle: '관계형 vs 비관계형 DB', items: ['관계형(SQL): PostgreSQL, MySQL - 테이블 구조, 정형 데이터에 적합', '비관계형(NoSQL): MongoDB, Firebase - 유연한 구조, 빠른 개발에 적합', '바이브코딩에서는 Supabase(PostgreSQL 기반)를 추천합니다'] },
      { subtitle: '핵심 용어', items: ['테이블(Table): 데이터를 저장하는 표', '행(Row): 하나의 데이터 레코드', '열(Column): 데이터의 속성/필드', '기본키(Primary Key): 각 행을 고유하게 식별하는 값', '외래키(Foreign Key): 다른 테이블과 연결하는 키'] },
    ],
    code: `-- 데이터베이스 테이블 예시

-- 사용자 테이블
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 게시글 테이블
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  content TEXT,
  user_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);`,
    codeLang: 'sql',
  },
  {
    id: 'sql-basics',
    title: 'SQL 기초',
    icon: '📊',
    description: 'SQL(Structured Query Language)은 데이터베이스와 대화하는 언어입니다. CRUD(생성, 조회, 수정, 삭제) 작업의 기본 쿼리를 배웁니다.',
    content: [
      { subtitle: 'CRUD 기본 쿼리', items: ['CREATE(생성): INSERT INTO 테이블 VALUES ...', 'READ(조회): SELECT * FROM 테이블 WHERE ...', 'UPDATE(수정): UPDATE 테이블 SET ... WHERE ...', 'DELETE(삭제): DELETE FROM 테이블 WHERE ...'] },
      { subtitle: '자주 사용하는 문법', items: ['WHERE: 조건 필터링', 'ORDER BY: 정렬 (ASC/DESC)', 'LIMIT: 결과 개수 제한', 'JOIN: 테이블 연결', 'GROUP BY: 그룹화', 'COUNT, SUM, AVG: 집계 함수'] },
    ],
    code: `-- SQL CRUD 기본 쿼리

-- 데이터 삽입 (Create)
INSERT INTO users (name, email)
VALUES ('김철수', 'kim@example.com');

-- 데이터 조회 (Read)
SELECT * FROM users;
SELECT name, email FROM users WHERE id = 1;
SELECT * FROM users ORDER BY created_at DESC LIMIT 10;

-- 데이터 수정 (Update)
UPDATE users SET name = '김영수' WHERE id = 1;

-- 데이터 삭제 (Delete)
DELETE FROM users WHERE id = 1;

-- JOIN - 사용자와 게시글 함께 조회
SELECT users.name, posts.title
FROM posts
JOIN users ON posts.user_id = users.id
ORDER BY posts.created_at DESC;`,
    codeLang: 'sql',
  },
  {
    id: 'supabase-start',
    title: 'Supabase 시작하기',
    icon: '⚡',
    description: 'Supabase는 오픈소스 Firebase 대안으로, PostgreSQL 기반의 BaaS(Backend as a Service)입니다. 바이브코딩에서 가장 인기 있는 백엔드 솔루션입니다.',
    content: [
      { subtitle: 'Supabase란?', text: 'Supabase는 데이터베이스, 인증, 스토리지, 실시간 구독 등 백엔드에 필요한 모든 기능을 제공합니다. 서버를 직접 구축하지 않아도 AI가 생성한 프론트엔드에서 바로 연동할 수 있습니다.' },
      { subtitle: '시작하기', items: ['1. supabase.com 에서 계정 생성', '2. New Project 클릭', '3. 프로젝트 이름, 비밀번호, 리전 설정', '4. API 키와 URL 복사', '5. 프로젝트에 Supabase 클라이언트 설치'] },
      { subtitle: 'Supabase의 주요 기능', items: ['Database: PostgreSQL 기반 관계형 DB', 'Auth: 이메일, 소셜 로그인 인증', 'Storage: 파일/이미지 저장', 'Edge Functions: 서버리스 함수', 'Realtime: 실시간 데이터 구독'] },
    ],
    code: `// Supabase 클라이언트 설정

// 1. 패키지 설치
// npm install @supabase/supabase-js

// 2. 클라이언트 초기화
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xxxxx.supabase.co';
const supabaseKey = 'your-anon-key';

const supabase = createClient(supabaseUrl, supabaseKey);

// 3. 데이터 조회
const { data, error } = await supabase
  .from('users')
  .select('*');

// 4. 데이터 삽입
const { data: newUser, error: insertError } = await supabase
  .from('users')
  .insert({ name: '김철수', email: 'kim@example.com' })
  .select();

console.log('새 사용자:', newUser);`,
    codeLang: 'javascript',
  },
  {
    id: 'supabase-table',
    title: 'Supabase 테이블 설계',
    icon: '📐',
    description: '효과적인 테이블 설계는 애플리케이션의 성능과 유지보수에 직접적인 영향을 줍니다. Supabase의 Table Editor로 쉽게 테이블을 만들 수 있습니다.',
    content: [
      { subtitle: '테이블 설계 원칙', items: ['하나의 테이블은 하나의 개념을 담당', '중복 데이터를 최소화 (정규화)', '적절한 데이터 타입 선택', '관계(1:N, N:M)를 명확하게 설계'] },
      { subtitle: 'Supabase 데이터 타입', items: ['int4/int8: 정수', 'text: 긴 문자열', 'varchar: 길이 제한 문자열', 'bool: 참/거짓', 'timestamp: 날짜와 시간', 'jsonb: JSON 데이터', 'uuid: 고유 식별자'] },
    ],
    code: `-- Supabase에서 테이블 만들기 (SQL Editor)

-- 사용자 프로필 테이블
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  username VARCHAR(50) UNIQUE,
  full_name VARCHAR(100),
  avatar_url TEXT,
  bio TEXT,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 게시판 테이블
CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  content TEXT,
  author_id UUID REFERENCES profiles(id),
  category VARCHAR(50),
  is_published BOOLEAN DEFAULT false,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 댓글 테이블
CREATE TABLE comments (
  id BIGSERIAL PRIMARY KEY,
  post_id BIGINT REFERENCES posts(id) ON DELETE CASCADE,
  author_id UUID REFERENCES profiles(id),
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);`,
    codeLang: 'sql',
  },
  {
    id: 'rls',
    title: 'Row Level Security',
    icon: '🛡️',
    description: 'RLS(Row Level Security)는 데이터베이스 행(Row) 수준에서 접근 권한을 제어합니다. Supabase에서 보안의 핵심이며, 사용자별로 볼 수 있는 데이터를 제한합니다.',
    content: [
      { subtitle: 'RLS가 필요한 이유', text: 'Supabase는 프론트엔드에서 직접 DB에 접근하므로, RLS 없이는 누구나 모든 데이터를 읽고 수정할 수 있습니다. RLS를 활성화하면 인증된 사용자만 자신의 데이터에 접근할 수 있습니다.' },
      { subtitle: 'RLS 정책 유형', items: ['SELECT: 누가 데이터를 읽을 수 있는지', 'INSERT: 누가 데이터를 추가할 수 있는지', 'UPDATE: 누가 데이터를 수정할 수 있는지', 'DELETE: 누가 데이터를 삭제할 수 있는지'] },
      { subtitle: '중요 주의사항', items: ['새 테이블을 만들면 반드시 RLS 활성화', 'auth.uid()로 현재 로그인한 사용자 확인', '정책 없이 RLS만 켜면 모든 접근이 차단됨', '공개 데이터는 별도 정책으로 허용 필요'] },
    ],
    code: `-- RLS 활성화
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- 누구나 공개 게시글 조회 가능
CREATE POLICY "공개 게시글 조회"
ON posts FOR SELECT
USING (is_published = true);

-- 본인 게시글만 생성 가능
CREATE POLICY "본인 게시글 생성"
ON posts FOR INSERT
WITH CHECK (auth.uid() = author_id);

-- 본인 게시글만 수정 가능
CREATE POLICY "본인 게시글 수정"
ON posts FOR UPDATE
USING (auth.uid() = author_id);

-- 본인 게시글만 삭제 가능
CREATE POLICY "본인 게시글 삭제"
ON posts FOR DELETE
USING (auth.uid() = author_id);`,
    codeLang: 'sql',
  },
  {
    id: 'supabase-auth',
    title: 'Supabase Auth',
    icon: '🔑',
    description: 'Supabase Auth는 이메일/비밀번호, 소셜 로그인(Google, GitHub 등), 매직링크 등 다양한 인증 방식을 쉽게 구현할 수 있게 해줍니다.',
    content: [
      { subtitle: '지원 인증 방식', items: ['이메일/비밀번호 로그인', 'OAuth (Google, GitHub, Kakao 등)', '매직 링크 (이메일 인증 링크)', 'OTP (일회용 비밀번호)', '전화번호 인증'] },
      { subtitle: '인증 플로우', items: ['1. 사용자가 회원가입/로그인 요청', '2. Supabase가 토큰(JWT) 발급', '3. 프론트엔드에서 토큰으로 API 호출', '4. RLS 정책에서 토큰으로 사용자 확인'] },
    ],
    code: `// Supabase Auth 사용 예시

// 회원가입
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'securepassword123',
});

// 로그인
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'securepassword123',
});

// Google OAuth 로그인
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
});

// 현재 로그인한 사용자 정보
const { data: { user } } = await supabase.auth.getUser();
console.log('현재 사용자:', user?.email);

// 로그아웃
await supabase.auth.signOut();

// 인증 상태 변화 감지
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN') {
    console.log('로그인됨:', session.user.email);
  } else if (event === 'SIGNED_OUT') {
    console.log('로그아웃됨');
  }
});`,
    codeLang: 'javascript',
  },
  {
    id: 'supabase-storage',
    title: 'Supabase Storage',
    icon: '📦',
    description: 'Supabase Storage는 이미지, 동영상, 문서 등 파일을 저장하고 관리할 수 있는 서비스입니다. S3 호환 스토리지로 대용량 파일도 처리할 수 있습니다.',
    content: [
      { subtitle: 'Storage 개념', items: ['Bucket: 파일을 담는 컨테이너 (폴더와 유사)', 'Object: 저장된 파일', 'Public Bucket: 누구나 접근 가능', 'Private Bucket: 인증된 사용자만 접근'] },
      { subtitle: '사용 사례', items: ['프로필 이미지 업로드', '게시글 첨부 파일', '문서 저장소', '미디어 파일 관리'] },
    ],
    code: `// Supabase Storage 사용 예시

// 파일 업로드
const file = event.target.files[0];
const { data, error } = await supabase.storage
  .from('avatars')  // 버킷 이름
  .upload(\`public/\${file.name}\`, file);

// 파일 URL 가져오기
const { data: urlData } = supabase.storage
  .from('avatars')
  .getPublicUrl('public/avatar.png');

console.log('이미지 URL:', urlData.publicUrl);

// 파일 목록 조회
const { data: files } = await supabase.storage
  .from('avatars')
  .list('public');

// 파일 삭제
const { error } = await supabase.storage
  .from('avatars')
  .remove(['public/old-avatar.png']);`,
    codeLang: 'javascript',
  },
  {
    id: 'render-pg',
    title: 'Render.com PostgreSQL',
    icon: '🐘',
    description: 'Render.com에서 PostgreSQL 데이터베이스를 생성하고 Node.js 서버와 연결하는 방법을 학습합니다. 독립적인 백엔드 서버가 필요한 경우에 적합합니다.',
    content: [
      { subtitle: 'Render.com DB 생성', items: ['1. render.com 회원가입/로그인', '2. New → PostgreSQL 선택', '3. 이름, 리전, 플랜(Free) 선택', '4. Create Database 클릭', '5. Internal/External Database URL 복사'] },
      { subtitle: 'Node.js에서 연결', text: 'pg 패키지를 사용하여 Node.js에서 PostgreSQL에 연결합니다. 연결 문자열(DATABASE_URL)은 환경변수로 관리합니다.' },
      { subtitle: 'Free 플랜 제한', items: ['90일 후 자동 삭제 (연장 가능)', '256MB 스토리지', '1GB RAM', '동시 연결 수 제한'] },
    ],
    code: `// Node.js에서 Render.com PostgreSQL 연결

// 1. 패키지 설치: npm install pg dotenv
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// 쿼리 실행
async function getUsers() {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
}

// Express와 함께 사용
app.get('/api/users', async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});`,
    codeLang: 'javascript',
  },
];

// ===== 5. 배포 토픽 =====
export const deployTopics: Topic[] = [
  {
    id: 'render-web',
    title: 'Render.com 웹서비스',
    icon: '🚀',
    description: 'Render.com은 GitHub 연동으로 자동 배포가 가능한 클라우드 플랫폼입니다. Node.js 백엔드 서버를 무료로 배포할 수 있습니다.',
    content: [
      { subtitle: '배포 단계', items: ['1. render.com 회원가입', '2. New → Web Service 선택', '3. GitHub 저장소 연결', '4. Build Command: npm install', '5. Start Command: node index.js', '6. Free 플랜 선택 후 배포'] },
      { subtitle: 'Free 플랜 특징', items: ['비활동 15분 후 슬립 모드 (첫 요청 시 30초 대기)', '매월 750시간 무료', '512MB RAM', '자동 HTTPS 제공'] },
    ],
    code: `# render.yaml - Render.com 설정 파일 (IaC)
services:
  - type: web
    name: my-api-server
    runtime: node
    buildCommand: npm install
    startCommand: node index.js
    envVars:
      - key: NODE_ENV
        value: production
      - key: DATABASE_URL
        fromDatabase:
          name: my-database
          property: connectionString

databases:
  - name: my-database
    plan: free`,
    codeLang: 'yaml',
  },
  {
    id: 'render-static',
    title: 'Render.com 정적 사이트',
    icon: '📄',
    description: 'React, Vue 등 SPA(Single Page Application)를 Render.com의 Static Site로 배포할 수 있습니다. 무료이며 CDN을 통해 빠르게 서비스됩니다.',
    content: [
      { subtitle: '정적 사이트 배포', items: ['1. New → Static Site 선택', '2. GitHub 저장소 연결', '3. Build Command: npm run build', '4. Publish Directory: dist (Vite) 또는 build (CRA)', '5. 자동 배포 설정 확인'] },
      { subtitle: 'SPA 라우팅 설정', text: 'React Router 등 클라이언트 사이드 라우팅을 사용하는 경우, Render.com에서 Rewrite Rule을 설정해야 합니다. /* → /index.html 리다이렉트를 추가합니다.' },
    ],
    code: `# React(Vite) 정적 사이트 배포 설정

# 1. vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});

# 2. Render.com 설정
# Build Command: npm install && npm run build
# Publish Directory: dist
#
# 3. Rewrite Rule (SPA 라우팅)
# Source: /*
# Destination: /index.html
# Action: Rewrite`,
    codeLang: 'javascript',
  },
  {
    id: 'env-setup',
    title: '환경변수 설정',
    icon: '🔧',
    description: '배포 환경에서 환경변수를 올바르게 설정하는 것은 보안과 안정성의 핵심입니다. 로컬과 프로덕션 환경의 환경변수를 분리하여 관리합니다.',
    content: [
      { subtitle: '환경변수 관리 전략', items: ['로컬: .env 파일 사용 (dotenv)', '프로덕션: 호스팅 서비스의 Environment Variables 메뉴', '절대로 .env 파일을 Git에 커밋하지 않기', '.env.example 파일로 필요한 변수 목록 공유'] },
      { subtitle: 'Render.com에서 환경변수 설정', items: ['Dashboard → 서비스 선택 → Environment', 'Key-Value 쌍으로 환경변수 추가', 'Secret Files로 복잡한 설정 파일 관리', 'Environment Groups로 여러 서비스 공유'] },
    ],
    code: `# .env.example (Git에 포함 - 템플릿)
DATABASE_URL=
SUPABASE_URL=
SUPABASE_ANON_KEY=
PORT=3000
NODE_ENV=development

# .env (Git에 포함하지 않음 - 실제 값)
DATABASE_URL=postgresql://user:pass@host:5432/db
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOi...
PORT=3000
NODE_ENV=development

# Render.com 환경변수 (Dashboard에서 설정)
# NODE_ENV=production
# DATABASE_URL=(Internal Database URL 자동 연결)`,
    codeLang: 'bash',
  },
  {
    id: 'auto-deploy',
    title: 'GitHub 연동 자동 배포',
    icon: '🔄',
    description: 'GitHub에 코드를 push하면 자동으로 빌드하고 배포하는 CI/CD 파이프라인을 구축합니다. Render.com은 기본적으로 이 기능을 제공합니다.',
    content: [
      { subtitle: '자동 배포 흐름', items: ['1. 로컬에서 코드 수정', '2. git commit & git push', '3. Render.com이 변경 감지', '4. 자동으로 npm install & build', '5. 새 버전으로 배포 완료'] },
      { subtitle: '배포 설정', items: ['Auto-Deploy: Yes (기본값)', '특정 브랜치만 배포 가능 (main/production)', 'Build Filter로 특정 경로 변경 시만 배포', 'Deploy Hook URL로 외부에서 배포 트리거'] },
      { subtitle: '배포 실패 시 대처', items: ['Build Logs에서 에러 메시지 확인', 'package.json의 scripts 확인', '환경변수 누락 여부 체크', '이전 버전으로 롤백 가능'] },
    ],
    code: `# 자동 배포 워크플로우

# 1. 코드 수정 후 커밋
git add .
git commit -m "feat: 새로운 API 엔드포인트 추가"

# 2. main 브랜치에 push (자동 배포 트리거)
git push origin main

# 3. Render.com 대시보드에서 배포 상태 확인
# - Building → Live 로 변경되면 완료

# Deploy Hook으로 수동 트리거 (필요한 경우)
curl https://api.render.com/deploy/srv-xxxxx?key=yyyyy`,
    codeLang: 'bash',
  },
  {
    id: 'domain',
    title: '도메인 연결',
    icon: '🌍',
    description: '배포된 서비스에 커스텀 도메인(예: api.mysite.com)을 연결하는 방법을 학습합니다. SSL 인증서는 자동으로 발급됩니다.',
    content: [
      { subtitle: '도메인 연결 단계', items: ['1. 도메인 구매 (가비아, Namecheap 등)', '2. Render.com에서 Custom Domain 추가', '3. DNS 설정에서 CNAME 레코드 추가', '4. SSL 인증서 자동 발급 대기 (최대 24시간)', '5. HTTPS로 접속 확인'] },
      { subtitle: 'DNS 레코드 설정', items: ['A 레코드: IP 주소로 직접 연결', 'CNAME 레코드: 다른 도메인을 가리킴 (서브도메인에 사용)', 'Render.com은 CNAME을 권장'] },
    ],
    code: `# 도메인 DNS 설정 예시

# Render.com Static Site의 경우
# CNAME 레코드 추가:
# 호스트: www
# 값: your-site.onrender.com
# TTL: 3600

# Render.com Web Service의 경우
# CNAME 레코드 추가:
# 호스트: api
# 값: your-service.onrender.com
# TTL: 3600

# 루트 도메인(example.com)의 경우
# 일부 DNS 제공업체에서는 ANAME/ALIAS 지원
# 또는 www로 리다이렉트 설정`,
    codeLang: 'bash',
  },
];

// ===== 6. FAQ 데이터 =====
export const faqData: FaqItem[] = [
  {
    question: '바이브코딩에서 백엔드가 왜 필요한가요?',
    answer: 'AI가 프론트엔드 코드를 생성해주더라도 데이터를 영구적으로 저장하고 관리하려면 백엔드(서버+데이터베이스)가 필요합니다. 사용자 인증, 결제 처리, 파일 업로드 등은 서버 없이 안전하게 처리할 수 없습니다. Supabase 같은 BaaS를 활용하면 서버 코드 없이도 백엔드 기능을 구현할 수 있습니다.',
  },
  {
    question: 'Supabase와 Firebase 중 어떤 것을 선택해야 하나요?',
    answer: 'Supabase는 PostgreSQL 기반의 관계형 데이터베이스를 사용하므로 SQL을 배울 수 있고, 복잡한 데이터 관계를 쉽게 표현할 수 있습니다. Firebase는 NoSQL 기반으로 빠른 프로토타이핑에 좋지만, 복잡한 쿼리에 제한이 있습니다. 바이브코딩에서는 Supabase를 추천합니다.',
  },
  {
    question: 'Render.com 무료 플랜의 제한사항은 무엇인가요?',
    answer: '무료 웹 서비스는 15분 비활동 시 슬립 모드로 전환되며, 첫 요청 시 약 30초의 대기 시간이 있습니다. 월 750시간 무료 실행, 512MB RAM이 제공됩니다. 무료 PostgreSQL은 90일 후 만료됩니다. 개인 프로젝트나 학습용으로는 충분하며, 프로덕션에서는 유료 플랜을 권장합니다.',
  },
  {
    question: 'Git과 GitHub의 차이가 무엇인가요?',
    answer: 'Git은 로컬에서 코드 변경 이력을 추적하는 버전 관리 "도구"이고, GitHub은 Git 저장소를 온라인에 호스팅하는 "서비스"입니다. Git 없이 GitHub을 사용할 수 없지만, GitHub 없이 Git만으로도 버전 관리가 가능합니다. GitHub은 협업, 코드 리뷰, CI/CD 등 추가 기능을 제공합니다.',
  },
  {
    question: 'REST API와 GraphQL 중 어떤 것을 배워야 하나요?',
    answer: '입문 단계에서는 REST API를 먼저 배우세요. REST는 간단하고 직관적이며, 대부분의 웹 서비스에서 사용됩니다. GraphQL은 복잡한 데이터 요청이 필요한 경우에 유용하지만, 학습 곡선이 더 높습니다. Supabase는 REST API와 함께 자동 생성된 GraphQL API도 제공합니다.',
  },
  {
    question: 'SQL을 반드시 알아야 하나요?',
    answer: 'Supabase를 사용하면 JavaScript 클라이언트로 대부분의 데이터 작업을 할 수 있지만, 기본적인 SQL 지식은 필수입니다. RLS(Row Level Security) 정책 작성, 복잡한 쿼리, 테이블 설계 등에 SQL이 필요합니다. SELECT, INSERT, UPDATE, DELETE 네 가지 기본 쿼리만 알아도 대부분의 작업이 가능합니다.',
  },
  {
    question: '환경변수(.env)가 GitHub에 올라가면 어떻게 되나요?',
    answer: '매우 위험합니다! API 키, 데이터베이스 비밀번호 등이 공개되면 해커가 서비스를 악용할 수 있습니다. 실수로 올렸다면: 1) 즉시 해당 키를 폐기하고 새로 발급, 2) git filter-branch로 커밋 이력에서 제거, 3) .gitignore에 .env 추가. GitHub은 SecretScanning으로 일부 키를 자동 감지해 알려줍니다.',
  },
  {
    question: '프론트엔드만으로 풀스택 앱을 만들 수 있나요?',
    answer: 'Supabase 같은 BaaS를 활용하면 서버 코드 없이도 데이터베이스, 인증, 파일 저장 등 백엔드 기능을 구현할 수 있습니다. 하지만 복잡한 비즈니스 로직, 외부 API 연동, 결제 처리 등은 별도의 서버가 필요할 수 있습니다. 시작은 BaaS로 하고, 필요에 따라 서버를 추가하는 것을 추천합니다.',
  },
];

// ===== 7. 교육과정 데이터 =====
export const educationData: EducationCourse[] = [
  {
    id: 'beginner',
    level: '입문',
    title: '바이브코딩 시작하기',
    description: '프로그래밍 경험이 없어도 시작할 수 있는 입문 과정입니다. AI를 활용한 개발의 기본 개념을 배웁니다.',
    topics: [
      '바이브코딩이란 무엇인가',
      '웹의 동작 원리 이해하기',
      'HTML/CSS/JavaScript 기초',
      'AI 도구 활용법 (Cursor, Claude 등)',
      '첫 번째 웹페이지 만들기',
      'Git 기본 사용법',
    ],
  },
  {
    id: 'elementary',
    level: '초급',
    title: '백엔드 기초 다지기',
    description: '서버와 데이터베이스의 기본 개념을 익히고, Supabase를 활용한 간단한 CRUD 앱을 만들어봅니다.',
    topics: [
      '서버와 API 개념 이해',
      'JSON과 HTTP 메서드',
      'Supabase 프로젝트 설정',
      '테이블 설계와 CRUD 구현',
      'React + Supabase 연동',
      'GitHub 저장소 관리',
    ],
  },
  {
    id: 'intermediate',
    level: '중급',
    title: '풀스택 프로젝트',
    description: '인증, 파일 업로드, 보안 설정 등을 포함한 완전한 풀스택 웹 애플리케이션을 구축합니다.',
    topics: [
      'Supabase Auth로 로그인 구현',
      'Row Level Security 설정',
      'Supabase Storage 파일 관리',
      'Node.js + Express API 서버',
      'Render.com 배포',
      'GitHub Actions CI/CD',
      '환경변수와 보안 관리',
    ],
  },
  {
    id: 'advanced',
    level: '고급',
    title: '실전 서비스 운영',
    description: '실제 서비스를 운영하기 위한 고급 기술과 최적화 방법을 학습합니다.',
    topics: [
      '실시간 기능 (Supabase Realtime)',
      'Edge Functions 서버리스',
      '성능 최적화와 캐싱',
      '모니터링과 에러 트래킹',
      '커스텀 도메인과 SSL',
      'CI/CD 파이프라인 고도화',
      '서비스 확장(Scaling) 전략',
    ],
  },
];
