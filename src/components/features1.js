import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div
      className={`features1-layout251 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <h2>
              {props.sectionTitle ?? (
                <Fragment>
                  <h2 className="features1-text12 thq-heading-2">
                    Key Features
                  </h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features1-text18 thq-body-small">
                    Discover the key features that set Root Consulting Services
                    apart from the rest.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="features1-content1">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3>
                  {props.feature1Title ?? (
                    <Fragment>
                      <h3 className="features1-text19 thq-heading-3">
                        Customized Solutions
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features1-text13 thq-body-small">
                        We provide tailored solutions for each client to enhance
                        efficiency and competitiveness.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3>
                  {props.feature2Title ?? (
                    <Fragment>
                      <h3 className="features1-text14 thq-heading-3">
                        Process Optimization
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features1-text15 thq-body-small">
                        Expertise in process optimization to streamline
                        operations and maximize productivity.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content4 thq-flex-column">
                <h3>
                  {props.feature3Title ?? (
                    <Fragment>
                      <h3 className="features1-text16 thq-heading-3">
                        Data Analytics
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features1-text17 thq-body-small">
                        Implementing advanced data analytics techniques to drive
                        informed decision-making.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  sectionTitle: undefined,
  feature1Description: undefined,
  rootClassName: '',
  feature2Title: undefined,
  feature2Description: undefined,
  feature3Title: undefined,
  feature2ImageAlt: 'Process Optimization Image',
  feature3Description: undefined,
  feature1ImageAlt: 'Customized Solutions Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ4fHxkYXRhfGVufDB8fHx8MTcyMzg2NzM4MHww&ixlib=rb-4.0.3&h=300',
  sectionDescription: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHByb2Nlc3MlMjBkaWFncmFtfGVufDB8fHx8MTcyMzg2NzM1OXww&ixlib=rb-4.0.3&h=300',
  feature3ImageAlt: 'Data Analytics Image',
  feature1Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1510751007277-36932aac9ebd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxmZW1hbGUlMjBkZXZlbG9wZXJ8ZW58MHx8fHwxNzIzODY3NDkyfDA&ixlib=rb-4.0.3&w=1400',
}

Features1.propTypes = {
  sectionTitle: PropTypes.element,
  feature1Description: PropTypes.element,
  rootClassName: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
}

export default Features1
