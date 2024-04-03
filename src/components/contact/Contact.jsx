import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // const ref = useRef();
  const formRef = useRef();
  // const [error, setError] = useState(false);
  // const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ntx232s",
        "template_9h2fwlt",
        formRef.current,
        "2Wkc5NYyNjFRP70c4"
      )
      .then(
        (result) => {
          toast.success("successfully send", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
          });
        },
        (error) => {
          // setError(true);
          // setSuccess(false);
          console.error("Email send error:", error);
        }
      );
  };
  return (
    <div className="contact_section" id="contact">
      <div className="text_container">
        <h1> Let's work together</h1>
        <div className="item">
          <i class="uil uil-envelope-check"></i>
          <span className="email">kasifali009@gmail.com</span>
        </div>
        <div className="item">
          <i class="uil uil-phone"></i>
          <span className="phone">+91 8987897572</span>
        </div>
        <div className="item">
          <a href="https://www.linkedin.com/in/kasifali09/">
            <i class="uil uil-linkedin social_logo"></i>
          </a>
          <a href="https://github.com/kasif0912?tab=repositories">
            <i class="uil uil-github social_logo"></i>
          </a>
        </div>
      </div>
      <div className="form_container">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>
            Submit <i class="uil uil-check-circle"></i>
          </button>
          {/* {error && "Error"} */}
          {/* {success && "Success"} */}
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
