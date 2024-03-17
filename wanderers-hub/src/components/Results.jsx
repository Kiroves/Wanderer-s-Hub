import React from 'react'
import countryWanderers from '@/app/api/openAI';
import Button from './Button';
import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { auth } from "@/auth/auth";
import Loading from './loading';
import GoogleMapsComponent from './map';
import { searchPlace } from './map';
const Results = () => {
    const router = useRouter();
    const [state, changeState] = useState('');
    const [loading, setloading] = useState(true);
    const [photo, setPhotos] = useState([]);
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
            console.log("bean");
            console.log(noResult.query);
            console.log(" ");
            //const firstword = noResult.split(' ')[0];
            //const latlon = await handler.getLatLngCountry(firstword);
            //const lat = latlon.split(' ')[0];
            //const lon = latlon.split(' ')[1];
            //setPhotos(searchPlace(firstword, lat, lon));
            //console.log(photo);
        }
        else if (storageCity !== null) {
            const cityResult = await handler.queryActivity(storageCity, storageCountry);
            console.log("wtf")
            //const firstword = cityResult.split(' ')[0];
            //const latlon = await handler.getLatLngCity(storageCity, storageCountry);
            //const lat = latlon.split(' ')[0];
            //const lon = latlon.split(' ')[1];
            //setPhotos(searchPlace(firstword, lat, lon));
            //console.log(photo);
        }
        else if (storageCountry !== null) {
            const countryResult = await handler.queryCity(storageCountry);
            console.log("s(dddd")
            //const firstword = countryResult.split(' ')[0];
            //const latlon = await handler.getLatLngCity(firstword, storageCountry);
            //const lat = latlon.split(' ')[0];
            //const lon = latlon.split(' ')[1];
            //setPhotos(searchPlace(firstword, lat, lon));
            //console.log(photo);
        }
        else {
            console.log("oops")
        }
    }
    return (
        <Button function={api} text={"gabeforreal"} />
    )
}

export default Results
