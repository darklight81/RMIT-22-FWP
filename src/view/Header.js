import Routing from "../router/Routing";
import '../css/Header.css'
const Header = () => {
    return (
        <div className={`header w-100 row p-3`}>
            <a className={`col-3 text-decoration-none text-light`} href={"/"}> Loop Agile </a>
            <div className={`col-1`}/>
            <Routing/>
        </div>
    )
}

export default Header
