import React from 'react'
import countryWanderers from '@/app/api/openAI';
import Button from './Button';
import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { auth } from "@/auth/auth";
import Loading from './loading';

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
    const handler = new countryWanderers();
    const api = async () => {
        const no = sessionStorage.getItem('no');
        const storageCity = sessionStorage.getItem('city');
        const storageCountry = sessionStorage.getItem('country');
        if (no === null && storageCity === null && storageCountry === null) {
            router.push('/')
        }
        if (no !== null) {
            const noResult = await handler.queryWanderers(no);
            console.log(no);
            console.log(noResult);
        }
        if (storageCity !== null) {
            const cityResult = await handler.queryActivity(storageCity, storageCountry);
            console.log(storageCity);
            console.log(storageCountry);
            console.log(cityResult);
        }
        if (storageCountry !== null) {
            const countryResult = await handler.queryCity(storageCountry);
            console.log(storageCountry);
            console.log(countryResult);
        }
    }
    return (
        <Button function={api} text={"gabeforreal"} />
    )
}

export default Results
