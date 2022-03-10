import React from "react";
import "./EventCard.css";

const EventCard = ({ title, descrip, img }) => {
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
        <button className="organizer-button">
          <a
            href="https://forms.gle/KQb5MywwzyMNpPNX9"
            target="_blank"
            className="organizer-button-a"
            rel="noreferrer"
          >
            BECOME AN ORGANIZER
          </a>
        </button>
      </div>
    </section>
  );
};

export default EventCard;
