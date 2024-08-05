import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className={`hero17-header78 ${props.rootClassName} `}>
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero17-text04 thq-heading-1">
                  <span>Save More. Make More.</span>
                  <br></br>
                  <span>Get. More. Done.</span>
                </h1>
              </Fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="hero17-text10 thq-body-large">
                  We guide organizations through digital transformation journeys
                  to empower businesses. From solutions for Cloud to ERP, CRM,
                  and HCM, let us help you deliver real value.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text09 thq-body-small">
                    Get in Touch
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline hero17-button1">
            <span>
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text08 thq-body-small">
                    Learn More
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="hero17-content1"></div>
      <div>
        <div className="hero17-container1">
          <React.Fragment>
            <React.Fragment>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n  @keyframes scroll-x {\n    from {\n      transform: translateX(0);\n    }\n    to {\n      transform: translateX(calc(-100% - 16px));\n    }\n  }\n\n  @keyframes scroll-y {\n    from {\n      transform: translateY(0);\n    }\n    to {\n      transform: translateY(calc(-100% - 16px));\n    }\n  }\n',
                }}
              />
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  image9Src:
    'https://images.unsplash.com/photo-1527219525722-f9767a7f2884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjc5OTA0N3w&ixlib=rb-4.0.3&q=80&w=1500',
  image3Src:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjc5OTAyN3w&ixlib=rb-4.0.3&q=80&w=1500',
  image8Src:
    'https://images.unsplash.com/photo-1580894908361-967195033215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjc5OTA5NHw&ixlib=rb-4.0.3&q=80&w=1500',
  heading1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjc5ODkyMnw&ixlib=rb-4.0.3&q=80&w=1500',
  action2: undefined,
  image7Src:
    'https://images.unsplash.com/photo-1581092800573-6afa755dcdc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjc5OTA4Mnw&ixlib=rb-4.0.3&q=80&w=1500',
  image5Src:
    'https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjc5OTI5MXw&ixlib=rb-4.0.3&q=80&w=1500',
  image4Src:
    'https://images.unsplash.com/photo-1594915440248-1e419eba6611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjc5OTIwNHw&ixlib=rb-4.0.3&q=80&w=1500',
  image6Src:
    'https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjc5OTIyNHw&ixlib=rb-4.0.3&q=80&w=1500',
  action1: undefined,
  rootClassName: '',
  image2Src:
    'https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjc5OTE2Mnw&ixlib=rb-4.0.3&q=80&w=1500',
  content1: undefined,
}

Hero17.propTypes = {
  image9Src: PropTypes.string,
  image3Src: PropTypes.string,
  image8Src: PropTypes.string,
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
  action2: PropTypes.element,
  image7Src: PropTypes.string,
  image5Src: PropTypes.string,
  image4Src: PropTypes.string,
  image6Src: PropTypes.string,
  action1: PropTypes.element,
  rootClassName: PropTypes.string,
  image2Src: PropTypes.string,
  content1: PropTypes.element,
}

export default Hero17
