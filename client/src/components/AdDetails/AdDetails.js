import * as React from 'react'
import AdForm from '../AdForm/AdForm'
import Header from '../Header/Header'

function AdDetails(props) {
    if (!props.ad) return 'Loading ad data...'

    return (
        props.editMode
            ? <AdForm
                user={props.user}
                editMode={props.editMode}
                onSubmit={props.onSubmit}
                onChange={props.onChange}
                values={props.formValues}
            />

            : <div>
                <Header />
                <h2>{props.ad.title}</h2>
                <p>Description: {props.ad.description}</p>
                <img src={props.ad.url} alt={props.ad.title}></img>
                <p>Price: €{props.ad.price}</p>
                <p>Email: {props.ad.email}</p>
                {props.ad.phoneNumber && <p>Phone number: {props.ad.phoneNumber}</p>}

                {props.user.userId === props.ad.userId && <button onClick={props.onEdit}>Edit</button>}
                {props.user.userId === props.ad.userId && <button onClick={props.onEdit}>Delete</button>}
            </div>
    )
}

export default AdDetails