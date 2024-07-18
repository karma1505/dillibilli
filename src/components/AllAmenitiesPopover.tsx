"use client";

import React from 'react';
import { XIcon } from '@heroicons/react/outline';
import {
    WifiIcon,
    FireIcon,
    DeviceMobileIcon,
    SparklesIcon,
    UserGroupIcon,
    BookOpenIcon,
    GlobeAltIcon,
    ShieldCheckIcon,
    MusicNoteIcon,
    DeviceTabletIcon,
    DocumentTextIcon,
    BriefcaseIcon,
    CubeIcon,
    SunIcon,
    UsersIcon,
    TruckIcon,
    CakeIcon,
    LightBulbIcon,
} from '@heroicons/react/outline';


const allAmenities = {
    'Scenic views': [
        { name: 'Mountain view', icon: SunIcon },
        { name: 'Valley view', icon: GlobeAltIcon }
    ],
    Bathroom: [
        { name: 'Bath', icon: SparklesIcon },
        { name: 'Hair dryer', icon: FireIcon },
        { name: 'Shampoo', icon: DocumentTextIcon },
        { name: 'Conditioner', icon: DocumentTextIcon },
        { name: 'Body soap', icon: CubeIcon },
        { name: 'Bidet', icon: DeviceTabletIcon },
        { name: 'Hot water', icon: FireIcon },
        { name: 'Shower gel', icon: SparklesIcon }
    ],
    'Bedroom and laundry': [
        { name: 'Washing machine', icon: DeviceTabletIcon },
        { name: 'Essentials', icon: BriefcaseIcon },
        { name: 'Towels, bed sheets, soap and toilet paper', icon: BriefcaseIcon },
        { name: 'Hangers', icon: UserGroupIcon },
        { name: 'Bed linen', icon: BriefcaseIcon },
        { name: 'Extra pillows and blankets', icon: CubeIcon },
        { name: 'Room-darkening blinds', icon: SunIcon },
        { name: 'Iron', icon: WifiIcon },
        { name: 'Clothes storage', icon: TruckIcon }
    ],
    Entertainment: [
        { name: 'TV', icon: WifiIcon },
        { name: 'Exercise equipment', icon: DeviceMobileIcon },
        { name: 'Pool table', icon: WifiIcon },
        { name: 'Books and reading material', icon: BookOpenIcon }
    ],
    'Heating and cooling': [
        { name: 'Air conditioning', icon: SunIcon },
        { name: 'Ceiling fan', icon: SunIcon },
        { name: 'Heating', icon: FireIcon }
    ],
    'Home safety': [
        { name: 'Exterior security cameras on property', icon: ShieldCheckIcon },
        { name: 'Fire extinguisher', icon: WifiIcon },
        { name: 'First aid kit', icon: BriefcaseIcon }
    ],
    'Internet and office': [
        { name: 'Wifi', icon: WifiIcon },
        { name: 'Dedicated workspace', icon: BriefcaseIcon }
    ],
    'Kitchen and dining': [
        { name: 'Kitchen', icon: WifiIcon },
        { name: 'Space where guests can cook their own meals', icon: WifiIcon }
    ],
    Outdoor: [
        { name: 'Firepit', icon: FireIcon },
        { name: 'Outdoor dining area', icon: UserGroupIcon },
        { name: 'BBQ grill', icon: SparklesIcon }
    ],
    'Parking and facilities': [
        { name: 'Free parking on premises', icon: WifiIcon },
        { name: 'Pool', icon: WifiIcon },
        { name: 'Hot tub', icon: WifiIcon }
    ],
    Services: [
        { name: 'Smoking allowed', icon: FireIcon }
    ],
    'Not included': [
        { name: 'Unavailable: Dryer', icon: ShieldCheckIcon }
    ]
};

const AllAmenitiesPopover = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg w-11/12 max-w-2xl h-3/5 overflow-y-auto">
                <div className="absolute top-2 right-2">
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <XIcon className="h-6 w-6" />
                    </button>
                </div>
                <div className="p-6">
                    {Object.keys(allAmenities).map((category) => (
                        <div key={category} className="mb-4">
                            <h3 className="text-xl font-semibold mb-2 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                            <ul className="grid grid-cols-2 gap-4">
                                {allAmenities[category].map((amenity, index) => {
                                    const Icon = amenity.icon;
                                    return (
                                        <li key={index} className="flex items-center space-x-2">
                                            <Icon className="h-5 w-5 text-gray-500" />
                                            <span>{amenity.name}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllAmenitiesPopover;
