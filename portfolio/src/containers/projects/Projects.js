import React from "react";
import "./projects.css";
import { FaReact, FaLongArrowAltRight } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects__parent__div">
      <div className="projects__header">
        <h1>PROJECTS</h1>
        <hr />
      </div>
      <div className="projects__projects">
        <>
          <div className="projects__projects__project">
            <img src="https://randomwordgenerator.com/img/picture-generator/53e3d4424d50ab14f1dc8460962e33791c3ad6e04e507440762e7ad39045c7_640.jpg" />
            <h3>WareHouse inventory APP</h3>
            <p>
              <FaReact className="projects__projects__project__icon" /> React
              APP
            </p>
            <div className="projects__projects__project__buttons">
              <button className="projects__projects__project__buttons__viewCode">
                View Code{" "}
                <FaLongArrowAltRight className="projects__projects__project__buttons__viewCode__icon" />
              </button>
              <button className="projects__projects__project__buttons__live">
                {" "}
                Live Preview
              </button>
            </div>
          </div>
        </>
        <>
          <div className="projects__projects__project">
            <img src="https://randomwordgenerator.com/img/picture-generator/57e3dd424851ac14f1dc8460962e33791c3ad6e04e507441722a72dd914fc7_640.jpg" />
            <h3>WareHouse inventory APP</h3>
            <p>
              <FaReact className="projects__projects__project__icon" /> React
              APP
            </p>
            <div className="projects__projects__project__buttons">
              <button className="projects__projects__project__buttons__viewCode">
                View Code{" "}
                <FaLongArrowAltRight className="projects__projects__project__buttons__viewCode__icon" />
              </button>
              <button className="projects__projects__project__buttons__live">
                {" "}
                Live Preview
              </button>
            </div>
          </div>
        </>
        <>
          <div className="projects__projects__project">
            <img src="https://randomwordgenerator.com/img/picture-generator/55e7d04a4e5ba414f1dc8460962e33791c3ad6e04e5074417c2d78dc964ac6_640.jpg" />
            <h3>WareHouse inventory APP</h3>
            <p>
              <FaReact className="projects__projects__project__icon" /> React
              APP
            </p>
            <div className="projects__projects__project__buttons">
              <button className="projects__projects__project__buttons__viewCode">
                View Code{" "}
                <FaLongArrowAltRight className="projects__projects__project__buttons__viewCode__icon" />
              </button>
              <button className="projects__projects__project__buttons__live">
                {" "}
                Live Preview
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Projects;
