import "./App.css";
import { useRef } from "react";
import HomePage from "./Pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import Events from "./Pages/Events/Events";
import Schedule from "./Pages/Schedule/Schedule";
import Prizes from "./Pages/Prizes/Prizes";

function App() {
  const aboutSection = useRef(null);
  const organizerSection = useRef(null);

  const gotoAbout = () =>
    window.scrollTo({ top: aboutSection.current.offsetTop });
  const gotoOrganizer = () =>
    window.scrollTo({ top: organizerSection.current.offsetTop });
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            aboutSection={aboutSection}
            organizerSection={organizerSection}
            gotoAbout={gotoAbout}
            gotoOrganizer={gotoOrganizer}
          />
        }
      />
      <Route
        path="/events"
        element={<Events gotoAbout={gotoAbout} gotoOrganizer={gotoOrganizer} />}
      />
      <Route
        path="/schedule"
        element={
          <Schedule gotoAbout={gotoAbout} gotoOrganizer={gotoOrganizer} />
        }
      />
      <Route
        path="/prizes"
        element={<Prizes gotoAbout={gotoAbout} gotoOrganizer={gotoOrganizer} />}
      />
    </Routes>
  );
}

export default App;
