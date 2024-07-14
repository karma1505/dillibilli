'use client';
import React, { useRef, useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

const media = [
    { type: 'image', src: '/nameplate.JPG', alt: "The Dilli House", title: "Your Himalayan Escape", subtitle: "Welcome To The Dilli House" },
    { type: 'image', src: '/downstairs.JPG', alt: "The Dilli House", title: "Unlock Your Creative Mind", subtitle: "Try Your Hand At Poetry Or Painting" },
    { type: 'image', src: '/droneshot.JPG', alt: "The Dilli House", title: "Breathtaking Views", subtitle: "Perfect For Your Social Profiles" },
    { type: 'image', src: '/kitchen.JPG', alt: "The Dilli House", title: "Dine At The Royal Kitchen Of Dilli House", subtitle: "With Ranging From Over 5 Different Cuisine Styles" },
    { type: 'image', src: '/pool.jpg', alt: "Evening pool view", title: "Evening Pool View", subtitle: "Experience The Serene Ambiance Of Our Pool At The Golden Hour." },
    { type: 'image', src: '/outdoor.jpg', alt: "Outdoor Sitting", title: "Veranda Retreat", subtitle: "Perfect for BBQ, Music, And Fun Activities." },
    { type: 'video', src: '/videovilla.mp4', alt: "The Dilli House Experience" }
];

const ImageGallery: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const isVideo = media[currentSlide].type === 'video';
            setCurrentSlide((prevSlide) => (prevSlide + 1) % media.length);
        }, media[currentSlide].type === 'video' ? 10000 : 5000); // 10 seconds for video, 5 seconds for images
        return () => clearInterval(interval);
    }, [currentSlide]);

    const handleVideoEnded = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % media.length);
    };

    return (
        <div className="relative w-full ">
            <div className="relative overflow-hidden h-[700px] bg-black" ref={carouselRef}>
                {media.map((item, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {item.type === 'image' ? (
                            <>
                                <img src={item.src} alt={item.alt} className="w-full h-full object-cover opacity-100" />
                                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center p-6 rounded-lg text-white">
                                    <h3 className="text-2xl font-bold">{item.title}</h3>
                                    <p className="text-lg mt-2">{item.subtitle}</p>
                                </div>
                            </>
                        ) : (
                            <video
                                className="w-full h-full object-cover opacity-100"
                                src={item.src}
                                autoPlay
                                muted
                                onEnded={handleVideoEnded}
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {media.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 mx-1 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
