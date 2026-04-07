import "../styles/auth.css";
import logo from "../assets/logoSahtekonline.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function RegisterPagePatient() {
  return (
    <div className="patient-register-page">
      <div className="patient-register-container">
        <div className="patient-register-left"></div>

        <div className="patient-register-right">
          <div className="patient-register-logo">
            <img
              src={logo}
              alt="Sahtek Online Logo"
              className="patient-register-logo-image"
            />
          </div>

          <h1 className="patient-register-title">Create Your Account</h1>

          <form className="patient-register-form">
            <div className="patient-register-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <div className="patient-register-row">
              <input type="text" placeholder="Date of Birth" />

              <div className="patient-register-select-wrap">
                <select defaultValue="">
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </select>
                <span className="patient-select-arrow">&gt;</span>
              </div>
            </div>

            <div className="patient-phone-input">
              <div className="patient-phone-prefix">
                <span className="patient-flag">DZ</span>
                <span className="patient-code">+213</span>
              </div>
              <input type="text" placeholder="Phone Number" />
            </div>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />

            <button type="submit" className="patient-register-btn">
              Create Account
            </button>

            <button type="button" className="patient-google-btn">
              <span className="patient-google-icon">
                <FcGoogle />
              </span>
              <span>Continue with Google</span>
            </button>
          </form>

          <p className="patient-register-login-text">
            Already have an account? <Link to="/">Log In</Link>
          </p>

          <div className="patient-register-socials">
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaLinkedinIn /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPagePatient;
