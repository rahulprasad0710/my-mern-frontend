import "./profile.css";

import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/Authcontext";
import { FaRegAddressCard } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import MyAddress from "./MyAddress";
import MyOrders from "./MyOrders";
import MyPayments from "./MyPayments";
import Myinfo from "./Myinfo";
import axios from "axios";

axios.defaults.withCredentials = true;

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [userStatus, setUserStatus] = useState(false);

    useEffect(() => {
        if (user) {
            setUserStatus(true);
        }
    }, [user]);

    let { path, url } = useRouteMatch();
    return (
        <div className="container-md profile-page">
            <div
                className={
                    userStatus ? "grid-container" : "grid-container disabled "
                }>
                <Link to={`${url}/myinfo`}>
                    <div className="profile-box my-info">
                        {" "}
                        <h3>
                            <span>
                                <FiUser />{" "}
                            </span>{" "}
                            My Info
                        </h3>
                        <p>
                            <span className="accNote">
                                Edit personal info, change password
                            </span>
                        </p>
                    </div>
                </Link>

                <Link to={`${url}/myaddress`}>
                    <div className=" profile-box my-address">
                        <h3>
                            <span>
                                {" "}
                                <FaRegAddressCard />{" "}
                            </span>
                            My Address
                        </h3>
                        <p>
                            <span className="accNote">
                                Edit, add or remove addresses
                            </span>
                        </p>
                    </div>
                </Link>

                <Link to={`${url}/myorder`}>
                    <div className=" profile-box my-order">
                        <h3>
                            {" "}
                            <span>
                                <IoCartOutline />{" "}
                            </span>
                            My Orders
                        </h3>
                        <p>
                            <span className="accNote">
                                View, modify and track orders
                            </span>
                        </p>
                    </div>
                </Link>

                <Link to={`${url}/mypayment`}>
                    <div className="profile-box my-wishlist">
                        {" "}
                        <h3>
                            <span>
                                <MdPayment />{" "}
                            </span>
                            My Payments
                        </h3>
                        <p>
                            <span className="accNote">
                                View,edit payment methods
                            </span>
                        </p>
                    </div>
                </Link>
            </div>
            {userStatus ? (
                ""
            ) : (
                <div>
                    <h4>You need to login to see information details.</h4>

                    <Link to="/">
                        <button className="btn-block">Go Back</button>
                    </Link>
                    <Link to="/login">
                        <button className="btn-block">Login </button>
                    </Link>
                    <Link to="/register">
                        <button className="btn-block">Sign Up </button>
                    </Link>
                </div>
            )}
            <Switch>
                <Route path={`${path}/myaddress`}>
                    <MyAddress />
                </Route>
                <Route path={`${path}/myinfo`}>
                    <Myinfo />
                </Route>
                <Route path={`${path}/myorder`}>
                    <MyOrders />
                </Route>
                <Route path={`${path}/myorders`}>
                    <MyOrders />
                </Route>
                <Route path={`${path}/mypayment`}>
                    <MyPayments />
                </Route>
            </Switch>
        </div>
    );
};

export default Profile;
