import React, { useEffect, useState } from "react";
import axiosInstance from "../../actions/axiosApi";
import { Redirect } from "react-router-dom";

export const UrlRedirect = (props) => {
  const [status, setStatus] = useState("");
  const { short_code } = props.match.params;

  const renderRedirect = (short_code) => {
    console.log("short code:", short_code);
    axiosInstance
      .get(`/urls/${short_code}`)
      .then((res) => {
        window.location.href = res.data.url;
      })
      .catch((err) => {
        setStatus("404");
      });
  };

  useEffect(() => {
    renderRedirect(short_code);
  }, []);

  return <>{status === "404" ? <p>404 not found</p> : <p>Redirect...</p>}</>;
};
