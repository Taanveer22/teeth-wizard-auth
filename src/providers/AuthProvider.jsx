// This AuthProvider is used for demo purposes only....
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

// ✅ Context itself is safe — no privacy issue here
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ OAuth provider (safe)
  // GoogleAuthProvider is officially supported by Firebase
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    // ✅ PRIVACY:
    // Uses Firebase-managed OAuth popup
    // No credentials are handled manually (Google Safe Browsing friendly)
    return signInWithPopup(auth, googleProvider);
  };

  const handleRegister = (email, password) => {
    // ✅ PRIVACY:
    // Firebase securely handles password storage
    // No password logging or interception
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    // ✅ PRIVACY:
    // Standard Firebase email/password login
    // Safe as long as UI hides raw error messages (you already fixed that)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogout = () => {
    // ✅ PRIVACY:
    // Proper sign-out clears session tokens
    return signOut(auth);
  };

  const handleUpdateProfile = (name, photo) => {
    // ✅ PRIVACY:
    // Updates only displayName & photoURL
    // No sensitive data stored
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    // ✅ PRIVACY / SECURITY:
    // Firebase manages auth state securely
    // No manual token handling (Safe Browsing friendly)
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // null if logged out
      setLoading(false);
    });

    // ✅ Cleanup prevents memory leaks
    return () => {
      unSubscribe();
    };
  }, []);

  // ❌ NOTE:
  // Do NOT expose Firebase error.message here
  // UI layer should always show generic messages (you fixed this already)

  const authInfo = {
    handleGoogleSignIn,
    handleRegister,
    handleLogin,
    handleLogout,
    handleUpdateProfile,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
