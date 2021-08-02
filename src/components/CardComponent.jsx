import React from 'react';

const Card = (props) => {

    return(
        <div className="card" onClick={props.onClickPerform}>
                <h6>{props.user.name}</h6>
                <h6>{props.user.company.name}</h6>
                <h6>{props.user.company.catchPhrase}</h6>
        </div>
    )
}

export default Card;