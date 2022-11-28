import React, {useState, useEffect} from 'react'
import InputsContainer from '../input-container/InputsContainer'
import DisplayContainer from '../display-container/DisplayContainer'

const Calculator = (props) => {
  const [bill, setBill]= useState(0)
  const [numOfPeople, setNumOfPeople] = useState(1)
  const [tipPercent, setTipPercent] = useState(0)
  
 
  const getBill = (amount)=>{
    setBill(parseInt(amount))
  }

  const getNumberOfPeople = (numOfGuest)=>{
    setNumOfPeople(parseInt(numOfGuest))
  }

  const getTipPercent = (tip)=>{
    setTipPercent(tip)
  }

  const getTipPerPerson = ()=>{
    let tip = ((tipPercent/100)*bill)/numOfPeople
    if(!isFinite(tip)) return 0
    return Math.round(tip)
  }

  const getTotalBillPerPerson = ()=>{
    let splitBill = bill/numOfPeople
    if(!isFinite(splitBill)){
      return Math.round(getTipPerPerson() + bill)
    }
    return Math.round(getTipPerPerson() + splitBill)
  }

  const reset = ()=>{
    setBill(0)
    setNumOfPeople(1)
    setTipPercent(0)
  }

  useEffect(()=>{
    getTipPerPerson()
  
  }, [bill,numOfPeople,tipPercent,getTipPerPerson])

  useEffect(()=>{
    getTotalBillPerPerson()
  }, [bill,numOfPeople,tipPercent, getTotalBillPerPerson])

  return (
    <div className='calculator'>
        <InputsContainer getTipPercent={getTipPercent} getBill={getBill} getNumberOfPeople={getNumberOfPeople}/>
        <DisplayContainer getTipPerPerson={getTipPerPerson} getTotalBillPerPerson={getTotalBillPerPerson} reset={reset}/>
    </div>
  )
}

export default Calculator
