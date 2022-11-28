import React, {useState} from 'react'
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

  const reset = ()=>{
    setBill(0)
    setNumOfPeople(1)
    setTipPercent(0)
  }


  return (
    <div className='calculator'>
        <InputsContainer getTipPercent={getTipPercent} getBill={getBill} getNumberOfPeople={getNumberOfPeople}/>
        <DisplayContainer bill={bill} numOfPeople={numOfPeople} tipPercent={tipPercent} reset={reset}/>
    </div>
  )
}

export default Calculator
