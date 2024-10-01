// File: src/components/ReportForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

const ReportForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that all fields are filled in
    if (!title || !description || !location) {
      setMessage('Please fill in all the fields');
      return;
    }

    const newReport = { title, description, location };

    try {
      // Sends a POST request to the backend to submit the report
      // Use the full URL for the API endpoint
      const response = await axios.post(`http://localhost:5000/api/reports`, newReport);
      setMessage('Report submitted successfully');
      console.log('Report submission response:', response.data);

      // Clear the form after successful submission
      setTitle('');
      setDescription('');
      setLocation('');
    } catch (error) {
      setMessage('Error submitting report');
      console.error('There was an error submitting the report!', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Submit a Corruption Report</h2>
      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Description Input */}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Location Input */}
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit Report
        </button>
      </form>

      {/* Message Display */}
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default ReportForm;
