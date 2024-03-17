"use client";
import GoogleMapsComponent from '../components/map.jsx';
import Donut from '@/components/RaccoonLogin.jsx';
import Button from '@/components/Button.jsx';
import Login from '@/components/Login';
import './pagestyles.css'
import Navbar from '@/components/Navbar.jsx';
import Homepagebg from '@/components/Homepagebg.jsx';
import Title from '@/components/Title.jsx';
import HomepageText from '@/components/HomepageText.jsx';
import HomeButton from '@/components/HomeButton.jsx';
import Outer from '@/components/Outer.jsx';
export default function Page() {
  return (
    <div className="bg-[url('/bg.png')] bg-screen bg-cover bg-center bg-no-repeat relative h-screen">
      <div className = "absolute left-[30px]">
        <div className = "absolute top-[80px] left-[30px]">
          <Homepagebg />
        </div>
        <div className = "absolute left-[15px] top-[15px]">
          <HomepageText />
          <div className = "absolute left-[-15px] top-[-15px]">
            <Outer />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0">
        <Navbar />
      </div>
    </div>
  );
}
