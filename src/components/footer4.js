import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer
      className={`footer4-footer7 thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
            <img
              alt={props.logoAlt}
              src="/fulllogo-200h.webp"
              className="footer4-logo2"
            />
          </div>
          <div className="footer4-links">
            <Link to="/services" className="footer4-navlink1">
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text4 thq-body-small">Services</span>
                </Fragment>
              )}
            </Link>
            <Link to="/about" className="footer4-navlink2">
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text3 thq-body-small">About Us</span>
                </Fragment>
              )}
            </Link>
            <Link to="/contact" className="footer4-navlink3">
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text2 thq-body-small">
                    Contact Us
                  </span>
                </Fragment>
              )}
            </Link>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">
                © 2024 Root Consulting Services, LLC.
              </span>
            </div>
            <div className="footer4-footer-links"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  logoAlt: 'Root Consulting Services Logo',
  link3: undefined,
  link2: undefined,
  link1: undefined,
  rootClassName: '',
}

Footer4.propTypes = {
  logoAlt: PropTypes.string,
  link3: PropTypes.element,
  link2: PropTypes.element,
  link1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Footer4
