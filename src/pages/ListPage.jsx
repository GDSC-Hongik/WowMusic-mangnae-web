import { useNavigate } from 'react-router-dom';
import style from "../components/ListPage.module.css"

const ListPage = () =>{
    const nav = useNavigate();
    return(
        <div className={style.page}>
            <ul className={style.ul}>
                <li className={style.list} onClick={()=> nav("/keyword")}>KEYWORD</li>
                <hr />
                <li className={style.list} onClick={()=> nav("/fortune")}>FORTUNE</li>
                <hr />
                <li className={style.list} onClick={()=> nav("/mbti")}>MBTI</li>
            </ul>
    </div>
    )
}

export default ListPage;