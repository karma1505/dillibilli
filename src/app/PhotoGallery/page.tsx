"use client";
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Section {
    title: string;
    features?: string[];
    images: string[];
}


const sections: Section[] = [
    { 
        title: 'Dining Area', 
        images: ['/dining.jpg'] 
    },
    { 
        title: 'The Golden Bedroom', 
        features: ['King Bed', 'Floor Mattresses', 'Linen Bedsheets', 'Jacuzzi', 'Private Pool'],
        images: ['/golden.jpg', '/goldenjacuzzi.JPG', '/goldenpool.JPG', '/golden2.jpg'] 
    },
    { 
        title: 'The Silver Bedroom', 
        features: ['King Bed', 'Study Table', 'Panoramic View', 'Recliner'] ,
        images: ['/silver.jpg', '/silver2.jpg', '/silver3.jpg'] 
    },
    { 
        title: 'The Bronze Bedroom', 
        features: ['King Bed', 'Floor Mattresses', 'Sofa-cum-Bed', 'Private Balcony'] ,
        images: ['/bronze.jpg', '/bronze2.jpg', '/bronze3.jpg', '/scb.jpg'] 
    },
    { 
        title: 'Additional Photos', 
        images: ['/tennis.JPG', '/droneshoot.JPG', '/gym.jpg', '/lounge.jpg'] 
    },
];

const PhotoGallery: React.FC = () => {
    const sectionRefs = useRef<HTMLDivElement[]>(Array(sections.length).fill(null));

    useEffect(() => {
        const handleScroll = () => {
            const headings = document.querySelectorAll('.sticky-heading');

            sectionRefs.current.forEach((sectionRef, index) => {
                const rect = sectionRef?.getBoundingClientRect();
                if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
                    headings.forEach(heading => heading.classList.remove('active'));
                    if (headings[index]) {
                        headings[index].classList.add('active');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex max-w-screen-xl mx-auto px-4 py-8 mt-16">
            <div className="w-full lg:w-3/4">
                {sections.map((section, index) => (
                    <div key={index} ref={el => sectionRefs.current[index] = el} className="mb-8">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                            {/* Left Side - Sticky Heading (Hidden on Mobile) */}
                            <div className="col-span-1 hidden lg:block">
                                <div className="sticky top-20">
                                    <h2 className="text-xl font-semibold sticky-heading transition-opacity duration-300">
                                        {section.title}
                                    </h2>
                                    {section.features && (
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="mt-2 text-sm text-gray-500"
                                        >
                                            {section.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center space-x-2">
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                            {/* Title (Visible on Mobile) */}
                            <div className="col-span-1 lg:hidden">
                                <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                                {section.features && (
                                    <div className="text-sm text-gray-500">
                                        {section.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center space-x-2">
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {/* Images */}
                            <div className="col-span-1 lg:col-span-3">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    {section.images.map((image, imgIndex) => (
                                        <motion.div
                                            key={imgIndex}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="rounded-lg overflow-hidden"
                                        >
                                            <Image
                                                src={image}
                                                alt={section.title}
                                                layout="responsive"
                                                width={1000}
                                                height={667}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;
