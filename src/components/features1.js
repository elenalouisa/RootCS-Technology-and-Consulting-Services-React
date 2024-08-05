import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span>
              {props.slogan ?? (
                <Fragment>
                  <span className="features1-text10 thq-body-small">
                    Empowering Businesses Through Innovation
                  </span>
                </Fragment>
              )}
            </span>
            <h2>
              {props.sectionTitle ?? (
                <Fragment>
                  <h2 className="features1-text03 thq-heading-2">
                    Key Features
                  </h2>
                </Fragment>
              )}
            </h2>
          </div>
          <span>
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features1-text09 thq-body-small">
                  Discover the key features that set Root Consulting Services
                  apart from the rest.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3>
                  {props.feature1Title ?? (
                    <Fragment>
                      <h3 className="features1-text12 thq-heading-3">
                        Customized Solutions
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features1-text04 thq-body-small">
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
              <div className="features1-content2 thq-flex-column">
                <h3>
                  {props.feature2Title ?? (
                    <Fragment>
                      <h3 className="features1-text05 thq-heading-3">
                        Process Optimization
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features1-text06 thq-body-small">
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
              <div className="features1-content3 thq-flex-column">
                <h3>
                  {props.feature3Title ?? (
                    <Fragment>
                      <h3 className="features1-text07 thq-heading-3">
                        Data Analytics
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features1-text08 thq-body-small">
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
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span>
              {props.mainAction ?? (
                <Fragment>
                  <span className="features1-text13 thq-body-small">
                    Tailored Solutions
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline features1-button1">
            <span>
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features1-text11 thq-body-small">
                    Advanced Technologies
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

Features1.defaultProps = {
  sectionTitle: undefined,
  feature1Description: undefined,
  feature2Title: undefined,
  feature2Description: undefined,
  feature3Title: undefined,
  feature2ImageAlt: 'Process Optimization Image',
  feature3Description: undefined,
  feature1ImageAlt: 'Customized Solutions Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1685355118814-a87b31c9a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjgwMDM4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  sectionDescription: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1588674375211-f13ed7c68894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjgwMDM4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageAlt: 'Data Analytics Image',
  slogan: undefined,
  secondaryAction: undefined,
  feature1Title: undefined,
  mainAction: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1535557597501-0fee0a500c57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjgwMDM4M3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Features1.propTypes = {
  sectionTitle: PropTypes.element,
  feature1Description: PropTypes.element,
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
  slogan: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature1Title: PropTypes.element,
  mainAction: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
}

export default Features1
