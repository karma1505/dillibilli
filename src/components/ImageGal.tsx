'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import '../app/globals.css'; // Ensure correct import path

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

const media: MediaItem[] = [
  { type: 'video', src: '/videovilla1.mp4', alt: 'The Dilli House Experience' },
  { type: 'image', src: '/downstairs.JPG', alt: 'The Dilli House', title: 'Unlock Your Creative Mind', subtitle: 'Try Your Hand At Poetry Or Painting' },
  { type: 'image', src: '/droneshoot.JPG', alt: 'The Dilli House', title: 'Breathtaking Views', subtitle: 'Perfect For Your Social Profiles' },
  { type: 'image', src: '/kitchen.JPG', alt: 'The Dilli House', title: 'Dine At The Royal Kitchen Of Dilli House', subtitle: 'With Ranging Over From 5 Different Cuisine Styles' },
  { type: 'image', src: '/pool2.JPG', alt: 'The pool view', title: 'The Pool', subtitle: 'Experience The Serene Ambiance Of Our Pool At The Golden Hour.' },
  { type: 'image', src: '/outdoor.jpg', alt: 'Outdoor Sitting', title: 'Veranda Retreat', subtitle: 'Perfect for BBQ, Music, And Fun Activities.' },

];

const ImageGallery: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % media.length);
    }, media[currentSlide].type === 'video' ? 20000 : 5000); // 20 seconds for video, 5 seconds for images
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleVideoEnded = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % media.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % media.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + media.length) % media.length);
  };

  return (
    <div className="relative w-full  mt-20">
      <div className="relative overflow-hidden lg:h-[700px] md:h-[500px] h-[300px] bg-black" ref={carouselRef}>
        {media.map((item, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            {item.type === 'image' ? (
              <div className="relative w-full h-full">
                <Image src={item.src} alt={item.alt} fill style={{ objectFit: 'cover' }} />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center p-6 rounded-lg text-white font-alike">
                  <h3 className="text-base md:text-3xl">{item.title}</h3>
                  <p className="text-sm md:text-lg mt-1">{item.subtitle}</p>
                </div>
              </div>
            ) : (
              <video
                className="w-full h-full object-cover"
                src={item.src}
                autoPlay
                muted
                onEnded={handleVideoEnded}
              />
            )}
          </div>
        ))}
        <button
          onClick={handlePrevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full"
          aria-label="Previous slide"
        >
          &#9664;
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full"
          aria-label="Next slide"
        >
          &#9654;
        </button>
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