import {RAPIDAPI_KEY, SMSAPI_KEY} from "../env";
import {useNavigate} from "react-router-dom";
function Authentication(props){
    const navigate = useNavigate()
    let secret;
    function handleSubmit(e){
        if ( e.target[0].value !== secret){
            props.setUser({})
            localStorage.removeItem('loggedUser')
        }
        navigate('/')
    }
    function createSecret(){
        let result = '';
        const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const charactersLength = characters.length;
        for ( let i = 0; i < 5; i++ ) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
    function sendSMS(e, phoneNumber){
        e.preventDefault()
        secret = createSecret()
        const encodedParams = new URLSearchParams();
        encodedParams.append("to", phoneNumber);
        encodedParams.append("p", SMSAPI_KEY);
        encodedParams.append("text", secret);

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'sms77io.p.rapidapi.com'
            },
            body: encodedParams
        };

        fetch('https://sms77io.p.rapidapi.com/sms', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    return(
        <div className={`row justify-content-center`}>
            <form className={`col-4 pt-3 form-rectangle rounded-3 shadow p-3`} onSubmit={e => handleSubmit(e)}>
                <div className="mb-3">
                    <input placeholder="Code from the SMS" className="form-control"/>
                </div>
                <div className={`row justify-content-center d-flex flex-row`}>
                    <div className=" col-4">
                        <button className={`btn btn-outline-primary`} onClick={ e => sendSMS(e,'+421918545034')}> Send SMS </button>
                    </div>
                    <div className="col-4">
                        <button className={`btn btn-outline-primary`} type="submit"> Submit! </button>
                    </div>
                </div>

                <div className="mb-3" id={`error`}>  </div>
            </form>
        </div>
    )
}

export default Authentication
