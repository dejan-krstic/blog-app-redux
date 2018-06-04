import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../../services/DataService'
import { GOOGLE_MAPS_API_KEY, STATIC_MAP } from '../../constants/constants'
import Loader from '../../components/loader/Loader'
import { getAuthorById } from '../../actions/index'
import { connect } from 'react-redux'

class SingleAuthorPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorId: this.props.match.params.id,
            authorData: {}
        }
    }

    componentWillMount() {
        this.props.getAuthorById(this.state.authorId)

    }

    authorProfile() {
        const profile = this.props.authorData.name;
        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <img className="card-img-left" src={profile.image} alt={profile.name} />
                        </div>
                        <div className="col-9">
                            <div className="card-text">
                                <h3>{profile.name}</h3>
                                <p>{`username: ${profile.username}`}</p>
                                <p>{`email: ${profile.email}`}</p>
                                <p>{`phone: ${profile.phone}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    authorAddress() {
        const address = this.props.authorData.address;
        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-9">
                            <div className="card-text">
                                <h3>Address</h3>
                                <p>{`street: ${address.street}`}</p>
                                <p>{`city: ${address.city}`}</p>
                                <p>{`zipcode: ${address.zipCode}`}</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <img src={`${STATIC_MAP}center=${address.geo.lat},${address.geo.long}&zoom=2&size=128x128&markers=color:red%7C${address.geo.lat},${address.geo.long}&key=${GOOGLE_MAPS_API_KEY}`} alt="map" />
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    authorCompany() {
        const company = this.props.authorData.company;
        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <div className="card-text">
                                <h3>Company</h3>
                                <p>{`name: ${company.name}`}</p>
                                <p>{`slogan: ${company.slogan}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    render() {
        if (JSON.stringify(this.props.authorData) === JSON.stringify({})) {
            return <Loader />
        }
        return (
            <div className="container">
                <Link to='/authors'>{`< All authors`}</Link>
                <h3>SINGLE AUTHOR</h3>
                {this.authorProfile()}
                {this.authorAddress()}
                {this.authorCompany()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { authorData: state.display.singleAuthor }
}

export default connect(mapStateToProps, { getAuthorById })(SingleAuthorPage)