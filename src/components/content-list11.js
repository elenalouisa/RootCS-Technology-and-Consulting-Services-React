import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list11.css'

const ContentList11 = (props) => {
  return (
    <div className="content-list11-container thq-section-padding">
      <div className="content-list11-max-width thq-section-max-width">
        <div className="content-list11-content thq-flex-column">
          <ul className="content-list11-ul thq-flex-column">
            <li className="list-item thq-flex-column">
              <h2 className="content-list11-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list11-text16">
                      Tailored Solutions for Digital Transformation
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="content-list11-text19">
                      Root Consulting Services offers customized solutions to
                      support businesses in their digital transformation
                      journey. Whether it&apos;s cloud services, ERP, CRM, or
                      HCM, we provide tailored strategies to meet your specific
                      needs.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="content-list11-text17">
                      Specializing in Cloud Services and More
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="content-list11-text11">
                      With a focus on cloud services, ERP, CRM, and HCM, Root
                      Consulting Services brings expertise in these key areas of
                      technology. Our specialization allows us to deliver
                      high-quality solutions that drive business growth.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading3 ?? (
                  <Fragment>
                    <span className="content-list11-text18">
                      Process Optimization and Data Analytics
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content3 ?? (
                  <Fragment>
                    <span className="content-list11-text21">
                      We help businesses optimize their processes and harness
                      the power of data analytics for informed decision-making.
                      Our services enable organizations to streamline operations
                      and unlock valuable insights from their data.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading4 ?? (
                  <Fragment>
                    <span className="content-list11-text15">
                      Empowering Businesses Through Technology
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content4 ?? (
                  <Fragment>
                    <span className="content-list11-text13">
                      At Root Consulting Services, our mission is to empower
                      businesses through technology. We believe that leveraging
                      the right tools and solutions can drive innovation,
                      efficiency, and success for our clients.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading5 ?? (
                  <Fragment>
                    <span className="content-list11-text14">
                      Why Choose Root Consulting Services?
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content5 ?? (
                  <Fragment>
                    <span className="content-list11-text12">
                      Root Consulting Services stands out for its commitment to
                      delivering exceptional results for clients. With a focus
                      on innovation, quality, and client satisfaction, we are
                      the partner of choice for businesses seeking digital
                      transformation.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading6 ?? (
                  <Fragment>
                    <span className="content-list11-text10">
                      Get Started on Your Digital Transformation Journey
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content6 ?? (
                  <Fragment>
                    <span className="content-list11-text20">
                      Ready to take your business to the next level? Contact
                      Root Consulting Services today to begin your digital
                      transformation journey. Let us help you unlock the full
                      potential of technology for your organization.
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

ContentList11.defaultProps = {
  heading6: undefined,
  content2: undefined,
  content5: undefined,
  content4: undefined,
  heading5: undefined,
  heading4: undefined,
  heading1: undefined,
  heading2: undefined,
  heading3: undefined,
  content1: undefined,
  content6: undefined,
  content3: undefined,
}

ContentList11.propTypes = {
  heading6: PropTypes.element,
  content2: PropTypes.element,
  content5: PropTypes.element,
  content4: PropTypes.element,
  heading5: PropTypes.element,
  heading4: PropTypes.element,
  heading1: PropTypes.element,
  heading2: PropTypes.element,
  heading3: PropTypes.element,
  content1: PropTypes.element,
  content6: PropTypes.element,
  content3: PropTypes.element,
}

export default ContentList11
