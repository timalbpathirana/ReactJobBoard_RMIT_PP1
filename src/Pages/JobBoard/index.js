import React from 'react';
import SearchBar from './SearchBar';
import JobView from './JobView';
import JobCard from './JobCard';
const JobBoard = () =>{
    
    return (
        <div>
            <SearchBar/>
            <JobView />
            <JobCard />
        </div>
    )
}

export default JobBoard;
