import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { handleGoogleSignIn, handleLogin } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [successText, setSuccessText] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  // ✅ PRIVACY / SECURITY:
  // Safe redirect fallback prevents unsafe or malicious redirects
  // (Google flags redirect-only auth pages without fallback)
  const redirectTo = location.state?.from || "/";

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessText("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLogin(email, password)
      .then(() => {
        setSuccessText("Login successful");
        // ✅ PRIVACY:
        // replace:true avoids redirect loops and suspicious navigation behavior
        navigate(redirectTo, { replace: true });
      })
      .catch(() => {
        // ✅ PRIVACY:
        // Do NOT expose Firebase error.message
        // Raw auth errors are considered phishing signals
        setErrorMessage("Invalid email or password");
      });
  };

  const handleGoogleClick = () => {
    handleGoogleSignIn()
      .then(() => {
        setSuccessText("Signed in successfully");
        // ✅ PRIVACY:
        // Safe navigation after OAuth sign-in
        navigate(redirectTo, { replace: true });
      })
      .catch(() => {
        // ✅ PRIVACY:
        // Generic OAuth error message (no technical details)
        setErrorMessage("Google sign-in failed. Please try again.");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm">
        {/* ✅ PRIVACY / TRUST:
            Clear app identity tells Google this is NOT a fake login page */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Teeth Wizard</h1>
          <p className="text-gray-500 mt-2">
            Demo dental appointment booking application for learning purposes.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLoginSubmit}>
          <fieldset className="fieldset bg-base-300 border rounded-box p-4">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input input-bordered"
              placeholder="demo@email.com"
              required
            />

            <label className="label">Password</label>
            <input
              name="password"
              type="password" // ✅ PRIVACY: password must never be plain text
              className="input input-bordered"
              placeholder="••••••••"
              required
            />

            {/* ✅ PRIVACY:
                Demo wording prevents impersonation detection */}
            <button className="btn btn-neutral mt-4 w-full">
              Sign in (Demo)
            </button>
          </fieldset>
        </form>

        {/* Messages */}
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
        {successText && (
          <p className="text-green-500 text-sm mt-2">{successText}</p>
        )}

        {/* Google Sign In */}
        <button
          onClick={handleGoogleClick}
          className="btn btn-warning w-full mt-4"
        >
          Continue with Google (Demo) {/* ✅ PRIVACY: demo label */}
        </button>

        {/* ✅ PRIVACY POLICY (CRITICAL):
            Auth pages MUST link privacy policy or Google flags them */}
        <p className="text-xs text-center mt-4 text-gray-500">
          This is a demo project. By signing in, you agree to our{" "}
          <Link to="/privacy" className="underline text-blue-500">
            Privacy Policy
          </Link>
        </p>

        {/* Register */}
        <div className="text-center mt-4">
          <p className="text-sm">
            New here?{" "}
            <Link to="/register" className="text-blue-500 underline">
              Create a demo account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
