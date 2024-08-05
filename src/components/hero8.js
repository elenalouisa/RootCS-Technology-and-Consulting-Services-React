import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div className="hero8-header26 thq-section-padding">
      <div className="hero8-max-width thq-flex-column thq-section-max-width">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1>
              {props.heading1 ?? (
                <Fragment>
                  <h1 className="hero8-text6 thq-heading-1">
                    Empower Your Digital Transformation
                  </h1>
                </Fragment>
              )}
            </h1>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="hero8-text5 thq-body-large">
                    Unlock the full potential of your organization with our
                    tailored digital solutions.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="hero8-actions">
              <button className="thq-button-filled hero8-button">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero8-text4 thq-body-small">
                        Get Started
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero8-button1">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero8-text7 thq-body-small">
                        Learn More
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  action1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1566568769443-5095f211e512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjgwMDM4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  heading1: undefined,
  action2: undefined,
  image1Alt: 'Digital Transformation Image',
}

Hero8.propTypes = {
  action1: PropTypes.element,
  image1Src: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  action2: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default Hero8
