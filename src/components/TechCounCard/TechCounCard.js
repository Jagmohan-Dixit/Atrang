import React from "react";
import "./TechCounCard.css";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

const TechCounCard = ({
  img,
  name,
  post,
  about,
  email,
  linkedIn,
  portfolio,
  tag,
}) => {
  return (
    <div className="box">
      <div className="team-card-svg-animal"></div>
      <div className={`${tag} team-card card-img`}>
        <img className="blur image-main" src={img} alt="profile" />
        <div className="team-card-body">
          <h4 className="name">{name}</h4>
          <h5 className="title">{post}</h5>
          <hr className="team-card-hr" />
          <p className="text">{about}</p>
          <div className="link-container">
            <a
              className="link-button "
              href={`mailto:${email}`}
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
            <a
              className="link-button"
              href={linkedIn}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            {portfolio ? (
              <a
                className="link-button"
                href={portfolio}
                target="_blank"
                rel="noreferrer"
              >
                <LanguageIcon />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCounCard;
