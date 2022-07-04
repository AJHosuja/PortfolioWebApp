import React from "react";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutme__parent__div">
      <div className="aboutme__content">
        <h1>About me</h1>
        <hr />
        <h3>
          Hey my name is <span>Antti-Jussi Virrankari.</span> I am
          <span> 20</span> years old software engineer student from
          <span> Oulu, Finland.</span> I am high motivated student who wants to
          <span> learn more and more.</span> Currently I am interested in
          learning more about
          <span> C++, Javascript, React and React Native.</span> Make sure you
          check projects what i have been done.
        </h3>
      </div>
    </div>
  );
};

export default AboutMe;
