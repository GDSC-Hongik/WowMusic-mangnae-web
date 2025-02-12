import { motion } from "framer-motion";
import style from './Loading.module.css';

const Loading = () => {
    return(
        <div className={style.back}>
            <h1>00 님에게</h1>
            <h1>어울리는 노래를 찾고 있어요</h1>
        </div>
    )
}

export default Loading;