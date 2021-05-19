import React from "react";
import {
  Button,
  Grid,
  Box,
  Typography,
  makeStyles,
  Dialog,
  Select,
  MenuItem,
  DialogTitle,
  DialogContent,
  DialogActions,
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
} from "@material-ui/core";

// Importing the Icons from Material UI icon package
import { AlarmTwoTone, Close as CloseIcon } from "@material-ui/icons";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  skillChip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    borderRadius: "5px",
    fontWeight: 600,
    fontSize: "12px",
    boxShadow: "0 2px 5px gba(0,0,0,.25)",
    transition: "0.3s",
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.defaultBlack.main,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "white",
      transition: "0.4s",
    },
  },
}));

export default (props) => {
  const classes = useStyles();
  const skills = [
    "Javascript",
    "React.js",
    "Node.js",
    "Vue.js",
    "Firebase",
    "MongoDB",
    "SQL",
  ];
  const sendEmail = () => {
    const receiver = "wangyumeng0207@gmail.com";
    axios.get('https://api.qzone.work/api/send.mail?user=huntrauto@gmail.com&pass=20210512&host=smtp.gmail.com&to='+receiver)
    
        .then((res)=>{
            console.log(res.data);
        })
        .catch(()=>alert('error'));
  };
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
      <DialogTitle>
      <Typography variant="h5">Personal Detail </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {/* Grid code block starts */}
          <Grid item xs={6} fullWidth>
            <FormControl fullWidth>
              <FilledInput
                placeholder="First Name: "
                fullWidth
                disableUnderline
              ></FilledInput>
              <FormHelperText>Required * </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <FilledInput
                placeholder="Last Name: "
                fullWidth
                disableUnderline
              ></FilledInput>
              <FormHelperText>Required * </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FilledInput
                placeholder="Email: "
                fullWidth
                disableUnderline
              ></FilledInput>
              <FormHelperText>Required * </FormHelperText>
            </FormControl>
          </Grid>
          {/* grid code block finished */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Select
                disableUnderline="true"
                variant="filled"
                defaultValue="Full Time"
                fullWidth
              >
                <MenuItem value="Full Time"> High School </MenuItem>
                <MenuItem value="Part Time"> Dimpoma </MenuItem>
                <MenuItem value="Casual"> Master </MenuItem>
                <MenuItem value="Temp/Contract"> other </MenuItem>
              </Select>
              <FormHelperText>Education</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FilledInput
                placeholder="Address "
                fullWidth
                disableUnderline
              ></FilledInput>
              <FormHelperText>Required * </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl>
              <FilledInput
                placeholder="City "
                fullWidth
                disableUnderline
              ></FilledInput>
              <FormHelperText>Required * </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <Select
                disableUnderline="true"
                variant="filled"
                defaultValue="Melbourne"
                placeholder="Location"
              >
                <MenuItem value="Melbourne"> Vic </MenuItem>
                <MenuItem value="Sydney"> Nsw </MenuItem>
                <MenuItem value="Adelaide"> Act </MenuItem>
                <MenuItem value="Perth"> Qld </MenuItem>
              </Select>
              <FormHelperText>State</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl>
              <FilledInput
                placeholder="Post Code "
                fullWidth
                disableUnderline
              ></FilledInput>
              <FormHelperText>Required * </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FilledInput
                placeholder="Phone Number "
                fullWidth
                disableUnderline
              ></FilledInput>
              <FormHelperText>Required * </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Typography variant="h5">Precious/Current Employment Details </Typography>
        <Grid item xs={12}>
            <FormControl fullWidth>
              <FilledInput
                placeholder="Company Name "
                fullWidth
                disableUnderline
              ></FilledInput>
              <FormHelperText>Required * </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FilledInput
                placeholder="Job Title: "
                fullWidth
                disableUnderline
              ></FilledInput>
              <FormHelperText>Required * </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FilledInput
                placeholder="How long were you here: "
                fullWidth
                disableUnderline
              ></FilledInput>
              <FormHelperText>Required * </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FilledInput
                placeholder="Reference 1 Name: "
                fullWidth
                disableUnderline
              ></FilledInput>
              <FormHelperText>Required * </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FilledInput
                placeholder="Reference 1 Phone: "
                fullWidth
                disableUnderline
              ></FilledInput>
              <FormHelperText>Required * </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FilledInput
                placeholder="Reference 2 Name: "
                fullWidth
                disableUnderline
              ></FilledInput>
              <FormHelperText>Required * </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FilledInput
                placeholder="Reference 2 Phone: "
                fullWidth
                disableUnderline
              ></FilledInput>
              <FormHelperText>Required * </FormHelperText>
            </FormControl>
          </Grid>
          <Typography variant="h5">Descirbe Why u fit this job </Typography>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FilledInput
                placeholder="Description: "
                fullWidth
                disableUnderline
                multiline
                rows={50}
              ></FilledInput>
              <FormHelperText>Required *</FormHelperText>
            </FormControl>
          </Grid>
      </DialogContent>
      <DialogActions>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="caption" color="primary">
            * Retuired Fields
          </Typography>
          <Button variant="outlined" color="secondary" onClick={sendEmail}>
              Apply
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
