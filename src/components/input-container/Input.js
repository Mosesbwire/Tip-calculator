import React from 'react'
import PropTypes from 'prop-types'


const Input = ({label, image, onChange}) => {
  return (
    <div className='form-group'>
        <label htmlFor=''>{label}</label>
        <div className='input-group'>
            <img src={image} className='input-icon'/>
            <input onChange={e => onChange(e.target.value)}/>
        </div>
      
    </div>
  )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Input
