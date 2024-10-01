// File: src/Routes.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Import your Home component
import ReportCorruption from './components/ReportCorruption'; // Import ReportCorruption component
import ReportList from './components/ReportList'; // Import ReportList component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/report" element={<ReportCorruption />} />
      <Route path="/reports" element={<ReportList />} />
    </Routes>
  );
};

export default AppRoutes;
