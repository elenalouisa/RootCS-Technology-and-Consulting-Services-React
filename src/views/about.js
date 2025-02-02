import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import TopLogo from '../components/top-logo'
import Navbar8 from '../components/navbar8'
import Hero8 from '../components/hero8'
import ContentList1 from '../components/content-list1'
import Steps2 from '../components/steps2'
import Features1 from '../components/features1'
import Logos2 from '../components/logos2'
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
            <span className="about-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text11">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text12">About</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text13">About</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="about-text14">Overview</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="about-text15">Culture</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="about-text16">Our Work</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="about-text17">Partners</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="about-text18">
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
        action11={
          <Fragment>
            <span className="about-text23">Schedule</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name1"
        page4Description={
          <Fragment>
            <span className="about-text24">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero8
        heading1={
          <Fragment>
            <span className="about-text25">About Us</span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1710497626368-12404890be90?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg0Mjg4OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
      ></Hero8>
      <ContentList1
        content1={
          <Fragment>
            <span className="about-text26">
              Root Consulting Services was founded on the belief that every
              digital transformation starts at the roots. With decades of
              combined expertise in IT strategy, DevOps, ERP/CRM integrations,
              AI implementations, and advanced analytics, our team is dedicated
              to helping IT companies modernize and thrive. Our holistic
              approach ensures that every solution is tailored to your unique
              challenges and goals.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text27">
              Our mission is to empower IT companies by transforming the way
              they understand and implement technology. We strive to guide
              organizations through every phase of their digital
              transformation—ensuring that each project not only meets immediate
              needs but also evolves into a mature, efficient solution over
              time. Our vision is to be recognized as a trusted partner that
              demystifies technology, fosters innovation, and creates lasting
              value for businesses worldwide.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="about-text28">
              Founded by industry veterans with a passion for digital
              innovation, Root emerged from a desire to do more than just
              implement isolated projects. Since our inception, we have evolved
              into a comprehensive IT consulting firm that not only executes
              technology solutions, but also educates and guides organizations
              toward achieving their strategic goals. Over the years, we have
              celebrated numerous milestones—from launching our first tailored
              digital transformation roadmap to partnering with leading
              technology providers. Each step in our journey has reinforced our
              commitment to excellence and continuous improvement.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="about-text29">
              <span>
                Root&apos;s core values drive every decision we make and every
                project we undertake:
              </span>
              <br></br>
              <br></br>
              <span className="about-text33">Transparency</span>
              <span>
                : We believe in clear, honest communication at every stage of
                the process.
              </span>
              <br></br>
              <span className="about-text36">Collaboration</span>
              <span>
                : Working closely with your team is essential to understanding
                your unique needs and delivering the best outcomes.
              </span>
              <br></br>
              <span className="about-text39">Continuous Learning</span>
              <span>
                : We invest in ongoing education and development to stay ahead
                of technological trends.
              </span>
              <br></br>
              <span className="about-text42">Customer-Centricity</span>
              <span>
                : Your goals are our priority, and we tailor our strategies to
                ensure your long-term success.
              </span>
              Our focus on process optimization sets us apart. We work closely
              with our clients to streamline their operations, improve
              workflows, and drive productivity. By optimizing processes, we
              help businesses achieve sustainable growth and success.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="about-text44">
              Our team is comprised of seasoned professionals who bring a wealth
              of expertise in IT strategy, implementation, and digital
              transformation. From strategic consultants, enterprise architects,
              and technical specialists to dedicated program managers, every
              member of Root is committed to guiding you on your journey to
              digital excellence.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        content6={
          <Fragment>
            <span className="about-text45">
              At Root, we are always looking ahead. Our future plans involve
              expanding our service offerings, exploring new technologies, and
              deepening our commitment to sustainable digital transformation. As
              the IT landscape continues to evolve, we are excited to lead our
              clients into new opportunities, ensuring that they remain agile
              and competitive in an ever-changing market.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text46">Who We Are</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="about-text47">Our Mission</span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="about-text48">
              Company History &amp; Milestones
            </span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="about-text49">Our Values</span>
          </Fragment>
        }
        heading5={
          <Fragment>
            <span className="about-text50">Our Team</span>
          </Fragment>
        }
        heading6={
          <Fragment>
            <span className="about-text51">Our Future</span>
          </Fragment>
        }
        rootClassName="content-list1root-class-name"
      ></ContentList1>
      <Steps2
        step1Title={
          <Fragment>
            <span className="about-text52">Discover &amp; Assess</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="about-text53">Educate &amp; Strategize</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="about-text54"> Implement &amp; Guide</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="about-text55">Continuous Improvement</span>
          </Fragment>
        }
        rootClassName="steps2root-class-name"
        step1Description={
          <Fragment>
            <span className="about-text56">
              This discovery phase is about understanding your unique
              environment and identifying opportunities where best practices and
              new technologies can make a difference.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="about-text57">
              Armed with insights from the assessment phase, we craft a bespoke
              strategy that outlines the optimal path forward. This roadmap is
              not a one-size-fits-all solution—it’s tailored to your
              organization’s needs, outlining clear milestones, key performance
              indicators, and a phased approach to implementation.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="about-text58">
              Implementation is just the beginning. We stay by your side,
              providing hands-on guidance as your new solution takes shape. Our
              goal is to ensure that your team not only uses the technology but
              understands its full potential, making adjustments as your
              organization evolves.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="about-text59">
              Our commitment to your success doesn’t end with deployment. We
              offer continuous support, training, and strategic adjustments to
              help your solutions mature over time. By partnering for the long
              term, we ensure that you not only meet today’s challenges but are
              also prepared for tomorrow’s opportunities.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Features1
        sectionTitle={
          <Fragment>
            <span className="about-text60">Our Focus</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-text61">Business Transformation</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="about-text62">Operational Excellence</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-text63">Future Readiness </span>
          </Fragment>
        }
        feature1ImageSrc="https://images.unsplash.com/photo-1639815188508-13f7370f664a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzg0MzY0Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        feature2ImageSrc="/SubPics/2149352654-300h.webp"
        feature3ImageSrc="/SubPics/14274%20(1)-300h.webp"
        sectionDescription={
          <Fragment>
            <span className="about-text64">
              <span>
                We’re dedicated to driving business value by aligning outcomes
                with your strategic objectives. Our approach centers on three
                key focus areas that ensure every solution we deliver not only
                meets your current needs, but also sets the stage for long-term
                success. 
              </span>
              <span>
                By concentrating on these areas, Root transforms technology into
                a strategic asset that drives business success - today and for
                the future.
              </span>
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-text67">
              We focus on empowering your organization through meaningful
              digital transformation. By aligning IT strategies with your
              business goals, we help you reimagine operations, unlock new
              revenue streams, and enhance customer experiences. Our
              collaborative process ensures that every technological enhancement
              directly contributes to improved business outcomes and a
              competitive edge in your market.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-text68">
              Efficiency is at the heart of our approach. We streamline
              processes and integrate systems to reduce redundancies and
              optimize performance. By leveraging data-driven insights and best
              practices, we guide you toward operational excellence—ensuring
              your technology investments result in measurable improvements in
              productivity, cost savings, and overall operational agility.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-text69">
              In a rapidly evolving digital landscape, preparing for the future
              is essential. We focus on equipping your business with the
              flexibility and resilience needed to adapt to emerging
              technologies and market trends. From continuous process
              improvement to scalable IT architectures, our solutions are
              designed to evolve alongside your business, ensuring you remain
              agile and competitive in the face of new challenges and
              opportunities.
            </span>
          </Fragment>
        }
      ></Features1>
      <Logos2
        heading1={
          <Fragment>
            <span className="about-text70">Our Partners</span>
          </Fragment>
        }
        rootClassName="logos2root-class-name1"
      ></Logos2>
      <CTA26
        action1={
          <Fragment>
            <span className="about-text71">Get in touch</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text72">
              Contact us today to discuss how Root Consulting Services can help
              you leverage the power of Cloud, Digital Transformation, ERP, CRM,
              Big Data integration, analysis and analytics, machine learning and
              AI.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text73">
              Ready to transform your business?
            </span>
          </Fragment>
        }
        rootClassName="cta26root-class-name"
      ></CTA26>
      <Footer4
        link1={
          <Fragment>
            <span className="about-text74">Services</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text75">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text76">Contact Us</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default About
