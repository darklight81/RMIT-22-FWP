import { NavLink } from 'react-router-dom';

function NavigationBar(props) {
        if (!props.user){
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
            return (
                <nav className={`col-6 mx-2`}>
                    <div className={`row justify-content-end`}>
                        <NavLink to="/" className={`text-decoration-none text-light col-2`}>Home </NavLink>
                        <NavLink to="/profile" className={`text-decoration-none text-light col-2`}>My profile </NavLink>
                        <NavLink to="/logout" className={`text-decoration-none text-light col-2`}>Logout</NavLink>
                    </div>
                </nav>
            );
}
export default NavigationBar
