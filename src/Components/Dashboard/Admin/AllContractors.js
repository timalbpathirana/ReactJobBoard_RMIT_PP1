import React, { useContext, useEffect, useState } from 'react';
import { MatchMakingContext } from '../../../App';
import { firestore } from '../../Login/firebase.config';

const AllContractors = () => {
    const { update } = useContext(MatchMakingContext);
    const [isUpdated, setIsUpdated] = update;
    const [contractors, setContractors] = useState([]);    

    useEffect(() => {
        firestore.collection("users").where("userStatus", "==", "Contractor")
            .onSnapshot((querySnapshot) => {
                const firestoreData = querySnapshot.docs
                let contratorsData = [];
                firestoreData.map(item => {
                    const itemData = { ...item.data(), id: item.id }
                    contratorsData.push(itemData)
                })
                setContractors(contratorsData)
            });
    }, [isUpdated])

    const handleDelete = async (e, key, email) => {

        await fetch('https://agile-reaches-10761.herokuapp.com/userDelete?email=' + email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {                
                fetch('https://agile-reaches-10761.herokuapp.com/userDelete?uid=' + data.uid, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            });

        await firestore.collection("users").doc(key).delete().then(() => {
            alert("Document successfully deleted!");
            setIsUpdated(Math.random())            
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

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
                        {
                            contractors.map((item, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.location}</td>
                                    <td>{item.field}</td>
                                    <td>{item.email}</td>
                                    <td><button type="button" class="btn btn-outline-dark btn-sm" onClick={(e) => { handleDelete(e, item.id, item.email) }}>Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllContractors;