import { useEffect } from 'react';

function Crypto() {
  useEffect(() => {
    new window.TradingView.widget({
      container_id: "crypto-chart",
      width: "100%",
      height: 400,
      symbol: "BINANCE:BTCUSDT",
      interval: "D",
      theme: "light",
      style: "1",
      locale: "en",
    });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>₿ Crypto Trading</h1>
      <p>Explore how to trade Bitcoin, Ethereum, and more 24/7.</p>

      <h2>📊 Bitcoin (BTC/USDT) Chart</h2>
      <div id="crypto-chart"></div>
    </div>
  );
}

export default Crypto;
