import axios from "axios";

const api = axios.create({
  baseURL: "https://hack-dev.herokuapp.com",
});

export default api;
