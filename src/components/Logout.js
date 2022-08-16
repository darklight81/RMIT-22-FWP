import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Logout(props){
    const navigate = useNavigate()
    useEffect(() => {
        props.setUser({})
        localStorage.removeItem('loggedUser')
        navigate('/')
    }, [props, navigate])
}

export default Logout
