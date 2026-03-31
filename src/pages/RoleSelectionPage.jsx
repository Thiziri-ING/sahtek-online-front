import { Link, useNavigate } from "react-router";
import logo from "../assets/logoSahtekonline.png";
import patientImage from "../assets/patient-card.png";
import doctorImage from "../assets/doctor-card.png";

function RoleSelectionPage() {
  const navigate = useNavigate();

  return (
    <div className="role-page">
      <div className="role-wrapper">
        <div className="role-logo">
          <img src={logo} alt="Sahtek Online Logo" className="role-logo-image" />
        </div>

        <h1 className="role-title">Welcome to MediApp</h1>
        <p className="role-subtitle">Select your role to continue</p>

        <div className="role-cards">
          <div
            className="role-card patient-card"
            onClick={() => navigate("/register/patient")}
          >
            <div className="role-card-image-wrap">
              <img src={patientImage} alt="Patient" className="role-card-image" />
            </div>
            <h2 className="role-card-title">I’m a Patient</h2>
          </div>

          <div
            className="role-card doctor-card active"
            onClick={() => navigate("/register/doctor")}
          >
            <div className="role-card-image-wrap">
              <img src={doctorImage} alt="Doctor" className="role-card-image" />
            </div>
            <h2 className="role-card-title">I’m a Doctor</h2>
          </div>
        </div>

        <p className="role-login-text">
          Already have an account? <Link to="/">Log in</Link>
        </p>

        <button
          className="role-register-btn"
          onClick={() => navigate("/register/patient")}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default RoleSelectionPage;