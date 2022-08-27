import {useContext} from "react";
import {PostsContext} from "./PostsContext";


function PostForm(props){
    const {posts, setPosts} = useContext(PostsContext)

    function handleSubmit(e) {
        e.preventDefault()
        const post = {
            content: e.target[0].value,
            author: props.user.name,
            time: Date(),
            replies: []
        }
        if (post.content.length > 250 || post.content.length === 0)
            return false // add an error to show to the user

        // todo: add possibility of uploading a picture
        if (posts === null)
            setPosts([])
        posts.unshift(post)
        setPosts([...posts])
        localStorage.setItem('posts', JSON.stringify(posts))
    }

    return (
        <div className={`post-form`}>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="textarea" placeholder="Share your thoughts..."/>
                
                <button type="submit"> Post </button>
            </form>
        </div>
    )
}

export default PostForm
