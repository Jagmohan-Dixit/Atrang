import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import CrownGrey from "../../Assests/crownGrey.png";
import HomeAnimation from "../../components/HomeAnimation/HomeAnimation";
import Video2 from "../../Assests/videoB.mp4";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Video from "../../Assests/AtrangVideo.mp4";
import TechCouncil from "../TechCouncil/TechCouncil";
import WebTeam from "../AtrangWebTeam/WebTeam";

const HomePage = ({
  aboutSection,
  organizerSection,
  gotoAbout,
  gotoOrganizer,
}) => {
  return (
    <>
      <div className="homepage-container">
        <Navbar about={gotoAbout} org={gotoOrganizer} />
        <div className="bg-video">
          <video className="bg-video--content" autoPlay muted loop>
            <source src={Video2} type="video/mp4" />
            Your browser is not supported the video format
          </video>
        </div>
        <div className="home-section-one">
          <div className="crown-container">
            <div className="crown-line line-left"></div>
            <img className="crown-img " src={CrownGrey} alt="Crown" />
            <div className="crown-line line-right"></div>
          </div>
          <HomeAnimation />
          <div className="crown-line line-bottom"></div>
        </div>
      </div>
      <div style={{ height: 100, width: "100%" }}></div>
      <hr className="hr organizer-hr" />
      <div ref={aboutSection} className="home-section-two">
        <div className="border-container atrang-sec">
          <h1 className="section-heading">What is Atrang?</h1>
          <p className="section-para">
            ATRANG is the annual technical fest of IIIT, Tiruchirappalli. It is
            a stage to showcase and encourage young talent. It brings forward a
            communal platform to compete and learn together. ATRANG is filled
            with exciting events such as a coding contest, hackathon, pitch your
            Start-up, and many more. It gives the contributors and audience a
            chance to think out of the box and bring new ideas to the limelight.
          </p>
        </div>
      </div>
      <hr className="hr" />
      <div className="home-section-two video-section-two">
        <div className="border-container coming-soon--border">
          <video className="cs-video--content" autoPlay muted loop>
            <source src={Video} type="video/mp4" />
            Your browser is not supported the video format
          </video>
        </div>
      </div>
      <hr className="hr organizer-hr" />
      <TechCouncil />
      <WebTeam />
      {/* <hr className="hr organizer-hr" />
      <div ref={organizerSection} className="home-section-two">
        <div className="border-container organizer-border">
          <h1 className="section-heading heading-organizer">
            become an organizer
          </h1>
          <p className="section-para margin-utility">
            <i>“Work hard in silence & let success make the noise”</i>, It is
            time for that noise to echo and reach the world. The technical fest
            of IIIT Tiruchirappalli is eagerly awaiting to carry it further.
            ATRANG, our technical fest is here with many exciting competitions
            and events to bring out the hidden talents. Aboard the plane with us
            to raise these talents to the sky. Come forward and join us as an
            organizer.
          </p>
          <div className="home-button--container">
            <Button title="know about events" link="/events" />

            <Button
              title="apply now"
              link="https://forms.gle/KQb5MywwzyMNpPNX9"
            />
          </div>
        </div>
      </div> */}
      <hr className="hr" />
      <Footer about={gotoAbout} org={gotoOrganizer} />
    </>
  );
};

export default HomePage;
