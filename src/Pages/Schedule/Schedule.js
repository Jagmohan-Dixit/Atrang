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
        <div className="dayheading">
          <h1 style={{backgroundColor: "#1e1f22",padding: "20px", paddingInline:"7vw", borderRadius: "10px"}}>Day 1</h1>
        </div> 
        <div class="container">
          <div class="timeline">
            <ul>
              <li>
                <div class="timeline-content">
                  <h3 class="date">5th April, 23, 10:00 AM - 10:30 AM</h3>
                  <h1>Inauguration</h1>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">5th April, 23, 11:00 AM - 1:00 PM</h3>
                  <h1>Mock Interview</h1>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">5th April, 23, 2:00 PM - 5:00 PM</h3>
                  <h1>Venture Vision</h1>
                </div>
              </li>

              <li>
                <div class="timeline-content">
                  <h3 class="date">5th April, 23, 6:00 PM - 8:00 PM</h3>
                  <h1>Coding Contest</h1>
                </div> 
              </li>
            </ul>
          </div>
        </div>




        <div className="dayheading">
          <h1 style={{backgroundColor: "#1e1f22",padding: "20px", paddingInline:"7vw", borderRadius: "10px"}}>Day 2</h1>
        </div> 
        <div class="container">
          <div class="timeline">
            <ul>
              <li>
                <div class="timeline-content">
                  <h3 class="date">6th April, 23, 9:00 AM - 12:00 PM</h3>
                  <h1>Tech Trivia (Quiz)</h1>
                </div>
              </li>
                            <li>
                <div class="timeline-content">
                  <h3 class="date">6th April, 23, 12:00 PM - 1:00 PM</h3>
                  <h1>Circuit Design</h1>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">6th April, 23, 2:00 AM - 6:00 PM</h3>
                  <h1>Workshop on Blockchain</h1>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">6th April, 23, 6:30 PM - 8:00 PM</h3>
                  <h1>Capture the Flag</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="hackathon">
          <div style={{display:"flex",justifyContent: "center", marginBottom: "2vw"}}>
            <h1 style={{backgroundColor: "#1e1f22",padding: "20px", paddingInline:"8vw", borderRadius: "10px"}}>Hackathon (Online)</h1>
          </div> 
          <div style={{display:"flex",justifyContent: "center"}}>
            <h3 class="hackdate">3rd April, 23, 5:00 PM - 5th April, 23, 5:00 PM</h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Schedule;
