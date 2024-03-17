import React, { useState } from 'react';
import Auth from './auth';
import { X } from 'lucide-react';
import RaccoonLogin from './RaccoonLogin';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Login = ({ isOpen, setIsOpen }) => {
  const [log, setlog] = useState(false)

  const toggleLogin = () => {
    setIsOpen(!isOpen);
  };

  const signout = () => {
    const auth = getAuth();
    signOut(auth) // Use the signOut method from the auth module
      .then(() => {
        setlog(false); // Update state to reflect the user being signed out
        toggleLogin();
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setlog(true);
    } else {
      setlog(false);
    }
  });

  const closeLogin = () => {
    toggleLogin();
  };

  return (
    <div className="relative">
      <div className="flex justify-end">
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-black opacity-50 z-10" onClick={closeLogin}></div>
      )}

      {/* Login Page */}
      <div className={`fixed top-0 right-0 h-full w-96 z-20 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}  bg-[url('/racbg.png')] bg-screen bg-cover bg-center bg-no-repeat`}>
        <div className="relative">
          <div className="absolute top-[-20px]">
            <RaccoonLogin />
          </div>
          <button className="bg-transparent text-black px-4 py-2 rounded absolute top-0 right-0" onClick={toggleLogin}>
            <X />
          </button>
          <div className="flex flex-col items-center absolute mt-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-white font-sans text-4xl mb-10">Sign in</div>
            <Auth />
            <div className="pt-4 cursor-default hover:cursor-pointer text-gray-200" onClick={signout}>
              Sign Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
