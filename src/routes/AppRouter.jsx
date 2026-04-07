import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPageDoctor from "../pages/RegisterPageDoctor";
import RegisterPagePatient from "../pages/RegisterPagePatient";
import RoleSelectionPage from "../pages/RoleSelectionPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register/doctor" element={<RegisterPageDoctor />} />
      <Route path="/register/patient" element={<RegisterPagePatient />} />
      <Route path="/roleSelection" element={<RoleSelectionPage />} />
    </Routes>
  );
}

export default AppRouter;