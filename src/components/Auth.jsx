import axios from 'axios';

export const api = axios.create({
    baseURL: "http://52.79.151.35/api",
});

export const login = async ({email, password}, navigate) =>{

    try {
        const res = await api.post("/users/login/", {
            email,
            password,
        });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("password", res.data.password);
        api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
        console.log(res.data.message);
        console.log(res.data);
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
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
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

export const getInf = () =>{
    const data = {
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password")
    }

    return data;
}