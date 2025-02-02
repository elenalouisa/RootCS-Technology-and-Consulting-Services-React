import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import TopLogo from '../components/top-logo'
import Navbar8 from '../components/navbar8'
import AppComponent from '../components/component'
import Footer4 from '../components/footer4'
import './schedule.css'

const Schedule = (props) => {
  return (
    <div className="schedule-container">
      <Helmet>
        <title>Schedule - Root Consulting Services</title>
        <meta
          name="description"
          content="RootCS: Leading enterprise cloud solutions for digital transformation. Specializing in cloud, data, security, and automation to enhance agility and growth."
        />
        <meta
          property="og:title"
          content="Schedule - Root Consulting Services"
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
      <TopLogo rootClassName="top-logoroot-class-name4"></TopLogo>
      <Navbar8
        link1={
          <Fragment>
            <span className="schedule-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="schedule-text11">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="schedule-text12">About</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="schedule-text13">About</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="schedule-text14">Overview</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="schedule-text15">Culture</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="schedule-text16">Our Work</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="schedule-text17">Page Four</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="schedule-text18">
              <span>About Us</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="schedule-text21">Contact</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="schedule-text22">Login</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="schedule-text23">Schedule</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name5"
        page4Description={
          <Fragment>
            <span className="schedule-text24">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <AppComponent rootClassName="app-componentroot-class-name"></AppComponent>
      <Footer4
        link1={
          <Fragment>
            <span className="schedule-text25">Services</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="schedule-text26">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="schedule-text27">Contact Us</span>
          </Fragment>
        }
        rootClassName="footer4root-class-name"
      ></Footer4>
    </div>
  )
}

export default Schedule
