import React, { useEffect, useState } from 'react';
import { firestore } from '../../Login/firebase.config';

const AvailableJobs = (props) => {
    const [jobAvailable, setJobAvailable] = useState([]);
    let jobPosts = [];
    const jobPostsStatus = async () => {
        await firestore.collection("jobPost").get().then((querySnapshot) => {
            const firestoreData = querySnapshot.docs
            firestoreData.map(item => {
                const itemData = { ...item.data(), id: item.id }
                const destructureData = { email: itemData.email, name: itemData.name, field: itemData.field, location: itemData.location, lowerBudget: itemData.lowerBudget, upperBudget: itemData.upperBudget, phoneNumber: itemData.phoneNumber, description: itemData.description, id: itemData.id }
                jobPosts.push(destructureData)
            })
        });
        const jobPostForContratee = jobPosts.filter(item => item.field === props.userField);
        setJobAvailable(jobPostForContratee)
    }

    useEffect(() => {
        jobPostsStatus();
    }, [])


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
                    </tr>
                </thead>
                <tbody>
                    {
                        jobAvailable.map((item, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.location}</td>
                                <td>{item.field}</td>
                                <td><a href={`mailto:${item.email}`}>{item.email}</a></td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.lowerBudget}$ to {item.upperBudget}$</td>
                                <td>{item.description}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AvailableJobs;