import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import JobPostDescriptionModal from './JobPostDescriptionModal';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    border: "1px solid #e8e8e8",
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
      boxShadow: "0px 5px 25px rgba(0,0,0,0.1)",
      borderLeft: "6px solid #0c3c84",
      transition: "0.4s",
    },
  },
  companyName: {
    padding: "6px",
    fontSize: "13px",
    color: "white",
    backgroundColor: theme.palette.lightSecondary.main,
    // padding: theme.spacing(0.75),
    borderRadius: "5px",
    display: "inline-block",
    fontWeight: 600,
  },
  skillChip: {
    padding: "8px 10px",
    borderRadius: "10px",
    fontWeight: 600,
    fontSize: "12px",
    boxShadow: "0 2px 5px gba(0,0,0,.25)",
    margin: "0 10px",
    transition: "0.3s",
    backgroundColor: theme.palette.lightSecondary.main,
    color: "white",
  },
  // hoverCards: {
  //   "&:hover": {
  //     border: "5px solid black",
  //     boxShadow: "0px 5px 25px rgba(0,0,0,0.1)",
  //     borderLeft: "6px solid #0c3c84",
  //     transition: "0.4s",
  //   },
  // },
}));

const JobCard = (props) => { 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
}; 
  const classes = useStyles();
  return (
    <div>
      <Box p={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid items xs>
            <Typography variant="subtitle1">{props.item.field}</Typography>
            <Typography className={classes.companyName} variant="subtitle2">
              {props.item.name}
            </Typography>
          </Grid>
          <Grid items container xs>
            
              <Grid key="{skillLocation}" className={classes.skillChip} item>
                {props.item.location}
              </Grid>
              <Grid key="{skillBudjet}" className={classes.skillChip} item>
                {props.item.lowerBudget}$ to {props.item.upperBudget}$
              </Grid>
            
          </Grid>
          <Grid items container xs direction="column" alignItems="flex-end">
            <Grid item>
              <Box mt={2}>
                {/* <Typography variant="subtitle2">
                  {differenceInHours(Date.now(), props.postedOn)} | {props.type} |{" "}
                  {props.location}
                </Typography> */}
              </Box>
            </Grid>
            <Grid item>
              <Box mt={2}>
                <Button variant="outlined" color="secondary" onClick={handleOpen}>
                  CHECK{" "}
                </Button>
                <JobPostDescriptionModal open={open} setOpen={setOpen} jobDescription={props.item.description}/>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default JobCard;