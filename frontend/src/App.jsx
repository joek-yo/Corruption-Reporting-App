// File: src/App.jsx

import React from 'react';
import ReportForm from './components/ReportForm';
import ReportList from './components/ReportList';

const App = () => {
  return (
    <div className="App">
      <ReportForm />
      <ReportList />
    </div>
  );
};

export default App;
