import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { logout, getInf } from './Auth';
import styles from './Account.module.css';
const Account = () =>{
    const nav = useNavigate();

    const [nameEdit, setNameEdit] = useState(false);
    const [emailEdit, setEmailEdit] = useState(false);
    const [pwEdit, setPwEdit] = useState(false); 
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handleClick = (e) =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value});
    }
    const clickName = () => {
        setNameEdit((prev) => (!prev));
    }
    const clickEmail = () => {
        setEmailEdit((prev) => (!prev));
    }
    const clickPw = () => {
        setPwEdit((prev) => (!prev));
    }
    const data = getInf();

    const clickLogout = () => {
        logout(nav);
    }

    return(
        <div className={styles.container}>
            <div className={styles.head}>
                <h2>ACCOUNT</h2>
                <button className={styles.button} onClick={clickLogout}>Log out <img src={import.meta.env.BASE_URL + 'Frame132.svg'} /></button>
            </div>
            <div className={styles.bottom}>
                <div className={styles.profile}>
                    <h2>{data.name}</h2>
                    <p>email@email.com</p>
                </div>
                <div className={styles.inform}>
                    <ul>
                        <li>
                            <p className={styles.p}>Name</p>
                            <form className={styles.form}>
                                <input className={nameEdit?styles.cinput:styles.input}
                                    type = "name"
                                    id = "name"
                                    name = "name"
                                    placeholder = "사용자이름"
                                    value = {user.name}
                                    onChange = {handleClick}
                                    disabled={!nameEdit}
                                    />

                                <p className={nameEdit?styles.save:styles.edit} onClick={clickName}>{nameEdit?"Save":"Edit"}</p>
                            </form>
                        </li>
                        <li>
                            <p className={styles.p}>Email</p>
                            <form className={styles.form}>
                                <input className={emailEdit?styles.cinput:styles.input}
                                    type = "email"
                                    id = "email"
                                    name = "email"
                                    placeholder = "사용자이메일"
                                    value = {user.email}
                                    onChange = {handleClick}
                                    disabled={!emailEdit}
                                    />

                                <p className={emailEdit?styles.save:styles.edit} onClick={clickEmail}>{emailEdit?"Save":"Edit"}</p>
                            </form>
                        </li>
                        <li>
                            <p className={styles.p}>Password</p>
                            <form className={styles.form}>
                                <input className={pwEdit?styles.cinput:styles.input}
                                    type = "password"
                                    id = "password"
                                    name = "password"
                                    placeholder = "사용자패스워드"
                                    value = {user.password}
                                    onChange = {handleClick}
                                    disabled={!pwEdit}
                                    />

                                <p className={pwEdit?styles.save:styles.edit} onClick={clickPw}>{pwEdit?"Save":"Edit"}</p>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Account;