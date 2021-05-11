import React, { useContext, useEffect, useState } from "react";
import { MatchMakingContext } from "../../../App";
import { firestore } from "../../Login/firebase.config";

const AllContractee = () => {
  const { update } = useContext(MatchMakingContext);
  const [isUpdated, setIsUpdated] = update;
  const [contractees, setContractees] = useState([]);

  useEffect(() => {
    firestore
      .collection("users")
      .where("userStatus", "==", "Contractee")
      .onSnapshot((querySnapshot) => {
        const firestoreData = querySnapshot.docs;
        let contrateesData = [];
        firestoreData.map((item) => {
          const itemData = { ...item.data(), id: item.id };
          contrateesData.push(itemData);
        });
        setContractees(contrateesData);
      });
  }, [isUpdated]);

  const handleDelete = (e, key, email) => {
    fetch("http://localhost:5000/userDelete?email=" + email, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        fetch("http://localhost:5000/userDelete?uid=" + data.uid, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => console.log(res));
      });

    firestore
      .collection("users")
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
    <div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>Location</th>
              <th>Field</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contractees.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{item.field}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-dark btn-sm"
                    onClick={(e) => {
                      handleDelete(e, item.id, item.email);
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
    </div>
  );
};

export default AllContractee;
