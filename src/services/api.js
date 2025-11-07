import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Use your actual backend or keep dummy for now
  timeout: 7000,
  headers: { 'Content-Type': 'application/json' }
});

export default api;
