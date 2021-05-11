import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { MatchMakingContext } from "../../../App";
import { firestore } from "../../Login/firebase.config";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "auto",
  width: "auto",
};

const NewUserRegistration = () => {
  let history = useHistory();
  const { userLogIn } = useContext(MatchMakingContext);
  const [loggedInUser, setLoggedInUser] = userLogIn;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const currentform = useRef(null);

  const signOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    setLoggedInUser([]);
    history.push("/dashboard");
  };

  const onSubmit = (data) => {
    firestore
      .collection("users")
      .add({
        name: loggedInUser.name,
        email: loggedInUser.email,
        location: data.location,
        field: data.field,
        userStatus: data.userStatus,
      })
      .then(() => {
        alert("Registration Completed👍");
        // currentform.current.reset();
        signOut();
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <form
      style={containerStyle}
      onSubmit={handleSubmit(onSubmit)}
      ref={currentform}
    >
      <div className="card border-success bg-light px-2 py-2 mb-2">
        <div className="form-group row">
          <div className="col-3">
            <label>
              <b>Name of Location</b>
            </label>
            <select
              className="form-control"
              {...register("location", { required: true })}
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option value="Melbourne">Melbourne</option>
              <option value="Sydney">Sydney</option>
              <option value="Brisbane">Brisbane</option>
            </select>
            {errors.location && <span>This field is required</span>}
          </div>
          <div className="col-3">
            <label>
              <b>Field</b>
            </label>
            <select
              className="form-control"
              {...register("field", { required: true })}
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option value="Plumber">Plumber</option>
              <option value="Electrician">Electrician</option>
              <option value="Home inspector">Home inspector</option>
              <option value=" Boilermaker">Boilermaker</option>
              <option value="Landscape Designer">Landscape Designer</option>
              <option value="Others">Others</option>
            </select>
            {errors.field && <span>This field is required</span>}
          </div>

          <div className="col-3">
            <label>
              <b>User Status</b>
            </label>
            <select
              className="form-control"
              {...register("userStatus", { required: true })}
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option value="Contractor">Contractor</option>
              <option value="Contractee">Contractee</option>
            </select>
            {errors.userStatus && <span>This field is required</span>}
          </div>
        </div>

        <div className="form-group text-right">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewUserRegistration;
