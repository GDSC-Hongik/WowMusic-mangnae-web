import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="Footer">
            <div className="section1">
                
                    <Link 
                        to="https://www.naver.com/"
                        className="to_insta"
                    >
                        INSTAGRAM
                    </Link>
                    <br />

                    <Link 
                        to="https://www.naver.com/"
                        className="to_youtube"
                    >
                        YOUTUBE
                    </Link>
                
                
            </div>

            <div className="section2">

            </div>

            <div className="section3">

            </div>
        </footer>
    )
}

export default Footer;