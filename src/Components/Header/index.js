import React, { useState } from "react";
import { Route, BrowserRouter as Router, useHistory } from "react-router-dom";
import {
  Button,
  Grid,
  Box,
  Typography,
  makeStyles,
  ButtonGroup,
} from "@material-ui/core";
import NewJobModal from "../Job/NewJobModal";
import logo_small from "./logo_small.png";

const useStyle = makeStyles({
  wrapper: {
    // border: "1px solid ",
    backgroundColor: "white",
    display: "flex",
  },
});

export default (props) => {
  const [state, setState] = useState(false);
  const changeState = () => {
    setState(true);
  };
  const setStateOnClose = () => {
    setState(false);
  };
  // Using useHistory to trigger going back to homepage when user clicks on Huntr
  const history = useHistory();
  const classes = useStyle();
  return (
    <Router>
      <Box py={8} bgcolor="secondary.main" color="white" justifyItems="center">
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid items xs={6}>
            <Box display="flex">
              <img
                src={logo_small}
                alt="logo"
                onClick={() => {
                  history.push("/");
                }}
              />
            </Box>
          </Grid>

          {/* <Button
                  variant="contained"
                  color="primary"
                  disableLElevationm
                  onClick={changeState}
                >
                  Post a Job
                </Button> */}
          <Box display="flex">
            <Button
              variant="contained"
              color="primary"
              disableLElevation
              href="/login"
            >
              Contractor Login
            </Button>
          </Box>
        </Grid>

        <div>
          <NewJobModal
            stateChange={state}
            changeStateOnClose={(newState) => setState(newState)}
          />
        </div>
      </Box>
    </Router>
  );
};

// There are the links on how to pass props from child to parent
// You cannot pass props from child to parent, instead, you pass a function and update that function on parent and then get the value using props down to child
