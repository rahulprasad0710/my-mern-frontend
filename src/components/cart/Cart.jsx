import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/Authcontext";
import order from "./order.json";

const Cart = () => {
    const { user } = useContext(AuthContext);
    console.log(order);
    useEffect(() => {
        if (user) {
        }
    }, [user]);
    return (
        <div className="container-md cart-page">
            <h2>My Cart</h2>
            <div className="cart_all-book">
                <div className="cart_one-book"></div>
            </div>
            <div className="cart_price-summary">price summary</div>
        </div>
    );
};

export default Cart;
