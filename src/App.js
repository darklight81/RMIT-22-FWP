import './css/App.css';
import Header from "./view/Header";
import {BrowserRouter} from "react-router-dom";
import Footer from "./view/Footer";
import Routing from "./router/Routing";
import {useEffect, useState} from "react";

function App() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    useEffect(() => {
        if (localStorage.getItem('loggedUser')){
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
            setUser({password: loggedUser.password, email: loggedUser.email, name: loggedUser.name})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <div className="App">
        <BrowserRouter>
            <Header ser={user} setUser={setUser}/>
            <div className={`container Body`}>
                <Routing user={user} setUser={setUser}/>
            </div>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
