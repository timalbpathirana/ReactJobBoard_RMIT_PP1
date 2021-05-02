import React, { useState } from "react";
import {
  Button,
  Grid,
  Box,
  Typography,
  makeStyles,
  ButtonGroup,
} from "@material-ui/core";
import NewJobModal from "../Job/NewJobModal";
import Login from "../login.js/Login";

const useStyle = makeStyles({
  wrapper: {
    // border: "1px solid ",
    backgroundColor: "white",
    display: "flex",

    // & referecing to the class and refer to each elemtn on that box componebt
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
  const classes = useStyle();
  return (
    <Box py={8} bgcolor="secondary.main" color="white">
      <Grid container justify="center">
        <Grid items xs={10}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5">Huntr</Typography>
            <ButtonGroup
              variant="text"
              color="primary"
              aria-label="text primary button group"
              size="medium"
            >
              <Button
                variant="contained"
                color="primary"
                disableLElevationm
                onClick={changeState}
              >
                Post a Job
              </Button>
              <Button variant="contained" color="primary" disableLElevation>
                Log In
              </Button>
            </ButtonGroup>
          </Box>
        </Grid>
      </Grid>
      <div>
        <NewJobModal
          stateChange={state}
          changeStateOnClose={(newState) => setState(newState)}
        />
      </div>
    </Box>
  );
};

// There are the links on how to pass props from child to parent
// You cannot pass props from child to parent, instead, you pass a function and update that function on parent and then get the value using props down to child
