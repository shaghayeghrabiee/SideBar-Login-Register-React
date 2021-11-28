import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg main-navbar" >
                <div className="container-fluid d-flex">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav col-md-8">
                            <li className="nav-item">
                                <NavLink activeStyle={{ color: "white" }} className="nav-link" to="/">صفحه اصلی</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{ color: "white" }} className="nav-link" to="/">  تماس با ما</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{ color: "white" }} className="nav-link " to="/">درباره ما</NavLink>
                            </li>

                        </ul>
                        <NavLink
                            to="/login"
                            activeStyle={{ color: "white"}}
                        >
                            {" "}
                            ورود{" "}
                        </NavLink>{" "}
                        /
                        <NavLink
                            to="/register"
                            activeStyle={{ color: "white"}}
                        >
                            {" "}
                            عضویت{" "}
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default MainNavBar;