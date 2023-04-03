import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import blockChainImage from "../../Assests/Workshop.jpg";

const workshopData = {
  title: "BLOCK CHAIN WORKSHOP",
  desc: "This Web3.0 and Blockchain workshop is an educational event aimed at providing a solid foundation in Web3 and blockchain technology. Attendees engage in hands-on activities and hear from industry experts, with a focus on exploring potential applications. Workshops also provide networking opportunities within the Web3 and blockchain community.",
  img: blockChainImage,
};

const Workshops = () => {
  return (
    <div className="event-page--container">
      <Navbar />
      <div className="anim-main-container">
        <h1 className="glitch heading-atrang-main">
          <span aria-hidden="true"> workshop</span>
          workshop
          <span aria-hidden="true"> workshop</span>
        </h1>
      </div>
      <div className="event-card--conatiner">
        <section class="record">
          <div class="record-arrow"></div>
          <div
            id="record1"
            class="record-display"
            style={{ backgroundImage: `url(${blockChainImage})` }}
          ></div>
          <div class="record-desc">
            <h1>{workshopData?.title}</h1>
            <p>{workshopData?.desc}</p>
          </div>
        </section>
      </div>
      <hr className="hr" />
      <Footer />
    </div>
  );
};

export default Workshops;
