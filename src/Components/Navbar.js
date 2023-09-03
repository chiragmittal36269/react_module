import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div>
                    <NavLink to="/" className="logo">
                        Dictionary App
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/" className="link_1">
                        Home
                    </NavLink>
                    <NavLink to="/search" className="link_2">
                        History
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
