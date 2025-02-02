import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { login } from "../components/Auth";
import style from "../components/LoginPage.module.css"


const LoginPage = () => {
    const navigate = useNavigate();
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
                alert("로그인 성공");
                navigate('/');
            }
        } catch (error){
            alert("로그인 실패");
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    return(
        <div style={{
            backgroundColor: "#111",
            minHeight: "100vh",
            width: "100%",
        }}>
        <div className={style.box}>
            <h1 className={style.title}>SIGN IN</h1>
            <div>아직 계정이 없으신가요? <Link className={style.link} to="/signup">가입하기</Link></div>
            <form className={style.form} onSubmit={confirmLogin}>
                <input className={style.input}
                type = "email"
                id = "email"
                name = "email"
                placeholder = "이메일"
                value = {user.email}
                autoFocus 
                onChange = {handleChange}
                />
                <input className={style.input}
                type = "password"
                id = "password"
                name = "password"
                placeholder = "비밀번호"
                value = {user.password}
                onChange = {handleChange}
                />
                <button className={style.button} type="submit">로그인</button>
            </form>
        </div>
        </div>
    );
};

export default LoginPage;