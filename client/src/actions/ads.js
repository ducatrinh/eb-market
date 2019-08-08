import request from 'superagent'

export const ALL_ADS = 'ALL_ADS'
export const NEW_AD = 'NEW_AD'
export const AD_FETCHED = 'AD_FETCHED'

const baseUrl = 'http://localhost:4000'

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

export const getAds = () => (dispatch, getState) => {
    const state = getState()
    const { ads } = state

    if (!ads.length) {
        request(`${baseUrl}/ad`)
            .then(response => {
                const action = allAds(response.body)

                dispatch(action)
            })
            .catch(console.error)
    }
}

export const createAd = data => (dispatch) => {
    request
        .post(`${baseUrl}/ad`)
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

    request(`${baseUrl}/ad/${id}`)
      .then(response => {
        dispatch(adFetched(response.body))
      })
      .catch(console.error)
}