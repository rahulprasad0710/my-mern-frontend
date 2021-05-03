import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const toggleMenuHandler = () => {
        setToggleMenu(!toggleMenu);
        console.log(toggleMenu);
    };

    return (
        <nav className="navbar">
            <div className="navbar_nav-container ">
                <div className="navbar_brand-toggle">
                    <div className="navbar_brandName">Everest Sketch</div>
                    <div
                        className="navbar_toogle-btns "
                        onClick={toggleMenuHandler}
                    >
                        <div
                            className={
                                toggleMenu
                                    ? "navbar_burger navbar_burger-1"
                                    : "navbar_burger"
                            }
                        ></div>
                        <div
                            className={
                                toggleMenu
                                    ? "navbar_burger navbar_burger-2"
                                    : "navbar_burger "
                            }
                        ></div>
                        <div
                            className={
                                toggleMenu
                                    ? "navbar_burger navbar_burger-3"
                                    : "navbar_burger "
                            }
                        ></div>
                    </div>
                </div>

                <div
                    className={
                        toggleMenu
                            ? "navbar_nav-menu-div navbar_nav-menu-div-mobile navbar_menu-active"
                            : "navbar_nav-menu-div navbar_nav-menu-div-mobile "
                    }
                >
                    <ul className="navbar_nav-menu">
                        <li className="navbar_nav-menu-item">
                            <a className="navbar_nav-menu-item-link" href="/">
                                Home
                            </a>
                        </li>
                        <li className="navbar_nav-menu-item">
                            <a className="navbar_nav-menu-item-link" href="/">
                                About Us
                            </a>
                        </li>
                        <li className="navbar_nav-menu-item">
                            <a className="navbar_nav-menu-item-link" href="/">
                                Gallery
                            </a>
                        </li>
                        <li className="navbar_nav-menu-item">
                            <a className="navbar_nav-menu-item-link" href="/">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
