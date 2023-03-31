import TechCounCard from "../../components/TechCounCard/TechCounCard";
import { WebTeamData } from "../../Data/WebTeamData";

const WebTeam = () => {
  return (
    <div className="webteam" id="webteam">
      <div className="home-section-two">
        <div className="border-container atrang-sec">
          <h1 className="section-heading">Atrang Web Team</h1>
          <div className="council-card--container">
            {WebTeamData.map((ele) => {
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

export default WebTeam;
