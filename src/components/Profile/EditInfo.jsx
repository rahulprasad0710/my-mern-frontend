import "react-toastify/dist/ReactToastify.css";
import "../Auth/logRegister.css";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";

const EditInfo = ({ infoData, editBlock }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setvalues({ ...values, [name]: value });
    };

    var id = infoData._id;
    const [values, setvalues] = useState({
        firstName: infoData.firstName,
        lastName: infoData.lastName,
        email: infoData.regEmail,
        level: infoData.level,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handle submit working");
        const checkEmptyFields = Object.values(values).some(
            (element) => element === ""
        );
        if (checkEmptyFields) {
            toast.error("All fields should be filleds ");
            return;
        } else {
            console.log(values);
        }
        try {
            console.log("editInfo", values);
            const url = "http://localhost:5000/profile/myinfo";
            const response = await axios.put(url, { id, values });
            if (response.statusText === "OK") {
                toast.success("Account Info Updated");
                editBlock(false);
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div className="container-md register-page">
            <h2 className="text-center">Edit Info</h2>
            <ToastContainer position="top-center" />
            <div className="register-form">
                <form
                    className="register-form-inner"
                    onSubmit={handleSubmit}
                    type="SUBMIT">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            onChange={handleInputChange}
                            id="firstName"
                            name="firstName"
                            value={values.firstName}
                            type="text"
                            placeholder="First Name"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            onChange={handleInputChange}
                            name="lastName"
                            id="lastName"
                            value={values.lastName}
                            placeholder="Last name"
                            className="form-control"
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="level">Level of class</label>
                        <input
                            onChange={handleInputChange}
                            name="level"
                            id="level"
                            value={values.level}
                            type="text"
                            placeholder="Level or class"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile No">Mobile Number</label>
                        <input
                            readOnly
                            name="mobileNo"
                            id="mobileNo"
                            value={infoData.mobileNo}
                            type="number"
                            placeholder="mobileNo"
                            className="form-control disabled"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordAgain">Email ID</label>
                        <input
                            onChange={handleInputChange}
                            name="email"
                            id="email"
                            value={values.email}
                            type="email"
                            placeholder="Writter"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input
                            readOnly
                            value="**********"
                            type="password"
                            className="form-control disabled"
                        />
                    </div>
                </form>
                <input
                    style={{ width: "640px" }}
                    onClick={handleSubmit}
                    type="submit"
                    value="Submit"
                    className="input-btn"
                />
            </div>
        </div>
    );
};

export default EditInfo;
