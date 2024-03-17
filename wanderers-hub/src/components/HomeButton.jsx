import React from 'react'
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Image from 'next/image';

const HomeButton = ({ open, isOpen }) => {
    const router = new useRouter();
    const handleClick = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                isOpen(!open);
            } else {
                isOpen(!open);
            }
        });

    };

    return (
        <div>
        <div className = "absolute top-[-21px] left-[-29px] w-[310px]">
            <Image src = {'/homebutton.png'} width = {600} height = {150}/>
        </div>   
        <button
            onClick={handleClick}
            className="w-[250px] h-[60px] px-7 py-3 bg-transparent from-orange-400 to-pink-500 rounded-xlrelative overflow-hidden"
        >
            <div className="absolute w-[250px] h-[60px] top-[3px] left-2 text-center text-transparent text-xl font-medium font-inter leading-tight">
                Start My Journey
            </div>
        </button>
        </div>
    )
}

export default HomeButton
