import axios from "axios";
const apiUrl = process.env.Chatbot;
const axiosIns = axios.create({
  baseURL: apiUrl, // Use this for consistency
  headers: { "Content-Type": "application/json" },
});

export default axiosIns;
