import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text26 thq-heading-2">
                  Client Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text20 thq-body-small">
                  Root Consulting Services helped us seamlessly transition to
                  the cloud, improving our efficiency and reducing costs. Their
                  expertise in digital transformation is unmatched.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text22 thq-body-large">
                            John Smith
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text17 thq-body-small">
                            CEO, Tech Solutions Inc.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text19 thq-body-small">
                        Root Consulting Services helped us seamlessly transition
                        to the cloud, improving our efficiency and reducing
                        costs. Their expertise in digital transformation is
                        unmatched.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text25 thq-body-large">
                            Emily Johnson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text14 thq-body-small">
                            CFO, Data Insights Co.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text18 thq-body-small">
                        We engaged Root Consulting Services for our ERP
                        implementation, and they delivered exceptional results.
                        Their team&apos;s knowledge of ERP systems is
                        impressive.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text23 thq-body-large">
                            Michael Lee
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text15 thq-body-small">
                            CTO, Innovate Now Ltd.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text24 thq-body-small">
                        Root Consulting Services&apos; expertise in big data
                        integration and analytics helped us gain valuable
                        insights for our business. Their approach is highly
                        professional and effective.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text16 thq-body-large">
                            Sarah Adams
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27 thq-body-small">
                            CMO, Growth Marketing Agency
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text21 thq-body-small">
                        Working with Root Consulting Services on AI and machine
                        learning projects has been a game-changer for our
                        organization. Their innovative solutions have
                        significantly enhanced our capabilities.
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

Testimonial17.defaultProps = {
  author2Position: undefined,
  author3Position: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1536010447069-d2c8af80c584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcxMzIwNnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: undefined,
  author1Position: undefined,
  author1Alt: 'Image of John Smith',
  review2: undefined,
  author4Alt: 'Image of Sarah Adams',
  review1: undefined,
  content1: undefined,
  review4: undefined,
  author1Name: undefined,
  author3Name: undefined,
  review3: undefined,
  author2Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1472521882609-05fb39814d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcxMzIwNnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1632377082403-214778bec07b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcxMzIwNnw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/photo-1534865007446-5214dca11db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcxMzIwNnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  author4Position: undefined,
  author3Alt: 'Image of Michael Lee',
  author2Alt: 'Image of Emily Johnson',
}

Testimonial17.propTypes = {
  author2Position: PropTypes.element,
  author3Position: PropTypes.element,
  author3Src: PropTypes.string,
  author4Name: PropTypes.element,
  author1Position: PropTypes.element,
  author1Alt: PropTypes.string,
  review2: PropTypes.element,
  author4Alt: PropTypes.string,
  review1: PropTypes.element,
  content1: PropTypes.element,
  review4: PropTypes.element,
  author1Name: PropTypes.element,
  author3Name: PropTypes.element,
  review3: PropTypes.element,
  author2Name: PropTypes.element,
  author1Src: PropTypes.string,
  author4Src: PropTypes.string,
  author2Src: PropTypes.string,
  heading1: PropTypes.element,
  author4Position: PropTypes.element,
  author3Alt: PropTypes.string,
  author2Alt: PropTypes.string,
}

export default Testimonial17
