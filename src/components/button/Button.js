import React from 'react'

const Button = ({onClick}) => {
    return (
        <button className='Button' type= 'button' onClick={onClick}>
            Load More
        </button>
    )
}

export default Button
