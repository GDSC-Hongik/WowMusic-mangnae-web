import Header from "../components/Header";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import style from "../components/FortunePage.module.css";

const FortunePage = () =>{
    const nav = useNavigate();
    const [username, setUsername] = useState(localStorage.getItem("name") ?? "사용자");
    return(
        <>
        <div style={{
            backgroundColor: "#111", 
            minHeight: "100vh", 
            width: "100%",

            display: "flex",
            flexDirection: "column",
        }}>
            <Header />

            <div className={style.box}>
                <div className={style.text}>Fortune</div>
                <div className={style.content}>
                    {username}님의<br />
                    운세와 어울리는 노래를 알려드려요<br />
                </div>
                <div className={style.smaller_content}>
                    아래의 분야를 골라주세요
                </div>
            </div>

            <div className={style.line}></div>

            <div className={style.img_box}>
                <div className={style.section1}>
                    <img 
                        src="./birth.png" 
                        alt="birth" 
                        className={style.birth} 
                        onClick={()=>nav('/birth')}
                    />
                </div>

                <div className={style.section2}>
                    <img 
                        src="./blood.png" 
                        alt="blood" 
                        className={style.blood} 
                        onClick={()=>nav('/blood')}
                    />
                </div>

                <div className={style.section3}>
                    <img 
                        src="./constellation.png" 
                        alt="constellation" 
                        className={style.constellation} 
                        onClick={()=>nav('/constellation')}
                    />
                </div>
            </div>

            <div className={style.test_info}>
                <h2 className={style.time}>총 예상 시간 : 30초</h2>
                <h2 className={style.que}>총 문항 수 : 1문제</h2>
            </div>
        </div>
        </>
    )
}

export default FortunePage;