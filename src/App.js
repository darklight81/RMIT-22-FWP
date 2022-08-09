import './css/App.css';
import Header from "./view/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./view/Login";
import Register from "./view/Register";
import LandingPage from "./view/LandingPage";
import Footer from "./view/Footer";

function Error() {
    return null;
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <div className={`container Body`}>
                <Routes>
                    <Route path="/" element={<LandingPage/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="*" element={<Error/>} />
                </Routes>
            </div>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
