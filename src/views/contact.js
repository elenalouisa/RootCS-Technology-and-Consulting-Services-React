import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import TopLogo from '../components/top-logo'
import Navbar8 from '../components/navbar8'
import ContactForm7 from '../components/contact-form7'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Root Consulting Services</title>
        <meta
          name="description"
          content="RootCS: Leading enterprise cloud solutions for digital transformation. Specializing in cloud, data, security, and automation to enhance agility and growth."
        />
        <meta
          property="og:title"
          content="Contact - Root Consulting Services"
        />
        <meta
          property="og:description"
          content="RootCS: Leading enterprise cloud solutions for digital transformation. Specializing in cloud, data, security, and automation to enhance agility and growth."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b428e0cb-b93c-4755-ad61-ab480d92cddc/b82f92f8-435a-4057-b73f-24f6fe619479?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <TopLogo rootClassName="top-logoroot-class-name2"></TopLogo>
      <Navbar8
        link1={
          <Fragment>
            <span className="contact-text10 thq-link thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11 thq-link thq-body-small">
              Services
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text12 thq-link thq-body-small">
              About
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text13 thq-link thq-body-small">
              About
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="contact-text14 thq-body-large">Overview</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="contact-text15 thq-body-large">Culture</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="contact-text16 thq-body-large">Our Work</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="contact-text17 thq-body-large">Page Four</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="contact-text18 thq-link thq-body-small">
              <span>About Us</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact-text21">Contact</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text22">Login</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name3"
        page4Description={
          <Fragment>
            <span className="contact-text23 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
      ></Navbar8>
      <ContactForm7
        email={
          <Fragment>
            <span className="contact-text24 thq-body-small">
              sales@rootcs.org
            </span>
          </Fragment>
        }
        phone={
          <Fragment>
            <span className="contact-text25 thq-body-small">614.963.5765</span>
          </Fragment>
        }
        action={
          <Fragment>
            <span className="contact-text26 thq-body-small">Send</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text27 thq-body-small">
              <span>Get in touch with us</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text30 thq-body-small">
              <span>
                Have a question or need more information?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Reach out to us!</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text34 thq-heading-2">Contact Us</span>
          </Fragment>
        }
      ></ContactForm7>
      <Footer4
        link1={
          <Fragment>
            <span className="contact-text35 thq-body-small">Services</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text36 thq-body-small">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text37 thq-body-small">Contact Us</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Contact
