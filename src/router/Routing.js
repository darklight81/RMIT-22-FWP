import {Route, Routes} from "react-router-dom";
import LandingPage from "../view/LandingPage";
import Login from "../view/Login";
import Register from "../view/Register";
import Error from "../view/Error";

function Routing(){
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
    )
}

export default Routing;
