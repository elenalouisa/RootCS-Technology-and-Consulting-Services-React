import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div
      className={`banner1-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner1-max-width thq-section-max-width">
        <div className="banner1-container2">
          <h2 className="banner1-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner1-text3">
                  Empower Your Business with Advanced Technologies
                </span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner1-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner1-text4">
                  Root Consulting Services specializes in providing tailored
                  solutions for Cloud, Digital Transformation, ERP, CRM, Big
                  Data integration, analysis, and AI.
                </span>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner1-text5">Learn More</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner1.defaultProps = {
  rootClassName: '',
  heading1: undefined,
  content1: undefined,
  action1: undefined,
}

Banner1.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
}

export default Banner1
