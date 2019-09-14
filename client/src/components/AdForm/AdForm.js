import * as React from 'react'
import { Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

function AdForm(props) {
    return (
        !localStorage.getItem('jwt')
            ? <Redirect to={'/login'}></Redirect>
            :
            <form onSubmit={props.onSubmit}>
                <Grid container alignItems="center" justify="center" direction="column" className="create-event-container">
                    <Grid item xs={12}>
                        <h3>SELL ITEM</h3>
                        <FormControl>
                            <InputLabel htmlFor="price">Title</InputLabel>
                            <Input
                                id="title"
                                type="text"
                                name="title"
                                value={props.values.title}
                                onChange={props.onChange}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl>
                            <InputLabel htmlFor="description">Description</InputLabel>
                            <Input
                                id="description"
                                type="text"
                                name="description"
                                value={props.values.description}
                                onChange={props.onChange}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="quantity">Image Url</InputLabel>
                            <Input
                                id="imageUrl"
                                type="text"
                                name="imageUrl"
                                value={props.values.url}
                                onChange={props.onChange}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl>
                            <InputLabel htmlFor="description">Price</InputLabel>
                            <Input
                                id="price"
                                type="text"
                                name="price"
                                value={props.values.price}
                                onChange={props.onChange}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="description">Email</InputLabel>
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
                        <FormControl>
                            <InputLabel htmlFor="description">Phone</InputLabel>
                            <Input
                                id="phone"
                                type="number"
                                name="phone"
                                value={props.values.phoneNumber}
                                onChange={props.onChange}
                            />
                        </FormControl>
                    </Grid>

                    {!props.editMode ?
                        <Button variant="contained" type="submit">Add</Button> :
                        <Button variant="contained" type="submit">
                            Update
                    </Button> }
                    </Grid>
            </form>
    )
}

export default AdForm