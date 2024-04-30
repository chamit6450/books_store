//to ensure the private crafting system
import React, { Children, createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth= getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser]=useState();
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginwithGoogle = ()=>{
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    }

    const login=(email,password)=>{
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = ()=>{
      return signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,currentUser => {
        // console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      });
      return ()=>{
        return unsubscribe();
      }
    },[])
    const authInfo = {
        user,
        createUser,
        loginwithGoogle,
        loading,
        login,
        logOut
    }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;