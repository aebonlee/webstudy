export default function Hero({ title, subtitle, stats }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {stats && (
          <div className="hero-stats">
            {stats.map((stat, i) => (
              <div className="hero-stat" key={i}>
                <div className="hero-stat-number">{stat.number}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
