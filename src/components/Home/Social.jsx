import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Social = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "left",
      distance: "20px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".home_social", { delay: 200 });
   
  });

  return (
    <div className="home_social">
      <a href="https://in.linkedin.com/" className="home_social-icon" target="">
        <i class="uil uil-linkedin"></i>
      </a>

      <a href="https://github.com/" className="home_social-icon" target="">
        <i class="uil uil-github"></i>
      </a>

      {/* <a href="https://dribbble.com/" className="home_social-icon" target="_blank">
        <i class="uil uil-dribbble"></i>
      </a> */}
    </div>
  );
};

export default Social;
