import React from 'react'
import PropTypes from 'prop-types'
import icondollar from '../../images/icon-dollar.svg'
import Input from './Input'

const BillInput = ({getBill, bill}) => {
  return (
    <>
      <Input  label={'Bill'} image={icondollar} onChange={getBill} value={bill}/>
    </>
  )
}

BillInput.propTypes = {
    getBill: PropTypes.func.isRequired,
    bill: PropTypes.number,
    
}

export default BillInput
