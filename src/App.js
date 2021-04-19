import React from "react";
import { Box, Grid, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import JobCard from "./Components/Job/JobCard";
import NewJobModal from "./Components/Job/NewJobModal";
import jobData from "./dummyData";
import Login from "./Components/login.js/Login";

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <NewJobModal />
      <Grid container justify="center">
        <Grid item xs={10}>
          <SearchBar />
          {jobData.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </Grid>
      </Grid>
      <div>
        <Login />
      </div>
    </ThemeProvider>
  );
};
// source - https://www.youtube.com/watch?v=L2RnP5vhbdg
