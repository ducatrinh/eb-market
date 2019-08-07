// import request from 'superagent'

export const ALL_ADS = 'ALL_ADS'
export const NEW_AD = 'NEW_AD'

// const baseUrl = 'http://localhost:4000'

const ads = [
    { id: 1, title: 'Desk', price: 20 },
    { id: 2, title: 'Chair', price: 8 },
    { id: 3, title: 'Laptop', price: 750 },
    { id: 4, title: 'Lamp', price: 6 }
]

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

export const getAds = () => (dispatch, getState) => {
    // const state = getState()
    // const { ads } = state

    // if (!ads.length) {
    //     request(`${baseUrl}/ad`)
    //         .then(response => {
    //             const action = allAds(response.body)

    //             dispatch(action)
    //         })
    //         .catch(console.error)
    // }

    dispatch(allAds(ads))
    return ads
}

export const createAd = data => (dispatch, getState) => {
    // const state = getState()
    // const { user } = state

    // request
    //     .post(`${baseUrl}/ad`)
    //     .set('Authorization', `Bearer ${user}`)
    //     .send(data)
    //     .then(response => {
    //         const action = newAd(response.body)

    //         dispatch(action)
    //     })
    //     .catch(console.error)

    dispatch(newAd(data))
    return ads.push(data)
}