import React from 'react'
import { connect } from 'react-redux'
import { createAd } from '../actions/ads'
import AdForm from './AdForm'

class AdFormContainer extends React.Component {
    state = {
        title: '',
        description: '',
        url: '',
        price: '',
        email: '',
        phoneNumber: '',
        added: false
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()

        this.props.createAd(this.state)

        this.setState({
            title: '',
            description: '',
            url: '',
            price: '',
            email: '',
            phoneNumber: '',
            added: true
        })
    }

    render() {
        return (<AdForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
        />)
    }
}

const mapDispatchToProps = {
    createAd
}

export default connect(null, mapDispatchToProps)(AdFormContainer)