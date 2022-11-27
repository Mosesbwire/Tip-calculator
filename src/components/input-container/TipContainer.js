import React from 'react'
import PropTypes from 'prop-types'
import Tip from './Tip'

const TipContainer = props => {
  return (
    <div className='tip-container'>
      <Tip/>
      <Tip/>
      <Tip/>
      <Tip/>
      <Tip/>
      <Tip/>
    </div>
  )
}

TipContainer.propTypes = {

}

export default TipContainer
