import React from "react";
import { Button, Grid, Box, Typography, makeStyles } from "@material-ui/core";
import { RedoRounded, RepeatOutlined } from "@material-ui/icons";
import userEvent from "@testing-library/user-event";
import theme from "../../theme/theme";

const skills = ["Javascript", "React.js", "Node.js"];
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
    backgroundColor: theme.palette.extra.main,
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
    backgroundColor: theme.palette.extra.main,
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
  const classes = useStyles();
  return (
    <Box p={2} className={classes.wrapper}>
      <Grid container alignItems="center">
        <Grid items xs>
          <Typography variant="subtitle1">Front End Developer</Typography>
          <Typography className={classes.companyName} variant="subtitle2">
            RMIT University
          </Typography>
        </Grid>
        <Grid items container xs>
          {skills.map((skill) => (
            <Grid key="{skill}" className={classes.skillChip} item>
              {skill}
            </Grid>
          ))}
        </Grid>
        <Grid items container xs direction="column" alignItems="flex-end">
          <Grid item>
            <Box mt={2}>
              <Typography variant="subtitle2">
                Developers/Programmers | 3d ago | On Site
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box mt={2}>
              <Button variant="outlined" color="secondary">
                CHECK{" "}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
