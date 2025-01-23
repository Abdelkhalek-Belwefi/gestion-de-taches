import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import "./contact.css";


const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact-section">
        <div className="contact-container">
          <div className="form-column">
            <div className="contact-form-wrapper">
              <div className="form-title">
                <h2>Contact Us</h2>
                <p>
                  Please fill out the form below to send us an email, and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="contactForm" validate="true" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-input-column">
                    <div className="form-group">
                      Name<input
                        type="text"
                        id="user-name"
                        name="name"
                        className="input-field"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="error-message"></p>
                    </div>
                  </div>
                  <div className="form-input-column">
                    <div className="form-group">
                      Email<input
                        type="email"
                        id="user-email"
                        name="email"
                        className="input-field"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="error-message"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="user-message"
                    className="textarea-field"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="error-message"></p>
                </div>
                <div id="form-status"></div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="info-column">
            <div className="contact-info-box">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                Menzel Tmim, 8080
              </p>
            </div>
            <div className="contact-info-box">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>
                29794213
              </p>
            </div>
            <div className="contact-info-box">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>
                bestdelivery@gmail.com
              </p>
            </div>
          </div>
          <div className="footer">
            <div className="footer-content">
              <p>
                &copy; Best Delivery in Tunisia{" "}
                <a href="https://www.best-delivery.net/" rel="nofollow">
                  Best Delivery
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
