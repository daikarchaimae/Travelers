import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Home.css';

function Home({ isAuthenticated }) {
  const email = useSelector((state) => state.auth.email);

  return (
    <div className="home-container">
      {email ? (
        <>
          <h1>Welcome, {email}!</h1>
          <p>This is your home page.</p>
        </>
      ) : (
        <>
          <h1>Welcome to the Hotel Management App!</h1>
          <p>Please log in to access your account and manage your reservations.</p>
        </>
      )}
        {!isAuthenticated && (
        <button><Link to='/login'>Login</Link></button>
      )}

    </div>
  );
}

export default Home;
