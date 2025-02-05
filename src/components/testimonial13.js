import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial13.css'

const Testimonial13 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial13-max-width thq-section-max-width">
        <div className="testimonial13-section-title">
          <h2 className="testimonial13-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial13-text18">
                  Client Testimonials
                </span>
              </Fragment>
            )}
          </h2>
          <p className="testimonial13-subtitle thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial13-text20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="testimonial13-container thq-flex-row">
          <div className="testimonial13-content1 thq-flex-column">
            <div className="testimonial13-stars1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <p className="testimonial13-text10 thq-body-large">
              {props.review1 ?? (
                <Fragment>
                  <span className="testimonial13-text16">
                    Root Consulting Services provided us with exceptional
                    guidance and support throughout our digital transformation
                    journey. Their tailored solutions have significantly
                    improved our efficiency and competitiveness in the market.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="testimonial13-avatar1">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial13-avatar-image1 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="testimonial13-avatar-content1">
                <span className="testimonial13-text11 thq-body-small">
                  {props.author1Name ?? (
                    <Fragment>
                      <span className="testimonial13-text22">John Doe</span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.author1Position ?? (
                    <Fragment>
                      <span className="testimonial13-text23">
                        CEO, Company ABC
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <img
                alt={props.company1LogoAlt}
                src={props.company1LogoSrc}
                className="testimonial13-logo1"
              />
            </div>
          </div>
          <div className="testimonial13-content2 thq-flex-column">
            <div className="testimonial13-stars2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <p className="testimonial13-text13 thq-body-large">
              {props.review2 ?? (
                <Fragment>
                  <span className="testimonial13-text19">
                    We are extremely satisfied with the cloud services and big
                    data integration solutions offered by Root Consulting
                    Services. Their expertise has been instrumental in helping
                    us achieve our business goals.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="testimonial13-avatar2">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial13-avatar-image2 thq-img-round"
              />
              <div className="testimonial13-avatar-content2">
                <span className="testimonial13-text14 thq-body-small">
                  {props.author2Name ?? (
                    <Fragment>
                      <span className="testimonial13-text17">Jane Smith</span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.author2Position ?? (
                    <Fragment>
                      <span className="testimonial13-text21">
                        CTO, Company XYZ
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <img
                alt={props.company2LogoAlt}
                src={props.company2LogoSrc}
                className="testimonial13-logo2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial13.defaultProps = {
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  review1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1702907155366-31d6c26a3938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg0Mzk3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Name: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg0Mzk3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  author1Alt: 'Image of John Doe',
  review2: undefined,
  content1: undefined,
  company2LogoAlt: 'Company XYZ Logo',
  author2Position: undefined,
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author2Alt: 'Image of Jane Smith',
  author1Name: undefined,
  company1LogoAlt: 'Company ABC Logo',
  author1Position: undefined,
}

Testimonial13.propTypes = {
  company2LogoSrc: PropTypes.string,
  review1: PropTypes.element,
  author1Src: PropTypes.string,
  author2Name: PropTypes.element,
  author2Src: PropTypes.string,
  heading1: PropTypes.element,
  author1Alt: PropTypes.string,
  review2: PropTypes.element,
  content1: PropTypes.element,
  company2LogoAlt: PropTypes.string,
  author2Position: PropTypes.element,
  company1LogoSrc: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Name: PropTypes.element,
  company1LogoAlt: PropTypes.string,
  author1Position: PropTypes.element,
}

export default Testimonial13
