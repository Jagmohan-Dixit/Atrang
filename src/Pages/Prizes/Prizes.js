import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Prizes = ({ gotoAbout, gotoOrganizer }) => {
  return (
    <div className="main--conainer">
      <Navbar about={gotoAbout} org={gotoOrganizer} />
      <div className="utility-div">
        <h1 className="coming-soon-heading">
          COMING <br />
          SOON!
          <br />
        </h1>
      </div>
      <Footer about={gotoAbout} org={gotoOrganizer} />
    </div>
  );
};

export default Prizes;
