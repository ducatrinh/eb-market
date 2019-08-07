import React from 'react'
import AdFormContainer from './AdFormContainer';

function AdList(props) {
    const { ads } = props
    
    return (
        <div>
            {<AdFormContainer />}
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