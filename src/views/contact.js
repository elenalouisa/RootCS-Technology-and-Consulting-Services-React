import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import TopLogo from '../components/top-logo'
import Navbar8 from '../components/navbar8'
import Contact15 from '../components/contact15'
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
            <span className="contact-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text12">About</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text13">About</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="contact-text14">Overview</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="contact-text15">Culture</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="contact-text16">Our Work</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="contact-text17">Page Four</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="contact-text18">
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
        action11={
          <Fragment>
            <span className="contact-text23">Schedule</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name3"
        page4Description={
          <Fragment>
            <span className="contact-text24">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Contact15
        email1={
          <Fragment>
            <span className="contact-text25">sales@rootcs.org</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="contact-text26">614-489-9007</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text27">
              <span>
                Let us partner with you to drive innovation, optimize processes,
                and leverage data analytics for sustainable business growth.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Your success is our priority, and we look forward to hearing
                from you.
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text32">Contact Us</span>
          </Fragment>
        }
      ></Contact15>
      <Footer4
        link1={
          <Fragment>
            <span className="contact-text33">Services</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text34">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text35">Contact Us</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Contact
