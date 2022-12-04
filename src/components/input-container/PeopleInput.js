import React from 'react'
import PropTypes from 'prop-types'
import iconperson from '../../images/icon-person.svg'
import Input from './Input'

const PeopleInput = ({getNumberOfPeople, numOfPeople}) => {
  return (
    <>
      <Input label={'Number of People'} image={iconperson} onChange={getNumberOfPeople} value={numOfPeople}/>
    </>
  )
}

PeopleInput.propTypes = {
    getNumberOfPeople: PropTypes.func.isRequired,
    numOfPeople: PropTypes.number,
}

export default PeopleInput
