import axios from 'axios'

export const login = async ({email, password}) =>{
    try {
        const res = await axios.post("http://192.168.212.15:8000/api/users/login/", {
            email,
            password,
        });
        localStorage.setItem("token", res.data.token);
        console.log("토큰 발급 완료");
        return res.data;
    }
    catch (error) {
        console.error("로그인 실패:", error);
        throw error;
    }
};