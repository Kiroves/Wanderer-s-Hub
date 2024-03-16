"use client";
import Button from '@/components/Button';
import Donut from '@/components/Donut';
import Login from '@/components/Login';
import { useRouter } from 'next/navigation';

export default function Page() {

  return (
    <div className="relative h-screen">
      <Donut />
      <Button />
      <Login/>
      <div className="absolute top-0 left-0">
            <button onClick={() => console.log("hi")} className="bg-green-500 text-white px-4 py-2 rounded-full">test</button>
        </div>
    </div>
  );
}
