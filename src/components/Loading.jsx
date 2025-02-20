import { motion } from "framer-motion";
import style from './Loading.module.css';

const Loading = () => {
    const variants = {
        first: {rotate: 0},
        animationEnd:{rotateZ: 360},
    };
    
    return(
        <div className={style.back}>
            <div className={style.box}>
                <motion.img
                src={import.meta.env.BASE_URL + 'Lp.svg'} 
                variants={variants}
                initial="first"
                animate="animationEnd"
                transition={{
                    duration: 5,
                }}/>
                <div className={style.wait}>
                    <p className={style.text}>사용자님에게</p>
                    <p className={style.text}>어울리는 노래를 찾고 있어요</p>
                </div>
            </div>
        </div>
    )
}

export default Loading;