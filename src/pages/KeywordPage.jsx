import {useState} from 'react';
import Header from '../components/Header.jsx';
import Modal from '../components/Modal';
import TestFooter from '../components/TestFooter';
import TestMenu from '../components/TestMenu'
import style from '../components/KeywordPage.module.css';
import bstyle from '../components/TestButton.module.css';

const KeywordPage = () =>{
    const [modalOpened, setModalOpened] = useState(true);
    const modalClose = () =>{
        setModalOpened(false);
    }
    return(
        <>
            <div className={style.back}>
                <Header />
                <TestMenu />
                <div className={style.box}>
                    <div className={style.upperbox}>
                        <div className={style.pro}>
                            <img src={import.meta.env.BASE_URL + 'Ellipse26.svg'} />
                        </div>
                        <div>
                            <h1 className={style.cht}>KEYWORD 페이지 입니다.</h1>
                            <br/>
                            <h1 className={style.cht}>KEYWORD 페이지 입니다.</h1>
                        </div>
                    </div>
                    <div className={style.bntbox}>
                        <div className={style.buttons}>
                            <button className={bstyle.button}>press Button</button>
                            <button className={bstyle.button}>press Button</button>
                            <button className={bstyle.button}>press Button</button>
                            <button className={bstyle.button}>press Button</button>
                            <button className={bstyle.button}>press Button</button>
                        </div>
                    </div>
                </div>

                <Modal modalOpened={modalOpened} modalClose={modalClose} />

                <TestFooter />
            </div>
        </>
    )
}

export default KeywordPage;