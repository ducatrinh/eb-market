import { combineReducers } from 'redux'
import ads from './ads'
import ad from './ad'
import user from './user'

export default combineReducers({
    ads,
    ad,
    user
})