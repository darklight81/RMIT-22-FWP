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
    // validates the password
    function validate(user, password) {
        if (user.password !== password){
            return 'Passwords don\'t match!'
        }

    }

    function handleSubmit(e) {
        e.preventDefault()
        const user = {
            name: e.target[0].value,
            email:  e.target[1].value,
            password: e.target[2].value
        }

        //todo: Validation of inputs
        err = validate(user, e.target[3].value)
        if (err){
            console.log(err)
            let error = document.getElementById('error')
            error.innerText = err
        }
        else {
            setUser(user)
            localStorage.setItem('user', JSON.stringify(user))
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
