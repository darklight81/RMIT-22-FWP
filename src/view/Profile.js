import "../css/Profile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

function Profile(props){
    const date = new Date(props.user.joined)
    const navigate = useNavigate()

    function handleDelete() {
        let users = JSON.parse(localStorage.getItem('users'))
        for (let i = 0; i < users.length; i++){
            if (users[i].email === props.user.email){
                users.splice(i, 1)
                localStorage.setItem('users', JSON.stringify(users))
            }
        }
        props.setUser({})
        localStorage.removeItem('loggedUser')
        navigate('/')
    }

    return(
        <div className={`row justify-content-center mt-5`}>
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
                        <button type="button" className="btn btn-primary"><FontAwesomeIcon icon={faPencil}/> Edit </button>
                        <button type="button" className="btn btn-primary mt-3" onClick={handleDelete}><FontAwesomeIcon icon={faTrashCan} /> Delete </button>
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
