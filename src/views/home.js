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
            <span className="home-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">About</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">About</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Overview</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">Culture</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">Our Work</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Page Four</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="home-text18">
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
        action11={
          <Fragment>
            <span className="home-text23">Schedule</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name"
        page4Description={
          <Fragment>
            <span className="home-text24">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text25">Get in Touch</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text26">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text27">
              At Root, we empower IT companies with innovative strategies,
              seamless technology integrations, and optimized processes that
              drive digital transformation. We’re here to cultivate success from
              the ground up—planting the seeds today for a robust, future-proof
              tomorrow.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text28">
              <span>Where IT innovation takes Root.</span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="hero17root-class-name"
      ></Hero17>
      <Stats21
        stat2={
          <Fragment>
            <span className="home-text31">Deep Expertise</span>
          </Fragment>
        }
        stat21={
          <Fragment>
            <span className="home-text32">Holistic Partnership</span>
          </Fragment>
        }
        stat212={
          <Fragment>
            <span className="home-text33">Future-Ready</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text34">
              Root&apos;s commitment to excellence is underscored by our
              dedication to delivering measurable value and continuously raising
              the bar in IT consulting.
            </span>
          </Fragment>
        }
        rootClassName="stats21root-class-name"
        stat2Description={
          <Fragment>
            <span className="home-text35">
              We leverage a wealth of experience and specialized knowledge
              across all the technologies businesses use today. Our team’s deep
              industry expertise and commitment to staying abreast of the latest
              technological advancements ensure that you benefit from proven
              best practices and innovative solutions tailored to your unique
              challenges.
            </span>
          </Fragment>
        }
        stat2Description1={
          <Fragment>
            <span className="home-text36">
              We believe in partnering with you from start to finish, offering
              end-to-end support throughout your digital transformation journey.
              From initial assessments and strategy development to seamless
              implementation and continuous optimization, our collaborative
              approach ensures that your insights and business needs shape the
              solutions we deliver, resulting in a smooth and effective
              transition.
            </span>
          </Fragment>
        }
        stat2Description12={
          <Fragment>
            <span className="home-text37">
              We&apos;re dedicated to equipping your business for the future by
              integrating cutting-edge technologies and fostering sustainable
              growth. Our solutions are designed to deliver immediate impact and
              long-term success, building a resilient infrastructure that adapts
              to evolving market demands. With a focus on data-driven decisions
              and continuous improvement, we ensure your IT operations remain
              efficient, competitive, and poised for future challenges.
            </span>
          </Fragment>
        }
      ></Stats21>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text38">
              Goal Alignment &amp; Development
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text39">Strategic Execution &amp; Drive</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text40">Comprehensive Delivery</span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1484417894907-623942c8ee29?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjc5OTU3Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        feature1Description={
          <Fragment>
            <span className="home-text41">
              Unlike many IT consulting firms that excel at executing isolated
              projects, we begin by helping you clearly define your objectives
              and outcomes. We work closely with your leadership team to uncover
              the core business goals and challenges that drive your
              organization. By developing a deep understanding of your vision,
              we ensure that every technological initiative is rooted in a
              well-defined, overarching purpose.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text42">
              Once your goals are established, we transition into a
              collaborative process to drive these objectives forward. Our
              approach is not just about implementing technology—it’s about
              guiding your organization through a continuous journey of
              transformation. We craft tailored strategies that integrate with
              your existing operations, ensuring that every project is aligned
              with your long-term vision and designed to deliver measurable
              business value.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text43">
              Our commitment extends beyond individual project success. We take
              a holistic view of your entire IT ecosystem to ensure that each
              project, no matter how targeted, contributes to the broader
              strategic goals. By coordinating efforts across all initiatives,
              we provide ongoing oversight, performance analysis, and iterative
              improvements. This guarantees that every piece of the puzzle not
              only fits perfectly but also evolves with your business, driving
              sustained growth and operational excellence.
            </span>
          </Fragment>
        }
      ></Features24>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text44">Services</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text45">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text46">Contact Us</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
