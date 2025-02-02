import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span className="cta26-text1 thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text3">
                        Ready to transform your business?
                      </span>
                    </Fragment>
                  )}
                </span>
                <p className="cta26-text2 thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="cta26-text5">
                        Contact us today to explore how Root Consulting Services
                        can enhance your digital transformation.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <button
                  type="button"
                  className="cta26-button thq-button-filled"
                >
                  <Link to="/contact">
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta26-text4">Get in touch</span>
                      </Fragment>
                    )}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  rootClassName: '',
  heading1: undefined,
  action1: undefined,
  content1: undefined,
}

CTA26.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
}

export default CTA26
