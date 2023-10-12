import axios from "axios";
import { BACKEND_URL } from "./env";
import { getAccessToken } from "../utils/local-storage";

axios.defaults.baseURL = BACKEND_URL;

// Interceptors = ตัวดักจับทุก req & res
// Interceptors ฝั่ง req (para1 = config obj)
axios.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axios;
