
import React, { useState, useEffect } from "react";
import { Box, Grid, ThemeProvider,Button } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import JobCard from "./Components/Job/JobCard";
import NewJobModal from "./Components/Job/NewJobModal";
import ViewJobModal from "./Components/Job/ViewJobModal";

import Login from "./Components/login.js/Login";
import { firestore, app } from "./firebase/config";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default () => {
  // setting the state
  const [jobs, setJobs] = useState([]);
  const [ViewJob, setViewJob] = useState({});
  // fetching the jobs from database when user loads the website.
  const fetchJobs = async () => {
    const req = await firestore
      // collection name
      .collection("jobs")
      // order by posted on time and decending order
      .orderBy("postedOn", "desc")
      // fetching the data
      .get();

    // looping through the database and pull the infomation to the variable job and also ising ... spread function and overiding the array with data + id
    //saving that to the tempjob
    const tempJob = req.docs.map((job) => ({ ...job.data(), id: job.id }));
    setJobs(tempJob);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <NewJobModal />
      <ViewJobModal job={ViewJob} closeModal ={() => setViewJob({})}/>
      <Grid container justify="center">
        <Grid item xs={10}>
          <SearchBar />
          {/* fetching from jobs */}
          {jobs.map((job) => (
            <JobCard open={() => setViewJob(job)} key={job.id} {...job} />
          ))}
        </Grid>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
};
// source - https://www.youtube.com/watch?v=L2RnP5vhbdg
