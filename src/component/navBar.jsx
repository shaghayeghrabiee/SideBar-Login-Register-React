import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as FaIcon from "react-icons/fa";
import * as aiIcon from "react-icons/ai";
import { SidBarData } from './sidBbarData';
import './navBar.css';

const NavBar = () => {
    const [sideBar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sideBar);
    console.log(sideBar);

    return (
        <div>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcon.FaBars onClick={showSideBar} />
                </Link>

            </div>

            <nav className={(sideBar) ? 'nav-menu show' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSideBar} >
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <aiIcon.AiOutlineClose />
                        </Link>
                        {
                            (SidBarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName} >
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>
                                                {item.title}
                                            </span>
                                        </Link>
                                    </li>
                                )
                            }))
                        }

                    </li>
                </ul>

            </nav>


        </div>

    );
}

export default NavBar;