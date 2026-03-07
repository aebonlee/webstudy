import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>
            <span style={{ color: '#4A8FE7' }}>Vibe</span>{' '}
            <span style={{ color: '#60A5FA' }}>Backend</span>{' '}
            Study
          </h3>
          <p>
            바이브코딩에 필요한 백엔드 지식을 체계적으로 학습할 수 있는 교육 플랫폼입니다.
            GitHub 활용, 데이터베이스, 배포까지 실무에 필요한 모든 것을 다룹니다.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/backend" className="footer-link">백엔드 기초</Link>
          <Link to="/github" className="footer-link">GitHub 활용</Link>
          <Link to="/database" className="footer-link">데이터베이스</Link>
          <Link to="/deploy" className="footer-link">배포 가이드</Link>
          <Link to="/education" className="footer-link">교육과정</Link>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <div className="footer-contact-item">
            <FiMail size={14} />
            <span>info@dreamitbiz.com</span>
          </div>
          <div className="footer-contact-item">
            <FiPhone size={14} />
            <span>02-XXX-XXXX</span>
          </div>
          <div className="footer-contact-item">
            <FiMessageSquare size={14} />
            <span>KakaoTalk 상담</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026 Vibe Backend Study. All rights reserved.</span>
        <span>Powered by DreamIT Biz</span>
      </div>
    </footer>
  );
}
