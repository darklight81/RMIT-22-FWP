import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import {useContext, useState} from "react";
import {PostsContext} from "./PostsContext";
import "../css/PostForm.css"

const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width:500,
        height: 300,
    },
};

function Post(props){
    const {posts, setPosts} = useContext(PostsContext)
    let tmpPosts = posts
    let options = { year: 'numeric', month: 'short', day: 'numeric' };
    const tmp = new Date(props.post.time)
    const date = new Intl.DateTimeFormat('en-AU', options).format(tmp)

    let postOptions = null

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false)
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#415A80';
    }

    function closeModal() {
        setIsOpen(false);
    }
    // deletes post
    function handleDelete() {
        for (let i = 0; i < posts.length; i++){
            if (posts[i].time === props.post.time && posts[i].author === props.post.author){
                posts.splice(i, 1)
                localStorage.setItem('posts', JSON.stringify(tmpPosts))
                setPosts([...posts])
                break
            }
        }
    }

    // edits post
    function handleEdit(e) {
        e.preventDefault()
        const newVal = e.target[0].value
        if( !(newVal.length > 250 || newVal.length === 0) ){
            props.post.content = newVal
            for (let i = 0; i < posts.length; i++){
                if (posts[i].time === props.post.time && posts[i].author === props.post.author){
                    posts[i].content = newVal;
                    localStorage.setItem('posts', JSON.stringify(posts))
                    setPosts(posts)
                    break
                }
            }
            closeModal()
        }
    }

    // adds the ability to delete/edit posts that was posted by the logged user
    // todo: change this to an email as the name is not unique
    if (props.user.name === props.post.author){
        postOptions =
            <div className={`post-options`}>
                <button type="button" className="btn btn-primary" onClick={openModal}><FontAwesomeIcon icon={faPencil}/> Edit </button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={modalStyle}
                    contentLabel="Delete Modal">

                    <h2 ref={(_subtitle) => (subtitle = _subtitle)} className={`row justify-content-center`} >Edit Your Post</h2>
                    <form onSubmit={ e => handleEdit(e)}>
                        <div className={`row justify-content-center`}>
                            <div className={`col-4`}>
                                <input type={`text`}/>
                            </div>
                        </div>
                        <div className={`row justify-content-center`}>
                        <div className={`col-1`}>
                            <p></p>
                            <button className="btn btn-primary  row justify-content-center " onClick={closeModal}>Cancel</button>
                            <p></p>
                            <button type={`submit`} className="btn btn-primary row justify-content-center">Edit</button>
                                    
                            </div>
                        </div>
                    </form>
                </Modal>
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
                            <p></p>
                            
                        </div> 
                        <p className="content">{props.post.content}</p>
                        {postOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post
