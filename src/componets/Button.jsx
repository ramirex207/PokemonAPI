import React from 'react'
import '../sass/Button.scss'
function Button({icon,handleClick}) {
    return (
    <div className="btn__box">
        <button 
            className='btn' 
            onClick={handleClick}
        >
        {icon}
        </button>
        <div className="btn__shadow"></div>
    </div>
        
    )
}

export {Button}