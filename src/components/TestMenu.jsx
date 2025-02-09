import style from './TestMenu.module.css'

const TestMenu = () =>{
    const menu_list=[
        {id:1, title:"감정 & 기분"},
        {id:2, title:"날씨"},
        {id:3, title:"상황"},
        {id:4, title:"장르"}
    ];

    return(
        <>
            <div className={style.menu}>
                <div className={style.content}>
                    {menu_list.map((it) =>(
                        <div className={style.box}>{it.title}</div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TestMenu;