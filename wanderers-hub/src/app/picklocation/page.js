"use client";
import React, { useState } from 'react';
import PickBlank from '@/components/PickBlank';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page() {
  return (
    <>
      <ToastContainer />
      <PickBlank />
    </>
  )
}
