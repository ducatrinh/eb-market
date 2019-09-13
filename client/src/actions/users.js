import request from 'superagent'

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

const baseUrl = 'http://localhost:4000'

function signupSuccess(payload) {
    return {
        type: SIGNUP_SUCCESS,
        payload
    }
}

function signupError(payload) {
    return {
        type: SIGNUP_ERROR,
        payload
    }
}

function loginSuccess(payload) {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}

function loginError(payload) {
    return {
        type: LOGIN_ERROR,
        payload
    }
}

export const signup = (email, password) => dispatch => {
    request
        .post(`${baseUrl}/user`)
        .send({ email, password })
        .then(response => {
            const action = signupSuccess(response.body)
            dispatch(action)
        })
        .catch(err => {
            console.error(err)
            dispatch(signupError({
                url: err.response.req.url, 
                message: err.response.body.message
            }))
        })
}

export const login = (email, password) => dispatch => {
    request
        .post(`${baseUrl}/login`)
        .send({ email, password })
        .then(response => {
            const action = loginSuccess(response.body)

            // Save email & jwt to local storage to persist the login state
            localStorage.setItem('email', action.payload.email)
            localStorage.setItem('jwt', action.payload.jwt)

            dispatch(action)

            // Remove expired JWT in 2 hours
            setTimeout(logout, 7200000)
        })
        .catch(err => {
            console.error(err)
            dispatch(loginError({
                url: err.response.req.url, 
                message: err.response.body.message
            }))
        })
}

export const logout = () => dispatch => {
    localStorage.removeItem('email')
    localStorage.removeItem('jwt')

    dispatch({ 
        type: LOGOUT_SUCCESS,
        payload: {} 
    })
}
