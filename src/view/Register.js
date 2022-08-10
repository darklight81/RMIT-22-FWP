import "../css/Register.css"
function Register() {
    return (
        <div className={`row justify-content-center`}>
            <form className={`col-4 mt-5 pt-3 form-rectangle rounded-3 shadow p-3`}>
                <div className="mb-4">
                    <input type="text" placeholder="Full name" className="form-control " id="inputName" aria-describedby="nameHelp"/>
                </div>
                <div className="mb-3">
                    <input type="email" placeholder="Email address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <input type="email" placeholder="Password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="passwordHelp" className="form-text">Password restrictions.</div>
                </div>
            </form>
        </div>
    );
}

export default Register;
