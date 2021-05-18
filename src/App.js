import React from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';
import JobBoard from './Pages/JobBoard';
import DashBoard from './Pages/Dashboard';
import {BrowserRouter,Route} from 'react-router-dom';
const App = () =>{
    
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={JobBoard}></Route>
                    <Route path='/dashboard' exact component={DashBoard}></Route>
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App;