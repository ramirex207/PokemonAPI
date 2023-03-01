import React from 'react'
import '../sass/Card.scss'
function Card({name,img}) {
    return (
        <div className='card'>
            <p className="card__name">{name}</p>
            <div className="card__circle"></div>
            <img src={img} alt="Pokemon img" className="card__img" />

        </div>
    )
}

export { Card }