import { Grid } from "@material-ui/core";
import React from "react";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={10}>
        <SearchBar />
      </Grid>
    </Grid>
  );
};

export default Home;
