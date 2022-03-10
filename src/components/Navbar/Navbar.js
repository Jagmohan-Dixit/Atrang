import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../Assests/atranglogo.png";

const Navbar = ({ about, org }) => {
  const [active, setActive] = useState(false);
  return (
    <nav className="navbar">
      <div className="brand-title">
        <img className="atrang-logo" src={Logo} alt="logo" />
      </div>
      <a className="toggle-button" onClick={() => setActive(!active)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={`${active ? "active" : null} navbar-links`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {window.location.pathname === "/events" ||
          window.location.pathname === "/schedule" ||
          window.location.pathname === "/prizes" ? null : (
            <li onClick={() => setActive(!active)}>
              <a onClick={about}>About</a>
            </li>
          )}
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/schedule">Schedule</a>
          </li>
          {window.location.pathname === "/events" ||
          window.location.pathname === "/schedule" ||
          window.location.pathname === "/prizes" ? null : (
            <li onClick={() => setActive(!active)}>
              <a onClick={org}>Organizers</a>
            </li>
          )}

          <li>
            <a href="/prizes">Prizes</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
