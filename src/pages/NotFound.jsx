import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '0.5rem', color: '#3b82f6' }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1f2937' }}>페이지를 찾을 수 없습니다</h2>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#3b82f6',
            color: '#fff',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
