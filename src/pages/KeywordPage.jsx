import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import Header from '../components/Header.jsx';
import Modal from '../components/Modal';
import TestFooter from '../components/TestFooter';
import TestMenu from '../components/TestMenu'
import style from '../components/KeywordPage.module.css';
import bstyle from '../components/TestButton.module.css';

const KeywordPage = () =>{
    const nav = useNavigate();
    const [modalOpened, setModalOpened] = useState(true); // 모달창
    const [step, setStep] = useState(1); // 현재 페이지
    const [clicked, setClicked] = useState(''); // pressed 효과 만들기
    const [submitArr, setSubmitArr] = useState({ // 키워드 선택 기록용
        one: "",
        two: "",
        three: "",
        four: ""
    });

    const [displayed, setDisplayed] = useState([]); // 타이핑 애니메이션션
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typedText, setTypedText] = useState('');

    const handleClick = (bnt) =>{
        setClicked(bnt);
        setSubmitArr({...submitArr, [menu_list[step - 1].name]: bnt});
    }
    const modalClose = () => {
        setModalOpened(false);
    }

    const handleStep = (newStep) =>{
        if(newStep < 5){
            setStep(newStep);
            setClicked(submitArr[menu_list[newStep - 1].name])
            resetTyping();
        } else{
            console.log(submitArr);
            nav('/kResult', {state: {submitArr}});
        }
        console.log(step);
    }

    const resetTyping = () =>{
        setDisplayed([]);
        setCurrentIndex(0);
        setTypedText('');
    }

    useEffect(() => {
        const messages = menu_list[step - 1].message;

        if (currentIndex < messages.length) {
            let charIndex = 0;
            const interval = setInterval(() => {
                if (messages[currentIndex] && charIndex < messages[currentIndex].length) {
                    setTypedText(messages[currentIndex].substring(0, charIndex + 1));
                    charIndex++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        if(messages[currentIndex]){
                            setDisplayed((prev) => [...prev, messages[currentIndex]])
                        }; // 한 줄 완료 후 저장}
                        setCurrentIndex((prev) => prev + 1); // 다음 메시지 진행
                        setTypedText(''); // 다음 메시지를 위해 초기화
                    }, 400); // 문장 간 딜레이
                }
            }, 50); // 글자 타이핑 속도 (50ms)

            return () => clearInterval(interval);
        }
    }, [currentIndex, step]);

    const menu_list=[
        {id:1, name: "one", title:"감정 & 기분", message: ["반가워요, OO 님","지금 감정이나 기분을 골라주세요!","고르고 싶지 않다면 '잘 모르겠어요'를 선택해주세요"], buttons: ["행복", "슬픔", "화남", "피곤", "평온", "설렘", "외로움", "잘 모르겠어요"]},
        {id:2, name: "two", title:"날씨", message: ["오늘의 날씨는 어떤가요?"], buttons: ["봄", "여름", "가을", "겨울","비", "눈", "맑음", "흐림", "잘 모르겠어요"]},
        {id:3, name: "three", title:"상황", message: ["OO 님과 연관되는 상황을 골라주세요"], buttons: ["노동요", "여행", "이별", "산책", "공부", "축하", "응원", "휴식", "샤워", "크리스마스", "연말/연초", "잘 모르겠어요"]},
        {id:4, name: "four", title:"장르", message: ["마지막 질문이에요!", "선호하시는 장르는 무엇인가요?"], buttons: ["발라드", "락", "댄스", "힙합", "인디", "R&B", "잘 모르겠어요"]}
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
                                {displayed.map((msg, index) => (
                                    <div key={index} className={style.chat}>
                                        <p>{msg}</p>
                                    </div>
                                ))}
                                {typedText && <div className={style.chat}> <p>{typedText}</p> </div>}
                            </div>
                        </div>
                    </div>
                    <div className={style.bntbox}>
                        <div className={style.buttons}>
                            {menu_list[step - 1].buttons.map((it) => (
                                <button key={it} onClick={() => handleClick(it)} className={clicked === it ? bstyle.act : bstyle.button}>{it}</button>
                            ))}
                        </div>
                    </div>
                </div>

                <Modal modalOpened={modalOpened} modalClose={modalClose} min={2} size={menu_list.length} />

                <TestFooter step={step} size={menu_list.length} handleNext={() => handleStep(clicked===''? step : step + 1)} />
            </div>
        </>
    )
}

export default KeywordPage;