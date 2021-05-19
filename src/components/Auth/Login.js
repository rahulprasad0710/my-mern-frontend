import { Link, useHistory } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import AuthContext from "../../context/Authcontext";

const Register = () => {
    const history = useHistory();
    const [mobileNo, setMobileNo] = useState("");
    const { loginFn, user, checkUserLoggedInFn } = useContext(AuthContext);
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (user) {
            history.push("/");
        }
    }, [user, history]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!mobileNo || !password) {
            toast.error("please enter all the fields");
        } else if (mobileNo.length !== 10) {
            toast.error("Mobile Number should have 10 digits");
        } else {
            const loginData = {
                password,
                mobileNo,
            };
            const data = await loginFn(loginData);

            if (data.status === 200) {
                toast.success(data.data.message);
                checkUserLoggedInFn();
                history.push("/");
            } else {
                toast.error(data.data.message);
            }
        }
    };

    return (
        <div className="container-md">
            <ToastContainer position="top-center" />
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

                <button
                    className="btn-block"
                    type="submit"
                    onClick={handleSubmit}>
                    Login
                </button>
            </form>
            <p>
                New to BookStore ? <Link to="/register">SIGN UP</Link>{" "}
            </p>
        </div>
    );
};

export default Register;
