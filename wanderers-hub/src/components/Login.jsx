import React, { useState } from 'react';
import Auth from './auth';
import { X } from 'lucide-react';
import Donut from './Donut';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLogin = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex flex-col justify-center">
      <div className = "flex justify-end">
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={toggleLogin}>
            Login
        </button>
      </div>

      <div className={`fixed top-0 right-0 h-full w-96 bg-white z-10 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className = "flex justify-end">
          <div className="absolute inset-0 z-0">
              <Donut className = "bg-gradient-to-b from-red-400/95 to-white/50"/>
          </div>
          <button className="bg-transparent text-black px-4 py-2 rounded" onClick={toggleLogin}>
            <X/>
          </button>
          <Auth className = "absolute z-10"/>
        </div>
      </div>
    </div>
  );
};

export default Login;
