import React from "react";
import {
  Grid,
  Box,
  Typography,
  makeStyles,
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
        <Grid items xs={3}>
          <Typography variant="h5">Tools 
            <ul>
              <li><a href=''>Profile</a></li>
              <li><a href=''>Company Reviews</a></li>
            </ul>
            </Typography>
        </Grid>
        <Grid items xs={3}>
            <Typography variant="h5">Teams 
            <ul>
              <li><a href=''>About our Team</a></li>
              <li><a href=''>Contact us</a></li>
            </ul>
            </Typography></Grid>
        <Grid items xs={3}>
            <Typography variant="h5">
            <strong>Information</strong> and <strong>Copyright</strong></Typography>
            <Typography variant="h8">
              <p>Powered by Node.js, MongoDB, and React.</p>
              <p>You may view the <a href='https://github.com/timalbpathirana/ReactJobBoard_RMIT_PP1'>Source Code</a> behind this project on GitHub.</p>
              <p>© 2021 PP1-Teams-10</p>
            </Typography></Grid>
      </Grid>
    </Box>
  );
};
