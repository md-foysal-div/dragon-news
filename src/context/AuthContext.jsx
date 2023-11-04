/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import auth from "../fairbase/fairbase.config";
import { useState } from "react";
import { useEffect } from "react";
export const Authcontext = createContext(null);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true)
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const googleLogIn = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };
  const GitHubLogIn = () => {
    setLoader(true)
    return signInWithPopup(auth, gitHubProvider);
  };
  const createUser = (email, password) => {
    setLoader(true)
    console.log(email, password);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const LogIn = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (carruntUser) => {
      if (setUser) {
        setUser(carruntUser);
        setLoader(false)
      }
      return () => {
        unsubscribe();
        
      };
    });
  }, []);

  const logOut = () => {
    signOut(auth);
  };

  const item = {
    googleLogIn,
    GitHubLogIn,
    createUser,
    LogIn,
    user,
    logOut,
    loader
  };
  return <Authcontext.Provider value={item}>{children}</Authcontext.Provider>;
};

export default AuthContext;
