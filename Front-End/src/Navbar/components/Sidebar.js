import "./SidebarStyles.css";
import React from "react";

function Sidebar() {

    return (
        <div className="Navbar-left">
        <div className="but-left">

        <a href="/" rel="noreferrer">
            <button className="false">Infinite Room USDC</button>
        </a>

        <a href="/" rel="noreferrer">
            <button className="false">Infinite Room SOL</button>
        </a>

        <a href="/" rel="noreferrer">
            <button className="false">Whale Room</button>
        </a>

        <a href="/" rel="noreferrer">
            <button className="false">Shrimp Room</button>
        </a>

        <a href="/" rel="noreferrer">
            <button className="false">24 Hour Lotto</button>
        </a>

        </div>
        </div>
        )
    }
    
    
    export default Sidebar;