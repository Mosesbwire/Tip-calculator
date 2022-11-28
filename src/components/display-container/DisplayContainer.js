import React from 'react'
import PropTypes from 'prop-types'

const DisplayContainer = ({getTipPerPerson, getTotalBillPerPerson, reset}) => {
  return (
    <div className='display-container'>
        <div>
            <div  className='amount-display'>
                <p className='heading-text'><span className='heading'>Tip Amount</span><br/> /person</p>
                <p className='amount'>{getTipPerPerson()}</p>
            </div>
            <div className='amount-display'>
                <p className='heading-text'><span className='heading'>Total</span> <br/>/person</p>
                <p className='amount'>{getTotalBillPerPerson()}</p>
            </div>
        </div>
        <button className='btn' onClick={reset}>reset</button>
      
    </div>
  )
}

DisplayContainer.propTypes = {
  getTipPerPerson: PropTypes.func.isRequired,
  getTotalBillPerPerson: PropTypes.func.isRequired,
}

export default DisplayContainer
