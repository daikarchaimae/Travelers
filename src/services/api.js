import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com'; 

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchData = async () => {
  try {
    const response = await axiosInstance.get('/users'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const postData = async (data) => {
  try {
    const response = await axiosInstance.post('/users', data); 
  } catch (error) {
    console.error('Error posting data:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const validateEmail = async (email) => {
  try {
    const response = await axiosInstance.get(`/users?email=${email}`); 
    return response.data;
  } catch (error) {
    console.error('Error validating email:', error.response ? error.response.data : error.message);
    throw error;
  }
};
