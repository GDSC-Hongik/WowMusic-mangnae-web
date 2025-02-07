import {useState} from 'react';
import Header from '../components/Header.jsx';
import Modal from '../components/Modal';
import TestFooter from '../components/TestFooter';
import style from '../components/KeywordPage.module.css';

const KeywordPage = () =>{
    const [modalOpened, setModalOpened] = useState(true);
    const modalClose = () =>{
        setModalOpened(false);
    }
    return(
        <>
            <div className={style.back}>
                <Header />
                <h1 style={{fontSize:'100px'}}>KEYWORD 페이지 입니다. KEYWORD 페이지 입니다.</h1>

                <Modal modalOpened={modalOpened} modalClose={modalClose} />

                <TestFooter />
            </div>
        </>
    )
}

export default KeywordPage;