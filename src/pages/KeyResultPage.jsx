import {useLocation} from 'react-router-dom';
import { listData } from '../components/Auth';

const KeyResultPage = () => {
    const location = useLocation();
    const keywords = location.state?.submitArr;
    const playList = listData({keywords});
    console.log(playList);
    
    return(
        <>
            <div>
                {Object.values(keywords).map((it, index) => (
                    <h1 key={index}>{it}</h1>
                ))}
                <h1>음악 제공 예정</h1>
            </div>
        </>
    )
}

export default KeyResultPage;