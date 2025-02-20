import FortuneTitle from "../components/FortuneTitle";
import Header from "../components/Header";
import TestFooter from "../components/TestFooter";
import style from "../components/BloodTypePage.module.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const BloodTypePage = () => {
    const nav = useNavigate();

    const [bloodType, setBloodType] = useState('');

    const handleClick = (text) => {
        setBloodType(text);
    }

    const handleNext = async () => {
        const bloodData = {bloodType}
        console.log(bloodData);
        nav('/fResult');
    }

    useEffect(() => {
        console.log("현재 선택된 값:", bloodType);
    });

    return (
        <>
        <div style={{
            backgroundColor: "#111", 
            minHeight: "100vh", 
            width: "100%",
            display: "flex",
            flexDirection: "column",
        }}>
            <Header />
            <FortuneTitle text={"혈액형을 선택해주세요"}/>

            <div className={style.box}>
                <div 
                    className={bloodType === 'A' ? style.A_active : style.section_A}
                    onClick={()=>handleClick('A')}
                >
                    A
                </div>

                <div 
                    className={bloodType === 'B' ? style.B_active : style.section_B}
                    onClick={()=>handleClick('B')}
                >
                    B
                </div>

                <div 
                    className={bloodType === 'O' ? style.O_active : style.section_O}
                    onClick={()=>handleClick('O')}
                >
                    O
                </div>

                <div 
                    className={bloodType === 'AB' ? style.AB_active : style.section_AB}
                    onClick={()=>handleClick('AB')}
                >
                    AB
                </div>
            </div>

            <TestFooter step={1} size={1} handleNext={handleNext}/>
        </div>
        </>
    )
}

export default BloodTypePage;