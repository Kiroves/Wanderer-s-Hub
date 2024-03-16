"use client";
import Button from '@/components/Button';
import Donut from '@/components/Donut';
import Login from '@/components/Login';
export default function Page() {

  return (
    <div className="relative h-screen">
      <Donut />
      <Button />
      <Login/>
    </div>
  );
}
