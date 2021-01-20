import React from 'react'
import PropTypes from 'prop-types';

const Button = ({onClick}) => {
    return (
        <button className='Button' type= 'button' onClick={onClick}>
            Load More
        </button>
    )
}

export default Button

Button.propTypes = {
    onClick: PropTypes.func.isRequired
};