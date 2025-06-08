import { useEffect } from 'react';

function Forex() {
  useEffect(() => {
    new window.TradingView.widget({
      container_id: "forex-chart",
      width: "100%",
      height: 400,
      symbol: "FX:EURUSD",
      interval: "D",
      theme: "light",
      style: "1",
      locale: "en",
    });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>💱 Forex Trading</h1>
      <p>Understand how to trade global currencies like USD/EUR.</p>

      <h2>📊 EUR/USD Forex Chart</h2>
      <div id="forex-chart"></div>
    </div>
  );
}

export default Forex;
