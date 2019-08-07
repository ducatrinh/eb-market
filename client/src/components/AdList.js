import React from 'react'

function AdList(props) {
    const { ads } = props
    
    return (
        <div>
            {ads && ads.map(ad =>
                <div key={ad.id}>
                    <h3>{ad.title}</h3>
                    <p>{ad.price}</p>
                    <br />
                </div>
            )}
        </div>
    )
}

export default AdList