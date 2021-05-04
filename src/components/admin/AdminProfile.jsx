import React, { useContext, useState } from "react";

import { NavLink } from "react-router-dom";

const AddBook = () => {
    const [mobileNo, setMobileNo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAdmin, setPasswordAdmin] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const registerData = {
            email,
            password,
            mobileNo,
        };
    };

    return (
        <div>
            <h2>Register Here</h2>
            <form onSubmit={handleSubmit} type="SUBMIT">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="form-control"
                />
                <label htmlFor="mobileNo">Mobile Number</label>
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
                <label htmlFor="passwordAgain">Confirm Password</label>
                <input
                    type="password"
                    placeholder="Confirm your Password"
                    onChange={(e) => setPasswordAgain(e.target.value)}
                    value={passwordAgain}
                    className="form-control"
                />
                <br />

                <button type="submit" onClick={handleSubmit}>
                    Signin
                </button>
            </form>

            <p>
                Already have an account ?{" "}
                <NavLink className="navbar_brandName" to="/Login">
                    Login
                </NavLink>{" "}
            </p>
        </div>
    );
};

export default AddBook;
