import "./Schedule.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const Schedule = ({ gotoAbout, gotoOrganizer }) => {
  return (
    <div className="main--conainer">
      <Navbar />
      <div className="utility-div">
        <h1 className="coming-soon-heading">
          COMING <br />
          SOON!
          <br />
        </h1>
      </div>

      <Footer />
    </div>
  );
};

export default Schedule;
