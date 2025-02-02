
import React from "react";
import {Link} from "react-router-dom"
import Header from "../components/Header";

const HomePage = () => {
    return(
        <div>
            <Header />
            <h1>홈페이지입니다.</h1>
            <button>
              <Link to="/List">Find out</Link>
            </button>
        </div>
    )
}

export default HomePage;