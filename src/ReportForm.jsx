// File: src/ReportForm.jsx
import React, { useState } from 'react';

function ReportForm() {
  // State to hold form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [anonymous, setAnonymous] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const reportData = {
      title,
      description,
      location,
      anonymous,
    };
    console.log('Submitted Report:', reportData);
    // Clear the form after submission
    setTitle('');
    setDescription('');
    setLocation('');
    setAnonymous(false);
  };

  return (
    <div className="container mt-5">
      <h2>Report Corruption</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="anonymous"
            checked={anonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="anonymous">
            Submit Anonymously
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit Report</button>
      </form>
    </div>
  );
}

export default ReportForm;
