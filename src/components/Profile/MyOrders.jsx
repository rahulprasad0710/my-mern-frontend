import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/Authcontext";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [infoData, setinfoData] = useState(null);
    const history = useHistory();
    useEffect(() => {
        const userInfoFn = async (e) => {
            if (!user) {
                history.push("/profile");
                return;
            } else {
                try {
                    const url = "http://localhost:5000/profile/orderhistory";
                    const infoResponse = await axios.get(url, {
                        withCredentials: true,
                    });
                    console.log(infoResponse);
                    setinfoData(infoResponse.data.orderHistory);
                } catch (error) {
                    console.log(error);
                }
            }
        };
        userInfoFn();
    }, [user, history]);

    const orders = () => {
        if (infoData.length > 0) {
            return (
                <div className="each-order">
                    <div className="each-order_info-1">
                        <h3>
                            Ordered Placed at : <span>date</span>
                        </h3>
                        <h3>
                            Delivered At : <span>date</span>
                        </h3>
                    </div>
                    <div className="each-order_info-2">
                        <h3>
                            Book : <span>title</span>
                        </h3>
                        <h3>
                            <span>Price: priceRate</span>
                            <span>Quatntity: quantity</span>
                        </h3>
                    </div>
                    <div className="each-order_info-3">
                        <h3>Paid Status : </h3>
                        <h3>Payment Mode : paymentMethod </h3>
                        <h3>Status : status</h3>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>No Order has been placed.</h2>
                    <Link>
                        <button className="btn-block">Go Shopping</button>
                    </Link>
                </div>
            );
        }
    };

    return (
        <div>
            <h1>My Orders</h1>

            <div className="all-orders">{orders()}</div>
        </div>
    );
};

export default MyOrders;
