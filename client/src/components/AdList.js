import React from 'react'
import { Link } from 'react-router-dom'

function AdList(props) {
    const { ads } = props
    
    return (
        <div>
            <Link to={`./sell`}>Add advertisement</Link>
            {ads && ads.map(ad =>
                <div key={ad.id}>
                    <h3>
                        <Link to={`./ad/${ad.id}`}>{ad.title}</Link>
                    </h3>
                    <p>{ad.price}</p>
                    <br />
                </div>
            )}
        </div>
    )
}

export default AdList