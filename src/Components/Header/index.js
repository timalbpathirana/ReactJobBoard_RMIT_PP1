import React from "react";
import { Button, Grid, Box, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  img: {
    src: "./Header/logo.png",
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
            <Typography variant="h5">
              Welcome to Workdd - The IT People{" "}
            </Typography>
            <Button variant="contained" color="primary" disableLElevation>
              Post a Job
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
