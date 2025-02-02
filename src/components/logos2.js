import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './logos2.css'

const Logos2 = (props) => {
  return (
    <div
      className={`logos2-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="logos2-max-width thq-section-max-width">
        <h2 className="logos2-text1 thq-heading-2">
          {props.heading1 ?? (
            <Fragment>
              <span className="logos2-text2">Our Partners</span>
            </Fragment>
          )}
        </h2>
        <div className="logos2-container2 thq-grid-5">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos2-logo11 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo1Alt4}
            src={props.logo1Src4}
            className="logos2-logo12 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo1Alt3}
            src={props.logo1Src3}
            className="logos2-logo13 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo1Alt2}
            src={props.logo1Src2}
            className="logos2-logo14 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo1Alt1}
            src={props.logo1Src1}
            className="logos2-logo15 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos2-logo2 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos2-logo3 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos2-logo4 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos2-logo5 thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Logos2.defaultProps = {
  logo1Src3: '/Logos/google-logo-500x281-1400w.webp',
  logo2Alt: 'Partner Logo 2',
  logo3Alt: 'Partner Logo 3',
  logo1Src4:
    '/Logos/vecteezy_amazon-logo-png-amazon-icon-transparent-png_19766240-1400w.webp',
  logo4Src: '/Logos/netsuite-logo-500x281-1400w.webp',
  logo1Src2: '/Logos/oracle-logo-1-500x281-1400w.webp',
  logo3Src: '/Logos/hubspot-logo-500x281-1400w.webp',
  logo1Alt: 'Partner Logo 1',
  logo1Alt3: 'Partner Logo 1',
  logo5Src: '/Logos/snowflake-logo-500x281-1400w.webp',
  logo2Src: '/Logos/zendesk-logo-500x281-1400w.webp',
  logo4Alt: 'Partner Logo 4',
  logo1Src: '/Logos/microsoft-logo-500x163-1400w.webp',
  logo1Alt4: 'Partner Logo 1',
  heading1: undefined,
  rootClassName: '',
  logo1Alt2: 'Partner Logo 1',
  logo5Alt: 'Partner Logo 5',
  logo1Alt1: 'Partner Logo 1',
  logo1Src1: '/Logos/sap-logo-500x281-1400w.webp',
}

Logos2.propTypes = {
  logo1Src3: PropTypes.string,
  logo2Alt: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo1Src4: PropTypes.string,
  logo4Src: PropTypes.string,
  logo1Src2: PropTypes.string,
  logo3Src: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo1Alt3: PropTypes.string,
  logo5Src: PropTypes.string,
  logo2Src: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo1Src: PropTypes.string,
  logo1Alt4: PropTypes.string,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
  logo1Alt2: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo1Alt1: PropTypes.string,
  logo1Src1: PropTypes.string,
}

export default Logos2
