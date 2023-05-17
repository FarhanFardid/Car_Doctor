import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);
     const auth = getAuth(app);
     const googleProvider = new GoogleAuthProvider();

     const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
      
     }

     const loginUser =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     
     }

     const userUpdate = (user, name) =>{
       return  updateProfile(user, {
            displayName: name, 
          })
     }
     const logout=()=>{
        setLoading(true)
        return signOut(auth)
     }

     const googleUser = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)

     }

     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }

     },[])

const authInfo ={user,
    loading,
    createUser,
    loginUser,
    logout,
    googleUser,
    userUpdate

}

    return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>   
    );
};

export default AuthProvider;