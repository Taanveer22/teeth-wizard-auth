import { createContext } from "react";
// Declare outside and export so others can use useContext(AuthContext)
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const name = "react";

  const authInfo = {
    name,
  };
  
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};
export { AuthContext };
export default AuthProvider;
