import React from 'react'
import PropTypes from 'prop-types'
import icondollar from '../../images/icon-dollar.svg'
import Input from './Input'

const BillInput = ({getBill}) => {
  return (
    <>
      <Input  label={'Bill'} image={icondollar} onChange={getBill}/>
    </>
  )
}

BillInput.propTypes = {
    getBill: PropTypes.func.isRequired,
    
}

export default BillInput
