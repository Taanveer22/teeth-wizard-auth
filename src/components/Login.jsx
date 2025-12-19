import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { handleGoogleSignIn, handleLogin } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [successText, setSuccessText] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // reset state status
    setErrorMessage("");
    setSuccessText("");

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // === firebase login
    handleLogin(email, password)
      .then((result) => {
        setSuccessText(result.user.email);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleGoogleClick = () => {
    handleGoogleSignIn()
      .then((result) => {
        setSuccessText(result.user.displayName);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="flex items-center justify-center">
      <div>
        <form onSubmit={handleLoginSubmit}>
          <h1 className="text-3xl font-semibold text-center mb-3">Login Now</h1>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4">
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
              type="password"
              className="input"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        {errorMessage && (
          <p className="text-red-500 font-medium">{errorMessage}</p>
        )}
        {successText && (
          <p className="text-green-500 font-medium">{successText}</p>
        )}
        <div className="flex justify-center items-center mt-4">
          <button onClick={handleGoogleClick} className="btn btn-warning">
            Sign in with google
          </button>
        </div>
        <div className="flex items-center gap-2 text-lg font-medium p-4">
          <p>New to this website please </p>
          <Link to="/register" className="btn btn-sm btn-primary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
