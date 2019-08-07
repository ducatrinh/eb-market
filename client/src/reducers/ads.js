import { ALL_ADS, NEW_AD } from '../actions/ads'

export default function (state = [], action = {}) {
    switch (action.type) {
        case ALL_ADS:
            return action.payload
        case NEW_AD:
            return [action.payload, ...state]
        default:
            return state
    }
}