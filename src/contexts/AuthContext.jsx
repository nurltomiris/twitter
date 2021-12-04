import { Box } from "@mui/material";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebaseConfig";

const AuthContext = createContext({
    currentUser: null,
    signInWithGoogle: () => Promise,
    login: () => Promise,
    register: () => Promise,
    logout: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [globalLoading, setGlobalLoading] = useState(true);
    useEffect(() => {
        setGlobalLoading(true);
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user ? user : null);
            setGlobalLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function forgotPassword(email) {
        return sendPasswordResetEmail(auth, email, {
            url: `http://localhost:3000/login`
        });
    }

    function logout() {
        return signOut(auth);
    }

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    if (globalLoading) {
        return <Box>Loading...</Box>;
    }

    return (
        <AuthContext.Provider
            value={ {
                currentUser,
                signInWithGoogle,
                login,
                register,
                logout,
                forgotPassword
            } }
        >
            { children }
        </AuthContext.Provider>
    );
};