import "./profile.css";

import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import { FaRegAddressCard } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import MyAddress from "./MyAddress";
import Myinfo from "./Myinfo";
import React from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

const Profile = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <h3>Hi,Rahul</h3>
            <div className="grid-container">
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
                            View,edit or payment methods
                        </span>
                    </p>
                </div>
            </div>

            <Switch>
                <Route path={`${path}/myaddress`}>
                    <MyAddress />
                </Route>
                <Route path={`${path}/myinfo`}>
                    <Myinfo />
                </Route>
            </Switch>
        </div>
    );
};

export default Profile;
