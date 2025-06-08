import { useEffect } from 'react';

function Logout() {
  useEffect(() => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('username');
    window.location.href = '/login';
  }, []);

  return null;
}

export default Logout;

