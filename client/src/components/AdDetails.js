import * as React from 'react'

export default function AdDetails(props) {
    if (!props.ad) return 'Loading ad data...'

    return (
        <div>
                <h2>{props.ad.title}</h2>
                <p>Description: {props.ad.description}</p>
                <img src={props.ad.url} alt='Ad...'></img>
                <p>Price: {props.ad.price}</p>
                <p>Email: {props.ad.email}</p>
                <p>Phone number: {props.ad.phoneNumber}</p>
        </div>
    )
}