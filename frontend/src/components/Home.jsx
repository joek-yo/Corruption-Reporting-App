// File: src/components/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container text-center">
      <h1>Welcome to the Corruption Reporting App</h1>
      <p>
        This platform allows you to report cases of corruption and help us
        combat this issue in our community.
      </p>
      <div className="mt-4">
        <Link to="/register" className="btn btn-primary me-3">
          Register
        </Link>
        <Link to="/login" className="btn btn-secondary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
