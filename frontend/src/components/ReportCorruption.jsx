// File: src/components/ReportCorruption.js

import React, { useState } from 'react';
import api from '../api';

const ReportCorruption = () => {
  const [reportData, setReportData] = useState({
    title: '',
    description: '',
  });
  const [message, setMessage] = useState('');

  const { title, description } = reportData;

  const handleChange = (e) => {
    setReportData({ ...reportData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/corruption/reports', reportData);
      setMessage('Report submitted successfully!');
    } catch (err) {
      setMessage('Failed to submit report. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Report Corruption</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Report
        </button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
};

export default ReportCorruption;
