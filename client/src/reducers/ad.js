import { AD_FETCHED, AD_UPDATE_SUCCESS } from '../actions/ads'

export default function (state = null, action) {
    switch (action.type) {
        case AD_FETCHED:
            return action.payload
        case AD_UPDATE_SUCCESS:
            return action.payload
        default:
            return state
    }
}