import React from "react";

import GoogleLogin from "react-google-login";
import { useSelector, useDispatch } from "react-redux";

import { obtainToken } from "../actions/auth";
import { Redirect } from "react-router-dom";

export const SocialLogin = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const responseGoogle = (response) => {
    if (!auth.isAuthenticated) {
      dispatch(obtainToken(response.tokenId));
    }
  };
  return (
    <>
      {auth.isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <GoogleLogin
          clientId="691598833720-vr57hlddse7fc5chpncv6ltb9ve7jon6.apps.googleusercontent.com"
          buttonText="使用 Google 登入"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />
      )}
    </>
  );
};
