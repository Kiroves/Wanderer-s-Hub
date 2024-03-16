"use client";
import GoogleMapsComponent from '../app/api/api.jsx';
import Donut from '@/components/Donut';
import Button from '@/components/Button.jsx';
import Login from '@/components/Login';
import { useRouter } from 'next/navigation';
import './pagestyles.css'

export default function Page() {
  return (
    <div class="background">
      <div className="relative h-screen">
        <GoogleMapsComponent />
        <Button/>
        <Login />
      </div></div>
  );
}
