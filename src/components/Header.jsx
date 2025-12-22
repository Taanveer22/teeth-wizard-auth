import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, handleLogout } = useContext(AuthContext);
  // console.log("from header", user?.photoURL);
  const handleLogoutClick = () => {
    handleLogout()
      .then(() => {
        console.log("log out successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
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
        <div>
          {user?.displayName ? (
            <div className="flex gap-2 items-center">
              <p>{user?.displayName}</p>
              <button onClick={handleLogoutClick} className="btn btn-error">
                Logout
              </button>
            </div>
          ) : (
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
