import React from 'react'
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth";
import { auth } from "@/auth/auth";
import { useRouter } from 'next/router';
import GoogleButton from 'react-google-button'
export const validateToken = async (token) => {
    const provider = new GoogleAuthProvider();

};

export const signOutGoogle = async () => {

    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
};

export const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("email", result.user.email);
        console.log("sign in ");
        router.push("/picklocation");
    } catch (error) {
        console.log("error", error);
    }
};
const Auth = () => {
    return (
        <GoogleButton
            type="light" // can be light or dark
            onClick={handleSignIn}
        />
    )
}

export default Auth
