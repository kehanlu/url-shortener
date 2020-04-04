import React, { useState, useEffect, useRef } from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Grid } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import axiosAPI from "../../actions/axiosApi";

export const Form = () => {
  const classes = useStyles();
  const [urlValue, setUrlValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setUrlValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosAPI
      .post("/urls/", {
        url: urlValue
      })
      .then((res) => {
        dispatch({
          type: "URL@ADD",
          payload: res.data
        });
      })
      .catch((err) => {
        if (err.response.status === 406) {
          dispatch({
            type: "ALERT@SHOW",
            payload: {
              severity: "error",
              msg: err.response.data.msg
            }
          });
        }
      });
  };

  const textInput = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      textInput.current.focus();
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Paper className={classes.paper}>
      <form>
        <Grid container>
          <Grid item xs={12} md={10}>
            <TextField
              inputRef={textInput}
              label="Url"
              variant="outlined"
              value={urlValue}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button className={classes.btn} variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
    margin: "20px 0"
  },
  btn: {
    margin: "10px"
  }
}));
