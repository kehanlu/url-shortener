import axios from "axios";

const axiosAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access_token"),
    "Content-Type": "application/json",
    accept: "application/json"
  }
});

axiosAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.response.statusText === "Unauthorized") {
      const refresh_token = localStorage.getItem("refresh_token");
      return axios
        .post(`${process.env.REACT_APP_API_URL}/accounts/token/refresh/`, { refresh: refresh_token })
        .then((response) => {
          localStorage.setItem("access_token", response.data.access);
          axiosAPI.defaults.headers["Authorization"] = "Bearer " + response.data.access;
          originalRequest.headers["Authorization"] = "Bearer " + response.data.access;
          return axiosAPI(originalRequest);
        })
        .catch((err) => {
          localStorage.removeItem("refresh_token");
          window.location.href = "/login";
        });
    }
    return Promise.reject(error);
  }
);

export default axiosAPI;
