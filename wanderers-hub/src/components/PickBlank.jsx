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
import { getAuth, onAuthStateChanged } from "firebase/auth";


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
    const [savedCities, setSavedCities] = useState('');
    sessionStorage.clear();
    const handleClick = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {

            } else {
                router.push('/')
            }
        });

    };
    const saveCities = (val) => {
        setSavedCities(val);
    }
    const final = () => {
        sessionStorage.setItem('country', country);
        router.push('/results');
    }
    const finalCity = () => {
        sessionStorage.setItem('country', country);
        const cityfinal = savedCities.map(city => city.label);
        sessionStorage.setItem('city', cityfinal);
        router.push('/results');
    }

    const selectCountry = (val) => {
        setCountry(val.label);
    }
    const getCities = async () => {
        try {
            const response = await axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
                country: country
            });
            successToast();
            // Update the cities state with the response data
            setCities(response.data);
        } catch (error) {
            failToast();
            console.error("Error fetching cities:", error);
        }
    }
    const changeState = async () => {
        if (stage == 'country') {
            if (country === '') {
                failToast();
            }
            else {
                await getCities();
                setStage('city');
            }
        }
        else if (stage == 'city') {
            setStage('country');
        }
    }
    const returnHome = () => {
        router.push('/');
    }
    const handleInputChange = (event) => {
        setCity(event.target.value);
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
                        <div className='flex flex-row justify-between pl-36 pb-12'>
                            <div className="w-full h-[480px] relative bg-opacity-25  bg-gradient-to-b from-white/20 via-blue-300/20 to-yellow-200/20 rounded-2xl border border-white border-opacity-20">
                                <div className="w-full h-20 left-[30px] top-[20px] absolute flex-col justify-start items-start inline-flex">
                                    <div className=" pl-4 self-stretch text-white text-2xl font-normal font-sans">195 Countries, Which will you choose?</div>
                                    <div className=" pl-4 pt-2 self-stretch text-white text-opacity-70 text-md font-normal font-inter ">Enter a country of your choice or let us help you!</div>

                                    <div className="  pl-4 flex flex-col w-full text-white text-opacity-50 text-sm font-normal font-inter"> Destination
                                        <div className='w-2/3 pt-2 pb-4'>
                                            <Country func={selectCountry} />
                                        </div>
                                        <div className="flex flex-row">
                                            <div className="w-1/2 flex flex-col">
                                                <div className="pl-3 pt-4">
                                                    <Button function={changeState} text={"GET STARTED"} />
                                                </div>

                                                <div className="pl-3 text-white text-xl font-light font-sans pt-4">Can’t Decide? Let Us</div>
                                                <div className="pl-3 text-white text-xl font-light font-sans pb-4">Help You Choose</div>
                                                <div className="pl-3">
                                                    <Button function={() => router2.push('./picklocation/choose')} text={"Let Us Choose"} />
                                                </div>
                                                <div className="pt-8 flex flex-row cursor-default hover:cursor-pointer" onClick={returnHome}>
                                                    <div>
                                                        <Image
                                                            src="/back.png"
                                                            alt="back"
                                                            width={25}
                                                            height={25} />
                                                    </div>
                                                    <div className="pl-3 font-inter cursor-default hover:cursor-pointer" onClick={returnHome}>
                                                        Take me back to Home Page
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-2/3 flex flex-row justify-start">
                                                <Image
                                                    src="/camellight.png"
                                                    alt="camel with light bulb"
                                                    width={250}
                                                    height={250} />
                                            </div>
                                        </div>
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
                    <div className=" z-10 mt-44 ml-36 w-[608px] h-[480px] absolute bg-gradient-to-b from-white/20 via-blue-300/20 to-yellow-200/20 bg-opacity-25 rounded-2xl border border-white border-opacity-20">
                        <div className="w-full h-20 left-[30px] top-[20px] absolute flex-col justify-start items-start inline-flex">
                            <div className="pl-4 self-stretch text-white text-2xl font-normal font-sans">Your Travel Buddies are waiting for you!</div>
                            <div className="pl-4 pt-2 self-stretch text-white text-opacity-70 text-md font-normal font-inter  ">Enter a city of your choice or let us help you!</div>

                            <div className="pl-4 flex flex-col w-full text-white text-opacity-50 text-sm font-normal font-inter"> Destination
                                <div className='w-2/3 pt-2 pb-4'>
                                    <Cities cities={cities} func={saveCities} />
                                </div>
                                <div className="flex flex-row">
                                    <div className="w-1/2 flex flex-col">
                                        <div className="pl-3 pt-4">
                                            <Button function={finalCity} text={"GET STARTED"} />
                                        </div>

                                        <div className="pl-3 text-white text-xl font-light font-sans pt-4">Can’t Decide? Let Us</div>
                                        <div className="pl-3 text-white text-xl font-light font-sans pb-4">Help You Choose</div>
                                        <div className="pl-3">
                                            <Button function={final} text={"Let Us Choose"} />
                                        </div>
                                        <div className="pt-8 flex flex-row cursor-default hover:cursor-pointer" onClick={returnHome}>
                                            <div>
                                                <Image
                                                    src="/back.png"
                                                    alt="back"
                                                    width={25}
                                                    height={25} />
                                            </div>
                                            <div className="pl-3 font-inter cursor-default hover:cursor-pointer" onClick={returnHome}>
                                                Take me back to Home Page
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute overflow-hidden inset-0 flex items-center justify-center'>
                        <div className=' overflow-hidden flex flex-col justify-end pt-44 pl-[490px] z-2'>
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