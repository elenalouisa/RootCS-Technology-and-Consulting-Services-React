import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container1 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal"
          >
            <div className="features25-divider-container">
              {activeTab === 0 && <div className="features25-container2"></div>}
            </div>
            <div className="features25-content">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features25-text4 thq-heading-2">
                      Cloud Solutions
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text3 thq-body-small">
                      Expertise in designing and implementing cloud solutions
                      tailored to meet specific business needs.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 1 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features25-text2 thq-heading-2">
                      Digital Transformation
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text1 thq-body-small">
                      Specialized in guiding organizations through digital
                      transformation journeys to enhance efficiency and
                      competitiveness.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 2 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features25-text thq-heading-2">
                      Big Data Integration &amp; Analytics
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text5 thq-body-small">
                      Proficiency in integrating and analyzing big data to
                      derive valuable insights for informed decision-making.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1717143587138-2532a35ce9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcxMzIwNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: undefined,
  feature2Description: undefined,
  feature2ImgAlt: 'Digital Transformation Image Alt Text',
  feature1ImgAlt: 'Cloud Solutions Image Alt Text',
  feature2Title: undefined,
  feature1Description: undefined,
  feature3ImgAlt: 'Big Data Integration & Analytics Image Alt Text',
  feature1Title: undefined,
  feature3Description: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1527497988071-2d4fb66f56f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcxMzIwNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1571125486952-ff8b39d8c7d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcxMzIwNnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features25.propTypes = {
  feature1ImgSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
}

export default Features25
