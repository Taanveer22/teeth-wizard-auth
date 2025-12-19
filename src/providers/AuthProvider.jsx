import { createContext, useEffect } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Declare outside and export so others can use useContext(AuthContext)
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>
      console.log(currentUser)
    );

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    handleGoogleSignIn,
    handleRegister,
    handleLogin,
    handleLogout,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};
export { AuthContext };
export default AuthProvider;
