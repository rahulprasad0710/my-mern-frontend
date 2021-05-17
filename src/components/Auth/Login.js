import React, { useContext, useState } from "react";

import AuthContext from "../../context/Authcontext";
import { NavLink } from "react-router-dom";

const Register = () => {
    const [mobileNo, setMobileNo] = useState("");
    const { loginFn } = useContext(AuthContext);
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginData = {
            password,
            mobileNo,
        };

        loginFn(loginData);
    };

    return (
        <div className="container">
            <h2>Login Here</h2>
            <form onSubmit={handleSubmit} type="SUBMIT">
                <label htmlFor="mobileNo">Mobile No</label>
                <input
                    placeholder="Mobile Number"
                    onChange={(e) => setMobileNo(e.target.value)}
                    value={mobileNo}
                    className="form-control"
                    type="number"
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="form-control"
                />

                <br />

                <button type="submit" onClick={handleSubmit}>
                    Login
                </button>
            </form>

            <p>
                New to BookStore ?{" "}
                <NavLink className="navbar_brandName" to="/register">
                    SIGN UP
                </NavLink>{" "}
            </p>
        </div>
    );
};

export default Register;
