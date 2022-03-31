import React from "react";
import "./OrgHeading.css";

const OrgHeading = ({ title }) => {
  return (
    <div className="anim-main-container">
      <h1 className="glitch org-heading">
        <span aria-hidden="true"> {title}</span>
        {title}
        <span aria-hidden="true"> {title}</span>
      </h1>
    </div>
  );
};

export default OrgHeading;
