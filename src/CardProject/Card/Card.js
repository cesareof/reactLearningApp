import React from 'react'

const Card = (props) => {
    return (
        <div className="cardlist">
            <img width="75" src={props.avatarURL} alt="" />
            <div className="card">
                <div className="name">{props.name}</div>
                <div className='companyName'>{props.company}</div>
            </div>
        </div>
    );
}

export default Card;