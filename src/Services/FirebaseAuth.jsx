import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from './Firebase.config';

export const AuthContext = createContext(null)
const FirebaseAuth = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
            else {
                setUser(null)
                setLoading(false)
            }
        })
        return () => unSubscribe()
    }, [user, loading])


    const Register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const GoogleLogin = () => {
        const GoogleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, GoogleProvider)
    }

    const Logout = () => {
        return signOut(auth)
    }

    const AuthInfo = {
        user,
        GoogleLogin,
        Register,
        Login,
        loading,
        Logout
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseAuth;