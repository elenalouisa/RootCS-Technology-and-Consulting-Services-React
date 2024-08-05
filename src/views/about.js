import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Logos1 from '../components/logos1'
import Features1 from '../components/features1'
import Team1 from '../components/team1'
import Footer4 from '../components/footer4'
import AppComponent from '../components/component'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Root Consulting Services</title>
        <meta
          name="description"
          content="RootCS: Leading enterprise cloud solutions for digital transformation. Specializing in cloud, data, security, and automation to enhance agility and growth."
        />
        <meta property="og:title" content="About - Root Consulting Services" />
        <meta
          property="og:description"
          content="RootCS: Leading enterprise cloud solutions for digital transformation. Specializing in cloud, data, security, and automation to enhance agility and growth."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b428e0cb-b93c-4755-ad61-ab480d92cddc/b82f92f8-435a-4057-b73f-24f6fe619479?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <img
        alt="image"
        sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
        src="/fulllogo-1500h.webp"
        srcSet="/fulllogo-1500h.webp 1200w, /fulllogo-tablet.webp 800w, /fulllogo-mobile.webp 480w"
        className="about-image"
      />
      <Navbar8
        link1={
          <Fragment>
            <span className="about-text thq-link thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text01 thq-link thq-body-small">
              Services
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text02 thq-link thq-body-small">About</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text03 thq-link thq-body-small">About</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="about-text04 thq-body-large">Overview</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="about-text05 thq-body-large">Culture</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="about-text06 thq-body-large">Our Work</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="about-text07 thq-body-large">Partners</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="about-text08 thq-link thq-body-small">
              Industries
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text09">Contact</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text10">Login</span>
          </Fragment>
        }
        logoSrc="/fulllogo-1500h.webp"
        expertise1={
          <Fragment>
            <span className="about-text11 thq-link thq-body-small">
              Expertise
            </span>
          </Fragment>
        }
        rootClassName="navbar8-root-class-name1"
        page4Description={
          <Fragment>
            <span className="about-text12 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero8
        action1={
          <Fragment>
            <span className="about-text13 thq-body-small">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text14 thq-body-small">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="about-text15 thq-body-large">
              Unlock the full potential of your organization with our tailored
              digital solutions.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="about-text16 thq-heading-1">
              Empower Your Digital Transformation
            </h1>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjgwMDQ0OHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
      ></Hero8>
      <Stats2
        stat1={
          <Fragment>
            <h2 className="about-text17 thq-heading-2">
              Digital Transformation
            </h2>
          </Fragment>
        }
        stat2={
          <Fragment>
            <h2 className="about-text18 thq-heading-2">Cloud Services</h2>
          </Fragment>
        }
        stat3={
          <Fragment>
            <h2 className="about-text19 thq-heading-2">Big Data Integration</h2>
          </Fragment>
        }
        stat4={
          <Fragment>
            <h2 className="about-text20 thq-heading-2">AI Solutions</h2>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text21 thq-body-small">
              Tailored solutions to guide organizations through their digital
              transformation journeys
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <p className="about-text22 thq-body-large">
              Enhancing efficiency and competitiveness
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="about-text23 thq-heading-2">Our Stats</h2>
          </Fragment>
        }
        stat1Description={
          <Fragment>
            <span className="about-text24 thq-body-small">
              Customized solutions for digital transformation
            </span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="about-text25 thq-body-small">
              Cloud Services and ERP/CRM Optimization
            </span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="about-text26 thq-body-small">
              Integrating big data for valuable insights
            </span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="about-text27 thq-body-small">
              Implementing AI solutions for valuable insights
            </span>
          </Fragment>
        }
      ></Stats2>
      <Logos1
        heading1={
          <Fragment>
            <h2 className="about-text28 thq-heading-2">
              Trusted by the world&apos;s best companies
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
          </Fragment>
        }
      ></Logos1>
      <Features1
        slogan={
          <Fragment>
            <span className="about-text29 thq-body-small">
              Empowering Businesses Through Innovation
            </span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="about-text30 thq-body-small">
              Tailored Solutions
            </span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <h2 className="about-text31 thq-heading-2">Key Features</h2>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <h3 className="about-text32 thq-heading-3">Customized Solutions</h3>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h3 className="about-text33 thq-heading-3">Process Optimization</h3>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h3 className="about-text34 thq-heading-3">Data Analytics</h3>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="about-text35 thq-body-small">
              Advanced Technologies
            </span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="about-text36 thq-body-small">
              Discover the key features that set Root Consulting Services apart
              from the rest.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-text37 thq-body-small">
              We provide tailored solutions for each client to enhance
              efficiency and competitiveness.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-text38 thq-body-small">
              Expertise in process optimization to streamline operations and
              maximize productivity.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-text39 thq-body-small">
              Implementing advanced data analytics techniques to drive informed
              decision-making.
            </span>
          </Fragment>
        }
      ></Features1>
      <Team1
        member1={
          <Fragment>
            <span className="about-text40 thq-body-small">John Doe</span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="about-text41 thq-body-small">Jane Smith</span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="about-text42 thq-body-small">Michael Johnson</span>
          </Fragment>
        }
        member4={
          <Fragment>
            <span className="about-text43 thq-body-small">Emily Brown</span>
          </Fragment>
        }
        member5={
          <Fragment>
            <span className="about-text44 thq-body-small">Alex Lee</span>
          </Fragment>
        }
        member6={
          <Fragment>
            <span className="about-text45 thq-body-small">Sarah Wilson</span>
          </Fragment>
        }
        member7={
          <Fragment>
            <span className="about-text46 thq-body-small">David Garcia</span>
          </Fragment>
        }
        member8={
          <Fragment>
            <span className="about-text47 thq-body-small">Olivia Martinez</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text48 thq-body-small">
              Join Our Team Today!
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <p className="about-text49 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="about-text52 thq-body-small">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
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
        heading1={
          <Fragment>
            <h2 className="about-text55 thq-heading-2">Meet Our Team</h2>
          </Fragment>
        }
        heading2={
          <Fragment>
            <h2 className="about-text56 thq-heading-2">We’re hiring!</h2>
          </Fragment>
        }
        member1Job={
          <Fragment>
            <span className="about-text57 thq-body-small">CEO</span>
          </Fragment>
        }
        member2Job={
          <Fragment>
            <span className="about-text58 thq-body-small">CTO</span>
          </Fragment>
        }
        member3Job={
          <Fragment>
            <span className="about-text59 thq-body-small">Data Analyst</span>
          </Fragment>
        }
        member4Job={
          <Fragment>
            <span className="about-text60 thq-body-small">ERP Specialist</span>
          </Fragment>
        }
        member5Job={
          <Fragment>
            <span className="about-text61 thq-body-small">CRM Consultant</span>
          </Fragment>
        }
        member6Job={
          <Fragment>
            <span className="about-text62 thq-body-small">AI Engineer</span>
          </Fragment>
        }
        member7Job={
          <Fragment>
            <span className="about-text63 thq-body-small">Cloud Architect</span>
          </Fragment>
        }
        member8Job={
          <Fragment>
            <span className="about-text64 thq-body-small">
              Business Analyst
            </span>
          </Fragment>
        }
        actionContent={
          <Fragment>
            <span className="about-text65 thq-body-small">Open positions</span>
          </Fragment>
        }
        member1Content={
          <Fragment>
            <span className="about-text66 thq-body-small">
              John is a visionary leader with a strong background in digital
              transformation strategies.
            </span>
          </Fragment>
        }
        member2Content={
          <Fragment>
            <span className="about-text67 thq-body-small">
              Jane brings extensive technical expertise in cloud services and
              AI.
            </span>
          </Fragment>
        }
        member3Content={
          <Fragment>
            <span className="about-text68 thq-body-small">
              Michael excels in big data integration and analytics, driving
              actionable insights for clients.
            </span>
          </Fragment>
        }
        member4Content={
          <Fragment>
            <span className="about-text69 thq-body-small">
              Emily specializes in ERP solutions, optimizing business processes
              for efficiency.
            </span>
          </Fragment>
        }
        member5Content={
          <Fragment>
            <span className="about-text70 thq-body-small">
              Alex is dedicated to enhancing customer relationships through CRM
              implementations.
            </span>
          </Fragment>
        }
        member6Content={
          <Fragment>
            <span className="about-text71 thq-body-small">
              Sarah leverages AI technologies to drive innovation and automation
              for clients.
            </span>
          </Fragment>
        }
        member7Content={
          <Fragment>
            <span className="about-text72 thq-body-small">
              David designs scalable cloud solutions to support digital
              transformation initiatives.
            </span>
          </Fragment>
        }
        member8Content={
          <Fragment>
            <span className="about-text73 thq-body-small">
              Olivia provides strategic insights for businesses looking to
              improve competitiveness.
            </span>
          </Fragment>
        }
      ></Team1>
      <Footer4
        link1={
          <Fragment>
            <span className="about-text74 thq-body-small">Services</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text75 thq-body-small">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text76 thq-body-small">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text77 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="about-text78 thq-body-small">
              Terms of Service
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="about-text79 thq-body-small">
              Terms of Service
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="about-text80 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="about-text81 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
      <AppComponent rootClassName="app-component-root-class-name2"></AppComponent>
    </div>
  )
}

export default About
