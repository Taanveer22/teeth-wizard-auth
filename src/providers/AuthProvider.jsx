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
      // If currentUser exists, it sets user
      //  if not exists, it sets null
      setUser(currentUser);
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

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export { AuthContext };
export default AuthProvider;
