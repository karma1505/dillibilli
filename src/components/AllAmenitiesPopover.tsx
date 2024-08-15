"use client";

import React from 'react';

type Amenity = {
    name: string;
};

type Amenities = {
    'Scenic views': Amenity[];
    'Bathroom': Amenity[];
    'Bedroom and laundry': Amenity[];
    'Entertainment': Amenity[];
    'Heating and cooling': Amenity[];
    'Home safety': Amenity[];
    'Internet and office': Amenity[];
    'Kitchen and dining': Amenity[];
    'Outdoor': Amenity[];
    'Parking and facilities': Amenity[];
    'Services': Amenity[];
    'Not included': Amenity[];
};

const allAmenities: Amenities = {
    'Scenic views': [
        { name: 'Mountain view' },
        { name: 'Valley view' }
    ],
    Bathroom: [
        { name: 'Bath' },
        { name: 'Hair dryer' },
        { name: 'Shampoo' },
        { name: 'Conditioner' },
        { name: 'Body soap' },
        { name: 'Bidet' },
        { name: 'Hot water' },
        { name: 'Shower gel' }
    ],
    'Bedroom and laundry': [
        { name: 'Washing machine' },
        { name: 'Essentials' },
        { name: 'Towels, bed sheets, soap and toilet paper' },
        { name: 'Hangers' },
        { name: 'Bed linen' },
        { name: 'Extra pillows and blankets' },
        { name: 'Room-darkening blinds' },
        { name: 'Iron' },
        { name: 'Clothes storage' }
    ],
    Entertainment: [
        { name: 'TV' },
        { name: 'Exercise equipment' },
        { name: 'Pool table' },
        { name: 'Books and reading material' }
    ],
    'Heating and cooling': [
        { name: 'Air conditioning' },
        { name: 'Ceiling fan' },
        { name: 'Heating' }
    ],
    'Home safety': [
        { name: 'Exterior security cameras on property' },
        { name: 'Fire extinguisher' },
        { name: 'First aid kit' }
    ],
    'Internet and office': [
        { name: 'Wifi' },
        { name: 'Dedicated workspace' }
    ],
    'Kitchen and dining': [
        { name: 'Kitchen' },
        { name: 'Space where guests can cook their own meals' }
    ],
    Outdoor: [
        { name: 'Firepit' },
        { name: 'Outdoor dining area' },
        { name: 'BBQ grill' }
    ],
    'Parking and facilities': [
        { name: 'Free parking on premises' },
        { name: 'Pool' },
        { name: 'Hot tub' }
    ],
    Services: [
        { name: 'Smoking allowed' }
    ],
    'Not included': [
        { name: 'Unavailable: Dryer' }
    ]
};

type AllAmenitiesPopoverProps = {
    onClose: () => void;
};

const AllAmenitiesPopover: React.FC<AllAmenitiesPopoverProps> = ({ onClose }) => {
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" 
            onClick={handleOverlayClick}
        >
            <div className="relative bg-white rounded-lg shadow-lg w-11/12 max-w-2xl h-3/5 overflow-y-auto">
                <div className="sticky top-0 p-4 bg-white">
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-6">
                    {Object.keys(allAmenities).map((category) => (
                        <div key={category} className="mb-4">
                            <h3 className="text-xl font-semibold mb-2 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                            <ul className="grid grid-cols-2 gap-4">
                                {allAmenities[category as keyof Amenities].map((amenity, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <span>{amenity.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllAmenitiesPopover;
