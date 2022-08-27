import {useNavigate} from "react-router-dom";

function EditProfile(props){
    const navigator = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        if (e.target[1].value === e.target[2].value && props.user.password === e.target[1].value){
            const newName = e.target[0].value

            // change the name in posts
            const posts = JSON.parse(localStorage.getItem('posts'))
            for (let i = 0; i < posts.length; i++) {
                if (posts[i].author === props.user.name){
                    posts[i].author = newName
                }
            }

            let users = JSON.parse(localStorage.getItem('users'))
            for (let i = 0; i < users.length; i++){
                if (props.user.email === users[i].email){
                    users[i].name = newName
                    localStorage.setItem('loggedUser', JSON.stringify(users[i]))
                    props.setUser(users[i])
                }
            }

            localStorage.setItem('users', JSON.stringify(users))
            localStorage.setItem('posts', JSON.stringify(posts))


            navigator('/profile')
        }
        else
            document.getElementById('error').innerText = 'Passwords don\'t match!'
        document.getElementById('error').innerText = 'Password is incorrect!'
    }

    return (
        <div className={`row justify-content-center`}>
            <form className={`col-4 pt-3 form-rectangle rounded-3 shadow p-3`} onSubmit={e => handleSubmit(e)}>
                <div className="mb-3">
                    <input type="text" placeholder="Full name" className="form-control " id="inputName" aria-describedby="nameHelp" required/>
                </div>
                <div className="mb-3">
                    <input type="password" placeholder="Password" className="form-control" id="examplePassword" aria-describedby="passwordHelp" required/>
                    <div id="passwordHelp" className="form-text">Must contain at least one number, uppercase and lowercase letter, and more than 7 characters.</div>
                    {/*Password validation from: https://www.w3schools.com/howto/howto_js_password_validation.asp*/}
                </div>
                <div className="mb-3">
                    <input type="password" placeholder="Confirm password" className="form-control" id="examplePasswordConfirm" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" aria-describedby="passwordConfirmHelp" required/>
                </div>
                <div className="mb-3">
                    <button className={`btn btn-outline-primary`} type="submit"> Update! </button>
                </div>
                <div className="mb-3" id={`error`}>  </div>
            </form>
        </div>
    )
}
export default EditProfile
