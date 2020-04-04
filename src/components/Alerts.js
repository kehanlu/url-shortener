import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

export const Alert = () => {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const handleClose = (e) => {
    dispatch({
      type: "ALERT@CLOSE"
    });
  };

  return (
    <Snackbar open={alert.onAlert} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity={alert.severity}>
        {alert.msg}
      </MuiAlert>
    </Snackbar>
  );
};
