import React from "react";
import {useNavigate} from "react-router-dom";
import "./Header.css";

const Header = () => {
    const nav = useNavigate();

    return (
        <header className="Header">
            <button 
                onClick={()=>nav("/")}
                className="logo"
            >
                logo
            </button>
    
            <button className="playlist">myplaylist</button>
        
            <button 
                className="logIn"
                onClick={()=>nav("/signup")}
            >
                log-in
            </button>
            
        </header>

        
    )
}

export default Header;