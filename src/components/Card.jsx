import { Link } from 'react-router-dom';

export default function Card({ icon, title, description, badge, to, onClick }) {
  const content = (
    <>
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
      <div className="card-desc">{description}</div>
      {badge && <span className="card-badge">{badge}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className="card" style={{ textDecoration: 'none' }}>
        {content}
      </Link>
    );
  }

  return (
    <div className="card" onClick={onClick}>
      {content}
    </div>
  );
}
