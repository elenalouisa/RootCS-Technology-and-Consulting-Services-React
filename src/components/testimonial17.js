import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text36">
                  Client Testimonials
                </span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text30">
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
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            John Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27">
                            CEO, Tech Solutions Inc.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text29">
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
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text35">
                            Emily Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            CFO, Data Insights Co.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text28">
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
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text33">
                            Michael Lee
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text25">
                            CTO, Innovate Now Ltd.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text34">
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
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text26">
                            Sarah Adams
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            CMO, Growth Marketing Agency
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text31">
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
