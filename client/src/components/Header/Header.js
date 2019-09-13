import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/users'
import './Header.css'

function Header(props) {
    return (
        <div className="header">
            <Link className="logo" to={`/`}><img src="https://pbs.twimg.com/profile_images/1145603119906271237/pYhpAf0c_400x400.png" alt="Ad List" /></Link>
            <Link to={`/sell`}>Sell</Link>
            {!localStorage.getItem('jwt')
                ? <div className="login-logout-signup-header">
                    <Link to={`/login`}>Login</Link>
                    <Link to={`/signup`}>Signup</Link>
                </div>
                : <div className="login-logout-signup-header">
                    <span>Welcome {localStorage.getItem('email')}</span>
                    <Link to={`/`} onClick={props.logout}>Logout</Link>
                </div>
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { logout })(Header)