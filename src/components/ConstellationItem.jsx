import style from "../components/ConstellationItem.module.css";

const ConstellationItem = ({name, date, img, onClick, result}) => {
    return (
        <div 
            className={result === "true" ? style.box_active : style.box} 
            onClick={onClick}
        >
            <div className={style.content}>
                <h1 className={style.name}>{name}</h1>
                <p className={style.date}>{date}</p>
            </div>

            <div className={style.img_box}>
                <img src={img} alt="" className={style.img} />
            </div>
        </div>
    )
}

export default ConstellationItem;