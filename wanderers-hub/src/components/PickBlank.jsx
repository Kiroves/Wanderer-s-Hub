import React, { useState } from 'react'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";
import axios from 'axios';
import Image from 'next/image';
import Cities from './Cities';
import Button from './Button';
import Exclude from './Exclude';
import Country from './Country';

const PickBlank = () => {
    const successToast = () => {
        toast.success("Success !", {
            position: "bottom-right",
        });
    };
    const failToast = () => {
        toast.error("Error Retrieving Cities !", {
            position: "bottom-right",
        });
    };
    const router = useRouter();
    const router2 = useRouter();
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [stage, setStage] = useState('country');
    const [cities, setCities] = useState([]);
    const [savedCities, setSavedCities] = useState([]);


    const saveCities = (val) => {
        setSavedCities(val);
    }

    const selectCountry = (val) => {
        setCountry(val.label);
        console.log(val.label);
    }
    const getCities = async () => {
        try {
            const response = await axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
                country: country
            });
            successToast();
            // Update the cities state with the response data
            setCities(response.data);
            console.log(response.data); // Make sure data is received correctly
        } catch (error) {
            failToast();
            console.error("Error fetching cities:", error);
        }
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
        <div className="bg-[url('/bg2.png')] overflow-hidden bg-cover h-screen flex flex-row justify-between">
            {stage === 'country' ? (
                <>
                    <div className='flex flex-col justify-between w-1/2'>
                        <div className='flex flex-row gap-x-2'>.
                            <div className=" pl-36 pt-24 h-36 text-slate-300 text-5xl font-bold font-Montserrat leading-10 tracking-tight">Pick a {stage} </div>
                            <div className='pt-24'>
                                <Image
                                    src="/way.png"
                                    alt="waypoint"
                                    width={35}
                                    height={35} />
                            </div>
                        </div>
                        <div className='flex flex-row justify-between pl-36 pb-32'>
                            <div className="w-full 6 h-96 relative bg-opacity-25  bg-gradient-to-b from-white/20 via-blue-300/20 to-yellow-200/20 rounded-2xl border border-white border-opacity-20">
                                <div className="w-full h-20 left-[30px] top-[30px] absolute flex-col justify-start items-start inline-flex">
                                    <div className="self-stretch text-white text-2xl font-normal font-sans">195 Countries, Which will you choose?</div>
                                    <div className=" pt-2 self-stretch text-white text-opacity-70 text-md font-normal font-inter ">Enter a country of your choice or let us help you!</div>

                                    <div className=" pt-2 flex flex-col w-full text-white text-opacity-50 text-sm font-normal font-inter"> Destination
                                        <div className='w-2/3 pt-2 pb-4'>
                                            <Country func={selectCountry} />
                                        </div>
                                        <Button function={changeState} text={"GET STARTED"} />
                                        <div className=" text-white text-lg font-normal font-sans pt-4">Can’t Decide?</div>
                                        <div className=" text-white text-lg font-normal font-sans pb-4">Let Us Help You Choose</div>
                                        <Button function={() => router2.push('/picklocation/choose')} text={"Let Us Choose"} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-end'>
                        <Image
                            src="/earth.png"
                            alt="earth"
                            width={800}
                            height={800} />
                    </div>

                </>)
                : (<div className='flex flex-col justify-between w-1/2 overflow-hidden'>
                    <div className='flex flex-row gap-x-2'>.
                        <div className=" pl-36 pt-24 h-36 text-slate-300 text-5xl font-bold font-Montserrat leading-10 tracking-tight">Pick a {stage} </div>
                        <div className='pt-24'>
                            <Image
                                src="/way.png"
                                alt="waypoint"
                                width={35}
                                height={35} />
                        </div>
                    </div>
                    <div className=" z-10 mt-44 ml-36 w-[512px] h-[470px] absolute bg-gradient-to-b from-white/20 via-blue-300/20 to-yellow-200/20 bg-opacity-25 rounded-2xl border border-white border-opacity-20">
                        <div className="w-full h-20 left-[30px] top-[30px] absolute flex-col justify-start items-start inline-flex">
                            <div className="self-stretch text-white text-2xl font-normal font-['Sansation']">Your Travel Buddies are waiting for you!</div>
                            <div className="self-stretch text-white text-opacity-70 text-lg font-normal font-['Inter'] ">Enter a city of your choice or let us help you!</div>

                            <div className="flex flex-col w-2/3 text-white text-opacity-50 text-lg font-normal font-['Inter']"> Destination
                                <Cities cities={cities} func={saveCities} />
                                <Button text="a" function={() => console.log(savedCities)} />
                                <button className="mt-5" onClick={changeState}>Back</button>
                                <Button function={() => router2.push('/picklocation/choose')} text="Let us Choose" />
                            </div>
                        </div>
                    </div>
                    <div className='absolute overflow-hidden inset-0 flex items-center justify-center'>
                        <div className=' overflow-hidden flex flex-col justify-end pt-44 pl-96 z-2'>
                            <Image
                                src="/island.png"
                                alt="earth"
                                width={1000}
                                height={1000} />
                        </div>
                    </div>
                </div>
                )}
        </div>
    )
}

export default PickBlank