import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <main className={`component-container1 ${props.rootClassName} `}>
      <main className="component-container2">
        <iframe
          src="https://outlook.office365.com/owa/calendar/RootConsultingServices1@rootcs.org/bookings/"
          scrolling="no"
          allowFullScreen="true"
          className="component-iframe"
        ></iframe>
      </main>
    </main>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppComponent
