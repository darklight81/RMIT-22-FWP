function PostForm(props){

    function handleSubmit(e) {
        e.preventDefault()
        const post = {
            content: e.target[0].value,
            author: props.user.name,
            time: Date()
        }

        // todo: validate the content of the push
        // todo: add possibility of uploading a picture
        let posts = JSON.parse(localStorage.getItem('posts'))
        if (posts === null)
            posts = []
        posts.push(post)
        localStorage.setItem('posts', JSON.stringify(posts))
    }

    return (
        <div className={`post-form`}>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="textarea" placeholder="Share your thoughts..."/>
                <button type="submit"> Post </button>
            </form>
        </div>
    )
}

export default PostForm
