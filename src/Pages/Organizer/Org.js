import React from "react";
import "./Org.css";
import OrgCard from "../../components/OrgCard/OrgCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Slavanya from "../../Assests/lavanya3.png";
import MayankS from "../../Assests/mayank-sonkar-new.png";
import OrgHeading from "./OrgHeading/OrgHeading";
import Venu from "../../Assests/venu1.jpeg";
import Bhadraksh from "../../Assests/bhadraksh.jpeg";
import Shubham from "../../Assests/shubham.jpeg";
import Sarthak from "../../Assests/sarthak.jpeg";
import Nishant from "../../Assests/nishant.jpeg";
import Ayush from "../../Assests/ayush.jpeg";
import Anish from "../../Assests/anish.jpeg";
import Keshav from "../../Assests/keshav.jpeg";
import sid from "../../Assests/sid.jpeg";
import dinesh from "../../Assests/dinesh bhiaya.jpeg";
import Saranya from "../../Assests/saranya.jpeg";
import Vishal from "../../Assests/vishal.jpeg";
import Vikash from "../../Assests/vikash.jpeg";
import Yash from "../../Assests/yash1.jpeg";
import Royal from "../../Assests/royal.jpeg";
import Saketh from "../../Assests/saketh.jpeg";
import bhavana from "../../Assests/Bhavana Vemuri_3rd Year.jpg";
import snigdha from "../../Assests/KATEPALLI SRI SAI SNIGDHA_1st year.jpg";
import abdul from "../../Assests/Mohammed Abdul Akram_1st year.jpeg";
import kamal from "../../Assests/N Kamal Raj_2nd Year.jpg";
import rohit from "../../Assests/Yara Rohit Vathsal_2nd Year.jpg";

const Org = () => {
  return (
    <div className="event-page--container">
      <Navbar />
      <div className="anim-main-container">
        <h1 className="glitch org-main-heading">
          <span aria-hidden="true"> Organizers</span>
          Organizers
          <span aria-hidden="true"> Organizers</span>
        </h1>
      </div>
      <div className="card-container--organizer">
        <OrgCard
          image={Slavanya}
          name={"S lavanya"}
          des="Technical Secretary"
        />
        <OrgCard
          image={MayankS}
          name={"Mayank Sonkar"}
          des="Vice Tech Secretary"
        />
      </div>
      <OrgHeading title="design team" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={bhavana} name={"Bhavana Vemuri"} des="3rd year" />
        <OrgCard image={kamal} name={"Kamal Raj"} des="2nd year" />
        <OrgCard image={rohit} name={"Rohit Vathsal"} des="2nd year" />
        <OrgCard
          margin={true}
          image={snigdha}
          name={"SAI SNIGDHA"}
          des="1st year"
        />
        <OrgCard
          margin={true}
          image={Bhadraksh}
          name={"Bhadraksh B."}
          des="1st year"
        />
        <OrgCard
          margin={true}
          image={abdul}
          name={"Abdul Akram"}
          des="1st year"
        />
      </div>
      <OrgHeading title="coding contest" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={Shubham} name={"Dipesh Talekar"} des="4th year" />
        <OrgCard image={Sarthak} name={"Jagmohan Dixit"} des="3rd year" />
        <OrgCard image={Nishant} name={"Krishna Rai"} des="2nd year" />
      </div>
      <OrgHeading title="hackathon" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={Venu} name={"Venu Sai"} des="3rd year" />
        <OrgCard image={Bhadraksh} name={"Bhadraksh"} des="1st year" />
      </div>
      <OrgHeading title="pitch your startup" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={sid} name={"Siddharth Sahu"} des="3rd year" />
        <OrgCard image={Vikash} name={"Vikash Baabhu"} des="2nd year" />
        <OrgCard image={Yash} name={"Yash Khaitan"} des="1st year" />
      </div>
      <OrgHeading title="css battle" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={dinesh} name={"Dinesh vikram"} des="4th year" />
        <OrgCard
          image="http://iiittm.surge.sh/static/media/nitish_kumar.df87522d.jpeg"
          name={"Nitish kumar"}
          des="4th year"
        />
        <OrgCard image={Royal} name={"Royal Choudhary"} des="2nd year" />
      </div>
      <OrgHeading title="mock interview" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={Vishal} name={"Vishal Sharma"} des="4th year" />
        <OrgCard image={Saranya} name={"Lakshmi Saranya"} des="4th year" />
        <OrgCard image={dinesh} name={"Dinesh Vikram"} des="4th year" />
      </div>
      <OrgHeading title="share your tech story" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={Ayush} name={"Ayush Singh"} des="3rd year" />
        <OrgCard image={Anish} name={"Anish Kirodiwal "} des="2nd year" />
        <OrgCard image={Keshav} name={"Keshav Tulsyan"} des="2nd year" />
      </div>
      <OrgHeading title="roopkalp" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={Saketh} name={"Satya Saketh"} des="4th year" />
        <OrgCard image={bhavana} name={"Bhavana Vemuri"} des="3rd year" />
      </div>
      <hr className="hr" />
      <Footer />
    </div>
  );
};

export default Org;
