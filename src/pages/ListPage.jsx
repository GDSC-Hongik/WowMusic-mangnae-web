import { useNavigate } from 'react-router-dom';
import style from "../components/ListPage.module.css"

const ListPage = () =>{
    const nav = useNavigate();
    return(
        <div className={style.page}>
            <ul className={style.ul}>
                <li className={style.list} onClick={()=> nav("/keyword")}>KEYWORD <img src={import.meta.env.BASE_URL + 'Frame132.svg'} className={style.img} /></li>
                
                <hr />
                <li className={style.list} onClick={()=> nav("/fortune")}>FORTUNE <img src={import.meta.env.BASE_URL + 'Frame132.svg'} className={style.img} /></li>
                <hr />
                <li className={style.list} onClick={()=> nav("/mbti")}>MBTI <img src={import.meta.env.BASE_URL + 'Frame132.svg'} className={style.img} /></li>
            </ul>
    </div>
    )
}

export default ListPage;