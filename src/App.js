import React, { useState, useEffect } from "react";
import { Box, Grid, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import JobCard from "./Components/Job/JobCard";
import NewJobModal from "./Components/Job/NewJobModal";
import { firestore, app } from "./Components/firebase/FirebaseDatabase";
import Login from "./Components/SignUp/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default () => {
  // setting the state
  const [jobs, setJobs] = useState([]);
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
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <NewJobModal />
            <Grid container justify="center">
              <Grid item xs={10}>
                <SearchBar />
                {/* fetching from jobs */}
                {jobs.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))}
              </Grid>
            </Grid>
          </Route>
          <Route path="/login" exact>
            <Grid>
              <Login />
            </Grid>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};
// source - https://www.youtube.com/watch?v=L2RnP5vhbdg
