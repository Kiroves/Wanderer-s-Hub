"use client";
import Button from '@/components/Button';
import Donut from '@/components/Donut';
import Login from '@/components/Login';
import { useRouter } from 'next/navigation';
import './pagestyles.css'

export default function Page() {
  return (
    <div class="background">
      <div className="relative h-screen">
        <Button />
        <Login />
        <div className="absolute top-0 left-0">
          <button onClick={() => console.log("hi")} className="bg-green-500 text-white px-4 py-2 rounded-full">test</button>
        </div>
      </div></div>
  );
}
