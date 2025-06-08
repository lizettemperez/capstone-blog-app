function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>👋 Welcome to NLTrades</h1>
      <p style={{ marginBottom: '2rem' }}>
        Learn to trade with confidence. Whether you're exploring 📈 stocks, 💰 crypto, 💱 forex, or ⚡ day trading — NLTrades gives you tools, tips, and a community to grow with.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '10px' }}>
          <h3>📚 Trading</h3>
          <p>Step-by-step guides for stocks, crypto, forex & more.</p>
        </div>
        <div style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '10px' }}>
          <h3>📝 Blogs</h3>
          <p>Read posts from other traders and share your own.</p>
        </div>
        <div style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '10px' }}>
          <h3>🔗 Resources</h3>
          <p>Find top tools, books, and links to keep learning.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a href="/signup" style={{ background: '#0066cc', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
          🚀 Get Started – Create Your Account
        </a>
      </div>
    </div>
  );
}

export default Home;
