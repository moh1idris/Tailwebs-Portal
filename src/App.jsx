import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import HomeScreen from './Components/Home/HomeScreen';
import LoginScreen from './Components/Login/LoginScreen';

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Get the isLoggedIn state from Redux

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <LoginScreen />} />
        <Route path="/home" element={isLoggedIn ? <HomeScreen /> : <Navigate to="/" />} /> {/* Only render HomeScreen if logged in */}
      </Routes>
    </Router>
  );
};

export default App;
