import React from 'react'
import PropTypes from 'prop-types'
import iconperson from '../../images/icon-person.svg'
import Input from './Input'

const PeopleInput = ({getNumberOfPeople}) => {
  return (
    <>
      <Input label={'Number of People'} image={iconperson} onChange={getNumberOfPeople}/>
    </>
  )
}

PeopleInput.propTypes = {
    getNumberOfPeople: PropTypes.func.isRequired,
}

export default PeopleInput
