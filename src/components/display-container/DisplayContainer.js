import React from 'react'
import PropTypes from 'prop-types'

const DisplayContainer = ({bill, tipPercent,numOfPeople, reset}) => {

  const getTipPerPerson = ()=>{
    let tip = ((tipPercent/100)*bill)/numOfPeople
    if(!isFinite(tip)) return 0
    return Math.round(tip)
  }

  const getTotalBillPerPerson = ()=>{
    if (!isFinite(bill)) return 0
    let splitBill = bill/numOfPeople

    if(!isFinite(splitBill)){
      return Math.round(getTipPerPerson() + bill)
    }
    return Math.round(getTipPerPerson() + splitBill)
  }
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
  bill: PropTypes.number,
  numOfPeople: PropTypes.number,
  tipPercent: PropTypes.number,
}

export default DisplayContainer
