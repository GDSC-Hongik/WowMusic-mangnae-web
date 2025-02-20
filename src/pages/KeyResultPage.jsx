import {useState, useEffect} from 'react';
import {useLocation , useNavigate} from 'react-router-dom';
import { listData } from '../components/Auth';
import Header from '../components/Header';
import Loading from '../components/Loading';
import styles from '../components/KeyResultPage.module.css';

const KeyResultPage = () => {
    const nav = useNavigate();
    const location = useLocation();
    const keywords = location.state?.submitArr;
    const genreMap = {
        "발라드": "BALLAD",
        "락": "ROCK",
        "댄스": "DANCE",
        "힙합": "HIPHOP",
        "인디": "INDIE",
        "R&B": "R&B",
        "잘 모르겠어요": "NONE"
      };
    const getGenre = genreMap[keywords.four] || keywords.four;

    const [loading, setLoading] = useState(true);
    const [playList, setPlayList] = useState([
        {title: "자니", artist: "프라이머리", date: "2024.01.01", youtube_url: "https://youtu.be/sQxrSj6g-3o?si=dVwMAuylTDXnKA8U"},
        {title: "여행", artist: "볼빨간사춘기", date: "2024.01.01", youtube_url: "https://youtu.be/xRbPAVnqtcs?si=pKSZNWZq2EgwHcFG"},
        {title: "HAPPY", artist: "DAY6", date: "2024.01.01", youtube_url: "https://youtu.be/sQxrSj6g-3o?si=dVwMAuylTDXnKA8U"},
        {title: "어제의 너, 오늘의 나", artist: "도경수", date: "2024.01.01", youtube_url: "https://youtu.be/sQxrSj6g-3o?si=dVwMAuylTDXnKA8U"},
        {title: "눈이 오잖아", artist: "이무진", date: "2024.01.01", youtube_url: "https://youtu.be/sQxrSj6g-3o?si=dVwMAuylTDXnKA8U"},
    ]);
    const [animate, setAnimate] = useState(false);
    const [currentMusic, setCurrentMusic] = useState(0);
    
    useEffect(() =>{
        const fetchData = async () => {
            try{
                const data = await listData({keywords, setLoading});
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

    const startAnimate = () => {
        setAnimate(true);
    }
    const nextMusic = () => {
        setCurrentMusic((prev) => prev + 1);
    };
    const prevMusic = () => {
        setCurrentMusic((prev) => prev - 1);
    };

    const [clicked, setClicked] = useState(false);
    const [videoId, setVideoId] = useState("");
    const extractId = (url) =>{
        const match = url.match(/(?:youtube\.com\/(?:.*v=|.*\/)|youtu\.be\/)([^"&?/ ]{11})/);
        return match ? match[1] : null;
    }
    const clickLp = () => {
        setClicked(true);
        const id = extractId(playList[currentMusic].youtube_url);
        setVideoId(id);
    }

    return(
        <>  
            <Header />
            <div className={styles.back}>
                {loading?<Loading />:null}

                <div className={`${styles.container} ${animate ? styles.slide : ""}`}>
                    {clicked?<div className={clicked ? styles.youtubeBack : ""} onClick={() => {setClicked(false);}}><iframe className={styles.youtube} src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="true"></iframe></div>:""}
                    <div className={styles.lpWrapper}>
                        {animate?<h1 className={styles.today}></h1>:<h1 className={styles.today}>오늘 하루 사용자님의 노래는</h1>}
                        <div className={styles.lp} onClick={startAnimate} style={{transform: `translateX(${(currentMusic * (-550)) - 50}px)`, transition: "transform 1.5s ease-in-out",}}>
                            <img src={import.meta.env.BASE_URL + 'Lp.svg'} className={styles.lpImg} onClick={animate?clickLp:undefined}/>
                            <img src={import.meta.env.BASE_URL + 'Lp.svg'} className={styles.lpImg} style={{visibility: animate ? "visible" : "hidden", }} onClick={clickLp} />
                            <img src={import.meta.env.BASE_URL + 'Lp.svg'} className={styles.lpImg} onClick={clickLp} />
                            <img src={import.meta.env.BASE_URL + 'Lp.svg'} className={styles.lpImg} onClick={clickLp} />
                            <img src={import.meta.env.BASE_URL + 'Lp.svg'} className={styles.lpImg} onClick={clickLp} />
                        </div>
                        <ul>
                            <li>{playList[currentMusic].title}</li>
                            <li className={styles.sub}>
                                <p>{playList[currentMusic].artist}</p>
                                <p>{playList[currentMusic].date}</p>
                            </li>
                        </ul>
                    </div>

                    {animate && (
                        <>
                        <button className={`${currentMusic === 0 ? "":styles.prevButton}`} onClick={prevMusic}><img src={import.meta.env.BASE_URL + 'chevron-whiteLeft.svg'}/></button>
                        <button className={`${currentMusic === playList.length - 1 ? "":styles.nextButton}`} onClick={nextMusic}><img src={import.meta.env.BASE_URL + 'chevron-white.svg'}/></button>
                        </>
                    )}
                    <div className={styles.sideBar}>
                        <div className={styles.inner}>
                            <p className={styles.genre}>{getGenre}</p>
                            <h2 className={styles.for}>사용자님을 위한</h2>
                            <h1 className={styles.list}>PLAYLIST</h1>
                            <ul>
                                {playList.map((song, index) => (
                                    <li key={index} className={styles.songBox} onClick={() => {window.open(song.youtube_url)}}>
                                        <div>
                                            <p className={styles.songArtist}>{song.artist}</p>
                                            <p className={styles.songTitle}>{song.title}</p>
                                        </div>
                                        <img src={import.meta.env.BASE_URL + 'chevron-right.svg'} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.sideBottom}>
                                <button className={styles.re} onClick={() => {nav('/keyword')}}>다시하기 <img src={import.meta.env.BASE_URL + 'refresh.svg'} /></button>
                                <button className={styles.save}>노래 저장하기 <img src={import.meta.env.BASE_URL + 'chevron-black.svg'} /></button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeyResultPage;