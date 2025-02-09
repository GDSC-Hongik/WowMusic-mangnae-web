import style from './TestFooter.module.css';

const TestFooter = () =>{
    return(
        <> 
            <div className={style.Foo}>
                <div className={style.content}>
                    <div className={style.left}>
                        <img src={import.meta.env.BASE_URL + 'check-circle-broken.svg'} alt="check" />
                         <p>총 문항 | x개</p>
                         </div>
                    <div className={style.mid}> 1 2 3 4 5</div>
                    <button className={style.button}>다음</button>
                </div>
            </div>
        </>
    )
}

export default TestFooter;