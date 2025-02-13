import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import { listData } from '../components/Auth';
import Header from '../components/Header';
import Loading from '../components/Loading';
import style from '../components/KeyResultPage.module.css';

const KeyResultPage = () => {
    const location = useLocation();
    const keywords = location.state?.submitArr;
    const [loading, setLoading] = useState(true);
    const [playList, setPlayList] = useState([]);
    const [animate, setAnimate] = useState(false);
    const [currentMusic, setCurrentMusic] = useState(0);
    
    useEffect(() =>{
        const fetchData = async () => {
            try{
                const data = listData({keywords, setLoading});
                setPlayList(data);
            } catch (error){
                console.log("플레이리스트 로드 오류: ", error);
            } finally{
                setLoading(false);
                console.log(playList);
            }
            
        }
        
        fetchData();
    }, []);

    const nextMusic = () => {
        setCurrentMusic((prev) => (prev + 1));
    };
    const prevMusic = () => {
        setCurrentMusic((prev) => {prev - 1});
    };

    return(
        <>  
            <Header />
            <div className={style.back}>
                {loading?<Loading />:null}

                <div className={`${style.container} ${animate ? style.slide : ""}`}>
                    <div className={style.lpWrapper}>
                        <div className={style.lp}>
                            <img src={import.meta.env.BASE_URL + 'Lp.svg'} />
                        </div>
                    </div>
                    {Object.values(keywords).map((it, index) => (
                        <h1 key={index}>{it}</h1>
                    ))}
                    <h1>음악 제공 예정</h1>
                </div>
            </div>
        </>
    )
}

export default KeyResultPage;