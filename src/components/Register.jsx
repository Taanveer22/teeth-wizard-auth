import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { handleRegister, handleUpdateProfile } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [successText, setSuccessText] = useState("");

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    // ✅ Reset messages
    setErrorMessage("");
    setSuccessText("");

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // ======================
    // ✅ Client-side validation (safe wording)
    // ======================
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password must include one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setErrorMessage("Password must include one lowercase letter");
      return;
    }

    if (!/\d/.test(password)) {
      setErrorMessage("Password must include one number");
      return;
    }

    // ======================
    // ✅ Firebase register (hide raw errors)
    // ======================
    handleRegister(email, password)
      .then(() => {
        setSuccessText("Account created successfully");

        // ✅ Update profile safely
        handleUpdateProfile(name, photo)
          .then(() => {
            setSuccessText("Demo profile updated");
          })
          .catch(() => {
            // ❌ Do NOT expose Firebase error details
            setErrorMessage("Profile update failed");
          });
      })
      .catch(() => {
        // ❌ Hide Firebase auth error details
        setErrorMessage("Registration failed. Please try again.");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm">

        {/* ✅ App identity (anti-phishing) */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Teeth Wizard</h1>
          <p className="text-gray-500 mt-2">
            Demo dental appointment booking application for learning purposes.
          </p>
        </div>

        {/* ✅ Register form */}
        <form onSubmit={handleRegisterSubmit}>
          <fieldset className="fieldset bg-base-300 border rounded-box p-4">

            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input input-bordered"
              placeholder="Your name"
              required
            />

            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="url"
              className="input input-bordered"
              placeholder="https://example.com/photo.jpg"
            />

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input input-bordered"
              placeholder="demo@email.com"
              required
            />

            {/* ❌ Never use type="text" for passwords */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password" // ✅ hides password
              className="input input-bordered"
              placeholder="••••••••"
              required
            />

            <label className="label">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password" // ✅ hides password
              className="input input-bordered"
              placeholder="••••••••"
              required
            />

            <button className="btn btn-neutral mt-4 w-full">
              Create Account (Demo)
            </button>
          </fieldset>
        </form>

        {/* ✅ Messages */}
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
        {successText && (
          <p className="text-green-500 text-sm mt-2">{successText}</p>
        )}

        {/* ✅ Privacy notice (required) */}
        <p className="text-xs text-center mt-4 text-gray-500">
          This is a demo project. By registering, you agree to our{" "}
          <Link to="/privacy" className="underline text-blue-500">
            Privacy Policy
          </Link>
        </p>

        {/* ✅ Login link */}
        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 underline">
              Sign in
            </Link>
          </p>
        </div>

       
      </div>
    </div>
  );
};

export default Register;
