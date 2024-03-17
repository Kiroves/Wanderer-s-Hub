"use client";
import GoogleMapsComponent from '../app/api/map.jsx';
import Donut from '@/components/RaccoonLogin.jsx';
import Button from '@/components/Button.jsx';
import Login from '@/components/Login';
import { useRouter } from 'next/navigation';
import './pagestyles.css'
import Navbar from '@/components/navbar.jsx';
import Homepagebg from '@/components/Homepagebg.jsx';
import Title from '@/components/Title.jsx';
import HomepageText from '@/components/HomepageText.jsx';
import TestButton from '@/components/apiTestButton.jsx';

export default function Page() {
  const router = new useRouter();
  return (
      <div className="relative h-screen">
        <Homepagebg/>
        <HomepageText/>
        <Navbar />
        <div className = "absolute top-[425px] left-[125px]">
          <Button text = "Start My Journey" function = {() => router.push('./picklocation')}/>
        </div>
        <Login />
        <div className = "absolute top-[-100px] left-[95px]">
          <Title />
        </div>
      </div>
  );
}
