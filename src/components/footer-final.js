import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer-final.css'

const FooterFinal = (props) => {
  return (
    <footer className="footer-final-footer7 thq-section-padding">
      <div className="footer-final-max-width thq-section-max-width">
        <div className="footer-final-content">
          <div className="footer-final-logo1">
            <img
              alt={props.logoAlt}
              src="/fulllogo-200h.webp"
              className="footer-final-logo2"
            />
          </div>
          <div className="footer-final-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer-final-text18 thq-body-small">
                    Services
                  </span>
                </Fragment>
              )}
            </a>
            <Link to="/about" className="footer-final-navlink1">
              {props.link2 ?? (
                <Fragment>
                  <span className="footer-final-text21 thq-body-small">
                    About Us
                  </span>
                </Fragment>
              )}
            </Link>
            <Link to="/contact" className="footer-final-navlink2">
              {props.link3 ?? (
                <Fragment>
                  <span className="footer-final-text20 thq-body-small">
                    Contact Us
                  </span>
                </Fragment>
              )}
            </Link>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer-final-text16 thq-body-small">
                    Privacy Policy
                  </span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.link5 ?? (
                <Fragment>
                  <span className="footer-final-text17 thq-body-small">
                    Terms of Service
                  </span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer-final-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer-final-row">
            <div className="footer-final-container">
              <span className="thq-body-small">
                © 2024 Root Consulting Services, LLC.
              </span>
            </div>
            <div className="footer-final-footer-links">
              <span>
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer-final-text15 thq-body-small">
                      Privacy Policy
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer-final-text14 thq-body-small">
                      Terms of Service
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer-final-text19 thq-body-small">
                      Cookies Policy
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

FooterFinal.defaultProps = {
  termsLink: undefined,
  privacyLink: undefined,
  link4: undefined,
  logoAlt: 'Root Consulting Services Logo',
  link5: undefined,
  link1: undefined,
  cookiesLink: undefined,
  link3: undefined,
  link2: undefined,
}

FooterFinal.propTypes = {
  termsLink: PropTypes.element,
  privacyLink: PropTypes.element,
  link4: PropTypes.element,
  logoAlt: PropTypes.string,
  link5: PropTypes.element,
  link1: PropTypes.element,
  cookiesLink: PropTypes.element,
  link3: PropTypes.element,
  link2: PropTypes.element,
}

export default FooterFinal