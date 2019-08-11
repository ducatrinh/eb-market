import React from 'react'
import { connect } from 'react-redux'
import AdDetails from './AdDetails'
import { loadAd, updateAd, deleteAd } from '../../actions/ads'

class AdDetailsContainer extends React.Component {
    state = { editMode: false }

    componentDidMount() {
        this.props.loadAd(Number(this.props.match.params.id))
    }

    onEdit = () => {
        this.setState({
            editMode: true,
            formValues: { ...this.props.ad }
        })
    }

    onChange = (event) => {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [event.target.name]: event.target.value
            }
        })
    }

    onDelete = () => {
        this.props.deleteAd(this.props.ad.id)
        this.props.history.push('/')
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            editMode: false
        })
        this.props.updateAd(this.props.ad.id, this.state.formValues)
    }

    render() {
        return (<AdDetails
            ad={this.props.ad}
            user={this.props.user}
            onEdit={this.onEdit}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            onDelete={this.onDelete}
            editMode={this.state.editMode}
            formValues={this.state.formValues}
        />)
    }
}

const mapStateToProps = state => ({
    ad: state.ad,
    user: state.user
})

const mapDispatchToProps = {
    loadAd, updateAd, deleteAd
}

export default connect(mapStateToProps, mapDispatchToProps)(AdDetailsContainer)