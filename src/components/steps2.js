import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container1 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              <span>
                Our solutions framework methodology is trusted and valuable
                because it is designed to address the specific needs and
                challenges of each organization.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                By tailoring our approach to digital transformation, cloud
                services, ERP, CRM, and big data integration, we ensure that our
                clients receive customized solutions that enhance efficiency and
                competitiveness.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Our proven methodology guides organizations through their
                digital transformation journeys, providing them with the support
                and expertise needed to succeed in today&apos;s rapidly evolving
                business landscape.
              </span>
            </p>
            <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled steps2-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps2-container2">
            <div className="steps2-container3 thq-card">
              <h2>
                {props.step1Title ?? (
                  <Fragment>
                    <h2 className="steps2-text28 thq-heading-2">
                      Initial Consultation
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text23 thq-body-small">
                      Schedule a meeting with our team to discuss your business
                      needs and goals.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text12 thq-heading-3">01</label>
            </div>
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step2Title ?? (
                  <Fragment>
                    <h2 className="steps2-text22 thq-heading-2">
                      Solution Design
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text29 thq-body-small">
                      Our experts will design a customized solution tailored to
                      your specific requirements.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text15 thq-heading-3">02</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step3Title ?? (
                  <Fragment>
                    <h2 className="steps2-text27 thq-heading-2">
                      Implementation
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text26 thq-body-small">
                      We will efficiently implement the solution within the
                      agreed timeline and budget.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text18 thq-heading-3">03</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text24 thq-heading-2">
                      Optimization and Support
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text25 thq-body-small">
                      Continuous monitoring, optimization, and support to ensure
                      your business runs smoothly.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text21 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step2Title: undefined,
  step1Description: undefined,
  step4Title: undefined,
  step4Description: undefined,
  step3Description: undefined,
  step3Title: undefined,
  step1Title: undefined,
  step2Description: undefined,
}

Steps2.propTypes = {
  step2Title: PropTypes.element,
  step1Description: PropTypes.element,
  step4Title: PropTypes.element,
  step4Description: PropTypes.element,
  step3Description: PropTypes.element,
  step3Title: PropTypes.element,
  step1Title: PropTypes.element,
  step2Description: PropTypes.element,
}

export default Steps2
