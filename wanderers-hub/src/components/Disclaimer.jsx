import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

const Disclaimer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisclaimer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-end">
        <button className="px-4 py-2 rounded w-[80px] h-[30px]" onClick={toggleDisclaimer}>
          
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-black opacity-50 z-10"></div>
      )}

      {/* Disclaimer Page */}
      <div className={`bg-[url('/disclaimerbg.png')] bg-cover fixed top-0 right-0 h-full w-[470px] z-20 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        <div className="relative">
           <button className="text-black px-4 py-2 rounded absolute top-0 right-0" onClick={toggleDisclaimer}>
            <X />
          </button>
          <div className  = "absolute left-[80px] top-[120px] text-white font-sans font-bold">
            Disclaimer
          </div>
          <div className = "absolute top-[210px] text-white left-1/2 transform -translate-x-1/2 w-[300px] text-left font-sans">
          "The information provided on Travels Hub is generated automatically by AI for informational or entertainment purposes. We advise users to verify details independently as accuracy, completeness, or timeliness cannot be guaranteed. It's recommended to seek qualified expertise or conduct further research before making travel decisions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
