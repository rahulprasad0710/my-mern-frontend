import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="brandName">
                    <NavLink to="/">Brand Name</NavLink>
                </div>

                <div className="auth">
                    <NavLink to="/login">
                        <button>Sign in</button>
                    </NavLink>

                    <button>Log Out</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
