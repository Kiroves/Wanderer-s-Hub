import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const Imagewheel = ({photos}) => {
    //const photos = ['https://lh3.googleusercontent.com/places/ANXAkqGr1G6nhZn5F7CImt5Gpcj9lAsg0TcsZt4TIz3Yf_RFpKIulFPrhTsmysG_rso6ZLLl0I7BsoBI89u0k3Omm7Hr80AiMm9IdDk=s1600-w1868', 'https://lh3.googleusercontent.com/places/ANXAkqGtnqOQKUYAEaH_apjSCYs1l9nKY33KyrmqTsl5tMQ8Tmv4Ldcob7pDxBELSysLmkHKovDi7XGJ3DBT2A5kmgWQ8BkmrgLpyVQ=s1600-w4000', 'https://lh3.googleusercontent.com/places/ANXAkqGr1G6nhZn5F7CImt5Gpcj9lAsg0TcsZt4TIz3Yf_RFpKIulFPrhTsmysG_rso6ZLLl0I7BsoBI89u0k3Omm7Hr80AiMm9IdDk=s1600-w1868', 'https://lh3.googleusercontent.com/places/ANXAkqGtnqOQKUYAEaH_apjSCYs1l9nKY33KyrmqTsl5tMQ8Tmv4Ldcob7pDxBELSysLmkHKovDi7XGJ3DBT2A5kmgWQ8BkmrgLpyVQ=s1600-w4000'];
    const [aspectRatios, setAspectRatios] = useState([]);

    useEffect(() => {
        const fetchAspectRatios = async () => {
            try {
                const ratios = await Promise.all(photos.map(photo =>
                    new Promise((resolve, reject) => {
                        const img = new Image();
                        img.onload = () => resolve(img.width / img.height);
                        img.onerror = reject;
                        img.src = photo;
                    })
                ));
                setAspectRatios(ratios);
            } catch (error) {
                console.error("Error fetching aspect ratios:", error);
            }
        };

        if (photos.length > 0) {
            fetchAspectRatios();
        }
    }, [photos]);

    return (
        <div className="pl-16 pt-10 text-white">
            <Carousel className="w-[220px]">
                <CarouselContent>
                    {photos.map((photo, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-[0.1px] overflow-hidden">
                                        <div className={`w-full h-full object-cover overflow-hidden rounded-xl ${aspectRatios[index] > 1 ? 'flex justify-center' : ''} `} >
                                            <img src={photo} alt="Example Image" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default Imagewheel;
