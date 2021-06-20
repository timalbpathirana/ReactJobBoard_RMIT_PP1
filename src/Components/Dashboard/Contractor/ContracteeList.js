import React, { useContext, useEffect, useState } from 'react';
import { MatchMakingContext } from '../../../App';

const ContracteeList = (props) => {
    
    const { userLogIn, signupUsers } = useContext(MatchMakingContext);
    const [loggedInUser, setLoggedInUser] = userLogIn;
    const [users, setUsers] = signupUsers;    
    const [contractees, setContractees] = useState([]);

    // Getting the contractee list
    
    useEffect(() => {
        const contracteeOfContractorField = users.filter(item => item.field === props.userField && item.userStatus === 'Contractee');        
        setContractees(contracteeOfContractorField)
    }, [])   

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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contractees.map((item, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.location}</td>
                                    <td>{item.field}</td>
                                    <td>{item.email}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContracteeList;