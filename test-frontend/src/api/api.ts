import axios, { AxiosInstance } from 'axios';

const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsbG51a3FmdGthYW5kdW1zaW5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyODU5ODMsImV4cCI6MjAxNzg2MTk4M30.tD7ug4jfc6-5E8aRJxnTyjQ5Aq9ZknEVBscWGRJbbDg'

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization : AUTH_TOKEN,
  },
});

export default api;