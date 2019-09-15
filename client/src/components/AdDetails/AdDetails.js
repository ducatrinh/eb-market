import * as React from 'react'
import AdForm from '../AdForm/AdForm'
import '../../assets/styles.css'
import { Card, CardActionArea, CardMedia, Grid, Button, TextField } from '@material-ui/core/';

function AdDetails(props) {
    if (!props.ad) return 'Loading ad data...'
    return (
        props.editMode
            ? <AdForm
                editMode={props.editMode}
                onSubmit={props.onSubmit}
                onChange={props.onChange}
                values={props.formValues}
            />

            : <div>
                <Grid container alignItems="center" justify="center" direction="row" className="ad-details">
                    <Grid item xs={12} sm={6} lg={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={props.ad.title}
                                    height="140"
                                    image={props.ad.url}
                                    title={props.ad.title}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} className="info">
                        <h2>{props.ad.title}</h2>
                        <p>Description: {props.ad.description}</p>
                        <p>Price: €{props.ad.price}</p>
                        <p>Email: {props.ad.email}</p>
                        {props.ad.phoneNumber && <p>Phone number: {props.ad.phoneNumber}</p>}

                        {(localStorage.getItem('email') === props.ad.email) &&
                            <div>
                                <Grid item>
                                    <Button onClick={props.onEdit}>Edit</Button>
                                    <Button onClick={props.onDelete}>Delete</Button>
                                </Grid>
                            </div>}

                        <TextField
                            id="outlined-dense"
                            className="bid"
                            type="number"
                            margin="dense"
                            variant="outlined"
                        />
                        <Button variant="contained" size="medium" color="secondary" className="bid-btn">
                            Place Bid
                        </Button>
                    </Grid>
                </Grid>
            </div>
    )
}

export default AdDetails