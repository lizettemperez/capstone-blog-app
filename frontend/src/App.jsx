import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/login.jsx';
import Logout from './pages/logout.jsx';
import Profile from './pages/Profile.jsx';
import Resources from './pages/Resources.jsx';
import Signup from './pages/Signup.jsx';
import Terms from './pages/Terms.jsx';
import Trading from './pages/Trading.jsx';
import Crypto from './pages/trading/Crypto.jsx';
import DayTrading from './pages/trading/DayTrading.jsx';
import Forex from './pages/trading/Forex.jsx';
import Stock from './pages/trading/Stock.jsx';

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    const storedUsername = localStorage.getItem('username');

    if (token && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  return (
    <BrowserRouter>
      <nav style={{
        display: 'flex',
        gap: '1rem',
        padding: '1rem',
        background: '#eee',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/trading">Trading</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/terms">Terms & Conditions</Link>

        {isLoggedIn ? (
          <>
            <span style={{ marginLeft: 'auto' }}>Hi, {username} 👋</span>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginLeft: 'auto' }}>Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/trading/stocks" element={<Stock />} />
        <Route path="/trading/crypto" element={<Crypto />} />
        <Route path="/trading/forex" element={<Forex />} />
        <Route path="/trading/daytrading" element={<DayTrading />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
