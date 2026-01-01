import React, { useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createEmailUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }


    const logInWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    const createGoogleUser = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const logOutUser = () => {
        signOut(auth)
        setUser(!user)
    }


    




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            if (currentUser) {
                setUser(currentUser)
            }

        });
        return () => {
            unSubscribe()
        }
    }, [])




    const userInfo = {
        createEmailUser,
        logInWithEmailAndPassword,
        user,
        logOutUser,
        createGoogleUser

    }



    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;