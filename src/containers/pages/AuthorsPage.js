import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import data from '../../services/DataService'
import Loader from '../../components/loader/Loader'
import { getAuthors } from "../../actions/index";
import { connect } from 'react-redux'


class AuthorsPage extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getAuthors()
    }

    render() {
        if (this.props.authorList.length === 0) {
            return <Loader />
        }
        return (
            <div className="container">
                <h3>AUTHORS ({this.props.authorList.length})</h3>
                <ul className="navbar-nav">
                    {this.props.authorList.map(author => <Link key={author.id} to={`/authors/${author.id}`}><li>{`${author.name} (${author.posts.length})`}</li></Link>)}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        authorList: state.display.authors
    }
}

export default connect(mapStateToProps, { getAuthors })(AuthorsPage)