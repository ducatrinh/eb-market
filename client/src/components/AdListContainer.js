import React, { Component } from 'react'
import { getAds } from '../actions/ads'
import AdList from './AdList'
import { connect } from 'react-redux'

class AdListContainer extends Component {
    componentDidMount() {
        this.props.getAds()
    }

    render() {
        return (
            <AdList ads={this.props.ads} />
        )
    }
}

function mapStateToProps(state) {
    return { ads: state.ads }
}

const mapDispatchToProps = { getAds }

export default connect(mapStateToProps, mapDispatchToProps)(AdListContainer)