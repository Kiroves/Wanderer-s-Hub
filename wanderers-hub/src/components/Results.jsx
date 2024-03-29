import React from 'react'
import Button from './Button';
import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { auth } from "@/auth/auth";
import Loading from './loading';
import GoogleMapsComponent from './map';

const Results = () => {
    const router = useRouter();
    const [state, changeState] = useState('');
    const [loading, setloading] = useState(true);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setloading(false);
        } else {
            router.push('/')
        }
    });
    if (loading === true) {
        return (
            <Loading />)
    }
    return (
        <>
        </>
    )
}

export default Results
