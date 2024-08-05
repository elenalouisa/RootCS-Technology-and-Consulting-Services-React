import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div className="banner1-container thq-section-padding">
      <div className="banner1-max-width thq-section-max-width">
        <div className="banner1-container1">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="banner1-text2 thq-heading-2">
                  Empower Your Business with Advanced Technologies
                </h2>
              </Fragment>
            )}
          </h2>
          <h3>
            {props.content1 ?? (
              <Fragment>
                <h3 className="banner1-text3 thq-heading-3">
                  Root Consulting Services specializes in providing tailored
                  solutions for Cloud, Digital Transformation, ERP, CRM, Big
                  Data integration, analysis, and AI.
                </h3>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner1-text4">Learn More</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner1.defaultProps = {
  heading1: undefined,
  content1: undefined,
  action1: undefined,
}

Banner1.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
}

export default Banner1
