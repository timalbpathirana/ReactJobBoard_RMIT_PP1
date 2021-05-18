import React from "react";
import {
  Button,
  Box,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";

const useStyle = makeStyles({
  wrapper: {
    // border: "1px solid ",
    backgroundColor: "white",
    display: "flex",
    boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
    borderRadius: "5px",
    // & referecing to the class and refer to each elemtn on that box componebt
    "& > *": {
      flex: 1,
      height: "45px",
      margin: "8px ",
    },
  },
});

export default (props) => {
  const classes = useStyle();
  return (
    <Box p={3} mt={-5} className={classes.wrapper}>
      {/* This is the work type */}
      <Select disableUnderline="true" variant="filled" defaultValue="Full Time">
        <MenuItem value="Full Time"> Full Time </MenuItem>
        <MenuItem value="Part Time"> Part Time </MenuItem>
        <MenuItem value="Casual"> Casual </MenuItem>
        <MenuItem value="Temp/Contract"> Temp/Contract </MenuItem>
      </Select>
      {/* this is the work mode*/}
      <Select disableUnderline="true" variant="filled" defaultValue="On Site">
        <MenuItem value="On Site"> Plumber </MenuItem>
        <MenuItem value="Remote"> Electrician </MenuItem>
        <MenuItem value="Remote"> Home inspector </MenuItem>
        <MenuItem value="Remote"> Boilermaker </MenuItem>
        <MenuItem value="Remote"> Landscape designer </MenuItem>
        <MenuItem value="Remote"> HVAC technician </MenuItem>
        <MenuItem value="Remote"> Other </MenuItem>
      </Select>
      {/* this is the work place */}
      <Select disableUnderline="true" variant="filled" defaultValue="Melbourne">
        <MenuItem value="Melbourne"> Melbourne </MenuItem>
        <MenuItem value="Sydney"> Sydney </MenuItem>
        <MenuItem value="Adelaide"> Adelaide </MenuItem>
        <MenuItem value="Perth"> Perth </MenuItem>
      </Select>
      <Button variant="contained" color="primary" disableLElevation>
        SEARCH
      </Button>
    </Box>
  );
};
