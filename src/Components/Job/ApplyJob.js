import React, { useReducer } from "react";
import {
  Button,
  Paper,
  TextField,
  Grid,
  Box,
  Typography,
  makeStyles,
  Dialog,
  Input,
  InputLabel,
  Select,
  MenuItem,
  DialogTitle,
  DialogContent,
  DialogActions,
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  Icon,
} from "@material-ui/core";

import { AlarmTwoTone, Close as CloseIcon } from "@material-ui/icons";

const ApplyJob = (props) =>{
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      float:"right",
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    },
    root: {
      padding: theme.spacing(3, 2)
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    }
  }));

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: "",
      lastName:"",
      email: "",
      education:"",
      state:"",
      city:"",
      address:"",
      postCode:"",
      phoneNumber:"",
      prevCompanyName:"",
      jobTitle:"",
      workYears:"",
      ref1Name:"",
      ref1Email:"",
      ref2Name:"",
      ref2Email:"",
      description:"",
    }
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    let data = { formInput };

    fetch("http://localhost:3000/posts/1", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };
  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };
  const classes = useStyles();
  return (
    <Dialog id="formModel" open={props.stateChange} fullWidth>
      <DialogTitle>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h3">Job Apply </Typography>
          <IconButton
            variant=""
            onClick={() => props.changeStateOnClose(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Paper className={classes.root}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h5">Personal Detail </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} fullWidth>
                <FormControl item xs={6} fullWidth>
                  <FormHelperText>First Name: * </FormHelperText>
                  <FilledInput
                  id = "firstName"
                  name="firstName"
                  placeholder="First Name: "
                  defaultValue = {formInput.firstName}
                  className = {classes.textField}
                  onChange = {handleInput}
                  fullWidth
                  disableUnderline
                  ></FilledInput>
                </FormControl>
              </Grid>
              <Grid item xs={6} fullWidth>
                <FormControl item xs={6} fullWidth>
                  <FormHelperText>Last Name: * </FormHelperText>
                  <FilledInput
                  id = "lastName"
                  name="lastName"
                  placeholder="Last Name: "
                  defaultValue = {formInput.lastName}
                  className = {classes.textField}
                  onChange = {handleInput}
                  fullWidth
                  disableUnderline
                  ></FilledInput>
                </FormControl>
              </Grid>
              <Grid item xs={12} fullWidth>
                <FormControl fullWidth>
                  <FormHelperText>Email: * </FormHelperText>
                  <FilledInput
                  id = "email"
                  name="email"
                  placeholder="Email: "
                  defaultValue = {formInput.email}
                  className = {classes.textField}
                  onChange = {handleInput}
                  fullWidth
                  disableUnderline
                  ></FilledInput>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormHelperText>Education:*</FormHelperText>
                  <Select
                  id = "education"
                  name="education"
                  className = {classes.textField}
                  disableUnderline="true"
                  variant="filled"
                  value={formInput.education}
                  onChange = {handleInput}
                  fullWidth
                  >
                    <MenuItem value="High School"> High School </MenuItem>
                    <MenuItem value="Dimpoma"> Dimpoma </MenuItem>
                    <MenuItem value="Master"> Master </MenuItem>
                    <MenuItem value="other"> other </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} fullWidth>
                <FormControl fullWidth>
                  <FormHelperText>Address: * </FormHelperText>
                  <FilledInput
                  id = "address"
                  name="address"
                  placeholder="Address: "
                  defaultValue = {formInput.address}
                  className = {classes.textField}
                  onChange = {handleInput}
                  fullWidth
                  disableUnderline
                  ></FilledInput>
                </FormControl>
              </Grid>
              <Grid item xs={4} fullWidth>
                <FormControl>
                  <FormHelperText>City: * </FormHelperText>
                  <FilledInput
                  id = "city"
                  name="city"
                  placeholder="City: "
                  defaultValue = {formInput.city}
                  className = {classes.textField}
                  onChange = {handleInput}
                  fullWidth
                  disableUnderline
                  ></FilledInput>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <FormHelperText>State:*</FormHelperText>
                  <Select
                  id = "state"
                  name="state"
                  className = {classes.textField}
                  disableUnderline="true"
                  variant="filled"
                  value={formInput.state}
                  onChange = {handleInput}
                  fullWidth
                  >
                    <MenuItem value="Vic"> Vic </MenuItem>
                    <MenuItem value="Nsw"> Nsw </MenuItem>
                    <MenuItem value="Act"> Act </MenuItem>
                    <MenuItem value="Qld"> Qld </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4} fullWidth>
                <FormControl>
                  <FormHelperText>Post Code: * </FormHelperText>
                  <FilledInput
                  id = "postCode"
                  name="postCode"
                  placeholder="PostCode: "
                  defaultValue = {formInput.postCode}
                  className = {classes.textField}
                  onChange = {handleInput}
                  fullWidth
                  disableUnderline
                  ></FilledInput>
                </FormControl>
              </Grid>
              <Grid item xs={12} fullWidth>
                <FormControl fullWidth>
                  <FormHelperText>Phone Number: * </FormHelperText>
                  <FilledInput
                  id = "phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number: "
                  defaultValue = {formInput.phoneNumber}
                  className = {classes.textField}
                  onChange = {handleInput}
                  fullWidth
                  disableUnderline
                  ></FilledInput>
                </FormControl>
              </Grid>
            </Grid>
            <Typography variant="h5">Precious/Current Employment Details </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} fullWidth>
                <FormControl fullWidth>
                  <FormHelperText>Previous/Current Company Name: </FormHelperText>
                  <FilledInput
                  id = "prevCompanyName"
                  name="prevCompanyName"
                  placeholder="Company Name: "
                  defaultValue = {formInput.prevCompanyName}
                  className = {classes.textField}
                  onChange = {handleInput}
                  fullWidth
                  disableUnderline
                  ></FilledInput>
                </FormControl>
              </Grid>
              <Grid item xs={12} fullWidth>
                <FormControl fullWidth>
                  <FormHelperText>Job Title:  </FormHelperText>
                  <FilledInput
                  id = "jobTitle"
                  name="jobTitle"
                  placeholder="Job Title: "
                  defaultValue = {formInput.jobTitle}
                  className = {classes.textField}
                  onChange = {handleInput}
                  fullWidth
                  disableUnderline
                  ></FilledInput>
                </FormControl>
              </Grid>
              <Grid item xs={12} fullWidth>
                <FormControl fullWidth>
                  <FormHelperText>How long were you work there:  </FormHelperText>
                  <FilledInput
                  id = "workYears"
                  name="workYears"
                  placeholder="workYears: "
                  defaultValue = {formInput.workYears}
                  className = {classes.textField}
                  onChange = {handleInput}
                  fullWidth
                  disableUnderline
                  ></FilledInput>
                </FormControl>
              </Grid>
            </Grid>
            <Typography variant="h5">Reference </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} fullWidth>
                <FormControl fullWidth>
                  <FormHelperText>Person 1 Name: </FormHelperText>
                  <FilledInput
                  id = "ref1Name"
                  name="ref1Name"
                  placeholder="Name: "
                  defaultValue = {formInput.ref1Name}
                  className = {classes.textField}
                  onChange = {handleInput}
                  fullWidth
                  disableUnderline
                  ></FilledInput>
                </FormControl>
                <FormControl fullWidth>
                  <FormHelperText>Person 1 Email: </FormHelperText>
                  <FilledInput
                  id = "ref1Email"
                  name="ref1Email"
                  placeholder="Email: "
                  defaultValue = {formInput.ref1Email}
                  className = {classes.textField}
                  onChange = {handleInput}
                  fullWidth
                  disableUnderline
                  ></FilledInput>
                </FormControl>
              </Grid>
              <Grid item xs={12} fullWidth>
                <FormControl fullWidth>
                  <FormHelperText>Person 2 Name: </FormHelperText>
                  <FilledInput
                  id = "ref2Name"
                  name="ref2Name"
                  placeholder="Name: "
                  defaultValue = {formInput.ref2Name}
                  className = {classes.textField}
                  onChange = {handleInput}
                  fullWidth
                  disableUnderline
                  ></FilledInput>
                </FormControl>
                <FormControl fullWidth>
                  <FormHelperText>Person 2 Email: </FormHelperText>
                  <FilledInput
                  id = "ref2Email"
                  name="ref2Email"
                  placeholder="Email: "
                  defaultValue = {formInput.ref2Email}
                  className = {classes.textField}
                  onChange = {handleInput}
                  fullWidth
                  disableUnderline
                  ></FilledInput>
                </FormControl>
              </Grid>
            </Grid>
            <Typography variant="h5">Descirbe Why you fit this job </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} fullWidth>
                <FormControl fullWidth>
                  <FormHelperText>Description: * </FormHelperText>
                  <FilledInput
                  id = "description"
                  name="description"
                  placeholder="The Reason is: "
                  defaultValue = {formInput.description}
                  className = {classes.textField}
                  onChange = {handleInput}
                  fullWidth
                  disableUnderline
                  multiline
                  rows={50}
                  ></FilledInput>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container justify="flex-end">
              <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              >Apply <Icon className={classes.rightIcon}>send</Icon>
              </Button>
            </Grid>
          </form>
        </Paper>
      </DialogContent>
    </Dialog>
    )
}

export default ApplyJob