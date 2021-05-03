import React ,{useState} from "react";
import {
  Button,
  Grid,
  Box,
  Typography,
  Menu,
  Select,
  MenuItem,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import { RepeatOutlined } from "@material-ui/icons";

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
  const [loading, setLoading] = useState(false)
  const [jobSearch, setJobSearch] = useState({
    type: "Full time",
    location: "Remote"
  });
  const handleChange = (e) => {
    e.persist();
    setJobDetails(oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };
  //console.log(jobSearch);

  const search = async()=> {
    setLoading(true);
    await props.fetchJobsCustom(jobSearch);
    setLoading(false);
  }

  const classes = useStyle();
  return (
    <Box p={3} mt={-5} className={classes.wrapper}>
      {/* This is the work type */}
      <Select value ={jobSearch.type}name = "type"disableUnderline="true" variant="filled" defaultValue="Full Time">
        <MenuItem value="Full Time"> Full Time </MenuItem>
        <MenuItem value="Part Time"> Part Time </MenuItem>
        <MenuItem value="Casual"> Casual </MenuItem>
        <MenuItem value="Temp/Contract"> Temp/Contract </MenuItem>
      </Select>
      {/* this is the work mode*/}
      <Select value = {jobSearch.location}name = "location"disableUnderline="true" variant="filled" defaultValue="On Site">
        <MenuItem value="On Site"> On Site </MenuItem>
        <MenuItem value="Remote"> Remote </MenuItem>
      </Select>
      {/* this is the work place */}
      <Select disableUnderline="true" variant="filled" defaultValue="Melbourne">
        <MenuItem value="Melbourne"> Melbourne </MenuItem>
        <MenuItem value="Sydney"> Sydney </MenuItem>
        <MenuItem value="Adelaide"> Adelaide </MenuItem>
        <MenuItem value="Perth"> Perth </MenuItem>
      </Select>
      <Button disabaled= {loading} variant="contained" color="primary" disableLElevation
      onClick ={search}>
      
      {loading?(
              <CircularProgress color = "secondary" size={22}/>
            ) :(
              "Search"
            ) }
      </Button>
    </Box>
  );
};
