import React from "react";
import { Box, Grid, Button, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import JobCard from "./Components/Job/JobCard";
import NewJobModal from "./Components/Job/NewJobModal";
import jobData from "./dummyData";
import Form from "./Components/Form/form";
import {useState} from 'react';

export default () => {
  const [buttonPopup, setButtonPopup] = useState(false);

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
      <Button variant="contained" color="primary" onClick = {() => setButtonPopup(true)} >
                Temp Job Apply Button
              </Button>
      <Form trigger={buttonPopup} setTrigger ={setButtonPopup}>
        <h1>this is form</h1>
      </Form>
      <Footer />
    </ThemeProvider>
  );
};
