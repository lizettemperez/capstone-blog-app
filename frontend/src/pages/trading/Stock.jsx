import { useEffect } from 'react';

function Stock() {
  useEffect(() => {
    new window.TradingView.widget({
      container_id: "stock-chart",
      width: "100%",
      height: 400,
      symbol: "NASDAQ:AAPL",
      interval: "D",
      theme: "light",
      style: "1",
      locale: "en",
    });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📈 Stock Trading</h1>
      <p>Learn how to trade shares of companies like Apple and Tesla.</p>

      <h2>📊 Apple (AAPL) Stock Chart</h2>
      <div id="stock-chart"></div>
    </div>
  );
}

export default Stock;
