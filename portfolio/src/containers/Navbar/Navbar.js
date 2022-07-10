import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="position">
        <div className="navbar__parent__div">
          <h2>
            {" "}
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={400}
            >
              Home
            </Link>
          </h2>
          <h2>
            <Link
              activeClass="active"
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={0}
              duration={400}
            >
              About Me
            </Link>
          </h2>
          <h2>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={400}
            >
              Projects
            </Link>
          </h2>
          <h2>
            <Link
              activeClass="active"
              to="contactMe"
              spy={true}
              smooth={true}
              offset={60}
              duration={400}
            >
              Contact Me
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
