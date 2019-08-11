import * as React from 'react'
import { Link } from 'react-router-dom'
import AdForm from '../AdForm/AdForm'

function AdDetails(props) {
    if (!props.ad) return 'Loading ad data...'

    return (
        <div>
            {props.editMode && <AdForm
                user={props.user}
                editMode={props.editMode}
                onSubmit={props.onSubmit}
                onChange={props.onChange}
                values={props.formValues}
            />}

            {!props.editMode &&
                <div>
                    <Link to={`/`}>Ad's list</Link>
                    <h2>{props.ad.title}</h2>
                    <p>Description: {props.ad.description}</p>
                    <img src={props.ad.url} alt={props.ad.title}></img>
                    <p>Price: €{props.ad.price}</p>
                    <p>Email: {props.ad.email}</p>
                    {props.ad.phoneNumber && <p>Phone number: {props.ad.phoneNumber}</p>}

                    {props.user.userId === props.ad.userId && <button onClick={props.onEdit}>Edit</button>}
                    {props.user.role === 'admin' && <button onClick={props.onEdit}>Edit</button>}
                    {props.user.role === 'admin' && <button onClick={props.onDelete}>Delete</button>}
                </div>}
        </div>
    )
}

export default AdDetails