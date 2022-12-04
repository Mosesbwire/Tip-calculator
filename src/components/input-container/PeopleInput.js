import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import iconperson from '../../images/icon-person.svg'
import Input from './Input'

const PeopleInput = ({getNumberOfPeople, numOfPeople}) => {
  const [error, setError] = useState({
    type: '',
    msg: ''
  })
  

useEffect(()=>{
  if(numOfPeople < 1){
    setError({type: 'error', msg: 'Can\'t be zero'})
  }

  if(numOfPeople >= 1){
    setError({type: '', msg: ''})
  }
},[numOfPeople]) 


  return (
    <>
      <Input label={'Number of People'} image={iconperson} onChange={getNumberOfPeople} value={numOfPeople} error={error}/>
    </>
  )
}

PeopleInput.propTypes = {
    getNumberOfPeople: PropTypes.func.isRequired,
    numOfPeople: PropTypes.number,
}

export default PeopleInput
