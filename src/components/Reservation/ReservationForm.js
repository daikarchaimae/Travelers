import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../../redux/slices/reservationSlice';
import './ReservationForm.css';

function ReservationForm() {
  const [city, setCity] = useState('');
  const [nom, setNom] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomType, setRoomType] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReservation({ id: Date.now(),nom, city, checkInDate, checkOutDate, roomType }));
    setCheckInDate('');
    setCity('');
    setNom('');
    setCheckOutDate('');
    setRoomType('');
    setSuccessMessage('Reservation added successfully!');
    setTimeout(() => setSuccessMessage(''), 3000); 
  };

  return (
    <form id="reservation-form" onSubmit={handleSubmit}>
      <h2>New Reservation</h2>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Nom Complet"
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
      />
      <label>
        Check-in Date:
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </label>
      <label>
        Check-out Date:
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </label>
      <label>
        Room Type:
        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        >
          <option value="">Select a room type</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
        </select>
      </label>
      <button type="submit">Add Reservation</button>
      {successMessage && <p id="success-message">{successMessage}</p>}
    </form>
  );
}

export default ReservationForm;
