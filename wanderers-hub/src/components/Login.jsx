import React, { useState } from 'react';
import Auth from './auth';
import { X } from 'lucide-react';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLogin = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className = "flex justify-end">
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={toggleLogin}>
            Login
        </button>
      </div>

      <div className={`fixed top-0 right-0 h-full w-64 bg-white z-10 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className = "flex justify-end">
          <button className="bg-transparent text-black px-4 py-2 rounded" onClick={toggleLogin}>
            <X/>
          </button>
        </div>
        <Auth/>
      </div>
    </div>
  );
};

export default Login;
