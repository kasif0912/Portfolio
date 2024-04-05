import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Frontend = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "20px",
      duration: 1000,
      reset: true,
    });

    sr.reveal(".skills_content", { delay: 200 });
    sr.reveal(".skills_data div", { delay: 200 });
  });

  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend Developer</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">HTML</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">CSS</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">JavaScript</h3>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">Tailwind</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">ReactJs</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">Git</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
