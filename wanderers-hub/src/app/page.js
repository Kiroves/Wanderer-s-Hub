"use client";
import GoogleMapsComponent from '../app/api/api.jsx';
import Donut from '@/components/Donut';
import Login from '@/components/Login';
import { useRouter } from 'next/navigation';

export default function Page() {

  return (
    <div className="relative h-screen">
      <GoogleMapsComponent />
      <Login/>
      <div className="absolute top-0 left-0">
            <button onClick={() => console.log("hi")} className="bg-green-500 text-white px-4 py-2 rounded-full">test</button>
        </div>
    </div>
  );
}
