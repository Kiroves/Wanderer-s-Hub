import React, { useState } from 'react';
import { X } from 'lucide-react';

const Disclaimer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisclaimer = () => {
    setIsOpen(!isOpen);
  };

  const closeDisclaimer = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex justify-end">
        <button className="px-4 py-2 rounded w-[80px] h-[30px]" onClick={toggleDisclaimer}></button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-black opacity-50 z-10" onClick={closeDisclaimer}></div>
      )}

      <div className={`bg-[url('/disclaimerbg.png')] bg-cover fixed top-0 right-0 h-full w-[470px] z-20 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      </div>
    </div>
  );
};

export default Disclaimer;
