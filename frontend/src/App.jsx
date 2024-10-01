// File: src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Import the Home component
import ReportForm from './components/ReportForm';
import ReportList from './components/ReportList';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />

          {/* Other routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/report" element={<ReportForm />} />
          <Route path="/reports" element={<ReportList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
