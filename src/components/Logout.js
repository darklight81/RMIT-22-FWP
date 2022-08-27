import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Logout(props){
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.removeItem('loggedUser')
        props.setUser(JSON.parse(localStorage.getItem('loggedUser')))
        navigate('/')
    }, [props, navigate])
}

export default Logout
