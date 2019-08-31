import React from 'react'
import { Link } from 'react-router-dom'

function AdList(props) {
    const { ads, user } = props
    
    return (
        <div>
            <Link to={`/sell`}>Sell</Link>
            {!user.jwt && <Link to={`/login`}>Login</Link>}
            {user.jwt && <h4>Welcome {user.email}</h4>}
            {ads && ads.map(ad =>
                <div key={ad.id}>
                    <Link to={`/ad/${ad.id}`}><img src={ad.url} alt={ad.title}></img></Link>
                    <h3>
                        <Link to={`/ad/${ad.id}`}>{ad.title}</Link>
                    </h3>
                    <p>€{ad.price}</p>
                    <br />
                </div>
            )}
        </div>
    )
}

export default AdList