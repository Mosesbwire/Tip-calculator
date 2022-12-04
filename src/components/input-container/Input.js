import React from 'react'
import PropTypes from 'prop-types'


const Input = ({label, image, onChange, value}) => {
  
  return (
    <div className='form-group'>
        <label htmlFor=''>{label}</label>
        <div className='input-group'>
            <img src={image} alt='' className='input-icon'/>
            <input  value ={value || 0} onChange={e => onChange(e.target.value)}/>
        </div>
      
    </div>
  )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number,
}

export default Input
