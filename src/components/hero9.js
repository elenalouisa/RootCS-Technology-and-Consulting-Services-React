import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div
      className={`hero9-header30 thq-section-padding ${props.rootClassName} `}
    >
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero9-text3 thq-heading-1">Our Services</h1>
              </Fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="hero9-text4 thq-body-large">
                  Guiding organizations through digital transformation journeys
                  with tailored solutions for cloud services, ERP, CRM, and big
                  data integration.
                </p>
              </Fragment>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  heading1: undefined,
  content1: undefined,
  rootClassName: '',
  image1Src:
    'https://images.unsplash.com/photo-1661439089979-d3ed0609a457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg0NTcwNnw&ixlib=rb-4.0.3&q=80&w=1500',
  image1Alt: 'Root Consulting Services Image',
}

Hero9.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Hero9
