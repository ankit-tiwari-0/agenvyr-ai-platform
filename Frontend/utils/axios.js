import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001",
  baseURL: import.meta.env.VITE_SEVER_URL,
  withCredentials: true, // Include cookies in requests
});

export default api;