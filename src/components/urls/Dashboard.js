import React, { useEffect } from "react";
import { fetchData } from "../../actions/urls";
import { useDispatch } from "react-redux";

import { Form } from "./Form";
import { UrlTable } from "./UrlTable";

export const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(dispatch);
  });

  return (
    <>
      <Form />
      <UrlTable />
    </>
  );
};
