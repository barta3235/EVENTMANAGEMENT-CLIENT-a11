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
                const userEmail= currentUser?.email || user?.email;
                const loggedEmail={email:userEmail};
                axios.post('http://localhost:5000/jwt',loggedEmail,{withCredentials:true})
                .then((data)=>{
                    console.log(data?.data?.success)
                })
            }else{
                setUser(null)
                setUser(currentUser);
                const userEmail= currentUser?.email || user?.email;
                const loggedEmail={email:userEmail};
                axios.post('http://localhost:5000/logOutJwt',loggedEmail,{withCredentials:true})
                .then((data)=>{
                    console.log(data?.data?.success)
                })
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