import React from "react";
import {useNavigate} from "react-router-dom";
import style from "./MainView.module.css";
import BannerIcon from "./BannerIcon";


const MainView = () => {
    const nav = useNavigate();
    return (
        <>
        <div className={style.wrapper}>
            <div className={style.wrapper_title}>
                <h1>
                    What <span>Kind of Song</span>
                </h1>
                <h1>Do you Want</h1>
            </div>

            <div className={style.wrapper_button}>
                <button 
                    onClick={()=>nav("/List")}
                    className={style.find_out}>
                    Find out

                    <img src="/Frame135.png"
                        alt = "화살표"
                        className={style.icon}
                    />
                </button>
            </div>
        </div>

        <div className={style.picture}>
            <div className={style.back_1}>
            <img src="/Frame27.png"
                alt="로고1"
                className={style.picture_27_1}
            />
            </div>

            <div className={style.front}>
            <img src="/Frame26.png"
                alt="로고2"
                className={style.picture_26}
            />
            </div>

            <div className={style.back_2}>
            <img src="/Frame27.png"
                alt="로고3"
                className={style.picture_27_2}
            />
            </div>
        </div>

        <div className={style.Info}>
            <h1>
                당신에게 어울리면서서
            </h1>

            <h1>
                취향에 맞는 <span>SONG</span>을 알려드려요
            </h1>
        </div>


        <div className={style.song_banner}>
            <BannerIcon 
                title={"Winter Poem"}
                singer={"뎁트"}
                content={"서정적인 멜로디와 서사 깊은 가사로 영화를 좋아하는 취향과 어울려요"}
            />

            <BannerIcon 
                title={"Winter Poem"}
                singer={"뎁트"}
                content={"어울려요"}
            />

            <BannerIcon 
                title={"Winter Poem"}
                singer={"뎁트"}
                content={"어울려요"}
            />

            <BannerIcon 
                title={"Winter Poem"}
                singer={"뎁트"}
                content={"어울려요"}
            />

<BannerIcon 
                title={"Winter Poem"}
                singer={"뎁트"}
                content={"어울려요"}
            />

<BannerIcon 
                title={"Winter Poem"}
                singer={"뎁트"}
                content={"어울려요"}
            />

        </div>
        </>
    )
}

export default MainView;