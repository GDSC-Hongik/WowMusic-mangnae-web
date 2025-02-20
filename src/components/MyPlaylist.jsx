
import styles from './MyPlaylist.module.css';
const MyPlaylist = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.head}>
                <h2>PLAYLIST</h2>
            </div>
            <div className={styles.bottom}>
                <div className={styles.list}></div>
                <div className={styles.lpWrapper}></div>
            </div>
        </div>
    )
}

export default MyPlaylist;