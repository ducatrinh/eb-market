import * as React from 'react'

export default function AdForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <label>
                Title:
                <input type="text" name="title" onChange={props.onChange} value={props.values.title} />
            </label>
            <br />
            <label>
                Description:
                <input type="text" name="description" onChange={props.onChange} value={props.values.description} />
            </label>
            <br />
            <label>
                Picture Url:
                <input type="url" name="url" onChange={props.onChange} value={props.values.url} />
            </label>
            <br />
            <label>
                Price:
                <input type="number" name="price" onChange={props.onChange} value={props.values.price} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" onChange={props.onChange} value={props.values.email} />
            </label>
            <br />
            <label>
                Phone Number:
                <input type="text" name="phoneNumber" onChange={props.onChange} value={props.values.phoneNumber} />
            </label>

            <button type="submit">Add</button>
        </form>)
}