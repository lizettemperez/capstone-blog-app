import { Link } from 'react-router-dom';

function Trading() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Explore the 4 Main Types of Trading</h1>
      <p style={{ fontSize: '1.1rem' }}>
        Click a trading type to learn how it works and see example charts and strategies:
      </p>

      <div
        style={{
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          marginTop: '2rem',
        }}
      >
        {[
          {
            title: '📈 Stock Trading',
            desc: 'Trade shares of companies like Apple and Tesla.',
            to: '/trading/stocks',
          },
          {
            title: '₿ Crypto Trading',
            desc: 'Trade Bitcoin, Ethereum, and more 24/7.',
            to: '/trading/crypto',
          },
          {
            title: '💱 Forex Trading',
            desc: 'Trade global currencies like USD/EUR.',
            to: '/trading/forex',
          },
          {
            title: '⚡ Day Trading',
            desc: 'Buy and sell in the same day with fast strategies.',
            to: '/trading/daytrading',
          },
        ].map(({ title, desc, to }) => (
          <div
            key={to}
            style={{
              border: '1px solid #ddd',
              padding: '1.5rem',
              borderRadius: '12px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              transition: 'transform 0.2s',
            }}
          >
            <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{title}</h2>
            <p style={{ marginBottom: '1rem' }}>{desc}</p>
            <Link to={to} style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trading;
