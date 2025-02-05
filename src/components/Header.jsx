import React from "react";
import {useNavigate} from "react-router-dom";
import style from "./Header.module.css"

const Header = () => {
    const nav = useNavigate();

    return (
        <header className={style.Header}>
            <button 
                onClick={()=>nav("/")}
                className={style.logo}
            >
                logo
            </button>
    
            <button className={style.playlist}>myplaylist</button>
        
            <button 
                className={style.logIn}
                onClick={()=>nav("/login")}
            >
                log-in
            </button>
            
        </header>

        
    )
}

export default Header;