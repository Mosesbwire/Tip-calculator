import React from 'react'
import PropTypes from 'prop-types'

const DisplayContainer = props => {
  return (
    <div className='display-container'>
        <div>
            <div  className='amount-display'>
                <p className='heading-text'><span className='heading'>Tip Amount</span><br/> /person</p>
                <p className='amount'>200</p>
            </div>
            <div className='amount-display'>
                <p className='heading-text'><span className='heading'>Total</span> <br/>/person</p>
                <p className='amount'>300</p>
            </div>
        </div>
        <button className='btn'>reset</button>
      
    </div>
  )
}

DisplayContainer.propTypes = {

}

export default DisplayContainer
