// src/api/api.js
import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true, // 🔥 IMPORTANT for CORS
});

export default API;