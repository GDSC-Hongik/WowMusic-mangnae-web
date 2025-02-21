import { useState, useEffect } from "react";
import Select from "react-select";
import FortuneTitle from "../components/FortuneTitle";
import Header from "../components/Header";
import style from "../components/BirthPage.module.css"
import { label } from "framer-motion/client";
import TestFooter from "../components/TestFooter";
import { useNavigate } from "react-router-dom";

const BirthPage = () => {
    const nav = useNavigate();

    const date = new Date();
    const todayYear = date.getFullYear();
    const todayMonth = date.getMonth() + 1;
    const todayDay = date.getDate();

    const [year, setYear] = useState(todayYear);
    const [month, setMonth] = useState(todayMonth);
    const [day, setDay] = useState(todayDay);
    const [isActive, setIsActive] = useState('solar');


    const years = Array.from({length: 70}, (_, i) => ({
        value: todayYear - 70 + i + 1,
        label: `${todayYear - 70 + i + 1}`
    }));

    const months = Array.from({length: 12}, (_, i) => ({
        value: todayMonth + i - 1,
        label: `${todayMonth + i - 1}`
    }));

    const days = Array.from({length: 31}, (_, i) => ({
        value: i + 1,
        label: `${i + 1}`
    }));

    const handleClick = (text) => {
        setIsActive(text);
        
    }

    const handleNext = async () => {
        const birthData = {
            year,
            month,
            day,
            isActive
        };

        console.log(birthData);
        // console.log(submitArr);
        nav('/fResult', {state: birthData});
    };

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
            <FortuneTitle text={"생년월일을 선택해주세요"}/>

            <div className={style.box}>
                <div className={style.date}>
                    <Select 
                        options={years}
                        value={years.find(y => y.value === year)}
                        onChange={(selected) => setYear(selected.value)}
                        placeholder="년도 선택"
                        
                        styles={{
                            control: (base) => ({
                                ...base,
                                backgroundColor: "rgba(17, 17, 17, 1)", // 배경색 변경
                                borderColor: "rgba(242, 241, 239, 1)", // 테두리 색 변경
                                color: "rgba(242, 241, 239, 1)", // 글자 색 변경
                                fontSize: "32px", // 폰트 크기 조정
                                width: "200px", // 드롭다운 너비 조정
                                borderRadius: "0",
                                fontFamily: "Pretendard",
                            }),
                            singleValue: (base) => ({
                                ...base,
                                color: "rgba(242, 241, 239, 1)", // 선택된 값 색상 변경
                            }),
                            menu: (base) => ({
                                ...base,
                                backgroundColor: "rgba(17, 17, 17, 1)", // 옵션 리스트 배경색 변경
                                color: "rgba(242, 241, 239, 1)",
                            }),
                            option: (base, { isFocused, isSelected }) => ({
                                ...base,
                                color: isSelected ? "rgba(250, 86, 40, 1)" : isFocused ? "rgba(253, 187, 169, 1)" : "rgba(242, 241, 239, 1)", // 선택되었을 때, 포커스될 때 색상 변경
                                backgroundColor: "rgba(17, 17, 17, 1)", // 글자 색
                                cursor: "pointer",
                                fontSize: "32px", // 폰트 크기 조정
                                width: "170px", // 드롭다운 너비 조정
                                borderRadius: "0",
                                fontFamily: "Pretendard",
                            }),
                        }}
                    />
                    <h1>년</h1>

                    <Select 
                        options={months}
                        value={months.find(m => m.value === month)}
                        onChange={(selected) => setMonth(selected.value)}
                        placeholder="월 선택"
                        styles={{
                            control: (base) => ({
                                ...base,
                                backgroundColor: "rgba(17, 17, 17, 1)", // 배경색 변경
                                borderColor: "rgba(242, 241, 239, 1)", // 테두리 색 변경
                                color: "rgba(242, 241, 239, 1)", // 글자 색 변경
                                fontSize: "32px", // 폰트 크기 조정
                                width: "120px", // 드롭다운 너비 조정
                                borderRadius: "0",
                                fontFamily: "Pretendard",
                            }),
                            singleValue: (base) => ({
                                ...base,
                                color: "rgba(242, 241, 239, 1)", // 선택된 값 색상 변경
                            }),
                            menu: (base) => ({
                                ...base,
                                backgroundColor: "rgba(17, 17, 17, 1)", // 옵션 리스트 배경색 변경
                                color: "rgba(242, 241, 239, 1)",
                            }),
                            option: (base, { isFocused, isSelected }) => ({
                                ...base,
                                color: isSelected ? "rgba(250, 86, 40, 1)" : isFocused ? "rgba(253, 187, 169, 1)" : "rgba(242, 241, 239, 1)", // 선택되었을 때, 포커스될 때 색상 변경
                                backgroundColor: "rgba(17, 17, 17, 1)", // 글자 색
                                cursor: "pointer",
                                fontSize: "32px", // 폰트 크기 조정
                                width: "90px", // 드롭다운 너비 조정
                                borderRadius: "0",
                                fontFamily: "Pretendard",
                            }),
                        }}
                    />
                    <h1>월</h1>

                    <Select 
                        options={days}
                        value={days.find(d => d.value === day)}
                        onChange={(selected) => setDay(selected.value)}
                        placeholder="일 선택"
                        styles={{
                            control: (base) => ({
                                ...base,
                                backgroundColor: "rgba(17, 17, 17, 1)", // 배경색 변경
                                borderColor: "rgba(242, 241, 239, 1)", // 테두리 색 변경
                                color: "rgba(242, 241, 239, 1)", // 글자 색 변경
                                fontSize: "32px", // 폰트 크기 조정
                                width: "120px", // 드롭다운 너비 조정
                                borderRadius: "0",
                                fontFamily: "Pretendard",
                            }),
                            singleValue: (base) => ({
                                ...base,
                                color: "rgba(242, 241, 239, 1)", // 선택된 값 색상 변경
                            }),
                            menu: (base) => ({
                                ...base,
                                backgroundColor: "rgba(17, 17, 17, 1)", // 옵션 리스트 배경색 변경
                                color: "rgba(242, 241, 239, 1)",
                            }),
                            option: (base, { isFocused, isSelected }) => ({
                                ...base,
                                color: isSelected ? "rgba(250, 86, 40, 1)" : isFocused ? "rgba(253, 187, 169, 1)" : "rgba(242, 241, 239, 1)", // 선택되었을 때, 포커스될 때 색상 변경
                                backgroundColor: "rgba(17, 17, 17, 1)", // 글자 색
                                cursor: "pointer",
                                fontSize: "32px", // 폰트 크기 조정
                                width: "90px", // 드롭다운 너비 조정
                                borderRadius: "0",
                                fontFamily: "Pretendard",
                            }),
                        }}
                    />
                    <h1>일</h1>
                </div>

                <div className={style.solar_lunar}>
                        <button 
                            className={isActive === 'solar' ? style.active : ''}
                            onClick={() => handleClick('solar')}
                        >
                            양력
                        </button>

                        <button 
                            className={isActive === 'lunar' ? style.active : ''}
                            onClick={() => handleClick('lunar')}
                        >
                            음력
                        </button>
                </div>
            </div>

            <TestFooter step={1} size={1} handleNext={handleNext}/>
        </div>
        </>
    )
}

export default BirthPage;