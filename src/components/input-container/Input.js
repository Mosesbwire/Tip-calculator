import React from 'react'
import PropTypes from 'prop-types'


const Input = ({label, image, onChange, value, error}) => {
  
  return (
    <div className='form-group'>
        <div className='flex-sb'>
          <label htmlFor=''>{label}</label>
          <p className='error-text'>{error ? error.msg: ''}</p>
        </div>
        <div className='input-group'>
            <img src={image} alt='' className='input-icon'/>
            <input  value ={value} onChange={e => onChange(e.target.value)} className={`${error ? error.type: ''}`}/>
        </div>
      
    </div>
  )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number,
    error: PropTypes.object
}

export default Input
