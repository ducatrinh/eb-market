import * as React from 'react'
import { Redirect } from 'react-router-dom'
import Header from '../Header/Header'

function AdForm(props) {
    return (
        <div>
            {!props.user.jwt && <Redirect to={'/login'}></Redirect>}

            {props.user.jwt &&
                <div>
                    <Header />
                    <form onSubmit={props.onSubmit}>
                        <label>
                            Title:
                            <input type="text" required name="title" minLength="4" onChange={props.onChange} value={props.values.title} />
                        </label>

                        <label>
                            Description:
                            <input type="text" required name="description" onChange={props.onChange} value={props.values.description} />
                        </label>

                        <label>
                            Picture's Url:
                            <input type="url" required name="url" onChange={props.onChange} value={props.values.url} />
                        </label>

                        <label>
                            Price:
                            <input type="number" required name="price" onChange={props.onChange} value={props.values.price} />
                        </label>

                        <label>
                            Email:
                            <input type="email" required name="email" onChange={props.onChange} value={props.values.email} />
                        </label>

                        <label>
                            Phone Number:
                            <input type="tel" name="phoneNumber" onChange={props.onChange} value={props.values.phoneNumber} />
                        </label>

                        {!props.editMode ? <button type="submit">Add</button> : <button type="submit">Update</button>}
                    </form>
                </div>}
        </div>)
}

export default AdForm