import React from "react";
import {
  Avatar,
  ButtonGroup,
  Grid,
  Paper,
  TextField,
  Link,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  const avatarStyle = { margin: "20px auto" };
  const btnStyles = {
    margin: "10px 0",
  };

  return (
    <Grid>
      <Paper elevation={50} variant="outlined" style={paperStyle}>
        <Grid alignItems="center">
          <Avatar style={avatarStyle}>
            <LockOpenIcon />
            <h3>Sign In</h3>
          </Avatar>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter Username"
          fullWidth
          required
        ></TextField>
        <TextField
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
        >
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember logins"
          />
        </TextField>
        <Button
          type="submit"
          color="primary"
          fullWidth
          variant="contained"
          style={btnStyles}
        >
          LOG IN
        </Button>
        <Typography>
          <Link href="#">Forgot Password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?<Link href="#"> Sign Up </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
export default Login;
