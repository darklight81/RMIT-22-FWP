import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Signup from "../view/Signup";

function Error() {
    return (
        <div className={`error`}>
            This page does not exist
        </div>
    );
}

export default function Routing() {
    let activeClassName = "nav-active";
    return (
        <BrowserRouter>
            <nav>
                <NavLink to="" className={({ isActive }) => isActive && activeClassName}>Home</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Signup/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    );
}
