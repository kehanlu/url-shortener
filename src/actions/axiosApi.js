import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 5000,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access_token"),
    "Content-Type": "application/json",
    accept: "application/json"
  }
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.response.statusText === "Unauthorized") {
      const refresh_token = localStorage.getItem("refresh_token");
      return axios
        .post("http://localhost:8000/accounts/token/refresh/", { refresh: refresh_token })
        .then((response) => {
          localStorage.setItem("access_token", response.data.access);
          axiosInstance.defaults.headers["Authorization"] = "Bearer " + response.data.access;
          originalRequest.headers["Authorization"] = "Bearer " + response.data.access;
          return axiosInstance(originalRequest);
        })
        .catch((err) => {
          localStorage.removeItem("refresh_token");
          window.location.href = "/login";
        });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
