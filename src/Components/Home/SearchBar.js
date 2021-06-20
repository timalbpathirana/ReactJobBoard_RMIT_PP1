import React, { useEffect, useState } from 'react';
import {
    Button,
    Box,
    Select,
    MenuItem,
    makeStyles,
} from "@material-ui/core";
import { firestore } from '../Login/firebase.config';
import JobCard from './JobCard';

const useStyle = makeStyles({
    wrapper: {
        // border: "1px solid ",
        backgroundColor: "white",
        display: "flex",
        boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
        borderRadius: "5px",
        // & referecing to the class and refer to each elemtn on that box componebt
        "& > *": {
            flex: 1,
            height: "45px",
            margin: "8px ",
        },
    },
});

const SearchBar = () => {    
    const [jobPosts, setJobPosts] = useState([]);    
    const [field, setField] = useState('Electrician');
    const [location, setLocation] = useState('Melbourne');
    
    useEffect(() => {       
        firestore.collection("jobPost").where('field', "==", 'Electrician').where('location', "==", 'Melbourne').onSnapshot((querySnapshot) => {
            const firestoreData = querySnapshot.docs
            let Posts = [];
            firestoreData.map(item => {
                const itemData = { ...item.data(), id: item.id }
                const destructureData = { name: itemData.name, field: itemData.field, location: itemData.location, lowerBudget: itemData.lowerBudget, upperBudget: itemData.upperBudget, description: itemData.description, id: itemData.id }
                Posts.push(destructureData)
            })
            setJobPosts(Posts)
        })
    }, []);

    const allJobPosts = () => {
        firestore.collection("jobPost").get().then((querySnapshot) => {
            const firestoreData = querySnapshot.docs
            let Posts = [];
            firestoreData.map(item => {
                const itemData = { ...item.data(), id: item.id }
                const destructureData = { name: itemData.name, field: itemData.field, location: itemData.location, lowerBudget: itemData.lowerBudget, upperBudget: itemData.upperBudget, description: itemData.description, id: itemData.id }
                Posts.push(destructureData)
            })
            setJobPosts(Posts)
        })
    }

    const jobFilteredByOneItems = (name, value) => {
        firestore.collection("jobPost").where(name, "==", value)
            .onSnapshot((querySnapshot) => {
                const firestoreData = querySnapshot.docs
                let Posts = [];
                firestoreData.map(item => {
                    const itemData = { ...item.data(), id: item.id }
                    const destructureData = { name: itemData.name, field: itemData.field, location: itemData.location, lowerBudget: itemData.lowerBudget, upperBudget: itemData.upperBudget, description: itemData.description, id: itemData.id }
                    Posts.push(destructureData)
                })
                setJobPosts(Posts)
            });
    }

    const jobFilteredByTwoItems = (field, location) => {
        firestore.collection("jobPost").where('field', "==", field).where('location', "==", location).onSnapshot((querySnapshot) => {
            const firestoreData = querySnapshot.docs
            let Posts = [];
            firestoreData.map(item => {
                const itemData = { ...item.data(), id: item.id }
                const destructureData = { name: itemData.name, field: itemData.field, location: itemData.location, lowerBudget: itemData.lowerBudget, upperBudget: itemData.upperBudget, description: itemData.description, id: itemData.id }
                Posts.push(destructureData)
            })
            setJobPosts(Posts)
        });
    }

    const handleFieldChange = (event) => {
        setField(event.target.value);
        if(location.length === 0 && event.target.value.length > 0){
            jobFilteredByOneItems('field', event.target.value)
        }
        else if(location.length > 0 && event.target.value.length > 0) {
            jobFilteredByTwoItems(event.target.value, location)
        }
        else if(location.length > 0 && event.target.value.length === 0) {
            jobFilteredByOneItems('location', location)
        }  
        else{
            allJobPosts();
        }

    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
        if(field.length === 0 && event.target.value.length > 0){
            jobFilteredByOneItems('location', event.target.value)
        }
        else if(field.length > 0 && event.target.value.length > 0) {
            jobFilteredByTwoItems(field, event.target.value)
        }
        else if(field.length > 0 && event.target.value.length === 0) {
            jobFilteredByOneItems('field', field)
        }
        else{
            allJobPosts();
        }        
    };
    
    const handleSearch = () => {
        if (location.length === 0 && field.length === 0) {
            alert('Please fill the criteria field')
            allJobPosts();           
        }
        else if (location.length === 0 && field.length > 0) {
            jobFilteredByOneItems('field', field)
        }
        else if (location.length > 0 && field.length === 0) {
            jobFilteredByOneItems('location', location)
        }
        else if (location.length > 0 && field.length > 0) {
            jobFilteredByTwoItems(field, location)            
        }
    }

    const classes = useStyle();
    return (
        <div>
            <Box p={3} mt={-5} className={classes.wrapper}>               
                <Select disableUnderline="true" variant="filled" defaultValue="Electrician" onChange={handleFieldChange}>
                    <MenuItem value="Electrician"> Electrician </MenuItem>
                    <MenuItem value="Plumber"> Plumber </MenuItem>
                    <MenuItem value="Home inspector"> Home inspector </MenuItem>
                    <MenuItem value="Boilermaker"> Boilermaker </MenuItem>
                    <MenuItem value="Landscape Designer"> Landscape designer </MenuItem>
                    <MenuItem value="Others"> Other </MenuItem>
                    <MenuItem value=""><em>None</em></MenuItem>
                </Select>
                {/* this is the work place */}
                <Select disableUnderline="true" variant="filled" defaultValue="Melbourne" onChange={handleLocationChange}>
                    <MenuItem value="Melbourne"> Melbourne </MenuItem>
                    <MenuItem value="Sydney"> Sydney </MenuItem>
                    <MenuItem value="Brisbane"> Brisbane </MenuItem>
                    <MenuItem value=""><em>None</em></MenuItem>
                </Select>
                <Button variant="contained" color="primary" disableLElevation onClick={handleSearch}>
                    SEARCH
                </Button>
            </Box>
            {jobPosts.map(item => <JobCard item={item} />)}
        </div>
    );
};

export default SearchBar;