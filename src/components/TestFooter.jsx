import style from './TestFooter.module.css';

const TestFooter = ( {step, size, handleNext}) =>{
    const rendering = () => {
        const result = [];
        for(let i=0; i<size; i++){
            i < step ? result.push(<img key={i} src={import.meta.env.BASE_URL + 'Tree.svg'} alt="tree" />) : result.push(<img key={i} src={import.meta.env.BASE_URL + 'TreeEmpty.svg'} alt="emptyTree" />) 
        }
        return result;
    }
    return(
        <> 
            <div className={style.Foo}>
                <div className={style.content}>
                    <div className={style.left}>
                        <img src={import.meta.env.BASE_URL + 'check-circle-broken.svg'} alt="check" />
                         <p>총 문항 | {size}개</p>
                         </div>
                    <div className={style.mid}> {rendering()} </div>
                    <button onClick={handleNext} className={style.button}>다음</button>
                </div>
            </div>
        </>
    )
}

export default TestFooter;