import PostForm from "../components/PostForm";
import Dashboard from "./Dashboard";
import {PostsContext} from "../components/PostsContext";
import {useState} from "react";
function LandingPage(props) {
    const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('posts')))
    let content = <div className={'row m-0 p-0'}>
        <img src={require('../assets/dashboard-background.jpg')} className={"img-fluid w-100"} alt="background" />
    </div>
    if (props.user && props.user.name){
        content =
            <PostsContext.Provider value={{posts, setPosts}}>
                <div className={'mb-5 mt-5'}>
                    <PostForm user={props.user}/>
                    <Dashboard user={props.user}/>
                </div>
            </PostsContext.Provider>
    }
        return (
            <div className={`landing-page`}>
                {content}
            </div>
        );
}
export default LandingPage;
