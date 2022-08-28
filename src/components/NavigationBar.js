import { NavLink } from 'react-router-dom';
import "../css/NavigationBar.css"

function NavigationBar(props) {
        if (!props.user){
            return (
                <nav className={`col-6 mx-2`}>
                    <div className={`row justify-content-end`}>
                        <NavLink to="/" className={`col-2 text-center`}>Home </NavLink>
                        <NavLink to="/login" className={`col-2 text-center`}>Login </NavLink>
                        <NavLink to="/register" className={`col-2 text-center`}>Sign up</NavLink>
                    </div>
                </nav>
            );
        }
            return (
                <nav className={`col-6 mx-2`}>
                    <div className={`row justify-content-end`}>
                        <NavLink to="/" className={`col-2 text-center`}>Home </NavLink>
                        <NavLink to="/profile" className={`col-2 text-center`}>My profile </NavLink>
                        <NavLink to="/logout" className={`col-2 text-center`}>Logout</NavLink>
                    </div>
                </nav>
            );
}
export default NavigationBar
