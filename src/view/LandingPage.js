import PostForm from "../components/PostForm";
import Dashboard from "./Dashboard";

function LandingPage(props) {
    let content = <div> Hello Stranger </div>
    if (props.user.name){
        content =
            <div>
                <PostForm user={props.user}/>
                <Dashboard user={props.user}/>
            </div>
    }
        return (
            <div className={`landing-page`}>
                {content}
            </div>
        );
}
export default LandingPage;
