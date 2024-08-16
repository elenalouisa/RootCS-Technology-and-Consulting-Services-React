import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features11.css'

const Features11 = (props) => {
  return (
    <div className="features11-layout251 thq-section-padding">
      <div className="features11-max-width thq-section-max-width">
        <div className="thq-flex-row features11-section-title">
          <div className="features11-column thq-flex-column">
            <span>
              {props.slogan ?? (
                <Fragment>
                  <span className="features11-text21 thq-body-small">
                    Empowering Your Business Through Innovation
                  </span>
                </Fragment>
              )}
            </span>
            <h2>
              {props.sectionTitle ?? (
                <Fragment>
                  <h2 className="features11-text19 thq-heading-2">
                    Key Features
                  </h2>
                </Fragment>
              )}
            </h2>
          </div>
          <span>
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features11-text13 thq-body-small">
                  Explore the key features that Root Consulting Services offers
                  to drive your digital transformation.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features11-content1">
          <div className="features11-row thq-flex-row">
            <div className="features11-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features11-feature1-image"
              />
              <div className="features11-content2 thq-flex-column">
                <h3>
                  {props.feature1Title ?? (
                    <Fragment>
                      <h3 className="features11-text23 thq-heading-3">
                        Cloud Services
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features11-text20 thq-body-small">
                        Customized cloud solutions to optimize your
                        organization&apos;s infrastructure.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features11-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features11-feature2-image"
              />
              <div className="features11-content3 thq-flex-column">
                <h3>
                  {props.feature2Title ?? (
                    <Fragment>
                      <h3 className="features11-text18 thq-heading-3">
                        ERP Integration
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features11-text16 thq-body-small">
                        Seamless integration of ERP systems for streamlined
                        operations.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features11-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features11-feature3-image"
              />
              <div className="features11-content4 thq-flex-column">
                <h3>
                  {props.feature3Title ?? (
                    <Fragment>
                      <h3 className="features11-text14 thq-heading-3">
                        Data Analytics
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features11-text22 thq-body-small">
                        Utilize big data integration for insightful analytics
                        and informed decision-making.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features11-actions">
          <button className="thq-button-filled features11-button1">
            <span>
              {props.mainAction ?? (
                <Fragment>
                  <span className="features11-text17 thq-body-small">
                    Tailored Solutions
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline features11-button2">
            <span>
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features11-text15 thq-body-small">
                    Enhanced Efficiency
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features11.defaultProps = {
  feature3ImageAlt: 'Data Analytics Image',
  feature2ImageAlt: 'ERP Integration Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1518186233392-c232efbf2373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg0ODk5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  sectionDescription: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg0ODk5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: undefined,
  secondaryAction: undefined,
  feature2Description: undefined,
  mainAction: undefined,
  feature2Title: undefined,
  sectionTitle: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1493130952181-47e36589f64d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg0ODk5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description: undefined,
  slogan: undefined,
  feature1ImageAlt: 'Cloud Services Image',
  feature3Description: undefined,
  feature1Title: undefined,
}

Features11.propTypes = {
  feature3ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature2Description: PropTypes.element,
  mainAction: PropTypes.element,
  feature2Title: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  slogan: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default Features11
