import React from "react";
import "./educationAndJobs.css";

const EducationAndJobs = () => {
  return (
    <div className="educationAndJobs__parent__div">
      <div className="educationAndJobs__content">
        <div>
          <h1>Education</h1>
          <h3 className="educationAndJobs__content__year">2018 - 2021</h3>
          <h3 className="educationAndJobs__content__education">
            Undergraduate degree in information <br />
            and communication technology
          </h3>
          <h3 className="educationAndJobs__content__schoolname">OSAO, Oulu</h3>
        </div>
        <div>
          <h3 className="educationAndJobs__content__year">2021 - Present</h3>
          <h3 className="educationAndJobs__content__education">
            Information and communication engineer, <br />
            Software engineer
          </h3>
          <h3 className="educationAndJobs__content__schoolname">
            Oulu Univeristy of Applied Sciences, Oulu
          </h3>
        </div>
      </div>
      <div className="educationAndJobs__content">
        <div>
          <h1>Jobs</h1>
          <h3 className="educationAndJobs__content__year">2019/09 - 2019/11</h3>
          <h3 className="educationAndJobs__content__education">
            IT Support Specialist , <br /> {"Internship"}
          </h3>
          <h3 className="educationAndJobs__content__schoolname">
            Power Oulu Limingantulli
          </h3>
        </div>
        <div>
          <h3 className="educationAndJobs__content__year">2020-Present</h3>
          <h3 className="educationAndJobs__content__education">
            IT Support Specialist {"&"} <br /> Storage worker
          </h3>
          <h3 className="educationAndJobs__content__schoolname">
            Power Oulu Limingantulli
          </h3>
        </div>
      </div>
    </div>
  );
};

export default EducationAndJobs;
