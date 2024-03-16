import React from 'react'
import { useRouter } from 'next/navigation';
import searchPlace from '../app/api/api.jsx';

const Button = () => {
    const router = useRouter();
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button onClick={searchPlace('Vancouver')} className="bg-green-500 text-white px-4 py-2 rounded-full">go</button>
        </div>
    )
}

export default Button
