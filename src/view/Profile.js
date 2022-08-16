import "../css/Profile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import Modal from 'react-modal';
import {useState} from "react";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function Profile(props){
    const date = new Date(props.user.joined)
    const navigate = useNavigate()

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#415A80';
    }

    function closeModal() {
        setIsOpen(false);
    }


    function handleDelete() {
        let users = JSON.parse(localStorage.getItem('users'))
        let posts = JSON.parse(localStorage.getItem('posts'))

        // deletes the user from registered
        for (let i = 0; i < users.length; i++){
            if (users[i].email === props.user.email){
                users.splice(i, 1)
                localStorage.setItem('users', JSON.stringify(users))
            }
        }

        // deletes the posts of the user
        for (let i = 0 ; i < posts.length; i++)
            if (posts[i].author === props.user.name)
                posts.splice(i, 1)
        localStorage.setItem('posts', JSON.stringify(posts))

        props.setUser({})
        localStorage.removeItem('loggedUser')
        navigate('/')
    }

    function handleEdit() {
        navigate('/editProfile')
    }

    return(
        <div className={`row justify-content-center mt-5`} id={`Modal`}>
            <div className={`col-6 profile pt-3 pb-3 rounded-3 shadow p-3`}>
                <div className={`row`}>
                    <div className={`col-3 profile-pic`}>
                        <img className={`rounded-5`} src={require('../assets/avatar.jpg')} alt={`avatar`}/>
                    </div>
                    <div className={`col-6 profile-info d-flex flex-column`}>
                        <span className={`name mb-3`}> {props.user.name} </span>
                        <span className={`email`}> {props.user.email} </span>
                    </div>
                    <div className={`col-3 actions d-flex flex-column justify-content-center`}>
                        <button type="button" className="btn btn-primary" onClick={handleEdit}><FontAwesomeIcon icon={faPencil}/> Edit </button>
                        <button type="button" className="btn btn-primary mt-3" onClick={openModal}><FontAwesomeIcon icon={faTrashCan} /> Delete </button>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Delete Modal"
                        >
                            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Are you sure you want to delete your account?</h2>
                            <div className={`row justify-content-center`}>
                                <div className={`col-4`}>
                                    <button className="btn btn-primary mx-1" onClick={closeModal}>Cancel</button>
                                    <button className="btn btn-primary mx-1" onClick={handleDelete}>Delete</button>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
                <hr className={`solid`}/>
                <div className={`row`}>
                    <span className={`col-5 justify-content-lg-start`}> Joined: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</span>
                </div>
            </div>
        </div>
    )
}

export default Profile
