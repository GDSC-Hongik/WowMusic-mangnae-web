import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Account from '../components/Account';
import MyPlaylist from '../components/MyPlaylist';
import styles from '../components/MyPage.module.css';

const MyPage = () =>{
    const [checked, setChecked] = useState(true);
    const handleChecked = (pre) =>{
        setChecked(pre);
    }
    return(
        <div className={styles.back}>
            <Header />
            <div style={{flex:1}}>
                <div className={styles.sidebar}>
                    <p onClick={() => handleChecked(false)} className={checked ? styles.noP : styles.colorP}><button className={checked ? styles.bntX : styles.bnt}/> &nbsp;&nbsp;PlayList</p>
                    <p onClick={() => handleChecked(true)} className={checked ? styles.colorP : styles.noP}><button className={checked ? styles.bnt : styles.bntX}/> &nbsp;&nbsp;Account</p>
                </div>
                {checked?<Account />:<MyPlaylist />}
            </div>

            <Footer />
        </div>
    )
}

export default MyPage;