import React, { useState } from 'react';

const MeetAnimals = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMeetAnimals = () => {
    setIsOpen(!isOpen);
  };

  const closeMeetAnimals = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex justify-end">
        <button className="px-4 py-2 rounded w-[80px] h-[30px]" onClick={toggleMeetAnimals}></button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-black opacity-50 z-10" onClick={closeMeetAnimals}></div>
      )}

      <div className={`bg-[url('/meetanimals.png')] bg-cover fixed top-0 right-0 h-full w-[470px] z-20 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      </div>
    </div>
  );
};

export default MeetAnimals;
