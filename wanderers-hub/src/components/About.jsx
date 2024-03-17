import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAbout = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-end">
        <button className="px-4 py-2 rounded w-[60px] h-[30px]" onClick={toggleAbout}>
          
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-black opacity-50 z-10"></div>
      )}

      {/* About Page */}
      <div className={`bg-[url('/aboutbg.png')] bg-cover fixed top-0 right-0 h-full w-[470px] z-20 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        <div className="relative">
           <button className="text-black px-4 py-2 rounded absolute top-0 right-0" onClick={toggleAbout}>
            <X />
          </button>
          <div className  = "absolute left-[80px] top-[120px] text-white font-sans">
            Welcome to 
          </div>
          <div className = "absolute left-[73px] top-[60px]">
            <Image src = "/title.png" width = {250} height = {100}/>
           </div>
          <div className = "absolute top-[210px] text-white left-1/2 transform -translate-x-1/2 w-[300px] text-left font-sans">
            Our travelling destination and activities website utilizes AI technology to offer personalized recommendations for your next adventure. Whether you seek cultural immersion, outdoor escapades, or urban exploration, our platform analyzes your preferences to suggest tailored destinations and activities, ensuring unforgettable travel experiences. From our website you can also conveniently book a vacation to your dream destination. 
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
