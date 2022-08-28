import {useContext} from "react";
import {PostsContext} from "./PostsContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCamera} from "@fortawesome/free-solid-svg-icons";

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
        // validation of post
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
        <div className="container">
            <div className="row justify-content-center">
                <div className="post-form rounded-3 shadow p-3 col-md-4 col-sm-12">
                    <div className="well">
                        <form className="form-horizontal" onSubmit={e => handleSubmit(e)}>
                            <h4>Share your thoughts</h4>
                            <div className="form-group">
                                <textarea id={`post-form`} placeholder="Update your status" className="form-control"/>
                            </div>
                            <div className={`d-flex justify-content-between`}>
                                <div className={`d-flex justify-content-start`}>
                                    <label htmlFor="inputTag" className={`mt-2`}>
                                        <FontAwesomeIcon icon={faCamera} className={`mx-1`}/>
                                         Add photo
                                        <input id="inputTag" type="file"/>
                                    </label>
                                </div>
                                <div className={`d-flex justify-content-end`}>
                                    <button type="submit" className="btn btn-success mt-1">Post</button>
                                </div>
                            </div>
                        </form>
                        <div id={`error`}> </div>
                    </div>
                </div>
            </div>
        </div>
        /*
        <div className={`post-form`}>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="form-group">
                    <input id="post-form" className={`p-3`} type="textarea" placeholder="Share your thoughts..."/>
                </div>
                <button type="submit"> Post </button>
            </form>
            <div id={`error`}> </div>
        </div>
         */
    )
}

export default PostForm
