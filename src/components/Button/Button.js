import React from "react";
import "./Button.css";

const Button = ({ title, link }) => {
  return (
    <>
      <a
        href={link}
        className="btn btn-sm animated-button button-a"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        {title}
      </a>
    </>
  );
};

export default Button;
