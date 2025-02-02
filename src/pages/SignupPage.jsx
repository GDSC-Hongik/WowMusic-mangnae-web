import React from "react";
import Header from "../components/Header";
import Info from "../components/Info";
import Footer from "../components/Footer";

const SignUpPage = () => {
    return (
        <div style={{
            backgroundColor: "#111", 
            minHeight: "100vh", 
            width: "100%",
            
            }}
        >
            <Header />

            <Info />

            <Footer />

        </div>
    )
};

export default SignUpPage;