import './css/App.css';
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";
import Routing from "./router/Routing";
import {useState} from "react";

function App() {
    const [user, setUser] = useState( JSON.parse(localStorage.getItem('loggedUser')));
  return (
    <div className="App">
        <BrowserRouter>
            <Header user={user} setUser={setUser}/>
            <div className={`container Body`}>
                <Routing user={user} setUser={setUser}/>
            </div>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
