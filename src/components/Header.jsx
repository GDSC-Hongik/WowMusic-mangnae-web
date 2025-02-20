import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import style from "./Header.module.css";


const Header = () => {
    const nav = useNavigate();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        if(localStorage.getItem("token") !== null){
            setChecked(true);
        }
    }, []);

    return (
        <header className={style.Header}>
            <button 
                onClick={()=>nav("/")}
                className={style.logo}
            >
                logo
            </button>
    
        
            <button 
                className={style.logIn}
                onClick={checked?()=>nav("/my") : ()=>nav("/login")}
            >
                {checked?"my":"log-in"}
            </button>
            
        </header>

        
    )
}

export default Header;