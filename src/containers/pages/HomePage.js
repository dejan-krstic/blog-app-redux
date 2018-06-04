import React, { Component } from 'react'
import PostItem from '../../components/shared/PostItem'
import data from '../../services/DataService'
import { getPosts } from "../../actions/index"
import Loader from '../../components/loader/Loader'
import { connect } from 'react-redux'

class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getPosts()
    }

    render() {
        if (this.props.posts.length === 0) {
            return <Loader />
        }
        return <div className="container">
            <h3 className="text-center">POSTS</h3>
            <ul>
                {this.props.posts.map(post => <PostItem id={post.id} key={post.id} post={post} />)}
            </ul>
        </div>
    }
}

const mapStateToProps = state => {
        return { posts: state.display.postList }
}

export default connect(mapStateToProps, { getPosts })(HomePage)