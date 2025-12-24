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

  // console.log(storedAppointments);

  return (
    <div className="w-11/12 mx-auto mb-8">
      {/* ✅ TRUST SIGNAL:
          Public explanation of the app
          (Google dislikes auth-only sites without context) */}
      <section className="text-center py-6 bg-base-300 mb-8">
        <h1 className="text-3xl font-bold">Teeth Wizard</h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Teeth Wizard is a demo dental appointment booking application built
          for learning and practice purposes. No real medical services are
          provided.
        </p>
      </section>
      <h1 className="text-2xl font-medium text-center mb-4">
        Total Appointment Booked : {storedAppointments.length}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {storedAppointments.map((element, index) => (
          <Profile key={index} element={element}></Profile>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
