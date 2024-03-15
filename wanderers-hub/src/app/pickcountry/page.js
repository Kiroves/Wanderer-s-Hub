"use client";
import React, { useState } from 'react';
import PickBlank from '@/components/PickBlank';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [stage, setStage] = useState('country');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const router = useRouter();
  return (
    <>
      <PickBlank />
    </>
  )
}
