import logo from "../assets/logoSahtekonline.png";
import { FaUser, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLock, MdVisibilityOff } from "react-icons/md";

function RegisterPage() {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-left"></div>

        <div className="register-right">
          <div className="register-logo">
            <img src={logo} alt="Sahtek Online Logo" className="register-logo-image" />
          </div>

          <h1 className="register-title">Join Us</h1>
          <p className="register-subtitle">Create your account to get started</p>

          <form className="register-form">
            <div className="register-input-box has-left-icon">
              <span className="register-input-icon left">
                <FaUser />
              </span>
              <input type="text" placeholder="Full Name" />
            </div>

            <div className="register-input-box has-left-icon">
              <span className="register-input-icon left">
                <MdEmail />
              </span>
              <input type="email" placeholder="awesome@user.com" />
            </div>

            <div className="register-input-box has-both-icons">
              <span className="register-input-icon left">
                <MdLock />
              </span>
              <input type="password" placeholder="Password" />
              <span className="register-input-icon right">
                <MdVisibilityOff />
              </span>
            </div>

            <div className="register-input-box has-both-icons">
              <span className="register-input-icon left">
                <MdLock />
              </span>
              <input type="password" placeholder="Confirm Password" />
              <span className="register-input-icon right">
                <MdVisibilityOff />
              </span>
            </div>

            <button type="submit" className="register-btn">
              Sign Up
            </button>
          </form>

          <p className="register-signin-text">
            Already Have An Account? <a href="/">Log In</a>
          </p>

          <div className="register-social-icons">
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaLinkedinIn /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;