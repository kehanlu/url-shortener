import axiosInstance from "./axiosApi";

export const fetchData = (dispatch) => {
  const token = localStorage.getItem("access_token");
  axiosInstance.get("/urls/", { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
    dispatch({
      type: "URL@FETCH_DATA",
      payload: res.data
    });
  });
};
