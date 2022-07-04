import AboutMe from "./containers/aboutMe/AboutMe";
import EducationAndJobs from "./containers/educationAndJobs/EducationAndJobs";
import Footer from "./containers/footer/Footer";
import Home from "./containers/home/Home";
import Navbar from "./containers/Navbar/Navbar";
import Projects from "./containers/projects/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <EducationAndJobs />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
