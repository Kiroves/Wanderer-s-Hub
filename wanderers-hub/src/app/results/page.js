"use client";
import React, { useState } from 'react';
import Light from '@/components/Light';
import Results from '@/components/results';
import Resultsbox from '@/components/ResultsBox';
import ResultsAnimals from '@/components/ResultsAnimals';

export default function Page() {
    return (
        <div className="relative bg-[url('/resultsbg.png')] bg-screen bg-cover bg-center bg-no-repeat h-screen">
            <ResultsAnimals />
            <div className="absolute">
                <Results />
            </div>
            {/* Raccoon */}
            <div className="absolute left-[800px] top-[70px]">
                <Light />
            </div>
             <Resultsbox />
        </div>
    );
}
