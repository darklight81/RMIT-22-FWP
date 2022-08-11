import "../css/Register.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Register(props) {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    let err;
    // validates the passwords and checks if the email isn't already registered.
    function validate(user, password) {
        if (user.password !== password){
            return 'Passwords don\'t match!'
        }
        const registeredUsers = JSON.parse(localStorage.getItem('users'))

        if (registeredUsers === null)
            return
        for (let i = 0; i < registeredUsers.length; i++)
            if (registeredUsers[i].email === user.email)
                return "Email already in use!"

    }

    function handleSubmit(e) {
        e.preventDefault()
        const user = {
            name: e.target[0].value,
            email:  e.target[1].value,
            password: e.target[2].value
        }

        err = validate(user, e.target[3].value)
        if (err){
            console.log(err)
            let error = document.getElementById('error')
            error.innerText = err
        }
        else {
            // Get all registered users and append the new one.
            setUser(user)
            let registered = JSON.parse(localStorage.getItem('users'))
            if (registered === null)
                registered = []

            registered.push(user)
            localStorage.setItem('users', JSON.stringify(registered))
            navigate('/')
        }
    }

    return (
        <div className={`row justify-content-center`}>
            <form className={`col-4 mt-5 pt-3 form-rectangle rounded-3 shadow p-3`} onSubmit={e => handleSubmit(e)}>
                <div className="mb-3">
                    <input type="text" placeholder="Full name" className="form-control " id="inputName" aria-describedby="nameHelp" required/>
                </div>
                <div className="mb-3">
                    <input type="email" placeholder="Email address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
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
                    <button className={`btn btn-outline-primary`} type="submit"> Sign up! </button>
                </div>
                <div className="mb-3" id={`error`}>  </div>
            </form>
        </div>
    );
}

export default Register;
