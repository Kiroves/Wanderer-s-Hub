import React from 'react'
import Image from 'next/image'
import { MoveRight } from 'lucide-react';
import About from './About';
import Disclaimer from './Disclaimer';
const Navbar = () => {
    return (
        <div>
            <div className='absolute top-[-107px] left-[90px]'>
                <Image src="/title.png" width={350} height={20} />
            </div>
            <div className='absolute left-[1134px] top-[25px] w-[210px] h-11 bg-[#757683] rounded'></div>
            <div className='flex flex-col relative top-9 left-[550px] items-center h-[60px] text-[#757683] font-inter font-semibold'>
                <div className='w-[800px] flex justify-between items-center'>
                    <div className="relative text-center">
                        <div>About</div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <About />
                        </div>
                    </div>

                    <div className='text-center'>
                        Meet the Animals
                    </div>
                    <div className="relative text-center">
                        <div>Disclaimer</div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <Disclaimer />
                        </div>
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
