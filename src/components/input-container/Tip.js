import React from 'react'
import PropTypes from 'prop-types'

const Tip = ({tip, getTipPercent}) => {
  return (
    <div className='tip-percent'>
        <p data-tip={tip} onClick={e => getTipPercent(e.target.dataset.tip)}>{tip} %</p>
    </div>
  )
}

Tip.propTypes = {
  tip: PropTypes.number,
  getTipPercent: PropTypes.func.isRequired,
}

export default Tip
