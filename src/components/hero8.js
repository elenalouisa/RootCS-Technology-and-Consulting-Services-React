import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div className="hero8-header26 thq-section-padding">
      <div className="hero8-max-width thq-flex-column thq-section-max-width">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1 className="hero8-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero8-text2">About Us</span>
                </Fragment>
              )}
            </h1>
            <div className="hero8-actions"></div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="hero8-hero-image thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg0Mjg2OHw&ixlib=rb-4.0.3&q=80&w=1400',
  heading1: undefined,
  image1Alt: 'Digital Transformation Image',
}

Hero8.propTypes = {
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default Hero8
