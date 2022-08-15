import {Route, Routes} from "react-router-dom";
import LandingPage from "../view/LandingPage";
import Login from "../view/Login";
import Register from "../view/Register";
import Error from "../view/Error";
import Profile from "../view/Profile";
import Logout from "../view/Logout";
import EditProfile from "../view/EditProfile";

function Routing(props){
    return(
        <Routes>
            <Route path="/" element={<LandingPage user={props.user}/>} />
            <Route path="/login" element={<Login user={props.user} setUser={props.setUser}/>} />
            <Route path="/register" element={<Register user={props.user} setUser={props.setUser}/>} />
            <Route path="/profile" element={<Profile user={props.user} setUser={props.setUser}/>} />
            <Route path="/logout" element={<Logout user={props.user} setUser={props.setUser}/>} />
            <Route path="/editProfile" element={<EditProfile user={props.user} setUser={props.setUser}/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
    )
}

export default Routing;
