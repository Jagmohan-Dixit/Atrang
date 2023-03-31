import "./Footer.css";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LogoText from "../../Assests/logo-text.png";

const Footer = ({ about, org }) => {
  return (
    <div className="footer-container">
      <div className="footer-sub--container">
        <div className="footer-sub--div1">
          <img className="footer-logo--text" src={LogoText} alt="logo" />
          <p>
            Join us as an{" "}
            <a href="/organizer" className="organizer-highlight">
              organizer
            </a>{" "}
            and let's make the community more powerful than it ever be.
          </p>
        </div>
        <div className="footer-sub--div2">
          <p>Quick Explore</p>
          <ul>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/events">events</a>
            </li>
            <li>
              <a href="/workshops">workshops</a>
            </li>
            <li>
              <a href="/schedule">schedule</a>
            </li>

            <li>
              <a href="/organizer">organizers</a>
            </li>
          </ul>
        </div>
        <div className="footer-sub--div3">
          <p>connect with us</p>
          <div className="icon-container">
            <div className="div3-icon-container">
              <a
                className="div3-icon-container-a"
                href="mailto:atrang22.iiitt@gmail.com"
              >
                <EmailIcon fontSize="large" />
              </a>
            </div>
            <div className="div3-icon-container">
              <a
                href="https://www.instagram.com/technicalcouncil_iiitt/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-hr" />
      <a
        className="credits"
        href="#webteam"
        rel="noreferrer"
      >
        Made with{" "}
        <img
          className="heart-footer"
          src="https://media.giphy.com/media/LpDmM2wSt6Hm5fKJVa/giphy.gif"
          alt="heart"
        />{" "}
        by Atrang Web Team
      </a>
    </div>
  );
};

export default Footer;
