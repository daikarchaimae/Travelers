import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../../redux/slices/feedbackSlice';
import './FeedbackForm.css';

function FeedbackForm() {
  const [content, setContent] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [city, setCity] = useState('');
  const [userName, setUserName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    } else {
      console.error('User name not found in localStorage');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFeedback({ id: Date.now(), content, hotelName, city, personName: userName }));
    setContent('');
    setHotelName('');
    setCity('');
    setSuccessMessage('Feedback added successfully!');
    setTimeout(() => setSuccessMessage(''), 3000); 
  };

  return (
    <form id="feedback-form" onSubmit={handleSubmit}>
      <h2>New Feedback</h2>
      <input
        type="text"
        value={hotelName}
        onChange={(e) => setHotelName(e.target.value)}
        placeholder="Hotel Name"
        required
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
        required
      />
      <textarea
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Feedback"
        required
      />
      <button type="submit">Add Feedback</button>
      {successMessage && <p id="success-message">{successMessage}</p>}
    </form>
  );
}

export default FeedbackForm;