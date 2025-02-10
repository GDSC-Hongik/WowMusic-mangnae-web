import {useState} from 'react';
import Header from '../components/Header.jsx';
import Modal from '../components/Modal';
import TestFooter from '../components/TestFooter';
import TestMenu from '../components/TestMenu'
import style from '../components/KeywordPage.module.css';
import bstyle from '../components/TestButton.module.css';

const KeywordPage = () =>{
    const [modalOpened, setModalOpened] = useState(true);
    const [step, setStep] = useState(1);
    const [clicked, setClicked] = useState(false); //pressed 효과 만들기기
    const modalClose = () =>{
        setModalOpened(false);
    }

    const handleStep = (newStep) =>{
        if(newStep < 5){
            setStep(newStep);
        }
        console.log(step);
    }

    const menu_list=[
        {id:1, title:"감정 & 기분", message: ["반가워요, OO 님","지금 감정이나 기분을 골라주세요!","고르고 싶지 않다면 '잘 모르겠어요'를 선택해주세요"], buttons: ["행복", "슬픔", "화남", "피곤", "평온", "설렘", "외로움", "잘 모르겠어요"]},
        {id:2, title:"날씨", message: ["반가워요, OO 님","골라주세요!","고르고 싶지 않다면 '잘 모르겠어요'를 선택해주세요"], buttons: ["봄", "여름", "가을", "겨울","비", "눈", "맑음", "흐림", "잘 모르겠어요"]},
        {id:3, title:"상황", message: ["반가워요, OO 님","지금 감정이나 기분을 골라주세요!","고르고 싶지 않다면 '잘 모르겠어요'를 선택해주세요"], buttons: ["노동요", "여행", "이별", "산책", "공부", "축하", "응원", "휴식", "샤워", "크리스마스", "연말/연초", "잘 모르겠어요"]},
        {id:4, title:"장르", message: ["반가워요, OO 님","지금 감정이나 기분을 골라주세요!","고르고 싶지 않다면 '잘 모르겠어요'를 선택해주세요"], buttons: ["발라드", "락", "댄스", "힙합", "인디", "R&B", "잘 모르겠어요"]}
    ];

    return(
        <>
            <div className={style.back}>
                <Header />
                <TestMenu step={step} setStep={handleStep}/>
                <div className={style.box}>
                    <div className={style.upperbox}>
                        <div className={style.pro}>
                            <img src={import.meta.env.BASE_URL + 'Ellipse26.svg'} />
                        </div>
                        <div>
                            <div className={style.chatbox}>
                                {menu_list[step - 1].message.map((it) => (
                                    <p className={style.chat}>{it}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={style.bntbox}>
                        <div className={style.buttons}>
                            {menu_list[step - 1].buttons.map((it) => (
                                <button className={bstyle.button}>{it}</button>
                            ))}
                        </div>
                    </div>
                </div>

                <Modal modalOpened={modalOpened} modalClose={modalClose} min={2} size={menu_list.length} />

                <TestFooter size={menu_list.length} handleNext={() => handleStep(step + 1)} />
            </div>
        </>
    )
}

export default KeywordPage;