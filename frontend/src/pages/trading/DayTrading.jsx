import { useEffect } from 'react';

function DayTrading() {
  useEffect(() => {
    new window.TradingView.widget({
      container_id: "day-chart",
      width: "100%",
      height: 400,
      symbol: "NASDAQ:TSLA",
      interval: "5",
      theme: "light",
      style: "1",
      locale: "en",
    });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>⚡ Day Trading</h1>
      <p>Learn strategies for buying and selling in the same day.</p>

      <h2>📊 Tesla (TSLA) 5-Minute Chart</h2>
      <div id="day-chart"></div>
    </div>
  );
}

export default DayTrading;
