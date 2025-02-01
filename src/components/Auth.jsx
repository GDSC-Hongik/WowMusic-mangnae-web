import axios from 'axios'

export const login = async ({email, password}) =>{
    try {
        const res = await axios.post("http://127.0.0.1:8000/users/login", {
            email,
            password,
        });
        localStorage.setItem("token", res.data.token);
        console.log("토큰 발급 완료");
        return res.data; // 로그인 결과 반환
    }
    catch (error) {
        console.error("로그인 실패:", error);
        throw error; // 에러 발생 시 throw
    }
};