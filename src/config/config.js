import axios from "axios";

const app_api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  
});
// console.log()
app_api.interceptors.request.use((config) => {
  if (!!localStorage.getItem("itkAdminKey")) {
    let cp_user = JSON.parse(localStorage.getItem("itkAdminKey"));
    let token = cp_user["Authorization"];
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default app_api;
