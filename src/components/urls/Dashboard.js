import React, { useEffect } from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { fetchData } from "../../actions/urls";
import { useSelector, useDispatch } from "react-redux";

import { Form } from "./Form";
import { UrlTable } from "./UrlTable";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const urls = useSelector((state) => state.url.data);

  useEffect(() => {
    fetchData(dispatch);
  }, []);

  return (
    <>
      <Form />
      <UrlTable />
    </>
  );
};
