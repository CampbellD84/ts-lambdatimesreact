import React from 'react'
import Card from './Card'

const Cards = (props: any) => {
    return (
        <div className="cards-container">
            {props.cards.map((card: any) => (
                <Card card={card} />
            ))}
        </div>
    )
}

export default Cards