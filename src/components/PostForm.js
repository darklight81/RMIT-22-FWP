function PostForm(props){
    function handleSubmit(e) {
        e.preventDefault()
        const post = {
            content: e.target[0].value,
            author: props.user.name,
            time: Date(),
            replies: []
        }
        if (post.content.length > 250 || post.content.length === 0)
            return false // add an error to show to the user

        // todo: add possibility of uploading a picture
        let posts = JSON.parse(localStorage.getItem('posts'))
        if (posts === null)
            posts = []
        posts.unshift(post)
        localStorage.setItem('posts', JSON.stringify(posts))
        // todo: fix this to not reload the whole page?
        // eslint-disable-next-line no-restricted-globals
        location.reload()
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
