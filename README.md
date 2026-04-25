# Vibe Backend Study

바이브코딩에 필요한 백엔드 지식을 종합적으로 학습할 수 있는 교육 사이트

## 주요 기능
- **백엔드 기초**: 서버, API, Node.js, HTTP, JSON
- **GitHub 활용**: Git 명령어, Branch, PR, Actions, Pages
- **데이터베이스**: Supabase (Auth/Storage/RLS), Render.com PostgreSQL
- **배포 가이드**: Render.com, 자동 배포, 도메인 연결
- **Q&A**: 자주 묻는 질문 8개
- **교육과정**: 입문~고급 4단계 커리큘럼

## 기술 스택
- React 19 + Vite 7
- React Router DOM v7
- CSS Variables 기반 디자인 시스템
- 5가지 컬러 테마 + 다크모드

## 개발 환경
```bash
npm install
npm run dev
```

## 빌드 & 배포
```bash
npm run build
npx gh-pages -d dist
```

## 주요 컴포넌트

| 컴포넌트 | 설명 |
|----------|------|
| `CodeBlock` | 코드 블록 (구문 강조, 복사 기능) |
| `ProfileCompleteModal` | 회원가입 후 프로필 정보 입력 모달 |
| `PaymentNudgePopup` | 라이선스 미보유 사용자 결제 안내 팝업 |
| `AdminDashboard` | 관리자 대시보드 |

## 변경 이력

최신 변경사항은 [CHANGELOG.md](./CHANGELOG.md)를 참고하세요.

| 날짜 | 내용 |
|------|------|
| 2026-04-25 | ProfileCompleteModal, PaymentNudgePopup AuthContext 연동 |
| 2026-03-26 | Lazy Loading, ErrorBoundary, BrowserRouter 전환 |

---

## License / 라이선스

**저작권 (c) 2025-2026 드림아이티비즈(DreamIT Biz). 모든 권리 보유.**

본 소프트웨어는 저작권법 및 지적재산권법에 의해 보호되는 독점 소프트웨어입니다. 본 프로젝트는 소프트웨어 저작권 등록이 완료되어 법적 보호를 받습니다.

- 본 소프트웨어의 무단 복제, 수정, 배포 또는 사용은 엄격히 금지됩니다.
- 저작권자의 사전 서면 허가 없이 본 소프트웨어의 어떠한 부분도 복제하거나 전송할 수 없습니다.
- 본 소프트웨어는 DreamIT Biz(https://www.dreamitbiz.com) 교육 플랫폼의 일부로 제공됩니다.

라이선스 문의: aebon@dreamitbiz.com

---

**Copyright (c) 2025-2026 DreamIT Biz (Ph.D Aebon Lee). All Rights Reserved.**

This software is proprietary and protected under applicable copyright and intellectual property laws. This project has been registered for software copyright protection.

- Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
- No part of this software may be reproduced or transmitted in any form without prior written permission from the copyright holder.
- This software is provided as part of the DreamIT Biz (https://www.dreamitbiz.com) educational platform.

For licensing inquiries, contact: aebon@dreamitbiz.com

---

**Designed & Developed by Ph.D Aebon Lee**

DreamIT Biz | https://www.dreamitbiz.com

