import React from 'react'
import { useRouter } from 'next/navigation';

const Button = (props) => {
    const router = useRouter();
    return (
        <button onClick={props.function} className=" w-56 h-14 px-7 py-3 bg-gradient-to-b from-orange-400/20 to-pink-500/20  rounded-xl border border-blue-400 shadow shadow-blue-400 border-opacity-90 backdrop-blur-lg justify-center items-center gap-3 inline-flex">
            <div className="text-center text-white text-md font-medium font-inter leading-tight">{props.text}</div>
        </button>
    )
}

export default Button
