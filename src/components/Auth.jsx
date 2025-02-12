import axios from 'axios';

export const api = axios.create({
    baseURL: "http://192.168.212.15:8000/api",
});

export const login = async ({email, password}, navigate) =>{

    try {
        const res = await api.post("/users/login/", {
            email,
            password,
        });
        localStorage.setItem("token", res.data.token);
        api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
        console.log("로그인 성공");
        navigate("/");
        return res.data;
    }
    catch (error) {
        console.error("로그인 실패:", error);
        navigate("/login");
        throw error;
    }
};

export const logout = (navigate) =>{
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
    navigate("/");
};

export const isAuthenticated = () => {
    return !!localStorage.getItem("token"); //토큰이 있으면 로그인 상태
}

export const listData = async ({keywords, setLoading}) => {
    try{
        const res = await api.get("/keywords/result/", {
            params:{
                keyword1: keywords.one,
                keyword2: keywords.two,
            }
        });
        setLoading(false);
        return res.data;
    }
    catch (error){
        console.log("플레이리스트 전송 실패: ", error);
        throw error;
    }
}