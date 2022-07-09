import AboutMe from "./containers/aboutMe/AboutMe";
import ContactMe from "./containers/contactMe/ContactMe";
import EducationAndJobs from "./containers/educationAndJobs/EducationAndJobs";
import Footer from "./containers/footer/Footer";
import Home from "./containers/home/Home";
import Navbar from "./containers/Navbar/Navbar";
import Projects from "./containers/projects/Projects";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutMe />
              <Projects />
              <ContactMe />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
