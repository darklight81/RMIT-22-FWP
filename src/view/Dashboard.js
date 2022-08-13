function Dashboard(props){
    let posts = JSON.parse(localStorage.getItem('posts'))
    return(
        <div className={`dashboard`}>
            This is where the posts will render.
        </div>
    )
}

export default Dashboard
