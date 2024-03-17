import React from 'react'
import Image from 'next/image'
import { MoveRight } from 'lucide-react';

const Navbar = () => {
    return (
        <div>
        <div className = 'absolute top-[-107px] left-[90px]'>
            <Image src="/title.png" width={350} height={20} />
        </div>
        <div className = 'absolute left-[1134px] top-[25px] w-[210px] h-11 bg-[#757683] rounded'></div>
        <div className='flex flex-col relative top-9 left-[550px] items-center h-[60px] text-[#757683] font-inter font-semibold'>
        <div className='w-[800px] flex justify-between items-center'>
            <div className='text-center'>
                About
            </div>
            <div className='text-center'>
                Meet the Animals
            </div>
            <div className='text-center'>
                Disclaimer
            </div>
            <div className='text-center'>
                Contact
            </div>
            <div className='flex items-center text-white h-full px-4'>
                <div className='flex-1 text-center'>Support this Project</div>
                <div className='ml-2'><MoveRight /></div>
            </div>
        </div>
</div>
</div>

    )
}

export default Navbar
