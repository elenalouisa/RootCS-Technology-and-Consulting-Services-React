import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Component1 from '../components/component1'
import Component3 from '../components/component3'
import AppComponent from '../components/component'
import Navbar8 from '../components/navbar8'
import Component2 from '../components/component2'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Banner1 from '../components/banner1'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
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
      <Component1></Component1>
      <Component3 rootClassName="component3-root-class-name1"></Component3>
      <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
      <img
        alt="image"
        sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
        src="/fulllogo-1500h.webp"
        srcSet="/fulllogo-1500h.webp 1200w, /fulllogo-tablet.webp 800w, /fulllogo-mobile.webp 480w"
        className="home-image"
      />
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text thq-link thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text01 thq-link thq-body-small">
              Services
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text02 thq-link thq-body-small">About</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text03 thq-link thq-body-small">
              About Us
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text04 thq-body-large">Overview</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text05 thq-body-large">Culture</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text06 thq-body-large">Our Work</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text07 thq-body-large">Partners</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="home-text08 thq-link thq-body-small">
              Industries
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text09">Contact</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text10">Login</span>
          </Fragment>
        }
        logoSrc="/fulllogo-1500h.webp"
        expertise1={
          <Fragment>
            <span className="home-text11 thq-link thq-body-small">
              Expertise
            </span>
          </Fragment>
        }
        rootClassName="navbar8-root-class-name"
        page4Description={
          <Fragment>
            <span className="home-text12 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Component2></Component2>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text13 thq-body-small">Get in Touch</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text14 thq-body-small">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text15 thq-body-large">
              We specialize in Cloud, Digital Transformation, ERP, CRM, Big Data
              integration, analysis and analytics, machine learning and AI. Let
              us help you unlock your full potential.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="home-text16 thq-heading-1">
              Your Partner in Technology and Innovation
            </h1>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjc5ODQxNnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        rootClassName="hero17-root-class-name"
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <h2 className="home-text17 thq-heading-2">
              Digital Transformation
            </h2>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text18 thq-heading-2">Process Design</h2>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text19 thq-heading-2">Data and Analytics</h2>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1484417894907-623942c8ee29?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjc5OTU3Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        feature1Description={
          <Fragment>
            <span className="home-text20 thq-body-small">
              Tailored solutions for your digital journey
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text21 thq-body-small">
              Optimize and automate your cloud, ERP, and CRM solutions
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text22 thq-body-small">
              Integrate and visualize data to drive business decisions
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text23">Get in touch</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text24 thq-body-large">
              Contact us today to discuss how Root Consulting Services can help
              you leverage the power of Cloud, Digital Transformation, ERP, CRM,
              Big Data integration, analysis and analytics, machine learning and
              AI.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text25 thq-heading-2">
              Ready to transform your business?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Banner1
        action1={
          <Fragment>
            <span className="home-text26">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <h3 className="home-text27 thq-heading-3">
              Root Consulting Services specializes in providing tailored
              solutions for Cloud, Digital Transformation, ERP, CRM, Big Data
              integration, analysis, and AI.
            </h3>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text28 thq-heading-2">
              Empower Your Business with Advanced Technologies
            </h2>
          </Fragment>
        }
      ></Banner1>
      <Features25
        feature1Title={
          <Fragment>
            <h2 className="home-text29 thq-heading-2">Cloud Solutions</h2>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text30 thq-heading-2">
              Digital Transformation
            </h2>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text31 thq-heading-2">
              Big Data Integration &amp; Analytics
            </h2>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text32 thq-body-small">
              Expertise in designing and implementing cloud solutions tailored
              to meet specific business needs.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text33 thq-body-small">
              Specialized in guiding organizations through digital
              transformation journeys to enhance efficiency and competitiveness.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text34 thq-body-small">
              Proficiency in integrating and analyzing big data to derive
              valuable insights for informed decision-making.
            </span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Title={
          <Fragment>
            <h2 className="home-text35 thq-heading-2">Initial Consultation</h2>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <h2 className="home-text36 thq-heading-2">Solution Design</h2>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <h2 className="home-text37 thq-heading-2">Implementation</h2>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <h2 className="home-text38 thq-heading-2">
              Optimization and Support
            </h2>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text39 thq-body-small">
              Schedule a meeting with our team to discuss your business needs
              and goals.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text40 thq-body-small">
              Our experts will design a customized solution tailored to your
              specific requirements.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text41 thq-body-small">
              We will efficiently implement the solution within the agreed
              timeline and budget.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text42 thq-body-small">
              Continuous monitoring, optimization, and support to ensure your
              business runs smoothly.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text43 thq-body-small">
              Root Consulting Services helped us seamlessly transition to the
              cloud, improving our efficiency and reducing costs. Their
              expertise in digital transformation is unmatched.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text44 thq-body-small">
              We engaged Root Consulting Services for our ERP implementation,
              and they delivered exceptional results. Their team&apos;s
              knowledge of ERP systems is impressive.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text45 thq-body-small">
              Root Consulting Services&apos; expertise in big data integration
              and analytics helped us gain valuable insights for our business.
              Their approach is highly professional and effective.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text46 thq-body-small">
              Working with Root Consulting Services on AI and machine learning
              projects has been a game-changer for our organization. Their
              innovative solutions have significantly enhanced our capabilities.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text47 thq-body-small">
              Root Consulting Services helped us seamlessly transition to the
              cloud, improving our efficiency and reducing costs. Their
              expertise in digital transformation is unmatched.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text48 thq-heading-2">Client Testimonials</h2>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <strong className="home-text49 thq-body-large">John Smith</strong>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <strong className="home-text50 thq-body-large">
              Emily Johnson
            </strong>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <strong className="home-text51 thq-body-large">Michael Lee</strong>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <strong className="home-text52 thq-body-large">Sarah Adams</strong>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text53 thq-body-small">
              CEO, Tech Solutions Inc.
            </span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text54 thq-body-small">
              CFO, Data Insights Co.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text55 thq-body-small">
              CTO, Innovate Now Ltd.
            </span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text56 thq-body-small">
              CMO, Growth Marketing Agency
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text57 thq-body-small">Services</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text58 thq-body-small">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text59 thq-body-small">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text60 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text61 thq-body-small">Terms of Service</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text62 thq-body-small">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text63 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text64 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
