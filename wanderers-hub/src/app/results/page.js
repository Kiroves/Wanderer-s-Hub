"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Results from '@/components/results';

export default function Page() {
    return (
        <Results />

    )
}