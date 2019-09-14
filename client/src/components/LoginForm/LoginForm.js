import * as React from 'react'
import { Redirect, Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

export default function LoginForm(props) {
    return (
        <div>
            {localStorage.getItem('jwt') && <Redirect to={'/'}></Redirect>}
            {props.values.signupMode && <Redirect to={'/signup'}></Redirect>}
            <form onSubmit={props.onSubmit}>
                <Grid container alignItems="center" justify="center" direction="column" className="login-container">
                    <Grid item xs={12}>
                        <h4>Login your account to begin selling items</h4>
                    </Grid>

                    <Grid item xs={12}> 
                        <FormControl fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                                id="email"
                                type="text"
                                name="email"
                                value={props.values.email}
                                onChange={props.onChange}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={props.values.password}
                                onChange={props.onChange}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Login
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        {props.user.url && props.user.url.includes('login') &&
                            <p>{props.user.message}</p>}
                    </Grid>

                    <Grid item xs={12}>
                        <p>Don't have an account yet? <Link to="signup">Signup here</Link></p>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}