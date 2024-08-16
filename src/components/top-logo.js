import React from 'react'

import PropTypes from 'prop-types'

import './top-logo.css'

const TopLogo = (props) => {
  return (
    <div className={`top-logo-container ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="top-logo-image"
      />
    </div>
  )
}

TopLogo.defaultProps = {
  rootClassName: '',
  imageSrc: '/fulllogo-200h.webp',
  imageAlt: 'image',
}

TopLogo.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default TopLogo
