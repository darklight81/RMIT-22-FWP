import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        const user = {
            email:  e.target[0].value,
            password: e.target[1].value
        }
        const users = JSON.parse(localStorage.getItem('users'))
        for (let i = 0; i < users.length; i++){
            if (user.email === users[i].email && user.password === users[i].password){
                // log the user in
                localStorage.setItem('loggedUser', JSON.stringify(user))
                navigate('/')
                break;
            }
        }
        document.getElementById('error').innerText = 'Email or password is not correct!'


    }

    return (
        <div className={`row justify-content-center`}>
            <form className={`col-4 mt-5 pt-3 form-rectangle rounded-3 shadow p-3`} onSubmit={e => handleSubmit(e)}>
                <div className="mb-3">
                    <input type="email" placeholder="Email address" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <input type="password" placeholder="Password" className="form-control" id="examplePassword" aria-describedby="passwordHelp" required/>
                </div>
                <div className="mb-3">
                    <button className={`btn btn-outline-primary`} type="submit"> Sign in! </button>
                </div>
                <div className="mb-3" id={`error`}>  </div>
            </form>
        </div>
    );
}

export default Login;
