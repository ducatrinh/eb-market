// import request from 'superagent'

export const ALL_ADS = 'ALL_ADS'

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