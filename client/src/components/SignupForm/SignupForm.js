import * as React from 'react'
import { Link } from 'react-router-dom'

export default function SignupForm(props) {
    return (
        <div>
            <Link to={`/`}>Ad's list</Link>
            <Link to={`/login`}>Login</Link>
            <form onSubmit={props.onSubmit}>
                <h4>Create your account</h4>
                <label>
                    Email:
                <input type="email" required name="email" onChange={props.onChange} value={props.values.email} />
                </label>

                <label>
                    Password:
                <input type="password" required name="password" minLength="6" onChange={props.onChange} value={props.values.password} />
                </label>

                <button type="submit">Create</button>
                {props.user.id && <p>User created successfully!</p>}
            </form>
        </div>)
}