import React, { useState } from "react";
import "./Project.css";

const Project = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="project_section" id="project">
      <h2 className="project_section_title">Projects</h2>
      <span className="project_section_subtitle">Project Compilation</span>

      <div className="project_container container grid">
        <div className="project_content">
          <div>
          <i class="uil uil-shopping-bag proj-logo"></i>
            <h3 className="project_title">E-Commerce</h3>
          </div>

          <span className="project_button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right project_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1 ? "project_modal active-modal" : "project_modal"
            }
          >
            <div className="project_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times project_modal-close"
              ></i>
              <h3 className="project_modal-title">
                <a
                  href="https://github.com/kasif0912/amazoneClient"
                  target="blank"
                >
                  <i class="uil uil-github"></i><br/>
                </a>
                <a href="https://amzc.netlify.app/" target="blank">
                  View...
                </a>
              </h3>
              <p className="project_modal-description">
                Developed a user-friendly e-commerce platform using the MERN
                stack.
              </p>

              <ul className="project_modal-project ">
                <li className="project_modal-service">
                  <i className="uil uil-check-circle project_modal-icon"></i>
                  <p className="project_modal-info">
                    User registration and login,
                  </p>
                </li>
                <li className="project_modal-service">
                  <i className="uil uil-check-circle project_modal-icon"></i>
                  <p className="project_modal-info">
                    Product listings with detailed descriptions,
                  </p>
                </li>
                <li className="project_modal-service">
                  <i className="uil uil-check-circle project_modal-icon"></i>
                  <p className="project_modal-info">
                    Add items to the shopping cart,
                  </p>
                </li>
                <li className="project_modal-service">
                  <i className="uil uil-check-circle project_modal-icon"></i>
                  <p className="project_modal-info">
                    Shopping cart for easy checkout,
                  </p>
                </li>
                <li className="project_modal-service">
                  <i className="uil uil-check-circle project_modal-icon"></i>
                  <p className="project_modal-info">
                    payment integration by using stripe.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="project_content">
          <div>
          <i class="uil uil-clapper-board proj-logo"></i>
            <h3 className="project_title">Netflix</h3>
          </div>

          <span className="project_button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right project_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2 ? "project_modal active-modal" : "project_modal"
            }
          >
            <div className="project_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times project_modal-close"
              ></i>
              <h3 className="project_modal-title">Under constructionr</h3>
              <p className="project_modal-description">
                Created a clone of the Netflix platform to showcase skills in
                frontend development and Firebase integration.
              </p>

              <ul className="project_modal-project">
                <li className="project_modal-service">
                  <i className="uil uil-check-circle project_modal-icon"></i>
                  <p className="project_modal-info">
                    User registration and login,
                  </p>
                </li>
                <li className="project_modal-service">
                  <i className="uil uil-check-circle project_modal-icon"></i>
                  <p className="project_modal-info">
                    User-friendly interface resembling Netflix's layout,
                  </p>
                </li>
                <li className="project_modal-service">
                  <i className="uil uil-check-circle project_modal-icon"></i>
                  <p className="project_modal-info">
                    Display of available movies and series,
                  </p>
                </li>
                <li className="project_modal-service">
                  <i className="uil uil-check-circle project_modal-icon"></i>
                  <p className="project_modal-info">
                    Playback functionality for selected content,
                  </p>
                </li>
                <li className="project_modal-service">
                  <i className="uil uil-check-circle project_modal-icon"></i>
                  <p className="project_modal-info">
                    Integration with Firebase for authentication and data
                    storage.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="project_content">
          <div>
            <i className="uil uil-edit project_icon"></i>
            <h3 className="project_title">
              Product 
            </h3>
          </div>

          <span className="project_button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right project_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3 ? "project_modal active-modal" : "project_modal"
            }
          >
            <div className="project_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times project_modal-close"
              ></i>
              <h3 className="project_modal-title">Visual Designer</h3>
              <p className="project_modal-description">
                with more than 3 years of experience. Providing quality work to
                clients and companies.
              </p>

              <ul className="project_modal-project">
                <li className="project_modal-service">
                  <i className="uil uil-check-circle project_modal-icon"></i>
                  <p className="project_modal-info">
                    I develop the user Interface
                  </p>
                </li>
                <li className="project_modal-service">
                  <i className="uil uil-check-circle project_modal-icon"></i>
                  <p className="project_modal-info">
                    I develop the user Interface
                  </p>
                </li>
                <li className="project_modal-service">
                  <i className="uil uil-check-circle project_modal-icon"></i>
                  <p className="project_modal-info">
                    I develop the user Interface
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
