import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const LoginPage = () => {
    return(
        <button>
            <Link to="/signup">회원가입</Link>
        </button>
    );
};

export default LoginPage;