import { useNavigate } from "react-router-dom";
import style from "./FortuneTitle.module.css";

const FortuneTitle = ({text}) => {
    const nav = useNavigate();
    return (
        <div style={{
            backgroundColor: "#111", 
            minHeight: "100vh", 
            width: "100%",

            display: "flex",
            flexDirection: "column",
        }}>
            <div className={style.box}>
                <img 
                    src="./arrow.png" 
                    alt="" 
                    className={style.arrow}
                    onClick={()=>nav('/fortune')}
                />

                <div className={style.title}>
                    <div className={style.img_box}>
                        {/* <img src="./Vector_left.png" alt="" /> */}
                    </div>
                    <div className={style.text_box}>
                        <h1>{text}</h1>
                        <p>당신 만의 운세를 얘기해줄게요</p>
                    </div>
                    <div className={style.img_box}>
                        {/* <img src="./Vector_right.png" alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FortuneTitle;