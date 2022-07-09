import React, { useRef } from "react";
import "./contactme.css";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("täällä");
    console.log(form.current);
    emailjs
      .sendForm("gmail", "gmail__template", form.current, "J23VYvXHQADlQBU0K")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactme__parent__div" id="contactMe">
      <div className="contactme__content">
        <div className="contactme__content__address">
          <h1>Contact</h1>
          <h3>+358 443020209</h3>
          <h3>virrankari.aj@gmail.com</h3>
          <h3>Oulu, Finland</h3>
        </div>
        <div className="contactme__content__emailform">
          <form ref={form} onSubmit={sendEmail}>
            <div className="contactme__content__emailform__firstRow">
              <div className="contactme__content__emailform__firstRow__name">
                <label>Your name</label>
                <input type="text" name="name" />
              </div>
              <div className="contactme__content__emailform__firstRow__email">
                <label>Your email</label>
                <input type="email" name="from_name" />
              </div>
            </div>
            <div className="contactme__content__emailform__secondRow">
              <label>Subject</label>
              <input type="text" name="subject" />
            </div>
            <div className="contactme__content__emailform__message">
              <label>Message</label>
              <textarea type="text" name="message" />
            </div>
            <div className="contactme__content__emailform__button">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
