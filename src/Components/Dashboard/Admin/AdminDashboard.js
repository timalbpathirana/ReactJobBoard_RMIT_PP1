import { faAd, faHome, faPenNib, faSignOutAlt, faUser, faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MatchMakingContext } from '../../../App';
import Home from '../../Home/Home';
import { firestore } from '../../Login/firebase.config';
import AllContractee from './AllContractee';
import AllContractors from './AllContractors';
import AllJobPosts from './AllJobPosts';
import MakeAdmin from './MakeAdmin';

const AdminDashboard = () => {
    let history = useHistory();
    const [selectedMenu, setSelectedMenu] = useState('');
    const { userLogIn, update, userHomepage } = useContext(MatchMakingContext);
    const [loggedInUser, setLoggedInUser] = userLogIn;
    const [pageStatus, setpageStatus] = userHomepage;
    const [isUpdated, setIsUpdated] = update;
    const [jobPosts, setJobPosts] = useState([]);    

    useEffect(() => {
    firestore.collection("jobPost").get().then((querySnapshot) => {
        const firestoreData = querySnapshot.docs
        let Posts = [];
        firestoreData.map(item => {
            const itemData = { ...item.data(), id: item.id }
            const destructureData = { email: itemData.email, name: itemData.name, field: itemData.field, location: itemData.location, lowerBudget: itemData.lowerBudget, upperBudget: itemData.upperBudget, phoneNumber: itemData.phoneNumber, description: itemData.description, id: itemData.id }
            Posts.push(destructureData)
        })
        setJobPosts(Posts)
    })
}, [isUpdated]); 

    const signOut = () => {
        localStorage.clear();
        sessionStorage.clear();
        setpageStatus(false)
        setLoggedInUser([]);
        history.push('/')
    }
    return (
        <div>
            <div className="container-fluid">
                <header className="navbar navbar-light sticky-top bg-dark mt-4 p-0 shadow">
                    {/* <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a> */}
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </header>
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="nav nav-pills flex-column mb-auto">
                                {/* <li className="nav-item" onClick={() => setSelectedMenu('HOME')}>
                                    <Link className={selectedMenu === 'HOME' ? 'nav-link text-dark bg-warning' : 'nav-link text-dark'}>
                                        <svg className="bi me-4" style={{ width: "16px", height: "16px" }}><FontAwesomeIcon icon={faHome} /></svg>
                                            Home
                                    </Link>
                                </li> */}
                               
                                    <li onClick={() => setSelectedMenu('ALLPOST')}>
                                        <Link className={selectedMenu === 'ALLPOST' ? 'nav-link text-dark bg-warning' : 'nav-link text-dark'}>
                                            <svg className="bi me-4" style={{ width: "16px", height: "16px" }}><FontAwesomeIcon icon={faAd} /></svg>
                                                All Post
                                        </Link>
                                    </li>
                                    <li onClick={() => setSelectedMenu('ALLCONTRATOR')}>
                                        <Link className={selectedMenu === 'ALLCONTRATOR' ? 'nav-link text-dark bg-warning' : 'nav-link text-dark'} >
                                            <svg className="bi me-4" style={{ width: "16px", height: "16px" }}><FontAwesomeIcon icon={faUser} /></svg>
                                            All Contractor
                                        </Link>
                                    </li>
                                    <li onClick={() => setSelectedMenu('ALLCONTRATEE')}>
                                        <Link className={selectedMenu === 'ALLCONTRATEE' ? 'nav-link text-dark bg-warning' : 'nav-link text-dark'}>
                                            <svg className="bi me-4" style={{ width: "16px", height: "16px" }}><FontAwesomeIcon icon={faUserNurse} /></svg>
                                                All Contractee
                                        </Link>
                                    </li>
                                
                                
                                    <li onClick={() => setSelectedMenu('MAKEADMIN')}>
                                        <Link className={selectedMenu === 'MAKEADMIN' ? 'nav-link text-dark bg-warning' : 'nav-link text-dark'}>
                                            <svg className="bi me-4" style={{ width: "16px", height: "16px" }}><FontAwesomeIcon icon={faPenNib} /></svg>
                                                Make Admin
                                        </Link>
                                    </li>
                                
                            </ul>
                            <hr />
                            <ul className="nav nav-pills flex-column mb-auto shadow">
                                <li onClick={signOut}>
                                    <Link className="nav-link text-dark ">
                                        <svg className="bi me-4" style={{ width: "16px", height: "16px" }}><FontAwesomeIcon icon={faSignOutAlt} /></svg>
                                        SignOut
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Admin Dashboard</h1>
                        </div>
                        {/* {selectedMenu === 'HOME' && <Home />} */}
                        {selectedMenu === 'ALLPOST' && <AllJobPosts jobPosts={jobPosts} setIsUpdated={setIsUpdated}/>}
                        {selectedMenu === 'ALLCONTRATOR' && <AllContractors />}
                        {selectedMenu === 'ALLCONTRATEE' && <AllContractee />}
                        {selectedMenu === 'MAKEADMIN' && <MakeAdmin />}
                    </main>
                </div>
            </div>
        </div>
    
    );
};

export default AdminDashboard;