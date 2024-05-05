import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import MainContent from './components/MainContent';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/*" element={<MainContent />} />
          <Route path='/home' element={<Home/>} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
