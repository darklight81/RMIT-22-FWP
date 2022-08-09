import './App.css';
import Header from "./view/Header";
import Signup from "./view/Signup";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./view/Login";
import Register from "./view/Register";

function Error() {
    return null;
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
