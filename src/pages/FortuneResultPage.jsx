import { useState } from 'react';
import Header from "../components/Header";
import Loading from "../components/Loading";
import style from "../components/FortuneResultPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const FortuneResultPage = () => {
    const nav = useNavigate();
    const location = useLocation();
    const data = location.state || {};
    const [username, setUsername] = useState(localStorage.getItem("name") ?? "사용자");

    return (
        <>
        <div style={{
            backgroundColor: "#111", 
            height: "100vh", 
            width: "100%",

            display: "flex",
            flexDirection: "column",
        }}>
            <Header />

            <div className={style.container}>
                <div className={style.result}>

                    <div className={style.result_title}>
                        <div className={style.text}>FORTUNE</div>
                        <h2>{username}님의</h2>
                        <h1>FORTUNE</h1>
                    </div>

                    <div className={style.result_data}>
                    {data.year && data.month && data.day ? (
                        <p>
                            선택한 생년월일 : {data.year}년
                            {data.month}월
                            {data.day}일
                            ({data.isActive === "solar" ? "양력" : "음력"})

                        </p>
                    ) : (
                        <p>생년월일 데이터 없음</p>
                    )}

                    {data.bloodType ? (
                        <p>
                            선택한 혈액형 : {data.bloodType}형
                        </p>
                    ) : (
                        <p>혈액형 데이터 없음</p>
                    )}  

                    {data.constellationType ? (
                        <p>
                            선택한 별자리 : {data.constellationType}
                        </p>
                    ) : (
                        <p>별자리 데이터 없음</p>
                    )} 
                    </div>

                    <div className={style.content_box}>
                        <div className={style.love}>
                            <div className={style.type}>사랑운</div>
                        </div>

                        <div className={style.achievement}>
                            <div className={style.type}>성취운</div>
                        </div>

                        <div className={style.money}>
                            <div className={style.type}>금전운</div>
                        </div>
                    </div>
                    

                        <div className={style.sideBottom}>
                                <button 
                                    className={style.re} 
                                    onClick={() => {nav('/fortune')}}
                                >
                                    다시하기 <img src={import.meta.env.BASE_URL + 'refresh.svg'} />
                                </button>
                        </div>     
                </div>

                
            

            <div className={style.music}>
                    <h1>음악 제공 예정</h1>
            </div>
            </div>
        </div>
        </>
    )
}

export default FortuneResultPage;