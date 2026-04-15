import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiSearch, FiSun, FiMoon, FiMenu, FiLogIn, FiLogOut } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

interface NavItem {
  path: string;
  label: string;
}

const navItems: NavItem[] = [
  { path: '/', label: '홈' },
  { path: '/backend', label: '백엔드 기초' },
  { path: '/github', label: 'GitHub 활용' },
  { path: '/database', label: '데이터베이스' },
  { path: '/deploy', label: '배포 가이드' },
  { path: '/qna', label: 'Q&A' },
  { path: '/education', label: '교육과정' },
];

const colorMap: Record<string, string> = {
  blue: '#0046C8',
  red: '#DC2626',
  green: '#059669',
  purple: '#7C3AED',
  orange: '#EA580C',
};

export default function Navbar(): React.ReactElement {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleTheme, colorTheme, setColorTheme, COLORS, setSearchOpen, setMobileMenuOpen } = useTheme();
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <span className="brand-main">Vibe</span>
          <span className="brand-accent">Backend</span>
          <span className="brand-sub">Study</span>
        </Link>

        <div className="navbar-links">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <button className="nav-action-btn" onClick={() => setSearchOpen(true)} title="검색 (Ctrl+K)">
            <FiSearch />
          </button>

          <button className="nav-action-btn" onClick={toggleTheme} title={isDark ? '라이트 모드' : '다크 모드'}>
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          <div className="color-picker">
            {COLORS.map(color => (
              <button
                key={color}
                className={`color-dot ${colorTheme === color ? 'active' : ''}`}
                style={{
                  background: colorMap[color] || '#0046C8',
                }}
                onClick={() => setColorTheme(color as Parameters<typeof setColorTheme>[0])}
                title={color}
              />
            ))}
          </div>

          {isAuthenticated ? (
            <button
              className="nav-action-btn"
              onClick={async () => { await logout(); navigate('/'); }}
              title={`로그아웃 (${user?.email ?? ''})`}
            >
              <FiLogOut />
            </button>
          ) : (
            <Link to="/login" className="nav-action-btn" title="로그인">
              <FiLogIn />
            </Link>
          )}

          <button className="hamburger-btn" onClick={() => setMobileMenuOpen(true)}>
            <FiMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}

export { navItems };
export type { NavItem };
