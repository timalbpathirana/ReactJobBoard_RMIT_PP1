import React from "react";
import {
  Button,
  Grid,
  Box,
  Typography,
  makeStyles,
  ButtonGroup,
} from "@material-ui/core";

const useStyle = makeStyles({
  wrapper: {
    // border: "1px solid ",
    backgroundColor: "white",
    display: "flex",

    // & referecing to the class and refer to each elemtn on that box componebt
  },
});

export default (props) => {
  const classes = useStyle();
  return (
    <Box py={8} bgcolor="secondary.main" color="white">
      <Grid container justify="center">
        <Grid items xs={10}>
          <Box display="flex" justifyContent="space-between">
            {/* <img
              src={"./Components/Header/logo.png"}
              alt="Logo"
              className={classes.useStyle}
            /> */}
            <Typography variant="h5">Huntr - IT Careers </Typography>
            <ButtonGroup
              variant="text"
              color="primary"
              aria-label="text primary button group"
              size="medium"
            >
              <Button variant="contained" color="primary" disableLElevationm>
                Post a Job
              </Button>
              <Button variant="contained" color="primary" disableLElevation>
                Log In
              </Button>
            </ButtonGroup>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
