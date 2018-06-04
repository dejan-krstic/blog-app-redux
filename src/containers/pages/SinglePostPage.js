import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../../components/partials/BackButton'
import data from '../../services/DataService'
import Loader from '../../components/loader/Loader'
import { getPostById } from '../../actions/index'
import { connect } from 'react-redux'

class SinglePostPage extends Component {

    updatePosts(postId) {
        this.props.getPostById(postId)
    }


    componentWillMount() {
        this.updatePosts(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.id != nextProps.match.params.id){
            this.updatePosts(nextProps.match.params.id)
        }
    }
    postContent() {
        return (
            <div className="text-center">
                <h1>{this.props.singlePost.title}</h1>
                <Link to={`/authors/${this.props.singlePost.authorId}`}>{this.props.singlePost.authorName}</Link>
                <p>{this.props.singlePost.body}</p>
            </div>
        )
    }

    getSuggestions() {

        return (
            <React.Fragment>
                <hr />
                <h4> 3 more posts from the same author </h4>
                <ul className="navbar-nav">
                    <li><Link to={`/posts/${this.props.singlePost.authorPosts[0].id}`}>{this.props.singlePost.authorPosts[0].title}</Link></li>
                    <li><Link to={`/posts/${this.props.singlePost.authorPosts[1].id}`}>{this.props.singlePost.authorPosts[1].title}</Link></li>
                    <li><Link to={`/posts/${this.props.singlePost.authorPosts[2].id}`}>{this.props.singlePost.authorPosts[2].title}</Link></li>
                </ul>
            </React.Fragment>
        )
    }


    render() {
        console.log(1);
        if (JSON.stringify(this.props.singlePost) === JSON.stringify({})) {
            return <Loader />
        }
        return (
            <div className="container">
                <BackButton back={() => window.history.back()} />
                {this.postContent()}
                {this.getSuggestions()}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { singlePost: state.display.singlePost }
}

export default connect(mapStateToProps, { getPostById })(SinglePostPage);