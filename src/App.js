import React from "react";
import { Box, Grid, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import JobCard from "./Components/Job/JobCard";

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid container justify="center">
        <Grid item xs={10}>
          <SearchBar />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
