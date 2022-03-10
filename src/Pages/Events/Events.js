import React from "react";
import "./Events.css";
import EventCard from "../../components/EventCard/EventCard";
import { EventData } from "../../Data/EventData";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Events = ({ gotoAbout, gotoOrganizer }) => {
  return (
    <div className="event-page--container">
      <Navbar />
      <div className="anim-main-container">
        <h1 className="glitch heading-atrang-main">
          <span aria-hidden="true"> events</span>
          events
          <span aria-hidden="true"> events</span>
        </h1>
      </div>
      <div className="event-card--conatiner">
        {EventData.map((card) => {
          return (
            <EventCard
              key={card.key}
              title={card.title}
              descrip={card.descrip}
              img={card.image}
            />
          );
        })}
      </div>
      <hr className="hr" />
      <Footer />
    </div>
  );
};

export default Events;
