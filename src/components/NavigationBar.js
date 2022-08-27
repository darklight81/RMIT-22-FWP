import { NavLink } from 'react-router-dom';
import "../css/NavigationBar.css"

function NavigationBar(props) {
    if (!props.user.name){
        return (
            <nav className={`col-6 mx-2`}>
                <div className={`row justify-content-end`}>
                    <NavLink to="/" className={`text-decoration-none text-light col-2`}>Home </NavLink>
                    <NavLink to="/login" className={`text-decoration-none text-light col-2`}>Login </NavLink>
                    <NavLink to="/register" className={`text-decoration-none text-light col-2`}>Sign up</NavLink>
                </div>
            </nav>
        );
    }

    else{
        return (
            <nav className={`col-7 mx-2`}>
                <div className={`row justify-content-end`}>
                    <NavLink to="/" className={`nav a col-2`}>Home </NavLink>
                    <NavLink to="/profile" className={`nav a col-2`}>My profile </NavLink>
                    <NavLink to="/logout" className={`nav a col-2`}>Logout</NavLink>
                </div>
            </nav>
        );
    }
}
export default NavigationBar
