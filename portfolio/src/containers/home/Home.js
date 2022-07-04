import React from "react";
import "./home.css";
import { IconContext } from "react-icons";
import {
  AiOutlineCloudDownload,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";

import { BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home__parent__div">
      <div className="home__content__div">
        <h1 className="home__content__name">AJ VIRRANKARI</h1>
        <hr />
        <h1 className="home__content__header">Software Engineer Student</h1>
        <p>
          Software Engineer Student who has high motivation learn learn and{" "}
          <br />
          learn more. Ready to put some hours to make it.
        </p>
        <button className="home__content__div_button">
          <AiOutlineCloudDownload className="button__icon" size="20px" />{" "}
          Download CV
        </button>
        <div className="home__content__link__icons">
          <IconContext.Provider value={{ color: "white", size: "2.5rem" }}>
            <button className="home__content__link__icons__button">
              <AiOutlineInstagram />
            </button>
            <button className="home__content__link__icons__button">
              <AiOutlineGithub />
            </button>
            <button className="home__content__link__icons__button">
              <BsLinkedin size="2rem" />
            </button>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Home;
