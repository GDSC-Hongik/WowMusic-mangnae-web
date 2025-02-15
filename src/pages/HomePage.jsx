
import React from "react";
import {Link} from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainView from "../components/MainView";

const HomePage = () => {
    return(
        <div style={{
            backgroundColor: "#111", 
            minHeight: "100vh", 
            width: "100%",
            display: "flex",
            flexDirection: "column",
            
            }}>
            <Header />

            <MainView style={{
                flex: 1
            }
            }/>

            <Footer />
        </div>
    )
}

export default HomePage;