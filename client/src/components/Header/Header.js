import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/users'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import '../../assets/header.css'

function Header(props) {
    return (
        <div className="header">
            <AppBar position="static">
                <Toolbar>
                    <Link to={`/`}>
                        <img alt="ebay logo" className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/EBay_logo.png/800px-EBay_logo.png" />
                    </Link>
                    <Grid item>
                        <Link to="/sell">
                            <Button className="sell-btn">Sell</Button>
                        </Link>
                    </Grid>

                    {!localStorage.getItem('jwt')
                        ? <div className="login-logout-signup-header">
                            <Grid item>
                                <Link to="/login">
                                    <Button variant="outlined" className="login-btn">Login</Button>
                                </Link>
                                <Link to="/signup">
                                    <Button variant="outlined" className="signup-btn">Signup</Button>
                                </Link>
                            </Grid>
                        </div>
                        : <div className="login-logout-signup-header">
                            <span>Welcome {localStorage.getItem('name')}</span>
                            <Link to="/">
                                <Button variant="outlined" className="logout-btn" onClick={props.logout}>Logout</Button>
                            </Link>
                        </div>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { logout })(Header)