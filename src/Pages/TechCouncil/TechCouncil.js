import React from "react";
import "./TechCouncil.css";
import TechCounCard from "../../components/TechCounCard/TechCounCard";
import { CouncilData } from "../../Data/CouncilData";

const TechCouncil = () => {
  return (
    <div>
      <div className="home-section-two">
        <div className="border-container atrang-sec">
          <h1 className="section-heading">Technical Council</h1>
          <div className="council-card--container">
            {CouncilData.map((ele) => {
              return (
                <TechCounCard
                  key={ele.key}
                  img={ele.img}
                  name={ele.name}
                  post={ele.post}
                  about={ele.about}
                  email={ele.email}
                  linkedIn={ele.linkedIn}
                  portfolio={ele.portfolio}
                  tag={ele.tag}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCouncil;
