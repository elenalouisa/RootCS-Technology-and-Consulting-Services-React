import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import Component3 from './component3'
import './navbar-final.css'

const NavbarFinal = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  return (
    <header className="navbar-final-container1">
      <header data-thq="thq-navbar" className="navbar-final-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="navbar-final-desktop-menu">
          <Component3 rootClassName="component3root-class-name2"></Component3>
          <nav className="navbar-final-links1">
            <Link to="/" className="navbar-final-home thq-link thq-body-small">
              {props.link1 ?? (
                <Fragment>
                  <span className="navbar-final-text35">Home</span>
                </Fragment>
              )}
            </Link>
            <a
              href={props.link1Url1}
              className="navbar-final-expertise thq-link thq-body-small"
            >
              {props.expertise1 ?? (
                <Fragment>
                  <span className="navbar-final-text34">Exptertise</span>
                </Fragment>
              )}
            </a>
            <a href={props.link2Url} className="thq-link thq-body-small">
              {props.link2 ?? (
                <Fragment>
                  <span className="navbar-final-text21">Services</span>
                </Fragment>
              )}
            </a>
            <a href={props.link2Url1} className="thq-link thq-body-small">
              {props.link21 ?? (
                <Fragment>
                  <span className="navbar-final-text29">Industries</span>
                </Fragment>
              )}
            </a>
            <div
              onClick={() => setLink5DropdownVisible(!link5DropdownVisible)}
              className="navbar-final-about-us"
            >
              <Link to="/about" className="thq-link thq-body-small">
                {props.link4 ?? (
                  <Fragment>
                    <span className="navbar-final-text28">About</span>
                  </Fragment>
                )}
              </Link>
              <div className="navbar-final-icon-container1">
                {link5DropdownVisible && (
                  <div className="navbar-final-container2">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="navbar-final-icon10"
                    >
                      <path d="M298 426h428l-214 214z"></path>
                    </svg>
                  </div>
                )}
                {!link5DropdownVisible && (
                  <div className="navbar-final-container3">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="navbar-final-icon12"
                    >
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </nav>
          <div className="navbar-final-buttons1">
            <Link
              to="/contact"
              onClick={() => {}}
              className="navbar-final-contact thq-button-animated thq-button-filled"
            >
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="navbar-final-text14">Contact</span>
                  </Fragment>
                )}
              </span>
            </Link>
            <button className="navbar-final-action21 thq-button-animated thq-button-outline">
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="navbar-final-text22">Login</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-final-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-final-icon14">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        {link5AccordionOpen && (
          <div data-thq="thq-mobile-menu" className="navbar-final-mobile-menu">
            <div className="navbar-final-nav">
              <div className="navbar-final-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar-final-logo"
                />
                <div
                  data-thq="thq-close-menu"
                  className="navbar-final-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="navbar-final-icon16">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar-final-links2">
                <a
                  href={props.link1Url}
                  className="navbar-final-link1 thq-link thq-body-small"
                >
                  {props.link11 ?? (
                    <Fragment>
                      <span className="navbar-final-text31">Home</span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link2Url2} className="thq-link thq-body-small">
                  {props.link22 ?? (
                    <Fragment>
                      <span className="navbar-final-text26">Services</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href={props.link3Url}
                  className="navbar-final-link3 thq-link thq-body-small"
                >
                  {props.link3 ?? (
                    <Fragment>
                      <span className="navbar-final-text15">About</span>
                    </Fragment>
                  )}
                </a>
                <div className="navbar-final-link4-accordion">
                  <div
                    onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                    className="navbar-final-trigger"
                  >
                    <span className="thq-link thq-body-small">
                      {props.link41 ?? (
                        <Fragment>
                          <span className="navbar-final-text19">About</span>
                        </Fragment>
                      )}
                    </span>
                    <div className="navbar-final-icon-container2">
                      {link5AccordionOpen && (
                        <div className="navbar-final-container4">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="navbar-final-icon18"
                          >
                            <path d="M298 426h428l-214 214z"></path>
                          </svg>
                        </div>
                      )}
                      {!link5AccordionOpen && (
                        <div className="navbar-final-container5">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="navbar-final-icon20"
                          >
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  {link5AccordionOpen && (
                    <div className="navbar-final-container6">
                      <a href={props.linkUrlPage11}>
                        <div className="navbar-final-menu-item1">
                          <img
                            alt={props.page1ImageAlt1}
                            src={props.page1ImageSrc1}
                            className="navbar-final-page1-image1"
                          />
                          <div className="navbar-final-content1">
                            <span className="navbar-final-page11 thq-body-large">
                              {props.page11 ?? (
                                <Fragment>
                                  <span className="navbar-final-text25">
                                    Overview
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </div>
                      </a>
                      <a href={props.linkUrlPage21}>
                        <div className="navbar-final-menu-item2">
                          <img
                            alt={props.page2ImageAlt1}
                            src={props.page2ImageSrc1}
                            className="navbar-final-page2-image1"
                          />
                          <div className="navbar-final-content2">
                            <span className="navbar-final-page21 thq-body-large">
                              {props.page21 ?? (
                                <Fragment>
                                  <span className="navbar-final-text33">
                                    Culture
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </div>
                      </a>
                      <a href={props.linkUrlPage31}>
                        <div className="navbar-final-menu-item3">
                          <img
                            alt={props.page3ImageAlt1}
                            src={props.page3ImageSrc1}
                            className="navbar-final-page3-image1"
                          />
                          <div className="navbar-final-content3">
                            <span className="navbar-final-page31 thq-body-large">
                              {props.page31 ?? (
                                <Fragment>
                                  <span className="navbar-final-text27">
                                    Our Work
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </div>
                      </a>
                      <a href={props.linkUrlPage41}>
                        <div className="navbar-final-menu-item4">
                          <img
                            alt={props.page4ImageAlt1}
                            src={props.page4ImageSrc1}
                            className="navbar-final-page4-image1"
                          />
                          <div className="navbar-final-content4">
                            <span className="navbar-final-page41 thq-body-large">
                              {props.page41 ?? (
                                <Fragment>
                                  <span className="navbar-final-text16">
                                    Page Four
                                  </span>
                                </Fragment>
                              )}
                            </span>
                            <span className="thq-body-small">
                              {props.page4Description ?? (
                                <Fragment>
                                  <span className="navbar-final-text32">
                                    Page Four Description
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              </nav>
              <div className="navbar-final-buttons2">
                <button className="thq-button-filled">
                  <span>
                    {props.action11 ?? (
                      <Fragment>
                        <span className="navbar-final-text18">Contact</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button className="thq-button-outline">
                  <span>
                    {props.action21 ?? (
                      <Fragment>
                        <span className="navbar-final-text23">Login</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
            <div className="navbar-final-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-x-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-x-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="thq-icon-small"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        )}
        {link5DropdownVisible && (
          <div className="navbar-final-container7 thq-box-shadow">
            <div className="navbar-final-link5-menu-list">
              <a href={props.linkUrlPage1}>
                <div className="navbar-final-menu-item5">
                  <img
                    alt={props.page1ImageAlt}
                    src={props.page1ImageSrc}
                    className="navbar-final-page1-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar-final-content5">
                    <span className="navbar-final-page12 thq-body-large">
                      {props.page1 ?? (
                        <Fragment>
                          <span className="navbar-final-text24">Overview</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage2}>
                <div className="navbar-final-menu-item6">
                  <img
                    alt={props.page2ImageAlt}
                    src={props.page2ImageSrc}
                    className="navbar-final-page2-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar-final-content6">
                    <span className="navbar-final-page22 thq-body-large">
                      {props.page2 ?? (
                        <Fragment>
                          <span className="navbar-final-text17">Culture</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage3}>
                <div className="navbar-final-menu-item7">
                  <img
                    alt={props.page3ImageAlt}
                    src={props.page3ImageSrc}
                    className="navbar-final-page3-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar-final-content7">
                    <span className="navbar-final-page32 thq-body-large">
                      {props.page3 ?? (
                        <Fragment>
                          <span className="navbar-final-text20">Our Work</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage4}>
                <div className="navbar-final-menu-item8">
                  <img
                    alt={props.page4ImageAlt}
                    src={props.page4ImageSrc}
                    className="navbar-final-page4-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar-final-content8">
                    <span className="navbar-final-page42 thq-body-large">
                      {props.page4 ?? (
                        <Fragment>
                          <span className="navbar-final-text30">Page Four</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )}
      </header>
      {link5DropdownVisible && (
        <div
          onClick={() => setLink5DropdownVisible(false)}
          className="navbar-final-container8"
        ></div>
      )}
    </header>
  )
}

NavbarFinal.defaultProps = {
  action1: undefined,
  page4ImageSrc:
    'https://images.unsplash.com/photo-1576089235406-0612d7bb033e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcxMzIwNnw&ixlib=rb-4.0.3&q=80&w=200',
  page3ImageSrc1:
    'https://images.unsplash.com/photo-1498751041763-40284fe1eb66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcxMzIwNnw&ixlib=rb-4.0.3&q=80&w=200',
  link3: undefined,
  page3ImageAlt1: 'image',
  contactPage: () => {},
  linkUrlPage3: '#about',
  page41: undefined,
  page2: undefined,
  page2ImageSrc1:
    'https://images.unsplash.com/photo-1594852352010-63d76b89f85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcxMzIwNnw&ixlib=rb-4.0.3&q=80&w=200',
  link2Url2: 'https://www.teleporthq.io',
  action11: undefined,
  page2ImageAlt: 'image',
  link41: undefined,
  page3: undefined,
  linkUrlPage11: '#home',
  link2: undefined,
  linkUrlPage31: '#about',
  page4ImageAlt: 'image',
  action2: undefined,
  page2ImageAlt1: 'image',
  logoAlt: 'logo',
  action21: undefined,
  link2Url: 'https://www.teleporthq.io',
  page1: undefined,
  page11: undefined,
  linkUrlPage21: '#services',
  page3ImageAlt: 'image',
  linkUrlPage4: '#contact',
  link22: undefined,
  page4ImageSrc1:
    'https://images.unsplash.com/photo-1576089235406-0612d7bb033e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcxMzIwNnw&ixlib=rb-4.0.3&q=80&w=200',
  linkUrlPage1: '#home',
  page3ImageSrc:
    'https://images.unsplash.com/photo-1498751041763-40284fe1eb66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcxMzIwNnw&ixlib=rb-4.0.3&q=80&w=200',
  page31: undefined,
  link3Url: 'https://www.teleporthq.io',
  link4: undefined,
  rootClassName: '',
  link21: undefined,
  page4: undefined,
  link11: undefined,
  page1ImageAlt: 'image',
  page1ImageSrc:
    'https://images.unsplash.com/photo-1566568769534-31fe453a740e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcxMzIwNnw&ixlib=rb-4.0.3&q=80&w=200',
  link1Url1: 'https://www.teleporthq.io',
  page4Description: undefined,
  link2Url1: 'https://www.teleporthq.io',
  page21: undefined,
  expertise1: undefined,
  logoSrc: '/logo-1500h.webp',
  linkUrlPage41: '#contact',
  link1: undefined,
  page4ImageAlt1: 'image',
  page1ImageSrc1:
    'https://images.unsplash.com/photo-1566568769534-31fe453a740e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcxMzIwNnw&ixlib=rb-4.0.3&q=80&w=200',
  linkUrlPage2: '#services',
  page2ImageSrc:
    'https://images.unsplash.com/photo-1594852352010-63d76b89f85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcxMzIwNnw&ixlib=rb-4.0.3&q=80&w=200',
  page1ImageAlt1: 'image',
  link1Url: 'https://www.teleporthq.io',
}

NavbarFinal.propTypes = {
  action1: PropTypes.element,
  page4ImageSrc: PropTypes.string,
  page3ImageSrc1: PropTypes.string,
  link3: PropTypes.element,
  page3ImageAlt1: PropTypes.string,
  contactPage: PropTypes.func,
  linkUrlPage3: PropTypes.string,
  page41: PropTypes.element,
  page2: PropTypes.element,
  page2ImageSrc1: PropTypes.string,
  link2Url2: PropTypes.string,
  action11: PropTypes.element,
  page2ImageAlt: PropTypes.string,
  link41: PropTypes.element,
  page3: PropTypes.element,
  linkUrlPage11: PropTypes.string,
  link2: PropTypes.element,
  linkUrlPage31: PropTypes.string,
  page4ImageAlt: PropTypes.string,
  action2: PropTypes.element,
  page2ImageAlt1: PropTypes.string,
  logoAlt: PropTypes.string,
  action21: PropTypes.element,
  link2Url: PropTypes.string,
  page1: PropTypes.element,
  page11: PropTypes.element,
  linkUrlPage21: PropTypes.string,
  page3ImageAlt: PropTypes.string,
  linkUrlPage4: PropTypes.string,
  link22: PropTypes.element,
  page4ImageSrc1: PropTypes.string,
  linkUrlPage1: PropTypes.string,
  page3ImageSrc: PropTypes.string,
  page31: PropTypes.element,
  link3Url: PropTypes.string,
  link4: PropTypes.element,
  rootClassName: PropTypes.string,
  link21: PropTypes.element,
  page4: PropTypes.element,
  link11: PropTypes.element,
  page1ImageAlt: PropTypes.string,
  page1ImageSrc: PropTypes.string,
  link1Url1: PropTypes.string,
  page4Description: PropTypes.element,
  link2Url1: PropTypes.string,
  page21: PropTypes.element,
  expertise1: PropTypes.element,
  logoSrc: PropTypes.string,
  linkUrlPage41: PropTypes.string,
  link1: PropTypes.element,
  page4ImageAlt1: PropTypes.string,
  page1ImageSrc1: PropTypes.string,
  linkUrlPage2: PropTypes.string,
  page2ImageSrc: PropTypes.string,
  page1ImageAlt1: PropTypes.string,
  link1Url: PropTypes.string,
}

export default NavbarFinal
