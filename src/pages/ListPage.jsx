import { Link } from 'react-router-dom';
import style from "../components/ListPage.module.css"

const ListPage = () =>{
    return(
        <div className={style.page}>
        <br />
        <br />
        <br />
        <button><Link to="/keyword">KEYWORD</Link></button>
        <button><Link to="/fortune">FORTUNE</Link></button>
        <button><Link to="/mbti">MBTI</Link></button>
    </div>
    )
}

export default ListPage;