import React, { useState } from 'react'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const PickBlank = () => {
    const router = useRouter();
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [stage, setStage] = useState('country');
    const [cities, setCities] = useState([]);

    const selectCountry = (val) => {
        setCountry(val);
    }
    const getCities = async () => {
        axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
            country: 'nigeria'
        })
            .then(response => {
                // Update the cities state with the response data
                setCities(response.data);
                console.log(cities);
            })
            .catch(error => {
                console.log("error");
            });
    }
    const changeState = async () => {
        if (stage == 'country') {
            await getCities();
            setStage('city');
        }
        else if (stage == 'city') {
            setStage('country');
        }
    }
    const returnHome = () => {
        router.push('/');
    }
    const next = () => {
        console.log(city);
        console.log(country);
    }
    const handleInputChange = (event) => {
        setCity(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        console.log(country);
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative">
                <div className="border border-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 flex flex-col items-center">
                    <div className="text-black mt-24">
                        Pick a {stage}
                    </div>
                    {stage === 'country' ? (
                        <div className="flex flex-col">
                            <CountryDropdown value={country} onChange={(val) => selectCountry(val)} className="w-48 h-12 mt-5 mb-5" />
                            <button onClick={changeState}>Next</button>
                            <button onClick={returnHome}>Back</button>
                        </div>
                    ) : stage == 'city' ? (
                        <div className="flex flex-col">
                            <form className="flex flex-col mt-3" onSubmit={handleSubmit}>
                                <input className="border border-black mb-2"
                                    value={city}
                                    onChange={handleInputChange} />
                                <button type="submit" onClick={next}>Next</button>
                            </form>
                            <button className="mt-5" onClick={changeState}>Back</button>
                        </div>
                    ) : (
                        <div>not city or country</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PickBlank