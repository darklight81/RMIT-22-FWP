import PostForm from "./PostForm";
import Dashboard from "./Dashboard";

function LandingPage(props) {
    let greetings = 'Stranger'
    if (props.user.name){
        greetings = props.user.name
    }
        return (
            <div className={`landing-page`}>
                <PostForm user={props.user}/>
                <Dashboard/>
            </div>
        );
}
export default LandingPage;
