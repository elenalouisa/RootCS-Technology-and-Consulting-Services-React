import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list1.css'

const ContentList1 = (props) => {
  return (
    <div
      className={`content-list1-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="content-list1-max-width thq-section-max-width">
        <div className="content-list1-content thq-flex-column">
          <ul className="content-list1-ul thq-flex-column">
            <li className="list-item thq-flex-column">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="content-list1-text11 thq-heading-2">
                      About Root Consulting Services
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="content-list1-text12 thq-body-small">
                      Root Consulting Services is a leading company that
                      specializes in guiding organizations through digital
                      transformation journeys. With a focus on cloud services,
                      ERP, CRM, and HCM solutions, we help businesses optimize
                      their processes and leverage data and analytics to drive
                      success.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading2 ?? (
                  <Fragment>
                    <h3 className="content-list1-text15 thq-heading-3">
                      Our Approach
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content2 ?? (
                  <Fragment>
                    <p className="content-list1-text16 thq-body-small">
                      At Root Consulting Services, we believe in providing
                      tailored solutions to meet the unique needs of each
                      organization. Our methodology ensures that our clients
                      receive customized strategies that enhance efficiency and
                      competitiveness in the digital landscape.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading3 ?? (
                  <Fragment>
                    <h3 className="content-list1-text19 thq-heading-3">
                      Services Offered
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content3 ?? (
                  <Fragment>
                    <p className="content-list1-text10 thq-body-small">
                      We offer a range of services including cloud services, ERP
                      implementation, CRM solutions, and HCM optimization. Our
                      team of experts is dedicated to helping businesses harness
                      the power of technology to achieve their goals.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading4 ?? (
                  <Fragment>
                    <h3 className="content-list1-text13 thq-heading-3">
                      Process Optimization
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content4 ?? (
                  <Fragment>
                    <p className="content-list1-text17 thq-body-small">
                      Our focus on process optimization sets us apart. We work
                      closely with our clients to streamline their operations,
                      improve workflows, and drive productivity. By optimizing
                      processes, we help businesses achieve sustainable growth
                      and success.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading5 ?? (
                  <Fragment>
                    <h3 className="content-list1-text21 thq-heading-3">
                      Data and Analytics
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content5 ?? (
                  <Fragment>
                    <p className="content-list1-text20 thq-body-small">
                      Data is at the core of everything we do. We help
                      organizations leverage data and analytics to gain valuable
                      insights, make informed decisions, and drive innovation.
                      Our data-driven approach empowers businesses to stay ahead
                      in a competitive market.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading6 ?? (
                  <Fragment>
                    <h3 className="content-list1-text18 thq-heading-3">
                      Customized Solutions
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content6 ?? (
                  <Fragment>
                    <p className="content-list1-text14 thq-body-small">
                      We understand that every business is unique. That&apos;s
                      why we offer customized solutions that are tailored to the
                      specific needs of each organization. Our goal is to
                      deliver results that exceed expectations and drive
                      long-term success.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList1.defaultProps = {
  content3: undefined,
  rootClassName: '',
  heading1: undefined,
  content1: undefined,
  heading4: undefined,
  content6: undefined,
  heading2: undefined,
  content2: undefined,
  content4: undefined,
  heading6: undefined,
  heading3: undefined,
  content5: undefined,
  heading5: undefined,
}

ContentList1.propTypes = {
  content3: PropTypes.element,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  heading4: PropTypes.element,
  content6: PropTypes.element,
  heading2: PropTypes.element,
  content2: PropTypes.element,
  content4: PropTypes.element,
  heading6: PropTypes.element,
  heading3: PropTypes.element,
  content5: PropTypes.element,
  heading5: PropTypes.element,
}

export default ContentList1
