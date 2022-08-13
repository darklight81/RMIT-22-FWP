import "../css/Profile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan} from "@fortawesome/free-solid-svg-icons";
function Profile(props){
    return(
        <div className={`row justify-content-center mt-5`}>
            <div className={`col-6 profile pt-3 pb-3 rounded-3 shadow p-3`}>
                <div className={`row`}>
                    <div className={`col-3 profile-pic`}>
                        <img className={`rounded-5`} src={require('../assets/avatar.jpg')} alt={`avatar`}/>
                    </div>
                    <div className={`col-6 profile-info d-flex`}>

                    </div>
                    <div className={`col-3 actions d-flex flex-column justify-content-center`}>
                        <button type="button" className="btn btn-primary"><FontAwesomeIcon icon={faPencil}/> Edit </button>
                        <button type="button" className="btn btn-primary mt-2"><FontAwesomeIcon icon={faTrashCan} /> Delete </button>
                    </div>
                </div>
                <hr className={`solid`}/>
                <div className={`row`}>
                    <span className={`col-3 justify-content-lg-start`}> Joined: 29th July</span>
                </div>
            </div>
        </div>
    )
}

export default Profile
