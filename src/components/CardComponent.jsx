import React from 'react';

const Card = (props) => {

    console.log(props.user)
    return(
        <div className="card">
            <div>
                <p>{props.user.nome}</p>
                <h6>{props.user.company.name}</h6>
                <p>{props.user.company.bordao}</p>
            </div>
        </div>
    )
}

export default Card;