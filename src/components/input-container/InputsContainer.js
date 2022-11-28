import React from 'react'
import PropTypes from 'prop-types'
import BillInput from './BillInput'
import PeopleInput from './PeopleInput'
import TipContainer from './TipContainer'

const InputsContainer = ({getTipPercent, getBill, getNumberOfPeople}) => {
  return (
    <div className='input-container'>
      <BillInput getBill={getBill}/>
      <TipContainer getTipPercent= {getTipPercent}/>
      <PeopleInput getNumberOfPeople={getNumberOfPeople}/>
    </div>
  )
}

InputsContainer.propTypes = {
  getTipPercent: PropTypes.func.isRequired,
  getBill: PropTypes.func.isRequired,
  getNumberOfPeople: PropTypes.func.isRequired,
  
}

export default InputsContainer
