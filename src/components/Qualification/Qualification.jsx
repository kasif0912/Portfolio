import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="qualification_section">
      {/* title and subtitle */}
      <h2 className="qualification_title">Academics</h2>
      <span className="qualification_subtitle">
        Navigating the Academic Odyssey
      </span>

      {/* main start */}
      <div className="qualification_container container">
        {/* tabs */}
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Work
          </div>
        </div>

        <div className="qualification_detail">
          {/* college and school section */}
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_tit">NRI Institute of Information Science and technology</h3>
                <span className="qualification_sub">Bhopal, MP</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2024 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_tit">DAV Centenary Public School</h3>
                <span className="qualification_sub">
                 Baniahir, Dhanbad JH
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - 2020
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_tit">Jitpur Academy</h3>
                <span className="qualification_sub">
                 Jitpur, Dhanbad JH
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2009 - 2018
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>

          {/* internship section*/}

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_tit">Frontend Developer(Intern)</h3>
                <span className="qualification_sub">Hiremi - Bhopal</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>July 2022 - Oct 2022
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_tit">Frontend Developer(Intern)</h3>
                <span className="qualification_sub">LeopardsRuns Innovation & Technology - Bhopal </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>Aug 2023- Sep 2023
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
