"use client";
import React, { useState } from 'react';
import PickBlank from '@/components/PickBlank';
import { useRouter } from 'next/navigation';

export default function Page(){
  const [stage, setStage] = useState('country');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const router = useRouter();
  const handleCountryChange = (val) => {
    setCountry(val);
  }

  const handleCityChange = (val) => {
    setCity(val);
  }

  const changeStage = () => {
    if(stage === 'country'){
      console.log(country);
      setStage('city');
    }
    else if(stage === 'city'){
      console.log(city);
      setStage('country');
    }
  }

  const getResults = () => {
    //gets results
  }
  return (
    <div>
    {stage === 'country' && (
      <div>
        <PickBlank blank="country" onBackClick = {() => router.push('/')} onNextClick={changeStage} onSelectBlank = {handleCountryChange} />
      </div>
    )}

    {stage === 'city' && (
      <div>
        <PickBlank blank="city" onBackClick = {changeStage} onNextClick = {getResults} onSelectBlank = {handleCityChange}/>
      </div>
    )}
  </div>
  )
}
