import { GoogleAuthProvider, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, signInWithPopup, updateProfile, onAuthStateChanged } from "firebase/auth";
import auth from '../firebase/firebase.config'
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUserGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    
    const addPhotoName = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser);
            }else{
                setUser(null)
            }
            setLoading(false)
        })
        return ()=>{
            return unSubscribe()
        }
    },[])

    

    const authInfo = { user, createUser, logInUser, logOutUser, logInUserGoogle,addPhotoName,loading }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;