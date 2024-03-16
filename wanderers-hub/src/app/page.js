"use client";
import GoogleMapsComponent from '../app/api/api.jsx';
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
  return (
      <div className="relative h-screen">
        <Homepagebg/>
        <Title/>
        <HomepageText/>
        <Navbar />
        <Button />
        <Login />
      </div>
  );
}
