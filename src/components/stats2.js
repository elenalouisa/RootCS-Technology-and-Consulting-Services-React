import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container1 thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container2 thq-flex-column"></div>
        <div className="stats2-container3 thq-flex-column">
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="stats2-text31 thq-body-small">
                  Tailored solutions to guide organizations through their
                  digital transformation journeys
                </span>
              </Fragment>
            )}
          </span>
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="stats2-text21 thq-heading-2">Our Stats</h2>
              </Fragment>
            )}
          </h2>
          <p>
            {props.content2 ?? (
              <Fragment>
                <p className="stats2-text27 thq-body-large">
                  Enhancing efficiency and competitiveness
                </p>
              </Fragment>
            )}
          </p>
          <div className="stats2-container4 thq-grid-2">
            <div className="stats2-container5">
              <h2>
                {props.stat1 ?? (
                  <Fragment>
                    <h2 className="stats2-text29 thq-heading-2">
                      Modernization
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats2-text26 thq-body-small">
                      Customized solutions for digital transformation
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container6">
              <h2>
                {props.stat2 ?? (
                  <Fragment>
                    <h2 className="stats2-text23 thq-heading-2">
                      Cloud Services
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats2-text28 thq-body-small">
                      Cloud Services and ERP/CRM Optimization
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats2-container7 thq-grid-2">
            <div className="stats2-container8">
              <h2>
                {props.stat3 ?? (
                  <Fragment>
                    <h2 className="stats2-text30 thq-heading-2">Integration</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats2-text22 thq-body-small">
                      Integrating big data for valuable insights
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container9">
              <h2>
                {props.stat4 ?? (
                  <Fragment>
                    <h2 className="stats2-text25 thq-heading-2">
                      AI Solutions
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats2-text24 thq-body-small">
                      Implementing AI solutions for valuable insights
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  heading1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1501552410-ac3c9736cb2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjgwMDM4M3w&ixlib=rb-4.0.3&q=80&w=1500',
  stat3Description: undefined,
  stat2: undefined,
  stat4Description: undefined,
  stat4: undefined,
  stat1Description: undefined,
  content2: undefined,
  stat2Description: undefined,
  stat1: undefined,
  stat3: undefined,
  content1: undefined,
}

Stats2.propTypes = {
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
  stat3Description: PropTypes.element,
  stat2: PropTypes.element,
  stat4Description: PropTypes.element,
  stat4: PropTypes.element,
  stat1Description: PropTypes.element,
  content2: PropTypes.element,
  stat2Description: PropTypes.element,
  stat1: PropTypes.element,
  stat3: PropTypes.element,
  content1: PropTypes.element,
}

export default Stats2
