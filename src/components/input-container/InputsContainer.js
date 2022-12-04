import React from 'react'
import PropTypes from 'prop-types'
import BillInput from './BillInput'
import PeopleInput from './PeopleInput'
import TipContainer from './TipContainer'

const InputsContainer = ({getTipPercent, getBill, getNumberOfPeople, bill, numOfPeople}) => {
  
  return (
    <div className='input-container'>
      <BillInput getBill={getBill} bill={bill}/>
      <TipContainer getTipPercent= {getTipPercent}/>
      <PeopleInput getNumberOfPeople={getNumberOfPeople} numOfPeople={numOfPeople}/>
    </div>
  )
}

InputsContainer.propTypes = {
  getTipPercent: PropTypes.func.isRequired,
  getBill: PropTypes.func.isRequired,
  getNumberOfPeople: PropTypes.func.isRequired,
  bill: PropTypes.number,
  numOfPeople: PropTypes.number,

}

export default InputsContainer
