import PostForm from "./PostForm";
import Dashboard from "./Dashboard";
import "../css/LandingPage.css"

function LandingPage(props) {
    let greetings = 'Stranger'
    if (props.user.name){
        greetings = props.user.name
    }
    let name = props.user.name
        return (
            <div className={`landing-page`}>
                <div className="greetings"> Welcome {greetings} to Loop Agile! </div>
                <br></br>
                <PostForm user={props.user}/>
                <Dashboard/>
                
            </div>
            
        );
}
export default LandingPage;
