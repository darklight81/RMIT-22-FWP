import './App.css';
import ThemeSwitcher from "./view/ThemeSwitcher";
import Header from "./view/Header";
import Signup from "./view/Signup";
import Routing from "./router/Routing";

function App() {
  return (
    <div className="App">
        <div className={`container`}>
            <Routing/>
        </div>
    </div>
  );
}

export default App;
