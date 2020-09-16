import React from 'react'

const Card = (props: any) => {
    return (
        <div className="card">
            <div className="headline">{props.card.headline}</div>
            <div className="author">
                <div className="img-container">
                    <img src={props.card.img} alt="author of article" />
                </div>
                <span>By {props.card.author}</span>
            </div>
        </div>
    )
}

export default Card