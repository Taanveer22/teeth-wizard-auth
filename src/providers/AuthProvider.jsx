import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

// Declare outside and export so others can use useContext(AuthContext)
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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

  const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    // Subscribe to auth state changes
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      // Usually, you would set state here, e.g., setUser(currentUser);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    // Return the unsubscribe function for cleanup
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    handleGoogleSignIn,
    handleRegister,
    handleLogin,
    handleLogout,
    handleUpdateProfile,
    user,
    setUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};
export { AuthContext };
export default AuthProvider;
