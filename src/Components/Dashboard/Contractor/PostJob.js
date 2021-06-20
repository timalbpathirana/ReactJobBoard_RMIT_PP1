import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { MatchMakingContext } from '../../../App';
import { firestore } from '../../Login/firebase.config';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "auto",
    width: "auto"
}

// Contractor posting a job function

const PostJob = () => {
    const { userLogIn } = useContext(MatchMakingContext);
    const [loggedInUser, setLoggedInUser] = userLogIn;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const currentform = useRef(null);

    const onSubmit = data => {
        firestore.collection("jobPost")
            .add({
                name: data.name,
                location: data.location,
                email: loggedInUser.email,
                phoneNumber: data.phoneNumber,
                field: data.field,
                lowerBudget: data.lowerBudget,
                upperBudget: data.upperBudget,
                description: data.description,
            })
            .then(() => {
                alert("Job post done👍");
                currentform.current.reset();
            })
            .catch((error) => {
                alert(error.message);
            });
    };
    return (
        <form style={containerStyle} onSubmit={handleSubmit(onSubmit)} ref={currentform}>
            <div className="card border-success bg-light px-2 py-2 mb-2">
                <div className="form-group row">
                    <div className="col-3">
                        <label><b>Name</b></label>
                        <input type="text" placeholder="Enter Your Name" className="form-control" {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="col-3">
                        <label><b>Name of Location</b></label>
                        <select className="form-control" {...register("location", { required: true })}>
                            <option selected value="" >Choose...</option>
                            <option value="Melbourne">Melbourne</option>
                            <option value="Sydney">Sydney</option>
                            <option value="Brisbane">Brisbane</option>
                        </select>
                        {errors.location && <span>This field is required</span>}
                    </div>
                    <div className="col-3">
                        <label><b>Field</b></label>
                        <select className="form-control" {...register("field", { required: true })}>
                            <option selected value="" >Choose...</option>
                            <option value="Plumber">Plumber</option>
                            <option value="Electrician">Electrician</option>
                            <option value="Home inspector">Home inspector</option>
                            <option value="Boilermaker">Boilermaker</option>
                            <option value="Landscape Designer">Landscape Designer</option>
                            <option value="Others">Others</option>
                        </select>
                        {errors.field && <span>This field is required</span>}
                    </div>

                    {/* <div className="col-3">
                        <label><b>Email</b></label>
                        <input type="text" placeholder="Enter email address" className="form-control" {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                    </div> */}

                    <div className="col-3">
                        <label><b>Phone Number</b></label>
                        <input type="text" placeholder="Enter your phone number" className="form-control" {...register("phoneNumber", { required: true })} />
                        {errors.phoneNumber && <span>This field is required</span>}
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-6">
                        <div className="border border-success p-1">
                            <label className="d-flex justify-content-center"><b>Budget</b></label>
                            <div className="form-group row">
                                <div className="col-5">
                                    <input type="number" className="form-control" placeholder="lower" {...register("lowerBudget", { required: true })} />
                                    {errors.lowerBudget && <span>This field is required</span>}
                                </div>
                                <div className="col-2">to</div>
                                <div className="col-5">
                                    <input type="number" className="form-control" placeholder="upper" {...register("upperBudget", { required: true })} />
                                    {errors.upperBudget && <span>This field is required</span>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <label><b>Description</b></label>
                        <textarea type="text" className="form-control" placeholder="Job Description" {...register("description", { required: true })} />
                        {errors.description && <span>This field is required</span>}
                    </div>
                    {/* <div className="col-3">
                        <label htmlFor="photo"><b>Upload Image</b></label>
                        <input {...register("picture", { required: true })} type="file" className="form-control" id="photo" />
                    </div> */}
                </div>
                <div className="form-group text-right">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default PostJob;
