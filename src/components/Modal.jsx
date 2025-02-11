import style from "./Modal.module.css";
const Modal = ({min, size, modalOpened, modalClose}) =>{
    return(
        <> 
            {modalOpened && (
                <div className={style.blur}>
                    <div className={style.box}>
                        <div className={style.modal} onClick={modalClose}>
                            <p className={style.keyword}>KEYWORD</p>
                            <h1 className={style.h1}>키워드를 선택해주세요</h1>
                            <h2 className={style.h2}>하나만 선택할 수 있어요</h2>
                            <br/>
                            <ul className={style.ul}>
                                <li>총 예상시간 | {min}분</li>
                                <li>총 문항 수 | {size}분</li>
                            </ul>
                        </div>
                        <p>화면을 클릭해주세요</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;