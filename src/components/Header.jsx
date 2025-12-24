import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, handleLogout } = useContext(AuthContext);

  const handleLogoutClick = () => {
    handleLogout()
      .then(() => {
        // ✅ PRIVACY:
        // Avoid alerts or sensitive wording
        console.log("Logout successful");
      })
      .catch(() => {
        // ✅ PRIVACY:
        // Never expose Firebase error.message
        console.log("Logout failed");
      });
  };

  return (
    <header className="bg-gray-400 py-3">
      <div className="flex flex-col sm:flex-row items-center justify-between mx-6">

        {/* ✅ TRUST SIGNAL */}
        <div>
          <h1 className="text-2xl font-semibold">Teeth Wizard</h1>
          <p className="text-xs text-gray-700">
            Demo dental appointment booking application
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 mt-2 sm:mt-0">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "bg-green-500 p-2 rounded" : "bg-gray-400 p-2 rounded"
          }>
            Home
          </NavLink>

          <NavLink to="/treatments" className={({ isActive }) =>
            isActive ? "bg-green-500 p-2 rounded" : "bg-gray-400 p-2 rounded"
          }>
            Treatments
          </NavLink>

          <NavLink to="/appointments" className={({ isActive }) =>
            isActive ? "bg-green-500 p-2 rounded" : "bg-gray-400 p-2 rounded"
          }>
            Appointments
          </NavLink>

          {/* ✅ REQUIRED PRIVACY LINK */}
          <NavLink to="/privacy" className={({ isActive }) =>
            isActive ? "bg-green-500 p-2 rounded" : "bg-gray-400 p-2 rounded"
          }>
            Privacy
          </NavLink>
        </nav>

        {/* Auth actions */}
        <div className="mt-2 sm:mt-0">
          {user ? (
            <div className="flex gap-2 items-center">
              {/* ✅ PRIVACY:
                  Never show email (PII)
                  displayName is safe */}
              <p className="text-sm">
                {user.displayName || "Signed in user"}
              </p>

              <button
                onClick={handleLogoutClick}
                className="btn btn-error btn-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link className="btn btn-primary btn-sm" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
