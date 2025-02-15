import style from './BannerIcon.module.css';
import { Link } from "react-router-dom";

const BannerIcon = ({title, singer, content, onClick}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.wrapper_text}>
                <img src="/Subtract.png"
                    alt="LP"
                    className={style.Subtract}
                />

                <div className={style.wrapper_info}>
                    <div className={style.wrapper_link}>
                    <Link 
                        className={style.song_title}
                    >
                        {title}
                    </Link>

                    <Link 
                        className={style.song_singer}
                    >
                        {singer}
                    </Link>
                    </div>
                    
                    {content}
                </div>
            </div>
        </div>
    )
}

export default BannerIcon;