import React, { useContext, useEffect, useState } from 'react';
import {
    Button,
    Box,
    Select,
    MenuItem,
    makeStyles,
} from "@material-ui/core";
import { MatchMakingContext } from '../../App';
import { firestore } from '../Login/firebase.config';

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
    const { update } = useContext(MatchMakingContext);
    const [isUpdated, setIsUpdated] = update;
    const [jobPosts, setJobPosts] = useState([]);
    const [jobType, setJobType] = useState([]);
    const [field, setField] = useState([]);
    const [location, setLocation] = useState([]);

    useEffect(() => {
        firestore.collection("jobPost").get().then((querySnapshot) => {
            const firestoreData = querySnapshot.docs
            let Posts = [];
            firestoreData.map(item => {
                const itemData = { ...item.data(), id: item.id }
                const destructureData = { field: itemData.field, location: itemData.location, lowerBudget: itemData.lowerBudget, upperBudget: itemData.upperBudget, description: itemData.description, id: itemData.id }
                Posts.push(destructureData)
            })
            setJobPosts(Posts)
        })
    }, []);

    const jobPostByFilter = (name, value) => {
        firestore.collection("jobPost").where(name, "==", value)
            .onSnapshot((querySnapshot) => {
                const firestoreData = querySnapshot.docs
                let Posts = [];
                firestoreData.map(item => {
                    const itemData = { ...item.data(), id: item.id }
                    const destructureData = { field: itemData.field, location: itemData.location, lowerBudget: itemData.lowerBudget, upperBudget: itemData.upperBudget, description: itemData.description, id: itemData.id }
                    Posts.push(destructureData)
                })
                setJobPosts(Posts)                
            });
    }

    const handleFieldChange = (event) => {
        setField({ name: 'field', value: event.target.value });
        jobPostByFilter('field', event.target.value)

    };

    const handleLocationChange = (event) => {
        setLocation({ name: 'location', value: event.target.value });
        jobPostByFilter('location', event.target.value)

    };

    const handleJobTypeChange = (event) => {
        setJobType({ name: 'type', value: event.target.value });

    };

    const handleSearch = () => {
        if (location.value.length === 0 && field.value.length === 0) {
            alert('Don,t have any post')
        }
        else if (location.value.length === 0 && field.value.length > 0) {
            jobPostByFilter(field.name, field.value)
        }
        else if (location.value.length > 0 && field.value.length === 0) {
            jobPostByFilter(location.name, location.value)
        }
        else if (location.value.length > 0 && field.value.length > 0) {
            firestore.collection("jobPost").where(field.name, "==", field.value).where(location.name, "==", location.value).onSnapshot((querySnapshot) => {
                const firestoreData = querySnapshot.docs
                let Posts = [];
                firestoreData.map(item => {
                    const itemData = { ...item.data(), id: item.id }
                    const destructureData = { field: itemData.field, location: itemData.location, lowerBudget: itemData.lowerBudget, upperBudget: itemData.upperBudget, description: itemData.description, id: itemData.id }
                    Posts.push(destructureData)
                })
                setJobPosts(Posts)
            });
        }



    }

    const classes = useStyle();
    return (
        <div>
            <Box p={3} mt={-5} className={classes.wrapper}>
                {/* This is the work type */}
                <Select disableUnderline="true" variant="filled" defaultValue="" onChange={handleJobTypeChange}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Full Time"> Full Time </MenuItem>
                    <MenuItem value="Part Time"> Part Time </MenuItem>
                    <MenuItem value="Casual"> Casual </MenuItem>
                    <MenuItem value="Temp/Contract"> Temp/Contract </MenuItem>
                </Select>
                {/* this is the work mode*/}
                <Select disableUnderline="true" variant="filled" defaultValue="" onChange={handleFieldChange}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Plumber"> Plumber </MenuItem>
                    <MenuItem value="Electrician"> Electrician </MenuItem>
                    <MenuItem value="Home inspector"> Home inspector </MenuItem>
                    <MenuItem value="Boilermaker"> Boilermaker </MenuItem>
                    <MenuItem value="Landscape Designer"> Landscape designer </MenuItem>
                    <MenuItem value="Others"> Other </MenuItem>
                </Select>
                {/* this is the work place */}
                <Select disableUnderline="true" variant="filled" defaultValue="" onChange={handleLocationChange}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Melbourne"> Melbourne </MenuItem>
                    <MenuItem value="Sydney"> Sydney </MenuItem>
                    <MenuItem value="Brisbane"> Brisbane </MenuItem>
                </Select>
                <Button variant="contained" color="primary" disableLElevation onClick={handleSearch}>
                    SEARCH
                </Button>
            </Box>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Location</th>
                            <th>Field</th>
                            <th>Budget</th>
                            <th>Description</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobPosts.map((item, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.location}</td>
                                    <td>{item.field}</td>
                                    <td>{item.lowerBudget}$ to {item.upperBudget}$</td>
                                    <td>{item.description}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SearchBar;