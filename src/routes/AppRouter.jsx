import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicOnlyRoute from "./PublicOnlyRoute";
import DashboardRedirectPage from "../pages/DashboardRedirectPage";
import DoctorOverviewPage from "../features/dashboard/doctor/DoctorOverviewPage";
import LoginPage from "../features/auth/LoginPage";
import PatientDashboardPage from "../features/dashboard/patient/PatientDashboardPage";
import RegisterPageDoctor from "../features/auth/RegisterDoctorPage";
import RegisterPagePatient from "../features/auth/RegisterPatientPage";
import RoleSelectionPage from "../features/auth/RoleSelectionPage";
import AccountSettingsPage from "../features/profile/AccountSettingsPage";
import PatientOverviewPage from "../features/dashboard/patient/PatientOverviewPage";
import PatientProfilePage from "../features/profile/PatientProfilePage";
import DoctorProfilePage from "../features/profile/DoctorProfilePage";
import PatientAppointmentsPage from "../features/appointments/PatientAppointmentsPage";
import PatientSchedulePage from "../features/appointments/PatientSchedulePage";
import PatientConsultationPage from "../features/consultations/ConsultationListPage";
import PatientConsultationDetailPage from "../features/consultations/ConsultationDetailsPage";
import PatientAnalysisPage from "../features/analysis/PatientAnalysisPage";

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicOnlyRoute>
            <RoleSelectionPage />
          </PublicOnlyRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicOnlyRoute>
            <LoginPage />
          </PublicOnlyRoute>
        }
      />
      <Route
        path="/register/doctor"
        element={
          <PublicOnlyRoute>
            <RegisterPageDoctor />
          </PublicOnlyRoute>
        }
      />
      <Route
        path="/register/patient"
        element={
          <PublicOnlyRoute>
            <RegisterPagePatient />
          </PublicOnlyRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardRedirectPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/doctor/dashboard"
        element={
          <PrivateRoute allowedRoles={["DOCTOR"]}>
            <DoctorOverviewPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/patient/dashboard"
        element={
          <PrivateRoute allowedRoles={["PATIENT"]}>
            <PatientDashboardPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/patient/profile"
        element={
          <PrivateRoute allowedRoles={["PATIENT"]}>
            <PatientProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/consultation"
        element={
          <PrivateRoute allowedRoles={["PATIENT"]}>
            <PatientConsultationPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/consultation/:consultationId"
        element={
          <PrivateRoute allowedRoles={["PATIENT"]}>
            <PatientConsultationDetailPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/analysis"
        element={
          <PrivateRoute allowedRoles={["PATIENT"]}>
            <PatientAnalysisPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/doctor/profile"
        element={
          <PrivateRoute allowedRoles={["DOCTOR"]}>
            <DoctorProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/patient-dashboard"
        element={
          <PrivateRoute allowedRoles={["PATIENT"]}>
            <PatientOverviewPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <AccountSettingsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/appointments"
        element={
          <PrivateRoute allowedRoles={["PATIENT"]}>
            <PatientAppointmentsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/appointments/book"
        element={
          <PrivateRoute allowedRoles={["PATIENT"]}>
            <PatientSchedulePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/schedule"
        element={
          <PrivateRoute allowedRoles={["PATIENT"]}>
            <PatientSchedulePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/doctors"
        element={
          <PrivateRoute allowedRoles={["PATIENT"]}>
            <PatientSchedulePage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;
