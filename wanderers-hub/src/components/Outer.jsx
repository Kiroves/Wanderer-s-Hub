import React from 'react'
import HomeButton from './HomeButton'
import Login from './Login'
import { useState } from 'react';
const Outer = () => {
    const [open, isOpen] = useState(false);
    return (
        <div>
            <div className="absolute top-[425px] left-[125px]">
                <HomeButton open={open} isOpen={isOpen} />
            </div>
            <Login isOpen={open} setIsOpen={isOpen} />
        </div>
    )
}

export default Outer
