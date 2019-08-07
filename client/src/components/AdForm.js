import * as React from 'react'

export default function AdForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <label>
                Title:
                <input type="text" name="title" onChange={props.onChange} value={props.values.title} />
            </label>

            <label>
                Price:
                <input type="text" name="price" onChange={props.onChange} value={props.values.price} />
            </label>

            <button type="submit">Add</button>
        </form>)
}