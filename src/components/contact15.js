import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact15.css'

const Contact15 = (props) => {
  return (
    <div className="contact15-contact20 thq-section-padding">
      <div className="contact15-max-width thq-section-max-width">
        <div className="contact15-section-title">
          <div className="contact15-content1">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact15-text14 thq-heading-2">Contact Us</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content2 ?? (
                <Fragment>
                  <p className="contact15-text16 thq-body-large">
                    <span>
                      Feel free to reach out to us via phone for a consultation
                      or any inquiries you may have. Our team of experts is
                      ready to assist you in your digital transformation
                      journey. Let us partner with you to drive innovation,
                      optimize processes, and leverage data analytics for
                      sustainable business growth.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Your success is our priority, and we look forward to
                      hearing from you.
                    </span>
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact15-row">
          <div className="contact15-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact15-contact-info1">
              <div className="contact15-content3">
                <h3 className="contact15-text12 thq-heading-3">Email</h3>
              </div>
              <a href="mailto:?subject=" className="contact15-email">
                {props.email1 ?? (
                  <Fragment>
                    <span className="contact15-text21 thq-body-small">
                      sales@rootcs.org
                    </span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
          <div className="contact15-content4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact15-contact-info2">
              <div className="contact15-content5">
                <h3 className="contact15-text13 thq-heading-3">Phone</h3>
              </div>
              <a href="tel:614-963-5765" className="contact15-phone">
                {props.phone1 ?? (
                  <Fragment>
                    <span className="contact15-text15 thq-body-small">
                      614-963-5765
                    </span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact15.defaultProps = {
  heading1: undefined,
  phone1: undefined,
  content2: undefined,
  email1: undefined,
}

Contact15.propTypes = {
  heading1: PropTypes.element,
  phone1: PropTypes.element,
  content2: PropTypes.element,
  email1: PropTypes.element,
}

export default Contact15
