// File: src/components/ReportList.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReportList = () => {
  const [reports, setReports] = useState([]); // State to hold the list of reports
  const [error, setError] = useState(''); // State to hold any error messages

  useEffect(() => {
    // Fetch reports from the backend
    const fetchReports = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/reports`);
        setReports(response.data); // Set the reports in state
      } catch (error) {
        setError('Error fetching reports');
        console.error('There was an error fetching the reports!', error);
      }
    };

    fetchReports(); // Call the fetchReports function when the component mounts
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className="container mt-5">
      <h2>Submitted Corruption Reports</h2>

      {/* Show error if fetching reports fails */}
      {error && <p className="text-danger">{error}</p>}

      {/* Check if reports exist, if not show a placeholder */}
      {reports.length === 0 ? (
        <p>No reports submitted yet.</p>
      ) : (
        <ul className="list-group">
          {reports.map((report) => (
            <li key={report._id} className="list-group-item">
              <h5>{report.title}</h5>
              <p>{report.description}</p>
              <small>Location: {report.location}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReportList;
