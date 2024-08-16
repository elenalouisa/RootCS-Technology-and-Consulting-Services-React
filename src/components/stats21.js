import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats21.css'

const Stats21 = (props) => {
  return (
    <div
      className={`stats21-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="stats21-max-width thq-section-max-width">
        <div className="stats21-container2 thq-flex-column">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="stats21-image thq-img-ratio-1-1"
          />
        </div>
        <div className="stats21-container3 thq-flex-column">
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="stats21-text17 thq-body-small">
                  Tailored services for cloud, ERP, CRM, and HCM
                </span>
              </Fragment>
            )}
          </span>
          <div className="stats21-container4 thq-grid-2">
            <h2>
              {props.stat2 ?? (
                <Fragment>
                  <h2 className="stats21-text19 thq-heading-2">Expertise</h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.stat2Description ?? (
                <Fragment>
                  <span className="stats21-text18 thq-body-small">
                    With a wealth of expertise accumulated over many years in
                    the industry, our team at Root Consulting Services brings a
                    depth of experience to every project we undertake. Our
                    seasoned professionals have honed their skills through a
                    wide range of challenges and successes, allowing us to offer
                    unparalleled insights and solutions to our clients. Trust in
                    our years of experience to guide your business through a
                    successful digital transformation journey.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="stats21-container5 thq-grid-2">
            <h2>
              {props.stat21 ?? (
                <Fragment>
                  <h2 className="stats21-text20 thq-heading-2">Satisfaction</h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.stat2Description1 ?? (
                <Fragment>
                  <span className="stats21-text21 thq-body-small">
                    We have received overwhelmingly positive feedback from our
                    satisfied clients who have experienced the benefits of our
                    tailored digital transformation solutions. Their
                    testimonials highlight the success of our cloud services,
                    ERP, CRM, and HCM implementations, as well as the impact of
                    our process optimization, data analytics, and innovative
                    problem-solving on their organizations&apos; digital
                    journey.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="stats21-container6 thq-grid-2">
            <h2>
              {props.stat212 ?? (
                <Fragment>
                  <h2 className="stats21-text22 thq-heading-2">Innovation</h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.stat2Description12 ?? (
                <Fragment>
                  <span className="stats21-text23 thq-body-small">
                    Innovative problem-solving techniques that push boundaries
                    and drive business growth
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats21.defaultProps = {
  content1: undefined,
  image1Alt: 'Root Consulting Services Stats',
  stat2Description: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg0OTg4OXw&ixlib=rb-4.0.3&q=80&w=1400',
  stat2: undefined,
  stat21: undefined,
  stat2Description1: undefined,
  rootClassName: '',
  stat212: undefined,
  stat2Description12: undefined,
}

Stats21.propTypes = {
  content1: PropTypes.element,
  image1Alt: PropTypes.string,
  stat2Description: PropTypes.element,
  image1Src: PropTypes.string,
  stat2: PropTypes.element,
  stat21: PropTypes.element,
  stat2Description1: PropTypes.element,
  rootClassName: PropTypes.string,
  stat212: PropTypes.element,
  stat2Description12: PropTypes.element,
}

export default Stats21
