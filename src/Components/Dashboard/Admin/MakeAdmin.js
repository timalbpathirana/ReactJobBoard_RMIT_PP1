import React, { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { MatchMakingContext } from '../../../App';
import { firestore } from '../../Login/firebase.config';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "auto",
    width: "auto"
}

const MakeAdmin = () => {
    const { update } = useContext(MatchMakingContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let history = useHistory();
    const currentform = useRef(null);
    const [allAdmin, setAllAdmin] = useState([]);
    const [isUpdated, setIsUpdated] = update;
    

    useEffect(() => {
        firestore.collection("admin").get().then((querySnapshot) => {
            const firestoreData = querySnapshot.docs
            let admin = []
            firestoreData.map(item => {
                const itemData = { ...item.data(), id: item.id }
                admin.push(itemData)
            })
            setAllAdmin(admin)
        });
    }, [isUpdated])  
    
    const handleDelete = (e, key) => {
        firestore.collection("admin").doc(key).delete().then(() => {
            alert("Document successfully deleted!");
            setIsUpdated(Math.random())           
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    const onSubmit = data => {
        firestore.collection("admin")
            .add({
                email: data.email,
            })
            .then(() => {
                alert("Admin creation done👍");
                setIsUpdated(Math.random())
                currentform.current.reset();
            })
            .catch((error) => {
                alert(error.message);
            });
    }
    return (
        <div className="col-md-12">
            <div className="table-responsive">
                <div className="mr-auto p-2 bd-highlight"><h5><b>All Admin</b></h5></div>
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allAdmin.map((item, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.email}</td>
                                    <td><button type="button" class="btn btn-outline-dark btn-sm" onClick={(e) => { handleDelete(e, item.id) }}>Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            <div className="bd-highlight mb-3">
                <div className="mr-auto p-2 bd-highlight"><h5><b>Creating a New Admin:</b></h5></div>
                <form onSubmit={handleSubmit(onSubmit)} style={containerStyle} ref={currentform} className="card border-success p-5 form-inline">
                    <input type="text" className="form-control " {...register("email", { required: true })} placeholder="Admin Email Address" />
                    {errors.email && <span>This field is required</span>}
                    <button type="submit" className="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;