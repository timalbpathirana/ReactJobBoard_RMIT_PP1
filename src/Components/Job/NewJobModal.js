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

  return (
    <Dialog id="formModel" open={false} fullWidth>
      <DialogTitle>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">Post a Job </Typography>
          <IconButton variant="">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {/* Grid code block starts */}
          <Grid item xs={6} fullWidth>
            <FormControl fullWidth>
              <FilledInput
                placeholder="Company Name: "
                fullWidth
                disableUnderline
              ></FilledInput>
              <FormHelperText>Required * </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <FilledInput
                placeholder="Job Title: "
                fullWidth
                disableUnderline
              ></FilledInput>
              <FormHelperText>Required * </FormHelperText>
            </FormControl>
          </Grid>
          {/* grid code block finished */}
          <Grid item xs={6}>
            <FormControl fullWidth>
              <Select
                disableUnderline="true"
                variant="filled"
                defaultValue="Full Time"
                fullWidth
              >
                <MenuItem value="Full Time"> Full Time </MenuItem>
                <MenuItem value="Part Time"> Part Time </MenuItem>
                <MenuItem value="Casual"> Casual </MenuItem>
                <MenuItem value="Temp/Contract"> Temp/Contract </MenuItem>
              </Select>
              <FormHelperText>Work type</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <Select
                disableUnderline="true"
                variant="filled"
                defaultValue="Melbourne"
                placeholder="Location"
              >
                <MenuItem value="Melbourne"> Melbourne </MenuItem>
                <MenuItem value="Sydney"> Sydney </MenuItem>
                <MenuItem value="Adelaide"> Adelaide </MenuItem>
                <MenuItem value="Perth"> Perth </MenuItem>
              </Select>
              <FormHelperText>Job Location</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth>
              <Select
                disableUnderline="true"
                variant="filled"
                defaultValue="On Site"
              >
                <MenuItem value="On Site"> On Site </MenuItem>
                <MenuItem value="Remote"> Remote </MenuItem>
              </Select>
              <FormHelperText>Job Type</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <FilledInput
                placeholder="Company URL: "
                fullWidth
                disableUnderline
              ></FilledInput>
              <FormHelperText>Required *</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FilledInput
                placeholder="Job Description: "
                fullWidth
                disableUnderline
                multiline
                rows={50}
              ></FilledInput>
              <FormHelperText>Required *</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Box fullWidth mt={3}>
          <Typography>Required Skills</Typography>
          <Box mt={1} display="flex" fullWidth>
            {skills.map((skill) => (
              <Box className={classes.skillChip} key={skill}>
                {skill}
              </Box>
            ))}
          </Box>
        </Box>
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
          <Button variant="outlined" color="secondary">
            Post Job
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
