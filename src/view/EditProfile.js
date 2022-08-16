function EditProfile(props){
    function handleSubmit(e) {
        e.preventDefault()
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
