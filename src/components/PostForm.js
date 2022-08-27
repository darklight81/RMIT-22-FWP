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
        if (post.content.length > 250 || post.content.length === 0){
            document.getElementById('error').innerText = 'Post isn\'t properly formatted!'
            return
        }
        // todo: add possibility of uploading a picture
        if (posts === null)
            setPosts([])
        posts.unshift(post)
        setPosts([...posts])
        localStorage.setItem('posts', JSON.stringify(posts))

        // Clean the form value and error if there was any beforehand
        document.getElementById('error').innerText = ''
        const postForm = document.getElementById('post-form');
        postForm.value = ''
    }

    return (
        <div className={`post-form`}>
            <form onSubmit={e => handleSubmit(e)}>
                <input id="post-form" type="textarea" placeholder="Share your thoughts..."/>
                <button type="submit"> Post </button>
            </form>
            <div id={`error`}> </div>
        </div>
    )
}

export default PostForm
