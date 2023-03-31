import React from "react";
import "./Org.css";
import OrgCard from "../../components/OrgCard/OrgCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import OrgHeading from "./OrgHeading/OrgHeading";

import Sarthak from "../../Assests/sarthak.jpg";

import Jaggu from "../../Assests/jaggu.jpg";
import Aditya from "../../Assests/Aditya2.jpg";
import Krishna from "../../Assests/Krishna.jpg";
import Siddharth from "../../Assests/sid.jpeg";
import Dipesh from "../../Assests/DipeshTalekar.jpg";
import Mayank from "../../Assests/mayank-sonkar-new.png";
import Yashdeep from "../../Assests/Yashdeep.jpeg";
import Kshitij from "../../Assests/kshitij.jpg";
import Adithya from "../../Assests/Adithya.jpg";
import Vijaya from "../../Assests/Vijay.jpg";
import Vaidik from "../../Assests/Vaidik.jpg";
import NNM from "../../Assests/nagamallishwar.jpg";
import Bharadwaj from "../../Assests/Bharadwaj.jpg";
import Anshika from "../../Assests/Anshika.jpg";
import ChintalaS from "../../Assests/ChintalaS.jpg";
import Gnana from "../../Assests/GnanaKishore.jpeg";
import Pranav from "../../Assests/Pranav.jpeg";
import Keshav from "../../Assests/Keshav.jpg";
import Suman from "../../Assests/Suman.jpg";
import Shubham from "../../Assests/shubham.jpeg";
import Vaibhav from "../../Assests/Vaibhav.jpg";
import Navneet from "../../Assests/Navneet.png";
import Sachin from "../../Assests/Sachin.jpg";
import HarshKumar from "../../Assests/Harsh.png";
import Harsh from "../../Assests/Harsh.jpg";
import Srinidhi from "../../Assests/Srinidhi.jpg";
import Naresh from "../../Assests/Naresh.jpg";
import Sainath from "../../Assests/Sainath.jpg";


const Org = () => {
  return (
    <div className="event-page--container">
      <Navbar />
      <div className="anim-main-container">
        <h1 className="glitch org-main-heading">
          <span aria-hidden="true"> Core Organizers</span>
          Core Organizers
          <span aria-hidden="true"> Core Organizers</span>
        </h1>
      </div>
      <div className="card-container--organizer">
        <OrgCard image={Shubham} name={"Shubham K Bhagat"} des="4th Year" />
        <OrgCard image={NNM} name={"N Nagamallishwar"} des="4th Year" />
        <OrgCard image={Vaibhav} name={"Vaibhav Agarwal"} des="3rd Year" />
        <OrgCard image={Harsh} name={"Harsh Agarwal"} des="3rd Year" />
        <OrgCard image={Sarthak} name={"Sarthak Kumar"} des="3rd Year" />
        <OrgCard image={Keshav} name={"Keshav Tulsyan"} des="3rd Year" />
      </div>
      {/* <OrgHeading title="design team" />
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
      </div>*/}
      <OrgHeading title="Coding Contest" />

      <div className="card-container--organizer card-container--org">
        <OrgCard image={Dipesh} name={"Dipesh Talekar"} des="4th year" />
        <OrgCard image={Jaggu} name={"Jagmohan Dixit"} des="3rd year" />
        <OrgCard image={Aditya} name={"Aditya Pareek"} des="3rd year" />
        <OrgCard image={Sachin} name={"Sachin Tayal"} des="3rd year" />
      </div>
      <OrgHeading title="Hackathon" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={Mayank} name={"Mayank Sonkar"} des="4th year" />
        <OrgCard image={Yashdeep} name={"Yashdeep Rao"} des="4th year" />
        <OrgCard image={Kshitij} name={"Kshitij Verma"} des="2nd year" />
      </div>
      <OrgHeading title="Capture The Flag" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={Adithya} name={"P Adithya Venkatesh"} des="4th year" />
        <OrgCard image={Vijaya} name={"Vijaya Pratap Reddy M"} des="3rd year" />
        <OrgCard image={Vaidik} name={"Vaidik Bhongade"} des="2nd year" />
      </div>
      <OrgHeading title="Circuit Design" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={NNM} name={"N Nagamallishwar"} des="4th year" />
        <OrgCard image={Bharadwaj} name={"Bharadwaj Routhu"} des="3rd year" />
        <OrgCard image={Anshika} name={"Anshika"} des="2nd year" />
      </div>
      <OrgHeading title="mock interview" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={Krishna} name={"Krishna Laddha"} des="4th year" />
        <OrgCard image={Siddharth} name={"Siddharth Sahu"} des="4th year" />
        <OrgCard image={Navneet} name={"Navneet Rai"} des="4th year" />
        <OrgCard image={ChintalaS} name={"Chintala Sravani"} des="4th year" />
        <OrgCard image={Dipesh} name={"Dipesh Talekar"} des="4th year" />
        <OrgCard image={NNM} name={"N Nagamallishwar"} des="4th year" />
        <OrgCard image={Naresh} name={"Naresh Reddy"} des="4th year" />
      </div>
      <OrgHeading title="Tech Trivia" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={Pranav} name={"Pranav Tiwari"} des="3rd year" />
        <OrgCard image={Gnana} name={"Gnana Kishore"} des="3rd year" />
      </div>
      <OrgHeading title="Venture Vision" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={Suman} name={"Suman Raj"} des="3rd year" />
        <OrgCard image={Keshav} name={"Keshav Tulsyan"} des="3rd year" />
        <OrgCard image={Sainath} name={"Sainath Kadam"} des="3rd year" />
      </div>
      <OrgHeading title="Workshop" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={Harsh} name={"Harsh Agarwal"} des="3rd year" />
        <OrgCard image={HarshKumar} name={"Harsh Kumar"} des="3rd year" />
        <OrgCard image={Srinidhi} name={"Srinidhi"} des="2nd year" />
      </div>
      <hr className="hr" />
      <Footer />
    </div>
  );
};

export default Org;
