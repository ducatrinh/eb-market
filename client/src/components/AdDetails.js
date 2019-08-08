import * as React from 'react'
import { Link } from 'react-router-dom'

function AdDetails(props) {
    if (!props.ad) return 'Loading ad data...'

    return (
        <div>
                <Link to={`/`}>Ad's list</Link>
                <h2>{props.ad.title}</h2>
                <p>Description: {props.ad.description}</p>
                <img src={props.ad.url} alt={props.ad.title}></img>
                <p>Price: €{props.ad.price}</p>
                <p>Email: {props.ad.email}</p>
                <p>Phone number: {props.ad.phoneNumber}</p>
        </div>
    )
}

export default AdDetails