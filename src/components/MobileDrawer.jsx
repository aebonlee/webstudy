import { Link, useLocation } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { navItems } from './Navbar';

export default function MobileDrawer() {
  const { mobileMenuOpen, setMobileMenuOpen } = useTheme();
  const location = useLocation();

  if (!mobileMenuOpen) return null;

  return (
    <>
      <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
      <div className="mobile-drawer">
        <div className="mobile-drawer-header">
          <span style={{ fontWeight: 700, fontSize: 18 }}>메뉴</span>
          <button className="mobile-drawer-close" onClick={() => setMobileMenuOpen(false)}>
            <FiX />
          </button>
        </div>
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
