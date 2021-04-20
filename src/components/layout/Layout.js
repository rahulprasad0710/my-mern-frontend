import React from "react";
import Navbar from "../navbar/Navbar";

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <main className="navbar-container">{props.children}</main>
        </div>
    );
};

export default Layout;
