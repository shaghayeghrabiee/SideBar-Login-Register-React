import React from 'react';
import * as FaIcon from "react-icons/fa";
import * as aiIcon from "react-icons/ai";
import * as ioIcon from "react-icons/io";

export const SidBarData = [
    {
        title: "Home",
        path: "/",
        icon: <aiIcon.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Reports",
        path: "/reports",
        icon: <ioIcon.IoIosPaper />,
        cName: "nav-text"
    },
    {
        title: "Products",
        path: "/products",
        icon: <FaIcon.FaCartPlus />,
        cName: "nav-text"
    },
    {
        title: "Team",
        path: "/team",
        icon: <ioIcon.IoMdPeople />,
        cName: "nav-text"
    },
    {
        title: "messages",
        path: "/messages",
        icon: <FaIcon.FaEnvelope />,
        cName: "nav-text"
    }
]