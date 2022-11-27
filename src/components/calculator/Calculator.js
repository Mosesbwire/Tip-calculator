import React from 'react'
import InputsContainer from '../input-container/InputsContainer'
import DisplayContainer from '../display-container/DisplayContainer'

const Calculator = (props) => {
  return (
    <div className='calculator'>
        <InputsContainer/>
        <DisplayContainer/>
    </div>
  )
}

export default Calculator
