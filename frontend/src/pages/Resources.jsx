function Resources() {
    return (
      <div style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Trading Resources</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Here are some of the best tools, books, and websites to grow your trading knowledge:
        </p>
  
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📚 Books</h2>
          <ul style={{ paddingLeft: '1.2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="https://www.amazon.com/dp/1592802974" target="_blank" rel="noopener noreferrer">
                <strong>Trading for a Living</strong> – Dr. Alexander Elder
              </a>
            </li>
            <li>
              <a href="https://www.amazon.com/dp/0735200661" target="_blank" rel="noopener noreferrer">
                <strong>Technical Analysis of the Financial Markets</strong> – John J. Murphy
              </a>
            </li>
          </ul>
        </section>
  
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🌐 Websites</h2>
          <ul style={{ paddingLeft: '1.2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="https://www.investopedia.com" target="_blank" rel="noopener noreferrer">Investopedia</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="https://www.babypips.com" target="_blank" rel="noopener noreferrer">BabyPips (Forex education)</a>
            </li>
            <li>
              <a href="https://www.tradingview.com" target="_blank" rel="noopener noreferrer">TradingView</a>
            </li>
          </ul>
        </section>
  
        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📺 YouTube</h2>
          <ul style={{ paddingLeft: '1.2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="https://www.youtube.com/c/HumbledTrader" target="_blank" rel="noopener noreferrer">Humbled Trader</a>
            </li>
            <li>
              <a href="https://www.youtube.com/c/TradingLab" target="_blank" rel="noopener noreferrer">TradingLab</a>
            </li>
          </ul>
        </section>
      </div>
    );
  }
  
  export default Resources;
  