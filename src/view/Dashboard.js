import Post from "../components/Post";

function Dashboard(props){
    let renderedPosts = []
    let posts = JSON.parse(localStorage.getItem('posts'))
    for (let i = 0; i < posts.length; i++)
        renderedPosts.push(<Post user={props.user} post={posts[i]} key={i}/>)

    return(
        <div className={`dashboard`}>
            {renderedPosts}
        </div>
    )
}

export default Dashboard
