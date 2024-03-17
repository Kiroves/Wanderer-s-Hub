"use client";
import GoogleMapsComponent from '../app/api/map.jsx';
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
    <div className="relative h-screen">
      <div>
        <Homepagebg />
      </div>
      <HomepageText />
      <Outer />
      <div className="absolute top-0 left-0">
        <Navbar />
      </div>
    </div>
  );
}
