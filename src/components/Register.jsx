import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { handleRegister, handleUpdateProfile } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [successText, setSuccessText] = useState("");

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    // === reset state status ===
    setErrorMessage("");
    setSuccessText("");

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(name, photo, email, password, confirmPassword);

    // === validation
    if (password.length < 6) {
      setErrorMessage("need to be more than 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("password didnot match");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setErrorMessage("need at least one upper case");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setErrorMessage("need at least one lower case");
      return;
    }

    if (!/\d/.test(password)) {
      setErrorMessage("need at least one number");
      return;
    }

    // === firebase register
    handleRegister(email, password)
      .then((result) => {
        setSuccessText(result.user.email);
        // ==== update profile immediately after register and apply then catch chain agian =====
        handleUpdateProfile(name, photo)
          .then(() => {
            setSuccessText("profile updated");
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="mb-4">
        <form onSubmit={handleRegisterSubmit}>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />

            <label className="label">Photo</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo Url"
            />

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              name="password"
              type="text"
              className="input"
              placeholder="Password"
            />

            <label className="label">Confirm Password</label>
            <input
              name="confirmPassword"
              type="text"
              className="input"
              placeholder="Confirm Password"
            />

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <div className="flex items-center gap-2 text-lg font-medium p-4">
          <p>Already have an account please </p>
          <Link to="/login" className="btn btn-sm btn-primary">
            Login
          </Link>
        </div>
        {errorMessage && (
          <p className="text-red-500 font-medium ">{errorMessage}</p>
        )}
        {successText && (
          <p className="text-green-500 font-medium ">{successText}</p>
        )}
      </div>
    </div>
  );
};

export default Register;
