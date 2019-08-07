import * as React from 'react'
import { Link } from 'react-router-dom'

function AdForm(props) {
    return (
        <div>
            <Link to={`/`}>Ad's List</Link>
            <form onSubmit={props.onSubmit}>
                <label>
                    Title:
                <input type="text" required name="title" onChange={props.onChange} value={props.values.title} />
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
                <input type="tel" required name="phoneNumber" onChange={props.onChange} value={props.values.phoneNumber} />
                </label>

                <button type="submit">Add</button>
                {props.values.added && 'Advertisement created successfully!'}
            </form>
        </div>)
}

export default AdForm