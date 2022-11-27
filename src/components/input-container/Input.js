import React from 'react'
import PropTypes from 'prop-types'


const Input = ({label, image}) => {
  return (
    <div className='form-group'>
        <label htmlFor=''>{label}</label>
        <div className='input-group'>
            <img src={image} className='input-icon'/>
            <input/>
        </div>
      
    </div>
  )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default Input
