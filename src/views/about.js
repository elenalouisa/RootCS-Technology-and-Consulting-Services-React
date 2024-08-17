import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import TopLogo from '../components/top-logo'
import Navbar8 from '../components/navbar8'
import Hero8 from '../components/hero8'
import ContentList1 from '../components/content-list1'
import Features1 from '../components/features1'
import CTA26 from '../components/cta26'
import Footer4 from '../components/footer4'
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
      <TopLogo rootClassName="top-logoroot-class-name3"></TopLogo>
      <Navbar8
        link1={
          <Fragment>
            <span className="about-text10 thq-link thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text11 thq-link thq-body-small">
              Services
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text12 thq-link thq-body-small">About</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text13 thq-link thq-body-small">About</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="about-text14 thq-body-large">Overview</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="about-text15 thq-body-large">Culture</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="about-text16 thq-body-large">Our Work</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="about-text17 thq-body-large">Partners</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="about-text18 thq-link thq-body-small">
              <span>About Us</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text21">Contact</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text22">Login</span>
          </Fragment>
        }
        logoSrc="/fulllogo-1500h.webp"
        rootClassName="navbar8root-class-name1"
        page4Description={
          <Fragment>
            <span className="about-text23 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="about-text24">Schedule</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero8
        heading1={
          <Fragment>
            <span className="about-text25 thq-heading-1">About Us</span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1710497626368-12404890be90?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg0Mjg4OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
      ></Hero8>
      <ContentList1
        content1={
          <Fragment>
            <span className="about-text26 thq-body-small">
              Root Consulting Services is a leading company that specializes in
              guiding organizations through digital transformation journeys.
              With a focus on cloud services, ERP, CRM, and HCM solutions, we
              help businesses optimize their processes and leverage data and
              analytics to drive success.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text27 thq-body-small">
              At Root Consulting Services, we believe in providing tailored
              solutions to meet the unique needs of each organization. Our
              methodology ensures that our clients receive customized strategies
              that enhance efficiency and competitiveness in the digital
              landscape.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="about-text28 thq-body-small">
              We offer a range of services including cloud services, ERP
              implementation, CRM solutions, and HCM optimization. Our team of
              experts is dedicated to helping businesses harness the power of
              technology to achieve their goals.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="about-text29 thq-body-small">
              Our focus on process optimization sets us apart. We work closely
              with our clients to streamline their operations, improve
              workflows, and drive productivity. By optimizing processes, we
              help businesses achieve sustainable growth and success.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="about-text30 thq-body-small">
              Data is at the core of everything we do. We help organizations
              leverage data and analytics to gain valuable insights, make
              informed decisions, and drive innovation. Our data-driven approach
              empowers businesses to stay ahead in a competitive market.
            </span>
          </Fragment>
        }
        content6={
          <Fragment>
            <span className="about-text31 thq-body-small">
              We understand that every business is unique. That&apos;s why we
              offer customized solutions that are tailored to the specific needs
              of each organization. Our goal is to deliver results that exceed
              expectations and drive long-term success.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text32 thq-heading-2">Who We Are</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="about-text33 thq-heading-3">Our Approach</span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="about-text34 thq-heading-3">Services Offered</span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="about-text35 thq-heading-3">
              Process Optimization
            </span>
          </Fragment>
        }
        heading5={
          <Fragment>
            <span className="about-text36 thq-heading-3">
              Data and Analytics
            </span>
          </Fragment>
        }
        heading6={
          <Fragment>
            <span className="about-text37 thq-heading-3">
              Customized Solutions
            </span>
          </Fragment>
        }
        rootClassName="content-list1root-class-name"
      ></ContentList1>
      <Features1
        sectionTitle={
          <Fragment>
            <span className="about-text38 thq-heading-2">Key Features</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-text39 thq-heading-3">
              Customized Solutions
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="about-text40 thq-heading-3">
              Optimized Efficiency
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-text41 thq-heading-3">Business Value</span>
          </Fragment>
        }
        feature1ImageSrc="https://images.unsplash.com/photo-1639815188508-13f7370f664a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg0MzY0Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        feature2ImageSrc="/SubPics/2149352654-300h.webp"
        feature3ImageSrc="/SubPics/14274%20(1)-300h.webp"
        sectionDescription={
          <Fragment>
            <span className="about-text42 thq-body-small">
              Discover the key features that set Root Consulting Services apart
              from the rest.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-text43 thq-body-small">
              We provide tailored solutions for each client to enhance
              efficiency and competitiveness.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-text44 thq-body-small">
              We provide expertise in process design and optimization to
              streamline operations and maximize productivity.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-text45 thq-body-small">
              We identify and cultivate our solutions to deliver you cost
              savings and revenue growth.
            </span>
          </Fragment>
        }
      ></Features1>
      <CTA26
        action1={
          <Fragment>
            <span className="about-text46">Get in touch</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text47 thq-body-large">
              Contact us today to discuss how Root Consulting Services can help
              you leverage the power of Cloud, Digital Transformation, ERP, CRM,
              Big Data integration, analysis and analytics, machine learning and
              AI.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text48 thq-heading-2">
              Ready to transform your business?
            </span>
          </Fragment>
        }
        rootClassName="cta26root-class-name"
      ></CTA26>
      <Footer4
        link1={
          <Fragment>
            <span className="about-text49 thq-body-small">Services</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text50 thq-body-small">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text51 thq-body-small">Contact Us</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default About
