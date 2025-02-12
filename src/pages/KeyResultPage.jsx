import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import { listData } from '../components/Auth';
import Loading from '../components/Loading';

const KeyResultPage = () => {
    const location = useLocation();
    const keywords = location.state?.submitArr;
    const [loading, setLoading] = useState(true);
    
    useEffect(() =>{
        const playList = listData({keywords, setLoading});
        setLoading(false);
        console.log(playList.data);
    }, []);
    return(
        <>
            <div>
                {loading?<Loading />:null}
                {Object.values(keywords).map((it, index) => (
                    <h1 key={index}>{it}</h1>
                ))}
                <h1>음악 제공 예정</h1>
            </div>
        </>
    )
}

export default KeyResultPage;