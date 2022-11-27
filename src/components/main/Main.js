import React from 'react'
import logo from '../../images/logo.svg'
import Calculator from '../calculator/Calculator'


const Main = () => {
  return (
    <div className='main'>
      <img src={logo} alt={logo}/>
      <Calculator/>
    </div>
  )
}

export default Main
