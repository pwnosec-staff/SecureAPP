import React, { useState } from 'react';
import { Shield, Users, FileText, Bell, Sun, Moon } from 'lucide-react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLogin = (username: string, password: string) => {
    if (username === 'pwnosec' && password === 'pwnosec-staff') {
      setIsLoggedIn(true);
    } else {
      alert('Username atau password salah!');
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <Dashboard darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        )}
      </div>
    </div>
  );
}

export default App;