import request from 'superagent'

export const ALL_ADS = 'ALL_ADS'
export const NEW_AD = 'NEW_AD'
export const AD_FETCHED = 'AD_FETCHED'
export const AD_UPDATE_SUCCESS = 'AD_UPDATE_SUCCESS'
export const AD_DELETE_SUCCESS = 'AD_DELETE_SUCCESS'

const baseUrl = 'https://eb-market.herokuapp.com/'

function allAds(payload) {
    return {
        type: ALL_ADS,
        payload
    }
}

function newAd(payload) {
    return {
        type: NEW_AD,
        payload
    }
}

function adFetched(payload) {
    return {
        type: AD_FETCHED,
        payload
    }
}

function adUpdateSuccess(payload) {
    return {
        type: AD_UPDATE_SUCCESS,
        payload
    }
}

function adDeleteSuccess(payload) {
    return {
        type: AD_DELETE_SUCCESS,
        payload
    }
}

export const getAds = () => (dispatch, getState) => {
    const state = getState()
    const { ads } = state

    if (!ads.length) {
        request(`${baseUrl}/api/ad`)
            .then(response => {
                const action = allAds(response.body)
                dispatch(action)
            })
            .catch(console.error)
    }
}

export const createAd = (data) => (dispatch) => {
    const jwt = localStorage.getItem('jwt')

    request
        .post(`${baseUrl}/api/ad`)
        .set('Authorization', `Bearer ${jwt}`)
        .send(data)
        .then(response => {
            const action = newAd(response.body)
            dispatch(action)
        })
        .catch(console.error)
}

export const loadAd = (id) => (dispatch, getState) => {
    const state = getState().ad
    if (state && state.id === id) return

    request(`${baseUrl}/api/ad/${id}`)
        .then(response => {
            dispatch(adFetched(response.body))
        })
        .catch(console.error)
}

export const updateAd = (id, data) => (dispatch) => {
    const jwt = localStorage.getItem('jwt')

    request
        .put(`${baseUrl}/api/ad/${id}`)
        .set('Authorization', `Bearer ${jwt}`)
        .send(data)
        .then(response => {
            dispatch(adUpdateSuccess(response.body))
        })
        .catch(console.error)
}

export const deleteAd = (id) => (dispatch) => {
    const jwt = localStorage.getItem('jwt')
    
    request
        .delete(`${baseUrl}/api/ad/${id}`)
        .set('Authorization', `Bearer ${jwt}`)
        .then(_ => {
            dispatch(adDeleteSuccess(id))
        })
        .catch(console.error)
}
