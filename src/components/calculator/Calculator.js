import React, {useState} from 'react'
import InputsContainer from '../input-container/InputsContainer'
import DisplayContainer from '../display-container/DisplayContainer'

const Calculator = (props) => {
  const [bill, setBill]= useState(0)
  const [numOfPeople, setNumOfPeople] = useState(1)
  const [tipPercent, setTipPercent] = useState(0)
 
  const getBill = (amount)=>{
    if(amount.length === 0) { amount = 0}
    setBill(parseInt(amount))
  }

  const getNumberOfPeople = (numOfGuest)=>{
    if(numOfGuest.length === 0){ numOfGuest = 0 }
    setNumOfPeople(parseInt(numOfGuest))
  }

  const getTipPercent = (tip)=>{
    setTipPercent(tip)
  }

  const reset = ()=>{
    setBill(0)
    setNumOfPeople(1)
    setTipPercent(0)
    
  }


  return (
    <div className='calculator'>
        <InputsContainer getTipPercent={getTipPercent} getBill={getBill} getNumberOfPeople={getNumberOfPeople} bill={bill} numOfPeople={numOfPeople}/>
        <DisplayContainer bill={bill} numOfPeople={numOfPeople} tipPercent={tipPercent} reset={reset}/>
    </div>
  )
}

export default Calculator
