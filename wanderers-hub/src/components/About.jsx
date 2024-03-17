import React, { useState } from 'react';
import Image from 'next/image';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAbout = () => {
    setIsOpen(!isOpen);
  };

  const closeAbout = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex justify-end">
        <button className="px-4 py-2 rounded w-[60px] h-[30px]" onClick={toggleAbout}></button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-black opacity-50 z-10" onClick={closeAbout}></div>
      )}

      {/* About Page */}
      <div className={`bg-[url('/aboutbg.png')] bg-cover fixed top-0 right-0 h-full w-[470px] z-20 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      </div>
    </div>
  );
};

export default About;
