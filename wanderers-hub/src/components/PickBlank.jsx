import React, { useState } from 'react'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import TextBox from './TextBox';

const PickBlank = ( {blank, onBackClick, onNextClick, onSelectBlank} ) => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');

    const selectCountry = (val) => {
        setCountry(val);
        onSelectBlank(val);
    }

    const selectCity = (val) => {
        setCity(val);
        onSelectBlank(val);

    }


    return (
        <div className="flex justify-center items-center h-screen">
            <div className = "relative">
                <div className = "border border-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 flex flex-col items-center">
                    <div className = "text-black mt-24"> 
                        Pick a {blank}
                    </div>
                    {blank === 'country' ? (
                    <div className = "flex flex-col">
                        <CountryDropdown value = {country} onChange = {(val) => selectCountry(val)} className = "w-48 h-12 mt-5 mb-5"/>
                        <button onClick = {onNextClick}>Next</button>
                        <button onClick = {onBackClick}>Back</button>
                    </div>
                    ) : blank == 'city' ? (
                    <div className = "flex flex-col">
                        <form className = "flex flex-col mt-3" onSubmit = {(val) => selectCity(val)}>
                            <input className = "border border-black mb-2"/>
                            <button type = "submit" onClick = {onNextClick}>Next</button>
                        </form>
                        <button className = "mt-5" onClick = {onBackClick}>Back</button>
                    </div>
                    ): (
                     <div>not city or country</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PickBlank