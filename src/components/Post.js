import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil, faTrashCan} from "@fortawesome/free-solid-svg-icons";

function Post(props){
    let options = { year: 'numeric', month: 'short', day: 'numeric' };
    const tmp = new Date(props.post.time)
    const date = new Intl.DateTimeFormat('en-AU', options).format(tmp)

    let postOptions = null

    // deletes post
    function handleDelete() {
        let posts = JSON.parse(localStorage.getItem('posts'))
        for (let i = 0; i < posts.length; i++){
            if (posts[i].time === props.post.time && posts[i].author === props.post.author){
                posts.splice(i, 1)
                localStorage.setItem('posts', JSON.stringify(posts))
            }
        }
    }

    // edits post
    function handleEdit() {
    }

    // adds the ability to delete/edit posts that was posted by the logged user
    if (props.user.name === props.post.author){
        postOptions =
            <div className={`post-options`}>
                <button type="button" className="btn btn-primary" onClick={handleEdit}><FontAwesomeIcon icon={faPencil}/> Edit </button>
                <button type="button" className="btn btn-primary" onClick={handleDelete}><FontAwesomeIcon icon={faTrashCan} /> Delete </button>
            </div>
    }

    return(
        <div className={`row justify-content-center mt-5`}>
            <div className={` post col-6 profile pt-3 pb-3 rounded-3 shadow p-3`}>
                <div className={`row`}>
                    <div className={`col-3 pic`}>
                        <img className={`rounded-5`} src={require('../assets/avatar.jpg')} alt={`avatar`}/>
                    </div>
                    <div className={`col-6 d-flex flex-column`}>
                        <div className={'author'}>
                            <b>{props.post.author} </b>
                            {date}
                            {postOptions}
                        </div>
                        {props.post.content}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post
