import "react-toastify/dist/ReactToastify.css";
import "./logRegister.css";

import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import AuthContext from "../../context/Authcontext";
import { Redirect } from "react-router-dom";

const Register = () => {
    const { registerFn } = useContext(AuthContext);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setvalues({ ...values, [name]: value });
    };
    const [values, setvalues] = useState({
        firstName: "",
        lastName: "",
        mobileNo: "",
        email: "",
        password: "",
        passwordAgain: "",
        level: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const checkEmptyFields = Object.values(values).some(
            (element) => element === ""
        );
        if (checkEmptyFields) {
            toast.error("All fields should be filleds ");
            return;
        } else if (values.password.length < 8) {
            toast.error("Password should be of atleast 8 characters");
            return;
        } else if (values.password !== values.passwordAgain) {
            toast.error("Password doesnot match");
            return;
        } else {
            console.log(values);
            const { status, message } = registerFn(values);

            if (status === 200) {
                toast.success(message);
                <Redirect to="/" />;
            } else {
                toast.error(message);
            }
        }
    };

    return (
        <div className="container-md register-page">
            <h2 className="text-center">Resgister Here</h2>
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
                        <label htmlFor="passwordAgain">Mobile Number</label>
                        <input
                            onChange={handleInputChange}
                            name="mobileNo"
                            id="mobileNo"
                            value={values.mobileNo}
                            type="number"
                            placeholder="mobileNo"
                            className="form-control"
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
                            onChange={handleInputChange}
                            name="password"
                            id="password"
                            value={values.password}
                            type="password"
                            placeholder="password"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="passwordAgain">passwordAgain</label>
                        <input
                            onChange={handleInputChange}
                            name="passwordAgain"
                            id="passwordAgain"
                            value={values.passwordAgain}
                            type="password"
                            placeholder="confirm Password"
                            className="form-control"
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

export default Register;
