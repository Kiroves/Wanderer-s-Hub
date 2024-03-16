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

    <div className="relative">
      <div className="flex justify-end">
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={toggleLogin}>
          Login
        </button>
      </div>

      <div className={`fixed top-0 right-0 h-full w-96 z-10 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="relative">
          <Donut />
          <button className="bg-transparent text-black px-4 py-2 rounded absolute top-0 right-0" onClick={toggleLogin}>
            <X />
          </button>
          <div className = "flex flex-col items-center absolute mt-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className = "text-white font-sans text-4xl mb-10">Sign in</div>
            <Auth/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
