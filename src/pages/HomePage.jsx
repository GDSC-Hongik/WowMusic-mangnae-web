import {Link} from "react-router-dom"

const HomePage = () =>{
    return(
        <button>
            <Link to="/login">로그인</Link>
        </button>
    )
};

export default HomePage;