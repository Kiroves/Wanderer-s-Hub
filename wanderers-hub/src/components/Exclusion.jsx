import React, { useState } from 'react'
import Button from './Button'
import Image from 'next/image';
import Exclude from './Exclude';
import countryWanderers from '@/app/api/openAI';

const Exclusion = () => {
    const [countries, setCountries] = useState([])
    const saveCountries = (val) => {
        setCountries(val);
    }
    const handler = new countryWanderers();
    return (
        <div className="bg-[url('/blurrybg.png')] bg-cover bg-center bg-no-repeat h-screen">
            <div className="w-[512px] h-[470px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-25 rounded-2xl border border-white border-opacity-20">
                <div className = "w-96 text-white text-4xl m-12">
                    Help us Optimize Your Experience
                </div>
                <div className = "w-96 text-white text-xl m-9">
                    Are there any destinations you would like us to exclude from your results? Select all that apply, then press ‘Next’
                    <Exclude func = {saveCountries}/>
                    {/*send countries to gabe*/}
                    <Button function = {() => handler.queryWanderers(countries)} text = "next"/>
                </div>
            </div>

        </div>
    )
}

export default Exclusion