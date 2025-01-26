import React from 'react';
import './About.css';
import Footer from './Footer';

function About() {
  return (
    <div id="about-container" >
      <h1>About Our Hotel Reservation System</h1>
      <p>
        Welcome to our Hotel Reservation System! This application allows you to book hotels in various cities, manage your reservations, and update your profile. Our goal is to provide a seamless and user-friendly experience for all our customers.
      </p>
      
      <p>Features include:</p>
      <ul>
        <li>City selection for reservations</li>
        <li>CRUD operations for reservations</li>
        <li>Profile management</li>
        <li>Secure authentication</li>
        <li>Customer feedback management</li>
      </ul>
      <p>
        Developed by a dedicated team of professionals, this project is built using React, Redux Toolkit, and React Router. We hope you enjoy using our system and find it helpful for all your hotel booking needs.
      </p>
     <h5>Contact us</h5>
      <p>We value your feedback and are always here to help. If you have any questions, suggestions, or need assistance, please don't hesitate to reach out to us.
      </p>
    <ul>
      <li>Email: support@hotelmanagementapp.com</li>
      <li>Phone: +1 (800) 123-4567</li>
      <li>Address: 123 Hotel Lane, Suite 100, Hospitality City, HC 12345</li>
    </ul>

      <Footer />
    </div>
  );
}

export default About;
