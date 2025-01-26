import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import ReservationForm from './components/Reservation/ReservationForm';
import ReservationList from './components/Reservation/ReservationList';
import Profile from './components/Profile/Profile';
import ProfileList from './components/Profile/ProfileList';
import FeedbackForm from './components/Feedback/FeedbackForm';
import FeedbackList from './components/Feedback/FeedbackList';
import About from './components/About/About';
import VisitorNavbar from './components/Navbar/VisitorNavbar';
import UserNavbar from './components/Navbar/UserNavbar';
import DataComponent from './components/Data/DataComponent';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  return (
    <div className="App">
      {isAuthenticated ? (
        <UserNavbar setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <VisitorNavbar />
      )}
      <Routes>
        <Route path="/home" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/reservations" element={<PrivateRoute><ReservationList /></PrivateRoute>} />
        <Route path="/reservation/new" element={<PrivateRoute><ReservationForm /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/profileList" element={<PrivateRoute><ProfileList /></PrivateRoute>} />
        <Route path="/feedbacks" element={<PrivateRoute><FeedbackList /></PrivateRoute>} />
        <Route path="/feedback/new" element={<PrivateRoute><FeedbackForm /></PrivateRoute>} />
        <Route path="/data" element={<PrivateRoute><DataComponent /></PrivateRoute> }/>
      </Routes>
    </div>
  );
}

export default App;
