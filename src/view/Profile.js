import "../css/Profile.css"
function Profile(props){
    return(
        <div className={`row justify-content-center mt-5`}>
            <div className={`col-6 profile`}>
                Hi {props.user.name}!
            </div>
        </div>
    )
}

export default Profile
