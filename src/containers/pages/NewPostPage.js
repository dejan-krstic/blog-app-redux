import React, { Component } from 'react'
import data from '../../services/DataService'
import { url } from '../../constants/constants'

var beta = {};
export default class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputTitle: '',
            inputBody: '',
            validationClassT: '',
            validationClassB: '',
            smallValidationClassT: '',
            smallValidationClassB: '',
            titleValidationMessage: '',
            bodyValidationMessage: '',
            submitClass: 'disabled'

        }
        this.onSubmit = this.onSubmit.bind(this)
        this.cancelForm = this.cancelForm.bind(this)
        this.getBody = this.getBody.bind(this)
        this.isFilled = this.isFilled.bind(this)
    }

    isFilled(e) {
        const title = document.getElementById('Name')
        const body = document.getElementById('Message')
        if (title.value.split(' ').join('') !== '' && body.value.split(' ').join('') !== '') {
            this.setState({ submitClass: '' })
        } else {
            this.setState({ submitClass: 'disabled' })
        }
    }

    getTitle(e) {
        // if (e.target.value === '') {
        //     this.setState({
        //         validationClassT: 'is-invalid',
        //         titleValidationMessage: 'Provide a valid input!',
        //         smallValidationClassT: 'invalid-feedback'
        //     })
        // } else {
        //     this.setState({
        //         validationClassT: '',
        //         titleValidationMessage: '',
        //         smallValidationClassT: ''
        //     })
        //     this.setState({ inputTitle: e.target.value })
        // }

    }

    getBody(e) {
        if (e.target.value === '') {
            this.setState({
                validationClassB: 'is-invalid',
                bodyValidationMessage: 'Provide a valid input!',
                smallValidationClassB: 'invalid-feedback'
            })
        } else {
            this.setState({
                validationClassB: '',
                bodyValidationMessage: '',
                smallValidationClassB: ''
            })
            this.setState({ inputBody: e.target.value })
        }

    }

    onSubmit() {
        if (this.state.inputTitle.split(' ').join('').length === 0 || this.state.inputBody.split(' ').join('').length === 0 ) {
            return
        }
        data.postData(url, this.state.inputTitle, this.state.inputBody, 'posts')
            .then(response => {
                if (response.status < 400) {
                    this.props.history.push('/')
                }
            })
    }

    cancelForm() {
        this.props.history.push('/')
    }

    render() {
        return (
            <React.Fragment>
                <br />
                <h3 className="text-center">NEW POST</h3>
                <br />
                <div className="container">
                    <div className="row">
                        <div id="contact-form" className="contact-form col-md-10 offset-md-1">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="row">Title
                                        <input type="text" onBlur={this.getTitle} onChange={this.isFilled} className={`form-control col-md-12 ${this.state.validationClassT}`} name="title" autoComplete="off" id="Name" placeholder="Post title" />
                                            <small className={this.state.smallValidationClassT}>{this.state.titleValidationMessage}</small>
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="row">Content
                                        <textarea onBlur={this.getBody} onChange={this.isFilled} className={`form-control textarea ${this.state.validationClassB}`} rows="7" name="body" id="Message" placeholder="Multi-line-textarea"></textarea>
                                            <small className={this.state.smallValidationClassB}>{this.state.bodyValidationMessage}</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 offset-md-6 row" onClick={this.cancelForm}>
                                    <button type="button" className="btn main-btn pull-right col-md-10 offset-md-2">Cancel</button>
                                </div>
                                <div className="col-md-3 row" onClick={this.onSubmit}>
                                    <button type="submit" className={`btn btn-info pull-right col-md-10 offset-md-2 ${this.state.submitClass}`}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}