import './css/App.css';
import Header from "./view/Header";
import {BrowserRouter} from "react-router-dom";
import Footer from "./view/Footer";
import Routing from "./router/Routing";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <div className={`container Body`}>
                <Routing/>
            </div>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
