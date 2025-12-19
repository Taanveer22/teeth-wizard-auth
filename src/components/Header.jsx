import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="bg-gray-400 py-3">
      <div className="flex flex-col sm:flex-row items-center justify-between mx-6">
        <h1 className="text-2xl font-semibold">Teeth Wizard</h1>
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-green-500 p-2" : "bg-gray-400 p-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/treatments"
            className={({ isActive }) =>
              isActive ? "bg-green-500 p-2" : "bg-gray-400 p-2"
            }
          >
            Treatments
          </NavLink>
          <NavLink
            to="/appointments"
            className={({ isActive }) =>
              isActive ? "bg-green-500 p-2" : "bg-gray-400 p-2"
            }
          >
            Appointments
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "bg-green-500 p-2" : "bg-gray-400 p-2"
            }
          >
            Profile
          </NavLink>
        </div>
        <button className="btn btn-primary">
          <NavLink to="/login">Login</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Header;
