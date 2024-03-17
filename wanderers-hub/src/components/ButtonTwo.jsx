import React from 'react'
import { useRouter } from 'next/navigation';

const ButtonTwo = (props) => {
    const router = useRouter();
    return (
        <button onClick={props.function} className=" w-[130px] h-12 px-4 py-3 bg-gradient-to-b from-blue-400/50 to-pink-500/50  rounded-xl border border-blue-400 shadow shadow-blue-400 border-opacity-90 backdrop-blur-lg justify-center items-center gap-3 inline-flex">
            <div className="text-center text-white text-sm font-medium font-inter leading-tight">{props.text}</div>
        </button>
    )
}

export default ButtonTwo
