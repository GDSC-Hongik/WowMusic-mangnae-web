import FortuneTitle from "../components/FortuneTitle";
import Header from "../components/Header";
import style from "../components/ConstellationPage.module.css";
import TestFooter from "../components/TestFooter";
import ConstellationItem from "../components/ConstellationItem";
import acquarius from "../images/acquarius.png";
import pisces from "../images/pisces.png";
import aries from "../images/aries.png";
import taurus from "../images/taurus.png";
import gemini from "../images/gemini.png";
import cancer from "../images/cancer.png";
import leo from "../images/leo.png";
import virgo from "../images/virgo.png";
import libra from "../images/libra.png";
import scorpio from "../images/scorpio.png";
import sagittarius from "../images/sagittarius.png";
import capricorn from "../images/capricorn.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ConstellationPage = () => {

    const nav = useNavigate();

    const con = [
        {name: "물병자리", date: "1월 20일 ~ 2월 18일", img: acquarius},
        { name: "물고기자리", date: "2월 19일~3월 20일", img: pisces },
        { name: "양자리", date: "3월 21일~4월 19일", img: aries },
        { name: "황소자리", date: "4월 20일~5월 20일", img: taurus },
        { name: "쌍둥이자리", date: "5월 21일~6월 21일", img: gemini },
        { name: "게자리", date: "6월 22일~7월 22일", img: cancer },
        { name: "사자자리", date: "7월 23일~8월 22일", img: leo },
        { name: "처녀자리", date: "8월 23일~9월 22일", img: virgo },
        { name: "천칭자리", date: "9월 23일~10월 23일", img: libra },
        { name: "전갈자리", date: "10월 24일~11월 22일", img: scorpio },
        { name: "사수자리", date: "11월 23일~12월 21일", img: sagittarius },
        { name: "염소자리", date: "12월 22일~1월 19일", img: capricorn },
    ];

    const dateRange = [
        {startMonth: "1월", endMonth: "5월"},
        {startMonth: "5월", endMonth: "9월"},
        {startMonth: "9월", endMonth: "1월"},
    ]

    const [constellationType, setConstellationType] = useState('');
    const [step, setStep] = useState(0);
    const itemNum = 4;

    const handleClick = (type) => {
        setConstellationType(type);
    };

    const handleNext = async () => {
            const conData = {constellationType}
            console.log(conData);
            nav('/fResult', {state: conData});
    }
    
    useEffect(() => {
        console.log("현재 선택된 값:", constellationType);
    });

    const getConstellations = con.slice(
        step * itemNum,
        (step + 1) * itemNum
    );

    const nextStep = () => {
        if ((step + 1) * itemNum < con.length) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const getDateRange = dateRange.slice(step, step+1);

    return (
        <>
            <Header />
            <FortuneTitle text={"별자리를 선택해주세요"}/>

            <div className={style.box}>
                <div className={style.box_content}>
                    {getDateRange.map((date) => (
                        <p key={date.startMonth}>{date.startMonth} ~ {date.endMonth}</p>
                    ))}

                    <div className={style.button_box}>
                        <img 
                            src={step === 0 ? "./left_disabled.png" : "./left_default.png"} 
                            alt="prev" 
                            className={step === 0 ? '' : style.left}
                            onClick={prevStep}
                        />

                        <img 
                            src={step === 2 ? "./right_disabled.png" : "./right_default.png"} 
                            alt="next" 
                            className={step === 2 ? '' : style.right}
                            onClick={nextStep}
                        />
                    </div>
                </div>

                <div className={style.img_box}>

                    {getConstellations.map((constellation) => (
                        <ConstellationItem 
                            key={constellation.name}
                            name={constellation.name}
                            date={constellation.date}
                            img={constellation.img}
                            result={constellationType === constellation.name ? "true" : "false"}

                            onClick={()=>handleClick(constellation.name)}
                        />
                    ))}
                    
                </div>
            </div>

            <TestFooter step={1} size={1} handleNext={handleNext}/>
        </>
    )
}

export default ConstellationPage;