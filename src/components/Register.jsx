import { Link } from "react-router";

const Register = () => {
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex items-center justify-center">
      <div>
        <form onSubmit={handleRegisterSubmit}>
          <h1 className="text-3xl font-semibold text-center mb-3">
            Register Here
          </h1>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />

            <label className="label">Photo</label>
            <input type="text" className="input" placeholder="Photo Url" />

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <div className="flex items-center gap-2 text-lg font-medium p-4">
          <p>Already have an account please </p>
          <button className="btn btn-sm btn-primary">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
