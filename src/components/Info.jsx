import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Info.css"

const Info = () => {

    const nav = useNavigate();

    const [nameValue, setName] = useState('');
    const [emailValue, setEmail] = useState('');
    const [pwValue, setPw] = useState('');
    const [pwrValue, setPwr] = useState('');
    const [birthValue, setBirth] = useState('');

    const [pwError, setPwError] = useState('');
    const [pwrError, setPwrError] = useState('');


    const saveUserName = (e) => {
        setName(e.target.value);
        console.log(e.target.value)
    }

    const saveUserEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value)
    }


    const saveUserPw = (e) => {
        const {name, value} = e.target;

        if (name === "pw") {
            setPw(value);
            console.log(value);
            passwordCheckHandler(value, pwrValue);
        }
        else {
            setPwr(value);
            console.log(value);
            passwordCheckHandler(pwValue, value);
        }
    }

    const saveUserBirth = (e) => {
        setBirth(e.target.value);
        console.log(e.target.value)
    }

    const passwordCheckHandler = (pw, pwr) => {
        // const pwRegex = "^[a-z\d!@*&-_]{8,16}$";

        if (pw === '') {
            setPwError("비밀번호를 입력해주세요.");
            return false;
        }
        else if (pwr !== pw) {
            setPwError('');
            setPwrError("비밀번호가 일치하지 않습니다.");
            return false;
        }
        else {
            setPwError('');
            setPwrError('');
            return true;
        }
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            username : nameValue,
            email: emailValue,
            password: pwValue,
            birth: birthValue,
        };

        try {
            const response = await fetch('http://192.168.212.15:8000/api/users/signup/', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("회원가입 성공 : ", data);
                nav("/login");
            }
            else {
                const errorData = await response.json();
                console.log("회원가입 실패 : ", errorData);
                alert("회원가입에 실패했습니다. 다시 시도해 주세요.");
            }

        }

        catch (error) {
            console.log("오류 발생", error);

        }
    }


    return (
        <>
        <div className="wrapper_signup">
            <div className="wrapper__signup__text">
                <h2>SIGN UP</h2>
                <p>계정을 생성하기 위해 정보를 입력해주세요</p>
            </div>

            <div className="wrapper__signup__input">
                <form onSubmit={handleSubmit}>
                    <div className="wrapper_name">
                        <input 
                            type="text" 
                            placeholder="name"
                            className="name" 
                            value={nameValue}
                            onChange={saveUserName}
                        />
                    </div>
                    
                    <div className="wrapper_email">
                        <input 
                            type="text" 
                            placeholder="email"
                            className="email" 
                            value={emailValue}
                            onChange={saveUserEmail}
                        />
                    </div>
                    
                    <div className="wrapper_pw">
                        <input 
                            type="password" 
                            placeholder="password"
                            className="pw" 
                            name="pw"
                            value={pwValue}
                            onChange={saveUserPw}
                        />
                        {pwError && <small style={{color: "white"}}>{pwError}</small>}
                    </div>
                    
                    <div className="wrapper_pw_repeat">
                        <input 
                            type="password" 
                            placeholder="password repeat"
                            className="pw_repeat"
                            name="pwr"
                            value={pwrValue}
                            onChange={saveUserPw} 
                        />
                        {pwrError && <small style={{color: "white"}}>{pwrError}</small>}
                    </div>

                    <div className="wrapper_date">
                        <input 
                            type="date"
                            className="birth" 
                            
                            value={birthValue}
                            onChange={saveUserBirth}
                        />
                    </div>
                

                    <button 
                        className="CreateAcount"
                        type="submit"
                        // onClick={()=>nav("/")}
                    >
                        Create Acount
                    </button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Info;