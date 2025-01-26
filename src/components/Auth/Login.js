import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../../services/api';
import { login } from '../../redux/slices/authSlice';
import './Login.css';

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await validateEmail(email);
      if (result.length > 0) {
        dispatch(login({ email }));
        setIsAuthenticated(true); 
        navigate('/home', { state: { email } });
      } else {
        setError('Access denied. Email not recognized.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <form id="login-form" onSubmit={handleSubmit}>
      <h2>Log in</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
      {error && <p id="error-message">{error}</p>}
    </form>
  );
}

export default Login;
