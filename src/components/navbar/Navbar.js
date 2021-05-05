import "./navbar.css";

import React, { useContext, useState } from "react";

import AuthContext from "../../context/Authcontext";
import { BsBookmarks } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const { user, logoutFn } = useContext(AuthContext);
    const toggleMenuHandler = () => {
        setToggleMenu(!toggleMenu);
        console.log(toggleMenu);
    };

    const [bgChange, setBGChange] = useState(false);
    const changeBG = () => {
        if (window.scrollY >= 100) {
            setBGChange(true);
        } else {
            setBGChange(false);
        }
    };

    window.addEventListener("scroll", changeBG);

    return (
        <nav className={bgChange ? "navbar bgShadow " : "navbar "}>
            <div className="navbar_nav-container container-md ">
                <div className="navbar_brand-toggle">
                    <NavLink className="navbar_brandName" to="/">
                        <h4 className="brandText"> BOOKSTORE</h4>
                    </NavLink>
                    <div
                        className="navbar_toogle-btns "
                        onClick={toggleMenuHandler}>
                        <div
                            className={
                                toggleMenu
                                    ? "navbar_burger navbar_burger-1"
                                    : "navbar_burger"
                            }></div>
                        <div
                            className={
                                toggleMenu
                                    ? "navbar_burger navbar_burger-2"
                                    : "navbar_burger "
                            }></div>
                        <div
                            className={
                                toggleMenu
                                    ? "navbar_burger navbar_burger-3"
                                    : "navbar_burger "
                            }></div>
                    </div>
                </div>

                <div
                    className={
                        toggleMenu
                            ? "navbar_nav-menu-div navbar_nav-menu-div-mobile navbar_menu-active"
                            : "navbar_nav-menu-div navbar_nav-menu-div-mobile "
                    }>
                    <ul className="navbar_nav-menu">
                        <li
                            onClick={() => setToggleMenu(false)}
                            className="navbar_nav-menu-item">
                            <NavLink
                                activeClassName="navLink-active"
                                className="navbar_nav-menu-item-link"
                                to="/profile">
                                <FiUser />
                            </NavLink>
                        </li>

                        <li className="navbar_nav-menu-item">
                            <NavLink
                                onClick={() => setToggleMenu(false)}
                                className="navbar_nav-menu-item-link"
                                activeClassName="navLink-active"
                                to="/bookmark/">
                                <BsBookmarks />
                            </NavLink>
                        </li>
                        <li className="navbar_nav-menu-item">
                            <NavLink
                                onClick={() => setToggleMenu(false)}
                                className="navbar_nav-menu-item-link"
                                activeClassName="navLink-active"
                                to="/cart/">
                                <IoCartOutline />
                            </NavLink>
                        </li>
                    </ul>

                    {user ? (
                        <button onClick={logoutFn}>Logout</button>
                    ) : (
                        <NavLink className="hireme" to="/login">
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
