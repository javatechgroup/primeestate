import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';

import { AuthContext } from './context/AuthContext';
import { SearchProvider } from './context/SearchContext';

function App() {
  console.log('App component is rendering');
  const [user, setUser] = useState(null); // { id, name, type: 'poster' | 'searcher' }

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <SearchProvider>
        <Router>
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </Router>
      </SearchProvider>
    </AuthContext.Provider>
  );
}

export default App;
