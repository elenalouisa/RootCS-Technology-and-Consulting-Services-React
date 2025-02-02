import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className={`hero17-header78 ${props.rootClassName} `}>
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content">
          <h1 className="hero17-text10 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text14">
                  <span>Codify. Everything.</span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </h1>
          <img
            alt={props.image1Alt1}
            src={props.image1Src1}
            className="hero17-hero-image thq-img-ratio-16-9"
          />
          <p className="hero17-text11 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text19">
                  We guide organizations through digital transformation journeys
                  to empower businesses.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <Link to="/contact" className="thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text18">Get in Touch</span>
                </Fragment>
              )}
            </Link>
          </button>
          <button className="thq-button-outline hero17-button2">
            <Link to="/services" className="thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text17">Learn More</span>
                </Fragment>
              )}
            </Link>
          </button>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
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
  image1Alt1: 'Digital Transformation Image',
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
  image1Src1:
    'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg0Mjg2OHw&ixlib=rb-4.0.3&q=80&w=1400',
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
  image1Alt1: PropTypes.string,
  image9Src: PropTypes.string,
  image3Src: PropTypes.string,
  image8Src: PropTypes.string,
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
  action2: PropTypes.element,
  image1Src1: PropTypes.string,
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
