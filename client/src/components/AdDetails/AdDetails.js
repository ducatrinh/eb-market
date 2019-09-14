import * as React from 'react'
import AdForm from '../AdForm/AdForm'

function AdDetails(props) {
    if (!props.ad) return 'Loading ad data...'

    return (
        props.editMode
            ? <AdForm
                editMode={props.editMode}
                onSubmit={props.onSubmit}
                onChange={props.onChange}
                values={props.formValues}
            />

            : <div>
                <h2>{props.ad.title}</h2>
                <p>Description: {props.ad.description}</p>
                <img src={props.ad.url} alt={props.ad.title}></img>
                <p>Price: €{props.ad.price}</p>
                <p>Email: {props.ad.email}</p>
                {props.ad.phoneNumber && <p>Phone number: {props.ad.phoneNumber}</p>}

                {Number(localStorage.getItem('userId')) === props.ad.userId && 
                <div>
                    <button onClick={props.onEdit}>Edit</button>
                    <button onClick={props.onDelete}>Delete</button>
                </div>}
            </div>
    )
}

export default AdDetails