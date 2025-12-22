// Key used to store appointments in localStorage
const STORAGE_KEY = "appointments";

// =========Function to get all appointments from localStorage
const getAppointments = () => {
  // read from localStorage
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    // convert json string to array
    return JSON.parse(data);
  } else {
    // if nothing stored yet return empty array
    return [];
  }
};

//============== Function to set a new appointment to localStorage
const setAppointments = (appointment) => {
  // get current appointments
  const existingAppointments = getAppointments();
  // add new one
  existingAppointments.push(appointment);
  // finally set to localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existingAppointments));
};

// ==========Function to get appointments for a specific user by email
const getAppointmentsByEmail = (email) => {
  // get all the appointments
  const allAppointments = getAppointments() || [];
  // filter the selected appointments
  const selectedAppointments = allAppointments.filter(
    (item) => item.email === email
  );
  return selectedAppointments;
};

// export get and set functions
export { getAppointments, setAppointments, getAppointmentsByEmail };
