import React from 'react'
import TipContainer from './TipContainer'
import Input from './Input'
import icondollar from '../../images/icon-dollar.svg'
import iconperson from '../../images/icon-person.svg'

const InputsContainer = () => {
  return (
    <div className='input-container'>
      <Input label={'Bill'} image={icondollar}/>
      <TipContainer/>
      <Input label={'Number of People'} image={iconperson}/>
    </div>
  )
}

export default InputsContainer
