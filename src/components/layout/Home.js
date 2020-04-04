import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dashboard } from "../urls/Dashboard";

export const Home = () => {
  const state = useSelector((state) => state);
  return (
    <>
      <img
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/red-apple_1f34e.png"
        alt="apple"
        height="30px"
      />
      <img
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/pie_1f967.png"
        alt="pie"
        height="30px"
      />
      <Dashboard />
    </>
  );
};
