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
        password: '',
        joined: ''
    });
    useEffect(() => {
        if (localStorage.getItem('loggedUser')){
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
            setUser({password: loggedUser.password, email: loggedUser.email, name: loggedUser.name, joined: loggedUser.joined})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <div className="App">
        <BrowserRouter>
            <Header user={user} setUser={setUser}/>
            <div className={`container Body mb-5 mt-5`}>
                <Routing user={user} setUser={setUser}/>
            </div>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
