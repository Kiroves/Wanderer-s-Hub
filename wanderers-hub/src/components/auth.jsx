import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/util/firebase";
import { useRouter } from 'next/router';
import GoogleButton from 'react-google-button'
export const handleSigndin = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("email", result.user.email);
        //router.push("/");
    } catch (error) {
        console.log("error", error);
    }
};
const auth = () => {
    return (
        <GoogleButton
            type="light" // can be light or dark
            onClick={() => { console.log('Google button clicked') }}
        />
    )
}

export default auth
