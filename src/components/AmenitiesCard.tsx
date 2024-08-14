"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import AllAmenitiesPopover from './AllAmenitiesPopover';
import Image from 'next/image';

const amenities = [
    { name: 'Private Pool', image: '/goldenpool.png' },
    { name: 'Leather Recliners', image: '/recliner.png' },
    { name: 'Gym', image: '/gym.png' },
    { name: 'Jacuzzi', image: '/goldenjacuzzi.png' },
    { name: 'Indoor Lounge', image: '/lounge.png' },
    { name: 'Kitchen', image: '/dining.png' },
];

const AmenitiesCard = () => {
    const [isPopoverOpen, setPopoverOpen] = useState(false);

    return (
        <div className="p-6 bg-white rounded-lg">
            <div className="my-6">
                <h1 className="text-black text-3xl m-10 lg:text-5xl text-center">Key Features</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 mb-6">
                {amenities.slice(0, 5).map((amenity, index) => (
                    <Link key={index} href="/PhotoGallery">
                        <div className="flex flex-col  flex-auto items-center space-y-1 cursor-pointer mx-1 my-1 transition-transform transform hover:scale-105">
                            <Image
                                src={amenity.image}
                                alt={amenity.name}
                                className="rounded-lg"
                                width={300}
                                height={300}
                            />
                            <div className="flex items-center space-x-1">
                                <span className="text-xl hover:text-gray-800">{amenity.name}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex justify-center">
                <button
                    style={{ backgroundColor: '#38322f' }}
                    onClick={() => setPopoverOpen(true)}
                    className="inline-flex text-xl items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Show all amenities
                </button>
            </div>
            {isPopoverOpen && (
                <AllAmenitiesPopover onClose={() => setPopoverOpen(false)} />
            )}
        </div>
    );
};

export default AmenitiesCard;
