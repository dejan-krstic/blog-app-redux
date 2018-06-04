import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = (props) => {
    return (
        <React.Fragment>
            <Link to={`/posts/${props.post.id}`}>
                <h3>{props.post.title}</h3>
            </Link>
            <p className="text-truncate">{props.post.body}</p>
        </React.Fragment>

    )
}

export default PostItem