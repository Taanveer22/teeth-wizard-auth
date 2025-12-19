const Modal = () => {
  const handleModalFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="custom_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleModalFormSubmit}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <label className="label">First Name</label>
              <input type="text" className="input" placeholder="First Name" />

              <label className="label">Last Name</label>
              <input type="text" className="input" placeholder="Last Name" />

              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />

              <label className="label">Phone Number</label>
              <input
                type="number"
                className="input"
                placeholder="Phone Number"
              />

              <label className="label">Appointment Date</label>
              <input
                type="date"
                className="input"
                placeholder="Appointment Date"
              />

              <label className="label">Address</label>
              <input type="text" className="input" placeholder="Address" />

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
