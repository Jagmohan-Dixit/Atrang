import React from "react";
import "./OrgCard.css";

const OrgCard = ({ image, name, des, margin }) => {
  return (
    <>
      <div class="card" style={{ margin: `${margin ? "60px" : "60px"} 40px` }}>
        <img className="card-image" src={image} alt="profile" />
        <h1>{name}</h1>
        <h2>{des}</h2>
      </div>
    </>
  );
};

export default OrgCard;
