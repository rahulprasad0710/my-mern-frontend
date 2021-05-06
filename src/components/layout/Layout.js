import Navbar from "../navbar/Navbar";
import React from "react";

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <main>{props.children}</main>
        </div>
    );
};

export default Layout;
