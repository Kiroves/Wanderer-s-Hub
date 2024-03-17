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
export default function Page() {
  const router = new useRouter();
  return (
    <div className="relative h-screen">
      <Homepagebg />
      <Title />
      <HomepageText />
      <Navbar />
      <div className="absolute top-[450px] left-[250px]">
        <Button text="Get Started" function={() => router.push('./picklocation')} />
      </div>
      <Login />
    </div>
  );
}
