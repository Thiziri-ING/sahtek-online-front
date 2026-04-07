import "../styles/auth.css";
import logo from "../assets/logoSahtekonline.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function RegisterPageDoctor() {
  return (
    <div className="doctor-register-page">
      <div className="doctor-register-container">
        <div className="doctor-register-left"></div>

        <div className="doctor-register-right">
          <div className="doctor-register-logo">
            <img
              src={logo}
              alt="Sahtek Online Logo"
              className="doctor-register-logo-image"
            />
          </div>

          <h1 className="doctor-register-title">Create Your Account</h1>

          <form className="doctor-register-form">
            <div className="doctor-register-name-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <input type="text" placeholder="Date of Birth" />
            <input type="text" placeholder="Speciality" />
            <input type="text" placeholder="Serial Number" />

            <div className="doctor-phone-input">
              <div className="doctor-phone-prefix">
                <span className="doctor-flag">DZ</span>
                <span className="doctor-code">+213</span>
              </div>
              <input type="text" placeholder="Phone Number" />
            </div>

            <input type="text" placeholder="Hospital / Clinic" />
            <input type="email" placeholder="Email" />

            <button type="submit" className="doctor-register-btn">
              Create Account
            </button>

            <button type="button" className="doctor-google-btn">
              <span className="doctor-google-icon">
                <FcGoogle />
              </span>
              <span>Continue with Google</span>
            </button>
          </form>

          <p className="doctor-register-login-text">
            Already have an account?{" "}
            <Link to="/">Log In</Link>
          </p>

          <div className="doctor-register-socials">
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaLinkedinIn /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPageDoctor;
