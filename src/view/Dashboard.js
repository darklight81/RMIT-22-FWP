import Post from "../components/Post";
import {useContext} from "react";
import {PostsContext} from "../components/PostsContext";

function Dashboard(props){
    const {posts} = useContext(PostsContext)
    let renderedPosts = []
    if (posts){
        for (let i = 0; i < posts.length; i++){
            renderedPosts.push(<Post user={props.user} post={posts[i]} key={i}/>)
        }
    }

    return(
        <div className={`dashboard`}>
            {renderedPosts}
        </div>
    )
}

export default Dashboard
