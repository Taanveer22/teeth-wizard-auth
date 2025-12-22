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
  const [loading, setLoading] = useState(true);
  

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const handleRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const handleUpdateProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    // Subscribe to auth state changes
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth state change user", currentUser);
      // Usually, you would set state here, e.g., setUser(currentUser);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      // after get the user set loading value to false
      setLoading(false);
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
    loading,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};
export { AuthContext };
export default AuthProvider;
