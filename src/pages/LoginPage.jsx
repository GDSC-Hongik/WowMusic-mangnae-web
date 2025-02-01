import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { login } from "../components/Auth";

const LoginPage = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const confirmLogin = async (e) => {
        e.preventDefault();
        try{
            const { email, password } = user;

            const result = await login({email, password});
            if(result){
                alert("로그인 성공")
            }
        } catch (error){
            alert("로그인 실패")
        }
    };

        /* await new Promise((r) => setTimeout(r, 1000));
    
        const response = await fetch(
            "http://127.0.0.1:8000/api/users/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            }
        );
        console.log("Response status:", response.status); // 응답 상태 코드 출력
        const result = await response.json();
        console.log("Response body:", result);

        if(response.status === 200){
            alert("로그인 성공");
        }
        else {
            alert("로그인 실패");
        } 
    }*/

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    return(
        <>
            <div>아직 계정이 없으신가요? <Link to="/signup">회원가입</Link></div>
            <form onSubmit={confirmLogin}>
                <input
                type = "email"
                id = "email"
                name = "email"
                placeholder = "이메일"
                value = {user.email}
                autoFocus 
                onChange = {handleChange}
                />
                <input
                type = "password"
                id = "password"
                name = "password"
                placeholder = "비밀번호"
                value = {user.password}
                onChange = {handleChange}
                />
                <button type="submit">로그인</button>
            </form>
        </>
    );
};

export default LoginPage;