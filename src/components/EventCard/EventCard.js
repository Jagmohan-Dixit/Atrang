import React from "react";
import "./EventCard.css";

const EventCard = ({ title, descrip, img, link, first, second }) => {
  return (
    <section class="record">
      <div class="record-arrow"></div>
      <div
        id="record1"
        class="record-display"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div class="record-desc">
        <h1>{title}</h1>
        <p>{descrip}</p>
        {/* <div className="prize-container">
          <div className="prize-ele">
            <img src={firstImg} alt="first" />
            <p>{first}</p>
          </div>
          <div className="prize-ele">
            <img src={Second} alt="second" />
            <p>{second}</p>
          </div>
        </div> */}
        <button className="organizer-button">
          <a
            href={link}
            target="_blank"
            className="organizer-button-a"
            rel="noreferrer"
          >
            PARTICIPATE NOW
          </a>
        </button>
      </div>
    </section>
  );
};

export default EventCard;
