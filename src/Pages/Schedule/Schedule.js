import "./Schedule.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const Schedule = ({ gotoAbout, gotoOrganizer }) => {
  return (
    <div className="event-page--container">
      <Navbar />
      <div className="anim-main-container">
        <h1 className="glitch heading-atrang-main">
          <span aria-hidden="true"> schedule</span>
          schedule
          <span aria-hidden="true"> schedule</span>
        </h1>
      </div>
      <div>
        <div class="container">
          <div class="timeline">
            <ul>
              <li>
                <div class="timeline-content">
                  <h3 class="date">2nd April, 22, 10:00 AM - 10:30 AM</h3>
                  <h1>Inauguration</h1>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">2nd April, 22, 10:30 AM - 11:30 AM</h3>
                  <h1>Coding Contest Round 1</h1>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">2nd April, 22, 11:30 AM - 12:30 PM</h3>
                  <h1>CSS Battle Round 1</h1>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">2nd April, 22, 01:30 PM - 03:30 PM</h3>
                  <h1>Pitch Your Startup</h1>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">2nd April, 22, 03:30 PM - 05:30 PM</h3>
                  <h1>Mock Interview</h1>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">3rd April, 22, 10:00 AM - 11:00 AM</h3>
                  <h1>Coding Contest Round 2</h1>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">3rd April, 22, 11:00 AM - 12:00 PM</h3>
                  <h1>CSS Battle Round 2</h1>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">3rd April, 22, 12:00 PM - 06:00 PM</h3>
                  <h1>Hackathon</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Schedule;
