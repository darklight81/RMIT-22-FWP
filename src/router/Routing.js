import { NavLink } from 'react-router-dom';

export default function Routing() {
    return (
            <nav className={`bg-dark text-bg-light w-100`}>
                <NavLink to="/login" className={`text-decoration-none text-light`}>Login</NavLink>
                <NavLink to="/register" className={`text-decoration-none text-light`}>Sign up</NavLink>
            </nav>
    );
}
