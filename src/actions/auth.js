import axiosInstance from "./axiosApi";
import jwt_decode from "jwt-decode";
export const checkRefreshToken = () => {
  return (dispatch) => {
    const token = localStorage.getItem("refresh_token");
    dispatch({ type: "AUTH@LOADING" });
    if (!token) {
      dispatch({ type: "AUTH@LOGOUT" });
    } else {
      const jwtCode = jwt_decode(token);
      if (Date.now() > jwtCode.exp * 1000) {
        //expired
        dispatch({ type: "AUTH@LOGOUT" });
      } else {
        dispatch({ type: "AUTH@USER_LOADED" });
      }
    }
  };
};

export const obtainToken = (id_token) => {
  return (dispatch) => {
    dispatch({
      type: "AUTH@LOADING"
    });
    axiosInstance
      .post("/accounts/token/obtain/", {
        token: id_token
      })
      .then((res) => {
        dispatch({
          type: "AUTH@OBTAIN_TOKEN",
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: "AUTH@ERROR"
        });
      });
  };
};
