import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import React from "react";

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <main className="layout-main">{props.children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
