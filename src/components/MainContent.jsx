import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Apod from './Apod';
import Rover from './Rover';
import NavBar from '../navBar/NavBar';

const MainContent = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/apod" element={<Apod />} />
        <Route path="/rover" element={<Rover />} />
        {/* Add additional routes for other pages if needed */}
        <Route path="/" element={<Navigate to="/apod" />} />
      </Routes>
    </>
  );
};

export default MainContent;
