import React from 'react'
import { connect } from 'react-redux'
import AdDetails from './AdDetails'
import { loadAd } from '../actions/ads'

class AdDetailsContainer extends React.Component {
    componentDidMount() {
        this.props.loadAd(Number(this.props.match.params.id))
    }

    render() {
        return (<AdDetails ad={this.props.ad} />)
    }
}

const mapStateToProps = state => ({
    ad: state.ad
})

const mapDispatchToProps = {
    loadAd
}

export default connect(mapStateToProps, mapDispatchToProps)(AdDetailsContainer)