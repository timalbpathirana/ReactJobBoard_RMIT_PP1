import React from "react";
import { Button, Grid, Box, Typography, makeStyles } from "@material-ui/core";
import { RedoRounded, RepeatOutlined } from "@material-ui/icons";
import userEvent from "@testing-library/user-event";
import theme from "../../theme/theme";
import { differenceInHours, differenceInMinutes } from "date-fns";

// const skills = ["Javascript", "React.js", "Node.js"];
// below method is the way to access the theme styles
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
    padding: theme.spacing(0.75),
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

export default (props) => {
  // function formatDate() {
  //   const str = props.postedOn;
  //   const res = str.split(" ");
  //   console.log(res[1]);
  //}

  const classes = useStyles();
  return (
    <Box p={2} className={classes.wrapper}>
      <Grid container alignItems="center">
        <Grid items xs>
          <Typography variant="subtitle1">{props.title}</Typography>
          <Typography className={classes.companyName} variant="subtitle2">
            {props.companyName}
          </Typography>
        </Grid>
        <Grid items container xs>
          {props.skills.map((skill) => (
            <Grid key="{skill}" className={classes.skillChip} item>
              {skill}
            </Grid>
          ))}
        </Grid>
        <Grid items container xs direction="column" alignItems="flex-end">
          <Grid item>
            <Box mt={2}>
              <Typography variant="subtitle2">
                {differenceInHours(Date.now(), props.postedOn)} | {props.type} |{" "}
                {props.location}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box mt={2}>
              <Button onClick = {props.open} variant="outlined" color="secondary">
                CHECK{" "}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
