import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './DataComponent.css';

function DataComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const email = useSelector((state) => state.auth.email);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const filteredData = response.data.filter((item) => item.email === email);
        setData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      }
    };

    fetchData();
  }, [email]);

  return (
    <div className="data-container">
      <h2 >Data</h2>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {data.map((item) => (
          <li key={item.email}>
             <p>Email: {item.email}</p>
            <p>Username: {item.username}</p>
            <p>Name: {item.name}</p>
            <p>Address: {item.address.street}, {item.address.city}</p>
            <p>City: {item.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataComponent;
