import {
  faAd,
  faEraser,
  faHome,
  faPersonBooth,
  faRegistered,
  faSignOutAlt,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { MatchMakingContext } from "../../App";
import { firestore } from "../Login/firebase.config";
import AvailableJobs from "./Contractee/AvailableJobs";
import ContracteeList from "./Contractor/ContracteeList";
import PostDelete from "./Contractor/PostDelete";
import PostJob from "./Contractor/PostJob";
import NewUserRegistration from "./NewUser/NewUserRegistration";

const Dashboard = () => {
  let history = useHistory();
  const { userLogIn, signupUsers } = useContext(MatchMakingContext);
  const [loggedInUser, setLoggedInUser] = userLogIn;
  const [users, setUsers] = signupUsers;
  const [selectedMenu, setSelectedMenu] = useState("");
  const [userStatus, setUserStatus] = useState([]);
  const [userField, setUserField] = useState([]);
  let signupUsersdata = [];

  const loggedInUserStatus = async () => {
    await firestore
      .collection("users")
      .get()
      .then((querySnapshot) => {
        const firestoreData = querySnapshot.docs;
        firestoreData.map((item) => {
          const itemData = { ...item.data(), id: item.id };
          const destructureData = {
            email: itemData.email,
            name: itemData.name,
            field: itemData.field,
            location: itemData.location,
            userStatus: itemData.userStatus,
            id: itemData.id,
          };
          signupUsersdata.push(destructureData);
        });
      });
    const loggedInUserDetails = await signupUsersdata.find(
      (item) => item.email === loggedInUser.email
    );
    if (loggedInUserDetails === undefined) {
      setUserStatus("NEWUSER");
    } else {
      setUserStatus(loggedInUserDetails.userStatus);
      setUserField(loggedInUserDetails.field);
      setUsers(signupUsersdata);
      return loggedInUserDetails;
    }
  };
  useEffect(() => {
    firestore
      .collection("admin")
      .where("email", "==", loggedInUser.email)
      .onSnapshot((querySnapshot) => {
        if (querySnapshot.empty && querySnapshot.docs.length === 0) {
          loggedInUserStatus();
        } else {
          history.push("/adminDashboard");
        }
      });
  }, []);

  const signOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    setLoggedInUser([]);
    history.push("/");
  };

  return (
    <div>
      <div className="container-fluid">
        <header className="navbar navbar-light sticky-top bg-dark mt-4 p-0 shadow">
          <button
            className="navbar-toggler position-absolute d-md-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </header>
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav nav-pills flex-column mb-auto">
                {userStatus === "Contractor" && (
                  <div>
                    <li onClick={() => setSelectedMenu("POSTJOB")}>
                      <Link
                        className={
                          selectedMenu === "POSTJOB"
                            ? "nav-link text-dark bg-warning"
                            : "nav-link text-dark"
                        }
                      >
                        <svg
                          className="bi me-4"
                          style={{ width: "16px", height: "16px" }}
                        >
                          <FontAwesomeIcon icon={faAd} />
                        </svg>
                        Post a job
                      </Link>
                    </li>
                    <li onClick={() => setSelectedMenu("DELETEPOST")}>
                      <Link
                        className={
                          selectedMenu === "DELETEPOST"
                            ? "nav-link text-dark bg-warning"
                            : "nav-link text-dark"
                        }
                      >
                        <svg
                          className="bi me-4"
                          style={{ width: "16px", height: "16px" }}
                        >
                          <FontAwesomeIcon icon={faEraser} />
                        </svg>
                        Delete Post
                      </Link>
                    </li>
                    <li onClick={() => setSelectedMenu("CONTRACTEE")}>
                      <Link
                        className={
                          selectedMenu === "CONTRACTEE"
                            ? "nav-link text-dark bg-warning"
                            : "nav-link text-dark"
                        }
                      >
                        <svg
                          className="bi me-4"
                          style={{ width: "16px", height: "16px" }}
                        >
                          <FontAwesomeIcon icon={faPersonBooth} />
                        </svg>
                        Available Contractee
                      </Link>
                    </li>
                  </div>
                )}
                {userStatus === "Contractee" && (
                  <div>
                    <li onClick={() => setSelectedMenu("AVAILABLEJOBS")}>
                      <Link
                        className={
                          selectedMenu === "AVAILABLEJOBS"
                            ? "nav-link text-dark bg-warning"
                            : "nav-link text-dark"
                        }
                      >
                        <svg
                          className="bi me-4"
                          style={{ width: "16px", height: "16px" }}
                        >
                          <FontAwesomeIcon icon={faTasks} />
                        </svg>
                        Available Jobs
                      </Link>
                    </li>
                  </div>
                )}
                {userStatus === "NEWUSER" && (
                  <div>
                    <li onClick={() => setSelectedMenu("REGISTRATION")}>
                      <Link
                        className={
                          selectedMenu === "REGISTRATION"
                            ? "nav-link text-dark bg-warning"
                            : "nav-link text-dark"
                        }
                      >
                        <svg
                          className="bi me-4"
                          style={{ width: "16px", height: "16px" }}
                        >
                          <FontAwesomeIcon icon={faRegistered} />
                        </svg>
                        Registration
                      </Link>
                    </li>
                  </div>
                )}
              </ul>
              <hr />
              <ul className="nav nav-pills flex-column mb-auto shadow">
                <li onClick={signOut}>
                  <Link className="nav-link text-dark ">
                    <svg
                      className="bi me-4"
                      style={{ width: "16px", height: "16px" }}
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} />
                    </svg>
                    SignOut
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Client Dashboard</h1>
            </div>
            {selectedMenu === "POSTJOB" && <PostJob />}
            {selectedMenu === "DELETEPOST" && <PostDelete />}
            {selectedMenu === "REGISTRATION" && <NewUserRegistration />}
            {selectedMenu === "CONTRACTEE" && (
              <ContracteeList userField={userField} userStatus={userStatus} />
            )}
            {selectedMenu === "AVAILABLEJOBS" && (
              <AvailableJobs userField={userField} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
