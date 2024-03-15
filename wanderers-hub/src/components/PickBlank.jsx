import React, { useState } from 'react'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const PickBlank = ( {blank} ) => {
    const [country, setCountry] = useState('');

    const selectCountry = (val) => {
        setCountry(val);
    }


    return (
        <div className="flex justify-center items-center h-screen">
            <div className = "relative">
                <div className = "border border-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 flex flex-col items-center">
                    <div className = "text-black mt-24"> 
                        Pick a {blank}
                    </div>
                    {blank === 'country' ? (
                    <CountryDropdown value = {country} onChange = {(val) => selectCountry(val)} className = "w-48 h-12 mt-5"/>
                    ) :(
                    <div>placeholder</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PickBlank