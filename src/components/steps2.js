import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div
      className={`steps2-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Approach
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
                Our approach is built on the foundation of understanding,
                education, and continuous improvement.
              </span>
              <br></br>
              <br></br>
              <span>
                We don&apos;t just deploy technology - we empower your team to
                understand, own, and evolve your IT solutions over time. Our
                proven methodology is a collaborative, transparent process
                designed to deliver lasting value and sustainable growth.
              </span>
            </p>
            <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled steps2-button">
                <span className="thq-body-small">Our Services</span>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="steps2-text20 thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text38">Discover &amp; Assess</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text21 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text33">
                      This discovery phase is about understanding your unique
                      environment and identifying opportunities where best
                      practices and new technologies can make a difference.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text22 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text32">
                      Educate &amp; Strategize
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text24 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text39">
                      Armed with insights from the assessment phase, we craft a
                      bespoke strategy that outlines the optimal path forward.
                      This roadmap is not a one-size-fits-all solution—it’s
                      tailored to your organization’s needs, outlining clear
                      milestones, key performance indicators, and a phased
                      approach to implementation.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text25 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text37">
                       Implement &amp; Guide
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text27 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text36">
                      Implementation is just the beginning. We stay by your
                      side, providing hands-on guidance as your new solution
                      takes shape. Our goal is to ensure that your team not only
                      uses the technology but understands its full potential,
                      making adjustments as your organization evolves.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text28 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="steps2-text29 thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text34">
                      Continuous Improvement
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text30 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text35">
                      Our commitment to your success doesn’t end with
                      deployment. We offer continuous support, training, and
                      strategic adjustments to help your solutions mature over
                      time. By partnering for the long term, we ensure that you
                      not only meet today’s challenges but are also prepared for
                      tomorrow’s opportunities.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text31 thq-heading-3">04</label>
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
  rootClassName: '',
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
  rootClassName: PropTypes.string,
  step2Description: PropTypes.element,
}

export default Steps2
