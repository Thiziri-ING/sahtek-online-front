import { useState } from "react";
import logo from "../assets/logoSahtekonline.png";
import {
  MdEmail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left"></div>

        <div className="login-right">
          <div className="login-logo">
            <img src={logo} alt="Sahtek Online Logo" className="logo-image" />
          </div>

          <h1 className="login-title">Welcome</h1>
          <p className="login-subtitle">Log in to your account to continue</p>

          <form className="login-form">
            <div className="input-box has-left-icon">
              <span className="input-icon left">
                <MdEmail />
              </span>
              <input type="email" placeholder="awesome@user.com" />
            </div>

            <div className="input-box has-both-icons">
              <span className="input-icon left">
                <MdLock />
              </span>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="********************"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </button>
            </div>

            <div className="forgot-row">
              <a href="/">Forgot Your Password?</a>
            </div>

            <button type="button" className="google-btn">
              <span className="google-icon">
                <FcGoogle />
              </span>
              <span className="google-text">Continue with Google</span>
            </button>

            <button type="submit" className="login-btn">
              Log In
            </button>
          </form>

          <p className="signup-text">
            Don't Have An Account? <a href="/">Sign Up!</a>
          </p>

          <div className="social-icons">
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaLinkedinIn /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;