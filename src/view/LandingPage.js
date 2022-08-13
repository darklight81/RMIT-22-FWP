function LandingPage(props) {
    let greetings = 'Stranger'
    if (props.user.name){
        greetings = props.user.name
    }
        return (
            <div className={`error`}>
                This is a landing page. Hello {greetings}!
            </div>
        );
}
export default LandingPage;
