import React from 'react'
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
        <button
            onClick={handleClick}
            className="w-[250px] h-[60px] px-7 py-3 bg-gradient-to-b from-orange-400 to-pink-500 rounded-xl border border-blue-400 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-400/10 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-blue-400/10 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent"></div>
            <div className="absolute top-4 left-9 text-center text-white text-xl font-medium font-inter leading-tight">
                Start My Journey
            </div>
        </button>
    )
}

export default HomeButton
