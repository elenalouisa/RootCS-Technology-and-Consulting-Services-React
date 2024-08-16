import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import TopLogo from '../components/top-logo'
import Navbar8 from '../components/navbar8'
import Hero9 from '../components/hero9'
import Features1 from '../components/features1'
import ContentList11 from '../components/content-list11'
import Logos2 from '../components/logos2'
import CTA26 from '../components/cta26'
import Footer4 from '../components/footer4'
import './services.css'

const Services = (props) => {
  return (
    <div className="services-container">
      <Helmet>
        <title>Services - Root Consulting Services</title>
        <meta
          name="description"
          content="RootCS: Leading enterprise cloud solutions for digital transformation. Specializing in cloud, data, security, and automation to enhance agility and growth."
        />
        <meta
          property="og:title"
          content="Services - Root Consulting Services"
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
      <TopLogo rootClassName="top-logoroot-class-name1"></TopLogo>
      <Navbar8
        link1={
          <Fragment>
            <span className="services-text10 thq-link thq-body-small">
              Home
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="services-text11 thq-link thq-body-small">
              Services
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="services-text12 thq-link thq-body-small">
              About
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="services-text13 thq-link thq-body-small">
              About
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="services-text14 thq-body-large">Overview</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="services-text15 thq-body-large">Culture</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="services-text16 thq-body-large">Our Work</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="services-text17 thq-body-large">Page Four</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="services-text18 thq-link thq-body-small">
              <span>About Us</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="services-text21">Contact</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="services-text22">Login</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name4"
        page4Description={
          <Fragment>
            <span className="services-text23 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero9
        content1={
          <Fragment>
            <span className="services-text24 thq-body-large">
              Guiding organizations through digital transformation journeys with
              tailored solutions for cloud services, ERP, CRM, and big data
              integration.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="services-text25 thq-heading-1">
              <span className="services-text26">Our Services</span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="hero9root-class-name"
      ></Hero9>
      <Features1
        sectionTitle={
          <Fragment>
            <span className="services-text28 thq-heading-2">Key Features</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="services-text29 thq-heading-3">
              Cloud Solutions
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="services-text30 thq-heading-3">
              Process Optimization
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="services-text31 thq-heading-3">
              Integration Solutions
            </span>
          </Fragment>
        }
        rootClassName="features1root-class-name"
        sectionDescription={
          <Fragment>
            <span className="services-text32 thq-body-small">
              Discover the key features that set Root Consulting Services apart
              from the rest.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="services-text33 thq-body-small">
              We provide tailored solutions for each client to enhance
              efficiency and competitiveness.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="services-text34 thq-body-small">
              Expertise in process optimization to streamline operations and
              maximize productivity.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="services-text35 thq-body-small">
              Implementing advanced data analytics techniques to drive informed
              decision-making.
            </span>
          </Fragment>
        }
      ></Features1>
      <ContentList11
        content1={
          <Fragment>
            <span className="services-text36 thq-body-small">
              Root Consulting Services offers customized solutions to support
              businesses in their digital transformation journey. Whether
              it&apos;s cloud services, ERP, CRM, or HCM, we provide tailored
              strategies to meet your specific needs.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="services-text37 thq-body-small">
              With a focus on cloud services, ERP, CRM, and HCM, Root Consulting
              Services brings expertise in these key areas of technology. Our
              specialization allows us to deliver high-quality solutions that
              drive business growth.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="services-text38 thq-body-small">
              We help businesses optimize their processes and harness the power
              of data analytics for informed decision-making. Our services
              enable organizations to streamline operations and unlock valuable
              insights from their data.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="services-text39 thq-body-small">
              At Root Consulting Services, our mission is to empower businesses
              through technology. We believe that leveraging the right tools and
              solutions can drive innovation, efficiency, and success for our
              clients.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="services-text40 thq-body-small">
              Root Consulting Services stands out for its commitment to
              delivering exceptional results for clients. With a focus on
              innovation, quality, and client satisfaction, we are the partner
              of choice for businesses seeking digital transformation.
            </span>
          </Fragment>
        }
        content6={
          <Fragment>
            <span className="services-text41 thq-body-small">
              Ready to take your business to the next level? Contact Root
              Consulting Services today to begin your digital transformation
              journey. Let us help you unlock the full potential of technology
              for your organization.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="services-text42 thq-heading-2">
              Tailored Solutions for Digital Transformation
            </span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="services-text43 thq-heading-3">
              Specializing in Cloud Services and More
            </span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="services-text44 thq-heading-3">
              Process Optimization and Data Analytics
            </span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="services-text45 thq-heading-3">
              Empowering Businesses Through Technology
            </span>
          </Fragment>
        }
        heading5={
          <Fragment>
            <span className="services-text46 thq-heading-3">
              Why Choose Root Consulting Services?
            </span>
          </Fragment>
        }
        heading6={
          <Fragment>
            <span className="services-text47 thq-heading-3">
              Get Started on Your Digital Transformation Journey
            </span>
          </Fragment>
        }
      ></ContentList11>
      <Logos2
        heading1={
          <Fragment>
            <span className="services-text48 thq-heading-2">Our Partners</span>
          </Fragment>
        }
        rootClassName="logos2root-class-name"
      ></Logos2>
      <CTA26
        heading1={
          <Fragment>
            <span className="services-text49 thq-heading-2">
              Ready to transform your business?
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="services-text50">Get in touch</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="services-text51 thq-body-large">
              Contact us today to explore how Root Consulting Services can
              enhance your digital transformation.
            </span>
          </Fragment>
        }
        rootClassName="cta26root-class-name1"
      ></CTA26>
      <Footer4
        link1={
          <Fragment>
            <span className="services-text52 thq-body-small">Services</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="services-text53 thq-body-small">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="services-text54 thq-body-small">Contact Us</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Services
