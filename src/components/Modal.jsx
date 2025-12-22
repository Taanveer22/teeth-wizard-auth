import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { setAppointments } from "../utils/localStorage";

const Modal = ({ treatment }) => {
  const { user } = useContext(AuthContext);

  const handleModalFormSubmit = (e) => {
    e.preventDefault();
    // console.log(e);

    // Collect all values directly using e.target.FIELDNAME.value
    const firstName = e.target.fname.value;
    const lastName = e.target.lname.value;
    const email = user?.email;
    const phoneNumber = e.target.number.value;
    const date = e.target.date.value;
    const address = e.target.address.value;
    // console.log(firstName, lastName, email, phoneNumber, date, address);
    const appointment = {
      treatment,
      firstName,
      lastName,
      email,
      phoneNumber,
      date,
      address,
    };

    // ======= local storage set the appointment using our helper function
    setAppointments(appointment);

    // clear the form
    e.target.reset();
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="custom_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleModalFormSubmit}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <label className="label">First Name</label>
              <input
                name="fname"
                type="text"
                className="input"
                placeholder="First Name"
              />

              <label className="label">Last Name</label>
              <input
                name="lname"
                type="text"
                className="input"
                placeholder="Last Name"
              />

              <label className="label">Email</label>
              <input
                readOnly
                value={user?.email || ""}
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />

              <label className="label">Phone Number</label>
              <input
                name="number"
                type="number"
                className="input"
                placeholder="Phone Number"
              />

              <label className="label">Appointment Date</label>
              <input
                name="date"
                type="date"
                className="input"
                placeholder="Appointment Date"
              />

              <label className="label">Address</label>
              <input
                name="address"
                type="text"
                className="input"
                placeholder="Address"
              />

              <button className="btn btn-neutral mt-4">Make Appointment</button>
            </fieldset>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
