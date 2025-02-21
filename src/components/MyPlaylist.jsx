import { useState } from 'react';
import styles from './MyPlaylist.module.css';
const MyPlaylist = () =>{
    const [playlists, setPlaylists] = useState([
        {
            "date": "25.02.19",
            "songs": [
              { "id": 1, "title": "자니", "artist": "프라이머리", "releaseDate": "2012.03.07", "youtube_url": "https://youtu.be/sQxrSj6g-3o?si=dVwMAuylTDXnKA8U" },
              { "id": 2, "title": "여행", "artist": "볼빨간사춘기", "releaseDate": "2018.05.24", "youtube_url": "https://youtu.be/xRbPAVnqtcs?si=O1egvv7pmcHqHLZc" },
              { "id": 3, "title": "HAPPY", "artist": "DAY6", "releaseDate": "2024.03.18", "youtube_url": "https://youtu.be/2dFwndi4ung?si=my28egIjcJmY0MR3"},
              { "id": 4, "title": "어제의 너, 오늘의 나", "artist": "도경수", "releaseDate": "2024.05.07", "youtube_url": "https://youtu.be/FXNjkUKAu-0?si=aIjuDOL_pk_8hXZd"},
              { "id": 5, "title": "눈이 오잖아", "artist": "이무진", "releaseDate": "2021.12.03", "youtube_url": "https://youtu.be/xRbPAVnqtcs?si=O1egvv7pmcHqHLZc"}
            ]
          },
          {
            "date": "24.01.20",
            "songs": [
                { "id": 6, "title": "자니", "artist": "프라이머리", "releaseDate": "2012.03.07", "youtube_url": "https://youtu.be/sQxrSj6g-3o?si=dVwMAuylTDXnKA8U" },
                { "id": 7, "title": "여행", "artist": "볼빨간사춘기", "releaseDate": "2018.05.24", "youtube_url": "https://youtu.be/xRbPAVnqtcs?si=O1egvv7pmcHqHLZc" },
                { "id": 8, "title": "HAPPY", "artist": "DAY6", "releaseDate": "2024.03.18", "youtube_url": "https://youtu.be/2dFwndi4ung?si=my28egIjcJmY0MR3"},
                { "id": 9, "title": "어제의 너, 오늘의 나", "artist": "도경수", "releaseDate": "2024.05.07", "youtube_url": "https://youtu.be/FXNjkUKAu-0?si=aIjuDOL_pk_8hXZd"},
                { "id": 10, "title": "눈이 오잖아", "artist": "이무진", "releaseDate": "2021.12.03", "youtube_url": "https://youtu.be/xRbPAVnqtcs?si=O1egvv7pmcHqHLZc"}
            ]
          }
    ]);
    const [selectedSong, setSelectedSong] = useState(null);

    return(
        <div className={styles.container}>
            <div className={styles.head}>
                <h2>PLAYLIST</h2>
            </div>
            <div className={styles.bottom}>
                <div className={styles.list}>
                    {playlists.map((playlist, index) => (
                        <div key={index} className={styles.listContainer}>
                            <p className={styles.date}>{playlist.date}</p>
                            <div className={styles.songbox}>
                                {playlist.songs.map((song) => (
                                    <div
                                        key={song.id}
                                        className={selectedSong?.id === song.id ? styles.ysong : styles.nsong}
                                        onClick={() => setSelectedSong(song)}>
                                            <div className={styles.songinf}>
                                                <p className={styles.listArtist}>{song.artist}</p>
                                                <p className={selectedSong?.id === song.id ? styles.clistTitle : styles.listTitle}>{song.title}</p>
                                            </div>
                                            <img src={import.meta.env.BASE_URL + 'chevron-right.svg'}/>
                                        </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.lpWrapper}>
                    {selectedSong?(
                        <>
                            <img src={import.meta.env.BASE_URL + 'Lp.svg'} onClick={() => {window.open(selectedSong.youtube_url)}}/>
                            <ul>
                                <li>{selectedSong.title}</li>
                                <li className={styles.sub}>
                                    <p>{selectedSong.artist}</p>
                                    <p>{selectedSong.releaseDate}</p>
                                </li>
                            </ul>
                        </>
                    ) : ( ""
                    )}
                </div>
            </div>
        </div>
    )
}
  

export default MyPlaylist;