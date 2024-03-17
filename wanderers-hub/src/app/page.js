"use client";
import GoogleMapsComponent from '../app/api/map.jsx';
import Donut from '@/components/RaccoonLogin.jsx';
import Button from '@/components/Button.jsx';
import Login from '@/components/Login';
import { useRouter } from 'next/navigation';
import './pagestyles.css'
import Navbar from '@/components/Navbar.jsx';
import Homepagebg from '@/components/Homepagebg.jsx';
import Title from '@/components/Title.jsx';
import HomepageText from '@/components/HomepageText.jsx';
export default function Page() {
  const router = new useRouter();
  return (
      <div className="relative h-screen">
        <Homepagebg/>
        <HomepageText/>
        <div className = "absolute top-[425px] left-[125px]">
        <button
  onClick={() => router.push('/picklocation')}
  className="w-[250px] h-[60px] px-7 py-3 bg-gradient-to-b from-orange-400 to-pink-500 rounded-xl border border-blue-400 relative overflow-hidden"
>
<div className="absolute inset-0 bg-gradient-to-t from-blue-400/10 to-transparent"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-transparent"></div>
  <div className="absolute inset-0 bg-gradient-to-l from-blue-400/10 to-transparent"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent"></div>
  <div className="absolute top-4 left-9 text-center text-white text-xl font-medium font-inter leading-tight">
    Start My Journey
  </div>
</button>
        </div>
        <Login />
        <div className = "absolute top-0 left-0">
           <Navbar/>
        </div>
      </div>
  );
}
