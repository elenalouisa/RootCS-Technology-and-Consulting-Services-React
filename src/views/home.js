import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import TopLogo from '../components/top-logo'
import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Stats21 from '../components/stats21'
import Features24 from '../components/features24'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Root Consulting Services</title>
        <meta
          name="description"
          content="RootCS: Leading enterprise cloud solutions for digital transformation. Specializing in cloud, data, security, and automation to enhance agility and growth."
        />
        <meta property="og:title" content="Root Consulting Services" />
        <meta
          property="og:description"
          content="RootCS: Leading enterprise cloud solutions for digital transformation. Specializing in cloud, data, security, and automation to enhance agility and growth."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b428e0cb-b93c-4755-ad61-ab480d92cddc/b82f92f8-435a-4057-b73f-24f6fe619479?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <TopLogo rootClassName="top-logoroot-class-name"></TopLogo>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10 thq-link thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11 thq-link thq-body-small">
              Services
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12 thq-link thq-body-small">About</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13 thq-link thq-body-small">About</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14 thq-body-large">Overview</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15 thq-body-large">Culture</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16 thq-body-large">Our Work</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17 thq-body-large">Page Four</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="home-text18 thq-link thq-body-small">
              <span>About Us</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text21">Contact</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text22">Login</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name"
        page4Description={
          <Fragment>
            <span className="home-text23 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        heading1={
          <Fragment>
            <span className="home-text24 thq-heading-1">
              <span>Codify. Everything.</span>
              <br></br>
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text27 thq-body-small">Learn More</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text28 thq-body-small">Get in Touch</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text29 thq-body-large">
              We guide organizations through digital transformation journeys to
              empower businesses.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        rootClassName="hero17root-class-name"
      ></Hero17>
      <Stats21
        content1={
          <Fragment>
            <span className="home-text30 thq-body-small">
              Tailored solutions for cloud, ERP, CRM, and HCM
            </span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="home-text31 thq-body-small">
              With a wealth of expertise accumulated over many years in the
              industry, our team at Root Consulting Services brings a depth of
              experience to every project we undertake. Our seasoned
              professionals have honed their skills through a wide range of
              challenges and successes, allowing us to offer unparalleled
              insights and solutions to our clients. Trust in our years of
              experience to guide your business through a successful digital
              transformation journey.
            </span>
          </Fragment>
        }
        stat2={
          <Fragment>
            <span className="home-text32 thq-heading-2">Expertise</span>
          </Fragment>
        }
        stat21={
          <Fragment>
            <span className="home-text33 thq-heading-2">Satisfaction</span>
          </Fragment>
        }
        stat2Description1={
          <Fragment>
            <span className="home-text34 thq-body-small">
              We have received overwhelmingly positive feedback from our
              satisfied clients who have experienced the benefits of our
              tailored digital transformation solutions. Their testimonials
              highlight the success of our cloud services, ERP, CRM, and HCM
              implementations, as well as the impact of our process
              optimization, data analytics, and innovative problem-solving on
              their organizations&apos; digital journey.
            </span>
          </Fragment>
        }
        rootClassName="stats21root-class-name"
        stat212={
          <Fragment>
            <span className="home-text35 thq-heading-2">Innovation</span>
          </Fragment>
        }
        stat2Description12={
          <Fragment>
            <span className="home-text36 thq-body-small">
              Innovative problem-solving techniques that push boundaries and
              drive business growth
            </span>
          </Fragment>
        }
      ></Stats21>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text37 thq-heading-2">
              Digital Transformation
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text38 thq-heading-2">Process Design</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text39 thq-heading-2">
              Data and Analytics
            </span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1484417894907-623942c8ee29?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjc5OTU3Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        feature1Description={
          <Fragment>
            <span className="home-text40 thq-body-small">
              Tailored solutions for your digital journey
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text41 thq-body-small">
              Optimize and automate your cloud, ERP, and CRM solutions
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text42 thq-body-small">
              Integrate and visualize data to drive business decisions
            </span>
          </Fragment>
        }
      ></Features24>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text43 thq-body-small">Services</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text44 thq-body-small">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text45 thq-body-small">Contact Us</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
