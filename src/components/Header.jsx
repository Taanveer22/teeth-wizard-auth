import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="bg-blue-400 py-3">
      <div className="flex flex-col sm:flex-row items-center justify-between mx-6">
        <h1 className="text-2xl font-semibold">Teeth Wizard</h1>
        <div className="flex gap-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/treatments">Treatments</NavLink>
          <NavLink to="/appointments">Appointments</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Header;
