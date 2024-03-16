import React from 'react'
import { useRouter } from 'next/navigation';

const Button = (props) => {
    const router = useRouter();
    return (
        <button onClick = {props.function} className="absolute top-96 left-48 w-64 h-16 px-7 py-3 bg-gradient-to-b from-purple-500 to-blue-400 rounded-xl shadow-inner border border-blue-700 border-opacity-30 backdrop-blur-lg justify-center items-center gap-3 inline-flex">
            <div className="text-center text-white text-xl font-medium font-['Inter'] leading-tight">{props.text}</div>
        </button>
    )
}

export default Button
