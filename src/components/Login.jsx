import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { name } = useContext(AuthContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex items-center justify-center">
      <div>
        <form onSubmit={handleLoginSubmit}>
          <h1 className="text-3xl font-semibold text-center mb-3">Login Now{name}</h1>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <div className="flex items-center gap-2 text-lg font-medium p-4">
          <p>New to this website please </p>
          <button className="btn btn-sm btn-secondary">
            <Link to="/register">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
