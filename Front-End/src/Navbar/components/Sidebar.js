import "./SidebarStyles.css";
import React from "react";

function Sidebar() {

    return (
        <div className="Navbar-left">
        <div className="but-left">

        <a href="/" rel="noreferrer">
            <button className="false">Home</button>
        </a>

        <a href="/" rel="noreferrer">
            <button className="false">How To Flip</button>
        </a>

        <a href="/" rel="noreferrer">
            <button className="false">LeaderBoard</button>
        </a>

        <a href="/" rel="noreferrer">
            <button className="false">Register / Login </button>
        </a>

        <a href="/" rel="noreferrer">
            <button className="false">Talk</button>
        </a>

        <a href="/" rel="noreferrer">
        <button className="false">Rock-Paper-Scissors</button>
        </a>
        </div>
        </div>
        )
    }
    
    
    export default Sidebar;