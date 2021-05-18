import React from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';
import JobBoard from './Component/JobBoard';

const App = () =>{
    
    return (
        <div>
            <Header/>
            <JobBoard />
            <Footer />
        </div>
    )
}

export default App;