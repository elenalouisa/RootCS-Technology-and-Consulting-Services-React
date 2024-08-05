import React from 'react'

import PropTypes from 'prop-types'

import './component3.css'

const Component3 = (props) => {
  return <div className={`component3-container ${props.rootClassName} `}></div>
}

Component3.defaultProps = {
  rootClassName: '',
}

Component3.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component3
