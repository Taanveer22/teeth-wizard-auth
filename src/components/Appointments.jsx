import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { getAppointmentsByEmail } from "../utils/localStorage";
import Profile from "./Profile";

const Appointments = () => {
  const { user } = useContext(AuthContext);
  const [storedAppointments, setStoredAppointments] = useState([]);

  useEffect(() => {
    const updateData = () => {
      if (user?.email) {
        const selectedAppointments = getAppointmentsByEmail(user.email);
        setStoredAppointments(selectedAppointments);
      }
    };
    updateData();
  }, [user?.email]);

  console.log(storedAppointments);

  return (
    <div>
      <h1>hi{storedAppointments.length}</h1>

      <div className="grid grid-cols-1 gap-6">
        {storedAppointments.map((element, index) => (
          <Profile key={index} element={element}></Profile>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
