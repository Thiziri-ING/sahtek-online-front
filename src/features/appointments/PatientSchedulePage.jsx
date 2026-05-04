import { useMemo, useState } from "react";
import {
  FiSearch,
  FiStar,
  FiArrowRight,
  FiChevronLeft,
  FiCheckCircle,
  FiHelpCircle,
  FiClock,
} from "react-icons/fi";
import DashboardShell from "../../components/layout/DashboardShell";
import "../../styles/patient-schedule.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Mohamed Dehmani",
    specialty: "Cardiologist",
    rating: 4.9,
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Dr. Asma Benali",
    specialty: "Dermatologist",
    rating: 4.8,
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Dr. Karim Belkacem",
    specialty: "Neurologist",
    rating: 4.7,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    name: "Dr. Leila Fares",
    specialty: "Pediatrician",
    rating: 4.8,
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
  },
];

const availableDates = [
  { id: "2026-05-12", label: "May 12", day: "Tue", full: "Tuesday, May 12" },
  { id: "2026-05-13", label: "May 13", day: "Wed", full: "Wednesday, May 13" },
  { id: "2026-05-14", label: "May 14", day: "Thu", full: "Thursday, May 14" },
  { id: "2026-05-15", label: "May 15", day: "Fri", full: "Friday, May 15" },
  { id: "2026-05-16", label: "May 16", day: "Sat", full: "Saturday, May 16" },
  { id: "2026-05-17", label: "May 17", day: "Sun", full: "Sunday, May 17" },
];

const availableTimes = [
  "08:00 AM",
  "09:30 AM",
  "10:45 AM",
  "12:15 PM",
  "01:30 PM",
  "03:00 PM",
  "04:15 PM",
  "05:30 PM",
];

const stepList = [
  { id: 1, title: "Doctor" },
  { id: 2, title: "Date" },
  { id: 3, title: "Time" },
  { id: 4, title: "Confirm" },
];

export default function PatientSchedulePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const normalized = `${doctor.name} ${doctor.specialty}`.toLowerCase();
      return normalized.includes(searchQuery.toLowerCase());
    });
  }, [searchQuery]);

  const selectedDateLabel = availableDates.find((item) => item.id === selectedDate)?.full;
  const selectedTimeLabel = selectedTime;

  const canContinue =
    currentStep === 1
      ? !!selectedDoctor
      : currentStep === 2
      ? !!selectedDate
      : currentStep === 3
      ? !!selectedTime
      : true;

  const handleNext = () => {
    if (!canContinue) return;
    if (currentStep === 4) return;
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep === 1) return;
    setCurrentStep((prev) => prev - 1);
  };

  const handleConfirm = () => {
    if (!selectedDoctor || !selectedDate || !selectedTime) return;
    setBookingConfirmed(true);
  };

  return (
    <DashboardShell
      title="Book Appointment"
      description="Follow the booking steps to reserve your appointment."
    >
      <div className="patient-schedule-page">
        <div className="schedule-card">
          <div className="schedule-stepper">
            {stepList.map((step) => (
              <div
                key={step.id}
                className={`step-item ${currentStep === step.id ? "active" : ""}`}
              >
                <div className="step-badge">{step.id}</div>
                <div>
                  <div className="step-title">{step.title}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="schedule-body-grid">
            <div className="schedule-main-panel">
              {bookingConfirmed && (
                <div className="booking-success-banner">
                  <div className="success-icon">
                    <FiCheckCircle />
                  </div>
                  <div>
                    <h3>Appointment Confirmed</h3>
                    <p>Your appointment has been successfully booked.</p>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <section className="step-section">
                  <div className="step-header">
                    <div>
                      <h2>Choose your doctor</h2>
                      <p>Select a doctor you would like to book an appointment with.</p>
                    </div>
                  </div>

                  <div className="search-input-row">
                    <FiSearch />
                    <input
                      type="search"
                      placeholder="Search doctor by name or specialty..."
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                    />
                  </div>

                  <div className="doctor-list">
                    {filteredDoctors.map((doctor) => {
                      const isSelected = selectedDoctor?.id === doctor.id;
                      return (
                        <button
                          key={doctor.id}
                          type="button"
                          className={`doctor-card ${isSelected ? "selected" : ""}`}
                          onClick={() => setSelectedDoctor(doctor)}
                        >
                          <div className="doctor-card-inner">
                            <div className="doctor-card-left">
                              <img
                                src={doctor.avatar}
                                alt={doctor.name}
                                className="doctor-avatar"
                              />
                              <div>
                                <h3>{doctor.name}</h3>
                                <p className="doctor-specialty">{doctor.specialty}</p>
                                <div className="doctor-rating">
                                  <FiStar />
                                  <span>{doctor.rating.toFixed(1)}</span>
                                </div>
                              </div>
                            </div>
                            <div className="doctor-card-right">
                              {isSelected ? (
                                <span className="doctor-selected-pill">
                                  <FiCheckCircle /> Selected
                                </span>
                              ) : (
                                <FiArrowRight />
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}

              {currentStep === 2 && (
                <section className="step-section">
                  <div className="step-header">
                    <div>
                      <h2>Choose a date</h2>
                      <p>Select the day that works best for your schedule.</p>
                    </div>
                  </div>

                  <div className="date-grid">
                    {availableDates.map((dateOption) => {
                      const isSelected = selectedDate === dateOption.id;
                      return (
                        <button
                          key={dateOption.id}
                          type="button"
                          className={`date-card ${isSelected ? "selected" : ""}`}
                          onClick={() => setSelectedDate(dateOption.id)}
                        >
                          <span className="date-day">{dateOption.day}</span>
                          <span className="date-label">{dateOption.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}

              {currentStep === 3 && (
                <section className="step-section">
                  <div className="step-header">
                    <div>
                      <h2>Choose a time</h2>
                      <p>Select an available time slot for your appointment.</p>
                    </div>
                  </div>

                  <div className="time-grid">
                    {availableTimes.map((time) => {
                      const isSelected = selectedTime === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          className={`time-card ${isSelected ? "selected" : ""}`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}

              {currentStep === 4 && (
                <section className="step-section">
                  <div className="step-header">
                    <div>
                      <h2>Confirm Appointment</h2>
                      <p>Review the details of your appointment before confirming.</p>
                    </div>
                  </div>

                  <div className="summary-card">
                    <div className="summary-row">
                      <span>Doctor</span>
                      <strong>{selectedDoctor?.name}</strong>
                    </div>
                    <div className="summary-row">
                      <span>Specialty</span>
                      <strong>{selectedDoctor?.specialty}</strong>
                    </div>
                    <div className="summary-row">
                      <span>Date</span>
                      <strong>{selectedDateLabel}</strong>
                    </div>
                    <div className="summary-row">
                      <span>Time</span>
                      <strong>{selectedTimeLabel}</strong>
                    </div>
                  </div>
                </section>
              )}

              <div className="action-row">
                <button
                  type="button"
                  className="button-secondary"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                >
                  <FiChevronLeft /> Back
                </button>
                {currentStep < 4 ? (
                  <button
                    type="button"
                    className="button-primary"
                    onClick={handleNext}
                    disabled={!canContinue}
                  >
                    Next
                    <FiArrowRight />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="button-primary"
                    onClick={handleConfirm}
                    disabled={!canContinue || bookingConfirmed}
                  >
                    Confirm Appointment
                  </button>
                )}
              </div>
            </div>

            <aside className="schedule-help-panel">
              <div className="help-card">
                <div className="help-icon-wrap">
                  <FiHelpCircle />
                </div>
                <h3>We’re here to help you</h3>
                <p>
                  Choose the right doctor and book your appointment in just a few
                  steps.
                </p>
                <div className="help-detail-row">
                  <FiClock />
                  <span>Safe and secure appointment flow</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
