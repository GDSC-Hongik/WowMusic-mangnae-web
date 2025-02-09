import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className={style.Footer}>
            <div className={style.section1}>
                
                    <Link 
                        to="https://www.naver.com/"
                        className={style.to_insta}
                    >
                        INSTAGRAM
                    </Link>
                    <br />

                    <Link 
                        to="https://www.naver.com/"
                        className={style.to_youtube}
                    >
                        YOUTUBE
                    </Link>
                
                
            </div>

            <div className={style.section2}>

            </div>

            <div className={style.section3}>

            </div>
        </footer>
    )
}

export default Footer;