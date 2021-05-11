import React, { useContext, useEffect, useState } from "react";
import { MatchMakingContext } from "../../../App";
import { firestore } from "../../Login/firebase.config";

const PostDelete = () => {
  const { userLogIn, update } = useContext(MatchMakingContext);
  const [loggedInUser, setLoggedInUser] = userLogIn;
  const [contratorJobPosts, setContratorJobPosts] = useState([]);
  const [isUpdated, setIsUpdated] = update;
  useEffect(() => {
    firestore
      .collection("jobPost")
      .where("email", "==", loggedInUser.email)
      .onSnapshot((querySnapshot) => {
        const firestoreData = querySnapshot.docs;
        let Posts = [];
        firestoreData.map((item) => {
          const itemData = { ...item.data(), id: item.id };
          Posts.push(itemData);
        });
        setContratorJobPosts(Posts);
      });
  }, [isUpdated]);

  const handleDelete = (e, key) => {
    firestore
      .collection("jobPost")
      .doc(key)
      .delete()
      .then(() => {
        alert("Document successfully deleted!");
        setIsUpdated(Math.random());
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>SL No</th>
            <th>Name</th>
            <th>Location</th>
            <th>Field</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Budget</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contratorJobPosts.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.location}</td>
              <td>{item.field}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
              <td>
                {item.lowerBudget}$ to {item.upperBudget}$
              </td>
              <td>{item.description}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-dark btn-sm"
                  onClick={(e) => {
                    handleDelete(e, item.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostDelete;
