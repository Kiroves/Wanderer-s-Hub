import React from 'react'
import countryWanderers from '@/app/api/openAI';
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
    const [photo, setPhotos] = useState([]);
    const [selected, changeSelected] = useState(0);
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

            const firstWords = noResult.map(sentence => {
                // Split the sentence by whitespace
                const words = sentence.trim().split(/[\n\s\\]+/);
                // Return the first word after trimming any leading/trailing whitespace
                return words[0];
            });
            const latLonPromises = firstWords.map(async (word) => {
                try {
                    const latlon = await handler.getLatLngCountry(word);
                    return latlon;
                } catch (error) {
                    // Handle errors if needed
                    console.error(`Error fetching latlng for ${word}:`, error);
                    return null;
                }
            });
            const lats = [];
            const lons = [];

            Promise.all(latLonPromises)
                .then((latLons) => {
                    latLons.forEach(latlon => {
                        if (latlon) {
                            const [lat, lon] = latlon.split(' ');
                            lats.push(parseFloat(lat));
                            lons.push(parseFloat(lon));
                        }
                    });
                })
                .catch((error) => {
                    // Handle errors if needed
                    console.error("Error fetching latlng for multiple countries:", error);
                });
            setPhotos(searchPlace(firstWords[selected], lats[selected], lons[selected]));
            console.log(photo);
        }
        else if (storageCity !== null) {
            const cityResult = await handler.queryActivity(storageCity, storageCountry);
            const firstword = cityResult.split(' ')[0];
            const latlon = await handler.getLatLngCity(storageCity, storageCountry);
            const lat = latlon.split(' ')[0];
            const lon = latlon.split(' ')[1];
            setPhotos(searchPlace(firstword, lat, lon));
            console.log(photo);
        }
        else if (storageCountry !== null) {
            const countryResult = await handler.queryCity(storageCountry);
            const firstword = countryResult.split(' ')[0];
            const latlon = await handler.getLatLngCity(firstword, storageCountry);
            const lat = latlon.split(' ')[0];
            const lon = latlon.split(' ')[1];
            setPhotos(searchPlace(firstword, lat, lon));
            console.log(photo);
        }
        else {
            console.log("oops")
        }
    }
    return (
        <>
            <Button function={api} text={"gabeforreal"} />
        </>
    )
}

export default Results
