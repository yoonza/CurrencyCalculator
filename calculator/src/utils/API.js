import axios from 'axios';

const API = axios.create({
  baseURL: 'https://apilayer.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;