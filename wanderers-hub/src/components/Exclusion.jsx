import React, { useState } from 'react'
import Button from './Button'
import Image from 'next/image';
import Exclude from './Exclude';
import { useRouter } from 'next/navigation';
const Exclusion = () => {
    const router = useRouter();
    const [countries, setCountries] = useState([])
    const saveCountries = (val) => {
        setCountries(val);
    }
    const returnHome = () => {
        router.push('/');
    }
    const final = () => {
        const labels = countries.map(country => country.label);
        sessionStorage.setItem('no', labels);
        console.log(labels);
        router.push('/results');
    }
    return (
        <div className="bg-[url('/blurrybg.png')] bg-cover bg-center bg-no-repeat h-screen">
            <div className="w-[480px] h-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-10 rounded-2xl border border-white border-opacity-20">
                <div className="w-96 text-white text-3xl font-semibold ml-6 pt-6 pb-4">
                    Help us Optimize Your Experience
                </div>
                <div className="w-96 text-white text-md pl-6">
                    <div className='pb-6'>
                        Are there any destinations you would like us to exclude from your results? Select all that apply, then press ‘Next’
                    </div>
                    <Exclude func={saveCountries} />
                    <div className='pt-2 pb-16 font-inter text-sm'>
                        *If none apply, simply press next
                    </div>
                    {/*send countries to gabe*/}
                    <Button function={final} text="Next" />
                    <div className="pt-12 flex flex-row cursor-default hover:cursor-pointer" onClick={returnHome}>
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
    )
}

export default Exclusion