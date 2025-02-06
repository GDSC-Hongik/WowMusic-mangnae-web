
import React from "react";
import {Link} from "react-router-dom"
import Header from "../components/Header";

const HomePage = () => {
    return(
        <div>
            <Header />
            <br/>
            <br/>
            <br/>
            <h1>홈페이지입니다.</h1>
            <h3>h3태그입니다.</h3>
            <h4>h4태그입니다.</h4>
            <button>
              <Link to="/list">Find out</Link>
            </button>
        </div>
    )
}

export default HomePage;