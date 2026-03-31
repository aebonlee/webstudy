import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  to?: string;
  onClick?: () => void;
}

export default function Card({ icon, title, description, badge, to, onClick }: CardProps): React.ReactElement {
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
