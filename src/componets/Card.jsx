import React from 'react'
import '../sass/Card.scss'
function Card() {
    return (
        <div className='card'>
            <p className="card__name">Ramiro</p>
            <div className="card__circle"></div>
            <img src="" alt="Pokemon img" className="card__img" />

        </div>
    )
}

export { Card }