import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { logout, getInf, modifyInf } from './Auth';
import styles from './Account.module.css';
const Account = () =>{
    const nav = useNavigate();

    const [nameEdit, setNameEdit] = useState(false);
    const [emailEdit, setEmailEdit] = useState(false);
    const [pwEdit, setPwEdit] = useState(false); 
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    })
    const [tempUser, setTempUser] = useState({...user});
    useEffect(() => {
        const data = getInf();
        setUser({
            username: data.name,
            email: data.email,
            password: '',
        });
    }, []);

    const handleClick = (e) =>{
        const {name, value} = e.target;
        setTempUser({...tempUser, [name]:value});
    }
    const handleSave = async (e) => {
        let updateData = { [e] : user[e] };

        const res = await modifyInf(updateData);
        if(res){
            console.log('정보 업데이트 성공');
        } else {
            console.log('정보 업데이트 실패');
        }
    }
    const clickName = (e) => {
        setNameEdit((prev) => (!prev));
        if(nameEdit){
            setUser({...user, username: tempUser.username})
            handleSave(e);
        }
    }
    const clickEmail = (e) => {
        setEmailEdit((prev) => (!prev));
        if(emailEdit){
            setUser({...user, email: tempUser.email})
            handleSave(e);
        }
    }
    const clickPw = (e) => {
        setPwEdit((prev) => (!prev));
        if(pwEdit){
            setUser({...user, password: tempUser.password})
            handleSave(e);
        }
    }

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
                    <h2>{user.username}</h2>
                    <p>{user.email}</p>
                </div>
                <div className={styles.inform}>
                    <ul>
                        <li>
                            <p className={styles.p}>Name</p>
                            <form className={styles.form}>
                                <input className={nameEdit?styles.cinput:styles.input}
                                    type = "username"
                                    id = "username"
                                    name = "username"
                                    placeholder = {user.username}
                                    value = {tempUser.username}
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
                                    placeholder = {user.email}
                                    value = {tempUser.email}
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
                                    value = {tempUser.password}
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