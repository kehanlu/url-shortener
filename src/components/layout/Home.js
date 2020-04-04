import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dashboard } from "../urls/Dashboard";

export const Home = () => {
  const state = useSelector((state) => state);
  return (
    <>
      <Dashboard />
    </>
  );
};
