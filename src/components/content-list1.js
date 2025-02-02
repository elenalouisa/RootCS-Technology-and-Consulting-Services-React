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
              <h2 className="content-list1-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list1-text11">
                      About Root Consulting Services
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="content-list1-text12">
                      RootCS was founded on the belief that every digital
                      transformation starts at the roots. With decades of
                      combined expertise in IT strategy, DevOps, ERP/CRM
                      integrations, AI implementations, and advanced analytics,
                      our team is dedicated to helping IT companies modernize
                      and thrive. Our holistic approach ensures that every
                      solution is tailored to your unique challenges and goals.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="content-list1-text15">Our Approach</span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="content-list1-text16">
                      At Root Consulting Services, we believe in providing
                      tailored solutions to meet the unique needs of each
                      organization. Our methodology ensures that our clients
                      receive customized strategies that enhance efficiency and
                      competitiveness in the digital landscape.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading3 ?? (
                  <Fragment>
                    <span className="content-list1-text19">
                      Services Offered
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content3 ?? (
                  <Fragment>
                    <span className="content-list1-text10">
                      We offer a range of services including cloud services, ERP
                      implementation, CRM solutions, and HCM optimization. Our
                      team of experts is dedicated to helping businesses harness
                      the power of technology to achieve their goals.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading4 ?? (
                  <Fragment>
                    <span className="content-list1-text13">
                      Process Optimization
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content4 ?? (
                  <Fragment>
                    <span className="content-list1-text17">
                      Our focus on process optimization sets us apart. We work
                      closely with our clients to streamline their operations,
                      improve workflows, and drive productivity. By optimizing
                      processes, we help businesses achieve sustainable growth
                      and success.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading5 ?? (
                  <Fragment>
                    <span className="content-list1-text21">
                      Data and Analytics
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content5 ?? (
                  <Fragment>
                    <span className="content-list1-text20">
                      Data is at the core of everything we do. We help
                      organizations leverage data and analytics to gain valuable
                      insights, make informed decisions, and drive innovation.
                      Our data-driven approach empowers businesses to stay ahead
                      in a competitive market.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading6 ?? (
                  <Fragment>
                    <span className="content-list1-text18">
                      Customized Solutions
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content6 ?? (
                  <Fragment>
                    <span className="content-list1-text14">
                      We understand that every business is unique. That&apos;s
                      why we offer customized solutions that are tailored to the
                      specific needs of each organization. Our goal is to
                      deliver results that exceed expectations and drive
                      long-term success.
                    </span>
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
