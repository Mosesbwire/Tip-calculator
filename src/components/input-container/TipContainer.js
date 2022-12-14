import React from 'react'
import PropTypes from 'prop-types'
import Tip from './Tip'

const TipContainer = ({getTipPercent}) => {
  return (<div>
    <p className='tip-title'>Select Tip %</p>
    <div className='tip-container'>
      <Tip tip={5} getTipPercent={getTipPercent}/>
      <Tip tip={10} getTipPercent={getTipPercent}/>
      <Tip tip={15} getTipPercent={getTipPercent}/>
      <Tip tip={25} getTipPercent={getTipPercent}/>
      <Tip tip={50} getTipPercent={getTipPercent}/>
      <input placeholder='Custom' onChange={e => getTipPercent(e.target.value)} className='custom'/>
    </div>
  </div>
  )
}

TipContainer.propTypes = {
  getTipPercent: PropTypes.func.isRequired,
}

export default TipContainer
