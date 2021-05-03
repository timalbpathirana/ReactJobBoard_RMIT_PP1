import React from "react";
import { Box, CircularProgress, Grid, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import JobCard from "./Components/Job/JobCard";
import NewJobModal from "./Components/Job/NewJobModal";
import jobData from "./dummyData";
import { firestore } from "firebase";
import close as CloseIcon {} from 'material-ui/icons'; 

export default () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customSearch, setCustomSearch] = useState(true);
  const[newJobModal, setNewJobModal]= useState(false);

  const fetchJobs = async()  =>{
    setCustomSearch(false)
    setLoading(true);
    const req = await firestore
    .collection ("jobs")
    .orderBy("postedOn", "desc")
    .get()
    const tempJob = req.docs.map((job)  => ({
      ...jobData(),
      id: job.id,
      postedOn: jobData.postedOn,
 }));
 setJobs(temmJobs);
 setLoading(false);
  };

const fetchJobsCustoms =async JobSearch => {
  setLoading(true);
  setCustomSearch(true);
    const req = await firestore
    .collection ("jobs")
    .orderBy("postedOn", "desc")
    .where("location","==", jobSearch.location)
    .where("type","==", jobSearch.type)
    .get();
    const tempJob = req.docs.map((job)  => ({
      ...jobData(),
      id: job.id,
      postedOn: jobData.postedOn,
 }));
 setJobs(temmJobs);
 setLoading(false);
  };


const postJob = async(jobDetails) => {
  await firestore.collection("jobs").add){
    ...jobDetails,
    postedOn: app.firestore.fireValue.serverTimestamp().
  });
  fetchJobs();
  };

  useEffect(()=> {
    fetchJobs();
  },[]);

//export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <NewJobModal 
      closeModal = {()=> setNewJobModal(false)}
      newJobModal = {newJobModal}
      postJob = {PostJob}
      />
      <Box mb={3}>
      <Grid container justify="center">
        <Grid item xs={10}>
          <SearchBar fetchJobsCustoms = {fetchJobsCustoms} />
          {loading?(
            <Box display = "flex" justifyContent= "center">
              <CircularProgress />
              </Box>
          ):(
            <>
           customSearch &&
           <Box my = {2} display = "flex" justifyContent="felx-end">
               <Button onClick={fetchJobs}>
                 <closeIcon size = [20]/>
                 Custom Search 
               </Button>    
            </Box>)
             jobData.map((job) => (
           { <JobCard key={job.id} {...job} />
          })
        </Grid>
      </Grid> 
      </Box>
    </ThemeProvider>
  );
};
